"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillGroups = [
  {
    category: "Frontend",
    color: "200",          // hue — cyan
    skills: [
      { name: "React / Next.js",  level: 95 },
      { name: "TypeScript",       level: 92 },
      { name: "Tailwind CSS",     level: 90 },
      { name: "Framer Motion",    level: 85 },
    ],
  },
  {
    category: "Backend",
    color: "150",          // hue — green
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI",  level: 85 },
      { name: "PostgreSQL",        level: 88 },
      { name: "Redis / MongoDB",   level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "200",
    skills: [
      { name: "Docker",            level: 80 },
      { name: "AWS",               level: 78 },
      { name: "CI / CD",           level: 82 },
    ],
  },
  {
    category: "AI / ML",
    color: "150",
    skills: [
      { name: "LLM Integration",   level: 88 },
      { name: "RAG Pipelines",     level: 82 },
      { name: "LangChain",         level: 78 },
    ],
  },
]

const techStack = [
  { name: "React",       cat: "fe"    },
  { name: "Next.js",     cat: "fe"    },
  { name: "TypeScript",  cat: "fe"    },
  { name: "Node.js",     cat: "be"    },
  { name: "Python",      cat: "be"    },
  { name: "FastAPI",     cat: "be"    },
  { name: "PostgreSQL",  cat: "be"    },
  { name: "MongoDB",     cat: "be"    },
  { name: "Redis",       cat: "be"    },
  { name: "Docker",      cat: "ops"   },
  { name: "Kubernetes",  cat: "ops"   },
  { name: "OpenAI",      cat: "ai"    },
  { name: "GraphQL",     cat: "be"    },
  { name: "Prisma",      cat: "be"    },
  { name: "LangChain",   cat: "ai"    },
]

/* ── Single skill bar ──────────────────────────────── */
function SkillBar({
  name, level, delay, hue,
}: {
  name: string; level: number; delay: number; hue: string
}) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-5% 0px" })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-mono text-[11.5px] text-[oklch(0.60_0.015_220)] tracking-wide
                         group-hover:text-[oklch(0.88_0.005_220)] transition-colors duration-300">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="font-mono text-[10px] tabular-nums"
          style={{ color: `oklch(0.80 0.15 ${hue} / 0.55)` }}
        >
          {level}%
        </motion.span>
      </div>

      {/* Track */}
      <div
        className="h-[2px] rounded-full overflow-visible relative"
        style={{ background: `oklch(0.80 0.15 ${hue} / 0.08)` }}
      >
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg,
              oklch(0.55 0.16 ${hue}) 0%,
              oklch(0.80 0.15 ${hue}) 100%)`,
          }}
        >
          {/* Glowing tip dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + 1.1, duration: 0.3 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                       w-[7px] h-[7px] rounded-full"
            style={{
              background:  `oklch(0.90 0.10 ${hue})`,
              boxShadow:   `0 0 10px oklch(0.80 0.15 ${hue} / 0.9)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────────── */
export function Skills() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.85, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-5">02 — Skills</p>
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
              arsenal.
            </span>
          </h2>
        </motion.div>

        {/* ── Skill group cards ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              custom={gi}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative rounded-2xl p-7 overflow-hidden
                         border border-[oklch(0.80_0.15_200/0.08)]
                         bg-[oklch(0.10_0.008_240/0.55)]
                         hover:border-[oklch(0.80_0.15_200/0.18)]
                         hover:bg-[oklch(0.10_0.008_240/0.75)]
                         transition-all duration-500 backdrop-blur-sm"
            >
              {/* Corner index */}
              <span className="absolute top-5 right-5 font-mono text-[10px]
                               text-[oklch(0.80_0.15_200/0.18)]">
                {String(gi + 1).padStart(2, "0")}
              </span>

              {/* Subtle corner glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                           transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 0% 0%,
                    oklch(0.80 0.15 ${group.color} / 0.05) 0%, transparent 70%)`,
                }}
              />

              {/* Category label */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="h-[1px] w-5 rounded-full"
                  style={{ background: `oklch(0.80 0.15 ${group.color} / 0.55)` }}
                />
                <h3 className="font-mono text-[10.5px] uppercase tracking-[0.25em]"
                    style={{ color: `oklch(0.80 0.15 ${group.color} / 0.75)` }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    hue={group.color}
                    delay={gi * 0.10 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Proficiency legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { label: "Familiar",  w: "w-6",  opacity: "0.25" },
            { label: "Proficient",w: "w-10", opacity: "0.50" },
            { label: "Expert",    w: "w-16", opacity: "1.00" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div
                className={`${l.w} h-[2px] rounded-full`}
                style={{
                  background: `linear-gradient(90deg,
                    oklch(0.55 0.16 200 / ${l.opacity}),
                    oklch(0.80 0.15 200 / ${l.opacity}))`,
                }}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.18em]
                               text-[oklch(0.42_0.012_220)]">
                {l.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Tech tag cloud ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.5 }}
        >
          <p className="text-center section-label mb-8">Also in the toolkit</p>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.65 + i * 0.03, duration: 0.45 }}
                whileHover={{ y: -3, scale: 1.06 }}
                className="px-3.5 py-1.5 rounded-lg font-mono text-[10.5px]
                           uppercase tracking-[0.12em] cursor-default
                           border border-[oklch(0.80_0.15_200/0.10)]
                           bg-[oklch(0.80_0.15_200/0.03)]
                           text-[oklch(0.52_0.015_220)]
                           hover:border-[oklch(0.80_0.15_200/0.35)]
                           hover:bg-[oklch(0.80_0.15_200/0.07)]
                           hover:text-[oklch(0.80_0.15_200)]
                           hover:shadow-[0_0_12px_oklch(0.80_0.15_200/0.15)]
                           transition-all duration-250"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}