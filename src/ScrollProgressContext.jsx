import { createContext, useContext, useState, useRef, useEffect } from 'react';

const ScrollProgressContext = createContext(0);

export function useScrollProgress() {
  return useContext(ScrollProgressContext);
}

export function ScrollProgressProvider({ children, containerRef }) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const totalScrollable = rect.height - window.innerHeight;
        if (totalScrollable > 0) {
          const p = Math.min(1, Math.max(0, -rect.top / totalScrollable));
          // React bails out when the value is unchanged, avoiding 60fps re-renders.
          setProgress((prev) => (Math.abs(prev - p) > 0.0005 ? p : prev));
        }
      }
    };

    const onScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  return (
    <ScrollProgressContext.Provider value={progress}>
      {children}
    </ScrollProgressContext.Provider>
  );
}
