
import React from 'react';
import Section from './Section';
import { GITHUB_PROFILE_URL, TWITTER_PROFILE_URL, EMAIL_ADDRESS, GitHubIcon, TwitterIcon, EmailIcon } from '../constants'; // Explicit imports

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" className="bg-white" title="連絡先" subTitle="">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed mb-8">
          連絡は以下からお願いします！
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto"
          >
            <GitHubIcon className="w-6 h-6 mr-2" />
            GitHub
          </a>
          <a
            href={TWITTER_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto"
          >
            <TwitterIcon className="w-6 h-6 mr-2" />
            X (Twitter)
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-green text-white font-semibold rounded-lg shadow-md hover:bg-brand-green-dark transition-colors duration-300 w-full sm:w-auto"
          >
            <EmailIcon className="w-6 h-6 mr-2" />
            Email Me
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
