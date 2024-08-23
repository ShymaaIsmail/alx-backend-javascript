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

describe('/available_payments endpoint', () => {
  it('should return status code 200 and correct JSON structure', (done) => {
    request(`http://localhost:${port}/available_payments`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('should return status code 200 and correct message for valid userName', (done) => {
    request.post({
      url: `http://localhost:${port}/login`,
      body: JSON.stringify({ userName: 'Betty' }),
      headers: { 'Content-Type': 'application/json' }
    }, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return status code 400 for missing userName', (done) => {
    request.post({
      url: `http://localhost:${port}/login`,
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' }
    }, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(400);
      done();
    });
  });
});
