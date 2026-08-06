import { useSectionReveal } from '../useSectionReveal';
import { useParallax } from '../useParallax';
import { useStaggerReveal, staggerChildStyle } from '../useStaggerReveal';
import kvsLogo from '../assets/kvs-logo.svg';
import brainwareLogo from '../assets/brainware-logo.svg';
import { Backpack, Book, Pen, Pencil, GraduationCap, NotebookPen, School, Library, Leaf, Send, Sparkles } from 'lucide-react';
import FloatingBg from './FloatingBg';

const educationItems = [
  {
    title: 'Bachelor of Computer Applications (Honours)',
    school: 'Brainware University',
    logo: brainwareLogo,
    year: '2027',
    desc: 'Specialized in Software Engineering and Database Systems.',
  },
  {
    title: 'Higher Secondary Education',
    school: 'Kendriya Vidyalaya Sangathan',
    logo: kvsLogo,
    year: '2022',
    desc: 'Commerce stream with a focus on IP, Business, Economics, and Accountancy.',
  },
  {
    title: 'Secondary Education',
    school: 'Kendriya Vidyalaya Sangathan',
    logo: kvsLogo,
    year: '2020',
    desc: 'Foundation years building strong analytical and problem-solving habits.',
  },
];

export default function Education() {
  const { ref, style } = useSectionReveal();
  const stagger = useStaggerReveal();
  const headingParallax = useParallax(0.08);

  return (
    <section
      id="education"
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
      {/* Mixed background: white education icons + leaf / paper plane / sparkles */}
      <FloatingBg
        items={[
          { Icon: Backpack, label: 'bag' },
          { Icon: Book, label: 'book' },
          { Icon: Pen, label: 'pen' },
          { Icon: Pencil, label: 'pencil' },
          { Icon: GraduationCap, label: 'cap' },
          { Icon: NotebookPen, label: 'notebook' },
          { Icon: School, label: 'school' },
          { Icon: Library, label: 'library' },
          { label: 'leaf', Icon: Leaf },
          { label: 'plane', Icon: Send },
          { label: 'sparkles', Icon: Sparkles },
        ]}
        seed={31}
      />

      <div ref={ref} style={{ width: '100%', position: 'relative', zIndex: 1, ...style }}>
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            <span className="cp-neon">Education</span>
          </h2>
        </div>

        <div
          ref={stagger.ref}
          className={stagger.visible ? 'is-visible' : ''}
          style={{ width: '100%' }}
        >
          <h3 className="cp-col-heading">Timeline</h3>
          <ol className="edu-timeline-new">
            {educationItems.map((item, i) => (
              <li key={item.title} className="edu-item-new stagger-child" style={staggerChildStyle(i)}>
                <span className="edu-dot-new" aria-hidden="true">
                  <span className="edu-year-new">{item.year}</span>
                </span>
                <div className="edu-card-new">
                  <div className="edu-card-head">
                    <img className="edu-card-logo" src={item.logo} alt={`${item.school} logo`} />
                    <div className="edu-card-head-text">
                      <h4 className="edu-card-title">{item.title}</h4>
                      <p className="edu-card-school">{item.school}</p>
                    </div>
                  </div>
                  <p className="edu-card-desc">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
