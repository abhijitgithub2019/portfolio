import { useRef, useState } from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall, FiSend } from 'react-icons/fi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import PopUp from '../popUp/PopUp';

const channels = [
  {
    icon: <AiOutlineMail />,
    label: 'Email',
    value: 'abhijit.patra224@gmail.com',
    action: { text: 'Send an email', href: 'mailto:abhijit.patra224@gmail.com' },
  },
  {
    icon: <FiPhoneCall />,
    label: 'Phone',
    value: '+91 99167 62018',
    action: { text: 'Call now', href: 'tel:+919916762018' },
  },
  {
    icon: <BsLinkedin />,
    label: 'LinkedIn',
    value: 'in/abhijitpatra1',
    action: { text: 'Connect', href: 'https://www.linkedin.com/in/abhijitpatra1/', external: true },
  },
  {
    icon: <BsGithub />,
    label: 'GitHub',
    value: 'abhijitgithub2019',
    action: { text: 'View profile', href: 'https://github.com/abhijitgithub2019', external: true },
  },
];

const Contact = () => {
  const [popUp, setPopUp] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    emailjs
      .sendForm('service_8ngsu7g', 'template_hrrt51s', form.current, 'zH404B9AMGquT_BIP')
      .then(
        () => {
          setPopUp(true);
          setSending(false);
          form.current.reset();
        },
        () => {
          setSending(false);
          setError("Couldn't send your message right now. Please email me directly at abhijit.patra224@gmail.com.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="section-head reveal">
        <span className="eyebrow">Get in touch</span>
        <h2>Let&apos;s build something great</h2>
        <p>Open to lead frontend roles, freelance projects and collaborations. I usually reply within a day.</p>
      </div>

      <div className="container contact">
        <div className="contact__channels reveal">
          {channels.map((c) => (
            <article key={c.label} className="contact__card">
              <span className="contact__icon">{c.icon}</span>
              <div className="contact__meta">
                <h4>{c.label}</h4>
                <p>{c.value}</p>
              </div>
              <a
                href={c.action.href}
                target={c.action.external ? '_blank' : undefined}
                rel={c.action.external ? 'noreferrer' : undefined}
                className="contact__link"
              >
                {c.action.text}
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form reveal">
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Your full name" required />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="you@company.com" required />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Tell me about your project or role…" required />
          </div>
          <button type="submit" className="btn btn-primary contact__submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'} <FiSend />
          </button>
          {error && <p className="contact__error" role="alert">{error}</p>}
        </form>
      </div>

      {popUp && <PopUp close={() => setPopUp(false)} />}
    </section>
  );
};

export default Contact;
