import { StreetViewPanorama } from '@react-google-maps/api';

const StreetViewComponent = () => {
  const streetViewOptions = {
    position: { lat: 40.6892, lng: -74.0445 },
    pov: { heading: 100, pitch: 0 },
    visible: true,
  };

  return (
    <StreetViewPanorama options={streetViewOptions} />
  );
};

export default StreetViewComponent;
