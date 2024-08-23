// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with a successful response when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done(); // Indicate that the test is complete
            })
            .catch(done); // Handle any unexpected errors
    });

    it('should not resolve when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then((response) => {
                // Expect no response or resolve
                expect(response).to.be.undefined;
                done();
            })
            .catch(done); // Handle any unexpected errors
    });
});
