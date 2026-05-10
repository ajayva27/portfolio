import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  ExternalLink,
  Brain,
  Database,
  Server,
  Code,
} from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import {
  SiPython, SiDjango, SiFlask, SiOpencv, SiScikitlearn,
  SiPostgresql, SiPandas, SiNumpy, SiGit, SiPostman,
  SiStreamlit, SiFrappe
} from 'react-icons/si'
import { GiArtificialIntelligence, GiBrain, GiEyeTarget, GiTalk } from 'react-icons/gi'

import profile from './assets/profile.jpg'

function App() {
  const skills = [
    { name: 'Python', icon: SiPython },
    { name: 'Django', icon: SiDjango },
    { name: 'Frappe', icon: SiFrappe },
    { name: 'Flask', icon: SiFlask },
    { name: 'Machine Learning', icon: GiArtificialIntelligence },
    { name: 'Deep Learning', icon: GiBrain },
    { name: 'Computer Vision', icon: GiEyeTarget },
    { name: 'NLP', icon: GiTalk },
    { name: 'OpenCV', icon: SiOpencv },
    { name: 'scikit-learn', icon: SiScikitlearn },
    { name: 'REST APIs', icon: SiPostman },
    { name: 'SQL', icon: SiPostgresql },
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Git', icon: SiGit },
    { name: 'Postman', icon: SiPostman },
    { name: 'Streamlit', icon: SiStreamlit },
  ]

  const projects = [
    {
      title: 'Face Authentication System',
      desc: 'Built a real-time face authentication system using FaceNet, MTCNN, and FAISS with webcam verification and scalable similarity search.',
      tech: 'Python • FaceNet • MTCNN • FAISS • Streamlit',
    },
    {
      title: 'Ship Building Digitalization Platform',
      desc: 'Developed scalable backend workflows, multi-stage approval systems, analytics dashboards, and automated reporting pipelines.',
      tech: 'Python • Django • Frappe • REST APIs • Pandas',
    },
    {
      title: 'Multimodal Document Classification',
      desc: 'Created a document classification system using ResNet and DistilBERT with OCR integration and 92% accuracy.',
      tech: 'Deep Learning • OCR • NLP • ResNet • DistilBERT',
    },
    {
      title: 'Driver Drowsiness Detection',
      desc: 'Developed a safety monitoring system using Computer Vision and Arduino to detect fatigue and trigger real-time alerts.',
      tech: 'OpenCV • ML • Python • Arduino',
    },
  ]
  return (
    <div className="bg-[#080808] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold gradient-text">
            AJAY V A
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-emerald-400">About</a>
            <a href="#skills" className="hover:text-emerald-400">Skills</a>
            <a href="#projects" className="hover:text-emerald-400">Projects</a>
            <a href='#experience' className='hover:text-emerald-400'>Experience</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen pt-40 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Profile Photo - Now Centered and Smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative"
          >
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
              {/* Subtle Decorative Background Frame */}
              <div className="absolute -inset-3 border-2 border-emerald-500/20 rounded-[2rem] -rotate-3"></div>
              
              {/* Main Image Container */}
              <div className="w-full h-full relative z-10 overflow-hidden rounded-[2rem] border-2 border-white/10 shadow-2xl">
                <img
                  src={profile}
                  alt="AJAY V A"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Background Accent */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full z-0"></div>
            </div>
          </motion.div>

          {/* Text Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-emerald-400 mb-4 text-lg font-medium tracking-wide uppercase">
              Python Developer • AI Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Building
              <span className="gradient-text"> Intelligent </span>
              Backend & AI Systems
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Passionate Python Developer with strong expertise in backend development,
              Machine Learning, Deep Learning, Computer Vision, and scalable API systems.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#projects"
                className="px-10 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 transition font-semibold shadow-lg shadow-emerald-900/20"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-10 py-4 rounded-2xl border border-white/20 hover:border-emerald-500 transition font-semibold"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-12 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="glass p-8 rounded-3xl">
              <Brain size={40} className="text-emerald-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">AI & ML</h3>
              <p className="text-gray-400 leading-7">
                Experienced in Deep Learning, Computer Vision, NLP,
                and building production-ready ML pipelines.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <Server size={40} className="text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Backend Systems</h3>
              <p className="text-gray-400 leading-7">
                Skilled in scalable backend architecture, Django,
                Frappe, workflow systems, and REST API development.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl">
              <Database size={40} className="text-teal-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Data & Analytics</h3>
              <p className="text-gray-400 leading-7">
                Strong experience in analytics dashboards,
                data processing, ORM optimization, and reporting systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-14 gradient-text">
            Skills & Technologies
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="px-6 py-3 rounded-2xl glass text-gray-200 flex items-center gap-3 hover:border-emerald-500 transition"
              >
                <skill.icon className="text-emerald-400" />
                {skill.name}
              </motion.div>
            ))}    </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id='experience' className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-14 gradient-text">
            Experience
          </h2>

          <div className="space-y-8">

            <div className="glass p-8 rounded-3xl">
              <div className="flex justify-between flex-wrap gap-4 mb-4">
                <h3 className="text-2xl font-semibold">
                  Python Developer — Faircode Infotech
                </h3>

                <p className="text-emerald-400">
                  Oct 2024 – Jan 2026
                </p>
              </div>

              <ul className="text-gray-400 leading-8 list-disc pl-6">
                <li>Developed scalable REST APIs and workflow systems.</li>
                <li>Built analytics dashboards and automated reporting modules.</li>
                <li>Optimized ORM queries and improved backend performance.</li>
                <li>Implemented multi-stage approval pipelines.</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl">
              <div className="flex justify-between flex-wrap gap-4 mb-4">
                <h3 className="text-2xl font-semibold">
                  ML & AI Intern — Gofreelab Technologies
                </h3>
                <p className="text-blue-400">
                  Jun 2024 – Sept 2024
                </p>
              </div>

              <ul className="text-gray-400 leading-8 list-disc pl-6">
                <li>Developed Machine Learning and Deep Learning systems.</li>
                <li>Worked on Computer Vision and NLP projects.</li>
                <li>Built scalable and modular AI workflows.</li>
                <li>Performed dataset curation and model evaluation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <Code className="text-emerald-400" size={32} />

                  <div className="flex gap-4">
                    {/* <Github className="cursor-pointer hover:text-emerald-400" />
                    <ExternalLink className="cursor-pointer hover:text-blue-400" /> */}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-6">
                  {project.desc}
                </p>

                <div className="text-sm text-emerald-400">
                  {project.tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div></section>

      {/* CERTIFICATIONS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-14 gradient-text">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">
                Azure AI Fundamentals (AI-900)
              </h3>

              <p className="text-gray-400">
                Microsoft Certified — 2025
              </p>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">
                Python and Data Science with AI
              </h3>

              <p className="text-gray-400">
                ExpertzLab Technologies
              </p>
            </div>
          </div>
        </div>
      </section>  {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8 gradient-text">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-lg mb-12 leading-8">
            Interested in AI systems, backend development,
            Machine Learning, or collaboration opportunities?
            Let’s build something impactful.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">

            <a
              href="mailto:ajayvanil27@gmail.com"
              className="glass px-8 py-5 rounded-2xl flex items-center gap-3 hover:border-emerald-500"
            >
              <Mail />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/Ajay-va"
              target="_blank"
              className="glass px-8 py-5 rounded-2xl flex items-center gap-3 hover:border-blue-500"
            >
              <Linkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/ajayva27/"
              target="_blank"
              className="glass px-8 py-5 rounded-2xl flex items-center gap-3 hover:border-teal-500"
            >
              <Github />
              GitHub
            </a>

            <div className="glass px-8 py-5 rounded-2xl flex items-center gap-3">
              <Phone />
              +91 8086852424
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-white/10">
        © 2026 AJAY V A • AI Engineer & Python Developer
      </footer>
    </div>
  )
}

export default App