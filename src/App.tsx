import React from 'react';
import TitlePage from './pages/TitlePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
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
