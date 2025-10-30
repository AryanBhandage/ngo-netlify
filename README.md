
Razorpay Payment Integration

A simple web application consisting of a Node.js backend for handling Razorpay payments and a 3-page static frontend site. The backend provides secure payment order creation and verification, while the frontend allows users to interact with the payment flow.

## Features

- **Backend (Node.js/Express)**:
  - Create Razorpay payment orders.
  - Verify payment signatures for security.
  - CORS-enabled for frontend integration.
  - Environment variable support for secure key management.

- **Frontend (Static Site)**:
  - 3-page structure (e.g., Home, Payment, Confirmation – customize as needed).
  - Integrates with the backend API for seamless payments.

- **Deployment**: Hosted on Render for easy scaling.

## Tech Stack

- **Backend**: Node.js, Express, Razorpay SDK, Crypto (for HMAC verification), CORS.
- **Frontend**: HTML, CSS, JavaScript (static files).
- **Deployment**: Render (cloud hosting).
- **Other**: dotenv for environment variables.

## Installation

### Prerequisites
- Node.js (v14 or higher) installed locally.
- A Razorpay account with API keys (get them from [Razorpay Dashboard](https://dashboard.razorpay.com/)).
- Git for cloning the repo.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Backend Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory (same as `server.js`).
   - Add your Razorpay credentials:
     ```
     RAZORPAY_KEY_ID=your_razorpay_key_id_here
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
     ```
   - **Security Note**: Never commit `.env` to version control. Add it to `.gitignore`.

4. **Run Locally**:
   - Start the backend server:
     ```bash
     npm start
     ```
   - The server will run on `http://localhost:5000` (or the port in `process.env.PORT`).
   - Open your static frontend files (e.g., `index.html`) in a browser and point API calls to `http://localhost:5000/api/...`.

5. **Frontend Setup**:
   - Your 3-page static site files (HTML, CSS, JS) should be in a separate folder (e.g., `frontend/` or at the root).
   - Ensure JavaScript in the frontend makes fetch requests to the backend endpoints.

## Usage

### Backend API Endpoints
- **POST /api/create-order**:
  - Request Body: `{ "amount": 100, "currency": "INR" }` (amount in rupees, e.g., 100 = ₹1.00).
  - Response: Razorpay order object (includes order ID for frontend integration).

- **POST /api/payment-verification**:
  - Request Body: `{ "razorpay_order_id": "...", "razorpay_payment_id": "...", "razorpay_signature": "..." }` (from Razorpay's payment success callback).
  - Response: `{ "success": true, "message": "Payment verified successfully." }` or error if verification fails.

### Frontend Integration
- Use Razorpay's Checkout.js in your static pages to handle the payment UI.
- On payment success, send the verification data to `/api/payment-verification`.
- Example JavaScript snippet (in your frontend):
  ```javascript
  // After Razorpay checkout success
  fetch('/api/payment-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      razorpay_order_id: orderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: signature
    })
  });
  ```

### Testing
- Use tools like Postman or curl to test endpoints locally.
- For full flow: Load the frontend, initiate a payment, and verify on the backend.

## Deployment

1. **Push to GitHub**: Ensure all files (backend, frontend, `package.json`, etc.) are committed to a GitHub repo.

2. **Deploy on Render**:
   - Sign up at [render.com](https://render.com).
   - Create a new Web Service, connect your GitHub repo.
   - Configure:
     - Runtime: Node.
     - Build Command: `npm install`.
     - Start Command: `npm start`.
     - Environment Variables: Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` as secrets.
   - Deploy. Your app will be live at `https://your-app-name.onrender.com`.

3. **Update Frontend**: Change API URLs in your static files to point to the Render URL (e.g., `https://your-app-name.onrender.com/api/...`).

4. **Notes**:
   - Render provides HTTPS automatically (required for Razorpay in production).
   - Free tier sleeps after inactivity; upgrade for 24/7 uptime.

## Contributing

- Fork the repo and submit pull requests.
- Report issues via GitHub Issues.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

---

For questions or support, contact [your-email@example.com] or open an issue on GitHub. Enjoy building with Razorpay! 🚀
