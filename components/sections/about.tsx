"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Briefcase,
    title: "3+ Years",
    description: "Professional Experience",
  },
  {
    icon: GraduationCap,
    title: "CS Degree",
    description: "Computer Science",
  },
  {
    icon: Award,
    title: "10+ Projects",
    description: "Successfully Delivered",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">
            Get to know me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a Full Stack Developer based in Mumbai with hands-on experience in building performant and maintainable web applications.
              </p>
              <p>
                I specialize in React, Next.js, TypeScript, and Node.js. I enjoy translating product ideas into clean UI and stable backend services.
              </p>
              <p>
                Outside work, I focus on continuous learning and contributing to personal projects while valuing practical engineering and collaboration.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                variant="outline"
                className="gap-2 border-border hover:bg-secondary"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
