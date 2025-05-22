#!/usr/bin/env python3

import angr,sys
import claripy

def main():
    # 載入二進位檔並關閉自動載入庫功能
    proj = angr.Project('./chal', auto_load_libs=False)

    # 建立 8 個符號位元組 (symbolic bytes)
    sym_bytes = [claripy.BVS(f'byte_{i}', 8) for i in range(8)]
    sym_input = claripy.Concat(*sym_bytes)

    # 使用符號 stdin 初始化模擬狀態
    state = proj.factory.full_init_state(
        stdin=angr.SimFileStream(name='stdin', content=sym_input, has_end=True)
    )

    # 探索至輸出包含 "Correct!" 的執行路徑
    simgr = proj.factory.simgr(state)
    simgr.explore(find=lambda s: b"Correct!" in s.posix.dumps(1))

    if simgr.found:
        found = simgr.found[0]
        secret_key = found.solver.eval(sym_input, cast_to=bytes)
        sys.stdout.buffer.write(secret_key)
    else:
        print("No solution found")

    # secret_key = b""
    # sys.stdout.buffer.write(secret_key)


if __name__ == '__main__':
    main()
