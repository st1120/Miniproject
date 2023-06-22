// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Login endpoint
app.post('/api/login', (req, res) => {
  // Validate the username and password
  const { username, password } = req.body;

  // Simulate a login check against the database
  // Replace this with your actual login logic
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
