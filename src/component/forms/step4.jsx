import React from 'react';
import { useUserContext } from '../../assets/UserContext';
import { useTheme } from '../../assets/ThemeContext';

const Step4 = ({ onBack, onSubmit }) => {
  const { userData } = useUserContext();
  const { isDarkMode } = useTheme(); // Access dark mode state

  const handleSubmit = async () => {
    // try {
    //   const response = await fetch('https://two4xdevbackend.onrender.com/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userData),
    //   });

    //   if (response.ok) {
    //     console.log('Data sent successfully:', userData);
    //     onSubmit();  // Move ahead if the API call is successful
    //   } else {
    //     console.error('Failed to send data:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error sending data:', error);
    // }
    console.log("++++++++++++++", userData)
    onSubmit(); 
  };

  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
        Step 4: Review and Submit
      </h2>
      
      <div className="mb-6">
        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          Review Your Information
        </h3>
        <div className={`border rounded-lg p-4 ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'}`}>
          <p className="mb-1"><strong>Selected Services:</strong> {userData.services?.length > 0 ? userData.services.join(', ') : 'None'}</p>
          <p className="mb-1"><strong>Name:</strong> {userData.name || 'N/A'}</p>
          <p className="mb-1"><strong>Email:</strong> {userData.email || 'N/A'}</p>
          <p className="mb-1"><strong>Contact Number:</strong> {userData.contactNumber || 'N/A'}</p>
          <p className="mb-1"><strong>Best Time to Call:</strong> {userData.bestTimeToCall || 'N/A'}</p>
          <p className="mb-1"><strong>Deadline Date:</strong> {userData.deadlineDate || 'N/A'}</p>
          <p className="mb-1"><strong>Extra Info:</strong> {userData.extraInfo || 'N/A'}</p>
          <p className="mb-1"><strong>Budget:</strong> {userData.budget ? `${userData.budget} ${userData.currency}` : 'N/A'}</p>
        </div>
      </div>

      <div className="flex justify-end gap-5">
        <button
          onClick={onBack}
          className={`px-4 py-2 rounded transition duration-200 ${
            isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className={`px-4 py-2 rounded transition duration-200 ${
            isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
