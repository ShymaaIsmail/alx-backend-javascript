const express = require('express');
const countStudents = require('./3-read_file_async'); // Import the countStudents function

const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for /students
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const data = await countStudents(process.argv[2]);
    res.end(data);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

// Handle 404 errors for any other routes
app.use((req, res) => {
  res.status(404).send(`Cannot GET ${req.url}`);
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
