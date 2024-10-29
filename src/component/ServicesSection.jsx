import React from 'react';
import { AiOutlineBulb, AiOutlineSetting, AiOutlineCloud, AiOutlineRocket, AiOutlineSync, AiOutlineAppstore } from 'react-icons/ai';
import { useTheme } from '../assets/ThemeContext';

const servicesData = [
  {
    id: 1,
    title: "Website Design",
    description: "We craft visually stunning and user-centric designs that reflect your brand and engage your audience from the first glance.",
    icon: <AiOutlineBulb className="text-[#ff689b] text-4xl" />,
    bgColor: 'bg-[#fceef3]',
  },
  {
    id: 2,
    title: "Website Development",
    description: "Our expert developers bring your website to life using cutting-edge technologies to ensure speed, security, and scalability.",
    icon: <AiOutlineSetting className="text-[#e98e06] text-4xl" />,
    bgColor: 'bg-[#fff0da]',
  },
  {
    id: 3,
    title: "Hosting Solutions",
    description: "We provide reliable, secure, and scalable hosting services to keep your website online and performing at its best 24/7.",
    icon: <AiOutlineCloud className="text-[#3fcdc7] text-4xl" />,
    bgColor: 'bg-[#e6fdfc]',
  },
  {
    id: 4,
    title: "Website Deployment",
    description: "Our deployment services ensure your website is launched seamlessly, minimizing downtime and maximizing efficiency.",
    icon: <AiOutlineRocket className="text-[#41cf2e] text-4xl" />,
    bgColor: 'bg-[#eafde7]',
  },
  {
    id: 5,
    title: "Website Maintenance",
    description: "We offer continuous support and maintenance to keep your website updated, secure, and performing optimally over time.",
    icon: <AiOutlineSync className="text-[#41cf2e] text-4xl" />,
    bgColor: 'bg-[#e1eeff]',
  },
  {
    id: 6,
    title: "All-in-One Solutions",
    description: "We provide end-to-end website solutions, from design and development to hosting and ongoing maintenance—everything under one roof.",
    icon: <AiOutlineAppstore className="text-[#8660fe] text-4xl" />,
    bgColor: 'bg-[#ecebff]',
  },
];

const ServicesSection = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <section id='services' className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-10`}>
      <div className="container mx-auto px-8">
        <header className="text-center mb-8">
          <h3 className="text-3xl font-bold">Our Services</h3>
          <p className="text-lg mt-2">We offer comprehensive website solutions that cover every aspect of creating, launching, and maintaining your online presence.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              className={`rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-700' : service.bgColor}`}
              key={service.id}
            >
              <div className="flex flex-col items-center p-6 text-center">
                <div className={`mb-4 flex items-center justify-center w-16 h-16 rounded-full ${isDarkMode ? 'bg-gray-600' : service.bgColor}`}>
                  <div className={`${isDarkMode ? 'text-white' : service.icon.props.className}`}>
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-sm mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
