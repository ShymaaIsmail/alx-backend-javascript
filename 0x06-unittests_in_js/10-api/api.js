const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());  // Middleware to parse JSON bodies

// Existing route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route for /cart/:id
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// New route for /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New route for /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Bad Request');
  }
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
