// Step3.jsx
import React, { useState } from 'react';
import { useUserContext } from '../../assets/UserContext';

const Step3 = ({ onNext }) => {
  const { userData, setUserData } = useUserContext();
  const [preferences, setPreferences] = useState(userData.preferences || '');

  const handleInputChange = (event) => {
    setPreferences(event.target.value);
  };

  const handleNext = () => {
    setUserData(prev => ({ ...prev, preferences }));
    onNext(preferences);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 3: Preferences</h2>
      <textarea
        value={preferences}
        onChange={handleInputChange}
        placeholder="Describe your preferences"
        className="border rounded-lg p-2 w-full h-24"
      />
      <button onClick={handleNext} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );
};

export default Step3;
