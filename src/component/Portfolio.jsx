import React from 'react';
import { useTheme } from '../assets/ThemeContext'; // Import your theme context

const Portfolio = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <section id="portfolio" className={`py-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-8">

        <header className="text-center mb-8">
          <h3 className="text-3xl font-bold">Our Portfolio</h3>
        </header>

        <div className="mb-6">
          <ul id="portfolio-flters" className="flex justify-center space-x-4">
            <li data-filter="*" className="filter-active cursor-pointer hover:text-blue-500">All</li>
            <li data-filter=".filter-app" className="cursor-pointer hover:text-blue-500">App</li>
            <li data-filter=".filter-card" className="cursor-pointer hover:text-blue-500">Card</li>
            <li data-filter=".filter-web" className="cursor-pointer hover:text-blue-500">Web</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`portfolio-item ${item.filter} transition-transform duration-300`} data-wow-delay={item.delay}>
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img src={item.imgSrc} className="img-fluid w-full h-64 object-cover" alt={item.alt} />
                <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-300 opacity-0 hover:opacity-100`}>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm">{item.category}</p>
                  <div className="flex space-x-2 mt-2">
                    <a href={item.imgSrc} data-lightbox="portfolio" data-title={item.title} className="text-white hover:text-blue-400" title="Preview">
                      <i className="ion ion-eye"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400" title="More Details">
                      <i className="ion ion-android-open"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const portfolioItems = [
  { title: 'App 1', category: 'App', imgSrc: 'img/portfolio/app1.jpg', alt: 'App 1', filter: 'filter-app', delay: '0s' },
  { title: 'Web 3', category: 'Web', imgSrc: 'img/portfolio/web3.jpg', alt: 'Web 3', filter: 'filter-web', delay: '0.1s' },
  { title: 'App 2', category: 'App', imgSrc: 'img/portfolio/app2.jpg', alt: 'App 2', filter: 'filter-app', delay: '0.2s' },
  { title: 'Card 2', category: 'Card', imgSrc: 'img/portfolio/card2.jpg', alt: 'Card 2', filter: 'filter-card', delay: '0s' },
  { title: 'Web 2', category: 'Web', imgSrc: 'img/portfolio/web2.jpg', alt: 'Web 2', filter: 'filter-web', delay: '0.1s' },
  { title: 'App 3', category: 'App', imgSrc: 'img/portfolio/app3.jpg', alt: 'App 3', filter: 'filter-app', delay: '0.2s' },
  { title: 'Card 1', category: 'Card', imgSrc: 'img/portfolio/card1.jpg', alt: 'Card 1', filter: 'filter-card', delay: '0s' },
  { title: 'Card 3', category: 'Card', imgSrc: 'img/portfolio/card3.jpg', alt: 'Card 3', filter: 'filter-card', delay: '0.1s' },
  { title: 'Web 1', category: 'Web', imgSrc: 'img/portfolio/web1.jpg', alt: 'Web 1', filter: 'filter-web', delay: '0.2s' },
];

export default Portfolio;
