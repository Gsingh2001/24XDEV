import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function TeamSection() {
    const teamMembers = [
        { name: 'John Doe', position: 'CEO', imgSrc: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', position: 'CTO', imgSrc: 'https://via.placeholder.com/150' },
        { name: 'Emily Johnson', position: 'Designer', imgSrc: 'https://via.placeholder.com/150' },
        { name: 'Michael Brown', position: 'Developer', imgSrc: 'https://via.placeholder.com/150' },
    ];

    return (
        <section className="py-16 px-4 md:px-16 bg-gray-50">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="team-card bg-white p-6 rounded-xl text-center transition-transform duration-300"
                    >
                        <div className="image-border mx-auto mb-4">
                            <img
                                src={member.imgSrc}
                                alt={member.name}
                                className="w-32 h-32 rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-gray-500 mb-4">{member.position}</p>
                        <div className="flex justify-center space-x-6 text-gray-500 mt-4">
                            <a href="#" aria-label="LinkedIn" className="social-icon hover:text-blue-600">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" aria-label="Twitter" className="social-icon hover:text-blue-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" aria-label="Email" className="social-icon hover:text-green-500">
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamSection;
