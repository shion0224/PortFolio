
import React from 'react';
import { GITHUB_PROFILE_URL, TWITTER_PROFILE_URL, GitHubIcon, TwitterIcon } from '../constants'; // Explicit imports

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-white min-h-screen flex items-center justify-center text-center px-6 pt-16"> {/* Added pt-16 for navbar */}
      <div className="max-w-3xl">
        <img 
          src="src/assets/profile.PNG" 
          alt="Your Name" 
          className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-8 shadow-lg border-4 border-brand-green-light"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Shion Tsuchida {/* Replace with actual name */}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          茨城大学 理工学研究科 情報工学専攻 修士1年 
        </p>
        <div className="space-x-4">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-green text-white font-semibold rounded-lg shadow-md hover:bg-brand-green-dark transition-colors duration-300"
          >
            <GitHubIcon className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href={TWITTER_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
          >
            <TwitterIcon className="w-5 h-5 mr-2" />
            X (Twitter)
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <svg className="w-8 h-8 mx-auto text-brand-green" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
