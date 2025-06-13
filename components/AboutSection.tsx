
import React from 'react';
import Section from './Section';
import { UserIcon, CodeIcon, BriefcaseIcon } from '../constants'; // Explicit imports

const AboutSection: React.FC = () => {
  const techStack = ["TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind CSS", "Docker", "Git", "Gemini API"];

  return (
    <Section id="about" className="bg-brand-green-light" title="About Me">
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="md:col-span-1 flex justify-center">
            <img 
                src="https://picsum.photos/seed/profile/300/300" 
                alt="Profile" 
                className="rounded-lg shadow-xl w-64 h-64 md:w-full md:h-auto object-cover"
            />
        </div>
        <div className="md:col-span-2 space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <UserIcon className="w-6 h-6 mr-3 text-brand-green" />
              <h3 className="text-2xl font-semibold text-gray-800">Who I Am</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A passionate and driven software engineering student with a strong foundation in web development and a keen interest in artificial intelligence. I thrive in collaborative environments and am always eager to learn new technologies and methodologies. My goal is to leverage my skills to build innovative and impactful solutions.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
                <CodeIcon className="w-6 h-6 mr-3 text-brand-green" />
                <h3 className="text-2xl font-semibold text-gray-800">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-green-100 text-brand-green text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-2">
                <BriefcaseIcon className="w-6 h-6 mr-3 text-brand-green" />
                <h3 className="text-2xl font-semibold text-gray-800">Career Interests</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I am seeking challenging opportunities in full-stack development, AI/ML engineering, or roles that involve creating exceptional user experiences. I am particularly interested in contributing to innovative projects at CyberAgent and growing within a dynamic and forward-thinking company.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
