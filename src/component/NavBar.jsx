import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { useTheme } from '../assets/ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use the ThemeContext

  const navSections = [
    { name: 'Home', to: 'intro' },
    { name: 'About Us', to: 'about-us' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Pricing', to: 'pricing' },
  ];

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'}  pt-5 sticky top-0 z-10`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-32 w-auto" src="/img/main-logo.png" alt="24xdev.uk" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex space-x-4">
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              {navSections.map((section) => (
                <li key={section.to}>
                  <Link
                    to={section.to}
                    className={`nav-link rounded shadow p-2 transition duration-300 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'} cursor-pointer`} // Added cursor-pointer here
                    smooth={true}
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                  >
                    {section.name}
                  </Link>
                </li>
              ))}

              <li>
                <label className="theme-switch cursor-pointer ml-4">
                  <input type="checkbox" className="theme-switch__checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
                  <div className="theme-switch__container">
                    <div className="theme-switch__clouds"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.879 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM106 23.3545C107.111 23.2995 108.055 22.8503 108.831 22.0069C109.607 21.1635 109.996 20.1642 109.996 19C109.996 20.1642 110.384 21.1635 111.16 22.0069C111.936 22.8503 112.879 23.2903 114 23.3545C113.267 23.3911 112.597 23.602 111.98 24.0053C111.371 24.3995 110.886 24.9312 110.524 25.5913C110.172 26.2513 109.996 26.9572 109.996 27.7273C109.996 26.563 109.608 25.5546 108.832 24.7112C108.055 23.8587 107.111 23.4095 106 23.3545ZM144 36.3545C145.111 36.2995 146.055 35.8503 146.831 35.0069C147.607 34.1635 147.996 33.1642 147.996 32C147.996 33.1642 148.384 34.1635 149.16 35.0069C149.936 35.8503 150.879 36.2903 152 36.3545C151.267 36.3911 150.597 36.602 149.98 37.0053C149.371 37.3995 148.886 37.9312 148.524 38.5913C148.172 39.2513 147.996 39.9572 147.996 40.7273C147.996 39.563 147.608 38.5546 146.832 37.7112C146.055 36.8587 145.111 36.4095 144 36.3545Z" fill="currentColor" />
                    </svg>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className={`space-y-1 px-4 pt-4 pb-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <ul className="flex flex-col">
            {navSections.map((section, index) => (
              <React.Fragment key={section.to}>
                <li>
                  <Link
                    to={section.to}
                    className={`nav-link rounded-lg p-4 transition duration-300 transform hover:scale-105 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'}`}
                    smooth={true}
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                  >
                    {section.name}
                  </Link>
                </li>
                {/* Add horizontal line except after the last item */}
                {index < navSections.length - 1 && (
                  <hr className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} my-2`} />
                )}
              </React.Fragment>
            ))}
          </ul>
          {/* Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`mt-4 w-full rounded-lg shadow-md p-3 transition duration-300 text-center ${isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-200 hover:bg-gray-300'}`}
          >
            {isDarkMode ? 'Turn on Light Mode' : 'Turn on Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;