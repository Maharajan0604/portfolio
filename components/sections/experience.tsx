"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const experiences = [
  {
    role: "Developer & Problem Solver",
    company: "Webmaken",
    period: "1/2025 — 6/2025",
    location: "India",
    type: "Internship",
    description: "Built integrations and APIs for e-commerce and service management platforms. Designed real-time systems for inventory synchronization and order processing.",
    highlights: [
      "Integrated and synchronized diamond inventory data from multiple platforms",
      "Implemented real-time restaurant order printing using escpos-php and Windows Print Connector",
      "Designed REST APIs powering dynamic calendar and festival data for Jain Panchang web and mobile app",
    ],
    stack: ["REST APIs", "PHP", "Real-time Integration", "Data Synchronization"],
  },
  {
    role: "Technology Intern",
    company: "Brandenbed Living Spaces UG",
    period: "12/2025 — 3/2026",
    location: "Berlin, Germany",
    type: "Internship",
    description: "Contributed to technology and operational workflows for a Germany-based interior and living spaces startup. Supported digital initiatives aligned with business operations and marketing functions.",
    highlights: [
      "Demonstrated strong adaptability in a fast-paced startup environment",
      "Collaborated on technology solutions for operational efficiency",
      "Supported digital initiatives across business operations and marketing channels",
    ],
    stack: ["TypeScript", "React", "Node.js"],
  },
]

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-4">04 — Experience</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
            The <em className="text-gold not-italic">journey</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.78 0.12 78 / 0.5), oklch(0.78 0.12 78 / 0.1))",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-16 pl-8 md:pl-0">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  exp,
  index,
  inView,
}: {
  exp: typeof experiences[0]
  index: number
  inView: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 1,
        delay: 0.3 + index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative md:w-[calc(50%-2rem)] ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
    >
      {/* Timeline dot */}
      <div
        className="absolute top-6 hidden md:block w-3 h-3 rounded-full"
        style={{
          [isEven ? "right" : "left"]: "calc(-2rem - 5px)",
          background:
            "linear-gradient(135deg, oklch(0.92 0.06 85), oklch(0.78 0.12 78))",
          boxShadow: "0 0 12px oklch(0.78 0.12 78 / 0.5)",
        }}
      />

      {/* Card */}
      <div className="glass rounded-2xl p-7 hover:border-[oklch(0.78_0.12_78/0.3)] transition-all duration-500 group">
        {/* Period badge */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.78_0.12_78/0.6)]">
            {exp.period}
          </span>
          <span className="px-3 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-[0.12em] border border-[oklch(0.78_0.12_78/0.2)] text-[oklch(0.78_0.12_78/0.5)]">
            {exp.type}
          </span>
        </div>

        {/* Role & Company */}
        <h3 className="font-display text-2xl font-light text-foreground/90 mb-1 group-hover:text-[oklch(0.88_0.09_78)] transition-colors duration-300">
          {exp.role}
        </h3>
        <p className="font-sans text-sm font-medium text-[oklch(0.78_0.12_78)] mb-1">{exp.company}</p>
        <p className="font-mono text-[10px] text-muted-foreground mb-4 uppercase tracking-[0.15em]">{exp.location}</p>

        <div className="h-[1px] bg-[oklch(0.78_0.12_78/0.1)] mb-4" />

        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {exp.highlights.map((h, hi) => (
            <li key={hi} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
              <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-[oklch(0.78_0.12_78/0.6)]" />
              {h}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.1em] text-[oklch(0.78_0.12_78/0.5)] bg-[oklch(0.78_0.12_78/0.04)] border border-[oklch(0.78_0.12_78/0.1)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
