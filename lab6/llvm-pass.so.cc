#include "llvm/Passes/PassPlugin.h"
#include "llvm/Passes/PassBuilder.h"
#include "llvm/IR/IRBuilder.h"
#include "llvm/IR/Constants.h"

using namespace llvm;

struct LLVMPass : public PassInfoMixin<LLVMPass> {
  PreservedAnalyses run(Module &M, ModuleAnalysisManager &MAM);
};

PreservedAnalyses LLVMPass::run(Module &M, ModuleAnalysisManager &MAM) {
  LLVMContext &Ctx = M.getContext();
  IntegerType *Int32Ty = IntegerType::getInt32Ty(Ctx);
  FunctionCallee debug_func = M.getOrInsertFunction("debug", Int32Ty);
  ConstantInt *debug_arg = ConstantInt::get(Int32Ty, 48763);

  // 尋找 main 函數
  Function *MainFunc = M.getFunction("main");
  if (!MainFunc) return PreservedAnalyses::none();

  // 創建 IRBuilder
  IRBuilder<> Builder(Ctx);

  // 在 main 函數的入口處插入指令
  BasicBlock &EntryBB = MainFunc->getEntryBlock();
  Builder.SetInsertPoint(&EntryBB, EntryBB.begin());

  // 1. 修改 argc
  // 獲取 main 函數的 argc 參數（第一個參數）
  Argument *ArgcPtr = &*MainFunc->arg_begin();
  // 在 stack 上分配空間來存儲修改後的值
  AllocaInst *ArgcAlloca = Builder.CreateAlloca(Int32Ty, nullptr, "argc.addr");
  // 將 48763 直接存入這個空間
  Builder.CreateStore(debug_arg, ArgcAlloca);
  // 將這個值載入到 argc
  Value *NewArgc = Builder.CreateLoad(Int32Ty, ArgcAlloca, "new.argc");
  // 替換所有使用原始 argc 的地方
  ArgcPtr->replaceAllUsesWith(NewArgc);

  // 2. 修改 argv[1]
  Value *Argv = &*(MainFunc->arg_begin() + 1);
  // 創建字符串常量
  Constant *Str = ConstantDataArray::getString(Ctx, "hayaku... motohayaku!");
  GlobalVariable *GV = new GlobalVariable(M, Str->getType(), true,
                                        GlobalValue::PrivateLinkage, Str);
  
  // 獲取 argv[1] 的指針
  Value *ArgvIdx = Builder.CreateGEP(Builder.getInt8PtrTy(), Argv, 
                                    Builder.getInt32(1));
  // 將字符串地址存入 argv[1]
  Value *StrPtr = Builder.CreateBitCast(GV, Builder.getInt8PtrTy());
  Builder.CreateStore(StrPtr, ArgvIdx);

  // 3. 呼叫 debug 函數
  Builder.CreateCall(debug_func, {debug_arg});

  return PreservedAnalyses::none();
}

extern "C" ::llvm::PassPluginLibraryInfo LLVM_ATTRIBUTE_WEAK
llvmGetPassPluginInfo() {
  return {LLVM_PLUGIN_API_VERSION, "LLVMPass", "1.0",
    [](PassBuilder &PB) {
      PB.registerOptimizerLastEPCallback(
        [](ModulePassManager &MPM, OptimizationLevel OL) {
          MPM.addPass(LLVMPass());
        });
    }};
}

