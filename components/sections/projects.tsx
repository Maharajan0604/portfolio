"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "ResMind",
    subtitle: "AI Resume Analyzer",
    description: "AI-powered platform that evaluates resumes against job descriptions and generates ATS compatibility scores. Integrated GPT models for structured feedback with PDF preview capabilities.",
    tags: ["React", "Tailwind CSS", "GPT API", "Puter.js"],
    github: "https://github.com/Maharajan0604",
    live: "https://ai-resume-analyzer-theta-two.vercel.app/",
    featured: true,
  },
  {
    id: "02",
    title: "Real-Time Voice Agent",
    subtitle: "AI Interview Preparation",
    description: "Real-time AI voice interaction system for interview practice. Generates contextual questions and evaluates responses with instant feedback using Gemini API.",
    tags: ["Next.js", "Tailwind CSS", "Gemini API", "Firebase", "WebRTC"],
    github: "https://github.com/Maharajan0604",
    live: "https://real-time-voice-agent.vercel.app/",
    featured: true,
  },
  {
    id: "03",
    title: "SIES College Library",
    subtitle: "Digital Platform",
    description: "Redesigned library platform serving 500+ students. Features past-year papers, announcements, resource modules, and responsive design for seamless academic resource access.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/Maharajan0604",
    live: "https://siesgstlibrary.vercel.app/",
    featured: false,
  },
  {
    id: "04",
    title: "Cyber Laws Assistant",
    subtitle: "Legal Awareness Chatbot",
    description: "AI chatbot for Indian cyber law awareness with natural language interaction. Provides secure login, legal news updates, and simplified cyber law information access.",
    tags: ["Node.js", "Firebase Auth", "AI Chatbot"],
    github: "https://github.com/Maharajan0604",
    live: "https://cyber-law-assistant.vercel.app/dashboard",
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-[oklch(0.78_0.12_78/0.3)]"
      style={{
        boxShadow: hovered
          ? "0 24px 80px oklch(0 0 0 / 0.7), 0 0 40px oklch(0.78 0.12 78 / 0.08)"
          : "0 8px 32px oklch(0 0 0 / 0.5)",
      }}
    >
      {/* Gold accent top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        animate={{ background: hovered
          ? "linear-gradient(90deg, transparent, oklch(0.78 0.12 78 / 0.8), transparent)"
          : "linear-gradient(90deg, transparent, oklch(0.78 0.12 78 / 0.2), transparent)"
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-8">
        {/* Number + featured badge + links */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-[oklch(0.78_0.12_78/0.5)] tracking-[0.2em]">
              {project.id}
            </span>
            {project.featured && (
              <span className="px-2 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.1em] text-[oklch(0.78_0.12_78)] bg-[oklch(0.78_0.12_78/0.1)] border border-[oklch(0.78_0.12_78/0.25)]">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[oklch(0.78_0.12_78/0.2)] text-[oklch(0.78_0.12_78/0.6)] hover:text-[oklch(0.78_0.12_78)] hover:border-[oklch(0.78_0.12_78/0.5)] transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[oklch(0.78_0.12_78/0.2)] text-[oklch(0.78_0.12_78/0.6)] hover:text-[oklch(0.78_0.12_78)] hover:border-[oklch(0.78_0.12_78/0.5)] transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-light text-foreground/90 mb-1 group-hover:text-[oklch(0.88_0.09_78)] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[oklch(0.78_0.12_78/0.5)] mb-4">
          {project.subtitle}
        </p>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.1em] text-[oklch(0.78_0.12_78/0.6)] bg-[oklch(0.78_0.12_78/0.05)] border border-[oklch(0.78_0.12_78/0.12)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-4">03 — Projects</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
            Selected <em className="text-gold not-italic">work</em>
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-md mx-auto">
            A curated collection of projects that push the boundary between engineering and experience.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-6">
          {/* Top row - 2 featured projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Bottom row - centered remaining projects */}
          <div className="grid md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
            <ProjectCard project={projects[2]} index={2} />
            <ProjectCard project={projects[3]} index={3} />
          </div>
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/Maharajan0604"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[oklch(0.78_0.12_78/0.25)] text-[oklch(0.78_0.12_78)] font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-[oklch(0.78_0.12_78/0.06)] transition-all duration-300"
          >
            <Github size={16} />
            More on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
