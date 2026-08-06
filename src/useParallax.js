import { useEffect, useRef, useState } from 'react';

// A single shared rAF loop drives every parallax element so we never spawn
// one loop per component (keeps scrolling buttery on all devices). Each
// element only joins the loop while it is near the viewport.
const entries = new Set();
let rafId = null;

function loop() {
  const vh = window.innerHeight;
  entries.forEach((entry) => entry.update(vh));
  rafId = entries.size > 0 ? requestAnimationFrame(loop) : null;
}

function start() {
  if (!rafId && typeof window !== 'undefined') {
    rafId = requestAnimationFrame(loop);
  }
}

/**
 * Moves an element at a different speed than the scroll, creating depth.
 * `speed` > 0 drifts upward while scrolling down; negative drifts downward.
 */
export function useParallax(speed = 0.12) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const lastRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const entry = {
      update(vh) {
        const current = ref.current;
        if (!current || !current.isConnected) return;
        const rect = current.getBoundingClientRect();
        const delta = (rect.top + rect.height / 2 - vh / 2) * -speed;
        // Only re-render when the change is visually meaningful.
        if (lastRef.current === null || Math.abs(delta - lastRef.current) > 0.5) {
          lastRef.current = delta;
          setOffset(delta);
        }
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
      { threshold: 0, rootMargin: '15% 0px 15% 0px' }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      entries.delete(entry);
    };
  }, [speed]);

  return {
    ref,
    style: {
      transform: `translate3d(0, ${offset}px, 0)`,
      willChange: 'transform',
    },
  };
}
