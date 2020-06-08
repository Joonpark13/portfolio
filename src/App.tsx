import React from 'react';
import TitlePage from './TitlePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <TitlePage />
      {/* Placeholder  */}
      <div id="placeholder-page" className="page"></div>
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
