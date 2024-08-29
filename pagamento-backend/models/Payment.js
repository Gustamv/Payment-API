const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number,
  paymentMethod: String,
  paymentDate: Date,
  status: String
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;