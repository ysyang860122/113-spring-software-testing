# Homework 2: Practice TDD by adding functions to Calc
313552024 網工所 楊宇盛
## Steps
1. Make a fail test
2. Modify the code to pass the test
3. Refactor the code
4. Repeat the process

## Test cases
    ADD
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
<p style="page-break-before: always;"></p>

    SUBTRACT
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
<p style="page-break-before: always;"></p>

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
<p style="page-break-before: always;"></p>

    MULTIPLY
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
```