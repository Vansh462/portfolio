import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
}

/**
 * ResponsiveImage component with optimized loading
 * 
 * Features:
 * - Responsive image with srcset for different screen sizes
 * - Lazy loading with IntersectionObserver
 * - Blur-up loading effect
 * - Proper aspect ratio to prevent layout shifts
 */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  loading = 'lazy',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!src) return '';
    
    // Extract file extension
    const extension = src.split('.').pop() || '';
    const basePath = src.substring(0, src.lastIndexOf('.'));
    
    // Generate srcset for different widths
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048];
    return widths
      .map(w => `${basePath}-${w}.${extension} ${w}w`)
      .join(', ');
  };

  // Set up intersection observer to detect when image is in viewport
  useEffect(() => {
    if (priority || isInView || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, isInView]);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Calculate aspect ratio
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      {(isInView || priority) && (
        <>
          <motion.img
            src={src}
            srcSet={generateSrcSet()}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            onLoad={handleImageLoad}
            className={`w-full h-full object-cover ${
              placeholder === 'blur' && !isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {placeholder === 'blur' && !isLoaded && blurDataURL && (
            <div 
              className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
              style={{ 
                backgroundImage: `url(${blurDataURL})`,
                filter: 'blur(20px)',
                transform: 'scale(1.1)'
              }}
            />
          )}
          
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              {placeholder !== 'blur' && (
                <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResponsiveImage;
