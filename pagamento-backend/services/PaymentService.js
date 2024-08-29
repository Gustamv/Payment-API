const Payment = require('../models/Payment');

class PaymentService {
  async getAllPayments() {
    return await Payment.find();
  }

  async createPayment(paymentData) {
    const payment = new Payment(paymentData);
    return await payment.save();
  }

  async getPaymentById(id) {
    return await Payment.findById(id);
  }

  async updatePayment(id, paymentData) {
    return await Payment.findByIdAndUpdate(id, paymentData, { new: true });
  }

  async deletePayment(id) {
    await Payment.findByIdAndRemove(id);
  }
}

module.exports = PaymentService;