import { useEffect, useState } from 'react';

function subscribe(query, onChange) {
  const mql = window.matchMedia(query);
  const handler = (e) => onChange(e.matches);
  handler(mql);
  if (mql.addEventListener) {
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }
  // Safari < 14 fallback
  mql.addListener(handler);
  return () => mql.removeListener(handler);
}

/** True when the viewport is at or below `breakpoint` px. Updates live on resize. */
export function useIsMobile(breakpoint = 860) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    return subscribe(`(max-width: ${breakpoint}px)`, setIsMobile);
  }, [breakpoint]);

  return isMobile;
}

/** True when the user has requested reduced motion at the OS level. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    return subscribe('(prefers-reduced-motion: reduce)', setReduced);
  }, []);

  return reduced;
}
