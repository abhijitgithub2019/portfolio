import './Footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: <BsLinkedin />, href: 'https://www.linkedin.com/in/abhijitpatra1/', label: 'LinkedIn' },
  { icon: <BsGithub />, href: 'https://github.com/abhijitgithub2019', label: 'GitHub' },
  { icon: <SiLeetcode />, href: 'https://leetcode.com/Abhijit2019/', label: 'LeetCode' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@abhilayman8533', label: 'YouTube' },
  { icon: <AiOutlineMail />, href: 'mailto:abhijit.patra224@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__brand">
          Abhijit<span>.</span>
        </a>
        <p className="footer__tagline">Lead Frontend Engineer — building fast, elegant web experiences.</p>

        <ul className="footer__links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>

        <div className="footer__bottom">
          <small>&copy; {year} Abhijit Patra. All rights reserved.</small>
          <small>Designed &amp; built with React.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
