const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Load environment variables from .env file


const DB_URI = process.env.DB_URI; // MongoDB connection string from your .env file

const User = require('../models/User');
const Transaction = require('../models/Transaction');

const connectToDatabase = () => {
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    });
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = {
    connectToDatabase,
    User,
    Transaction,
}