import React from 'react';
import { FaGem, FaObjectGroup, FaCloud, FaSync, FaBriefcase } from 'react-icons/fa';
import { useTheme } from '../assets/ThemeContext'; // Assuming you have a ThemeContext for dark mode

const WhyChooseUs = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  const features = [
    {
      icon: <FaGem />,
      title: 'Custom Design Solutions',
      description: 'We create tailored designs that align with your brand, ensuring your website stands out and engages your audience.',
      color: 'text-pink-500', // Use Tailwind color classes
    },
    {
      icon: <FaObjectGroup />,
      title: 'Seamless Development',
      description: 'Our expert development team builds robust, responsive websites that provide a smooth user experience on all devices.',
      color: 'text-yellow-400',
    },
    {
      icon: <FaCloud />,
      title: 'Reliable Hosting & Deployment',
      description: 'We offer secure, scalable hosting and hassle-free deployment to ensure your website runs smoothly with minimal downtime.',
      color: 'text-blue-500',
    },
    {
      icon: <FaSync />,
      title: 'Ongoing Maintenance & Support',
      description: 'Our maintenance services ensure your website stays up-to-date, secure, and fully operational, with constant monitoring and updates.',
      color: 'text-green-500',
    },
    {
      icon: <FaBriefcase />,
      title: 'All-in-One Solutions',
      description: 'From design and development to hosting, deployment, and maintenance, we provide end-to-end services that cover every aspect of your website needs.',
      color: 'text-purple-600',
    },
  ];

  return (
    <section id="why-us" className={`py-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container-fluid mx-auto px-4">
        <header className="text-center mb-8">
          <h3 className="text-3xl font-bold">Why Choose Us?</h3>
          <p className="mt-2 text-lg">
            We provide comprehensive website solutions, handling everything from design to deployment and ongoing support, tailored to meet your business needs.
          </p>
        </header>

        <div className="flex flex-wrap items-stretch">
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <img src="/img/why-us.jpg" alt="Why Choose Us" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-6">
              <p className="mb-4">
                At 24XDEV, we are committed to delivering high-quality, all-in-one web solutions that ensure your online presence is professional, secure, and effective. With our expertise, you can focus on growing your business while we handle the complexities of your website.
              </p>
              <p>
                We pride ourselves on offering personalized services that adapt to your needs, ensuring your website is not only functional but also future-proof.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  className={`flex items-center p-4 rounded-lg border-l-4 transition-all duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}
                  key={index}
                >
                  <div className={`text-3xl mr-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
