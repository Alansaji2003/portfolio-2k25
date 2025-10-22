import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Pika } from "./Pika";
import { Room } from "./Room";
import * as THREE from 'three'
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useRef } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
const pikaRef = useRef<THREE.Group>(null);
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Brighter ambient light */}
      <ambientLight intensity={0.6} color="#ffffff" />
      {/* Additional directional light */}
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={false} // Completely disable zoom
        enableRotate={true} // Allow rotation by drag
        target={[0, 0, 0]} // Set rotation center to origin
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        onEnd={() => {
          if (pikaRef.current) {
            gsap.to(pikaRef.current.rotation, {
              x: 0,
              y: 0,
              z: 0,
              duration: 1,
              ease: "power2.out",
            });
          }
        }}
      />

      <Suspense fallback={null}>
        <HeroLights />
        {/* <group scale={2} position={[0, 0, 0]}>
          <Particles count={100} />
        </group> */}
        <group
          scale={isMobile ? 0.9 : 2}
          position={isMobile ? [0, -2, 0] : [0, 0, 0]}
          rotation={[0, 0, 0]}
        >
          {/* <Room /> */}
          <Pika />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
