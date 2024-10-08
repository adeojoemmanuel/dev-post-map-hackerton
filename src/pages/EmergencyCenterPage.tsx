// src/pages/EmergencyCenterPage.tsx
import React from 'react';
import EmergencyMapView from '../components/EmergencyMapView';
import WeatherInfo from '../components/WeatherInfo';
import DisasterStreetView from '../components/DisasterStreetView';

const EmergencyCenterPage: React.FC = () => {
  const lat = 37.7749;  // Example coordinates
  const lng = -122.4194;

  return (
    <div>
      <h1>Emergency Center Dashboard</h1>
      <EmergencyMapView />
      <WeatherInfo lat={lat} lng={lng} />
      <DisasterStreetView lat={lat} lng={lng} />
    </div>
  );
};

export default EmergencyCenterPage;
