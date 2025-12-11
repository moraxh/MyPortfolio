import { useEffect, useRef, useState, type ReactNode } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}

export default function Image({ src, alt, className = "", fallback }: ImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset states when src changes and check if image is already loaded
  useEffect(() => {
    setLoaded(false);
    setError(false);
    
    // Check if image is already loaded (cached)
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error || !src) {
    return <>{fallback}</>;
  }

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}