import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  loading?: 'lazy' | 'eager';
  quality?: 'low' | 'medium' | 'high';
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder,
  loading = 'lazy',
  quality = 'medium'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const getOptimizedSrc = (originalSrc: string) => {
    // Add quality parameters or use different image formats based on quality setting
    if (quality === 'low') {
      return originalSrc; // Could add ?quality=50 or similar
    }
    return originalSrc;
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {placeholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
      
      {isInView && (
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={() => setIsLoaded(true)}
          loading={loading}
          decoding="async"
        />
      )}
      
      {!isLoaded && !placeholder && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;