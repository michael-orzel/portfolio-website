import React from "react";
import {
  FaReact, 
  FaCode,
  FaBug, 
  FaJs, 
  FaCss3Alt, 
  FaHtml5, 
  FaCloudDownloadAlt, 
  FaCogs, 
  FaGitAlt, 
  FaFigma, 
} from "react-icons/fa";
import {
  SiTailwindcss, 
  SiVite, 
  SiJest, 
  SiTestinglibrary, 
} from "react-icons/si";
import michaelImage from '../assets/michael-orzel-image.jpg';

const About = () => {
  return (
    <section className="min-h-screen text-white flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">About</h2>

        {/* Text and Image Layout */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Text */}
          <div className="md:w-1/2">
            <p className="mb-4">
              This About page is for <span class="italic">Michael Orzel</span>. Michael is a <span class="italic">Frontend Web Developer</span> who creates responsive web applications using <span class="italic">React, TypeScript, and Tailwind CSS</span>. He focuses on <span class="italic">Mobile-First Design</span> that fits phone screen sizes well.
            </p>
            <p className="mb-4">
              He has a <span class="italic">Bachelor's in Computer Science</span> from the University of Michigan Dearborn and has <span class="italic">Certifications for Responsive Web Design and JavaScript Algorithms and Data Structures</span> from freeCodeCamp. He has self-studied and created web apps independently to learn React and Tailwind CSS. 
            </p>
            <p>
              He prefers being messaged on <a href="https://www.linkedin.com/in/michael-d-orzel" target="_blank">LinkedIn</a>.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={michaelImage}
              alt="Michael Orzel Image"
              className="w-64 h-64 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <h3 className="text-3xl font-bold mb-8">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* React */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaReact className="text-3xl mr-4 text-blue-400" />
            <span className="text-lg">React</span>
          </div>
{/* TypeScript */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaCode className="text-3xl mr-4 text-blue-400" />
            <span className="text-lg">TypeScript</span>
          </div>
          {/* Tailwind CSS */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <SiTailwindcss className="text-3xl mr-4 text-cyan-400" />
            <span className="text-lg">Tailwind CSS</span>
          </div>
          {/* JavaScript (ES6+) */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaJs className="text-3xl mr-4 text-yellow-400" />
            <span className="text-lg">JavaScript (ES6+)</span>
          </div>
          {/* CSS3 */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaCss3Alt className="text-3xl mr-4 text-blue-600" />
            <span className="text-lg">CSS3</span>
          </div>
          {/* HTML5 */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaHtml5 className="text-3xl mr-4 text-orange-600" />
            <span className="text-lg">HTML5</span>
          </div>
          {/* Vite */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <SiVite className="text-3xl mr-4 text-purple-400" />
            <span className="text-lg">Vite</span>
          </div>
          {/* Context API */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaCogs className="text-3xl mr-4 text-blue-400" />
            <span className="text-lg">Context API</span>
          </div>
          {/* Fetch API */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaCloudDownloadAlt className="text-3xl mr-4 text-yellow-400" />
            <span className="text-lg">Fetch API</span>
          </div>
          {/* Jest */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <SiJest className="text-3xl mr-4 text-red-600" />
            <span className="text-lg">Jest</span>
          </div>
          {/* React Testing Library */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <SiTestinglibrary className="text-3xl mr-4 text-red-400" />
            <span className="text-lg">React Testing Library</span>
          </div>
          {/* React DevTools */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaBug className="text-3xl mr-4 text-blue-400" />
            <span className="text-lg">React DevTools</span>
          </div>
          {/* Git */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaGitAlt className="text-3xl mr-4 text-orange-600" />
            <span className="text-lg">Git</span>
          </div>
          {/* Figma (Wireframing) */}
          <div className="flex items-center p-4 bg-[#262626] rounded-lg">
            <FaFigma className="text-3xl mr-4 text-purple-600" />
            <span className="text-lg">Figma (Wireframing)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
