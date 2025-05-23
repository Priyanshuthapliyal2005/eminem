import React, { useEffect, useState } from 'react';

interface MediaOptimizerProps {
  children: React.ReactNode;
}

const MediaOptimizer: React.FC<MediaOptimizerProps> = ({ children }) => {
  const [isHighPerformance, setIsHighPerformance] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<string>('unknown');

  useEffect(() => {
    // Check device performance capabilities
    const checkPerformance = () => {
      // Check if device supports hardware acceleration
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const hasWebGL = !!gl;

      // Check memory (if available)
      const nav = navigator as any;
      const deviceMemory = nav.deviceMemory || 4; // Default to 4GB if unknown

      // Check connection speed
      const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
      const effectiveType = connection?.effectiveType || 'unknown';
      setConnectionSpeed(effectiveType);

      // Determine if device can handle high-quality media
      const highPerf = hasWebGL && deviceMemory >= 4 && 
                      (effectiveType === '4g' || effectiveType === 'unknown');
      
      setIsHighPerformance(highPerf);

      // Set CSS custom properties for dynamic media quality
      document.documentElement.style.setProperty(
        '--video-quality', 
        highPerf ? '1' : '0.7'
      );
      document.documentElement.style.setProperty(
        '--animation-duration', 
        highPerf ? '0.3s' : '0.6s'
      );
    };

    checkPerformance();

    // Preload critical assets based on performance
    if (isHighPerformance) {
      // Preload video thumbnail for faster loading
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = '/e.mp4#t=0.1'; // Load just the first frame
      document.head.appendChild(link);
    }

    return () => {
      // Cleanup preload link
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="video"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, [isHighPerformance]);

  return (
    <div 
      className={`media-optimized ${isHighPerformance ? 'high-performance' : 'low-performance'}`}
      data-connection={connectionSpeed}
    >
      {children}
    </div>
  );
};

export default MediaOptimizer;
