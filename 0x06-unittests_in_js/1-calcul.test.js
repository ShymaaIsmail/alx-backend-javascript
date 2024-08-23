const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 6 when type is SUM and inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is DIVIDE and second input is 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should throw an error for invalid type', () => {
        assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });

    // Edge Cases
    it('should return 0 when inputs are 0.4 and 0.4 with type SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
    });

    it('should return 0 when inputs are 0.4 and 0.4 with type SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0.4), 0);
    });

    it('should return "Error" when inputs are 0.4 and 0.4 with type DIVIDE', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0.4, 0.4), 'Error');
    });

    it('should return 1 when inputs are 0.5 and 0.5 with type SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 0.5, 0.5), 2);
    });
});
