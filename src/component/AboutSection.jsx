import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTheme } from '../assets/ThemeContext';

const AboutSection = ({  }) => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <section id="about-us" className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-10`}>
      <div className="container mx- px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-5/12 md:w-1/2">
            <div className="about-img">
              <img src="/img/about-img.jpg" alt="About Us" className="img-fluid rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="lg:w-7/12 md:w-1/2 mt-6 lg:mt-0">
            <div className="about-content">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <h3 className="text-2xl font-semibold mb-4">Your Trusted Partner in Comprehensive Web Solutions</h3>
              <p className="mb-4">
                At 24XDEV, our mission is to elevate your digital presence with a tailored approach to web development,
                design, and maintenance. We offer a full suite of services that cater to your specific business goals,
                ensuring that your website not only looks stunning but also performs flawlessly across all devices.
              </p>
              <p className="mb-4">
                Our dedicated team brings extensive experience and a passion for innovation, taking pride in delivering
                exceptional results and providing peace of mind through every step of the website development journey.
                We offer:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li className="flex items-center mb-2">
                  <AiOutlineCheckCircle size={20} color="#4CAF50" />
                  <span className="ml-2"><strong>Designing</strong>: Crafting visually appealing and user-friendly designs that resonate with your brand and captivate your audience from the first click.</span>
                </li>
                <li className="flex items-center mb-2">
                  <AiOutlineCheckCircle size={20} color="#4CAF50" />
                  <span className="ml-2"><strong>Development</strong>: Building scalable and responsive websites with the latest technology, tailored to meet your business needs and deliver an exceptional user experience.</span>
                </li>
                <li className="flex items-center mb-2">
                  <AiOutlineCheckCircle size={20} color="#4CAF50" />
                  <span className="ml-2"><strong>Hosting</strong>: Providing reliable, fast, and secure hosting solutions to ensure that your site is always up and running smoothly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <AiOutlineCheckCircle size={20} color="#4CAF50" />
                  <span className="ml-2"><strong>Deployment</strong>: Handling the seamless deployment of your website, minimizing downtime and maximizing efficiency for a smooth launch.</span>
                </li>
                <li className="flex items-center mb-2">
                  <AiOutlineCheckCircle size={20} color="#4CAF50" />
                  <span className="ml-2"><strong>Maintenance</strong>: Offering ongoing support with regular updates, security enhancements, and troubleshooting to keep your site optimized and secure.</span>
                </li>
                <li className="flex items-center mb-2">
                  <AiOutlineCheckCircle size={20} color="#4CAF50" />
                  <span className="ml-2"><strong>All-in-One Solutions</strong>: Providing an end-to-end service that takes care of your website’s lifecycle, allowing you to focus on scaling your business.</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold">Let’s Build Something Great Together</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
