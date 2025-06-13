
import React from 'react';
import Section from './Section';
import { BookOpenIcon } from '../constants'; // Explicit import

const ResearchSection: React.FC = () => {
  const keywords = ["NLP", "BERT", "Machine Learning", "Recommender Systems", "Higher Education", "Syllabus Analysis"];

  return (
    <Section id="research" className="bg-brand-green-light" title="University Research">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <BookOpenIcon className="w-10 h-10 mr-4 text-brand-green" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Enhancing Course Recommendations using BERT and Syllabus-based Content Analysis
            </h3>
            <p className="text-gray-600">Computer Science Department, [Your University Name]</p>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          My university research focused on leveraging Natural Language Processing techniques, specifically BERT, to analyze university syllabi. The goal was to develop a more accurate and context-aware course recommendation system for students. By understanding the nuanced content of course materials, the system aimed to improve academic planning, facilitate the discovery of relevant courses, and ultimately enhance the student learning experience.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This project involved data collection of syllabi, preprocessing textual data, fine-tuning BERT models for semantic understanding, and developing an algorithm to match student profiles and academic goals with suitable courses. The findings demonstrated a significant improvement in recommendation relevance compared to traditional methods.
        </p>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Keywords:</h4>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="bg-green-100 text-brand-green text-sm font-medium px-3 py-1.5 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        {/* Optional: Add a link to a paper or presentation */}
        {/* 
        <div className="mt-6">
          <a href="#" className="text-brand-green hover:text-brand-green-dark font-semibold">
            View Publication (if available) &rarr;
          </a>
        </div>
        */}
      </div>
    </Section>
  );
};

export default ResearchSection;
