import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../assets/ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navSections = [
    { name: 'Home', to: '/', content: 'Welcome to our homepage!' },
    { name: 'About Us', to: '/about', content: 'Learn more about us.' },
    { name: 'Services', to: '/services', content: 'Discover our services.' },
    { name: 'Portfolio', to: '/portfolio', content: 'View our work.' },
    { name: 'Contact Us', to: '/contact', content: 'Get in touch with us.' },
    { name: 'Blog', to: '/blog', content: 'Read our latest articles.' },
  ];

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} pt-5 sticky top-0 z-10`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
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

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <NavLink to="/">
                <img className="h-32 w-auto" src="/img/main-logo.png" alt="24xdev.uk" />
              </NavLink>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex space-x-4">
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              {navSections.map((section) => (
                <li key={section.to} className="relative">
                  <NavLink
                    to={section.to}
                    className={`nav-link rounded shadow p-2 transition duration-300 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'}`}
                    onMouseEnter={() => setExpandedSection(section)}
                    onMouseLeave={() => setExpandedSection(null)}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                  >
                    {section.name}
                  </NavLink>
                  {expandedSection === section && (
                    <div className="absolute bg-gray-800 text-white p-4 w-full transition-opacity duration-300 opacity-100">
                      <NavLink
                        to={section.to} // Make the entire content clickable
                        className="block p-2 hover:bg-gray-700 transition duration-300"
                      >
                        {section.content}
                      </NavLink>
                    </div>
                  )}
                </li>
              ))}
              {/* Theme Toggle */}
              <li>
                <label className="theme-switch cursor-pointer ml-4">
                  <input type="checkbox" className="theme-switch__checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
                  <div className="theme-switch__container">
                    <div className="theme-switch__clouds"></div>
                    {/* Consider adding an icon here to indicate the theme */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                    </svg>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
