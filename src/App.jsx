import React, { Suspense, useRef, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const gltf = useLoader(GLTFLoader, "scene.gltf");
  const mesh = useRef();

  const { scene } = useThree();
  scene.background = new THREE.Color(0x0000000);

  useFrame((state, delta) => (mesh.current.rotation.y += 0.005));
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} position={[1, 1, -5]} ref={mesh} />
    </Suspense>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
