import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTheme } from '../assets/ThemeContext';

const AboutSection = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <section 
    id="about-us" 
    className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-10`}
    aria-labelledby="about-heading"
  >
    <div className="container mx-auto px-32">
      <div className="flex flex-col lg:flex-row">
        
        {/* Image Section with Accessible Alt Text */}
        <div className="lg:w-5/12 md:w-1/2 mb-4 lg:mb-0"> {/* Adjusted margin here */}
          <img 
            src="/img/pexels-fauxels-3182834.jpg" 
            alt="Team at 24XDEV collaborating on comprehensive web solutions" 
            className="img-fluid rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
  
        {/* Content Section */}
        <div className="lg:w-7/12 md:w-1/2 mt-2"> {/* Optional: Adjust top margin here */}
          <article className="about-content">
            <header>
              <h2 id="about-heading" className="text-3xl font-bold mb-4">About 24XDEV</h2>
              <h3 className="text-2xl font-semibold mb-4">Your Trusted Partner in Comprehensive Web Solutions</h3>
            </header>
            
            <p className="mb-4">
              At <strong>24XDEV</strong>, our mission is to elevate your digital presence through personalized web development, design, and maintenance services. We provide a comprehensive suite of solutions tailored to your business goals, ensuring that your website not only looks stunning but also performs optimally across all devices.
            </p>
            
            <p className="mb-4">
              Our experienced team at <strong>24XDEV</strong> is committed to innovation and excellence, working to deliver top-notch results and support at every stage of your website's lifecycle. Our services include:
            </p>
            
            {/* Services List */}
            <ul className="list-disc list-inside mb-4" aria-label="List of services provided by 24XDEV">
              {[
                { title: "Designing", description: "Crafting visually appealing and user-friendly designs that resonate with your brand and captivate your audience from the first click." },
                { title: "Development", description: "Building scalable and responsive websites with the latest technology, tailored to meet your business needs and deliver an exceptional user experience." },
                { title: "Hosting", description: "Providing reliable, fast, and secure hosting solutions to ensure that your site is always up and running smoothly." },
                { title: "Deployment", description: "Handling the seamless deployment of your website, minimizing downtime and maximizing efficiency for a smooth launch." },
                { title: "Maintenance", description: "Offering ongoing support with regular updates, security enhancements, and troubleshooting to keep your site optimized and secure." },
                { title: "All-in-One Solutions", description: "Providing an end-to-end service that takes care of your website’s lifecycle, allowing you to focus on scaling your business." },
              ].map((service, index) => (
                <li key={index} className="flex items-center mb-2">
                  <AiOutlineCheckCircle size={20} color="#4CAF50" aria-hidden="true" />
                  <span className="ml-2"><strong>{service.title}</strong>: {service.description}</span>
                </li>
              ))}
            </ul>
  
            <footer>
              <h4 className="text-xl font-semibold">Let’s Build Something Great Together with 24XDEV</h4>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default AboutSection;
