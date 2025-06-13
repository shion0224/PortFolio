
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { Project } from '../types'; // Explicit import
import { GITHUB_PROFILE_URL } from '../constants'; // Explicit import

const projectsData: Project[] = [
  {
    id: "sleep-peep",
    title: "Sleep Peep (Internship Project)",
    description: "A mobile application developed during an internship at [Internship Company Name] to monitor and analyze sleep patterns, providing users with insights for better sleep hygiene.",
    techStack: ["React Native", "Firebase", "Chart.js", "Expo"],
    githubLink: `${GITHUB_PROFILE_URL}/sleep-peep-example`, // Placeholder
  },
  {
    id: "minecraft-rag",
    title: "Minecraft × RAG System",
    description: "An innovative project integrating a Retrieval Augmented Generation (RAG) system with Minecraft, allowing players to interact with an AI that can answer questions based on in-game lore and information using Gemini API.",
    techStack: ["Python", "LangChain", "Gemini API", "Spigot API"],
    githubLink: `${GITHUB_PROFILE_URL}/minecraft-rag-example`, // Placeholder
  },
  {
    id: "matching-app",
    title: "Simple Matching App",
    description: "A web-based application demonstrating a basic matching algorithm, connecting users based on shared interests. Features real-time chat functionality.",
    techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    githubLink: `${GITHUB_PROFILE_URL}/matching-app-example`, // Placeholder
    liveLink: "#" // Placeholder
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" className="bg-white" title="My Projects" subTitle="A selection of projects I've worked on.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
