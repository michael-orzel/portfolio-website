import React from 'react';
import ecommerceImage from '../assets/ecommerce-app-image.png';
import movieAppImage from '../assets/movie-search-app-image.png';
import weatherAppImage from '../assets/weather-app-image.png';

const projects = [
  {
    id: 1,
    image: ecommerceImage,
    name: 'Ecommerce Product Page',
    technologies: 'React | Tailwind CSS | Vite',
    description: 'An Ecommerce Product Page with cart functionality using Fake Store API. Context API for global state management. Fetch API for HTTP requests. React Router for web page navigation. Made with React, Tailwind CSS, and Vite.',
    url: 'https://ecommerce-product-page-michael-orzel.netlify.app/',
  },
  {
    id: 2,
    image: movieAppImage,
    name: 'Movie Search App',
    technologies: 'React | Tailwind CSS | Vite',
    description: 'A Movie Search Application made with OMDb API. Fetch API for HTTP requests. Made with React, Tailwind CSS, and Vite.',
    url: 'https://movie-search-app-michael-orzel.netlify.app/',
  },
  {
    id: 3,
    image: weatherAppImage,
    name: 'Weather App',
    technologies: 'React | Tailwind CSS | Vite',
    description: 'A Weather Application made with Open Weather Map API. Fetch API for HTTP requests. Made with React, Tailwind CSS, and Vite.',
    url: 'https://weather-app-michael-orzel.netlify.app/',
  },
];

const Projects = () => {
  return (
    <div className="bg-[#333333] min-h-screen px-8 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold text-center lg:pb-2 mt-8 mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FAFAFA] rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg font-semibold"
                    >
                      View
                    </a>
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-[#2E2E2E] mb-2">{project.technologies}</p>
                <p className="text-[#1A1A1A] mb-4 flex-grow">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333333] hover:bg-[#2a2a2a] text-[#FAFAFA] text-center mt-auto px-4 py-2 rounded transition"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
