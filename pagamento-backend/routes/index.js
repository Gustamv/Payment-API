const router = express.Router();
const paymentRouter = require('./payments');
const transactionRouter = require('./transactions');

router.use('/payments', paymentRouter);
router.use('/transactions', transactionRouter);

module.exports = router;