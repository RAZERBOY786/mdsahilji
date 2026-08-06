import { useState } from 'react';
import { useIsMobile } from '../useMediaQuery';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Tech Stack', href: '#tech-stack', index: '02' },
  { label: 'Projects', href: '#projects', index: '03' },
  { label: 'Certifications', href: '#certifications', index: '04' },
  { label: 'Education', href: '#education', index: '05' },
  { label: 'Milestones', href: '#milestones', index: '06' },
  { label: 'Contact', href: '#contact', index: '07' },
];

const linkStyle = {
  pointerEvents: 'auto',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: 'clamp(0.72rem, 1vw, 0.78rem)',
  fontWeight: 600,
  letterSpacing: '0.03em',
  color: 'rgba(255, 255, 255, 0.72)',
  textDecoration: 'none',
  padding: '0.4rem 0.55rem',
  borderRadius: '999px',
  transition: 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
  border: '1px solid transparent',
  whiteSpace: 'nowrap',
};

export default function Navbar() {
  // Desktop nav pill (7 links + logo lockup) needs ~960px; switch to the
  // hamburger below 1024px so the pill never wraps or overflows on
  // tablet/laptop-landscape viewports (861–1023px was previously a gap).
  const isMobile = useIsMobile(1024);
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '1.1rem clamp(1.5rem, 6vw, 5rem)',
        pointerEvents: 'none',
      }}
    >
      <a
        href="#hero"
        aria-label="MD Sahil Johan Islam — back to top"
        style={{
          pointerEvents: 'auto',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'clamp(0.55rem, 1.4vw, 0.75rem)',
          backgroundColor: 'rgba(12, 14, 24, 0.55)',
          backdropFilter: 'blur(18px) saturate(170%)',
          WebkitBackdropFilter: 'blur(18px) saturate(170%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: '0.45rem 0.75rem 0.45rem 0.45rem',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
          transition: 'transform 0.2s ease, border-color 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
        }}
      >
        <span
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 4px 14px rgba(251, 146, 60, 0.45))',
          }}
        >
          <Logo size={44} />
        </span>
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.1,
            minWidth: 0,
            maxWidth: 'min(46vw, 200px)',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(0.68rem, 1.7vw, 0.82rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#fff',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            MD Sahil Johan Islam
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 'clamp(0.5rem, 1.5vw, 0.55rem)',
              fontWeight: 600,
              letterSpacing: '0.24em',
              color: 'rgba(251, 146, 60, 0.9)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Portfolio
          </span>
        </span>
      </a>

      {isMobile ? (
        <>
          <button
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              pointerEvents: 'auto',
              cursor: 'pointer',
              width: 44,
              height: 44,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              background: 'rgba(12, 14, 24, 0.55)',
              backdropFilter: 'blur(18px) saturate(170%)',
              WebkitBackdropFilter: 'blur(18px) saturate(170%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          >
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                background: '#fff',
                transform: open ? 'translateY(3.5px) rotate(45deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                background: '#fff',
                opacity: open ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            />
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                background: '#fff',
                transform: open ? 'translateY(-3.5px) rotate(-45deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
          </button>

          {open && (
            <nav
              aria-label="Primary"
              style={{
                pointerEvents: 'auto',
                position: 'fixed',
                top: '5.2rem',
                right: 'clamp(1.5rem, 6vw, 5rem)',
                left: 'clamp(1.5rem, 6vw, 5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                padding: '1rem',
                background: 'rgba(12, 14, 24, 0.92)',
                backdropFilter: 'blur(18px) saturate(170%)',
                WebkitBackdropFilter: 'blur(18px) saturate(170%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              }}
            >
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    ...linkStyle,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.8rem 0.9rem',
                    fontSize: '0.95rem',
                    minHeight: '44px',
                  }}
                >
                  <span>{l.label}</span>
                  <span style={{ fontFamily: 'var(--mono), monospace', fontSize: '0.7rem', color: 'rgba(251, 146, 60, 0.7)' }}>
                    {l.index}
                  </span>
                </a>
              ))}
            </nav>
          )}
        </>
      ) : (
        <nav
          aria-label="Primary"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.35rem',
            backgroundColor: 'rgba(12, 14, 24, 0.55)',
            backdropFilter: 'blur(18px) saturate(170%)',
            WebkitBackdropFilter: 'blur(18px) saturate(170%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '999px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(251, 146, 60, 0.14)';
                e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.72)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
