// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VirtualTourismPage from './pages/VirtualTourismPage';
import RealEstatePage from './pages/RealEstatePage';
import SmartCityPage from './pages/SmartCityPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tourism" element={<VirtualTourismPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/smart-city" element={<SmartCityPage />} />
      </Routes>
    </Router>
  );
};

export default App;
