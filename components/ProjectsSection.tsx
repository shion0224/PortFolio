
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { Project } from '../types'; // Explicit import
import { GITHUB_PROFILE_URL } from '../constants'; // Explicit import

const projectsData: Project[] = [
  {
    id: "sleep-peep",
    title: "Sleep Peep (Internship Project)",
    description: "インターンシップ先の［企業名］で開発したモバイルアプリで、睡眠パターンを記録・分析し、より良い睡眠習慣のための気づきをユーザーに提供します。",
    techStack: ["Deno", "JavaScript", "HTML","CSS"],
    githubLink: `${GITHUB_PROFILE_URL}/sleep-peep-example`, // Placeholder
  },
  {
    id: "minecraft-rag",
    title: "Minecraft × RAG System",
    description: "Retrieval Augmented Generation（RAG）システムをMinecraftと統合した革新的なプロジェクトで、プレイヤーはゲーム内の設定や情報に基づいて、Gemini APIを利用したAIと対話しながら質問に答えてもらうことができます。",
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
  {
    id: "test",
    title: "Test",
    description: "Test",
    techStack: ["React"],
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
