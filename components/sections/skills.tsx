"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis / MongoDB", level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 80 },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "LLM Integration", level: 88 },
      { name: "RAG Pipelines", level: 82 },
    ],
  },
]

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "MongoDB", "Redis", "Docker",
  "Kubernetes", "OpenAI", "GraphQL",
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-5% 0px" })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-sans font-light text-foreground/80 group-hover:text-[oklch(0.78_0.12_78)] transition-colors duration-300">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="font-mono text-[11px] text-[oklch(0.78_0.12_78/0.6)]"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-[2px] bg-[oklch(0.78_0.12_78/0.1)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full relative"
          style={{
            background: "linear-gradient(90deg, oklch(0.65 0.11 72), oklch(0.82 0.13 78), oklch(0.92 0.06 85))",
          }}
        >
          {/* Glow dot at tip */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full -translate-x-1"
            style={{
              background: "oklch(0.92 0.06 85)",
              boxShadow: "0 0 8px oklch(0.78 0.12 78)",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-4">02 — Skills</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
            The <em className="text-gold not-italic">arsenal</em>
          </h2>
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              custom={gi}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-6 bg-[oklch(0.78_0.12_78/0.5)]" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[oklch(0.78_0.12_78/0.8)]">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-6">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack ticker */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-center section-label mb-8">Also comfortable with</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.1em] text-[oklch(0.78_0.12_78/0.7)] border border-[oklch(0.78_0.12_78/0.15)] hover:border-[oklch(0.78_0.12_78/0.4)] hover:text-[oklch(0.78_0.12_78)] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
