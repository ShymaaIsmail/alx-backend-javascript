const express = require('express');
const app = express();
const port = 7865;

// Existing route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route for /cart/:id
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
