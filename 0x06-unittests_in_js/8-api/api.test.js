const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app
const port = 7865;

// Helper function to test the server response
const getRequest = (url, callback) => {
  request(url, (error, response, body) => {
    if (error) return callback(error);
    callback(null, response, body);
  });
};

describe('Index page', () => {
  before((done) => {
    // Make sure the server is running
    app.listen(port, done);
  });

  it('should return status code 200', (done) => {
    getRequest(`http://localhost:${port}`, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    getRequest(`http://localhost:${port}`, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
