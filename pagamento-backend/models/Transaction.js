const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  transactionDate: Date,
  amount: Number,
  status: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;