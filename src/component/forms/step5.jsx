// Step5.jsx
import React from 'react';
import { useUserContext } from '../../assets/UserContext';

const Step5 = () => {
  const { userData } = useUserContext();

  const handleSubmit = () => {
    // Submit the data to your API here
    console.log('Submitting:', userData);
    alert('Data submitted successfully!');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 5: Review & Submit</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Services:</h3>
        <p>{userData.services.join(', ')}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Additional Information:</h3>
        <p>{userData.additionalInfo}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Preferences:</h3>
        <p>{userData.preferences}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Contact Details:</h3>
        <p>{userData.contactDetails}</p>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
};

export default Step5;
