import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa6';

const socials = [
  { label: 'GitHub', href: 'https://github.com/RAZERBOY786', Icon: FaGithub },
  { label: 'Email', href: 'mailto:islamsahil752@gmail.com', Icon: FaEnvelope },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-islam-a2b9941b3', Icon: FaLinkedin },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h4>Sahil Johan Islam</h4>
          <p>Full-Stack Developer &amp; ML Enthusiast</p>
        </div>

        <div className="footer-social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <s.Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Sahil Johan Islam. All rights reserved.</p>
    </footer>
  );
}
