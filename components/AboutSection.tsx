
import React from 'react';
import Section from './Section';
import { UserIcon, CodeIcon, BriefcaseIcon } from '../constants'; // Explicit imports

const AboutSection: React.FC = () => {
  const techStack = ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js","Deno", "Tailwind CSS", "Docker", "Git", "NLP","Fine-tuning"];

  return (
    <Section id="about" className="bg-brand-green-light" title="About Me">
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="md:col-span-1 flex justify-center">
            <img 
                src="src/assets/profile.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-xl w-64 h-64 md:w-full md:h-auto object-cover"
            />
        </div>
        <div className="md:col-span-2 space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <UserIcon className="w-6 h-6 mr-3 text-brand-green" />
              <h3 className="text-2xl font-semibold text-gray-800">自己紹介</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
            趣味は美味しいご飯を食べることとポーカーをプレイすることです。
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
                <CodeIcon className="w-6 h-6 mr-3 text-brand-green" />
                <h3 className="text-2xl font-semibold text-gray-800">技術スタック</h3>
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
                <h3 className="text-2xl font-semibold text-gray-800">興味のあるキャリア</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
            ユーザーにとって本当に価値のある情報や体験を届けること、そして世の中に「面白い！」と思えるものを生み出すことを目指しています。技術を通じて、人の心を動かすようなプロダクトづくりに挑戦したいと考えています。
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
