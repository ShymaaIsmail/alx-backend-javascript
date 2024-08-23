const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve promise with the correct object if success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  /*it('should reject promise if success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected'));
      })
      .catch((err) => {
        expect(err).to.be.undefined; // Ensure it is rejected without any specific error
        done();
      });
  });

  it('should handle cases where the function does not return a promise', (done) => {
    // Mocking getPaymentTokenFromAPI to return a non-promise value
    const originalFunction = getPaymentTokenFromAPI;
    const nonPromiseFunction = () => 'Not a promise';
    getPaymentTokenFromAPI = nonPromiseFunction;

    try {
      getPaymentTokenFromAPI(true)
        .then(() => {
          done(new Error('Expected function to return a promise'));
        })
        .catch(() => {
          done(); // Test should fail if it reaches here
        });
    } finally {
      // Restore the original function
      getPaymentTokenFromAPI = originalFunction;
    }
  });

  it('should reject promise if input is not a boolean', (done) => {
    getPaymentTokenFromAPI('not-a-boolean')
      .then(() => {
        done(new Error('Expected promise to be rejected'));
      })
      .catch((err) => {
        expect(err).to.be.undefined; // Ensure it is rejected without any specific error
        done();
      });
  });*/
});
