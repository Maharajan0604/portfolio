// Update the Desktop Navigation section in navbar.tsx
<div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1.5 rounded-full backdrop-blur-xl">
  {navItems.map((item) => (
    <button
      key={item.name}
      onClick={() => scrollToSection(item.href)}
      className={cn(
        "relative px-5 py-2 text-xs font-medium uppercase tracking-widest transition-colors rounded-full",
        activeSection === item.href.slice(1) ? "text-background" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <span className="relative z-10">{item.name}</span>
      {activeSection === item.href.slice(1) && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-primary rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  ))}
</div>