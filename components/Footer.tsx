
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-center py-8">
      <div className="container mx-auto px-6">
        <p className="text-gray-600 text-sm">
          &copy; {currentYear} Your Name. All rights reserved. {/* Replace Your Name */}
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
