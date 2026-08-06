import { useId } from 'react';
import Logo from './Logo';

const RING = 176;
const STROKE = 6;
const RADIUS = (RING - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BootLoader({ progress = 0 }) {
  const gradId = useId();
  const pct = Math.min(100, Math.max(0, progress));
  const offset = CIRCUMFERENCE * (1 - pct / 100);

  return (
    <div className="boot-loader">
      <div className="boot-ring">
        <svg
          className="boot-ring__svg"
          width={RING}
          height={RING}
          viewBox={`0 0 ${RING} ${RING}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4169e1" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <circle
            className="boot-ring__track"
            cx={RING / 2}
            cy={RING / 2}
            r={RADIUS}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={STROKE}
          />
          <circle
            className="boot-ring__fill"
            cx={RING / 2}
            cy={RING / 2}
            r={RADIUS}
            stroke={`url(#${gradId})`}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="boot-ring__logo">
          <Logo size={72} tone="blue" />
        </div>
      </div>

      <div className="boot-loader__name">MD SAHIL JOHAN ISLAM</div>
      <div className="boot-loader__sub">Computer Science Student · Full-Stack Developer</div>

      <div className="boot-loader__pct">
        <span className="boot-loader__pct-num">{Math.round(pct)}%</span>
      </div>
    </div>
  );
}
