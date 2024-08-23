const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app
const port = 7865;

describe('Index page', () => {
  let server;

  before((done) => {
    // Start the server before tests
    server = app.listen(port, done);
  });

  after((done) => {
    // Close the server after tests
    server.close(done);
  });

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
