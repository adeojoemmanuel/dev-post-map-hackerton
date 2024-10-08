import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '100vh',
};

const center = {
    lat: 40.7128, // Example: New York
    lng: -74.0060,
};

const options = {
    mapTypeId: 'satellite', // Enables satellite view
};

const disasterZones = [
  { id: 1, lat: 37.7749, lng: -122.4194, type: 'Fire', description: 'Wildfire affecting the region.' }, // Example: San Francisco
  { id: 2, lat: 34.0522, lng: -118.2437, type: 'Flood', description: 'Flooding in LA.' }, // Example: Los Angeles
];

const EmergencyMapView: React.FC = () => {
  const [selectedZone, setSelectedZone] = React.useState<any>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8} options={options}>
        {disasterZones.map(zone => (
          <Marker
            key={zone.id}
            position={{ lat: zone.lat, lng: zone.lng }}
            onClick={() => setSelectedZone(zone)}
            icon={{
              url: zone.type === 'Fire' ? 'fire-icon-url.png' : 'flood-icon-url.png', // Custom icons
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}

        {selectedZone && (
          <InfoWindow
            position={{ lat: selectedZone.lat, lng: selectedZone.lng }}
            onCloseClick={() => setSelectedZone(null)}
          >
            <div>
              <h4>{selectedZone.type} Emergency</h4>
              <p>{selectedZone.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default EmergencyMapView;

