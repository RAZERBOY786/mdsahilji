import { useScrollProgress } from './ScrollProgressContext';
import { useIsMobile } from './useMediaQuery';

const SECTIONS = ['hero', 'about', 'tech-stack', 'projects', 'certifications', 'education', 'milestones', 'contact'];

export default function ProgressRail() {
  const progress = useScrollProgress();
  const isMobile = useIsMobile();
  const activeIndex = Math.min(SECTIONS.length - 1, Math.floor(progress * SECTIONS.length));

  if (isMobile) return null;

  return (
    <div
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {SECTIONS.map((id, i) => (
        <div
          key={id}
          data-label={id.replace('-', ' ')}
          className="rail-dot"
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            width: i === activeIndex ? '10px' : '6px',
            height: i === activeIndex ? '10px' : '6px',
            borderRadius: '50%',
            cursor: 'pointer',
            background: i === activeIndex ? '#fb923c' : 'rgba(255,255,255,0.3)',
            boxShadow: i === activeIndex ? '0 0 10px #fb923c' : 'none',
          }}
        />
      ))}
    </div>
  );
}
