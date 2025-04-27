import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  InformationCircleIcon, 
  BriefcaseIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/solid';
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { name: 'Home', icon: HomeIcon, to: '/' },
    { name: 'About', icon: InformationCircleIcon, to: '/about' },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/michael-d-orzel', 
      external: true 
    },
    { name: 'Projects', icon: BriefcaseIcon, to: '/projects' },
    { name: 'Contact', icon: EnvelopeIcon, to: '/contact' },
  ];

  return (
    <nav className="bg-[#333333] fixed bottom-0 left-0 right-0 text-white p-4 z-50 
      md:flex md:items-center md:justify-center
      lg:top-0 lg:bottom-auto">
      <div className="flex justify-around items-center max-w-3xl w-full
        md:space-x-8 lg:space-x-16">
        {navItems.map((item) => (
          item.external ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center hover:text-[#E0E0E0] transition-colors
                md:flex-row md:space-x-2 md:space-x-reverse md:[&>span]:order-first"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1 md:text-sm md:mt-0 hidden md:inline">
                {item.name}
              </span>
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.to}
              className="flex flex-col items-center justify-center hover:text-[#E0E0E0] transition-colors
                md:flex-row md:space-x-2 md:space-x-reverse md:[&>span]:order-first"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1 md:text-sm md:mt-0 hidden md:inline">
                {item.name}
              </span>
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
