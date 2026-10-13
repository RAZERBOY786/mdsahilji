import { useId } from 'react';
import Logo from './Logo';

const RING = 184;
const STROKE = 6;
const RADIUS = (RING - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Human-readable label that tracks the loading progress. */
function statusFor(pct) {
  if (pct >= 100) return 'Ready';
  if (pct >= 88) return 'Finalizing experience';
  if (pct >= 55) return 'Rendering visuals';
  if (pct >= 25) return 'Loading assets';
  return 'Initializing';
}

export default function BootLoader({ progress = 0 }) {
  const gradId = useId();
  const pct = Math.min(100, Math.max(0, progress));
  const offset = CIRCUMFERENCE * (1 - pct / 100);
  const rounded = Math.round(pct);

  return (
    <div
      className="boot-loader"
      role="progressbar"
      aria-label="Loading portfolio"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={rounded}
      aria-valuetext={`${rounded}% ${statusFor(pct)}`}
    >
      {/* Ambient background: soft glows + faint blueprint grid */}
      <div className="boot-loader__aura" aria-hidden="true" />
      <div className="boot-loader__grid" aria-hidden="true" />

      <div className="boot-loader__content">
        {/* Progress ring wrapped around the brand mark */}
        <div className="boot-ring">
          <svg
            className="boot-ring__svg"
            viewBox={`0 0 ${RING} ${RING}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
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
          <div className="boot-ring__core">
            <Logo size={72} tone="blue" />
          </div>
        </div>

        {/* Identity */}
        <div className="boot-loader__identity">
          <div className="boot-loader__name">MD Sahil Johan Islam</div>
          <div className="boot-loader__sub">
            Computer Science Student <span aria-hidden="true">·</span> Full-Stack Developer
          </div>
        </div>

        {/* Precise progress readout */}
        <div className="boot-loader__progress">
          <div className="boot-loader__bar">
            <div
              className="boot-loader__bar-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="boot-loader__meta">
            <span className="boot-loader__status">{statusFor(pct)}</span>
            <span className="boot-loader__pct">{rounded}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
