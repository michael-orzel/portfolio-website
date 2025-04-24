import React from 'react';

const Home = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.6)
          ), url('https://source.unsplash.com/random/1920x1080?technology')`
        }}
      >

        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl">

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Michael Orzel <br />
              Frontend Web Developer
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              React.js | TypeScript | Tailwind CSS
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/michael-d-orzel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Message on Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
