import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectsGallery from './components/pages/ProjectsGallery';
import FormField from "./components/pages/ContactForm";
import './components/pages/Style.scss';
import SoloProject from './components/pages/Project1';
import "./components/pages/style.scss";


function App() {
  return (
    <Router>
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfoliogallery" element={< ProjectsGallery />} />
        <Route path="project" element={< SoloProject/>} />
        <Route path="project/:id" element={< SoloProject/>} />
        

        <Route path="contactform" element={< FormField />} />

      
       
        
      </Routes>
    </Router>
  );
}

export default App;
