
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ResearchSection from './components/ResearchSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Add padding-top to prevent content overlap with fixed navbar */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
