import React from 'react';
import { useTheme } from '../assets/ThemeContext';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <section
      id="intro"
      className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
        <div className="md:w-1/2 text-center md:text-left order-last md:order-first mb-8">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Innovative Web Solutions
            <br />
            to Elevate Your <span className="text-blue-500">Online Presence!</span>
          </h2>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover how we can help you achieve your goals with cutting-edge technology and expert design.
          </p>
          <Link
            to="/gettingstarted"
            className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        <div className="md:w-1/2 order-first md:order-last flex justify-center">
          <img
            src="/img/intro-img.svg"
            alt="Intro"
            className="w-full h-auto max-w-md transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
