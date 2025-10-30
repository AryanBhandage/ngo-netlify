const express = require('express');
const router = express.Router();
const {
  createOrder,
  verifyPayment,
} = require('../controllers/paymentController');

router.post('/create-order', createOrder);
router.post('/payment-verification', verifyPayment);

module.exports = router;
