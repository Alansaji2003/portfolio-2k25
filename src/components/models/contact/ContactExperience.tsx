import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo, Suspense } from "react";

import { WW1 } from "./WW1";

const ContactExperience = () => {
  const canvasSettings = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4;

    return {
      shadows: !isMobile && !isLowEnd,
      camera: { position: [5, 7, 5] as [number, number, number], fov: 50 },
      gl: {
        antialias: !isMobile,
        alpha: false, // keep opaque for dark background
        powerPreference: "high-performance" as const,
      },
      dpr: Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
      frameloop: "always" as const,
    };
  }, []);

  return (
    <Canvas {...canvasSettings} style={{ background: "#0a0a0a" }}>
      <Suspense fallback={null}>
        {/* Softer ambient light for a dark mood */}
        <ambientLight intensity={0.4} color="#ffffff" />

        {/* Cool bluish directional light for contrast */}
        <directionalLight
          position={[5, 5, 3]}
          intensity={3}
          color="#ffffff"
          castShadow={canvasSettings.shadows}
        />

        {/* Warm accent light from above */}
        <directionalLight
          position={[-5, 10, 2]}
          castShadow={canvasSettings.shadows}
          intensity={3}
          color="#ffffff"
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />

    
        

        {/* Model */}
        <group scale={3} position={[0, 0, 0]} castShadow={canvasSettings.shadows}>
          <WW1 />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
