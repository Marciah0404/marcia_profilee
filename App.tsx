
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ProjectViewer from './components/ProjectViewer';
import { ChevronLeft } from 'lucide-react';

const MainPortfolio = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="about" className="pt-20">
        <About />
      </div>
      <div id="skills" className="pt-20">
        <Skills />
      </div>
      <div id="projects" className="pt-20">
        <Projects />
      </div>
      <div id="resume" className="pt-20">
        <Resume />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/view/:projectId" element={<ProjectViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
