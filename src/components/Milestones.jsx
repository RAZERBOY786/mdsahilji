import { useSectionReveal } from '../useSectionReveal';
import { useParallax } from '../useParallax';
import { Trophy, Star, Medal, Code2, Brain, Globe, Dumbbell, Award, Crown, Flag, BadgeCheck, Sparkles, Leaf, Send } from 'lucide-react';
import MagicBento from './MagicBento';
import FloatingBg from './FloatingBg';

const MILESTONES = [
  {
    year: 'Ranks',
    org: 'COEP',
    Icon: Medal,
    title: 'Quiz Competition',
    desc: 'Secured 9th Rank in a prestigious quiz competition at COEP.',
  },
  {
    year: 'Ranks',
    org: 'Brainware University',
    Icon: Code2,
    title: 'Coding Competition',
    desc: 'Participated in a coding competition demonstrating competitive programming ability.',
  },
  {
    year: 'Ranks',
    org: 'Olympiad',
    Icon: Brain,
    title: 'Computer Science Olympiad',
    desc: 'Achieved 22nd Rank in the Computer Science Olympiad.',
  },
  {
    year: 'Ranks',
    org: 'International Level',
    Icon: Globe,
    title: 'SOF ICSO & NCO',
    desc: 'Ranked 13th in SOF International CS Olympiad & National Cyber Olympiad.',
  },
  {
    year: 'Sports',
    org: 'KV Regional Level',
    Icon: Dumbbell,
    title: 'Football Tournament',
    desc: 'Runner-up in the Kendriya Vidyalaya Regional-Level Football Tournament.',
  },
];

const BENTO_CARDS = MILESTONES.map((m) => ({
  label: `${m.year} · ${m.org}`,
  title: m.title,
  description: m.desc,
  Icon: m.Icon,
}));

export default function Milestones() {
  const { ref, style } = useSectionReveal();
  const headingParallax = useParallax(0.08);

  return (
    <section
      id="milestones"
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
      {/* Mixed background: white award icons + leaf / paper plane / sparkles */}
      <FloatingBg
        items={[
          { Icon: Trophy, label: 'trophy' },
          { Icon: Medal, label: 'medal' },
          { Icon: Award, label: 'award' },
          { Icon: Crown, label: 'crown' },
          { Icon: Star, label: 'star' },
          { Icon: Flag, label: 'flag' },
          { Icon: BadgeCheck, label: 'badge' },
          { Icon: Sparkles, label: 'sparkles' },
          { label: 'leaf', Icon: Leaf },
          { label: 'plane', Icon: Send },
        ]}
        seed={41}
      />

      <div ref={ref} style={{ width: '100%', position: 'relative', zIndex: 1, ...style }}>
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            <span className="cp-neon">Recognition</span>
          </h2>
        </div>

        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="65, 105, 225"
          cards={BENTO_CARDS}
        />
      </div>
    </section>
  );
}
