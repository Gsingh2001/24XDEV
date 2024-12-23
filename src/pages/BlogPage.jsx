import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { ref, onValue } from "firebase/database"; // Import necessary Firebase functions
import PostCarousel from '../component/blogs/PostCarousel';
import AdditionalLayout from '../component/blogs/AdditionalLayout';
import { db } from '../../firebase';
import { useTheme } from '../assets/ThemeContext';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Get the current theme context
  const { currentTheme } = useTheme();

  useEffect(() => {
    // Fetch posts from Firebase
    const postsRef = ref(db, 'posts'); // Adjust the path to your posts in the database
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedPosts = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setPosts(fetchedPosts);
      setLoading(false);
    });

    // Fetch categories from Firebase
    const categoriesRef = ref(db, 'categories'); // Adjust the path to your categories in the database
    onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedCategories = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setCategories(fetchedCategories);
    });

  }, []);

  const limitWords = (text, limit) => {
    const plainText = DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
    return plainText.split(' ').slice(0, limit).join(' ') + (plainText.split(' ').length > limit ? '...' : '');
  };

  return (
    <div className="py-12" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {posts.length > 0 && (
            <div className="relative group h-full" style={{ overflow: "hidden" }}>
              <Link to={`/blog/${posts[0].id}`}>
                <img
                  className="w-full h-full object-fill rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  src={posts[0].main_image}
                  alt={posts[0].title}
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg p-6 flex flex-col justify-end">
                <Link to={`/blog/${posts[0].id}`}>
                  <h2
                    className="text-4xl font-semibold text-white mb-4"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitWords(posts[0].title, 8)) }}
                  />
                </Link>
                <p
                  className="text-gray-200 mb-4"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitWords(posts[0].content[0], 20)) }}
                />
                <div className="flex items-center text-gray-300 text-sm">
                  <div className="h-3 w-1 bg-red-600 mr-2"></div>
                  {limitWords(posts[0].category[0], 2)}
                </div>
              </div>
            </div>
          )}
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.slice(1, 5).map((post) => (
              <article key={post.id} className="relative group h-full" style={{ overflow: "hidden" }}>
                <Link to={`/blog/${post.id}`}>
                  <img
                    className="w-full object-fill rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    src={post.main_image}
                    alt={post.title}
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg p-4 flex flex-col justify-end">
                  <Link to={`/blog/${post.id}`}>
                    <h2
                      className="text-lg font-semibold text-white mb-2"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitWords(post.title, 6)) }}
                    />
                  </Link>
                  <div className="flex items-center text-gray-300 text-xs">
                    <div className="h-3 w-1 bg-red-600 mr-2"></div>
                    {limitWords(post.category[0], 2)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        {categories.map((category, index) => (
          index % 2 !== 0 ? (
            <PostCarousel
              key={category.id}
              category={category}
              posts={posts.filter(post => post.category.includes(category.name))}
              limitWords={limitWords}
            />
          ) : (
            <AdditionalLayout
              key={category.id}
              category={category}
              posts={posts.filter(post => post.category.includes(category.name))}
              limitWords={limitWords}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
