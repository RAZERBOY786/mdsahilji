import ScrollAnimation from './ScrollAnimation';
import { useSectionReveal } from './useSectionReveal';
import { useParallax } from './useParallax';
import { useCountUp } from './useCountUp';
import { useStaggerReveal } from './useStaggerReveal';
import { Network, Brain, PenTool, Workflow, Cookie, Croissant, Utensils, Popcorn, Soup, Sandwich, CookingPot, Drumstick, Coffee, ChefHat, Leaf, Send, Sparkles } from 'lucide-react';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiTypescript, SiPython, SiTensorflow, SiC, SiJavascript, SiHtml5, SiCss, SiScikitlearn, SiGithub, SiPostman, SiBlender } from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa6';
import ProgressRail from './ProgressRail';
import FloatingBg from './components/FloatingBg';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const HERO_TECHS = [
  { label: 'React', slug: 'react', color: '61DAFB' },
  { label: 'React Native', slug: 'react', color: '61DAFB' },
  { label: 'Expo', slug: 'expo', color: 'FFFFFF' },
  { label: 'Python', slug: 'python', color: '3776AB' },
  { label: 'C', slug: 'c', color: 'A8B9CC' },
  { label: 'C++', slug: 'cplusplus', color: '00599C' },
  { label: 'C#', slug: 'csharp', color: '512BD4' },
  { label: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { label: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { label: 'AI / ML', slug: 'tensorflow', color: 'FF6F00' },
  { label: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
  { label: 'Vue.js', slug: 'vuedotjs', color: '4FC08D' },
  { label: 'Angular', slug: 'angular', color: 'DD0031' },
  { label: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { label: 'Express', slug: 'express', color: 'FFFFFF' },
  { label: 'Docker', slug: 'docker', color: '2496ED' },
  { label: 'Kubernetes', slug: 'kubernetes', color: '326CE5' },
  { label: 'Redis', slug: 'redis', color: 'FF4438' },
  { label: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  { label: 'MongoDB', slug: 'mongodb', color: '47A248' },
  { label: 'MySQL', slug: 'mysql', color: '4479A1' },
  { label: 'Firebase', slug: 'firebase', color: 'FFCA28' },
  { label: 'AWS', slug: 'amazonwebservices', color: 'FF9900' },
  { label: 'Git', slug: 'git', color: 'F05032' },
  { label: 'GitHub', slug: 'github', color: 'FFFFFF' },
  { label: 'Flutter', slug: 'flutter', color: '02569B' },
  { label: 'Kotlin', slug: 'kotlin', color: '7F52FF' },
  { label: 'Swift', slug: 'swift', color: 'F05138' },
  { label: 'Django', slug: 'django', color: '092E20' },
  { label: 'Spring', slug: 'spring', color: '6DB33F' },
];

const HERO_MIX = [
  { label: 'Leaf', Icon: Leaf },
  { label: 'PaperPlane', Icon: Send },
  { label: 'Sparkles', Icon: Sparkles },
  { label: 'BlackIcon', img: 'https://img.icons8.com/?size=100&id=uchZOns74L7V&format=png&color=FFFFFF' },
  { label: 'F1Car', img: 'https://img.icons8.com/?size=100&id=SmycgNNUprJa&format=png&color=FFFFFF' },
  { label: 'F1Car2', img: 'https://img.icons8.com/?size=100&id=SmycgNNUprJa&format=png&color=FFFFFF' },
  { label: 'RaceFlag', img: 'https://img.icons8.com/?size=100&id=GSHWFnD9x56D&format=png&color=FFFFFF' },
  { label: 'Speedometer', img: 'https://img.icons8.com/?size=100&id=sZlmI37bwUv5&format=png&color=FFFFFF' },
  { label: 'Helmet', img: 'https://img.icons8.com/?size=100&id=iMmqE24XPs7V&format=png&color=FFFFFF' },
  { label: 'NewIcon', img: 'https://img.icons8.com/?size=100&id=31070&format=png&color=FFFFFF' },
  { label: 'icon99379', img: 'https://img.icons8.com/?size=100&id=99379&format=png&color=FFFFFF' },
  { label: 'icon99383', img: 'https://img.icons8.com/?size=100&id=99383&format=png&color=FFFFFF' },
  { label: 'iconn6EUDVJy4EhY', img: 'https://img.icons8.com/?size=100&id=n6EUDVJy4EhY&format=png&color=FFFFFF' },
  { label: 'iconVJlFFoarAfBc', img: 'https://img.icons8.com/?size=100&id=VJlFFoarAfBc&format=png&color=FFFFFF' },
  { label: 'icon112615', img: 'https://img.icons8.com/?size=100&id=112615&format=png&color=FFFFFF' },
  { label: 'iconm5aGnpP3oSGF', img: 'https://img.icons8.com/?size=100&id=m5aGnpP3oSGF&format=png&color=FFFFFF' },
  { label: 'icon16544', img: 'https://img.icons8.com/?size=100&id=16544&format=png&color=FFFFFF' },
  { label: 'icon68088', img: 'https://img.icons8.com/?size=100&id=68088&format=png&color=FFFFFF' },
  { label: 'icon45658', img: 'https://img.icons8.com/?size=100&id=45658&format=png&color=FFFFFF' },
  { label: 'icon43359', img: 'https://img.icons8.com/?size=100&id=43359&format=png&color=FFFFFF' },
  { label: 'iconGVBkFMvvoTqM', img: 'https://img.icons8.com/?size=100&id=GVBkFMvvoTqM&format=png&color=FFFFFF' },
  { label: 'icon50800', img: 'https://img.icons8.com/?size=100&id=50800&format=png&color=FFFFFF' },
  { label: 'iconrnAmLoYeiZTg', img: 'https://img.icons8.com/?size=100&id=rnAmLoYeiZTg&format=png&color=FFFFFF' },
];

const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '15+', label: 'Certifications' },
];

const TECH_GRID = [
  { title: 'React Native', handle: 'react-native', progress: 92, items: ['Expo Go', 'TypeScript', 'Firebase', 'REST APIs'], Icon: SiReact, color: '#61DAFB' },
  { title: 'Node.js', handle: 'node', progress: 88, items: ['Express.js', 'REST APIs', 'JWT', 'WebSockets'], Icon: SiNodedotjs, color: '#339933' },
  { title: 'Express', handle: 'express', progress: 86, items: ['Middleware', 'REST APIs', 'JWT Auth', 'MongoDB'], Icon: SiExpress, color: '#ffffff' },
  { title: 'MongoDB', handle: 'mongodb', progress: 85, items: ['Mongoose', 'NoSQL', 'Aggregation', 'Atlas'], Icon: SiMongodb, color: '#47A248' },
  { title: 'Firebase', handle: 'firebase', progress: 84, items: ['Auth', 'Firestore', 'Cloud Messaging', 'Storage'], Icon: SiFirebase, color: '#FFCA28' },
  { title: 'TypeScript', handle: 'typescript', progress: 87, items: ['Generics', 'React + TSX', 'Types', 'Tooling'], Icon: SiTypescript, color: '#3178C6' },
  { title: 'Python', handle: 'python', progress: 82, items: ['Flask', 'Pandas', 'Scikit-learn', 'Automation'], Icon: SiPython, color: '#3776AB' },
  { title: 'TensorFlow', handle: 'tensorflow', progress: 80, items: ['CNN', 'Transfer Learning', 'OpenCV', 'Keras'], Icon: SiTensorflow, color: '#FF6F00' },
  { title: 'AWS', handle: 'aws', progress: 75, items: ['EC2', 'S3', 'Lambda', 'Cloud Practitioner'], Icon: FaAws, color: '#FF9900' },
  { title: 'REST APIs', handle: 'rest', progress: 88, items: ['CRUD', 'Axios', 'Postman', 'API Design'], Icon: Network, color: '#fb923c' },
];

const SKILL_ROWS = [
  { label: 'Programming Languages', items: ['C', 'Python', 'Java', 'JavaScript', 'TypeScript'] },
  { label: 'Mobile & Web Development', items: ['React Native', 'Expo Go', 'Node.js', 'Express.js', 'React.js', 'HTML5', 'CSS3'] },
  { label: 'Machine Learning & Deep Learning', items: ['TensorFlow', 'CNN', 'Transfer Learning', 'NLP', 'OpenCV', 'NumPy', 'Scikit-learn'] },
  { label: 'Cloud, Tools & Platforms', items: ['Git & GitHub', 'Android Studio', 'Postman', 'Microservices Architecture', 'Microsoft Excel', 'Blender', 'Canva', 'Stitch'] },
];

const REMOVE_STACK = new Set([
  'microservices architecture',
  'microsoft excel',
  'android studio',
  'expo go',
  'express.js',
  'cnn',
  'nlp',
  'opencv',
  'numpy',
]);

const EXTRA_ICONS = {
  'C': { Icon: SiC, color: '#A8B9CC' },
  'Java': { Icon: FaJava, color: '#f89820' },
  'JavaScript': { Icon: SiJavascript, color: '#F7DF1E' },
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  'HTML5': { Icon: SiHtml5, color: '#E34F26' },
  'CSS3': { Icon: SiCss, color: '#1572B6' },
  'Transfer Learning': { Icon: Brain, color: '#FF6F00' },
  'Scikit-learn': { Icon: SiScikitlearn, color: '#F7931E' },
  'Git & GitHub': { Icon: SiGithub, color: '#FFFFFF' },
  'Postman': { Icon: SiPostman, color: '#FF6C37' },
  'Blender': { Icon: SiBlender, color: '#E87D0D' },
  'Canva': { Icon: PenTool, color: '#00C4CC' },
  'Stitch': { Icon: Workflow, color: '#f97316' },
};

const SKILL_CATEGORIES = [
  { handle: 'typescript', title: 'Programming Languages', progress: 85 },
  { handle: 'react-native', title: 'Mobile & Web Development', progress: 90 },
  { handle: 'tensorflow', title: 'Machine Learning & Deep Learning', progress: 80 },
  { handle: 'postgres', title: 'Backend & Databases', progress: 85 },
  { handle: 'aws', title: 'Cloud, Tools & Platforms', progress: 75 },
];

const STACK_ENTRIES = (() => {
  const seen = new Set();
  const entries = [];
  for (const t of TECH_GRID) {
    seen.add(t.title.toLowerCase());
    entries.push(t);
  }
  for (const row of SKILL_ROWS) {
    for (const item of row.items) {
      const key = item.toLowerCase();
      if (REMOVE_STACK.has(key)) continue;
      if (seen.has(key)) continue;
      seen.add(key);
      entries.push({ title: item, ...(EXTRA_ICONS[item] || {}) });
    }
  }
  return entries;
})();

function Hero() {
  const titleParallax = useParallax(0.16);
  const bodyParallax = useParallax(0.1);
  const cueParallax = useParallax(0.06);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 clamp(1.5rem, 6vw, 5rem)',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <div ref={titleParallax.ref} style={{ position: 'relative', zIndex: 1, ...titleParallax.style }}>
        <h1
          className="hero-enter"
          style={{
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            margin: 0,
            textShadow: '0 2px 24px rgba(0, 0, 0, 0.8)',
          }}
        >
          MD Sahil Johan Islam
        </h1>
      </div>

      <div ref={bodyParallax.ref} style={{ position: 'relative', zIndex: 1, ...bodyParallax.style }}>
        <p
          className="hero-enter"
          style={{
            animationDelay: '0.15s',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.6,
            margin: '1.2rem 0 0',
            maxWidth: '640px',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)',
          }}
        >
          Passionate developer crafting modern, user-friendly digital experiences with clean design
          and efficient code. Skilled in web and mobile technologies, I build innovative solutions
          that solve real-world problems while focusing on performance, creativity, and seamless
          user interaction across platforms.
        </p>
      </div>

      {/* Redesigned hero background: mixed white tech logos + leaf / paper plane / sparkles + words */}
      <FloatingBg items={HERO_MIX} sizeRange={[20, 52]} opacityRange={[0.28, 0.6]} seed={0} />

      {/* Scroll cue */}
      <div
        ref={cueParallax.ref}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 'clamp(1.5rem, 6vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255, 255, 255, 0.55)',
          zIndex: 1,
          ...cueParallax.style,
        }}
      >
        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          className="scroll-cue"
          style={{
            width: '22px',
            height: '34px',
            borderRadius: '100px',
            border: '2px solid rgba(255, 255, 255, 0.35)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div style={{ width: '3px', height: '7px', borderRadius: '100px', background: '#fb923c' }} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ s }) {
  const num = parseFloat(s.value);
  const suffix = s.value.replace(/[\d.]/g, '');
  const decimals = s.value.includes('.') ? 1 : 0;
  const { ref, display } = useCountUp(num, { duration: 1400, decimals });

  return (
    <div ref={ref} style={{ textAlign: 'left' }}>
      <div
        style={{
          fontFamily: 'var(--font-display), sans-serif',
          fontSize: '2.4rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.3rem',
        }}
      >
        {display}
        {suffix}
      </div>
      <div style={{ fontSize: '0.88rem', color: '#4b5563', fontWeight: 600 }}>
        {s.label}
      </div>
    </div>
  );
}


/* Floating city names + landmark & food logos drifting in the About background, hero-style */
const ABOUT_CITY_FLOAT = [
  { name: 'Meerut', icon: 'temple', food: Cookie, top: '7%', left: '4%', size: 14, dur: 7.5, delay: 0.2, op: 0.7 },
  { name: 'Delhi', icon: 'fort', food: Croissant, top: '15%', left: '56%', size: 19, dur: 9, delay: 1.1, op: 0.8 },
  { name: 'Hisar', icon: 'lake', food: Utensils, top: '25%', right: '9%', size: 14, dur: 8, delay: 0.5, op: 0.65 },
  { name: 'Bareilly', icon: 'dargah', food: Popcorn, top: '34%', left: '32%', size: 15, dur: 8.5, delay: 1.6, op: 0.7 },
  { name: 'Ladakh', icon: 'pangong', food: CookingPot, top: '13%', left: '76%', size: 12, dur: 7, delay: 0.9, op: 0.6 },
  { name: 'Pune', icon: 'wada', food: Soup, top: '48%', left: '7%', size: 16, dur: 9.5, delay: 0.1, op: 0.75 },
  { name: 'Jaipur', icon: 'hawamahal', food: Drumstick, top: '44%', right: '28%', size: 15, dur: 7, delay: 1.9, op: 0.7 },
  { name: 'Mumbai', icon: 'gateway', food: Sandwich, top: '60%', right: '9%', size: 21, dur: 8, delay: 0.7, op: 0.85 },
  { name: 'Darjeeling', icon: 'tiger', food: Coffee, top: '70%', left: '34%', size: 14, dur: 9, delay: 1.3, op: 0.65 },
  { name: 'Hyderabad', icon: 'charminar', food: ChefHat, top: '84%', right: '20%', size: 18, dur: 7.5, delay: 0.4, op: 0.8 },
];

/* Each landmark icon is a detailed line-art drawing (India Gate style):
   primitives are ['path', d] or ['circle', cx, cy, r] */
const ABOUT_ICONS = {
  temple: [
    ['path', 'M-14,10 H14'],
    ['path', 'M-13,6 H13 M-13,10 H13'],
    ['path', 'M-12,6 V-4 C-12,-16 -5,-28 0,-28 C5,-28 12,-16 12,-4 V6'],
    ['path', 'M-9,-8 H9 M-6,-16 H6'],
    ['path', 'M0,-28 V-33'],
    ['circle', 0, -35, 3],
    ['path', 'M-2,-40 H2 M0,-40 V-45'],
    ['path', 'M0,-45 V-48 M0,-48 L5,-45.5 L0,-43'],
  ],
  fort: [
    ['path', 'M-15,2 H15'],
    ['path', 'M-15,0 H15'],
    ['path', 'M-15,0 V-6 M-12,-6 V0 M-9,0 V-6 M-6,-6 V0 M-3,0 V-6 M0,-6 V0 M3,0 V-6 M6,-6 V0 M9,0 V-6 M12,-6 V0 M15,0 V-6'],
    ['path', 'M-15,0 V10 M15,0 V10'],
    ['path', 'M-13,10 V-4 M-13,-4 H-14'],
    ['path', 'M13,10 V-4 M13,-4 H14'],
    ['path', 'M-7,10 V0 C-7,-8 0,-10 0,-10 C0,-10 7,-8 7,0 V10'],
    ['path', 'M-4,10 V1 C-4,-5 0,-7 0,-7 C0,-7 4,-5 4,1 V10'],
  ],
  lake: [
    ['path', 'M-15,4 H15'],
    ['path', 'M-15,7 C-11,4 -7,4 -3,7 S5,10 9,7 S13,5 15,6'],
    ['path', 'M-15,11 C-11,8 -7,8 -3,11 S5,14 9,11 S13,9 15,10'],
    ['circle', 10, -8, 3],
    ['path', 'M10,-14 V-16 M10,-2 V0 M4,-8 H2 M16,-8 H18'],
    ['path', 'M-6,-12 Q-4,-16 -2,-12 Q0,-16 2,-12'],
    ['path', 'M-12,-2 V-10 M-14,-6 H-10 M-12,-10 L-15,-7 M-12,-10 L-9,-7'],
    ['path', 'M12,0 V-8 M10,-4 H14'],
  ],
  dargah: [
    ['path', 'M-15,10 H15'],
    ['path', 'M-13,10 V-6 M-11,10 V-6'],
    ['path', 'M13,10 V-6 M11,10 V-6'],
    ['path', 'M-13,-6 C-13,-11 -11,-11 -11,-6 M11,-6 C11,-11 13,-11 13,-6'],
    ['path', 'M-13,-9 V-12 M-11,-9 V-12 M11,-9 V-12 M13,-9 V-12'],
    ['path', 'M-7,10 V-2 C-7,-12 -2,-19 0,-19 C2,-19 7,-12 7,-2 V10'],
    ['path', 'M0,-19 V-25 M0,-25 L4,-23 L0,-21'],
    ['path', 'M-3,10 V4 C-3,2 0,1 0,1 C0,1 3,2 3,4 V10'],
  ],
  wada: [
    ['path', 'M-15,10 H15'],
    ['path', 'M-15,2 H15'],
    ['path', 'M-15,2 V-5 M-12,-5 V2 M-9,2 V-5 M-6,-5 V2 M-3,2 V-5 M0,-5 V2 M3,2 V-5 M6,-5 V2 M9,2 V-5 M12,-5 V2 M15,2 V-5'],
    ['path', 'M-15,2 V10 M15,2 V10'],
    ['path', 'M-7,10 V1 C-7,-5 0,-7 0,-7 C0,-7 7,-5 7,1 V10'],
    ['path', 'M-10,2 V-10 M-4,2 V-10 M4,2 V-10 M10,2 V-10'],
    ['path', 'M-10,-10 L-7,-7.5 L-10,-5 M-4,-10 L-1,-7.5 L-4,-5 M4,-10 L7,-7.5 L4,-5 M10,-10 L13,-7.5 L10,-5'],
  ],
  gateway: [
    ['path', 'M-15,10 H15'],
    ['path', 'M-14,10 V7 M14,10 V7 M-14,7 H14'],
    ['path', 'M-13,7 V-2 M13,7 V-2'],
    ['path', 'M-13,-2 C-13,-14 -6,-19 0,-19 C6,-19 13,-14 13,-2'],
    ['path', 'M-7,7 V2 C-7,-6 -3,-9 0,-9 C3,-9 7,-6 7,2 V7'],
    ['path', 'M-3,-19 C-3,-25 0,-28 0,-28 C0,-28 3,-25 3,-19'],
    ['path', 'M0,-28 V-32'],
  ],
  pangong: [
    ['path', 'M-15,-1 L-10,-13 L-6,-5 L-2,-17 L2,-7 L6,-13 L11,-5 L15,-1'],
    ['path', 'M-15,3 L-9,-7 L-4,0 L1,-9 L6,-1 L11,-7 L15,3'],
    ['path', 'M-15,7 C-11,4 -7,4 -3,7 S5,10 9,7 S13,5 15,6'],
    ['path', 'M-15,11 C-11,8 -7,8 -3,11 S5,14 9,11 S13,9 15,10'],
    ['circle', 11, -20, 3.5],
    ['path', 'M11,-26 V-29 M11,-14 V-11 M5,-20 H2 M17,-20 H20 M6,-26 L4,-28 M16,-14 L18,-12'],
  ],
  hawamahal: [
    ['path', 'M-15,10 H15'],
    ['path', 'M-15,10 V-4 H15 V10'],
    ['path', 'M-15,-4 H15'],
    ['path', 'M-14,-4 C-14,-13 -11,-13 -11,-4 M-10,-4 C-10,-13 -7,-13 -7,-4 M-6,-4 C-6,-13 -3,-13 -3,-4 M-2,-4 C-2,-13 1,-13 1,-4 M2,-4 C2,-13 5,-13 5,-4 M6,-4 C6,-13 9,-13 9,-4 M10,-4 C10,-13 13,-13 13,-4 M14,-4 C14,-13 15,-13 15,-4'],
    ['path', 'M-12,10 V2 M-9,10 V2 M-6,10 V2 M-3,10 V2 M0,10 V2 M3,10 V2 M6,10 V2 M9,10 V2 M12,10 V2'],
    ['path', 'M-12,0 V-4 M-9,0 V-4 M-6,0 V-4 M-3,0 V-4 M0,0 V-4 M3,0 V-4 M6,0 V-4 M9,0 V-4 M12,0 V-4'],
  ],
  tiger: [
    ['path', 'M-15,6 H15'],
    ['path', 'M-15,6 L-9,-10 L-4,-2 L1,-15 L6,-3 L11,-10 L15,6'],
    ['path', 'M-15,6 L-10,-1 L-6,5 M15,6 L11,0'],
    ['path', 'M-2,-17 A4,4 0 0 1 6,-17'],
    ['path', 'M2,-23 V-26 M-3,-17 H-6 M7,-17 H10 M-1,-22 L-3,-24 M5,-22 L7,-24'],
  ],
  charminar: [
    ['path', 'M-15,10 H15'],
    ['path', 'M-11,10 H11 M-11,10 V6 H11 V6'],
    ['path', 'M-11,6 V-4 M-5,6 V-4 M5,6 V-4 M11,6 V-4'],
    ['path', 'M-11,-4 C-11,-9 -8,-9 -8,-4 M-5,-4 C-5,-9 -2,-9 -2,-4 M2,-4 C2,-9 5,-9 5,-4 M8,-4 C8,-9 11,-9 11,-4'],
    ['path', 'M-9.5,-8 V-12 M-3.5,-8 V-12 M3.5,-8 V-12 M9.5,-8 V-12'],
    ['path', 'M-8,6 V-2 C-8,-8 0,-10 0,-10 C0,-10 8,-8 8,-2 V6'],
    ['path', 'M-8,6 V1 C-8,-3 0,-5 0,-5 C0,-5 8,-3 8,1 V6'],
    ['path', 'M-8,-2 H8'],
  ],
};

function AboutLandmarkIcon({ icon, size = 24 }) {
  const shapes = ABOUT_ICONS[icon] || [];
  return (
    <svg
      width={size}
      height={Math.round((size / 34) * 60)}
      viewBox="-17 -49 34 60"
      fill="none"
      stroke="#fff"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes.map((sh, i) =>
        sh[0] === 'path' ? (
          <path key={i} d={sh[1]} />
        ) : (
          <circle key={i} cx={sh[1]} cy={sh[2]} r={sh[3]} fill="#fff" />
        )
      )}
    </svg>
  );
}

function About() {
  const { ref, style } = useSectionReveal();
  const stagger = useStaggerReveal();
  const headingParallax = useParallax(0.08);

  return (
    <section
      id="about"
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
      {/* Floating city names + landmark & food logos, hero-style */}
      {ABOUT_CITY_FLOAT.map((c) => (
        <div
          key={c.name}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: c.top,
            left: c.left,
            right: c.right,
            zIndex: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            color: '#fff',
            opacity: c.op,
            pointerEvents: 'none',
            willChange: 'transform',
            animation: `hero-logo-float ${c.dur}s ease-in-out ${c.delay}s infinite`,
          }}
        >
          <AboutLandmarkIcon icon={c.icon} size={Math.max(20, c.size + 4)} />
          <span
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: `${c.size}px`,
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {c.name}
          </span>
          <c.food size={Math.max(14, c.size - 2)} color="#fff" strokeWidth={1.75} />
        </div>
      ))}

      {/* Extra floating white icons */}
      <FloatingBg
        items={[
          { label: 'about-1', img: 'https://img.icons8.com/?size=100&id=j5Qfp1t1u4Tl&format=png&color=FFFFFF' },
          { label: 'about-2', img: 'https://img.icons8.com/?size=100&id=26006&format=png&color=FFFFFF' },
          { label: 'about-3', img: 'https://img.icons8.com/?size=100&id=33049&format=png&color=FFFFFF' },
          { label: 'about-4', img: 'https://img.icons8.com/?size=100&id=62883&format=png&color=FFFFFF' },
          { label: 'about-5', img: 'https://img.icons8.com/?size=100&id=25055&format=png&color=FFFFFF' },
          { label: 'about-6', img: 'https://img.icons8.com/?size=100&id=3023&format=png&color=FFFFFF' },
        ]}
        sizeRange={[24, 52]}
        opacityRange={[0.3, 0.58]}
        seed={71}
      />

      <div
        ref={ref}
        className="cp-text-col"
        style={{ position: 'relative', zIndex: 1, ...style }}
      >
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            About
            <span className="cp-neon">Me</span>
          </h2>
        </div>

        <div ref={stagger.ref} className={stagger.visible ? 'is-visible' : ''}>
          <div className="stagger-child about-paper" style={{ padding: '2rem 2rem 2rem 1.5rem' }}>
            <span className="about-paper__rings" aria-hidden="true" />
            <p
              style={{
                color: '#1f2937',
                lineHeight: 1.75,
                fontSize: '1.05rem',
                margin: 0,
              }}
            >
              I am a passionate full-stack mobile developer and machine learning enthusiast dedicated
              to building scalable, AI-integrated software solutions. With hands-on experience
              engineering end-to-end applications, my technical expertise spans React Native,
              Node.js, Python, and TensorFlow. I specialize in designing robust RESTful APIs,
              crafting intuitive cross-platform interfaces, and training predictive deep learning
              models for real-world impact.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.4rem',
                marginTop: '1.8rem',
                paddingTop: '1.6rem',
                borderTop: '2px dashed #e2e2e2',
              }}
            >
              {STATS.map((s) => (
                <StatCard key={s.label} s={s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 'clamp(1.5rem, 6vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255, 255, 255, 0.55)',
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          className="scroll-cue"
          style={{
            width: '22px',
            height: '34px',
            borderRadius: '100px',
            border: '2px solid rgba(255, 255, 255, 0.35)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div style={{ width: '3px', height: '7px', borderRadius: '100px', background: '#fb923c' }} />
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const { ref, style } = useSectionReveal();
  const stagger = useStaggerReveal();
  const headingParallax = useParallax(0.08);

  return (
    <section
      id="tech-stack"
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
      {/* Mixed background: white tech logos + leaf / paper plane / sparkles */}
      <FloatingBg
        items={[
          ...HERO_TECHS.map((t) => ({ label: t.label, img: `https://cdn.simpleicons.org/${t.slug}/FFFFFF` })),
          { label: 'Leaf', Icon: Leaf },
          { label: 'PaperPlane', Icon: Send },
          { label: 'Sparkles', Icon: Sparkles },
        ]}
        seed={7}
      />

      <div
        ref={ref}
        className="cp-text-col"
        style={{ position: 'relative', zIndex: 1, ...style }}
      >
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            Tech
            <span className="cp-neon">Stack</span>
          </h2>
        </div>

        <div
          ref={stagger.ref}
          className={stagger.visible ? 'is-visible' : ''}
          style={{ width: '100%' }}
        >
          <div
            style={{
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '18px',
              background: 'rgba(9, 14, 26, 0.94)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1rem',
                background: 'rgba(255, 255, 255, 0.04)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ea4335' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#fbbc05' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#34a853' }} />
              <span
                style={{
                  marginLeft: '0.5rem',
                  fontFamily: 'var(--mono), monospace',
                  fontSize: '0.78rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                sahil@portfolio: ~/tech-stack
              </span>
              <span style={{ marginLeft: 'auto', fontSize: '0.9rem' }} aria-hidden="true">📁</span>
            </div>

            <div
              style={{
                padding: '1.2rem 1.4rem',
                fontFamily: 'var(--mono), monospace',
                fontSize: '0.86rem',
                lineHeight: 1.75,
              }}
            >
              <div>
                <span style={{ color: '#4ade80' }}>$</span>{' '}
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>ls --stack</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))', gap: '0.5rem', padding: '0.8rem 0 0.5rem' }}>
                {STACK_ENTRIES.map((t) => (
                  <span
                    key={t.title}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.45rem 0.6rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 8,
                      color: t.color || 'rgba(255, 255, 255, 0.85)',
                      transition: 'border-color 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.5)';
                      e.currentTarget.style.background = 'rgba(74, 222, 128, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  >
                    {t.Icon ? (
                      <t.Icon size={17} />
                    ) : (
                      <span style={{ color: 'rgba(74, 222, 128, 0.7)', fontSize: '0.85rem' }} aria-hidden="true">▸</span>
                    )}
                    <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.8rem' }}>
                      {t.title.toLowerCase()}
                    </span>
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '0.9rem' }}>
                <span style={{ color: '#4ade80' }}>$</span>{' '}
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>ls --skills</span>
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                # self-assessed proficiency by category
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', padding: '0.6rem 0 0.4rem' }}>
                {SKILL_CATEGORIES.map((c) => {
                  const filled = Math.round(c.progress / 5);
                  return (
                    <div key={c.title} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                      <span style={{ color: '#fb923c', minWidth: '16rem' }}>
                        {c.title}
                        <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '0.72rem' }}> @sahil/{c.handle}</span>
                      </span>
                      <span style={{ color: '#34d853', fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                        {'█'.repeat(filled)}{'░'.repeat(20 - filled)}
                      </span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{c.progress}%</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: '0.8rem' }}>
                <span style={{ color: '#4ade80' }}>$</span>{' '}
                <span className="terminal-cursor">▊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <ScrollAnimation>
      <Navbar />
      <ProgressRail />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Education />
      <Milestones />
      <Contact />
      <Footer />
    </ScrollAnimation>
  );
}
