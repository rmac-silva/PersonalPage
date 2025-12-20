import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

import About from './AboutMe/About.jsx'
import Homepage from './Homepage/Homepage.jsx'
import ProjectDirectory from './Projects/ProjectDirectory.jsx';
import BlazyBot from './Projects/BlazyBot.jsx'
import DnDYonder from './Projects/DndYonder.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectDirectory />} />
        <Route path="/projects/blazy-bot" element={<BlazyBot />} />
        <Route path="/projects/dnd-yonder" element={<DnDYonder />} />
      </Routes>

    </Router>
    
  </StrictMode>,
)
