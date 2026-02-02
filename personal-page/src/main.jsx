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
import ThesisProject from './Projects/Thesis.jsx';
import WowBodyTracker from './Projects/WowTracker.jsx';
import SheetsWrapper from './Projects/GoogleSheets.jsx';
import Roguelike202 from './Projects/Roguelike202.jsx';
import VillageAlchemist from './Projects/VillageAlchemist.jsx';
import FarMech from './Projects/FarMech.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectDirectory />} />
        <Route path="/projects/blazy-bot" element={<BlazyBot />} />
        <Route path="/projects/dnd-yonder" element={<DnDYonder />} />
        <Route path="/projects/roguelike202" element={<Roguelike202 />} />
        <Route path="/projects/thesis" element={<ThesisProject />} />
        <Route path="/projects/wow-body-tracker" element={<WowBodyTracker />} />
        <Route path="/projects/google-sheets-wrapper" element={<> <SheetsWrapper /> </>} />
        <Route path="/projects/village-alchemist" element={<VillageAlchemist />} />
        <Route path="/projects/farming-mech-game" element={<FarMech />} />
      </Routes>

    </Router>
    
  </StrictMode>,
)
