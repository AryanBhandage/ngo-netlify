import React from 'react';
import { Helmet } from 'react-helmet';

const ThankYou = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-12 sm:py-16 md:py-20">
      <Helmet>
        <title>Tejaswi Foundation - Thank You</title>
        <meta name="description" content="Thank you for your generous donation to Tejaswi Foundation." />
      </Helmet>
      <div className="container mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ngo-blue font-poppins mb-6 sm:mb-8 text-center">
          Thank You for Your Donation!
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Your support helps us empower communities through education, clothing, and unity. We'll be in touch soon!
        </p>
      </div>
    </main>
  );
};

export default ThankYou;