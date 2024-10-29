// Step2.jsx
import React, { useState } from 'react';
import { useUserContext } from '../../assets/UserContext';

const Step2 = ({ onNext }) => {
  const { userData, setUserData } = useUserContext();
  const [additionalInfo, setAdditionalInfo] = useState(userData.additionalInfo || '');

  const handleInputChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const handleNext = () => {
    setUserData(prev => ({ ...prev, additionalInfo }));
    onNext(additionalInfo);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 2: Additional Information</h2>
      <input
        type="text"
        value={additionalInfo}
        onChange={handleInputChange}
        placeholder="Enter additional information"
        className="border rounded-lg p-2 w-full"
      />
    </div>
  );
};

export default Step2;
