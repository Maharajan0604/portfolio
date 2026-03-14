"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "Developer and Problem Solver",
    company: "Webmaken",
    companyUrl: "https://webmaken.example.com",
    period: "Jan 2025 – June 2025",
    description:
      "Delivered mission-critical SaaS integrations and API-driven automation with a focus on performance and reliability.",
    achievements: [
      "Integrated and synchronized diamond inventory data from Brilliant Earth and Ritani, ensuring consistent product availability across platforms.",
      "Built a real-time restaurant order automation system using escpos-php and Windows Print Connectors for near-instant thermal printing.",
      "Developed scalable REST APIs for a Jain Panchang app providing dynamic calendar and festival data to web and mobile clients.",
    ],
    technologies: ["PHP", "REST APIs", "CRM integration", "real-time printing"],
  },
  {
    title: "Technology Intern (Remote)",
    company: "Brandenbed Living Spaces UG (haftungsbeschränkt)",
    companyUrl: "https://brandenbed.example.com",
    period: "Dec 2025 – March 2026",
    description:
      "Supported product and marketing initiatives for a Berlin-based interior startup, with a strong remote and cross-functional team presence.",
    achievements: [
      "Enhanced technology and operational workflows UX for digital business processes.",
      "Supported digital initiatives with a focus on efficiency across business operations and marketing.",
      "Collaborated with international remote teams, demonstrating adaptability, communication, and fast learning in a startup environment.",
    ],
    technologies: ["Remote Collaboration", "Process Optimization", "Stakeholder Communication"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            Experience
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">
            Where I've worked
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 hidden md:block" />

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <span className="text-xs">↗</span>
                  </a>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Empty grid cell for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
