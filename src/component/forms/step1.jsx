// Step1.jsx
import React, { useState } from 'react';
import { useUserContext } from '../../assets/UserContext';

const Step1 = () => {
  const { userData, setUserData } = useUserContext();
  const [selectedOptions, setSelectedOptions] = useState(userData.services || []);

  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions(prev =>
      checked ? [...prev, value] : prev.filter(option => option !== value)
    );
  };

  // No need to handle "Next" here; this will be managed by GettingStarted

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 1: Select Services</h2>
      <div>
        {['web development', 'web design', 'backend', 'hosting', 'domain', 'other'].map((service) => (
          <label key={service} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={service}
              checked={selectedOptions.includes(service)}
              onChange={handleOptionChange}
              className="mr-2"
            />
            {service}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Step1;
