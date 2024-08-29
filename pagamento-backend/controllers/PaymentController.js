const PaymentService = require('../services/PaymentService');

class PaymentController {
  async getAllPayments(req, res) {
    const payments = await PaymentService.getAllPayments();
    res.json(payments);
  }

  async createPayment(req, res) {
    const payment = await PaymentService.createPayment(req.body);
    res.json(payment);
  }

  async getPaymentById(req, res) {
    const payment = await PaymentService.getPaymentById(req.params.id);
    res.json(payment);
  }

  async updatePayment(req, res) {
    const payment = await PaymentService.updatePayment(req.params.id, req.body);
    res.json(payment);
  }

  async deletePayment(req, res) {
    await PaymentService.deletePayment(req.params.id);
    res.status(204).send();
  }
}

module.exports = PaymentController;