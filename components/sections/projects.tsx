"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "ResMind",
    subtitle: "AI Resume Analyzer",
    description:
      "AI-powered platform that evaluates resumes against job descriptions and generates ATS compatibility scores. Integrated GPT models for structured feedback with PDF preview capabilities.",
    tags: ["React", "Tailwind CSS", "GPT API", "Puter.js"],
    github: "https://github.com/Maharajan0604",
    live: "https://ai-resume-analyzer-theta-two.vercel.app/",
    featured: true,
  },
  {
    id: "02",
    title: "Real-Time Voice Agent",
    subtitle: "AI Interview Preparation",
    description:
      "Real-time AI voice interaction system for interview practice. Generates contextual questions and evaluates responses with instant feedback using Gemini API.",
    tags: ["Next.js", "Tailwind CSS", "Gemini API", "Firebase", "WebRTC"],
    github: "https://github.com/Maharajan0604",
    live: "https://real-time-voice-agent.vercel.app/",
    featured: true,
  },
  {
    id: "03",
    title: "SIES College Library",
    subtitle: "Digital Platform",
    description:
      "Redesigned library platform serving 500+ students. Features past-year papers, announcements, resource modules, and responsive design for seamless academic resource access.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/Maharajan0604",
    live: "https://siesgstlibrary.vercel.app/",
    featured: false,
  },
  {
    id: "04",
    title: "Cyber Laws Assistant",
    subtitle: "Legal Awareness Chatbot",
    description:
      "AI chatbot for Indian cyber law awareness with natural language interaction. Provides secure login, legal news updates, and simplified cyber law information access.",
    tags: ["Node.js", "Firebase Auth", "AI Chatbot"],
    github: "https://github.com/Maharajan0604",
    live: "https://cyber-law-assistant.vercel.app/dashboard",
    featured: false,
  },
]

/* ── Single project card ───────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, delay: index * 0.10, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer
                 border border-[oklch(0.80_0.15_200/0.08)]
                 bg-[oklch(0.10_0.008_240/0.60)]
                 hover:border-[oklch(0.80_0.15_200/0.22)]
                 hover:bg-[oklch(0.10_0.008_240/0.80)]
                 transition-all duration-400 backdrop-blur-sm"
      style={{
        boxShadow: hovered
          ? "0 24px 80px oklch(0 0 0 / 0.65), 0 0 40px oklch(0.80 0.15 200 / 0.08)"
          : "0 8px 32px oklch(0 0 0 / 0.45)",
      }}
    >
      {/* ── Top accent bar (animated on hover) ── */}
      <motion.div
        className="absolute top-0 inset-x-0 h-[1.5px]"
        animate={{
          background: hovered
            ? "linear-gradient(90deg, transparent, oklch(0.80 0.15 200 / 0.85), transparent)"
            : "linear-gradient(90deg, transparent, oklch(0.80 0.15 200 / 0.18), transparent)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* ── Corner glow ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                   transition-opacity duration-600 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 0% 0%, oklch(0.80 0.15 200 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="p-8">

        {/* ── Top row: id + featured + links ── */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-[oklch(0.80_0.15_200/0.40)] tracking-[0.22em]">
              {project.id}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full font-mono text-[9px]
                               uppercase tracking-[0.12em]
                               text-[oklch(0.80_0.15_200/0.80)]
                               bg-[oklch(0.80_0.15_200/0.08)]
                               border border-[oklch(0.80_0.15_200/0.22)]">
                Featured
              </span>
            )}
          </div>

          {/* Links — visible on hover */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100
                          transition-opacity duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg border border-[oklch(0.80_0.15_200/0.15)]
                         text-[oklch(0.80_0.15_200/0.50)]
                         hover:text-[oklch(0.80_0.15_200)]
                         hover:border-[oklch(0.80_0.15_200/0.45)]
                         hover:bg-[oklch(0.80_0.15_200/0.06)]
                         hover:shadow-[0_0_10px_oklch(0.80_0.15_200/0.20)]
                         transition-all duration-200"
            >
              <Github size={13} strokeWidth={1.5} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg border border-[oklch(0.80_0.15_200/0.15)]
                         text-[oklch(0.80_0.15_200/0.50)]
                         hover:text-[oklch(0.80_0.15_200)]
                         hover:border-[oklch(0.80_0.15_200/0.45)]
                         hover:bg-[oklch(0.80_0.15_200/0.06)]
                         hover:shadow-[0_0_10px_oklch(0.80_0.15_200/0.20)]
                         transition-all duration-200"
            >
              <ExternalLink size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* ── Title ── */}
        <h3
          className="font-display font-700 text-[oklch(0.88_0.005_220)] mb-1
                     group-hover:text-[oklch(0.80_0.15_200)] transition-colors duration-300"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}
        >
          {project.title}
        </h3>

        <p className="font-mono text-[10.5px] uppercase tracking-[0.16em]
                      text-[oklch(0.80_0.15_200/0.45)] mb-4">
          {project.subtitle}
        </p>

        <p className="text-[0.85rem] text-[oklch(0.50_0.012_220)] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* ── Divider ── */}
        <div className="h-px mb-5 bg-gradient-to-r
                        from-[oklch(0.80_0.15_200/0.10)] to-transparent" />

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md font-mono text-[9.5px]
                         uppercase tracking-[0.10em]
                         text-[oklch(0.80_0.15_200/0.50)]
                         bg-[oklch(0.80_0.15_200/0.04)]
                         border border-[oklch(0.80_0.15_200/0.10)]
                         hover:border-[oklch(0.80_0.15_200/0.30)]
                         hover:text-[oklch(0.80_0.15_200/0.80)]
                         transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main component ────────────────────────────────── */
export function Projects() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-5">03 — Projects</p>
          <h2
            className="font-display font-800 leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            <span className="text-[oklch(0.88_0.005_220)]">Selected </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0.08 190), oklch(0.80 0.15 200), oklch(0.65 0.16 210))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              work.
            </span>
          </h2>
          <p className="text-[oklch(0.48_0.012_220)] font-light mt-4 max-w-md mx-auto text-[0.92rem]">
            A curated collection of projects that push the boundary between
            engineering and experience.
          </p>
        </motion.div>

        {/* ── Projects grid ── */}
        <div className="space-y-4">
          {/* Featured row */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          {/* Secondary row */}
          <div className="grid md:grid-cols-2 gap-4 md:max-w-2xl md:mx-auto">
            <ProjectCard project={projects[2]} index={2} />
            <ProjectCard project={projects[3]} index={3} />
          </div>
        </div>

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://github.com/Maharajan0604"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                       border border-[oklch(0.80_0.15_200/0.22)]
                       text-[oklch(0.80_0.15_200/0.75)]
                       font-mono text-[10.5px] uppercase tracking-[0.20em]
                       hover:border-[oklch(0.80_0.15_200/0.55)]
                       hover:bg-[oklch(0.80_0.15_200/0.05)]
                       hover:text-[oklch(0.80_0.15_200)]
                       hover:shadow-[0_0_24px_oklch(0.80_0.15_200/0.15)]
                       transition-all duration-300"
          >
            <Github size={14} strokeWidth={1.5} />
            More on GitHub
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
