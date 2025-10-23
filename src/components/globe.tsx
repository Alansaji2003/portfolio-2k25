"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useMemo, useState } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { twMerge } from "tailwind-merge";

interface GlobeProps {
  className?: string;
  config?: any;
}

gsap.registerPlugin(InertiaPlugin);

const MOVEMENT_DAMPING = 1400;

const getOptimizedGlobeConfig = () => {
  if (typeof window === "undefined" || typeof navigator === "undefined") return null; // prevent SSR crash

  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency <= 4;

  return {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: isLowEnd ? 8000 : isMobile ? 12000 : 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [1, 1, 1],
    glowColor: [1, 1, 1],
    scale: 0.45, // Scale down more to ensure full visibility
    offset: [0, 0], // Center the globe
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
    ],
  };
};

export function Globe({ className, config }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const phi = useRef(0);
  const rotation = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const isVisible = useRef(true);
  const animationSpeed = useRef(0.005);

  // ✅ Only run config generator client-side
  const optimizedConfig = useMemo(() => {
    if (typeof window === "undefined") return null;

    const defaultConfig = getOptimizedGlobeConfig();
    if (!defaultConfig) return null;

    // Merge configs safely, ensuring markers array exists
    if (config) {
      return {
        ...defaultConfig,
        ...config,
        markers: config.markers || defaultConfig.markers || [],
      };
    }

    return defaultConfig;
  }, [config]);

  useEffect(() => {
    if (!optimizedConfig || !canvasRef.current) return;

    const canvas = canvasRef.current;
    let width = canvas.offsetWidth;

    // Ensure markers array exists and is valid
    const safeConfig = {
      ...optimizedConfig,
      markers: optimizedConfig.markers || [],
      width: width * 2,
      height: width * 2,
      scale: 0.45, // Scale down the globe to show full earth
      offset: [0, 0], // Center the globe
      onRender: (state: any) => {
        if (!pointerInteracting.current && isVisible.current) phi.current += animationSpeed.current;
        state.phi = phi.current + rotation.current;
        state.width = width * 2;
        state.height = width * 2;
        state.scale = 0.45; // Ensure scale is applied in render
      },
    };

    let globe: any;

    try {
      globe = createGlobe(canvas, safeConfig);
      setIsReady(true);
    } catch (error) {
      console.error('Failed to create globe:', error);
      return;
    }

    const handleResize = () => (width = canvas.offsetWidth);
    const handleVisibility = () => {
      isVisible.current = !document.hidden;
      animationSpeed.current = isVisible.current ? 0.005 : 0.001;
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      try {
        globe?.destroy();
      } catch (error) {
        console.error('Error destroying globe:', error);
      }
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [optimizedConfig]);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) canvasRef.current.style.cursor = value ? "grabbing" : "grab";
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerMovement.current = delta;
      rotation.current += delta / MOVEMENT_DAMPING;
    }
  };

  const releaseInertia = (velocity: number) => {
    gsap.to(rotation, {
      current: rotation.current + velocity * 0.001,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  // Don't render until we have a valid config
  if (!optimizedConfig) {
    return (
      <div className={twMerge("mx-auto aspect-[1/1] w-full", className)}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-500">Loading globe...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={twMerge("mx-auto aspect-[1/1] w-full", className)}>
      <canvas
        ref={canvasRef}
        className={twMerge(
          "w-full h-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
          isReady && "opacity-100"
        )}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
          gsap.killTweensOf(rotation);
        }}
        onPointerUp={() => {
          updatePointerInteraction(null);
          releaseInertia(pointerMovement.current);
          pointerMovement.current = 0;
        }}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
