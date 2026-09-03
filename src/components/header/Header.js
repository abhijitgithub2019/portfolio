import { useEffect, useState } from 'react';
import './Header.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import me from '../../assets/me.jpg';
import { yearsOfExperience } from '../../utils/experience';

const roles = [
  'Lead Frontend Engineer',
  'React & TypeScript Specialist',
  'UI Architect',
  'Full-Stack Product Builder',
  'Enthusiastic AI Reader',
];

const socials = [
  { icon: <BsLinkedin />, href: 'https://www.linkedin.com/in/abhijitpatra1/', label: 'LinkedIn' },
  { icon: <BsGithub />, href: 'https://github.com/abhijitgithub2019', label: 'GitHub' },
  { icon: <SiLeetcode />, href: 'https://leetcode.com/Abhijit2019/', label: 'LeetCode' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@abhilayman8533', label: 'YouTube' },
];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <header id="home" className="header">
      <div className="container header__inner">
        <div className="header__content">
          <span className="header__eyebrow reveal">
            <span className="dot" /> Available for Staff, Lead &amp; Full-Stack Engineer roles
          </span>

          <h1 className="header__title reveal">
            Hi, I&apos;m <span className="gradient-text">Abhijit Patra</span>
          </h1>

          <div className="header__role reveal">
            <span key={roleIndex} className="header__role-text">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="header__tagline reveal">
            I build scalable, high-performance web platforms with <strong>React, Redux,
            TypeScript, Next.js</strong> and <strong>Node.js</strong>. {yearsOfExperience}+ years
            shipping enterprise-grade UIs across network automation, media streaming, and
            cloud — from architecture to production.
          </p>

          <div className="header__cta reveal">
            <a href="#portfolio" className="btn btn-primary">
              View my work <FiArrowUpRight />
            </a>
          </div>

          <div className="header__socials reveal">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
            <span className="header__socials-line" />
            <a href="#contact" className="header__lets-talk">
              Let&apos;s talk
            </a>
          </div>
        </div>

        <div className="header__visual reveal">
          <div className="header__glow" />
          <div className="header__photo">
            <img src={me} alt="Abhijit Patra" />
          </div>
          <div className="header__badge header__badge--tl">
            <strong>{yearsOfExperience}+</strong>
            <span>Years exp.</span>
          </div>
          <div className="header__badge header__badge--br">
            <strong>React</strong>
            <span>&amp; TypeScript</span>
          </div>
          <div className="header__badge header__badge--bl">
            <strong>Juniper</strong>
            <span>Networks (HPE)</span>
          </div>
        </div>
      </div>

      <a href="#about" className="header__scroll" aria-label="Scroll down">
        <span className="header__mouse">
          <span className="header__wheel" />
        </span>
        <span className="header__scroll-text">Scroll to explore</span>
      </a>
    </header>
  );
};

export default Header;
