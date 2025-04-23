import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/michael-d-orzel" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-300 transition duration-300" />
          </a>
          <a href="https://github.com/michael-orzel" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-300 transition duration-300" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; Copyright {currentYear} Michael Orzel. All Rights Reserved.
          </p>
        </div>
      </div>
  </footer>
  );
};

export default Footer;
