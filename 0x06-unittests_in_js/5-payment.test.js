// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        // Spy on console.log before each test
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the original console.log after each test
        consoleSpy.restore();
    });

    it('should log the correct result for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the correct result for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});
