// ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('bg-gray-900', !isDarkMode);
    document.body.classList.toggle('bg-gray-100', isDarkMode);
  };

  // Define light and dark color schemes
  const lightMode = {
    colors: {
      text: '#05060a',
      background: '#f8f9fc',
      header: '#ffffff',
      footer: '#f1f1f1',
      primary: '#4763b8',
      primaryHover: '#3a54b8',
      secondary: '#929ee3',
      accent: '#4962f3',
      neutralLight: '#e9ecef',
      neutralDark: '#343a40',
      buttonText: '#ffffff',
      buttonBackground: '#4763b8',
      buttonHover: '#3a54b8',
      link: '#007bff',
      linkHover: '#0056b3',
      border: '#ced4da',
      shadow: 'rgba(0, 0, 0, 0.1)',
      alertSuccess: '#28a745',
      alertError: '#dc3545',
      alertWarning: '#ffc107',
      alertInfo: '#17a2b8',
    },
  };

  const darkMode = {
    colors: {
      text: '#f5f6fa',
      background: '#0b0d19',
      header: '#1e1e2f',
      footer: '#1c1c2a',
      primary: '#4763b8',
      primaryHover: '#3a54b8',
      secondary: '#1c286d',
      accent: '#0c25b6',
      neutralLight: '#2a2b2f',
      neutralDark: '#343a40',
      buttonText: '#ffffff',
      buttonBackground: '#007bff',
      buttonHover: '#0056b3',
      link: '#66aaff',
      linkHover: '#3388cc',
      border: '#495057',
      shadow: 'rgba(0, 0, 0, 0.5)',
      alertSuccess: '#4caf50',
      alertError: '#f44336',
      alertWarning: '#ff9800',
      alertInfo: '#03a9f4',
    },
  };

  const currentTheme = isDarkMode ? darkMode : lightMode;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
