import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

import About from './AboutMe/About.jsx'
import Homepage from './Homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
    
  </StrictMode>,
)
