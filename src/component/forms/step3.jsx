import React, { useState } from 'react';
import { useUserContext } from '../../assets/UserContext';
import { useTheme } from '../../assets/ThemeContext';

const Step3 = ({ onNext, onBack }) => {
  const { userData, setUserData } = useUserContext();
  const { isDarkMode } = useTheme(); // Access dark mode state
  const [bestTimeToCall, setBestTimeToCall] = useState(userData.bestTimeToCall || '');
  const [deadlineDate, setDeadlineDate] = useState(userData.deadlineDate || '');
  const [extraInfo, setExtraInfo] = useState(userData.extraInfo || '');
  const [budget, setBudget] = useState(userData.budget || 0); // Initialize budget
  const [currency, setCurrency] = useState(userData.currency || 'USD'); // Initialize currency

  const handleNext = () => {
    setUserData(prev => ({
      ...prev,
      bestTimeToCall,
      deadlineDate,
      extraInfo,
      budget,
      currency,
    }));
    onNext();
  };

  const handleBudgetChange = (value) => {
    // Ensure budget is a multiple of 5
    const adjustedValue = Math.round(value / 5) * 5;
    setBudget(adjustedValue);
  };

  return (
    <div className={`${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h2 className="text-xl font-semibold mb-4">Step 3: Preferences</h2>
      
      <label className="block mb-2">
        Best Time to Call You:
        <input
          type="text"
          value={bestTimeToCall}
          onChange={(e) => setBestTimeToCall(e.target.value)}
          className={`mt-1 block w-full border rounded px-2 py-1 ${
            isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
          }`}
          placeholder="Enter the best time to call"
        />
      </label>
      
      <label className="block mb-2">
        Deadline Date:
        <input
          type="date"
          value={deadlineDate}
          onChange={(e) => setDeadlineDate(e.target.value)}
          className={`mt-1 block w-full border rounded px-2 py-1 ${
            isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
          }`}
        />
      </label>
      
      <label className="block mb-2">
        Extra Info:
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
          className={`mt-1 block w-full border rounded px-2 py-1 ${
            isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
          }`}
          rows="4"
          placeholder="Enter any additional information"
        />
      </label>
      
      {/* Currency Selection */}
      <label className="block mb-2">
        Currency:
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className={`mt-1 block w-full border rounded px-2 py-1 ${
            isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
          }`}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="GBP">GBP</option>
          <option value="CAD">CAD</option>
          {/* Add more currencies as needed */}
        </select>
      </label>
      
      {/* Budget Input Section */}
      <label className="block mb-2">
        Budget:
        <div className="flex items-center">
          <input
            type="number"
            value={budget}
            onChange={(e) => handleBudgetChange(e.target.value)}
            className={`mr-2 w-20 border rounded px-2 py-1 ${
              isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
            }`}
            min="0"
            placeholder="Enter budget"
          />
          <input
            type="range"
            min="0"
            max="10000" // Set max value according to your budget requirements
            step="5" // Ensures slider moves in multiples of 5
            value={budget}
            onChange={(e) => handleBudgetChange(e.target.value)}
            className="flex-grow"
          />
        </div>
      </label>
      
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
            isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default Step3;
