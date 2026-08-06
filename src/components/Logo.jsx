import { useId } from 'react';

export default function Logo({ size = 44, tone = 'orange' }) {
  const gradId = useId();
  const isBlue = tone === 'blue';
  const stops = isBlue
    ? [
        { offset: '0%', color: '#4169e1' },
        { offset: '55%', color: '#2563eb' },
        { offset: '100%', color: '#38bdf8' },
      ]
    : [
        { offset: '0%', color: '#fb923c' },
        { offset: '55%', color: '#f97316' },
        { offset: '100%', color: '#ea580c' },
      ];

  return (
    <svg
      width={size}
      height={size}
      style={{ width: size, height: size }}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SJI logo"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          {stops.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="16"
        fill={`url(#${gradId})`}
        stroke="rgba(255, 255, 255, 0.35)"
        strokeWidth="1.5"
      />
      <text
        x="32"
        y="33.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-display), sans-serif"
        fontWeight="800"
        fontSize="21"
        letterSpacing="1.5"
        fill="#fff"
      >
        SJI
      </text>
    </svg>
  );
}
