# Homework 2: Practice TDD by adding functions to Calc
313552024 網工所 楊宇盛
## Steps
1. Make a fail test
2. Modify the code to pass the test
3. Refactor the code
4. Repeat the process

## Test cases
### ADD
1. Add tests
```js
// Calc_test.js
test('測試加法功能', async (t) => {
    await t.test('兩個正數相加', () => {
        assert.strictEqual(Calc.add(2, 3), 5);
    });
    await t.test('兩個負數相加', () => {
        assert.strictEqual(Calc.add(-2, -3), -5);
    });
    await t.test('一個正數一個負數相加', () => {
        assert.strictEqual(Calc.add(2, -3), -1);
    });
});
```
```shell
node --test --experimental-test-coverage                                                                                                               ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.490833ms)
  ✔ 兩個負數相加 (0.120792ms)
  ✔ 一個正數一個負數相加 (0.039959ms)
✔ 測試加法功能 (1.042417ms)
ℹ tests 4
ℹ suites 0
ℹ pass 4
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 60.323791
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report
```

### SUBTRACT
1. Add fail tests
```js
// Calc_test.js
test('測試減法功能', async (t) => {
    await t.test('兩個正數相減', () => {
        assert.strictEqual(Calc.subtract(5, 3), 2);
    });
    await t.test('兩個負數相減', () => {
        assert.strictEqual(Calc.subtract(-2, -3), 1);
    });
    await t.test('一個正數一個負數相減', () => {
        assert.strictEqual(Calc.subtract(2, -3), 5);
    });
    await t.test('一個負數一個正數相減', () => {
        assert.strictEqual(Calc.subtract(-2, 3), -5);
    });
});
```
```shell
node --test --experimental-test-coverage                                                                                                               ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.5545ms)
  ✔ 兩個負數相加 (0.119916ms)
  ✔ 一個正數一個負數相加 (0.042042ms)
✔ 測試加法功能 (1.090458ms)
▶ 測試減法功能
  ✖ 兩個正數相減 (0.08ms)
  ✖ 兩個負數相減 (0.414125ms)
  ✖ 一個正數一個負數相減 (0.03725ms)
  ✖ 一個負數一個正數相減 (0.030958ms)
✖ 測試減法功能 (0.7275ms)
ℹ tests 9
ℹ suites 0
ℹ pass 4
ℹ fail 5
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 64.004458
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report

✖ failing tests:

test at Calc_test.js:18:13
✖ 兩個正數相減 (0.08ms)
  TypeError [Error]: Calc.subtract is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:19:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:18:13)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.processPendingSubtests (node:internal/test_runner/test:677:18)
      at Test.postRun (node:internal/test_runner/test:1090:19)

test at Calc_test.js:21:13
✖ 兩個負數相減 (0.414125ms)
  TypeError [Error]: Calc.subtract is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:22:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:21:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:24:13
✖ 一個正數一個負數相減 (0.03725ms)
  TypeError [Error]: Calc.subtract is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:25:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:24:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:27:13
✖ 一個負數一個正數相減 (0.030958ms)
  TypeError [Error]: Calc.subtract is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:28:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:27:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)
```

2. Modify the code to pass the test
```js
// Calc.js
static subtract(a, b) {
    return a - b;
}
```

```shell
node --test --experimental-test-coverage                                                                                                               ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.563333ms)
  ✔ 兩個負數相加 (0.128583ms)
  ✔ 一個正數一個負數相加 (0.044709ms)
✔ 測試加法功能 (1.143541ms)
▶ 測試減法功能
  ✔ 兩個正數相減 (0.052542ms)
  ✔ 兩個負數相減 (0.411959ms)
  ✔ 一個正數一個負數相減 (0.043625ms)
  ✔ 一個負數一個正數相減 (0.037708ms)
✔ 測試減法功能 (0.675083ms)
ℹ tests 9
ℹ suites 0
ℹ pass 9
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 66.933
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report
```

### MULTIPLY
1. Add fail tests
```js
// Calc_test.js
test('測試乘法功能', async (t) => {
    await t.test('兩個正數相乘', () => {
        assert.strictEqual(Calc.multiply(2, 3), 6);
    });
    await t.test('兩個負數相乘', () => {
        assert.strictEqual(Calc.multiply(-2, -3), 6);
    });
    await t.test('一個正數一個負數相乘', () => {
        assert.strictEqual(Calc.multiply(2, -3), -6);
    });
    await t.test('一個負數一個正數相乘', () => {
        assert.strictEqual(Calc.multiply(-2, 3), -6);
    });
    await t.test('乘以0', () => {
        assert.strictEqual(Calc.multiply(2, 0), 0);
    });
    await t.test('乘以正無窮', () => {
        assert.strictEqual(Calc.multiply(2, Infinity), Infinity);
    });
    await t.test('乘以負無窮', () => {
        assert.strictEqual(Calc.multiply(2, -Infinity), -Infinity);
    });
    await t.test('乘以NaN', () => {
        assert.strictEqual(Calc.multiply(2, NaN), NaN);
    });
    await t.test('乘以字串', () => {
        assert.strictEqual(Calc.multiply(2, '3'), NaN);
    });
});
```
```shell
 node --test --experimental-test-coverage                                                                                                               ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.312458ms)
  ✔ 兩個負數相加 (0.137375ms)
  ✔ 一個正數一個負數相加 (0.043417ms)
✔ 測試加法功能 (0.878792ms)
▶ 測試減法功能
  ✔ 兩個正數相減 (0.075458ms)
  ✔ 兩個負數相減 (0.062875ms)
  ✔ 一個正數一個負數相減 (0.044791ms)
  ✔ 一個負數一個正數相減 (0.038708ms)
✔ 測試減法功能 (0.690083ms)
▶ 測試乘法功能
  ✖ 兩個正數相乘 (0.0895ms)
  ✖ 兩個負數相乘 (0.035625ms)
  ✖ 一個正數一個負數相乘 (0.032167ms)
  ✖ 一個負數一個正數相乘 (0.028125ms)
  ✖ 乘以0 (0.030208ms)
  ✖ 乘以正無窮 (0.030166ms)
  ✖ 乘以負無窮 (0.032209ms)
  ✖ 乘以NaN (0.033ms)
  ✖ 乘以字串 (0.0275ms)
✖ 測試乘法功能 (0.577875ms)
ℹ tests 19
ℹ suites 0
ℹ pass 9
ℹ fail 10
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 54.35875
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report

✖ failing tests:

test at Calc_test.js:33:13
✖ 兩個正數相乘 (0.0895ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:34:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:33:13)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.processPendingSubtests (node:internal/test_runner/test:677:18)
      at Test.postRun (node:internal/test_runner/test:1090:19)

test at Calc_test.js:36:13
✖ 兩個負數相乘 (0.035625ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:37:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:36:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:39:13
✖ 一個正數一個負數相乘 (0.032167ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:40:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:39:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:42:13
✖ 一個負數一個正數相乘 (0.028125ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:43:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:42:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:45:13
✖ 乘以0 (0.030208ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:46:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:45:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:48:13
✖ 乘以正無窮 (0.030166ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:49:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:48:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:51:13
✖ 乘以負無窮 (0.032209ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:52:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:51:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:54:13
✖ 乘以NaN (0.033ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:55:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:54:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)

test at Calc_test.js:57:13
✖ 乘以字串 (0.0275ms)
  TypeError [Error]: Calc.multiply is not a function
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:58:33)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:57:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7)
```
<p style="page-break-before: always;"></p>

2. Modify the code to pass the test
```js
// Calc.js
static multiply(a, b) {
    return a * b;
}
```
```shell
node --test --experimental-test-coverage                                                                                                               ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.553625ms)
  ✔ 兩個負數相加 (0.131125ms)
  ✔ 一個正數一個負數相加 (0.043417ms)
✔ 測試加法功能 (1.135167ms)
▶ 測試減法功能
  ✔ 兩個正數相減 (0.050792ms)
  ✔ 兩個負數相減 (0.041875ms)
  ✔ 一個正數一個負數相減 (0.038083ms)
  ✔ 一個負數一個正數相減 (0.035333ms)
✔ 測試減法功能 (0.688625ms)
▶ 測試乘法功能
  ✔ 兩個正數相乘 (0.050417ms)
  ✔ 兩個負數相乘 (0.035208ms)
  ✔ 一個正數一個負數相乘 (0.03375ms)
  ✔ 一個負數一個正數相乘 (0.032166ms)
  ✔ 乘以0 (0.036708ms)
  ✔ 乘以正無窮 (0.03525ms)
  ✔ 乘以負無窮 (0.091416ms)
  ✔ 乘以NaN (0.035375ms)
  ✖ 乘以字串 (0.480958ms)
✖ 測試乘法功能 (1.073292ms)
ℹ tests 19
ℹ suites 0
ℹ pass 17
ℹ fail 2
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 62.230208
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report

✖ failing tests:

test at Calc_test.js:57:13
✖ 乘以字串 (0.480958ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  
  6 !== NaN
  
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:58:16)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:57:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 6,
    expected: NaN,
    operator: 'strictEqual'
  }
```
這時候發現，如果a或b不是數字，就要回傳NaN，所以需要修改
```js
// Calc.js
static multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}
```
```shell
node --test --experimental-test-coverage                                                                                                               ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.312333ms)
  ✔ 兩個負數相加 (0.126083ms)
  ✔ 一個正數一個負數相加 (0.043291ms)
✔ 測試加法功能 (0.86325ms)
▶ 測試減法功能
  ✔ 兩個正數相減 (0.048042ms)
  ✔ 兩個負數相減 (0.040583ms)
  ✔ 一個正數一個負數相減 (0.036333ms)
  ✔ 一個負數一個正數相減 (0.033875ms)
✔ 測試減法功能 (0.58325ms)
▶ 測試乘法功能
  ✔ 兩個正數相乘 (0.052833ms)
  ✔ 兩個負數相乘 (0.033042ms)
  ✔ 一個正數一個負數相乘 (0.032917ms)
  ✔ 一個負數一個正數相乘 (0.034ms)
  ✔ 乘以0 (0.036916ms)
  ✔ 乘以正無窮 (0.037917ms)
  ✔ 乘以負無窮 (0.095875ms)
  ✔ 乘以NaN (0.035042ms)
  ✔ 乘以字串 (0.037625ms)
✔ 測試乘法功能 (0.608375ms)
ℹ tests 19
ℹ suites 0
ℹ pass 19
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 50.879375
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report
```

### DIVIDE
1. Add fail tests
```js
// Calc_test.js
test('測試除法功能', async (t) => {
    // Encode decision：除法應該返回浮點數結果
    await t.test('一般除法應返回浮點數', () => {
        assert.strictEqual(Calc.divide(10, 3), 3.3333333333333333);
    });
    // Encode decision：除以零應該拋出錯誤
    await t.test('除以零應拋出錯誤', () => {
        assert.throws(() => {
            Calc.divide(5, 0);
        }, Error);
    });
    await t.test('除以NaN', () => {
        assert.strictEqual(Calc.divide(2, NaN), NaN);
    });
    await t.test('除以字串', () => {
        assert.strictEqual(Calc.divide(2, '3'), NaN);
    });
    
});
```
```shell
node --test --experimental-test-coverage                                                            ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.675583ms)
  ✔ 兩個負數相加 (0.051208ms)
  ✔ 一個正數一個負數相加 (0.040417ms)
✔ 測試加法功能 (1.386959ms)
▶ 測試減法功能
  ✔ 兩個正數相減 (0.388959ms)
  ✔ 兩個負數相減 (0.039541ms)
  ✔ 一個正數一個負數相減 (0.038958ms)
  ✔ 一個負數一個正數相減 (0.035083ms)
✔ 測試減法功能 (0.624208ms)
▶ 測試乘法功能
  ✔ 兩個正數相乘 (0.110375ms)
  ✔ 兩個負數相乘 (0.037708ms)
  ✔ 一個正數一個負數相乘 (0.037125ms)
  ✔ 一個負數一個正數相乘 (0.034208ms)
  ✔ 乘以0 (0.036375ms)
  ✔ 乘以正無窮 (0.043125ms)
  ✔ 乘以負無窮 (0.035ms)
  ✔ 乘以NaN (0.032625ms)
  ✔ 乘以字串 (0.032417ms)
✔ 測試乘法功能 (0.635458ms)
▶ 測試除法功能
  ✖ 一般除法應返回浮點數 (0.663833ms)
  ✖ 除以零應拋出錯誤 (0.310708ms)
  ✖ 除以NaN (0.0585ms)
  ✖ 除以字串 (0.048333ms)
✖ 測試除法功能 (1.229334ms)
ℹ tests 24
ℹ suites 0
ℹ pass 19
ℹ fail 5
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 79.413458
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report

✖ failing tests:

test at Calc_test.js:64:13
✖ 一般除法應返回浮點數 (0.663833ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + undefined
  - 3.3333333333333335
  
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:65:16)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:64:13)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.processPendingSubtests (node:internal/test_runner/test:677:18)
      at Test.postRun (node:internal/test_runner/test:1090:19) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: undefined,
    expected: 3.3333333333333335,
    operator: 'strictEqual'
  }

test at Calc_test.js:68:13
✖ 除以零應拋出錯誤 (0.310708ms)
  AssertionError [ERR_ASSERTION]: Missing expected exception (Error).
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:69:16)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:68:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: undefined,
    operator: 'throws'
  }

test at Calc_test.js:73:13
✖ 除以NaN (0.0585ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  
  undefined !== NaN
  
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:74:16)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:73:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: undefined,
    expected: NaN,
    operator: 'strictEqual'
  }

test at Calc_test.js:76:13
✖ 除以字串 (0.048333ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  
  undefined !== NaN
  
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:77:16)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:76:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: undefined,
    expected: NaN,
    operator: 'strictEqual'
  }
  ```
2. Modify the code to pass the test
```js
// Calc.js
static divide(a, b) {
    return a / b;
}
```
```shell
node --test --experimental-test-coverage                                                            ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.689167ms)
  ✔ 兩個負數相加 (0.078375ms)
  ✔ 一個正數一個負數相加 (0.052667ms)
✔ 測試加法功能 (2.023667ms)
▶ 測試減法功能
  ✔ 兩個正數相減 (0.744709ms)
  ✔ 兩個負數相減 (0.04175ms)
  ✔ 一個正數一個負數相減 (0.040958ms)
  ✔ 一個負數一個正數相減 (0.038083ms)
✔ 測試減法功能 (1.006916ms)
▶ 測試乘法功能
  ✔ 兩個正數相乘 (0.120708ms)
  ✔ 兩個負數相乘 (0.037458ms)
  ✔ 一個正數一個負數相乘 (0.035125ms)
  ✔ 一個負數一個正數相乘 (0.036958ms)
  ✔ 乘以0 (0.039167ms)
  ✔ 乘以正無窮 (0.035625ms)
  ✔ 乘以負無窮 (0.036208ms)
  ✔ 乘以NaN (0.035833ms)
  ✔ 乘以字串 (0.034958ms)
✔ 測試乘法功能 (0.632084ms)
▶ 測試除法功能
  ✔ 一般除法應返回浮點數 (0.05075ms)
  ✖ 除以零應拋出錯誤 (0.939209ms)
  ✔ 除以NaN (0.060041ms)
  ✖ 除以字串 (0.264792ms)
✖ 測試除法功能 (1.460791ms)
ℹ tests 24
ℹ suites 0
ℹ pass 21
ℹ fail 3
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 79.4615
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report

✖ failing tests:

test at Calc_test.js:68:13
✖ 除以零應拋出錯誤 (0.939209ms)
  AssertionError [ERR_ASSERTION]: Missing expected exception (Error).
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:69:16)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:68:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: undefined,
    operator: 'throws'
  }

test at Calc_test.js:76:13
✖ 除以字串 (0.264792ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected
  
  + 0.6666666666666666
  - NaN
  
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:77:16)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at TestContext.test (node:internal/test_runner/test:307:20)
      at TestContext.<anonymous> (/Users/ysyang/Documents/NYCU/113-2/Software_Testing/113-spring-software-testing/HW2/Calc_test.js:76:13)
      at async Test.run (node:internal/test_runner/test:980:9)
      at async Test.processPendingSubtests (node:internal/test_runner/test:677:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 0.6666666666666666,
    expected: NaN,
    operator: 'strictEqual'
  }
```
<p style="page-break-before: always;"></p>

接著加上一些錯誤處理
```js
// Calc.js
static divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (b === 0) {
        throw new Error('除以零');
    }
    return a / b;
}
```
```shell
node --test --experimental-test-coverage                                                            ─╯
▶ 測試加法功能
  ✔ 兩個正數相加 (0.577875ms)
  ✔ 兩個負數相加 (0.051583ms)
  ✔ 一個正數一個負數相加 (0.040833ms)
✔ 測試加法功能 (1.15875ms)
▶ 測試減法功能
  ✔ 兩個正數相減 (0.466041ms)
  ✔ 兩個負數相減 (0.040291ms)
  ✔ 一個正數一個負數相減 (0.105542ms)
  ✔ 一個負數一個正數相減 (0.036375ms)
✔ 測試減法功能 (0.771084ms)
▶ 測試乘法功能
  ✔ 兩個正數相乘 (0.128875ms)
  ✔ 兩個負數相乘 (0.039916ms)
  ✔ 一個正數一個負數相乘 (0.034041ms)
  ✔ 一個負數一個正數相乘 (0.0345ms)
  ✔ 乘以0 (0.038417ms)
  ✔ 乘以正無窮 (0.038875ms)
  ✔ 乘以負無窮 (0.03575ms)
  ✔ 乘以NaN (0.036375ms)
  ✔ 乘以字串 (0.034625ms)
✔ 測試乘法功能 (0.648791ms)
▶ 測試除法功能
  ✔ 一般除法應返回浮點數 (0.058458ms)
  ✔ 除以零應拋出錯誤 (0.367042ms)
  ✔ 除以NaN (0.037459ms)
  ✔ 除以字串 (0.038209ms)
✔ 測試除法功能 (0.631459ms)
ℹ tests 24
ℹ suites 0
ℹ pass 24
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 78.898958
ℹ start of coverage report
ℹ ---------------------------------------------------------------
ℹ file           | line % | branch % | funcs % | uncovered lines
ℹ ---------------------------------------------------------------
ℹ Calc_test.js   | 100.00 |   100.00 |  100.00 | 
ℹ Calc.js        | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ all files      | 100.00 |   100.00 |  100.00 | 
ℹ ---------------------------------------------------------------
ℹ end of coverage report
```
# Thanks for reading!