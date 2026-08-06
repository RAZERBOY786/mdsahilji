import { useSectionReveal } from '../useSectionReveal';
import { useParallax } from '../useParallax';
import { useStaggerReveal, staggerChildStyle } from '../useStaggerReveal';
import { Laptop, Monitor, Smartphone, Camera, Database, Leaf, Send, Sparkles, Code2, Palette, Cpu } from 'lucide-react';
import FloatingBg from './FloatingBg';

const FEATURE_ICONS = [Code2, Palette, Smartphone, Database, Cpu];

const projects = [
  {
    title: 'MedBlink \u2013 Multi-App Healthcare & Delivery Platform',
    image: '/images/projects/medblink.jpg',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'JWT', 'Expo Go'],
    repo: 'https://github.com/RAZERBOY786/MEDBLINK',
    desc: 'Engineered a 3-app mobile ecosystem (Customer, Warehouse, Rider) to automate medicine delivery and doctor consultations across Android & iOS, serving 3 distinct user roles within a single backend.',
  },
  {
    title: 'Smart Data Analyzer \u2013 Mobile AI-Powered Data Science Platform',
    image: '/images/projects/smart-data-analyzer.jpg',
    tags: ['React Native (TSX)', 'Flask', 'Scikit-Learn', 'Pandas', 'REST APIs', 'Expo Go'],
    repo: 'https://github.com/RAZERBOY786/Smart-Data-Analyzer',
    desc: 'Engineered a cross-platform mobile application enabling end-to-end data analysis and machine learning workflows directly on mobile devices, eliminating dependency on traditional desktop environments like Jupyter Notebook.',
  },
  {
    title: 'LifeSync (HabitClock) \u2013 Smart Productivity & Health Tracker',
    image: '/images/projects/habitclock.jpg',
    tags: ['React (JS/TS)', 'HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/RAZERBOY786/HabitClock',
    desc: 'Developed a lightweight productivity and health tracking application integrating task management, time tracking, and fitness monitoring into a single unified interface.',
  },
  {
    title: 'Gitview \u2013 GitHub Analytics Mobile Dashboard',
    image: '/images/projects/gitview.jpg',
    tags: ['React Native (Expo)', 'TypeScript', 'GitHub REST API', 'Axios'],
    repo: 'https://github.com/RAZERBOY786/Gitview',
    desc: 'Developed a mobile-first GitHub analytics dashboard enabling developers to visualize coding activity, repository insights, and contribution trends in real time.',
  },
  {
    title: 'State-Level Consumer Price Index (CPI) Analytics Engine',
    image: '/images/projects/cpi-analytics-engine.jpg',
    tags: ['React (TSX)', 'Vite', 'Tailwind CSS', 'PapaParse', 'Geospatial Mapping'],
    repo: 'https://github.com/RAZERBOY786/CPI-Analytics-Engine',
    desc: 'Developed an advanced macroeconomic analytics dashboard to visualize and analyze state-wise inflation trends across India using high-dimensional government datasets.',
  },
  {
    title: 'VeloFeed \u2013 Real-Time News Aggregation Application',
    image: '/images/projects/velofeed.jpg',
    tags: ['React Native', 'Node.js', 'NewsData.io', 'Expo Go'],
    repo: 'https://github.com/RAZERBOY786/VELOFEED',
    desc: 'Developed a cross-platform mobile news application with infinite-scroll feed, Text-to-Speech (TTS) playback, and performance-optimized UI across Android & iOS.',
  },
  {
    title: 'SkyPure \u2013 Air Quality Index (AQI) Prediction Application',
    image: '/images/projects/skypure.jpg',
    tags: ['React Native', 'Python', 'Deep Learning', 'Firebase', 'Expo Go'],
    repo: 'https://github.com/RAZERBOY786/SKYPURE',
    desc: 'Launched a cross-platform AQI prediction application using React Native (TypeScript) for real-time environmental monitoring on Android & iOS.',
  },
  {
    title: 'Walkify \u2013 Fitness & Step Tracking Application',
    image: '/images/projects/walkify.jpg',
    tags: ['React Native', 'Expo Go', 'Firebase'],
    repo: 'https://github.com/RAZERBOY786/Walkify',
    desc: 'Built a cross-platform fitness tracking application monitoring daily step counts and 5+ health metrics with real-time insights on Android & iOS.',
  },
  {
    title: 'Loopify \u2013 Music Player Application',
    image: '/images/projects/loopify.jpg',
    tags: ['React Native', 'Expo Go', 'Firebase', 'REST APIs'],
    repo: 'https://github.com/RAZERBOY786/loopify',
    desc: 'Programmed a music player application with a custom segment-looping engine enabling millisecond-precise loop control over any audio segment for language learning use cases.',
  },
  {
    title: 'Plant Disease Detection & Treatment Recommendation System',
    image: '/images/projects/leafwish.jpg',
    tags: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'OpenCV'],
    repo: 'https://github.com/RAZERBOY786/leafwish',
    desc: 'Trained a CNN-based image classification model using TensorFlow Transfer Learning and OpenCV to detect 20+ plant diseases from leaf images with ~92% accuracy.',
  },
  {
    title: 'Hussain ul Haque \u2013 Author Portfolio Website',
    image: '/images/projects/hussainulhaque.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://www.hussainulhaque.info',
    desc: 'Deployed a fully responsive portfolio website optimized across 3 device breakpoints (desktop, tablet, mobile).',
  },
];

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
          {projects.map((p, i) => {
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
