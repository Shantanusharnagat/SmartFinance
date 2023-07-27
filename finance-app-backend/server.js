const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv =require('dotenv').config();
const connectToDatabase = require('./db/connection');



const app = express();
const port = process.env.PORT || 5000; // Use environment variable or default to port 5000

// Middleware
app.use(bodyParser.json());
app.use(cors());

connectToDatabase();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
