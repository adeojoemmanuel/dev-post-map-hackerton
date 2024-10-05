// src/pages/SmartCityPage.tsx
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';
import { fetchRealTimeTraffic, fetchInfrastructureStatus } from '../services/cityService';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 40.7128, // Coordinates for New York City (or any other city)
  lng: -74.0060,
};

const SmartCityPage: React.FC = () => {
  const [trafficData, setTrafficData] = useState<any>(null);
  const [infrastructureStatus, setInfrastructureStatus] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const traffic = await fetchRealTimeTraffic();
      const infrastructure = await fetchInfrastructureStatus();
      setTrafficData(traffic);
      setInfrastructureStatus(infrastructure);
    }

    loadData();
  }, []);

  return (
    <div>
      <h1>Smart City Management</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Traffic Layer */}
          <TrafficLayer />
          {/* Optionally, you can add markers for infrastructure status */}
          {infrastructureStatus && infrastructureStatus.map((status: any) => (
            <div key={status.id}> {/* Render infrastructure info */}</div>
          ))}
        </GoogleMap>
      </LoadScript>

      <div>
        <h2>Infrastructure Status</h2>
        {infrastructureStatus ? (
          <ul>
            {infrastructureStatus.map((status: any, index: number) => (
              <li key={index}>
                {status.name}: {status.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading infrastructure data...</p>
        )}
      </div>
    </div>
  );
};

export default SmartCityPage;
