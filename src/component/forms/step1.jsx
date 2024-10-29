import React, { useState } from 'react';
import { useUserContext } from '../../assets/UserContext';
import { useTheme } from '../../assets/ThemeContext';

const Step1 = ({ onNext }) => {
  const { userData, setUserData } = useUserContext();
  const { isDarkMode } = useTheme(); // Access dark mode state
  const [services, setServices] = useState(userData.services || []);
  const [otherService, setOtherService] = useState(userData.otherService || '');

  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    if (value === 'other') {
      if (checked) {
        setServices((prev) => [...prev, value]);
      } else {
        setServices((prev) => prev.filter((option) => option !== value));
        setOtherService('');
      }
    } else {
      setServices((prev) =>
        checked ? [...prev, value] : prev.filter((option) => option !== value)
      );
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherService(event.target.value);
  };

  const handleNext = () => {
    setUserData({ ...userData, services, otherService });
    onNext();
    console.log('+++++++++', userData);
  };

  return (
    <div className={`${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h2 className="text-xl font-semibold mb-4">Step 1: Select Services</h2>
      {['web development', 'web design', 'backend', 'hosting', 'domain', 'other'].map((service) => (
        <label
          key={service}
          className={`flex items-center mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-800'
          }`}
        >
          <input
            type="checkbox"
            value={service}
            checked={services.includes(service)}
            onChange={handleOptionChange}
            className={`mr-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
          />
          {service}
        </label>
      ))}

      {services.includes('other') && (
        <input
          type="text"
          value={otherService}
          onChange={handleOtherInputChange}
          placeholder="Please specify"
          className={`border rounded p-2 mt-2 w-full ${
            isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
          }`}
        />
      )}

      <div className="flex justify-end mt-4">
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded ${
            isDarkMode
              ? 'bg-blue-600 text-white hover:bg-blue-500'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
