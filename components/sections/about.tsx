"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Cloud, Brain, Coffee } from "lucide-react"

const traits = [
  {
    icon: Code2,
    label: "Full Stack Engineering",
    desc:  "End-to-end product development — from databases to pixel-perfect UIs.",
    tag:   "React · Next.js · Node",
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    desc:  "Docker, CI/CD, scalable infrastructure built to last and survive traffic spikes.",
    tag:   "AWS · Docker · GitHub Actions",
  },
  {
    icon: Brain,
    label: "AI Integration",
    desc:  "Embedding LLMs, RAG pipelines, and intelligent features into real products.",
    tag:   "OpenAI · LangChain · Vector DBs",
  },
]

const facts = [
  { value: "15+",  label: "Projects Shipped"   },
  { value: "3+",   label: "Years Building"      },
  { value: "∞",    label: "Cups of Coffee"      },
]

export function About() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })

  const container = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.10 } },
  }
  const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">

      {/* ── Top thread line ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20
                      bg-gradient-to-b from-transparent to-[oklch(0.80_0.15_200/0.35)]" />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >

        {/* ── Section header ── */}
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <p className="section-label mb-5">01 — About</p>
          <h2
            className="font-display font-800 leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            <span className="text-[oklch(0.88_0.005_220)]">Engineer by training,</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, oklch(0.92 0.08 190), oklch(0.80 0.15 200), oklch(0.65 0.16 210))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              builder by obsession.
            </span>
          </h2>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — narrative */}
          <motion.div variants={fadeUp} className="space-y-7">

            {/* Code-comment intro */}
            <div className="font-mono text-[11px] text-[oklch(0.80_0.15_200/0.40)] space-y-0.5">
              <div>{"/**"}</div>
              <div>&nbsp;{"* @author  Maharajan Konar"}</div>
              <div>&nbsp;{"* @role    Full Stack · Cloud · AI"}</div>
              <div>&nbsp;{"* @status  open_to_work = true"}</div>
              <div>{"*/"}</div>
            </div>

            <p className="text-[1.05rem] text-[oklch(0.55_0.015_220)] leading-relaxed">
              I&apos;m a Computer Science Engineer with a passion for building systems that are as{" "}
              <span className="text-[oklch(0.80_0.15_200)] font-medium">
                elegant under the hood
              </span>{" "}
              as they are on the surface. Currently based in India, working with teams globally.
            </p>

            <p className="text-[0.95rem] text-[oklch(0.48_0.012_220)] leading-relaxed">
              My approach combines rigorous engineering principles with an obsession for user
              experience. I believe great software is invisible — it just works, beautifully
              and reliably.
            </p>

            <p className="text-[0.95rem] text-[oklch(0.48_0.012_220)] leading-relaxed">
              Beyond code, I explore the intersection of artificial intelligence and human
              interaction — building tools that{" "}
              <span className="text-[oklch(0.78_0.18_150)] font-medium">
                augment human capability
              </span>{" "}
              rather than replace it.
            </p>

            {/* ── Quick facts row ── */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl p-4 text-center border border-[oklch(0.80_0.15_200/0.10)]
                             bg-[oklch(0.80_0.15_200/0.03)] hover:border-[oklch(0.80_0.15_200/0.25)]
                             hover:bg-[oklch(0.80_0.15_200/0.06)] transition-all duration-300"
                >
                  <div
                    className="font-display font-700 leading-none mb-1"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2rem)",
                      background: "linear-gradient(135deg, oklch(0.90 0.08 190), oklch(0.80 0.15 200))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {f.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[oklch(0.45_0.012_220)]">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="pt-2">
              <div
                className="font-display text-2xl italic"
                style={{
                  background: "linear-gradient(135deg, oklch(0.90 0.08 190), oklch(0.80 0.15 200))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Maharajan K.
              </div>
              <div className="h-px w-24 mt-1.5 bg-gradient-to-r from-[oklch(0.80_0.15_200/0.55)] to-transparent" />
            </div>
          </motion.div>

          {/* Right — trait cards */}
          <motion.div variants={fadeUp} className="space-y-3">

            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative rounded-xl p-5 cursor-default
                           border border-[oklch(0.80_0.15_200/0.08)]
                           bg-[oklch(0.10_0.008_240/0.60)]
                           hover:border-[oklch(0.80_0.15_200/0.25)]
                           hover:bg-[oklch(0.80_0.15_200/0.04)]
                           hover:shadow-[0_0_24px_oklch(0.80_0.15_200/0.08)]
                           transition-all duration-300 backdrop-blur-sm"
              >
                {/* Left cyan bar */}
                <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full
                                bg-[oklch(0.80_0.15_200/0)] group-hover:bg-[oklch(0.80_0.15_200/0.60)]
                                transition-all duration-300" />

                <div className="flex items-start gap-4">

                  {/* Icon + number */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center
                                 border border-[oklch(0.80_0.15_200/0.15)]
                                 bg-[oklch(0.80_0.15_200/0.06)]
                                 text-[oklch(0.80_0.15_200/0.60)]
                                 group-hover:text-[oklch(0.80_0.15_200)]
                                 group-hover:border-[oklch(0.80_0.15_200/0.35)]
                                 group-hover:bg-[oklch(0.80_0.15_200/0.10)]
                                 group-hover:shadow-[0_0_12px_oklch(0.80_0.15_200/0.20)]
                                 transition-all duration-300"
                    >
                      <trait.icon size={16} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[9px] text-[oklch(0.80_0.15_200/0.25)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-display font-600 text-[oklch(0.82_0.005_220)] mb-1
                                 group-hover:text-[oklch(0.80_0.15_200)] transition-colors duration-300"
                      style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
                    >
                      {trait.label}
                    </h3>
                    <p className="text-[0.83rem] text-[oklch(0.46_0.012_220)] leading-relaxed mb-2">
                      {trait.desc}
                    </p>
                    {/* Tech tag */}
                    <span className="inline-block font-mono text-[9.5px] tracking-[0.12em]
                                     text-[oklch(0.80_0.15_200/0.45)] uppercase">
                      {trait.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ── Currently learning block ── */}
            <div className="terminal-box pt-9 pb-4 px-5 mt-2">
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-[oklch(0.80_0.15_200/0.45)] uppercase tracking-widest mb-3">
                  $ currently_learning
                </div>
                {["Rust for systems programming", "Edge computing patterns", "Agentic AI workflows"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[oklch(0.78_0.18_150)] text-[11px]">▸</span>
                    <span className="font-mono text-[11px] text-[oklch(0.55_0.015_220)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom thread line ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20
                      bg-gradient-to-b from-[oklch(0.80_0.15_200/0.30)] to-transparent" />
    </section>
  )
}