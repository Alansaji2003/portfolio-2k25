// Performance configuration based on device capabilities
export interface PerformanceConfig {
  particleCount: number;
  starCount: number;
  enableShadows: boolean;
  enableAntialiasing: boolean;
  pixelRatio: number;
  animationQuality: 'low' | 'medium' | 'high';
  enablePostProcessing: boolean;
}

export const getPerformanceConfig = (): PerformanceConfig => {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isLowEnd = navigator.hardwareConcurrency <= 4;
  const hasLimitedMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return {
      particleCount: 0,
      starCount: 100,
      enableShadows: false,
      enableAntialiasing: false,
      pixelRatio: 1,
      animationQuality: 'low',
      enablePostProcessing: false,
    };
  }

  if (isMobile || isLowEnd || hasLimitedMemory) {
    return {
      particleCount: 50,
      starCount: 300,
      enableShadows: false,
      enableAntialiasing: false,
      pixelRatio: Math.min(window.devicePixelRatio, 1.5),
      animationQuality: 'low',
      enablePostProcessing: false,
    };
  }

  if (isTablet) {
    return {
      particleCount: 100,
      starCount: 500,
      enableShadows: false,
      enableAntialiasing: true,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
      animationQuality: 'medium',
      enablePostProcessing: false,
    };
  }

  // Desktop with good performance
  return {
    particleCount: 200,
    starCount: 800,
    enableShadows: true,
    enableAntialiasing: true,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    animationQuality: 'high',
    enablePostProcessing: true,
  };
};

// Adaptive quality based on runtime performance
export class AdaptiveQuality {
  private static instance: AdaptiveQuality;
  private config: PerformanceConfig;
  private fpsHistory: number[] = [];
  private lastFrameTime = performance.now();
  private frameCount = 0;

  private constructor() {
    this.config = getPerformanceConfig();
    this.startMonitoring();
  }

  static getInstance(): AdaptiveQuality {
    if (!AdaptiveQuality.instance) {
      AdaptiveQuality.instance = new AdaptiveQuality();
    }
    return AdaptiveQuality.instance;
  }

  getConfig(): PerformanceConfig {
    return { ...this.config };
  }

  private startMonitoring() {
    const monitor = () => {
      const now = performance.now();
      const delta = now - this.lastFrameTime;
      
      if (delta >= 1000) {
        const fps = Math.round((this.frameCount * 1000) / delta);
        this.fpsHistory.push(fps);
        
        if (this.fpsHistory.length > 5) {
          this.fpsHistory.shift();
        }
        
        this.adaptQuality();
        
        this.frameCount = 0;
        this.lastFrameTime = now;
      }
      
      this.frameCount++;
      requestAnimationFrame(monitor);
    };
    
    requestAnimationFrame(monitor);
  }

  private adaptQuality() {
    if (this.fpsHistory.length < 3) return;
    
    const avgFps = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
    
    if (avgFps < 20) {
      // Severely reduce quality
      this.config.particleCount = Math.max(0, this.config.particleCount * 0.5);
      this.config.starCount = Math.max(100, this.config.starCount * 0.7);
      this.config.enableShadows = false;
      this.config.enableAntialiasing = false;
      this.config.animationQuality = 'low';
    } else if (avgFps < 40) {
      // Moderately reduce quality
      this.config.particleCount = Math.max(50, this.config.particleCount * 0.8);
      this.config.starCount = Math.max(200, this.config.starCount * 0.9);
      this.config.enableShadows = false;
      this.config.animationQuality = 'medium';
    }
    // If FPS is good (>40), gradually restore quality if it was reduced
  }
}

export const performanceConfig = AdaptiveQuality.getInstance();