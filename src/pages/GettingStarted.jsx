import React, { useState } from 'react';
import Step1 from '../component/forms/step1';
import Step2 from '../component/forms/step2';
import Step3 from '../component/forms/step3';
import Step4 from '../component/forms/step4';
import Step5 from '../component/forms/step5';
import { useTheme } from '../assets/ThemeContext';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1)); // Limit to max step
  const handleBack = () => setStep((s) => Math.max(s - 1, 0)); // Limit to min step
  const handleSubmit = () => setStep(4); // Move to the thank-you page
  const handleDotClick = (index) => setStep(index);

  const steps = [
    <Step1 onNext={handleNext} onBack={handleBack} />,
    <Step2 onNext={handleNext} onBack={handleBack} />,
    <Step3 onNext={handleNext} onBack={handleBack} />,
    <Step4 onNext={handleNext} onBack={handleBack} onSubmit={handleSubmit} />,
    <Step5 />
  ];

  return (
    <div
      className={`flex items-center justify-center py-12 w-screen ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      } transition duration-300`}
    >
      <div
        className={`relative w-[90%] py-12 p-5 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } transition duration-300`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 px-4 py-2 rounded ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Step Dots */}
        {step < 4 && ( // Only show dots for the first four steps
          <div className="flex justify-center mb-4">
            {steps.slice(0, 4).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                  index === step
                    ? isDarkMode
                      ? 'bg-blue-400'
                      : 'bg-blue-500'
                    : 'bg-gray-500'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        )}
        
        {/* Step Content */}
        <div className="px-12 h-full">{steps[step]}</div>
      </div>
    </div>
  );
};

export default MultiStepForm;
