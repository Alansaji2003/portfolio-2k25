import { useEffect, useRef } from "react";
import * as THREE from "three";

const SpaceBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // === Stars ===
    const stars: THREE.Mesh[] = [];
    const addStar = () => {
      const geometry = new THREE.SphereGeometry(0.3, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1, // consistent initial opacity
      });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill(0)
        .map(() => THREE.MathUtils.randFloatSpread(400));
      star.position.set(x, y, z);
      scene.add(star);
      stars.push(star);
    };
    Array(1000).fill(0).forEach(addStar);

    // === Scroll effect ===
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // === Animation Loop ===
    const animate = () => {
      requestAnimationFrame(animate);

      stars.forEach((star) => {
        star.position.z += 0.2 + scrollY * 0.0005;

        // Fade stars based on distance
        const material = star.material as THREE.MeshBasicMaterial;
        const fadeStart = -200;
        const fadeEnd = 10;

        // Stars start faded and become bright as they approach
        const opacity = (star.position.z - fadeStart) / (fadeEnd - fadeStart);
        material.opacity = THREE.MathUtils.clamp(opacity, 0, 1);

        // Recycle star smoothly behind when it goes too far
        if (star.position.z > fadeEnd) {
          star.position.z = fadeStart;
          star.position.x = THREE.MathUtils.randFloatSpread(400);
          star.position.y = THREE.MathUtils.randFloatSpread(400);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // === Resize handler ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
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
        backgroundImage: 'url("/bluespace.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default SpaceBackground;
