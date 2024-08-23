const request = require('request');
const { expect } = require('chai');

const port = 7865;

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request(`http://localhost:${port}`, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(`http://localhost:${port}`, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
