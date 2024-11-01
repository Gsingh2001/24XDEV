import React from 'react';
import { useTheme } from '../assets/ThemeContext';
import {
  AiOutlineCheckCircle,
  AiOutlineStar,
  AiOutlineUser,
  AiOutlineDollar,
  AiOutlineLike,
  AiOutlineClockCircle,
} from 'react-icons/ai';

const reasonsData = [
  {
    id: 1,
    title: "Expertise and Experience",
    description: "Our team comprises industry experts with years of experience in web design, development, and digital solutions, ensuring top-notch service.",
    icon: <AiOutlineCheckCircle className="text-[#ff689b] text-4xl" />,
    bgColor: 'bg-[#fceef3]', // Light pink
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "We prioritize quality in every project, adhering to best practices and standards to deliver high-performance websites that stand out.",
    icon: <AiOutlineStar className="text-[#e98e06] text-4xl" />,
    bgColor: 'bg-[#fff0da]', // Light yellow
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    description: "At 24XDEV, we value our clients’ needs and work closely with you to ensure your vision comes to life with personalized solutions.",
    icon: <AiOutlineUser className="text-[#3fcdc7] text-4xl" />,
    bgColor: 'bg-[#e6fdfc]', // Light teal
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising on quality, providing you with the best value for your investment.",
    icon: <AiOutlineDollar className="text-[#41cf2e] text-4xl" />,
    bgColor: 'bg-[#eafde7]', // Light green
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "Our relationship doesn’t end at launch. We provide ongoing support and maintenance to keep your website updated and secure.",
    icon: <AiOutlineLike className="text-[#41cf2e] text-4xl" />,
    bgColor: 'bg-[#e1eeff]', // Light blue
  },
  {
    id: 6,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines. Our team is committed to delivering your projects on time without compromising quality.",
    icon: <AiOutlineClockCircle className="text-[#8660fe] text-4xl" />,
    bgColor: 'bg-[#ecebff]', // Light purple
  },
];

const WhyChooseUs = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="choose-us" className={`py-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
            Why Choose Us
          </h2>
          <p className={`mt-4 text-base leading-7 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} sm:mt-8`}>
            Your trusted partner in web development solutions.
          </p>
        </div>

        <div className={`grid grid-cols-1 mt-2 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-10`}>
          {reasonsData.map((reason) => (
            <div 
              key={reason.id} 
              className={`flex flex-col justify-center items-center md:p-8 lg:p-14 border rounded-lg shadow-lg transition-transform transform hover:scale-105 
                          ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
              <div className={`w-16 h-16 rounded-full flex justify-center items-center ${reason.bgColor}`}>
                {reason.icon}
              </div>
              <h3 className={`mt-12 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{reason.title}</h3>
              <p className={`mt-5 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
