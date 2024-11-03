import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../assets/ThemeContext'; // Adjust the import according to your ThemeContext path
import { motion } from 'framer-motion';

const IntroductionToCEO = () => {
    const { currentTheme, isDarkMode } = useTheme(); // Get the current theme
    const ceo = {
        name: 'Gurmanpreet Singh',
        position: 'CEO and Director',
        location: 'Punjab , India',
        description: `Gurmanpreet Singh is a visionary leader with a commitment to excellence and innovation. Based in the United Kingdom, he brings years of expertise and dedication to drive our company forward.`,
        imgSrc: '/img/image_1728054253661.png', // Replace with an actual image URL
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <section className={`py-16 px-4 md:px-16`} style={{ backgroundColor: currentTheme.colors.background }}>
            <motion.div
                className={`flex flex-col lg:flex-row items-center justify-center mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-10 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-10`}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{ duration: 0.5 }}
            >
                <div className="flex-shrink-0">
                    <motion.img
                        src={ceo.imgSrc}
                        alt={ceo.name}
                        className="w-40 h-40 rounded-full border-4 border-blue-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className={`text-center lg:text-left ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    <motion.h3 className="text-3xl font-semibold" variants={itemVariants}>
                        {ceo.name}
                    </motion.h3>
                    <motion.p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} mb-4`} variants={itemVariants}>
                        {ceo.position}
                    </motion.p>
                    <motion.p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} mb-4`} variants={itemVariants}>
                        {ceo.location}
                    </motion.p>
                    <motion.p className={`text-gray-300 ${isDarkMode ? 'mb-6' : 'mb-6'}`} variants={itemVariants}>
                        {ceo.description}
                    </motion.p>
                    <motion.div className={`flex justify-center lg:justify-start space-x-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} variants={itemVariants}>
                        <a href="#" aria-label="LinkedIn" className="social-icon hover:text-blue-600">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="#" aria-label="Twitter" className="social-icon hover:text-blue-400">
                            <FaTwitter size={28} />
                        </a>
                        <a href="#" aria-label="Email" className="social-icon hover:text-green-500">
                            <FaEnvelope size={28} />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default IntroductionToCEO;
