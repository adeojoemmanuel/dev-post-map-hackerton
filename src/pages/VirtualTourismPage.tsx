// src/pages/VirtualTourismPage.tsx
import React from 'react';
import MapComponent from '../components/MapComponent';
import StreetViewComponent from '../components/StreetViewComponent';
import { loadLandmarkModel } from '../components/LandmarkModel';

const VirtualTourismPage = () => {
  return (
    <div>
      <MapComponent />
      <StreetViewComponent />
      {/* Add 3D Landmark Models */}
    </div>
  );
};

export default VirtualTourismPage;
