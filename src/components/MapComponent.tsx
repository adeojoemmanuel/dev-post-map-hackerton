// src/components/Map.tsx
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
    height: '100vh',
    width: '100%',
};

const center = {
    lat: 37.7749, // Latitude for San Francisco
    lng: -122.4194, // Longitude for San Francisco
};

const options = {
    tilt: 45,
    heading: 90,
    mapId: process.env.MAP_ID
};

const Map: React.FC = () => {
    const handleLoad = (map: google.maps.Map) => {
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={16}
                options={options}
                onLoad={handleLoad}
            />
        </LoadScript>
    );
};

export default Map;
