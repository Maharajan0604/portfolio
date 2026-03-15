"use client"

import { useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingTechIcons } from "@/components/floating-tech-icons"

const socialLinks = [
  { icon: Github, href: "https://github.com/Maharajan0604", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604", label: "LinkedIn" },
  { icon: Mail, href: "mailto:0604maharaja@gmail.com", label: "Email" },
]

// Magnetic Hook for Premium Interaction
function useMagnetic() {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0, width: 0, height: 0 }
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return { ref, position, handleMouseMove, handleMouseLeave }
}

export function Hero() {
  const magBtn1 = useMagnetic()
  const magBtn2 = useMagnetic()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-6 overflow-hidden bg-transparent">
      <FloatingTechIcons />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 text-balance"
        >
          Building Digital <br />
          <span className="text-primary italic font-serif pr-2">Experiences</span> with AI.
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I&apos;m <span className="text-foreground font-semibold">Maharajan Konar</span>. 
          A CS Engineer specializing in Full Stack and Cloud, turning complex data into intuitive human interfaces.
        </motion.p>

        {/* Magnetic Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
        >
          <motion.div
            ref={magBtn1.ref}
            onMouseMove={magBtn1.handleMouseMove}
            onMouseLeave={magBtn1.handleMouseLeave}
            animate={{ x: magBtn1.position.x, y: magBtn1.position.y }}
          >
            <Button
              size="lg"
              className="h-14 px-10 rounded-full bg-foreground text-background hover:opacity-90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore My Work
            </Button>
          </motion.div>

          <motion.div
            ref={magBtn2.ref}
            onMouseMove={magBtn2.handleMouseMove}
            onMouseLeave={magBtn2.handleMouseLeave}
            animate={{ x: magBtn2.position.x, y: magBtn2.position.y }}
          >
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 rounded-full border-white/10 hover:bg-white/5 transition-all backdrop-blur-sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              <link.icon size={22} strokeWidth={1.5} />
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}