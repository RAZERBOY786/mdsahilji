import { useEffect, useRef } from 'react';

// A single shared rAF loop drives every section reveal that is currently near
// the viewport, so off-screen sections cost zero CPU. Styles are written
// directly to the DOM (no per-frame React re-renders).
const entries = new Set();
let rafId = null;

function loop() {
  const vh = window.innerHeight;
  entries.forEach((entry) => entry.update(vh));
  rafId = entries.size > 0 ? requestAnimationFrame(loop) : null;
}

function start() {
  if (!rafId) rafId = requestAnimationFrame(loop);
}

export function useSectionReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const entry = {
      update(vh) {
        if (!el.isConnected) {
          entries.delete(entry);
          return;
        }
        const rect = el.getBoundingClientRect();
        // start revealing when element top hits threshold of viewport height
        const start = vh * (1 - threshold);
        const end = vh * threshold;
        const raw = (start - rect.top) / (start - end);
        const p = Math.min(1, Math.max(0, raw));
        el.style.opacity = p.toFixed(3);
        el.style.transform = `translateY(${((1 - p) * 40).toFixed(1)}px)`;
        if (p >= 1) entries.delete(entry);
      },
    };

    const io = new IntersectionObserver(
      ([ioEntry]) => {
        if (ioEntry.isIntersecting) {
          entries.add(entry);
          start();
        } else {
          entries.delete(entry);
        }
      },
      { threshold: 0, rootMargin: '10% 0px 10% 0px' }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      entries.delete(entry);
    };
  }, [threshold]);

  const style = {
    opacity: 0,
    transform: 'translateY(40px)',
  };

  return { ref, style };
}
