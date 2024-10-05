import * as THREE from 'three';

export const addFogEffect = (scene: THREE.Scene) => {
  scene.fog = new THREE.FogExp2(0xcccccc, 0.002);  // Fog effect
};

export const createClouds = (scene: THREE.Scene) => {
  const cloudTexture = new THREE.TextureLoader().load('assets/cloud_texture.png');
  const cloudMaterial = new THREE.SpriteMaterial({ map: cloudTexture });

  const cloudSprite = new THREE.Sprite(cloudMaterial);
  cloudSprite.position.set(0, 100, 0);
  scene.add(cloudSprite);
};
