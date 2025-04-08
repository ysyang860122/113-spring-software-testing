class Calc {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return a * b;
    }
}

module.exports = Calc;