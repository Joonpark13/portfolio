import React from 'react';
import TitlePage from './pages/TitlePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import TalksPage from './pages/TalksPage';
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <TitlePage />
      <div id="placeholder-page" className="page"></div>
      <AboutPage />
      <ProjectsPage />
      <TalksPage />
      <ContactPage />
    </div>
  );
}

export default App;
