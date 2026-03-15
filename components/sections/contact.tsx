// Inside Contact component...
<div className="grid lg:grid-cols-2 gap-20 items-stretch">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="flex flex-col justify-center"
  >
    <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6">// Inquiries</h2>
    <p className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8">Let&apos;s build the <span className="text-muted-foreground">future.</span></p>
    
    <div className="space-y-10">
      <div className="group">
        <p className="text-xs font-mono uppercase text-muted-foreground mb-2 group-hover:text-primary transition-colors">Digital Mail</p>
        <a href="mailto:0604maharaja@gmail.com" className="text-2xl font-medium tracking-tight hover:underline underline-offset-8 decoration-primary/30 transition-all">
          0604maharaja@gmail.com
        </a>
      </div>
      
      <div className="group">
        <p className="text-xs font-mono uppercase text-muted-foreground mb-2 group-hover:text-primary transition-colors">Direct Line</p>
        <p className="text-2xl font-medium tracking-tight">+91 81048 41870</p>
      </div>
      
      <div className="flex gap-6 pt-4">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} className="p-4 rounded-full bg-white/5 border border-white/5 hover:bg-primary hover:text-background transition-all duration-500">
            <link.icon size={20} strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl"
  >
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-4">Full Name</label>
        <Input id="name" placeholder="Maharajan Konar" className="h-14 bg-white/5 border-white/5 rounded-2xl focus:ring-1 focus:ring-primary px-6" />
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-4">Email Address</label>
        <Input id="email" type="email" placeholder="maharaja@example.com" className="h-14 bg-white/5 border-white/5 rounded-2xl focus:ring-1 focus:ring-primary px-6" />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground ml-4">Message</label>
        <Textarea id="message" placeholder="Project details..." rows={4} className="bg-white/5 border-white/5 rounded-2xl focus:ring-1 focus:ring-primary p-6 resize-none" />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-2xl bg-primary text-background font-bold tracking-widest uppercase text-xs hover:opacity-90 transition-all shadow-lg shadow-primary/20">
        {isSubmitting ? "Dispatching..." : "Send Message"}
      </Button>
    </form>
  </motion.div>
</div>