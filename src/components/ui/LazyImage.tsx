import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  threshold?: number;
  blur?: boolean;
  aspectRatio?: string;
}

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderColor = '#f3f4f6',
  threshold = 0.1,
  blur = true,
  aspectRatio,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Skip if image is already loaded or IntersectionObserver is not supported
    if (isLoaded || !window.IntersectionObserver) {
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
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoaded, threshold]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholderColor,
        aspectRatio: aspectRatio || (props.width && props.height ? `${props.width}/${props.height}` : 'auto')
      }}
    >
      {isInView && (
        <>
          <motion.img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${
              blur && !isLoaded ? 'invisible absolute' : 'visible'
            }`}
            onLoad={handleImageLoad}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            {...props}
          />
          {blur && !isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;
