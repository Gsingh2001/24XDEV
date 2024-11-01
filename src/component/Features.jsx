import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs'; // Import the icon

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row h-full space-y-6 md:space-y-0 md:space-x-4">
        
        {/* First Column with One Card (50% width on large screens) */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div 
            className="bg-cover bg-center rounded-lg shadow-lg flex-1 flex flex-col relative"
            style={{ backgroundImage: "url('/img/pexels-designecologist-1779487.jpg')" }}
          >
            <div className="bg-black bg-opacity-50 p-6 flex-1 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white mb-2">UX & UI Design with Development</h2>
              <p className="text-gray-200 mb-4">
                Our team specializes in creating intuitive and engaging user experiences that drive conversion. We merge design with development for seamless results.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">Getting Started</span>
                <BsArrowUpRightCircle className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Second Column with Two Cards (50% width split on large screens, stacked on smaller screens) */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col space-y-6 md:space-y-4">
          <a href="#" className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg shadow-lg flex-1 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-200">Web Development</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
              We build responsive and scalable web applications tailored to your business needs, ensuring optimal performance across devices.
            </p>
            <BsArrowUpRightCircle className="self-end text-blue-800 dark:text-blue-200" size={24} />
          </a>
          <a href="#" className="bg-green-100 dark:bg-green-800 p-6 rounded-lg shadow-lg flex-1 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-200">Digital Marketing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
              Our digital marketing strategies are designed to enhance your online presence and engage your target audience effectively.
            </p>
            <BsArrowUpRightCircle className="self-end text-green-800 dark:text-green-200" size={24} />
          </a>
        </div>

        {/* Third Column with One Card (25% width on large screens) */}
        <div className="w-full lg:w-1/4 flex flex-col">
          <a href="#" className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-lg shadow-lg flex-1 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-yellow-800 dark:text-yellow-200">Mobile App Development</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
              We create user-friendly mobile applications that enhance user experience and provide solutions tailored to your needs.
            </p>
            <BsArrowUpRightCircle className="self-end text-yellow-800 dark:text-yellow-200" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Features;