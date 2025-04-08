const test = require('node:test');
const assert = require('assert');
const Calc = require('./Calc');

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
