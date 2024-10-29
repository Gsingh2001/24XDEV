// Step4.jsx
import React, { useState } from 'react';
import { useUserContext } from '../../assets/UserContext';

const Step4 = ({ onNext }) => {
  const { userData, setUserData } = useUserContext();
  const [contactDetails, setContactDetails] = useState(userData.contactDetails || '');

  const handleInputChange = (event) => {
    setContactDetails(event.target.value);
  };

  const handleNext = () => {
    setUserData(prev => ({ ...prev, contactDetails }));
    onNext(contactDetails);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 4: Contact Details</h2>
      <input
        type="text"
        value={contactDetails}
        onChange={handleInputChange}
        placeholder="Enter your contact details"
        className="border rounded-lg p-2 w-full"
      />
      <button onClick={handleNext} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );
};

export default Step4;
