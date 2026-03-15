"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const traits = [
  { label: "Full Stack Engineering", desc: "End-to-end product development — from databases to pixel-perfect UIs." },
  { label: "Cloud & DevOps", desc: "Docker. Scalable infrastructure built to last." },
  { label: "AI Integration", desc: "Embedding LLMs, RAG pipelines, and intelligent features into real products." },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[oklch(0.78_0.12_78/0.4)]" />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <p className="section-label mb-4">01 — About</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight text-foreground/90">
            Crafting software that
            <br />
            <em className="text-gold not-italic">matters</em>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — narrative */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              I&apos;m a Computer Science Engineer with a passion for building systems that are as elegant under the hood as they are on the surface. Currently based in India, working with teams globally.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              My approach combines rigorous engineering principles with an obsession for user experience. I believe great software is invisible — it just works, beautifully and reliably.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Beyond code, I explore the intersection of artificial intelligence and human interaction — building tools that augment human capability rather than replace it.
            </p>

            {/* Signature ornament */}
            <div className="pt-4">
              <div className="font-display text-3xl font-light text-gold italic">Maharajan K.</div>
              <div className="h-[1px] w-32 mt-2 bg-gradient-to-r from-[oklch(0.78_0.12_78/0.6)] to-transparent" />
            </div>
          </motion.div>

          {/* Right — traits */}
          <motion.div variants={fadeUp} className="space-y-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                variants={fadeUp}
                className="group glass-gold rounded-xl p-5 cursor-default transition-all duration-300 hover:border-[oklch(0.78_0.12_78/0.35)]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-mono font-medium"
                    style={{
                      background: "oklch(0.78 0.12 78 / 0.1)",
                      color: "oklch(0.78 0.12 78)",
                      border: "1px solid oklch(0.78 0.12 78 / 0.3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-foreground/90 mb-1 group-hover:text-[oklch(0.78_0.12_78)] transition-colors duration-300">
                      {trait.label}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{trait.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[oklch(0.78_0.12_78/0.3)] to-transparent" />
    </section>
  )
}
