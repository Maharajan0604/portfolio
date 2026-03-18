"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, Download } from "lucide-react"

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact",    href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled]           = useState(false)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const { scrollY }                        = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40))

  useEffect(() => {
    const sections = navItems.map((item) => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
      >
        <motion.nav
          animate={{
            backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          }}
          className={cn(
            "relative flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500",
            scrolled
              ? "bg-[oklch(0.09_0.006_240/0.85)] border border-[oklch(0.80_0.15_200/0.12)] shadow-[0_8px_32px_oklch(0_0_0/0.5),0_0_0_1px_oklch(0.80_0.15_200/0.04)]"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative mr-3 flex-shrink-0 flex items-center gap-2 px-3 py-1.5"
          >
            <span className="font-mono text-[11px] tracking-widest transition-all duration-300 text-[oklch(0.80_0.15_200/0.50)] group-hover:text-[oklch(0.80_0.15_200/0.90)]">
              [
            </span>
            <span className="font-display text-sm font-bold tracking-[0.20em] uppercase text-[oklch(0.92_0.08_200)] group-hover:text-white transition-colors duration-300">
              MK
            </span>
            <span className="font-mono text-[11px] tracking-widest transition-all duration-300 text-[oklch(0.80_0.15_200/0.50)] group-hover:text-[oklch(0.80_0.15_200/0.90)]">
              ]
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-px bg-[oklch(0.80_0.15_200/0)] group-hover:bg-[oklch(0.80_0.15_200/0.8)] transition-all duration-300 blur-[1px]" />
          </button>

          {/* ── Separator ── */}
          <span className="hidden md:block w-px h-4 bg-[oklch(0.80_0.15_200/0.12)] mr-2" />

          {/* ── Desktop nav items ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-[10.5px] font-mono uppercase tracking-[0.18em] rounded-full transition-colors duration-300",
                    isActive
                      ? "text-[oklch(0.07_0.005_260)]"
                      : "text-[oklch(0.55_0.015_220)] hover:text-[oklch(0.90_0.005_220)]"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.90 0.10 195), oklch(0.80 0.15 200), oklch(0.65 0.16 205))",
                        boxShadow: "0 0 16px oklch(0.80 0.15 200 / 0.45)",
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* ── Separator ── */}
          <span className="hidden md:block w-px h-4 bg-[oklch(0.80_0.15_200/0.12)] ml-2" />

          {/* ── Resume CTA ── */}
          <a
            href="/Maharajan D Konar.pdf"
            download="Maharajan D Konar.pdf"
            className="hidden md:inline-flex items-center gap-2 ml-2 px-4 py-2 rounded-full text-[10.5px] font-mono uppercase tracking-[0.18em] border border-[oklch(0.80_0.15_200/0.25)] text-[oklch(0.80_0.15_200)] hover:border-[oklch(0.80_0.15_200/0.60)] hover:bg-[oklch(0.80_0.15_200/0.06)] hover:shadow-[0_0_16px_oklch(0.80_0.15_200/0.20)] transition-all duration-300"
          >
            <Download size={11} strokeWidth={2} />
            Resume
          </a>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-2 p-2 rounded-full transition-all duration-300 text-[oklch(0.55_0.015_220)] hover:text-[oklch(0.90_0.005_220)] border border-transparent hover:border-[oklch(0.80_0.15_200/0.20)]"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.div>
          </button>
        </motion.nav>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" }
            : { opacity: 0, y: -12, scale: 0.97, pointerEvents: "none" }
        }
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-[4.5rem] left-4 right-4 z-40 md:hidden rounded-2xl p-5 bg-[oklch(0.09_0.006_240/0.95)] border border-[oklch(0.80_0.15_200/0.12)] shadow-[0_16px_48px_oklch(0_0_0/0.6),0_0_0_1px_oklch(0.80_0.15_200/0.04)] backdrop-blur-2xl"
      >
        {/* Terminal header bar */}
        <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-[oklch(0.80_0.15_200/0.08)]">
          <span className="w-2 h-2 rounded-full bg-[oklch(0.60_0.22_25/0.7)]" />
          <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.18_80/0.7)]" />
          <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.18_150/0.7)]" />
          <span className="ml-2 font-mono text-[9px] tracking-widest text-[oklch(0.80_0.15_200/0.35)] uppercase">
            navigation
          </span>
        </div>

        <div className="flex flex-col gap-1">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <motion.button
                key={item.name}
                initial={false}
                animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "flex items-center gap-3 text-left px-4 py-3 rounded-xl text-[11px] font-mono uppercase tracking-[0.18em] transition-all duration-200",
                  isActive
                    ? "text-[oklch(0.80_0.15_200)] bg-[oklch(0.80_0.15_200/0.08)] border border-[oklch(0.80_0.15_200/0.15)]"
                    : "text-[oklch(0.50_0.015_220)] hover:text-[oklch(0.85_0.005_220)] hover:bg-[oklch(0.80_0.15_200/0.04)]"
                )}
              >
                <span className={cn(
                  "font-mono text-[10px]",
                  isActive ? "text-[oklch(0.80_0.15_200)]" : "text-[oklch(0.80_0.15_200/0.25)]"
                )}>
                  {isActive ? "▶" : "›"}
                </span>
                {item.name}
              </motion.button>
            )
          })}

          {/* ── Mobile Resume button ── */}
          <a
            href="/Maharajan D Konar.pdf"
            download="Maharajan D Konar.pdf"
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[11px] font-mono uppercase tracking-[0.18em] text-[oklch(0.80_0.15_200)] border border-[oklch(0.80_0.15_200/0.25)] bg-[oklch(0.80_0.15_200/0.05)] hover:bg-[oklch(0.80_0.15_200/0.10)] hover:border-[oklch(0.80_0.15_200/0.45)] transition-all duration-300"
          >
            <Download size={11} strokeWidth={2} />
            Download Resume
          </a>
        </div>
      </motion.div>
    </>
  )
}
