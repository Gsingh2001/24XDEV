import React from 'react';
import { useTheme } from '../assets/ThemeContext'; // Import your theme context
import { Link } from 'react-router-dom'; // Import Link from React Router

const CallToAction = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <section
      id="call-to-action"
      className={`py-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-9/12 text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-3xl font-bold">Transform Your Business Today</h3>
            <p className="mt-4 text-lg">
              Ready to elevate your online presence? Whether you need a stunning website, reliable hosting, or end-to-end web solutions, we're here to help. Our expert team provides custom web design, development, deployment, and ongoing maintenance to ensure your success. Let's build something great together!
            </p>
          </div>
          <div className="lg:w-3/12 text-center">
            <Link
              to="/getting-started"
              className={`inline-block ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white py-2 px-4 rounded hover:${isDarkMode ? 'bg-blue-600' : 'bg-blue-700'} transition duration-300`}
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
