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