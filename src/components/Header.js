import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center">
        <Link to="/" className="mr-auto">
          <img 
            src={logo} 
            alt="Tejaswi Foundation Logo" 
            className="h-12 sm:h-14 md:h-20 w-auto max-w-[180px]"
          />
        </Link>
        <button 
          className="md:hidden text-ngo-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
        <nav className="hidden md:flex ml-auto space-x-4 lg:space-x-6 items-center">
          <Link 
            to="/" 
            className="nav-link text-sm lg:text-base text-ngo-blue font-semibold transition-all duration-300"
            aria-label="Go to home page"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-link text-sm lg:text-base text-ngo-blue font-semibold transition-all duration-300"
            aria-label="Go to about page"
          >
            About
          </Link>
          <Link 
            to="/donate" 
            className="text-sm lg:text-base bg-ngo-blue text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full hover:bg-ngo-gold hover:text-ngo-blue transition-colors font-semibold"
            aria-label="Go to donate now page"
          >
            Donate Now
          </Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-2 sm:px-4 py-2 flex flex-col space-y-2">
            <Link 
              to="/" 
              className="text-sm text-ngo-blue hover:text-ngo-gold font-semibold transition-colors py-2"
              onClick={() => setIsOpen(false)}
              aria-label="Go to home page"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm text-ngo-blue hover:text-ngo-gold font-semibold transition-colors py-2"
              onClick={() => setIsOpen(false)}
              aria-label="Go to about page"
            >
              About
            </Link>
            <Link 
              to="/donate" 
              className="text-sm bg-ngo-blue text-white px-3 py-1.5 rounded-full hover:bg-ngo-gold hover:text-ngo-blue transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
              aria-label="Go to donate now page"
            >
              Donate Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;