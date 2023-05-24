const express = require('express');
const app = express();

const port = 3000; // Change this to the desired port number

// Set up a route to serve static files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//create a public folder and create an index.html there
//steps on terminal
//npm init
//npm install express
//node app.js

