import { useSectionReveal } from '../useSectionReveal';
import { useParallax } from '../useParallax';
import { useStaggerReveal, staggerChildStyle } from '../useStaggerReveal';
import { Sparkles, Send, Leaf, Code2, Cpu, Database, Smartphone } from 'lucide-react';
import FloatingBg from './FloatingBg';
import { FAQ } from '../data/faq';

export default function Faq() {
  const { ref, style } = useSectionReveal();
  const stagger = useStaggerReveal();
  const headingParallax = useParallax(0.08);

  return (
    <section
      id="faq"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem clamp(1.5rem, 6vw, 5rem)',
        color: '#fff',
        fontFamily: 'var(--font-body), sans-serif',
        overflow: 'hidden',
      }}
    >
      <FloatingBg
        items={[
          { Icon: Code2, label: 'code' },
          { Icon: Cpu, label: 'cpu' },
          { Icon: Database, label: 'data' },
          { Icon: Smartphone, label: 'mobile' },
          { label: 'sparkles', Icon: Sparkles },
          { label: 'plane', Icon: Send },
          { label: 'leaf', Icon: Leaf },
        ]}
        seed={93}
      />

      <div ref={ref} className="cp-text-col" style={{ position: 'relative', zIndex: 1, ...style }}>
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            Common
            <span className="cp-neon">Questions</span>
          </h2>
        </div>

        <div ref={stagger.ref} className={stagger.visible ? 'is-visible' : ''} style={{ width: '100%' }}>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <details className="faq-item stagger-child" key={item.q} style={staggerChildStyle(i)}>
                <summary className="faq-summary">
                  <h3 className="faq-question">{item.q}</h3>
                  <span className="faq-marker" aria-hidden="true" />
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
