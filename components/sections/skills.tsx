"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
// ... (keep your Si icons imports)

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">
            // Technical Proficiency
          </h2>
          <p className="text-4xl sm:text-6xl font-bold tracking-tighter">
            My <span className="text-muted-foreground">Expertise.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className="bg-[#030303] p-8 group">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-10 pb-2 border-b border-white/5 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all cursor-default"
                  >
                    <skill.icon style={{ color: skill.color }} size={20} className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
                    <span className="text-[13px] font-medium text-foreground/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}