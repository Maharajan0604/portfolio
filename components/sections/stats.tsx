// Inside Stats component return...
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
  {stats.map((stat, index) => (
    <motion.div
      key={stat.label}
      className="bg-[#030303] p-12 flex flex-col items-center justify-center group hover:bg-white/[0.02] transition-colors"
    >
      <stat.icon className="text-primary/40 group-hover:text-primary transition-colors mb-6" size={32} strokeWidth={1} />
      <div className="text-5xl font-bold tracking-tighter mb-2">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground italic">
        {stat.label}
      </p>
    </motion.div>
  ))}
</div>