"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Calendar, ExternalLink } from "lucide-react"

const experiences = [
  {
    role:        "Developer & Problem Solver",
    company:     "Webmaken",
    period:      "Jan 2025 — Jun 2025",
    location:    "India",
    type:        "Internship",
    current:     false,
    description: "Built integrations and APIs for e-commerce and service management platforms. Designed real-time systems for inventory synchronization and order processing.",
    highlights: [
      "Integrated and synchronized diamond inventory data from multiple platforms",
      "Implemented real-time restaurant order printing using escpos-php and Windows Print Connector",
      "Designed REST APIs powering dynamic calendar and festival data for Jain Panchang web and mobile app",
    ],
    stack: ["REST APIs", "PHP", "Real-time Integration", "Data Sync"],
  },
  {
    role:        "Technology Intern",
    company:     "Brandenbed Living Spaces UG",
    period:      "Dec 2025 — Mar 2026",
    location:    "Berlin, Germany",
    type:        "Internship",
    current:     true,
    description: "Contributed to technology and operational workflows for a Germany-based interior and living spaces startup. Supported digital initiatives aligned with business operations and marketing functions.",
    highlights: [
      "Demonstrated strong adaptability in a fast-paced startup environment",
      "Collaborated on technology solutions for operational efficiency",
      "Supported digital initiatives across business operations and marketing channels",
    ],
    stack: ["TypeScript", "React", "Node.js"],
  },
]

/* ── Single experience card ────────────────────────── */
function ExperienceItem({
  exp,
  index,
  inView,
}: {
  exp:     (typeof experiences)[0]
  index:   number
  inView:  boolean
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.95, delay: 0.3 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      className={`relative md:w-[calc(50%-2.5rem)]
        ${isEven ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"}`}
    >
      {/* ── Timeline connector dot ── */}
      <div
        className="absolute top-7 hidden md:flex items-center justify-center
                   w-3.5 h-3.5 rounded-full z-10"
        style={{
          [isEven ? "right" : "left"]: "calc(-2.5rem - 5px)",
          background:   exp.current
            ? "linear-gradient(135deg, oklch(0.90 0.10 195), oklch(0.80 0.15 200))"
            : "oklch(0.20 0.012 240)",
          border:       `1px solid oklch(0.80 0.15 200 / ${exp.current ? "0.8" : "0.25"})`,
          boxShadow:    exp.current ? "0 0 14px oklch(0.80 0.15 200 / 0.55)" : "none",
        }}
      >
        {exp.current && (
          <span className="absolute w-3.5 h-3.5 rounded-full animate-ping"
                style={{ background: "oklch(0.80 0.15 200 / 0.25)" }} />
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="group relative rounded-2xl overflow-hidden
                   border border-[oklch(0.80_0.15_200/0.08)]
                   bg-[oklch(0.10_0.008_240/0.60)]
                   hover:border-[oklch(0.80_0.15_200/0.22)]
                   hover:bg-[oklch(0.10_0.008_240/0.80)]
                   hover:shadow-[0_8px_40px_oklch(0_0_0/0.45),0_0_0_1px_oklch(0.80_0.15_200/0.05)]
                   transition-all duration-400 backdrop-blur-sm"
      >
        {/* Top accent line — only on current role */}
        {exp.current && (
          <div className="absolute top-0 inset-x-0 h-[2px]"
               style={{
                 background: "linear-gradient(90deg, transparent, oklch(0.80 0.15 200 / 0.8), transparent)",
               }} />
        )}

        {/* Corner glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                        transition-opacity duration-600 pointer-events-none"
             style={{
               background: "radial-gradient(ellipse 55% 45% at 0% 0%, oklch(0.80 0.15 200 / 0.05) 0%, transparent 70%)",
             }} />

        <div className="p-7">

          {/* ── Top meta row ── */}
          <div className="flex items-start justify-between gap-3 flex-wrap mb-5">

            {/* Period */}
            <div className="flex items-center gap-1.5">
              <Calendar size={10} className="text-[oklch(0.80_0.15_200/0.45)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em]
                               text-[oklch(0.80_0.15_200/0.55)]">
                {exp.period}
              </span>
            </div>

            {/* Type badge */}
            <span className={`px-3 py-0.5 rounded-full font-mono text-[9.5px]
                              uppercase tracking-[0.14em]
                              border transition-colors duration-300
                              ${exp.current
                                ? "border-[oklch(0.80_0.15_200/0.35)] text-[oklch(0.80_0.15_200/0.80)] bg-[oklch(0.80_0.15_200/0.06)]"
                                : "border-[oklch(0.80_0.15_200/0.12)] text-[oklch(0.80_0.15_200/0.35)]"
                              }`}>
              {exp.current ? "● " : ""}{exp.type}
            </span>
          </div>

          {/* ── Role & company ── */}
          <h3
            className="font-display font-700 text-[oklch(0.88_0.005_220)] mb-1
                       group-hover:text-[oklch(0.80_0.15_200)] transition-colors duration-300"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
          >
            {exp.role}
          </h3>

          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <span className="font-mono text-[11px] font-600
                             text-[oklch(0.80_0.15_200/0.75)]">
              {exp.company}
            </span>
            <span className="text-[oklch(0.30_0.008_240)]">·</span>
            <span className="flex items-center gap-1 font-mono text-[10px]
                             uppercase tracking-[0.14em] text-[oklch(0.42_0.012_220)]">
              <MapPin size={9} strokeWidth={1.5} />
              {exp.location}
            </span>
          </div>

          {/* ── Divider ── */}
          <div className="h-px my-5 bg-gradient-to-r
                          from-[oklch(0.80_0.15_200/0.12)] via-[oklch(0.80_0.15_200/0.06)] to-transparent" />

          {/* ── Description ── */}
          <p className="text-[0.85rem] text-[oklch(0.50_0.012_220)] leading-relaxed mb-5">
            {exp.description}
          </p>

          {/* ── Highlights ── */}
          <ul className="space-y-2.5 mb-6">
            {exp.highlights.map((h, hi) => (
              <motion.li
                key={hi}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.18 + hi * 0.07, duration: 0.5 }}
                className="flex items-start gap-3 text-[0.83rem]
                           text-[oklch(0.48_0.012_220)] leading-relaxed"
              >
                <span className="flex-shrink-0 mt-[0.35rem] font-mono text-[10px]
                                 text-[oklch(0.78_0.18_150)]">
                  ▸
                </span>
                {h}
              </motion.li>
            ))}
          </ul>

          {/* ── Stack tags ── */}
          <div className="flex flex-wrap gap-1.5">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md font-mono text-[9.5px]
                           uppercase tracking-[0.10em]
                           text-[oklch(0.80_0.15_200/0.50)]
                           bg-[oklch(0.80_0.15_200/0.04)]
                           border border-[oklch(0.80_0.15_200/0.10)]
                           hover:border-[oklch(0.80_0.15_200/0.30)]
                           hover:text-[oklch(0.80_0.15_200/0.80)]
                           transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Main component ────────────────────────────────── */
export function Experience() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-5">04 — Experience</p>
          <h2
            className="font-display font-800 leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            <span className="text-[oklch(0.88_0.005_220)]">The </span>
            <span
              style={{
                background: "linear-gradient(135deg, oklch(0.92 0.08 190), oklch(0.80 0.15 200), oklch(0.65 0.16 210))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              journey.
            </span>
          </h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px origin-top
                       -translate-x-1/2 hidden md:block"
            style={{
              background: "linear-gradient(to bottom, oklch(0.80 0.15 200 / 0.45), oklch(0.80 0.15 200 / 0.08))",
            }}
          />

          {/* Mobile left spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.2 }}
            className="absolute left-3 top-0 bottom-0 w-px origin-top md:hidden"
            style={{
              background: "linear-gradient(to bottom, oklch(0.80 0.15 200 / 0.35), transparent)",
            }}
          />

          <div className="space-y-12 pl-10 md:pl-0">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>

          {/* Timeline end dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2
                       w-2 h-2 rounded-full border border-[oklch(0.80_0.15_200/0.25)]"
            style={{ background: "oklch(0.14 0.010 240)" }}
          />
        </div>

        {/* ── Open to work CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.85 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                          border border-[oklch(0.80_0.15_200/0.18)]
                          bg-[oklch(0.80_0.15_200/0.04)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full
                               rounded-full bg-[oklch(0.78_0.18_150)] opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5
                               bg-[oklch(0.78_0.18_150)]" />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.20em]
                             text-[oklch(0.55_0.015_220)]">
              Open to new opportunities
            </span>
            <span className="font-mono text-[10px] text-[oklch(0.80_0.15_200/0.45)]">
              →
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}