require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Backend running successfully 🚀');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
