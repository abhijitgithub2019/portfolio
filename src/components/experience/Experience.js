import './Experience.css';
import { FiBriefcase } from 'react-icons/fi';
import { yearsOfExperience } from '../../utils/experience';
import {
  SiJavascript, SiTypescript, SiReact, SiRedux, SiNextdotjs,
  SiNodedotjs, SiHtml5, SiCss3, SiJest, SiWebpack, SiGraphql,
} from 'react-icons/si';
import { TbBinaryTree } from 'react-icons/tb';

const timeline = [
  {
    role: 'Senior Software Engineer 4 (Tech Lead)',
    company: 'Juniper Networks (HPE)',
    period: 'Aug 2021 — Present',
    points: [
      'Lead frontend for Paragon Automation, a cloud-native network automation suite.',
      'Set UI architecture standards, mentor engineers, and drive quality through reviews.',
      'Own mission-critical modules: Blackhole Detection, Traffic Engineering & Network Planning.',
      'Built an integrated SSH console, audit logging, and advanced topology editing.',
      'Cut initial payload via lazy loading, code-splitting and tree-shaking.',
    ],
    tags: ['React', 'Redux', 'TypeScript', 'Node.js', 'Jest / RTL'],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Ericsson — MediaKind',
    period: 'Mar 2018 — Aug 2021',
    points: [
      'Built the OTT / video delivery platform across Live, VOD, parental controls & personalization.',
      'Owned Download-to-Go, Parental Controls and Settings with a focus on reliability & UX.',
      'Designed a unified, cached data layer to streamline data flow and cut network chatter.',
      'Removed performance bottlenecks and mentored teammates across releases.',
    ],
    tags: ['React', 'Redux', 'TypeScript', 'Node.js', 'Jest / RTL'],
  },
  {
    role: 'Senior Web Developer',
    company: 'Aricent',
    period: 'Jul 2017 — Feb 2018',
    points: [
      'Built web apps for IKEA Cloud at Home and Microsoft Xbox with global store data.',
      'Developed a location-aware chatbot delivering localized answers.',
      'Created responsive UIs and integrated REST APIs with backend teams.',
    ],
    tags: ['Angular', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    role: 'Web Developer',
    company: 'Tata Consultancy Services',
    period: 'Jan 2014 — Jul 2017',
    points: [
      'Built the Online Integrated Project Resource Application computing estimates from bill rates.',
      'Refactored client-side validation, reducing dependencies and improving stability.',
      'Ran user testing and shipped feedback-driven UX improvements.',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'JSON'],
  },
];

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Jest / RTL', icon: <SiJest /> },
  { name: 'Webpack', icon: <SiWebpack /> },
  { name: 'REST / GraphQL', icon: <SiGraphql /> },
  { name: 'DS & Algorithms', icon: <TbBinaryTree /> },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-head reveal">
        <span className="eyebrow">Career &amp; skills</span>
        <h2>Experience</h2>
        <p>{yearsOfExperience}+ years of building and leading frontend teams at world-class companies.</p>
      </div>

      <div className="container experience">
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.company} className="timeline__item reveal">
              <span className="timeline__dot">
                <FiBriefcase />
              </span>
              <div className="timeline__card">
                <div className="timeline__top">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <h4 className="timeline__company">{item.company}</h4>
                <ul>
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="timeline__tags">
                  {item.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="skills reveal">
          <h3 className="skills__title">Tech I work with</h3>
          <div className="skills__grid">
            {skills.map((s) => (
              <div key={s.name} className="skill">
                <span className="skill__icon">{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
