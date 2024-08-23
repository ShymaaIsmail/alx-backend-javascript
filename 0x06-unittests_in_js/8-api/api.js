const express = require('express');
const app = express();
const PORT = 7865;

// Define a route for the index page
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
