
import React from 'react';
import { Project } from '../types'; // Explicit import
import { GitHubIcon, ExternalLinkIcon } from '../constants'; // Explicit imports

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
      <img src={`https://picsum.photos/seed/${project.id}/400/200`} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-1">使用技術:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-green-100 text-brand-green text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-3 items-center">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-brand-green hover:text-brand-green-dark font-medium transition-colors"
            >
              <GitHubIcon className="w-5 h-5 mr-1" />
              View on GitHub
            </a>
          )}
          {project.liveLink && (
             <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-brand-green hover:text-brand-green-dark font-medium transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
