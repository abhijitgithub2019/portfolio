import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward, FaBuilding, FaFolderOpen, FaCheck } from 'react-icons/fa';
import { yearsOfExperience } from '../../utils/experience';

const stats = [
  { icon: <FaAward />, value: `${yearsOfExperience}+`, label: 'Years of experience' },
  { icon: <FaBuilding />, value: '5', label: 'Global companies' },
  { icon: <FaFolderOpen />, value: '20+', label: 'Products shipped' },
];

const focus = [
  'Frontend architecture & design systems',
  'Performance: code-splitting, lazy loading, tree-shaking',
  'Enterprise UI platforms & data-heavy dashboards',
  'Team leadership, mentoring & code quality',
];

const About = () => {
  return (
    <section id="about">
      <div className="section-head reveal">
        <span className="eyebrow">Get to know me</span>
        <h2>About Me</h2>
        <p>Turning complex requirements into elegant, maintainable products.</p>
      </div>

      <div className="container about">
        <div className="about__visual reveal">
          <div className="about__frame">
            <img src={ME} alt="Abhijit Patra" />
          </div>
        </div>

        <div className="about__content reveal">
          <div className="about__stats">
            {stats.map((s) => (
              <article key={s.label} className="about__stat">
                <span className="about__stat-icon">{s.icon}</span>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </article>
            ))}
          </div>

          <p className="about__lead">
            I&apos;m a <strong>Lead Frontend Engineer</strong> with over {yearsOfExperience} years
            of experience delivering scalable, high-performance web applications. I&apos;ve
            built and led enterprise-grade UI platforms across network automation, media
            streaming, and cloud systems — owning complex frontend architectures and
            driving full-stack products from concept to production.
          </p>
          <p className="about__lead">
            Currently at <strong>Juniper Networks (HPE)</strong>, I lead the frontend for
            Paragon Automation. I&apos;m also the founder of <strong>Save Time</strong>, a
            Chrome extension that helps professionals block distractions and stay focused.
          </p>

          <ul className="about__focus">
            {focus.map((f) => (
              <li key={f}>
                <FaCheck /> {f}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary">Let&apos;s work together</a>
        </div>
      </div>
    </section>
  );
};

export default About;
