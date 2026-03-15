"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40)
  })

  useEffect(() => {
    const sections = navItems.map(item => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((href: string) => {
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
      >
        <motion.nav
          animate={{
            backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
          }}
          className={cn(
            "relative flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500",
            scrolled
              ? "bg-[oklch(0.08_0.005_260/0.85)] border border-[oklch(0.78_0.12_78/0.12)] shadow-[0_8px_32px_oklch(0_0_0/0.5)]"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-xl font-light tracking-widest text-gold mr-4 flex-shrink-0"
          >
            MK
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 rounded-full",
                    isActive ? "text-[oklch(0.06_0.003_260)]" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.92 0.06 85), oklch(0.78 0.12 78), oklch(0.65 0.11 72))",
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <a
            href="/Maharajan D Konar.pdf"
            download="Maharajan D Konar.pdf"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.18em] border border-[oklch(0.78_0.12_78/0.3)] text-[oklch(0.78_0.12_78)] hover:bg-[oklch(0.78_0.12_78/0.08)] transition-all duration-300 ml-2"
          >
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -16, pointerEvents: "none" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-24 left-4 right-4 z-40 rounded-2xl glass-gold p-6 md:hidden"
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item, i) => (
            <motion.button
              key={item.name}
              initial={false}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "text-left px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-[0.15em] transition-colors",
                activeSection === item.href.slice(1)
                  ? "text-[oklch(0.78_0.12_78)] bg-[oklch(0.78_0.12_78/0.08)]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </motion.button>
          ))}
          <a
            href="/Maharajan D Konar.pdf"
            download="Maharajan D Konar.pdf"
            className="mt-2 px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-[0.15em] text-[oklch(0.78_0.12_78)] bg-[oklch(0.78_0.12_78/0.08)] hover:bg-[oklch(0.78_0.12_78/0.12)] transition-colors text-center"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </>
  )
}
