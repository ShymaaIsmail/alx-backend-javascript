// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with a successful response when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                try {
                    expect(response).to.deep.equal({ data: 'Successful response from the API' });
                    done(); // Indicate that the test is complete
                } catch (error) {
                    done(error); // Pass any assertion errors to done
                }
            })
            .catch(done); // Handle any unexpected errors
    });

    it('should not resolve when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then((response) => {
                try {
                    expect(response).to.be.undefined; // Assuming no response or resolve
                    done(); // Indicate that the test is complete
                } catch (error) {
                    done(error); // Pass any assertion errors to done
                }
            })
            .catch(done); // Handle any unexpected errors
    });

    it('should reject the promise if success is not a boolean', (done) => {
        // Test with an invalid success value
        getPaymentTokenFromAPI('not-a-boolean')
            .then(() => {
                done(new Error('Expected promise to be rejected'));
            })
            .catch((error) => {
                try {
                    expect(error).to.be.instanceOf(TypeError); // Assuming TypeError for invalid input
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });

    it('should handle if the function does not return a promise', (done) => {
        // Temporarily stub the function to return a non-promise value
        const originalFunction = getPaymentTokenFromAPI;
        getPaymentTokenFromAPI = () => 'Not a promise';

        try {
            getPaymentTokenFromAPI(true)
                .then(() => {
                    done(new Error('Expected promise to be rejected'));
                })
                .catch(() => {
                    done(); // This should be called if the function is incorrect
                });
        } finally {
            // Restore the original function
            getPaymentTokenFromAPI = originalFunction;
        }
    });
});
