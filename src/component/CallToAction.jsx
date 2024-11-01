import React, { useEffect } from 'react';
import { useTheme } from '../assets/ThemeContext'; // Import theme context
import { Link } from 'react-router-dom'; // Import Link from React Router
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation

const CallToAction = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state
  const controls = useAnimation();

  // Animation variants for entry
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Start animation on component mount
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section
      id="call-to-action"
      className={`py-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            variants={animationVariants}
            className="lg:w-9/12 text-center lg:text-left mb-6 lg:mb-0"
          >
            <h3 id="cta-heading" className="text-3xl font-bold">
              Transform Your Business Today
            </h3>
            <p className="mt-4 text-lg">
              Ready to elevate your online presence? Whether you need a stunning website, reliable hosting, or comprehensive web solutions, we’re here to help. Our expert team provides custom web design, development, deployment, and ongoing maintenance to ensure your success. Let’s build something great together!
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
            variants={animationVariants}
            className="lg:w-3/12 text-center"
          >
            <Link
              to="/gettingstarted"
              className={`inline-block ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white py-2 px-4 rounded transition duration-300`}
              aria-label="Get started with 24XDEV services"
            >
              Get Started Now
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
