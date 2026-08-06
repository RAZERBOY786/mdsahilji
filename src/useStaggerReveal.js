import { useEffect, useRef, useState } from 'react';

/**
 * Reveals a block of children with a staggered cascade once the container
 * scrolls into view. Attach `ref` to the wrapper, add the `stagger-child`
 * class to each child (plus a `transitionDelay` inline style per index), and
 * toggle `visible` on the wrapper class as `is-visible`.
 */
export function useStaggerReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

export const staggerChildStyle = (index) => ({
  transitionDelay: `${index * 70}ms`,
});
