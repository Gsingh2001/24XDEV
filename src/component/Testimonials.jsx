// src/pages/Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../assets/ThemeContext';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    name: "John Doe",
    location: "New York, USA",
    feedback: "24xDev exceeded our expectations with a clean, modern, and responsive website. Their team was incredibly professional and responsive to our needs.",
    rating: 5,
  },
  {
    name: "Emily Smith",
    location: "London, UK",
    feedback: "Their expertise in React and Firebase made our project seamless. Highly recommend 24xDev for anyone looking to build a high-quality web app!",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    location: "Mumbai, India",
    feedback: "Excellent work! They delivered a custom CMS for our blog with all the features we needed. Great communication and fast delivery.",
    rating: 4,
  },
  {
    name: "Sarah Johnson",
    location: "San Francisco, USA",
    feedback: "I am thrilled with the final product! The team at 24xDev was very accommodating and delivered exactly what we envisioned for our e-commerce site.",
    rating: 5,
  },
  {
    name: "Amit Shah",
    location: "Bengaluru, India",
    feedback: "24xDev transformed our website, making it modern and fast. They implemented great designs and ensured it was SEO-optimized.",
    rating: 5,
  },
  {
    name: "David Brown",
    location: "Manchester, UK",
    feedback: "A wonderful experience! The team created a user-friendly interface and optimized our database, greatly improving our website's performance.",
    rating: 4,
  },
];

const Testimonials = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500, // 1 second delay
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 480, // You can adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <div className={`p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        What Our Clients Say
      </h2>
      <Slider {...settings} className="mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className={`p-6 rounded-lg shadow-lg text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
            initial={{ opacity: 0, y: 20 }} // Start off-screen and transparent
            animate={{ opacity: 1, y: 0 }} // Animate to visible
            exit={{ opacity: 0, y: 20 }} // Animate out
            transition={{ duration: 0.5 }} // Animation duration
          >
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-sm">{testimonial.location}</p>
            <p className="my-4">{testimonial.feedback}</p>
            <p className="text-yellow-500 text-lg">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
