"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/Maharajan0604", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604", label: "LinkedIn" },
  { icon: Mail, href: "mailto:0604maharaja@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 px-6 overflow-hidden">
      {/* Top divider */}
      <div className="divider-gold mb-12" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-4xl font-light text-gold mb-3 tracking-widest">MK</div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Full Stack Engineer crafting exceptional digital experiences with precision and purpose.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-gold text-sm text-muted-foreground hover:text-[oklch(0.78_0.12_78)] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <p className="section-label mb-5">Connect</p>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gold inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-[oklch(0.78_0.12_78)] transition-colors duration-300"
                >
                  <s.icon size={15} strokeWidth={1.5} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mb-8" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Maharajan Konar — Crafted with precision
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-[oklch(0.78_0.12_78)] transition-colors duration-300"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  )
}
