"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingTechIcons } from "@/components/floating-tech-icons"

const socialLinks = [
  { icon: Github, href: "https://github.com/Maharajan0604", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604", label: "LinkedIn" },
  { icon: Mail, href: "mailto:0604maharaja@gmail.com", label: "Email" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <FloatingTechIcons />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance"
        >
          {"Hi, I'm "}
          <span className="text-primary">Maharajan Konar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl sm:text-2xl font-medium text-muted-foreground mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty"
        >
          I build accessible, pixel-perfect digital experiences for the web. 
          Passionate about crafting clean code and beautiful interfaces that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="min-w-[160px] bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[160px] border-border hover:bg-secondary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              aria-label={link.label}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
