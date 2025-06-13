
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subTitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', title, subTitle }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            {subTitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subTitle}
              </p>
            )}
             <div className="w-24 h-1 bg-brand-green mx-auto mt-4 rounded"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
