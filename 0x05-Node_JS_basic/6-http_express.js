const express = require('express');

const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle 404 errors for any other routes
app.use((req, res) => {
  res.status(404).send(`${'<!DOCTYPE html>'
        + '<html lang="en">'
        + '<head>'
        + '<meta charset="utf-8">'
        + '<title>Error</title>'
        + '</head>'
        + '<body>'
        + '<pre>Cannot GET '}${req.url}</pre>`
        + '</body>'
        + '</html>');
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
