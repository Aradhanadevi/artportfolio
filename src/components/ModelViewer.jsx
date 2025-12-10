import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function UFOModel() {
  const { scene, animations } = useGLTF("/ufo.glb");
  const mixerRef = useRef(null);

  // Setup animation mixer
  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixerRef.current.clipAction(clip).play();
      });
    }
  }, [animations, scene]);

  // Animation update each frame
  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -1, 0]}
    />
  );
}

export default function ModelViewer() {
  return (
    <div className="model-container" style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [2.5, 1.5, 3] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <UFOModel />
          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}
