"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Maharajan0604", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604", label: "LinkedIn" },
  { icon: Mail, href: "mailto:0604maharaja@gmail.com", label: "Email" },
]

function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    })
  }, [strength])

  const onLeave = useCallback(() => setPos({ x: 0, y: 0 }), [])

  return { ref, pos, onMove, onLeave }
}

// Animated text reveal letter by letter
function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const btn1 = useMagnetic()
  const btn2 = useMagnetic()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-6 overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.78 0.12 78 / 1) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.78 0.12 78 / 1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-32 left-8 hidden xl:block opacity-30">
        <OrnamentCorner />
      </div>
      <div className="absolute top-32 right-8 hidden xl:block opacity-30 rotate-90">
        <OrnamentCorner />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        className="relative z-10 text-center max-w-6xl mx-auto"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[oklch(0.78_0.12_78/0.25)] bg-[oklch(0.78_0.12_78/0.04)] text-[11px] font-mono uppercase tracking-[0.2em] text-[oklch(0.78_0.12_78/0.8)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.78_0.12_78)] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[oklch(0.78_0.12_78)]" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={item} className="mb-6 overflow-hidden">
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-display font-light leading-[0.92] tracking-tight">
            <span className="block text-foreground/90 mb-2">Building</span>
            <span className="block text-gold">
              Digital
            </span>
            <span className="block text-foreground/90 mt-2">
              Experiences
            </span>
          </h1>
        </motion.div>

        {/* Subtitle line */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[oklch(0.78_0.12_78/0.5)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[oklch(0.78_0.12_78/0.6)]">
            with AI & Modern Stack
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[oklch(0.78_0.12_78/0.5)]" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed font-sans font-light"
        >
          Hi, I&apos;m{" "}
          <span className="text-foreground font-medium" style={{
            background: "linear-gradient(135deg, oklch(0.92 0.06 85), oklch(0.78 0.12 78))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Maharajan Konar
          </span>
          {" "}— CS Engineer specializing in Full Stack &amp; Cloud. I turn complex systems into intuitive human interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.div
            ref={btn1.ref}
            onMouseMove={btn1.onMove}
            onMouseLeave={btn1.onLeave}
            animate={{ x: btn1.pos.x, y: btn1.pos.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative h-14 px-10 rounded-full overflow-hidden font-sans text-sm font-medium tracking-widest uppercase transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, oklch(0.92 0.06 85), oklch(0.78 0.12 78), oklch(0.65 0.11 72))",
                color: "oklch(0.06 0.003 260)",
                boxShadow: "0 0 30px oklch(0.78 0.12 78 / 0.3), 0 4px 16px oklch(0 0 0 / 0.4)",
              }}
            >
              <span className="relative z-10">Explore My Work</span>
              {/* Shimmer */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, oklch(0.97 0.008 80 / 0.2) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
            </button>
          </motion.div>

          <motion.div
            ref={btn2.ref}
            onMouseMove={btn2.onMove}
            onMouseLeave={btn2.onLeave}
            animate={{ x: btn2.pos.x, y: btn2.pos.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="h-14 px-10 rounded-full font-sans text-sm font-medium tracking-widest uppercase border transition-all duration-300 hover:bg-[oklch(0.78_0.12_78/0.06)]"
              style={{
                borderColor: "oklch(0.78 0.12 78 / 0.3)",
                color: "oklch(0.78 0.12 78)",
                backdropFilter: "blur(12px)",
              }}
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold group flex items-center gap-2 text-muted-foreground hover:text-[oklch(0.78_0.12_78)] transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon size={18} strokeWidth={1.5} />
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em]">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-[oklch(0.78_0.12_78/0.4)]"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function OrnamentCorner() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M2 58 L2 2 L58 2" stroke="oklch(0.78 0.12 78)" strokeWidth="1" fill="none" />
      <path d="M2 20 L12 2" stroke="oklch(0.78 0.12 78)" strokeWidth="0.5" />
      <path d="M20 2 L2 22" stroke="oklch(0.78 0.12 78)" strokeWidth="0.5" />
      <circle cx="2" cy="2" r="2" fill="oklch(0.78 0.12 78)" />
    </svg>
  )
}
