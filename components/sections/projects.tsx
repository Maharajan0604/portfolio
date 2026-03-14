"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiStripe,
} from "react-icons/si"
import { Button } from "@/components/ui/button"

const techIconMap: Record<string, React.ElementType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Stripe: SiStripe,
}

const projects = [
  {
    title: "ResMind – AI Resume Analyzer",
    description:
      "A professional full-stack AI platform that scores resumes against job descriptions with ATS-style insights.",
    image: "/projects/resmind.jpg",
    tech: ["React.js", "Tailwind CSS", "React Router", "Puter.js", "Web Application Development"],
    github: "https://ai-resume-analyzer-theta-two.vercel.app/",
    live: "https://ai-resume-analyzer-theta-two.vercel.app/",
    featured: true,
    highlights: [
      "Integrated AI models for structured, actionable résumé feedback.",
      "Implemented PDF-to-image preview and seamless comparison workflows.",
      "Designed serverless architecture for professional scalability and performance.",
    ],
  },
  {
    title: "Real-Time Voice Agent – AI Interview Preparation",
    description:
      "A professional AI voice assistant for live interview practice with instant feedback and adaptive questioning.",
    image: "/projects/voice-agent.jpg",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Gemini API"],
    github: "https://real-time-voice-agent.vercel.app/",
    live: "https://real-time-voice-agent.vercel.app/",
    featured: true,
    highlights: [
      "Built AI-powered interview simulations with context-aware response generation.",
      "Developed responsive, accessible UI focusing on professional skill development.",
      "Implemented Firebase auth and data management for secure user experience.",
    ],
  },
  {
    title: "SIES College Library Website – Digital Platform",
    description:
      "A professional library platform built to support 500+ students with a modern and responsive interface.",
    image: "/projects/library.jpg",
    tech: ["Node.js", "Tailwind CSS", "React"],
    github: "https://siesgstlibrary.vercel.app/",
    live: "https://siesgstlibrary.vercel.app/",
    featured: true,
    highlights: [
      "Revamped UI/UX to lower support queries and elevate student experience.",
      "Added announcements, resource downloads, and library information features.",
      "Enhanced accessibility and performance for a large student audience.",
    ],
  },
  {
    title: "AI Cyber Laws Assistant – Legal Awareness Chatbot",
    description:
      "A professional AI chatbot offering accessible Indian cyber law guidance through natural language interaction.",
    image: "/projects/cyber-law.jpg",
    tech: ["Node.js", "Tailwind CSS", "OAuth", "AI Chatbot"],
    github: "https://cyber-law-assistant.vercel.app/dashboard",
    live: "https://cyber-law-assistant.vercel.app/dashboard",
    featured: true,
    highlights: [
      "Built chatbot for simplified legal guidance and community engagement.",
      "Implemented secure OAuth authentication and role-based community features.",
      "Delivered clean responsive interface with cloud deployment best practices.",
    ],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            Featured Work
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">
            Projects I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all"
            >
              {project.featured && (
                <span className="absolute top-4 right-4 z-10 rounded-full bg-primary/95 px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                  Featured
                </span>
              )}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = techIconMap[tech]
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground"
                      >
                        {Icon && <Icon size={12} />}
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
