// IntroSection.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../assets/ThemeContext';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  const { currentTheme } = useTheme();
  const controls = useAnimation();

  // Animation settings for staggered fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('intro');
      const rect = section.getBoundingClientRect();
      // Check if the section is in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start("visible");
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check to animate if the section is already in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.section
      id="intro"
      className="flex items-center justify-center h-screen transition-all duration-500 ease-in-out"
      style={{ backgroundColor: currentTheme.colors.background }}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      aria-label="Introduction to 24XDEV Web Solutions"
      role="banner"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-16">
        
        <motion.div 
          className="md:w-1/2 text-center md:text-left order-last md:order-first mb-8"
          variants={itemVariants}
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4`}
            style={{ color: currentTheme.colors.text }}
          >
            Welcome to <span style={{ color: currentTheme.colors.accent }}>24XDEV</span> - Your Trusted Partner in Web Solutions
            <br />
            Elevate Your <span style={{ color: currentTheme.colors.accent }}>Digital Presence</span>
          </h1>
          <motion.p
            className="text-lg mb-6"
            style={{ color: currentTheme.colors.text }}
            variants={itemVariants}
          >
            At 24XDEV, we provide tailored web solutions that encompass development, design, hosting, deployment, and maintenance—empowering your digital excellence.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/gettingstarted"
              className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              aria-label="Get started with 24XDEV's web solutions"
            >
              Get Started with 24XDEV
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 order-first md:order-last flex justify-center"
          variants={itemVariants}
        >
          <img
            src="/img/intro-img.svg"
            alt="Illustration showcasing comprehensive web solutions provided by 24XDEV"
            className="w-full h-auto max-w-md transition-transform duration-500 transform hover:scale-105"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
