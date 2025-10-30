import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-ngo-blue text-white py-8 sm:py-12">
      <div className="container mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-4">Contact us</h3>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            📞 <a href="tel:9604516653" className="hover:underline">9604516653</a> / <a href="tel:9921912727" className="hover:underline">9921912727</a> / <a href="tel:9881899732" className="hover:underline">9881899732</a><br />
            📧 <a href="mailto:tejaswifoundation2013@gmail.com" className="hover:underline">tejaswifoundation2013@gmail.com</a>
          </p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins mb-4">Where to find us</h3>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            📍 Mahadev Nagar, Building No. 5,<br />
            Opp. Shiksha Veritas High School,<br />
            Dhayari, Pune - 411041
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4">
            <a href="https://www.facebook.com/tejashwiMH/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-ngo-gold transition-colors">
              <FaFacebookF className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a href="https://www.instagram.com/suryoday_old_age_home_official?igsh=bmhvZnBxbXNpNDJ2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-ngo-gold transition-colors">
              <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 sm:mt-8 text-center border-t border-gray-600 pt-4">
        <p className="text-sm sm:text-base">
          &copy; 2025 Tejaswi Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
