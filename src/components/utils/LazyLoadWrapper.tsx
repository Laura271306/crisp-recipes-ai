import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface LazyLoadWrapperProps {
  children: ReactNode;
  rootMargin?: string;
}

/**
 * Componente que usa IntersectionObserver para renderizar seu conteúdo
 * apenas quando ele entra na viewport, otimizando o carregamento de chunks lazy.
 */
export const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({ 
  children, 
  rootMargin = '200px' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Parar de observar assim que for visível
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [rootMargin]);

  return (
    <div ref={containerRef} style={{ minHeight: isVisible ? 'auto' : '200px' }}>
      {isVisible ? children : null}
    </div>
  );
};