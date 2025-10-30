import React from 'react';
import { Slide } from 'react-slideshow-image';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import educationImg from '../assets/impact/education.jpg';
import clothingImg from '../assets/impact/clothes.jpg';
import foodImg from '../assets/impact/food.jpg';
import '../home.css';

const Hero = () => {
  const slideImages = [
    { src: educationImg, alt: 'Nurturing Our Elders', caption: 'Nurturing Our Elders with Care' },
    { src: clothingImg, alt: 'Meeting Daily Needs', caption: 'Meeting Essential Daily Needs' },
    { src: foodImg, alt: 'Promoting Health', caption: 'Promoting Health and Nutrition' },
  ];

  return (
    <div>
      {/* Slideshow */}
      <div className="slideshow-container mt-0 pt-0">
        <Slide autoplay={true} arrows={true} indicators={true} duration={5000}>
          {slideImages.map((image, index) => (
            <div key={index} className="each-slide">
              <img src={image.src} alt={image.alt} className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
              <p className="text-center text-sm sm:text-base md:text-lg text-ngo-blue mt-2 font-inter">{image.caption}</p>
            </div>
          ))}
        </Slide>
      </div>

      {/* Hero Content */}
      <section className="bg-white text-ngo-blue py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Suryodaya Old Age Home: A Family for Our Elders
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-inter"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Since 2013, Suryodaya Old Age Home, a mission of Tejaswi Foundation in Dhayari, Pune, has provided shelter, nutritious meals, medical care, and love to over 25 homeless and needy elderly. Founded by Chhayatai Bhagat, inspired by Dr. Sindhutai Sapkal, we offer a caring home and empower women through our Development Center. Join us to build a permanent shelter for our grandparents.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/donate"
              className="bg-ngo-gold text-ngo-blue px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-ngo-blue hover:text-white transition-colors text-sm sm:text-base"
            >
              Support Our Elders
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;