import { StreetViewPanorama } from '@react-google-maps/api';

const streetViewOptions = {
    position: { lat: 40.6892, lng: -74.0445 },
    pov: { heading: 100, pitch: 0 },
    visible: true,
};

const DisasterStreetView: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  return (
    <StreetViewPanorama options={streetViewOptions} />
  );
};

export default DisasterStreetView;
