import './Portfolio.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { TbTopologyStar3, TbServerBolt, TbClockShield } from 'react-icons/tb';
import port1 from '../../assets/port1.png';
import port4 from '../../assets/port4.jpeg';
import portPdfForge from '../../assets/port-pdfforge.png';

const projects = [
  {
    title: 'PDF Forge',
    org: 'Founder · Web App',
    badge: 'Live',
    description:
      'A privacy-first PDF editor that runs 100% in the browser. Add text, remove pages, strip passwords and images — all processed locally, nothing ever uploaded to a server.',
    tags: ['Next.js', 'TypeScript', 'pdf-lib', 'Canvas'],
    image: portPdfForge,
    imagePosition: 'top',
    links: [{ label: 'Live app', href: 'https://abhijitpatrapdf.vercel.app/', primary: true, external: true }],
  },
  {
    title: 'Paragon Automation',
    org: 'Juniper Networks (HPE)',
    badge: 'Enterprise',
    description:
      'Cloud-native network automation suite. I lead the frontend — owning Blackhole Detection, Traffic Engineering, Network Planning, an integrated SSH console and advanced topology editing.',
    tags: ['React', 'Redux', 'TypeScript', 'Node.js'],
    cover: { icon: <TbTopologyStar3 />, gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)' },
    links: [{ label: 'Learn more', href: 'https://www.juniper.net/us/en/products/network-automation/paragon-automation.html', primary: true, external: true }],
  },
  {
    title: 'OVA Build Manager',
    org: 'Juniper Networks (HPE) · Internal',
    badge: 'Recent',
    description:
      'A Python/Flask tool that automates spinning up VMM instances from OVA images across QPods. Real-time WebSocket logs, live SSH sessions, capacity checks and date-based version tracking.',
    tags: ['Python', 'Flask', 'Socket.IO', 'Paramiko', 'WebSocket'],
    cover: { icon: <TbServerBolt />, gradient: 'linear-gradient(135deg, #22d3ee, #3b82f6)' },
    links: [{ label: 'Internal tool', href: null, primary: false }],
  },
  {
    title: 'Save Time — Focus & Block Distractions',
    org: 'Founder · Chrome Extension',
    badge: 'Live',
    description:
      'A Chrome extension I built and published to help professionals block distracting sites and stay focused during the workday.',
    tags: ['JavaScript', 'Chrome APIs', 'UX'],
    cover: { icon: <TbClockShield />, gradient: 'linear-gradient(135deg, #7c5cff, #ec4899)' },
    links: [{ label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/bmncjjjkoiehceggnmelffcffnldddjb', primary: true, external: true }],
  },
  {
    title: 'MediaKind OTT Platform',
    org: 'Ericsson',
    badge: 'Enterprise',
    description:
      'OTT & video delivery platform spanning Live TV, VOD, parental controls and personalization, backed by a unified cached data layer.',
    tags: ['React', 'Redux', 'TypeScript'],
    image: port4,
    links: [{ label: 'Visit', href: 'https://www.mediakind.com/', primary: true, external: true }],
  },
  {
    title: 'Burger Ordering App',
    org: 'Personal Project',
    badge: 'Live',
    description:
      'A React food-ordering demo with dynamic cart, order builder and Firebase-backed checkout flow.',
    tags: ['React', 'Redux', 'CSS'],
    image: port1,
    links: [{ label: 'Live demo', href: 'https://burger-78b6a.web.app/', primary: true, external: true }],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section-head reveal">
        <span className="eyebrow">My recent work</span>
        <h2>Featured Projects</h2>
        <p>Enterprise platforms, internal automation tools and products I&apos;ve shipped end-to-end.</p>
      </div>

      <div className="container portfolio">
        {projects.map((p) => (
          <article key={p.title} className="project reveal">
            <div
              className="project__cover"
              style={p.cover ? { background: p.cover.gradient } : undefined}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                />
              ) : (
                <span className="project__cover-icon">{p.cover.icon}</span>
              )}
              <span className="project__badge">{p.badge}</span>
            </div>

            <div className="project__body">
              <span className="project__org">{p.org}</span>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>

              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project__links">
                {p.links.map((l) =>
                  l.href ? (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noreferrer' : undefined}
                      className={l.primary ? 'project__link primary' : 'project__link'}
                    >
                      {l.github ? <FiGithub /> : <FiExternalLink />} {l.label}
                    </a>
                  ) : (
                    <span key={l.label} className="project__link disabled">
                      {l.label}
                    </span>
                  )
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
