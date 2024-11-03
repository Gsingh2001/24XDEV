import React from 'react';
import { useTheme } from '../assets/ThemeContext';

// Sample blog data can be defined here or fetched from an API.
const sampleBlogs = [
    { id: 1, title: 'Blog Post 1', description: 'This is a description of blog post 1.', imageUrl: 'https://via.placeholder.com/400' },
    { id: 2, title: 'Blog Post 2', description: 'This is a description of blog post 2.', imageUrl: 'https://via.placeholder.com/400' },
    { id: 3, title: 'Blog Post 3', description: 'This is a description of blog post 3.', imageUrl: 'https://via.placeholder.com/400' },
    // Add more blog posts as needed
];

const OurBlogs = () => {
    const { currentTheme } = useTheme();

    return (
        <section className="our-blogs py-10 px-8" style={{ backgroundColor: currentTheme.colors.background }}>
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: currentTheme.colors.primary }}>
                Our Blogs
            </h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="relative rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        style={{ backgroundImage: `url(${blog.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-semibold mb-2" style={{ color: currentTheme.colors.card1.text }}>
                                {blog.title}
                            </h3>
                            <p className="mb-4" style={{ color: currentTheme.colors.text }}>
                                {blog.description.length > 100 ? `${blog.description.substring(0, 100)}...` : blog.description}
                            </p>
                            <a href={`/blogs/${blog.id}`} className="text-blue-500 hover:underline" style={{ color: currentTheme.colors.link }}>
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurBlogs;
