import React from 'react';
import { FaProjectDiagram, FaUsers, FaClock, FaLightbulb, FaHandshake } from 'react-icons/fa';
import TeamSection from '../component/TeamSection';
import IntroductionToCEO from '../component/IntroductionToCEO';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <section className="relative w-full h-[400px]">
        <img
          src="https://via.placeholder.com/1600x400"
          alt="About Us Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Growth & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Each card includes an icon and data */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaProjectDiagram className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Projects Completed</h3>
            <p className="text-3xl font-bold text-blue-600">200+</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Clients Worldwide</h3>
            <p className="text-3xl font-bold text-green-600">100+</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaClock className="text-purple-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Years of Experience</h3>
            <p className="text-3xl font-bold text-purple-600">10+</p>
          </div>
        </div>
      </section>
<IntroductionToCEO />
      <TeamSection />
      {/* Values & Vision Section */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Vision & Values</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
          Our goal is to deliver impactful solutions that drive meaningful change. Guided by integrity,
          innovation, and excellence, we continuously strive to exceed expectations and build a sustainable future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex items-center">
            <FaLightbulb className="text-blue-600 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">We embrace creativity and ingenuity in all our solutions.</p>
            </div>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg flex items-center">
            <FaHandshake className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-gray-600">Our commitment to transparency and honesty guides our actions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
