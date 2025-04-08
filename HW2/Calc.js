class Calc {
    static add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return a + b;
    }
    static subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return a - b;
    }
    static multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return a * b;
    }
    static divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        if (b === 0) {
            throw new Error('除以零');
        }
        return a / b;
    }
}

module.exports = Calc;