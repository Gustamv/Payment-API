const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

router.get('/', PaymentController.getAllPayments);
router.post('/', PaymentController.createPayment);
router.get('/:id', PaymentController.getPaymentById);
router.put('/:id', PaymentController.updatePayment);
router.delete('/:id', PaymentController.deletePayment);

module.exports = router;