"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp, Terminal } from "lucide-react"

const links = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
]

const socials = [
  { icon: Github,   href: "https://github.com/Maharajan0604",          label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604",  label: "LinkedIn" },
  { icon: Mail,     href: "mailto:0604maharaja@gmail.com",              label: "Email"    },
]

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative pt-16 pb-10 px-6 overflow-hidden">

      {/* Top divider */}
      <div className="divider-cyan mb-14" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* ── Brand ── */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[11px] text-[oklch(0.80_0.15_200/0.45)]">[</span>
              <span
                className="font-display text-3xl font-700 tracking-[0.16em] uppercase"
                style={{
                  background: "linear-gradient(135deg, oklch(0.90 0.08 190), oklch(0.80 0.15 200))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MK
              </span>
              <span className="font-mono text-[11px] text-[oklch(0.80_0.15_200/0.45)]">]</span>
            </div>

            <p className="text-[0.85rem] text-[oklch(0.45_0.012_220)] font-light
                          leading-relaxed max-w-[220px]">
              Full Stack Engineer crafting exceptional digital experiences with
              precision and purpose.
            </p>

            {/* Status badge */}
            <div className="flex items-center gap-2 mt-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full
                                 rounded-full bg-[oklch(0.78_0.18_150)] opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5
                                 bg-[oklch(0.78_0.18_150)]" />
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.18em]
                               text-[oklch(0.50_0.012_220)]">
                Open to work
              </span>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 text-[0.85rem]
                               text-[oklch(0.45_0.012_220)]
                               hover:text-[oklch(0.80_0.15_200)]
                               transition-colors duration-300"
                  >
                    <span className="font-mono text-[10px]
                                     text-[oklch(0.80_0.15_200/0.20)]
                                     group-hover:text-[oklch(0.80_0.15_200/0.70)]
                                     transition-colors duration-300">
                      ›
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect ── */}
          <div>
            <p className="section-label mb-5">Connect</p>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[0.85rem]
                             text-[oklch(0.45_0.012_220)]
                             hover:text-[oklch(0.80_0.15_200)]
                             transition-colors duration-300"
                >
                  <span className="p-1.5 rounded-lg border border-[oklch(0.80_0.15_200/0.10)]
                                   text-[oklch(0.80_0.15_200/0.40)]
                                   group-hover:border-[oklch(0.80_0.15_200/0.35)]
                                   group-hover:text-[oklch(0.80_0.15_200)]
                                   group-hover:bg-[oklch(0.80_0.15_200/0.06)]
                                   transition-all duration-300">
                    <s.icon size={13} strokeWidth={1.5} />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>

            {/* Built with line */}
            <div className="mt-8 flex items-center gap-2">
              <Terminal size={11} className="text-[oklch(0.80_0.15_200/0.35)]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em]
                               text-[oklch(0.35_0.008_220)]">
                Built with Next.js · Framer Motion
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-cyan mb-7" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]
                        text-[oklch(0.35_0.008_220)]">
            © {new Date().getFullYear()} Maharajan Konar — Crafted with precision
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 font-mono text-[10px]
                       uppercase tracking-[0.18em]
                       text-[oklch(0.40_0.010_220)]
                       hover:text-[oklch(0.80_0.15_200)]
                       transition-colors duration-300"
          >
            Back to top
            <span className="p-1 rounded border border-[oklch(0.80_0.15_200/0.12)]
                             group-hover:border-[oklch(0.80_0.15_200/0.40)]
                             group-hover:bg-[oklch(0.80_0.15_200/0.06)]
                             group-hover:shadow-[0_0_10px_oklch(0.80_0.15_200/0.15)]
                             transition-all duration-300">
              <ArrowUp
                size={11}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
