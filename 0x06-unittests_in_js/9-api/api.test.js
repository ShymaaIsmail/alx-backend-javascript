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

describe('Cart page', () => {
  it('should return status code 200 and correct message for numeric id', (done) => {
    request(`http://localhost:${port}/cart/12`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for non-numeric id', (done) => {
    request(`http://localhost:${port}/cart/hello`, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
