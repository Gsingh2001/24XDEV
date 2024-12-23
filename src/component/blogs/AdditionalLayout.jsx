import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '../../assets/ThemeContext';

const AdditionalLayout = ({ category, posts, limitWords }) => {
    const { currentTheme } = useTheme(); // Access the current theme

    // Filter posts by category and limit to 3 posts
    const filteredPosts = posts.filter(post => post.category.includes(category.name)).slice(0, 3); 

    return (
        <div className="mt-8 py-8 shadow-lg rounded-lg" style={{ backgroundColor: currentTheme.colors.card1.background }}>
            <div className="container mx-auto px-4">
                <h2 className="text-gray-800 text-3xl font-bold mb-4 flex items-center" style={{ color: currentTheme.colors.text }}>
                    <span className="h-6 border-l-4 border-red-600 mr-3"></span>
                    {category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="flex flex-col bg-gray-100 border border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:shadow-md">
                            <Link to={`blog/${post.id}`}>
                                <img
                                    className="w-full h-56 object-cover rounded-t-lg"
                                    src={post.main_image}
                                    alt={post.title}
                                />
                            </Link>
                            <div className="p-4 flex-grow">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                    <Link to={`blog/${post.id}`} className="text-gray-800 hover:text-red-600" style={{ color: currentTheme.colors.text }}>
                                        {limitWords(post.title, 6)}
                                    </Link>
                                </h3>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                                    {post.category[0]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdditionalLayout;
