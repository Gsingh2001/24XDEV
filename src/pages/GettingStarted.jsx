import React, { useState } from 'react';
import Step1 from '../component/forms/step1';
import Step2 from '../component/forms/step2';
import Step3 from '../component/forms/step3';
import Step4 from '../component/forms/step4';
import Step5 from '../component/forms/step5';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((s) => Math.min(s + 1, 4)); // Limit to max step
  const handleBack = () => setStep((s) => Math.max(s - 1, 0)); // Limit to min step

  const handleDotClick = (index) => {
    setStep(index);
  };

  const steps = [
    <Step1 onNext={handleNext} />,
    <Step2 onNext={handleNext} onBack={handleBack} />,
    <Step3 onNext={handleNext} onBack={handleBack} />,
    <Step4 onNext={handleNext} onBack={handleBack} />,
    <Step5 onBack={handleBack} />,
  ];

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="w-[90%] h-[90%] p-5 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                index === step ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <div className="flex px-12 h-full">
          {steps[step]}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
