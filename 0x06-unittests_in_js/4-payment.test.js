// 4-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(() => {
        // Stub the Utils.calculateNumber method to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // Spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the original methods
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct result', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
