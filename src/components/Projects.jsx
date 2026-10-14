import { useSectionReveal } from '../useSectionReveal';
import { useParallax } from '../useParallax';
import { useStaggerReveal, staggerChildStyle } from '../useStaggerReveal';
import { Laptop, Monitor, Smartphone, Camera, Database, Leaf, Send, Sparkles, Code2, Palette, Cpu } from 'lucide-react';
import FloatingBg from './FloatingBg';
import { PROJECTS } from '../data/projects';

const FEATURE_ICONS = [Code2, Palette, Smartphone, Database, Cpu];

export default function Projects() {
  const { ref, style } = useSectionReveal();
  const stagger = useStaggerReveal();
  const headingParallax = useParallax(0.08);

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem clamp(1.5rem, 6vw, 5rem)',
        color: '#fff',
        fontFamily: 'var(--font-body), sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Mixed background: white tech-device icons + leaf / paper plane / sparkles */}
      <FloatingBg
        items={[
          { Icon: Laptop, label: 'laptop' },
          { Icon: Monitor, label: 'pc' },
          { Icon: Smartphone, label: 'phone' },
          { Icon: Camera, label: 'camera' },
          { Icon: Database, label: 'data' },
          { label: 'vscode', img: 'https://cdn.simpleicons.org/visualstudiocode/FFFFFF' },
          { label: 'leaf', Icon: Leaf },
          { label: 'plane', Icon: Send },
          { label: 'sparkles', Icon: Sparkles },
        ]}
        seed={13}
      />

      <div ref={ref} style={{ width: '100%', position: 'relative', zIndex: 1, ...style }}>
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            <span className="cp-neon">Projects</span>
          </h2>
        </div>

        <ol
          ref={stagger.ref}
          className={`cp-grid cp-grid--projects ${stagger.visible ? 'is-visible' : ''}`}
          style={{ width: '100%' }}
        >
          {PROJECTS.map((p, i) => {
            const shortTitle = p.title.split('\u2013')[0].trim();
            return (
              <li
                key={p.title}
                className="stagger-child"
                style={{ display: 'flex', ...staggerChildStyle(i) }}
              >
                <article className="proj-card">
                  <div className="proj-card-pattern-grid" />
                  <div className="proj-card-overlay-dots" />
                  <div className="proj-bold-pattern">
                    <svg viewBox="0 0 100 100">
                      <path strokeDasharray="15 10" strokeWidth={10} stroke="#000" fill="none" d="M0,0 L100,0 L100,100 L0,100 Z" />
                    </svg>
                  </div>

                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.title} repository`}
                    className="proj-card-title-area"
                  >
                    <span className="proj-card-title">{shortTitle}</span>
                    <span className="proj-card-tag">Project</span>
                  </a>

                  <div className="proj-card-body">
                    <div className="proj-card-description">{p.desc}</div>
                    <div className="proj-feature-grid">
                      {p.tags.slice(0, 4).map((tag, j) => {
                        const Icon = FEATURE_ICONS[(i + j) % FEATURE_ICONS.length];
                        return (
                          <div className="proj-feature-item" key={tag}>
                            <div className="proj-feature-icon">
                              <Icon size={16} strokeWidth={2.4} />
                            </div>
                            <span className="proj-feature-text" title={tag}>
                              {tag}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="proj-card-actions">
                      <div className="proj-price">
                        <span className="proj-price-currency">#</span>
                        {String(i + 1).padStart(2, '0')}
                        <span className="proj-price-period">{p.tags.length} tech used</span>
                      </div>
                      <a
                        className="proj-card-button"
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repo
                      </a>
                    </div>
                  </div>

                  <div className="proj-dots-pattern">
                    <svg viewBox="0 0 80 40">
                      <circle fill="#000" r={3} cy={10} cx={10} />
                      <circle fill="#000" r={3} cy={10} cx={30} />
                      <circle fill="#000" r={3} cy={10} cx={50} />
                      <circle fill="#000" r={3} cy={10} cx={70} />
                      <circle fill="#000" r={3} cy={20} cx={20} />
                      <circle fill="#000" r={3} cy={20} cx={40} />
                      <circle fill="#000" r={3} cy={20} cx={60} />
                      <circle fill="#000" r={3} cy={30} cx={10} />
                      <circle fill="#000" r={3} cy={30} cx={30} />
                      <circle fill="#000" r={3} cy={30} cx={50} />
                      <circle fill="#000" r={3} cy={30} cx={70} />
                    </svg>
                  </div>
                  <div className="proj-accent-shape" />
                  <div className="proj-corner-slice" />
                  <div className="proj-stamp">
                    <span className="proj-stamp-text">Built</span>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
