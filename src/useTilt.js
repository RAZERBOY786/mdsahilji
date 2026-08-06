import { useEffect, useRef } from 'react';

export function useTilt(maxTilt = 12) {
  const cardRef = useRef(null);
  const rafId = useRef(0);
  const pose = useRef(null);

  const apply = () => {
    rafId.current = 0;
    const card = cardRef.current;
    if (!card || !pose.current) return;
    const { px, py } = pose.current;
    card.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease';
    card.style.transform =
      `perspective(1000px) rotateX(${(-py * maxTilt).toFixed(2)}deg) ` +
      `rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-4px)`;
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    pose.current = {
      px: (e.clientX - rect.left) / rect.width - 0.5,
      py: (e.clientY - rect.top) / rect.height - 0.5,
    };

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(apply);
    }
  };

  const handleMouseLeave = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = 0;
    }
    pose.current = null;

    const card = cardRef.current;
    if (!card) return;
    card.style.transition =
      'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease';
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  useEffect(
    () => () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    },
    []
  );

  return { ref: cardRef, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}
