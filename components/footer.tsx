"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Maharajan0604", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604", label: "LinkedIn" },
  { icon: Mail, href: "mailto:0604maharaja@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            Built by Maharajan Konar © {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
