// models/Transaction.js

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  description: { type: String },
  amount: { type: Number, required: true },
  // Other transaction fields...
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
