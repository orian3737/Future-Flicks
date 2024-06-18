import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';  
import LinksPage from './components/LinksPage';

const container = document.getElementById('root');
const root = createRoot(container);  
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/LinksPage" element={<LinksPage />} />
      </Routes>
    </BrowserRouter>
  );   
