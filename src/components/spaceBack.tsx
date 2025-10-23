import { useEffect, useRef } from "react";
import * as THREE from "three";

const SpaceBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameId = useRef<number | undefined>(undefined);
  const isVisible = useRef(true);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Reduce star count based on device performance
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4;
    const starCount = isMobile ? 500 : isLowEnd ? 800 : 1500;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Optimize renderer settings
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Disable for better performance
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    // === Optimized Stars using InstancedMesh ===
    const starGeometry = new THREE.SphereGeometry(0.4, 8, 8); // Larger and more detailed stars
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9, // Make stars more opaque

    });

    const instancedStars = new THREE.InstancedMesh(starGeometry, starMaterial, starCount);
    scene.add(instancedStars);

    // Star data arrays for better performance
    const starPositions = new Float32Array(starCount * 3);
    const starSpeeds = new Float32Array(starCount);
    const matrix = new THREE.Matrix4();

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = THREE.MathUtils.randFloatSpread(400);
      starPositions[i3 + 1] = THREE.MathUtils.randFloatSpread(400);
      starPositions[i3 + 2] = THREE.MathUtils.randFloat(-200, 10);
      starSpeeds[i] = 0.2 + Math.random() * 0.3;

      matrix.setPosition(starPositions[i3], starPositions[i3 + 1], starPositions[i3 + 2]);
      instancedStars.setMatrixAt(i, matrix);
    }
    instancedStars.instanceMatrix.needsUpdate = true;

    // === Scroll effect with throttling ===
    let scrollY = 0;
    let ticking = false;

    const updateScroll = () => {
      scrollY = window.scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // === Visibility API for performance ===
    const handleVisibilityChange = () => {
      isVisible.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // === Optimized Animation Loop ===
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (!isVisible.current) {
        frameId.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        const scrollMultiplier = scrollY * 0.0008;

        // Update star positions in batches
        for (let i = 0; i < starCount; i++) {
          const i3 = i * 3;
          starPositions[i3 + 2] += starSpeeds[i] + scrollMultiplier;

          // Recycle stars
          if (starPositions[i3 + 2] > 10) {
            starPositions[i3 + 2] = -200;
            starPositions[i3] = THREE.MathUtils.randFloatSpread(400);
            starPositions[i3 + 1] = THREE.MathUtils.randFloatSpread(400);
          }

          // Update matrix
          matrix.setPosition(starPositions[i3], starPositions[i3 + 1], starPositions[i3 + 2]);
          instancedStars.setMatrixAt(i, matrix);
        }

        instancedStars.instanceMatrix.needsUpdate = true;
        renderer.render(scene, camera);
        lastTime = currentTime;
      }

      frameId.current = requestAnimationFrame(animate);
    };

    frameId.current = requestAnimationFrame(animate);

    // === Resize handler with debouncing ===
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(resizeTimeout);

      if (currentMount && renderer.domElement.parentNode) {
        currentMount.removeChild(renderer.domElement);
      }

      // Dispose of Three.js resources
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        backgroundColor: "#000000", // Pitch black background
        willChange: "transform", // Hint for GPU acceleration
      }}
    />
  );
};

export default SpaceBackground;
