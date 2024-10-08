import { Polyline } from '@react-google-maps/api';

const emergencyRoutes = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 37.7849, lng: -122.4294 },
];

const EmergencyRouteComponent: React.FC = () => {
  return (
    <Polyline
      path={emergencyRoutes}
      options={{
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      }}
    />
  );
};

export default EmergencyRouteComponent;
