import * as THREE from 'three';

const getTimeOfDay = () => {
  const hours = new Date().getHours();
  return hours; // Returns hours in 24-hour format
};

export const applyDynamicLighting = (scene: THREE.Scene) => {
  const hours = getTimeOfDay();
  const intensity = hours >= 6 && hours <= 18 ? 1.0 : 0.5; // Daytime vs Nighttime

  const ambientLight = new THREE.AmbientLight(0xffffff, intensity); // Daytime
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffeedd, intensity);
  directionalLight.position.set(0, 100, 100).normalize();
  scene.add(directionalLight);
};
