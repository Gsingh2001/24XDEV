import React, { useEffect } from 'react';
import { useTheme } from '../assets/ThemeContext';
import { motion, useAnimation } from 'framer-motion';
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
    lightBgColor: 'bg-[#fceef3]', // Light pink
    darkBgColor: 'bg-[#3b2e35]', // Dark pink
    lightIconBgColor: 'bg-[#ffeef0]', // Light icon background
    darkIconBgColor: 'bg-[#3c1d24]', // Dark icon background
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "We prioritize quality in every project, adhering to best practices and standards to deliver high-performance websites that stand out.",
    icon: <AiOutlineStar className="text-[#e98e06] text-4xl" />,
    lightBgColor: 'bg-[#fff0da]', // Light yellow
    darkBgColor: 'bg-[#7f5d01]', // Dark yellow
    lightIconBgColor: 'bg-[#fff8e1]', // Light icon background
    darkIconBgColor: 'bg-[#6d4c00]', // Dark icon background
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    description: "At 24XDEV, we value our clients’ needs and work closely with you to ensure your vision comes to life with personalized solutions.",
    icon: <AiOutlineUser className="text-[#3fcdc7] text-4xl" />,
    lightBgColor: 'bg-[#e6fdfc]', // Light teal
    darkBgColor: 'bg-[#004d4f]', // Dark teal
    lightIconBgColor: 'bg-[#b2ece9]', // Light icon background
    darkIconBgColor: 'bg-[#002726]', // Dark icon background
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising on quality, providing you with the best value for your investment.",
    icon: <AiOutlineDollar className="text-[#41cf2e] text-4xl" />,
    lightBgColor: 'bg-[#eafde7]', // Light green
    darkBgColor: 'bg-[#003f00]', // Dark green
    lightIconBgColor: 'bg-[#d9f7e8]', // Light icon background
    darkIconBgColor: 'bg-[#002200]', // Dark icon background
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "Our relationship doesn’t end at launch. We provide ongoing support and maintenance to keep your website updated and secure.",
    icon: <AiOutlineLike className="text-[#41cf2e] text-4xl" />,
    lightBgColor: 'bg-[#e1eeff]', // Light blue
    darkBgColor: 'bg-[#002244]', // Dark blue
    lightIconBgColor: 'bg-[#cce5ff]', // Light icon background
    darkIconBgColor: 'bg-[#00131a]', // Dark icon background
  },
  {
    id: 6,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines. Our team is committed to delivering your projects on time without compromising quality.",
    icon: <AiOutlineClockCircle className="text-[#8660fe] text-4xl" />,
    lightBgColor: 'bg-[#ecebff]', // Light purple
    darkBgColor: 'bg-[#3c2e6a]', // Dark purple
    lightIconBgColor: 'bg-[#e5d9ff]', // Light icon background
    darkIconBgColor: 'bg-[#21163c]', // Dark icon background
  },
];

const WhyChooseUs = () => {
  const { isDarkMode } = useTheme();
  const controls = useAnimation();

  // Animation variants for entry
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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
          {reasonsData.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay
              whileHover="hover"
              variants={animationVariants}
              className={`flex flex-col justify-center items-center md:p-8 lg:p-14 border rounded-lg shadow-lg 
                          ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} ${isDarkMode ? reason.darkBgColor : reason.lightBgColor}`}
            >
              <div className={`w-16 h-16 rounded-full flex justify-center items-center ${isDarkMode ? reason.darkIconBgColor : reason.lightIconBgColor}`}>
                {reason.icon}
              </div>
              <h3 className={`mt-12 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{reason.title}</h3>
              <p className={`mt-5 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
