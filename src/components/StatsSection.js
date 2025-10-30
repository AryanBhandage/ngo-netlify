import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, CurrencyDollarIcon, GiftIcon } from '@heroicons/react/solid';

const StatsSection = () => {
  const stats = [
    { label: 'People Helped', value: 10000, display: '1,000+', icon: <UsersIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12" /> },
    { label: 'Money Donated', value: 500000, display: '₹1,00,000+', icon: <CurrencyDollarIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12" /> },
    { label: 'Clothing Items', value: 50000, display: '500+', icon: <GiftIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12" /> },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-ngo-blue text-white">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Our Impact So Far
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-2 sm:mb-4">{stat.icon}</div>
              <motion.h3
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-1 sm:mb-2"
                initial={{ innerText: 0 }}
                animate={{ innerText: stat.value }}
                transition={{ duration: 2, ease: 'easeOut' }}
                whileInView={{ innerText: stat.value }}
                viewport={{ once: true }}
              >
                {stat.display}
              </motion.h3>
              <p className="text-base sm:text-lg md:text-xl font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;