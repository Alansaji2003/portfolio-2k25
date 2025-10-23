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
      camera: { position: [0, 5, 10] as [number, number, number], fov: 50 },
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
        <ambientLight intensity={0.4} color="#888" />

        {/* Cool bluish directional light for contrast */}
        <directionalLight
          position={[5, 5, 3]}
          intensity={3}
          color="#88aaff"
          castShadow={canvasSettings.shadows}
        />

        {/* Warm accent light from above */}
        <directionalLight
          position={[-5, 10, 2]}
          castShadow={canvasSettings.shadows}
          intensity={3}
          color="#ffcc88"
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />

        {/* Dark matte platform */}
        <group scale={[1, 1, 1]}>
          {/* <mesh
            receiveShadow={canvasSettings.shadows}
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.2} />
          </mesh> */}
        </group>

        {/* Model */}
        <group scale={4} position={[0, 0, 0]} castShadow={canvasSettings.shadows}>
          <WW1 />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
