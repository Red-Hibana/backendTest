// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route for the root path ("/")
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server on port 3000
app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:3000');
});