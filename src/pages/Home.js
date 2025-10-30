import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UsersIcon, GiftIcon, CurrencyDollarIcon } from '@heroicons/react/solid';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import { Helmet } from 'react-helmet';
import '../home.css';

const Home = () => {
  return (
    <main className="bg-gray-50">
      <Helmet>
        <title>Tejaswi Foundation - Home</title>
        <meta name="description" content="Empowering lives through education, aid, and community." />
      </Helmet>
      <Hero />
      <StatsSection />
      <section id="mission" className="py-12 sm:py-16 md:py-20 bg-white relative bg-[url('https://images.unsplash.com/photo-1505455184861-ee37a71d2b6b?w=1200&fit=crop')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="container mx-auto px-2 sm:px-4 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-ngo-blue mb-6 sm:mb-8">
            How We Help Society
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <UsersIcon className="h-7 sm:h-8 md:h-10 w-7 sm:w-8 md:w-10" />, title: 'Old Age Homes', desc: 'Providing care and support for the elderly in dedicated facilities.' },
              { icon: <GiftIcon className="h-7 sm:h-8 md:h-10 w-7 sm:w-8 md:w-10" />, title: 'Clothing Distribution', desc: 'Delivering warm clothes and essentials to families in need.' },
              { icon: <CurrencyDollarIcon className="h-7 sm:h-8 md:h-10 w-7 sm:w-8 md:w-10" />, title: 'Financial Support', desc: 'Offering micro-loans and emergency funds for sustainable growth.' },
              { icon: <UsersIcon className="h-7 sm:h-8 md:h-10 w-7 sm:w-8 md:w-10" />, title: 'Community Building', desc: 'Organizing workshops and events to foster unity and resilience.' },
            ].map((card, index) => (
              <motion.div 
                key={index}
  className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-xl hover:shadow-2xl transition-shadow"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  <div className="mx-auto mb-2 sm:mb-4 text-ngo-blue flex justify-center items-center">
    {card.icon}
  </div>
  <h3 className="text-base sm:text-lg md:text-xl font-bold text-ngo-blue mb-2 sm:mb-3">{card.title}</h3>
  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/donate" 
              className="bg-ngo-gold text-ngo-blue px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-ngo-blue hover:text-white transition-colors inline-block text-sm sm:text-base"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-ngo-blue mb-6 sm:mb-8">
            What People Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { quote: '"This NGO changed my life with education support."', author: 'Ram Ondre.' },
              { quote: '"The clothing drive gave my family warmth and hope."', author: 'Vithal Sondkare.' },
              { quote: '"Their workshops united our community like never before."', author: 'Megha Devkar' },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-xl italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-sm sm:text-base mb-3 sm:mb-4">{testimonial.quote}</p>
                <p className="text-sm sm:text-base font-semibold text-ngo-blue">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Link 
        to="/donate" 
        className="fixed bottom-4 right-4 bg-ngo-gold text-ngo-blue p-3 rounded-full shadow-lg hover:bg-ngo-blue hover:text-white md:hidden z-50"
        aria-label="Donate now"
      >
        Donate
      </Link>
    </main>
  );
};

export default Home;