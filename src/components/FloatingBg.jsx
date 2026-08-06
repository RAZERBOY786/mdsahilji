export default function FloatingBg({
  items,
  sizeRange = [18, 44],
  opacityRange = [0.24, 0.58],
  seed = 0,
  wordBase = 16,
  wordMax = 38,
}) {
  // Clamp word labels against viewport width so "Certified" / "Accredited"
  // never become absurdly large on small phones (they stay decorative, not
  // dominant). Re-reads per render, so it also survives orientation changes.
  const viewportCap = Math.max(
    14,
    Math.round((typeof window !== 'undefined' ? window.innerWidth : 1440) * 0.08)
  );

  return (
    <>
      {items.map((item, i) => {
        const j = i + seed;
        const sx = Math.sin(j * 127.1 + 311.7) * 43758.5453;
        const r1 = sx - Math.floor(sx);
        const sy = Math.sin(j * 269.5 + 183.3) * 43758.5453;
        const r2 = sy - Math.floor(sy);
        const sz = Math.sin(j * 419.2 + 91.7) * 43758.5453;
        const r3 = sz - Math.floor(sz);
        const size = Math.round(sizeRange[0] + r1 * (sizeRange[1] - sizeRange[0]));
        const opacity = (opacityRange[0] + r3 * (opacityRange[1] - opacityRange[0])).toFixed(2);
        const word = item.word;
        const wordSize = Math.min(
          Math.round(wordBase + r1 * (wordMax - wordBase)),
          viewportCap
        );
        let content;
        if (word) {
          content = (
            <span
              style={{
                fontFamily: 'var(--font-display), sans-serif',
                fontSize: `${wordSize}px`,
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {word}
            </span>
          );
        } else if (item.img) {
          content = (
            <img
              src={item.img}
              alt=""
              width={size}
              height={size}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const holder = e.currentTarget.parentElement;
                if (holder) holder.style.display = 'none';
              }}
            />
          );
        } else if (item.Icon) {
          content = <item.Icon size={size} strokeWidth={1.75} />;
        }
        return (
          <span
            key={item.label || item.word}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: `${(4 + r1 * 84).toFixed(1)}%`,
              left: `${(3 + r2 * 91).toFixed(1)}%`,
              zIndex: 0,
              color: '#fff',
              opacity,
              pointerEvents: 'none',
              willChange: 'transform',
              animation: `hero-logo-float ${(6 + r1 * 3).toFixed(2)}s ease-in-out ${(r2 * 2.4).toFixed(2)}s infinite`,
            }}
          >
            {content}
          </span>
        );
      })}
    </>
  );
}
