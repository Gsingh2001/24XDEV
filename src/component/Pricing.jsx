import React, { useEffect } from 'react';
import { useTheme } from '../assets/ThemeContext';
import { motion, useAnimation } from 'framer-motion';

const Pricing = () => {
  const { isDarkMode, currentTheme } = useTheme();
  const controls = useAnimation();

  // Define animation effects
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  // Start animation on component mount
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section
      id="pricing"
      className={`py-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
      style={{ backgroundColor: currentTheme.colors.background }} 
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <header className="text-center mb-8">
          <h3 id="pricing-heading" className="text-3xl font-bold" style={{ color: currentTheme.colors.primary }}>Pricing Plans</h3>
          <p className="mt-4" style={{ color: currentTheme.colors.secondary }}>
            Our flexible pricing plans are tailored to meet your needs, whether you're looking for basic web solutions or a comprehensive all-in-one package. We provide services for clients in India, the UK, and Canada.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} isDarkMode={isDarkMode} controls={controls} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ price, period, title, features, isDarkMode, controls }) => {
  // Define animation effects
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  // Start animation on mount
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      className={`flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105`}
      role="article"
      aria-label={`${title} - ${price} per ${period}`}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <span className="currency">₹</span>
          {price}
          <span className="period">/{period}</span>
        </h3>
      </div>
      <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
        
        {/* Feature List */}
        <ul className={`list-disc list-inside mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <a
          href="#"
          className={`mt-4 inline-block px-4 py-2 rounded bg-blue-600 text-white text-center hover:bg-blue-500 ${isDarkMode ? 'hover:bg-blue-400' : ''}`}
          aria-label={`Choose ${title} Plan`}
        >
          Choose Plan
        </a>
      </div>
    </motion.div>
  );
};

const pricingPlans = [
  {
    price: 99,
    period: 'month',
    title: 'Basic Plan',
    features: [
      'Custom Website Design',
      'Responsive Layout',
      'Basic Hosting',
      'SEO Optimization',
      'Email Support',
    ],
  },
  {
    price: 199,
    period: 'month',
    title: 'Regular Plan',
    features: [
      'Everything in Basic Plan',
      'Advanced Web Development',
      'Managed Hosting',
      'CMS Integration',
      'Priority Email & Phone Support',
    ],
  },
  {
    price: 299,
    period: 'month',
    title: 'Premium Plan',
    features: [
      'Everything in Regular Plan',
      'Custom Web App Development',
      'Dedicated Cloud Hosting',
      'Ongoing Maintenance & Updates',
      '24/7 Priority Support',
    ],
  },
];

export default Pricing;
