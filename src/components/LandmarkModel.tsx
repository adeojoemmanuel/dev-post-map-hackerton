import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadLandmarkModel = (scene: THREE.Scene, modelUrl: string) => {
  const loader = new GLTFLoader();
  loader.load(modelUrl, (gltf) => {
    scene.add(gltf.scene);
  });
};
