import React, { useState } from 'react';
import { useUserContext } from '../../assets/UserContext';
import { useTheme } from '../../assets/ThemeContext';

const Step2 = ({ onBack, onNext }) => {
  const { userData, setUserData } = useUserContext();
  const { isDarkMode } = useTheme(); // Access dark mode state
  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');
  const [contactNumber, setContactNumber] = useState(userData.contactNumber || '');

  const handleNext = () => {
    setUserData((prev) => ({
      ...prev,
      name,
      email,
      contactNumber,
    }));
    onNext();
  };

  return (
    <div className={`${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h2 className="text-xl font-semibold mb-4">Step 2: Personal Information</h2>
      <div>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-1 block w-full border rounded px-2 py-1 ${
              isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
            }`}
            placeholder="Enter your name"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full border rounded px-2 py-1 ${
              isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
            }`}
            placeholder="Enter your email"
          />
        </label>
        <label className="block mb-2">
          Contact Number:
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className={`mt-1 block w-full border rounded px-2 py-1 ${
              isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
            }`}
            placeholder="Enter your contact number"
          />
        </label>
      </div>

      <div className="flex justify-end gap-5 mt-4">
        <button
          onClick={onBack}
          className={`mt-4 px-4 py-2 rounded hover:bg-gray-600 ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-500 text-white'
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={`mt-4 px-4 py-2 rounded ${
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

export default Step2;
