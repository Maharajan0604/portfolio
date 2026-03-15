"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    // Simulate — replace with real email service (Resend, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus("sent")
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setStatus("idle"), 4000)
  }

  const inputClass = (field: string) => `
    w-full bg-transparent border-b py-3 pr-4 text-sm font-sans font-light text-foreground
    placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-500
    ${focused === field
      ? "border-[oklch(0.78_0.12_78/0.7)]"
      : "border-[oklch(0.78_0.12_78/0.15)] hover:border-[oklch(0.78_0.12_78/0.3)]"
    }
  `

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center bottom, oklch(0.78 0.12 78 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-4">06 — Contact</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
            Let&apos;s build something
            <br />
            <em className="text-gold not-italic">exceptional</em>
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-md mx-auto">
            Open to senior roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — form */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="section-label block mb-3">Your Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("name")}
                  required
                />
              </div>
              <div>
                <label className="section-label block mb-3">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("email")}
                  required
                />
              </div>
              <div>
                <label className="section-label block mb-3">Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className={`${inputClass("message")} resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="group relative w-full h-14 rounded-full font-sans text-sm font-medium uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 disabled:opacity-70"
                style={{
                  background: status === "sent"
                    ? "oklch(0.65 0.15 150)"
                    : "linear-gradient(135deg, oklch(0.92 0.06 85), oklch(0.78 0.12 78), oklch(0.65 0.11 72))",
                  color: "oklch(0.06 0.003 260)",
                  boxShadow: "0 0 30px oklch(0.78 0.12 78 / 0.25), 0 4px 16px oklch(0 0 0 / 0.4)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    "Message Sent ✓"
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right — info */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-10"
          >
            {/* Direct contact */}
            <div>
              <p className="section-label mb-6">Direct Contact</p>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "0604maharaja@gmail.com", href: "mailto:0604maharaja@gmail.com" },
                  { icon: Github, label: "GitHub", value: "github.com/Maharajan0604", href: "https://github.com/Maharajan0604" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/maharajan0604", href: "https://www.linkedin.com/in/maharajan0604" },
                  { icon: MapPin, label: "Location", value: "India (Remote-first)", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:border-[oklch(0.78_0.12_78/0.5)]"
                      style={{
                        background: "oklch(0.78 0.12 78 / 0.05)",
                        borderColor: "oklch(0.78 0.12 78 / 0.15)",
                        color: "oklch(0.78 0.12 78)",
                      }}
                    >
                      <item.icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-gold text-sm text-foreground/80 hover:text-[oklch(0.78_0.12_78)] transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-foreground/80">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-gold rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.78_0.12_78)] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.78_0.12_78)]" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.78_0.12_78)]">
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Open to senior engineering roles, technical consulting, and ambitious freelance projects. Response time usually within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
