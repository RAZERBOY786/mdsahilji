import { useSectionReveal } from '../useSectionReveal';
import { useParallax } from '../useParallax';
import { useStaggerReveal, staggerChildStyle } from '../useStaggerReveal';
import { SiPostman, SiPython, SiScikitlearn, SiMysql, SiTensorflow, SiChartdotjs } from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa6';
import { Leaf, Send, Sparkles } from 'lucide-react';
import CertificateCard from './CertificateCard';
import FloatingBg from './FloatingBg';

const certs = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026', desc: 'Cloud Infrastructure, Deployment, Scalability' },
  { title: 'Postman API Fundamentals Expert', issuer: 'Postman', year: '2025', desc: 'REST API Testing, API Design' },
  { title: 'Programming in Java', issuer: 'NPTEL', year: '2025', desc: 'Object-Oriented Programming, Data Structures' },
  { title: 'Data Science with Python', issuer: 'NPTEL', year: '2025', desc: 'Machine Learning, Data Analysis' },
  { title: 'Getting Started with AI', issuer: 'IBM SkillsBuild', year: '2025', desc: 'AI Fundamentals, Deep Learning, NLP' },
  { title: 'Data Science with Python', issuer: 'Lets Upgrade', year: '2024', desc: 'Python, NumPy, Scikit-learn' },
  { title: 'MySQL 2 Days MasterClass', issuer: 'Lets Upgrade', year: '2024', desc: 'Relational Databases, SQL Queries' },
  { title: 'Data Representation & Visualization', issuer: 'Brainware University', year: '2024', desc: 'Data Analysis, Visual Communication' },
];

const certIcons = [
  { Icon: FaAws, color: '#FF9900' },
  { Icon: SiPostman, color: '#FF6C37' },
  { Icon: FaJava, color: '#f89820' },
  { Icon: SiPython, color: '#3776AB' },
  { Icon: SiTensorflow, color: '#FF6F00' },
  { Icon: SiScikitlearn, color: '#F7931E' },
  { Icon: SiMysql, color: '#4479A1' },
  { Icon: SiChartdotjs, color: '#F7DF1E' },
];

const accents = ['#c6e377', '#c0bbfe', '#ffdf6c', '#ff8ba7', '#b7e4ff', '#ffd1a9', '#f4c2ff', '#a9e8d0'];

export default function Certifications() {
  const { ref, style } = useSectionReveal();
  const stagger = useStaggerReveal();
  const headingParallax = useParallax(0.08);

  return (
    <section
      id="certifications"
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
      {/* Mixed background: floating white badge words + leaf / paper plane / sparkles */}
      <FloatingBg
        items={[
          ...['Certified', 'Verified', 'Accredited', 'Awarded', 'Validated', 'Endorsed', 'Recognized', 'Qualified'].map((w) => ({ label: w, word: w })),
          { label: 'leaf', Icon: Leaf },
          { label: 'plane', Icon: Send },
          { label: 'sparkles', Icon: Sparkles },
        ]}
        seed={21}
      />

      <div ref={ref} style={{ width: '100%', position: 'relative', zIndex: 1, ...style }}>
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            Certified
            <span className="cp-neon">Credentials</span>
          </h2>
        </div>

        <ul
          ref={stagger.ref}
          className={`cp-grid cp-grid--certs ${stagger.visible ? 'is-visible' : ''}`}
          style={{ width: '100%' }}
        >
          {certs.map((c, i) => (
            <li
              key={`${c.title}-${i}`}
              className="stagger-child"
              style={staggerChildStyle(i)}
            >
              <CertificateCard
                title={c.title}
                issuer={c.issuer}
                year={c.year}
                desc={c.desc}
                icon={certIcons[i]}
                accent={accents[i % accents.length]}
                serial={`#CERT-${String(i + 1).padStart(3, '0')}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
