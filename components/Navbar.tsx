
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants'; // Explicit import
import { NavLinkItem } from '../types'; // Explicit import

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-brand-green hover:text-brand-green-dark">
          Shion's Portfolio 
        </a>
        <div className="hidden md:flex space-x-4">
          {NAV_LINKS.map((link: NavLinkItem) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-gray-700 hover:text-brand-green font-medium rounded-md transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-brand-green focus:outline-none focus:text-brand-green"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {NAV_LINKS.map((link: NavLinkItem) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-brand-green-light hover:text-brand-green font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
