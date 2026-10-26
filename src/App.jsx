import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownToLine,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Sparkles,
  X,
} from 'lucide-react'
import {
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'
import {
  SiPython,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiFrappe,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLangchain,
} from 'react-icons/si'
import profile from './assets/profile.png'

const skills = [
  { name: 'Python', icon: SiPython, group: 'Backend' },
  { name: 'FastAPI', icon: SiFastapi, group: 'Backend' },
  { name: 'Django', icon: SiDjango, group: 'Backend' },
  { name: 'Frappe', icon: SiFrappe, group: 'Backend' },
  { name: 'Flask', icon: SiFlask, group: 'Backend' },
  { name: 'PyTorch', icon: SiPytorch, group: 'AI / ML' },
  { name: 'TensorFlow', icon: SiTensorflow, group: 'AI / ML' },
  { name: 'OpenCV', icon: SiOpencv, group: 'AI / ML' },
  { name: 'MongoDB', icon: SiMongodb, group: 'Data' },
  { name: 'MySQL', icon: SiMysql, group: 'Data' },
  { name: 'Git', icon: SiGit, group: 'Tools' },
  { name: 'LangChain', icon: SiLangchain, group: 'AI / ML' },
]

const services = [
  {
    title: 'Backend Development',
    description: 'Reliable APIs, service integrations, and maintainable backend systems.',
    icon: Server,
  },
  {
    title: 'AI & LLM Workflows',
    description: 'LLM-powered applications, workflow orchestration, and intelligent automation.',
    icon: BrainCircuit,
  },
  {
    title: 'Machine Learning',
    description: 'Practical ML, computer vision, OCR, and document processing solutions.',
    icon: Sparkles,
  },
  {
    title: 'Data & Integrations',
    description: 'Database design, event-driven pipelines, and third-party integrations.',
    icon: Database,
  },
]

const projects = [
  {
    title: 'Kruit AI',
    category: 'AI RECRUITMENT PLATFORM',
    description: 'AI-powered recruitment workflows for resume parsing, candidate screening, bulk imports, and automated resume requests.',
    tech: ['FastAPI', 'LangGraph', 'MongoDB', 'Google Cloud'],
    icon: BrainCircuit,
    theme: 'project-teal',
  },
  {
    title: 'Ship Design Approval System',
    category: 'BACKEND PLATFORM',
    description: 'Production backend for ship-design approvals with role-based access, multi-stage workflows, status tracking, and reporting.',
    tech: ['Python', 'Frappe', 'REST APIs', 'Pandas'],
    icon: BriefcaseBusiness,
    theme: 'project-blue',
  },
  {
    title: 'Face Authentication',
    category: 'COMPUTER VISION',
    description: 'Face authentication supporting 1:N recognition and 1:1 verification with a modular detection, embedding, and matching pipeline.',
    tech: ['Python', 'FAISS', 'Computer Vision', 'Streamlit'],
    icon: CheckCircle2,
    theme: 'project-slate',
  },
  {
    title: 'Multimodal Document AI',
    category: 'OCR & DOCUMENT AI',
    description: 'Document classification combining image and text processing with OCR, preprocessing, confidence scoring, and real-time results.',
    tech: ['Deep Learning', 'EasyOCR', 'NLP', 'Streamlit'],
    icon: Code2,
    theme: 'project-cyan',
  },
]

const experiences = [
  {
    role: 'AI Engineering Intern',
    company: 'Kruit AI',
    period: 'Jul 2026 – Sept 2026',
    detail: 'AI recruitment workflows and resume intelligence',
  },
  {
    role: 'Python Developer',
    company: 'Faircode Infotech',
    period: 'Oct 2024 – Jan 2026',
    detail: 'Production backend systems and approval workflows',
  },
  {
    role: 'Machine Learning & AI Intern',
    company: 'Gofreelab Technologies',
    period: 'Jun 2024 – Sept 2024',
    detail: 'Machine learning, computer vision, and NLP projects',
  },
]

const education = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    school: 'Thejus Engineering College, Thrissur',
    period: '2019 – 2023',
  },
]

const certifications = [
  { title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)', issuer: 'Microsoft', year: '2025' },
  { title: 'Python and Data Science with AI', issuer: 'ExpertzLab Technologies', year: '2023 – 2024' },
]

function SectionHeading({ eyebrow, title, accent, description, action }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title} {accent ? <span>{accent}</span> : null}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
  ]

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Ajay V A home">
            <span className="brand-name">AJAY V A<span className="brand-dot">.</span></span>
            <span className="brand-subtitle">Python Developer · AI/ML Engineer</span>
          </a>

          <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
          <a className="nav-cta" href="#connect">Let's Connect <ArrowRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern pattern-left" aria-hidden="true" />
          <div className="hero-pattern pattern-right" aria-hidden="true" />
          <div className="container hero-layout">
            <motion.div className="hero-photo" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
              <div className="photo-accent" />
              <img src={profile} alt="Portrait of Ajay V A" />
              <div className="photo-caption"><span className="caption-dot" /> Open to opportunities</div>
            </motion.div>

            <motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
              <p className="eyebrow hero-eyebrow">Hello, I'm</p>
              <h1>AJAY V A</h1>
              <h2>Python Developer <span>&amp; AI/ML Engineer</span></h2>
              <p className="hero-intro">Building intelligent things with code.</p>
              <p className="hero-description">I build backend systems and AI-powered applications where Python engineering meets intelligent workflows, LLMs, and Machine Learning.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View My Work <ArrowRight size={16} /></a>
                <a className="button button-outline" href="/Ajay_V_A_Resume.pdf" download>Download CV <ArrowDownToLine size={15} /></a>
              </div>
              <div className="social-rail" aria-label="Social profiles">
                <span>FOLLOW ME</span>
                <a href="https://www.linkedin.com/in/Ajay-va" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://github.com/ajayva27" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="mailto:ajayvanil27@gmail.com" aria-label="Email"><Mail size={17} /></a>
                <a href="tel:+971562124850" aria-label="Phone"><Phone size={17} /></a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div className="about-copy">
              <p className="eyebrow">A little about me</p>
              <h2>Building useful things with <span>Python & AI.</span></h2>
              <p>Python Developer with nearly 2 years of experience building production backend systems and AI-powered applications. I enjoy turning complex problems into practical software, from dependable APIs to intelligent workflows.</p>
              <a className="text-link" href="#experience">Explore my experience <ArrowRight size={15} /></a>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-icon"><Code2 size={20} /></span><strong>Role</strong><span>Python Developer</span></div>
              <div className="fact-card"><span className="fact-icon"><BriefcaseBusiness size={20} /></span><strong>Focus</strong><span>Backend · AI/ML</span></div>
              <div className="fact-card"><span className="fact-icon"><Mail size={20} /></span><strong>Email</strong><span>ajayvanil27@gmail.com</span></div>
              <div className="fact-card"><span className="fact-icon"><MapPin size={20} /></span><strong>Location</strong><span>Abu Dhabi, UAE</span></div>
            </div>
          </div>
        </section>

        <section className="skills-services section" id="skills">
          <div className="container skills-services-grid">
            <div className="skills-panel">
              <SectionHeading eyebrow="My toolkit" title="Skills &" accent="Expertise" description="Tools and technologies I use to build production software and intelligent applications." />
              <div className="tools-grid">
                {skills.map(({ name, icon: Icon, group }) => (
                  <div className="tool-card" key={name}>
                    <span className="tool-icon"><Icon /></span>
                    <div className="tool-info">
                      <strong>{name}</strong>
                      <span className="tool-group">{group}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-panel" id="services">
              <SectionHeading eyebrow="How I can help" title="Services I" accent="Offer" description="Practical engineering support from backend APIs to AI-powered features." />
              <div className="services-grid">
                {services.map(({ title, description, icon: Icon }, index) => (
                  <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                    <span className="service-icon"><Icon size={22} /></span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured"
              accent="Projects"
              description="A selection of backend, AI, and machine learning projects I've worked on."
              action={<a className="text-link section-action" href="https://github.com/ajayva27" target="_blank" rel="noreferrer">View GitHub <ExternalLink size={14} /></a>}
            />
            <div className="projects-grid">
              {projects.map(({ title, category, description, tech, icon: Icon, theme }, index) => (
                <motion.article className="project-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                  <div className={`project-preview ${theme}`}>
                    <div className="preview-topline"><span /><span /><span /></div>
                    <div className="preview-content"><div className="preview-symbol"><Icon size={29} /></div><div className="preview-lines"><i /><i /><i /></div></div>
                    <span className="preview-label">{category}</span>
                  </div>
                  <div className="project-body">
                    <p className="project-category">{category}</p>
                    <h3>{title}</h3>
                    <p className="project-description">{description}</p>
                    <div className="project-tags">{tech.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="career-section section" id="experience">
          <div className="container career-grid">
            <div className="career-column">
              <SectionHeading eyebrow="My journey" title="Work" accent="Experience" />
              <div className="timeline">
                {experiences.map((item) => (
                  <article className="timeline-item" key={item.company}>
                    <span className="timeline-marker" />
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="career-column education-column" id="education">
              <SectionHeading eyebrow="Academic background" title="Education" />
              {education.map((item) => (
                <article className="education-card" key={item.title}>
                  <span className="education-icon"><GraduationCap size={22} /></span>
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                </article>
              ))}
              <div className="certification-mini">
                <h3>Certifications & Learning</h3>
                {certifications.map((item) => (
                  <div className="certification-row" key={item.title}>
                    <span className="certification-check"><CheckCircle2 size={16} /></span>
                    <div><strong>{item.title}</strong><span>{item.issuer} · {item.year}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="career-column strengths-column">
              <SectionHeading eyebrow="What I bring" title="Core" accent="Strengths" />
              <div className="strength-card">
                <span className="strength-icon"><Code2 size={21} /></span>
                <div><h3>Backend Engineering</h3><p>Maintainable APIs, workflow logic, and service integrations.</p></div>
              </div>
              <div className="strength-card">
                <span className="strength-icon"><BrainCircuit size={21} /></span>
                <div><h3>Applied AI</h3><p>LLM orchestration, resume processing, NLP, and computer vision.</p></div>
              </div>
              <div className="strength-card">
                <span className="strength-icon"><Database size={21} /></span>
                <div><h3>Reliable Systems</h3><p>Data pipelines, event-driven workflows, testing, and debugging.</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="connect">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-name">AJAY V A<span className="brand-dot">.</span></span>
            <span className="brand-subtitle">Python Developer · AI/ML Engineer</span>
          </a>
          <div className="footer-links">
            <strong>Quick Links</strong>
            {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
          <div className="footer-links">
            <strong>Focus Areas</strong>
            <a href="#services">Backend Development</a>
            <a href="#services">AI & LLM Workflows</a>
            <a href="#services">Machine Learning</a>
            <a href="#projects">Featured Projects</a>
          </div>
          <div className="footer-connect">
            <strong>Let's connect</strong>
            <p>Open to interesting engineering opportunities, high-impact projects, and collaborations.</p>
            <div className="footer-contact-links">
              <a className="footer-contact-link" href="mailto:ajayvanil27@gmail.com">
                <Mail size={14} /> ajayvanil27@gmail.com
              </a>
              <a className="footer-contact-link" href="tel:+971562124850">
                <Phone size={14} /> +971 0562124850
              </a>
            </div>
            <div className="footer-social-row">
              <a className="footer-social-btn" href="https://github.com/ajayva27" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a className="footer-social-btn" href="https://www.linkedin.com/in/Ajay-va" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a className="footer-social-btn" href="mailto:ajayvanil27@gmail.com" aria-label="Email"><Mail size={14} /></a>
              <a className="footer-social-btn" href="tel:+971562124850" aria-label="Call +971 0562124850"><Phone size={14} /></a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Ajay V A. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
