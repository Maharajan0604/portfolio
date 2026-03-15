"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: Briefcase, title: "Final Year", description: "CS Engineering Student" },
  { icon: GraduationCap, title: "Full Stack", description: "Specialized in Next.js & AI" },
  { icon: Award, title: "10+ Projects", description: "From AI to Web Platforms" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6">// The Narrative</h2>
            <p className="text-4xl sm:text-6xl font-bold tracking-tighter leading-[1.1] mb-10">
              Transforming <span className="text-muted-foreground italic font-serif">complex data</span> into human experiences.
            </p>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              <p>
                Based in <span className="text-foreground font-medium">Mumbai</span>, I am a final-year Computer Science engineer obsessed with the intersection of <span className="text-primary font-mono">AI</span> and <span className="text-primary font-mono">Web UI</span>.
              </p>
              <p>
                Whether it&apos;s building an AI-powered resume analyzer or architecting an Indian Census database query engine, I focus on performance, accessibility, and high-fidelity design.
              </p>
            </div>

            <Button
              variant="outline"
              className="mt-12 h-14 px-8 rounded-full border-white/10 hover:bg-white/5 gap-3 group transition-all"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                Download Curriculum Vitae
              </a>
            </Button>
          </motion.div>

          {/* Highlights Bento Grid */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group flex items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}