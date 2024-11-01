// AboutSection.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTheme } from '../assets/ThemeContext';

const AboutSection = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state
  const controls = useAnimation(); // Create animation controls

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-us');
      const rect = section.getBoundingClientRect();
      // Check if the section is in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start("visible");
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check to animate if the section is already in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.section 
      id="about-us" 
      className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-10`}
      aria-labelledby="about-heading"
      initial="hidden"
      animate={controls} // Use the animation controls
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          
          {/* Image Section with Accessible Alt Text */}
          <motion.div 
            className="w-full lg:w-5/12 md:w-1/2 mb-6 lg:mb-0 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img 
              src="/img/pexels-fauxels-3182834.jpg" 
              alt="Team at 24XDEV collaborating on comprehensive web solutions" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
    
          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-7/12 md:w-1/2 mt-2"
            variants={itemVariants}
          >
            <article className="about-content">
              <header>
                <motion.h2 
                  id="about-heading" 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  variants={itemVariants}
                >
                  About 24XDEV
                </motion.h2>
                
                <motion.h3 
                  className="text-xl md:text-2xl font-semibold mb-4"
                  variants={itemVariants}
                >
                  Your Trusted Partner in Comprehensive Web Solutions
                </motion.h3>
              </header>
              
              <motion.p 
                className="mb-4 text-sm md:text-base"
                variants={itemVariants}
              >
                At <strong>24XDEV</strong>, our mission is to elevate your digital presence through personalized web development, design, and maintenance services. We provide a comprehensive suite of solutions tailored to your business goals, ensuring that your website not only looks stunning but also performs optimally across all devices.
              </motion.p>
              
              <motion.p 
                className="mb-4 text-sm md:text-base"
                variants={itemVariants}
              >
                Our experienced team at <strong>24XDEV</strong> is committed to innovation and excellence, working to deliver top-notch results and support at every stage of your website's lifecycle. Our services include:
              </motion.p>
              
              {/* Services List */}
              <motion.ul 
                className="list-disc list-inside space-y-2 mb-4 text-sm md:text-base" 
                aria-label="List of services provided by 24XDEV"
                variants={containerVariants}
              >
                {[
                  { title: "Designing", description: "Crafting visually appealing and user-friendly designs that resonate with your brand and captivate your audience from the first click." },
                  { title: "Development", description: "Building scalable and responsive websites with the latest technology, tailored to meet your business needs and deliver an exceptional user experience." },
                  { title: "Hosting", description: "Providing reliable, fast, and secure hosting solutions to ensure that your site is always up and running smoothly." },
                  { title: "Deployment", description: "Handling the seamless deployment of your website, minimizing downtime and maximizing efficiency for a smooth launch." },
                  { title: "Maintenance", description: "Offering ongoing support with regular updates, security enhancements, and troubleshooting to keep your site optimized and secure." },
                  { title: "All-in-One Solutions", description: "Providing an end-to-end service that takes care of your website’s lifecycle, allowing you to focus on scaling your business." },
                ].map((service, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <AiOutlineCheckCircle size={20} color="#4CAF50" aria-hidden="true" />
                    <span className="ml-2"><strong>{service.title}</strong>: {service.description}</span>
                  </motion.li>
                ))}
              </motion.ul>
    
              <motion.footer variants={itemVariants}>
                <h4 className="text-lg md:text-xl font-semibold">Let’s Build Something Great Together with 24XDEV</h4>
              </motion.footer>
            </article>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
