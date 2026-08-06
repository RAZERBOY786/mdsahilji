import { useRef, useState } from 'react';
import { useSectionReveal } from '../useSectionReveal';
import { useParallax } from '../useParallax';
import { useStaggerReveal, staggerChildStyle } from '../useStaggerReveal';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Send, Loader2, Check, Phone, Mail, Leaf, Sparkles } from 'lucide-react';
import FloatingBg from './FloatingBg';

const EMAIL = 'islamsahil752@gmail.com';
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const RATE_LIMIT_MS = 15000;

const CONTACT_METHODS = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    Icon: FaEnvelope,
    color: '#f97316',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/RAZERBOY786',
    href: 'https://github.com/RAZERBOY786',
    Icon: FaGithub,
    color: '#cbd5e1',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sahil-islam-a2b9941b3',
    href: 'https://www.linkedin.com/in/sahil-islam-a2b9941b3',
    Icon: FaLinkedin,
    color: '#0ea5e9',
    external: true,
  },
];

function useFloating(initial) {
  const [active, setActive] = useState(!!initial);
  return { active, onFocus: () => setActive(true), onBlur: (e) => setActive(!!e.target.value) };
}

function FloatingInput({ label, type, name, required, textarea, rows }) {
  const { active, onFocus, onBlur } = useFloating();
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className={`floating-input${active ? ' floating-input--active' : ''}`}>
      <Tag
        className="floating-input-field"
        type={type || 'text'}
        name={name}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={rows}
        style={textarea ? { minHeight: '120px', resize: 'vertical' } : {}}
      />
      <label className="floating-input-label">{label}</label>
    </div>
  );
}

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const lastSubmit = useRef(0);
  const { ref, style } = useSectionReveal();
  const stagger = useStaggerReveal();
  const headingParallax = useParallax(0.08);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const { name, email, subject, message, website } = form;

    if (website?.value) return;

    const now = Date.now();
    if (now - lastSubmit.current < RATE_LIMIT_MS) {
      setError('Please wait a moment before sending another message.');
      return;
    }
    lastSubmit.current = now;

    if (!FORM_ENDPOINT) {
      const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject?.value || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `Name: ${name?.value || ''}\nEmail: ${email?.value || ''}\n\n${message?.value || ''}`
      )}`;
      window.location.href = url;
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name?.value || '',
          email: email?.value || '',
          subject: subject?.value || '',
          message: message?.value || '',
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError('Failed to send. Please try again or use the email link above.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem clamp(1.5rem, 6vw, 5rem)',
        color: '#fff',
        fontFamily: 'var(--font-body), sans-serif',
      }}
    >
      {/* Mixed background: white contact icons + leaf / paper plane / sparkles */}
      <FloatingBg
        items={[
          { Icon: Phone, label: 'phone' },
          { Icon: Mail, label: 'mail' },
          { Icon: FaGithub, label: 'github' },
          { Icon: FaLinkedin, label: 'linkedin' },
          { label: 'leaf', Icon: Leaf },
          { label: 'plane', Icon: Send },
          { label: 'sparkles', Icon: Sparkles },
        ]}
        seed={57}
      />

      <div
        ref={ref}
        className="cp-text-col"
        style={{ position: 'relative', zIndex: 1, ...style }}
      >
        <div ref={headingParallax.ref} style={{ ...headingParallax.style }}>
          <h2 className="cp-title--poster">
            Contact
            <span className="cp-neon">Me</span>
          </h2>
        </div>
      </div>

      <div ref={stagger.ref} className={stagger.visible ? 'is-visible' : ''} style={{ width: '100%' }}>
        <div className="contact-content">
          <div className="stagger-child" style={staggerChildStyle(0)}>
            <div className="contact-text">
              <p>Have a project, question, or just want to say hi? Reach out through any of these platforms.</p>
              <div className="contact-methods">
                {CONTACT_METHODS.map(({ label, value, href, Icon, color, external }) => (
                  <a
                    key={label}
                    className="contact-method"
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="contact-method-icon" style={{ color, borderColor: `${color}55`, background: `${color}14` }}>
                      <Icon size={18} />
                    </span>
                    <span className="contact-method-body">
                      <span className="contact-method-label">{label}</span>
                      <span className="contact-method-value">{value}</span>
                    </span>
                    <span className="contact-method-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="stagger-child" style={staggerChildStyle(1)}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="contact-form-row">
                <FloatingInput label="Name" type="text" name="name" required />
                <FloatingInput label="Email" type="email" name="email" required />
              </div>
              <FloatingInput label="Subject" type="text" name="subject" required />
              <FloatingInput label="Your Message" name="message" required textarea rows="4" />
              {error && <p className="form-error" role="alert">{error}</p>}
              <button
                type="submit"
                className={`btn btn--primary btn--send${sending ? ' btn--sending' : ''}${sent ? ' btn--sent' : ''}`}
                disabled={sending || sent}
                aria-label={sending ? 'Sending message' : sent ? 'Message sent' : 'Send message'}
              >
                {sending ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="btn-send-spin" />
                  </>
                ) : sent ? (
                  <>
                    Message Ready
                    <Check size={18} />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
              <p className="contact-form-note">
                {FORM_ENDPOINT ? 'Sent securely \u2014 I\u2019ll reply soon.' : 'This opens your email app with the message pre-filled.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
