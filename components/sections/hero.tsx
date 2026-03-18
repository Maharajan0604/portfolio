"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown, Terminal } from "lucide-react"

const socialLinks = [
  { icon: Github,   href: "https://github.com/Maharajan0604",          label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604",  label: "LinkedIn" },
  { icon: Mail,     href: "mailto:0604maharaja@gmail.com",              label: "Email"    },
]

const ROLES = [
  "Full Stack Engineer",
  "Cloud Architect",
  "AI Builder",
  "System Designer",
]

/* ── Magnetic hook ─────────────────────────────────── */
function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const onMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: (e.clientX - rect.left - rect.width  / 2) * strength,
      y: (e.clientY - rect.top  - rect.height / 2) * strength,
    })
  }, [strength])
  const onLeave = useCallback(() => setPos({ x: 0, y: 0 }), [])
  return { ref, pos, onMove, onLeave }
}

/* ── Cycling role text ─────────────────────────────── */
function CyclingRole() {
  const [index,   setIndex]   = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      className="inline-block font-mono text-[oklch(0.80_0.15_200)] transition-all duration-400"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-8px)" }}
    >
      {ROLES[index]}
    </span>
  )
}

/* ── Terminal intro card ───────────────────────────── */
function TerminalCard() {
  const [step, setStep] = useState(0)

  const lines = [
    { prompt: "~", cmd: "whoami",               out: "maharajan_konar"             },
    { prompt: "~", cmd: "cat stack.txt",         out: "React · Next · Node · AWS · AI" },
    { prompt: "~", cmd: "git log --oneline -1",  out: "🟢  open to work"            },
  ]

  useEffect(() => {
    if (step >= lines.length) return
    const id = setTimeout(() => setStep((s) => s + 1), step === 0 ? 800 : 1200)
    return () => clearTimeout(id)
  }, [step, lines.length])

  return (
    <div className="terminal-box w-full max-w-sm mx-auto mt-12 pt-8 pb-5 px-5 text-left">
      <div className="space-y-2.5">
        {lines.slice(0, step).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-0.5"
          >
            <div className="flex items-center gap-2">
              <span className="text-[oklch(0.78_0.18_150)] text-[11px]">❯</span>
              <span className="text-[oklch(0.80_0.15_200/0.50)] text-[11px]">{line.prompt}</span>
              <span className="text-[oklch(0.92_0.05_220)] text-[11px]">{line.cmd}</span>
            </div>
            <div className="pl-6 text-[oklch(0.60_0.015_220)] text-[11px]">{line.out}</div>
          </motion.div>
        ))}

        {/* Blinking cursor */}
        {step <= lines.length && (
          <div className="flex items-center gap-2">
            <span className="text-[oklch(0.78_0.18_150)] text-[11px]">❯</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-3.5 bg-[oklch(0.80_0.15_200/0.7)] rounded-[1px]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Corner bracket ornament ───────────────────────── */
function CornerBracket({ className }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M2 46 L2 2 L46 2" stroke="oklch(0.80 0.15 200)" strokeWidth="1" fill="none" opacity="0.35"/>
      <circle cx="2" cy="2" r="2" fill="oklch(0.80 0.15 200)" opacity="0.5"/>
      <circle cx="2" cy="46" r="1.5" fill="oklch(0.80 0.15 200)" opacity="0.25"/>
      <circle cx="46" cy="2" r="1.5" fill="oklch(0.80 0.15 200)" opacity="0.25"/>
    </svg>
  )
}

/* ── Main component ────────────────────────────────── */
export function Hero() {
  const btn1 = useMagnetic()
  const btn2 = useMagnetic()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const stagger = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.10, delayChildren: 0.3 } },
  }
  const item = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center px-6 overflow-hidden"
    >
      {/* ── Radial glow behind content ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.80 0.15 200 / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Corner brackets ── */}
      <CornerBracket className="absolute top-28 left-6 hidden xl:block" />
      <CornerBracket className="absolute top-28 right-6 hidden xl:block rotate-90" />
      <CornerBracket className="absolute bottom-16 left-6 hidden xl:block -rotate-90" />
      <CornerBracket className="absolute bottom-16 right-6 hidden xl:block rotate-180" />

      {/* ── Line number decoration ── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 items-center">
        {["01", "02", "03", "04", "05"].map((n) => (
          <span key={n} className="font-mono text-[9px] text-[oklch(0.80_0.15_200/0.15)] tracking-widest">
            {n}
          </span>
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        className="relative z-10 text-center max-w-5xl mx-auto w-full"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[oklch(0.80_0.15_200/0.20)] bg-[oklch(0.80_0.15_200/0.04)] text-[10.5px] font-mono uppercase tracking-[0.22em] text-[oklch(0.80_0.15_200/0.75)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.78_0.18_150)] opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[oklch(0.78_0.18_150)]" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.div variants={item} className="mb-5">
          <h1
            className="font-display font-bold leading-[0.95] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.2rem, 11vw, 8.5rem)" }}
          >
            <span className="block text-[oklch(0.92_0.005_220)]">
              Maharajan
            </span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, oklch(0.92 0.08 190) 0%, oklch(0.80 0.15 200) 45%, oklch(0.65 0.16 210) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Konar
            </span>
          </h1>
        </motion.div>

        {/* ── Role subtitle ── */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[oklch(0.80_0.15_200/0.45)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[oklch(0.55_0.015_220)]">
            {"// "}
          </span>
          <CyclingRole />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[oklch(0.55_0.015_220)]">
            {"// "}
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[oklch(0.80_0.15_200/0.45)]" />
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          variants={item}
          className="text-base sm:text-[1.05rem] text-[oklch(0.50_0.015_220)] max-w-lg mx-auto mb-12 leading-relaxed font-sans"
        >
          CS Engineer turning complex systems into{" "}
          <span className="text-[oklch(0.80_0.15_200)] font-medium">
            intuitive experiences
          </span>
          . Obsessed with clean architecture, fast UIs, and shipping things that matter.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary */}
          <motion.div
            ref={btn1.ref}
            onMouseMove={btn1.onMove}
            onMouseLeave={btn1.onLeave}
            animate={{ x: btn1.pos.x, y: btn1.pos.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative h-13 px-9 rounded-full overflow-hidden font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, oklch(0.88 0.12 195), oklch(0.80 0.15 200), oklch(0.65 0.16 208))",
                color: "oklch(0.07 0.005 260)",
                boxShadow: "0 0 28px oklch(0.80 0.15 200 / 0.30), 0 4px 20px oklch(0 0 0 / 0.40)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Terminal size={13} strokeWidth={2} />
                View Projects
              </span>
              <motion.span
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, oklch(0.97 0.005 220 / 0.25) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </button>
          </motion.div>

          {/* Secondary */}
          <motion.div
            ref={btn2.ref}
            onMouseMove={btn2.onMove}
            onMouseLeave={btn2.onLeave}
            animate={{ x: btn2.pos.x, y: btn2.pos.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="h-13 px-9 rounded-full font-mono text-[11px] uppercase tracking-[0.18em] border transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.80_0.15_200/0.20)]"
              style={{
                borderColor: "oklch(0.80 0.15 200 / 0.30)",
                color: "oklch(0.80 0.15 200)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "oklch(0.80 0.15 200 / 0.65)"
                e.currentTarget.style.background   = "oklch(0.80 0.15 200 / 0.06)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "oklch(0.80 0.15 200 / 0.30)"
                e.currentTarget.style.background   = "transparent"
              }}
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* ── Social links ── */}
        <motion.div variants={item} className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex items-center gap-2 transition-all duration-300"
            >
              <span className="p-2 rounded-lg border border-[oklch(0.80_0.15_200/0.10)] bg-[oklch(0.80_0.15_200/0.03)] text-[oklch(0.45_0.015_220)] group-hover:text-[oklch(0.80_0.15_200)] group-hover:border-[oklch(0.80_0.15_200/0.30)] group-hover:bg-[oklch(0.80_0.15_200/0.06)] group-hover:shadow-[0_0_12px_oklch(0.80_0.15_200/0.20)] transition-all duration-300">
                <link.icon size={16} strokeWidth={1.5} />
              </span>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.40_0.015_220)] group-hover:text-[oklch(0.65_0.015_220)] transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* ── Terminal card ── */}
        <motion.div variants={item}>
          <TerminalCard />
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[oklch(0.80_0.15_200/0.35)]"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.35em]">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
