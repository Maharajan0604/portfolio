"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

// ... (keep your techIconMap and projects array here)

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 px-6 lg:px-8 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            // Selected Works
          </h2>
          <p className="text-4xl sm:text-6xl font-bold tracking-tighter">
            Digital <span className="text-muted-foreground">Solutions.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-[10px] font-bold uppercase tracking-wider text-primary">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={20} strokeWidth={1.5} /></a>
                    <a href={project.live} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><ExternalLink size={20} strokeWidth={1.5} /></a>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                  {project.description}
                </p>

                {/* Modern Tech Pill Style */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.05] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}