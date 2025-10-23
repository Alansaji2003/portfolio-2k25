import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fps: number;
  memory?: number;
  isLowPerformance: boolean;
}

export const usePerformanceMonitor = (callback?: (metrics: PerformanceMetrics) => void) => {
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const fpsHistory = useRef<number[]>([]);
  
  useEffect(() => {
    let animationId: number;
    
    const measurePerformance = () => {
      const now = performance.now();
      const delta = now - lastTime.current;
      
      if (delta >= 1000) { // Update every second
        const fps = Math.round((frameCount.current * 1000) / delta);
        
        // Keep history of last 5 FPS measurements
        fpsHistory.current.push(fps);
        if (fpsHistory.current.length > 5) {
          fpsHistory.current.shift();
        }
        
        const avgFps = fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length;
        const isLowPerformance = avgFps < 30;
        
        // Get memory usage if available
        const memory = (performance as any).memory?.usedJSHeapSize;
        
        const metrics: PerformanceMetrics = {
          fps: Math.round(avgFps),
          memory,
          isLowPerformance
        };
        
        callback?.(metrics);
        
        frameCount.current = 0;
        lastTime.current = now;
      }
      
      frameCount.current++;
      animationId = requestAnimationFrame(measurePerformance);
    };
    
    animationId = requestAnimationFrame(measurePerformance);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [callback]);
};

export const useAdaptiveQuality = () => {
  const qualityLevel = useRef<'high' | 'medium' | 'low'>('high');
  
  usePerformanceMonitor((metrics) => {
    if (metrics.fps < 20) {
      qualityLevel.current = 'low';
    } else if (metrics.fps < 40) {
      qualityLevel.current = 'medium';
    } else {
      qualityLevel.current = 'high';
    }
  });
  
  return qualityLevel.current;
};