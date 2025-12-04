import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

export default function ModelViewer() {
  const model = useGLTF("/Chair2.glb"); // place your file in public/

  return (
    <Canvas 
      camera={{ position: [2, 2, 2], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} position={[5, 5, 5]} />

      <Suspense fallback={null}>
        <primitive object={model.scene} scale={1.2} />
        <Environment preset="night" />
      </Suspense>

      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
