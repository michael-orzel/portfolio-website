import React from 'react';
import weatherAppImage from 'weather-app-image.png';
import movieAppImage from '../assets/movie-search-app-image.png';

const projects = [
  {
    id: 1,
    image: 'movieAppImage',
    name: 'Movie Search App',
    technologies: 'React | Tailwind CSS | Vite',
    description: 'A Movie Search Application made with OMDb API. Fetch API for HTTP requests. Made with React, Tailwind CSS, and Vite.',
  },
  {
    id: 2,
    image: 'weatherAppImage',
    name: 'Weather App',
    technologies: 'React | Tailwind CSS | Vite',
    description: 'A Weather Application made with Open Weather Map API. Fetch API for HTTP requests. Made with React, Tailwind CSS, and Vite.',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold">View</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.technologies}</p>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
