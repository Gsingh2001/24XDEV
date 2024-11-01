import React from 'react';
import { useTheme } from '../assets/ThemeContext';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <section
      id="intro"
      className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
      aria-label="Introduction to 24XDEV Web Solutions"
      role="banner"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-16">
        <div className="md:w-1/2 text-center md:text-left order-last md:order-first mb-8">
          {/* SEO-Friendly Heading */}
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Welcome to <span className="text-blue-500">24XDEV</span> - Your Trusted Partner in Web Solutions
            <br />
            Elevate Your <span className="text-blue-500">Digital Presence</span>
          </h1>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            At 24XDEV, we provide tailored web solutions that encompass development, design, hosting, deployment, and maintenance—empowering your digital excellence.
          </p>
          <Link
            to="/gettingstarted"
            className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            aria-label="Get started with 24XDEV's web solutions"
          >
            Get Started with 24XDEV
          </Link>
        </div>

        <div className="md:w-1/2 order-first md:order-last flex justify-center">
          <img
            src="/img/intro-img.svg"
            alt="Illustration showcasing comprehensive web solutions provided by 24XDEV"
            className="w-full h-auto max-w-md transition-transform duration-300 transform hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;