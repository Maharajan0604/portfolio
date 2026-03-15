// Inside Experience component...
<div className="relative max-w-4xl mx-auto">
  {/* The Vertical Line */}
  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/10 to-transparent" />

  <div className="space-y-24">
    {experiences.map((exp, index) => (
      <motion.div
        key={exp.company}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="relative pl-12 group"
      >
        {/* Animated Point */}
        <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] group-hover:scale-150 transition-transform" />
        
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
          <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {exp.title}
          </h3>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            {exp.period}
          </span>
        </div>

        <div className="mb-6">
           <a href={exp.companyUrl} className="text-lg font-medium text-foreground/60 hover:text-foreground underline underline-offset-8 decoration-white/10">
            {exp.company}
           </a>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8 italic">
          &quot;{exp.description}&quot;
        </p>

        <ul className="grid grid-cols-1 gap-4">
          {exp.achievements.map((item, i) => (
            <li key={i} className="flex gap-4 text-sm text-muted-foreground/80 leading-relaxed border-l border-white/5 pl-4 hover:border-primary transition-colors">
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-8">
          {exp.technologies.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-tighter px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</div>