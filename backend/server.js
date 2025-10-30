require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// --- Initialize Razorpay ---
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// --- Endpoint to Create an Order ---
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Razorpay requires amount in the smallest currency unit (e.g., paise)
    const options = {
      amount: Number(amount) * 100,
      currency: currency,
      receipt: `receipt_order_${new Date().getTime()}`,
    };

    const order = await razorpayInstance.orders.create(options);

    if (!order) {
      return res.status(500).send('Error creating order');
    }

    res.json(order);
  } catch (error) {
    console.error('Create Order Error:', error);
    res.status(500).send(error.message);
  }
});

// --- Endpoint to Verify Payment ---
app.post('/api/payment-verification', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // This is the critical security step
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');

    if (generated_signature === razorpay_signature) {
      // Signature matches. Payment is successful.
      // Here, you would typically save the payment details to your database
      // before sending the success response.
      res.json({ success: true, message: 'Payment verified successfully.' });
    } else {
      // Signature does not match. Payment is fraudulent or failed.
      res.status(400).json({ success: false, message: 'Invalid signature. Payment verification failed.' });
    }
  } catch (error) {
    console.error('Verification Error:', error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
