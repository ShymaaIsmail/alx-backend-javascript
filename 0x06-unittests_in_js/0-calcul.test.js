const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 6 when inputs are 1.5 and 3', () => {
        assert.strictEqual(calculateNumber(1.5, 3), 5);
    });

    // Additional Edge Cases

    it('should return 5 when inputs are 2.4 and 3.4', () => {
        assert.strictEqual(calculateNumber(2.4, 3.4), 5);
    });

    it('should return 7 when inputs are 2.6 and 3.6', () => {
        assert.strictEqual(calculateNumber(2.6, 3.6), 7);
    });

    it('should return 4 when inputs are 0 and 3.7', () => {
        assert.strictEqual(calculateNumber(0, 3.7), 4);
    });

    it('should return 3 when inputs are 2.8 and 0', () => {
        assert.strictEqual(calculateNumber(2.8, 0), 3);
    });
});
