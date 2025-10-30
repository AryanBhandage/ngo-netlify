import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid'; // Added ExclamationCircleIcon
import { Helmet } from 'react-helmet';

// This function loads the Razorpay script
const loadRazorpayScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // To show loading state
  const [error, setError] = useState(null); // To show errors
  const navigate = useNavigate();

  const predefinedAmounts = [10, 25, 50, 100];

  // Load the Razorpay script when the component mounts
  useEffect(() => {
    loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
  }, []);

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount('');
    setError(null); // Clear error on new selection
  };

  const handleCustomAmount = (e) => {
    setAmount('');
    setCustomAmount(e.target.value);
    setError(null); // Clear error
  };

  // This is the new function that handles the Razorpay payment
  const displayRazorpay = async () => {
    setIsLoading(true);
    setError(null);

    const finalAmount = amount || customAmount;
    if (!finalAmount || finalAmount <= 0) {
      setError('Please enter a valid amount.');
      setIsLoading(false);
      return;
    }

    if (!name || !email) {
      setError('Please fill in your name and email.');
      setIsLoading(false);
      return;
    }

    try {
      // --- STEP 1: Call your backend to create an order ---
      // Replace 'http://localhost:5000' with your actual backend URL
      const orderResponse = await fetch('http://localhost:5000/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount,
          currency: 'INR',
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create order. Please check your network or contact support.');
      }

      const orderData = await orderResponse.json();

      // --- STEP 2: Configure Razorpay options ---
      const options = {
        key: 'rzp_test_RYUr2mY3sxAXZp', // Replace with your Key ID from Razorpay dashboard
        amount: orderData.amount, // Amount in paise (from backend)
        currency: orderData.currency,
        name: 'Tejaswi Foundation', // Your organization's name
        description: 'Thank you for your donation',
        image: 'https://placehold.co/100x100/f0ad4e/ffffff?text=NGO', // Optional: Your logo URL
        order_id: orderData.id, // Order ID from backend
        
        // --- STEP 3: Handle the payment response ---
        handler: async (response) => {
          try {
            // --- STEP 4: Call your backend to verify the payment ---
            const verificationResponse = await fetch('http://localhost:5000/api/payment-verification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verificationData = await verificationResponse.json();

            if (verificationData.success) {
              // Payment successful!
              navigate('/thank-you'); // Redirect to thank-you page
            } else {
              // Payment verification failed
              setError('Payment verification failed. Please contact support.');
            }
          } catch (verifyError) {
            console.error('Verification Error:', verifyError);
            setError('An error occurred during payment verification.');
          }
        },
        prefill: {
          name: name,
          email: email,
          // contact: 'Your_Contact_Number' // Optional
        },
        theme: {
          color: '#004A99', // Your NGO's blue color
        },
      };

      // --- STEP 5: Open the Razorpay modal ---
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      // Handle payment failure
      paymentObject.on('payment.failed', (response) => {
        console.error('Payment Failed:', response);
        setError(`Payment Failed: ${response.error.description}`);
      });

    } catch (err) {
      console.error('Razorpay Error:', err);
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // The old handleSubmit is now just a wrapper
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    displayRazorpay();
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 sm:py-16 md:py-20">
      <Helmet>
        <title>Tejaswi Foundation - Donate</title>
        <meta name="description" content="Support our mission to empower communities through your donation." />
      </Helmet>
      <div className="container mx-auto px-2 sm:px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* ... (Your existing h1 and p tags) ... */}
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ngo-blue font-poppins mb-4 sm:mb-6">
             Make a Difference Today
           </h1>
           <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
             Your generous donation helps us provide education, clothing, and support to communities in need.
           </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <ShieldCheckIcon className="h-5 w-5 text-ngo-blue mr-2" />
            <p className="text-sm sm:text-base text-ngo-blue">Secure Donation Process by Razorpay</p>
          </motion.div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-lg mx-auto"
        >
          {/* We wrap the form elements in a <form> tag and use onSubmit */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-ngo-blue font-poppins mb-4">
                Choose Your Donation Amount
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {predefinedAmounts.map((value) => (
                  <button
                    key={value}
                    type="button" // Set type to button to prevent form submission
                    onClick={() => handleAmountSelect(value)}
                    className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors ${
                      amount === value
                        ? 'bg-ngo-gold text-ngo-blue ring-2 ring-ngo-blue'
                        : 'bg-gray-200 text-gray-700 hover:bg-ngo-gold hover:text-ngo-blue'
                    }`}
                    aria-label={`Donate ₹${value}`}
                  >
                    ₹{value}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <input
                  type="number"
                  placeholder="Custom Amount (₹)"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  className={`w-full px-3 py-2 rounded-full text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 ${customAmount ? 'ring-ngo-blue' : 'ring-ngo-gold'}`}
                  aria-label="Custom donation amount"
                  min="1"
                />
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-ngo-blue font-poppins mb-4">
                Your Information
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-full text-gray-700 text-sm sm:text-base mb-3 focus:outline-none focus:ring-2 focus:ring-ngo-gold"
                aria-label="Full name"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-full text-gray-700 text-sm sm:text-base mb-3 focus:outline-none focus:ring-2 focus:ring-ngo-gold"
                aria-label="Email address"
                required
              />
              <textarea
                placeholder="Optional Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-ngo-gold"
                rows="4"
                aria-label="Optional message"
              />
            </div>

            {/* Display error message if there is one */}
            {error && (
              <div className="my-4 flex items-center p-3 bg-red-100 text-red-700 rounded-lg">
                <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit" // Set type to submit
              className="w-full bg-ngo-gold text-ngo-blue px-6 py-3 rounded-full font-bold hover:bg-ngo-blue hover:text-white transition-colors text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
              aria-label="Submit donation"
              disabled={isLoading || (!amount && !customAmount) || !name || !email}
            >
              {isLoading ? 'Processing...' : 'Donate Now'}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Donate;
