"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "0604maharaja@gmail.com",
    href: "mailto:0604maharaja@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Maharajan0604",
    href: "https://github.com/Maharajan0604",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/maharajan0604",
    href: "https://www.linkedin.com/in/maharajan0604",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Remote-first",
    href: null,
  },
]

/* ── Styled input ──────────────────────────────────── */
function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="group/field space-y-2">
      <label className="block font-mono text-[10px] uppercase tracking-[0.22em]
                        text-[oklch(0.80_0.15_200/0.55)]">
        {label}
      </label>
      {children}
    </div>
  )
}

/* ── Main component ────────────────────────────────── */
export function Contact() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  const [form,    setForm]    = useState({ name: "", email: "", message: "" })
  const [status,  setStatus]  = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    // Replace with Resend / EmailJS / your API
    await new Promise((r) => setTimeout(r, 1500))
    setStatus("sent")
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setStatus("idle"), 5000)
  }

  const inputBase =
    "w-full bg-transparent py-3 text-[0.875rem] font-sans text-[oklch(0.88_0.005_220)] " +
    "placeholder:text-[oklch(0.35_0.008_220)] focus:outline-none transition-all duration-400 " +
    "border-b "

  const inputBorder = (field: string) =>
    focused === field
      ? "border-[oklch(0.80_0.15_200/0.70)]"
      : "border-[oklch(0.80_0.15_200/0.14)] hover:border-[oklch(0.80_0.15_200/0.30)]"

  const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.85, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">

      {/* ── Bottom ambient glow ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2
                   w-[700px] h-[280px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, oklch(0.80 0.15 200 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <p className="section-label mb-5">06 — Contact</p>
          <h2
            className="font-display font-800 leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            <span className="text-[oklch(0.88_0.005_220)]">Let&apos;s build something </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0.08 190), oklch(0.80 0.15 200), oklch(0.65 0.16 210))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              exceptional.
            </span>
          </h2>
          <p className="text-[oklch(0.48_0.012_220)] font-light mt-5 max-w-md mx-auto text-[0.92rem]">
            Open to engineering roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        {/* ── Two-col layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

          {/* ── Left: Form ── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Terminal header */}
            <div className="terminal-box pt-9 pb-7 px-7">
              <div className="font-mono text-[10px] text-[oklch(0.80_0.15_200/0.40)]
                              uppercase tracking-widest mb-6">
                $ send_message --to maharajan
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">
                <Field label="Your Name">
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${inputBorder("name")}`}
                    required
                  />
                </Field>

                <Field label="Email Address">
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${inputBorder("email")}`}
                    required
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    className={`${inputBase} ${inputBorder("message")} resize-none`}
                    required
                  />
                </Field>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className="relative w-full h-13 rounded-xl font-mono text-[11px]
                             uppercase tracking-[0.18em] overflow-hidden
                             transition-all duration-300 disabled:opacity-70"
                  style={{
                    background:
                      status === "sent"
                        ? "linear-gradient(135deg, oklch(0.65 0.18 150), oklch(0.55 0.16 150))"
                        : status === "error"
                        ? "oklch(0.50 0.20 25)"
                        : "linear-gradient(135deg, oklch(0.88 0.12 195), oklch(0.80 0.15 200), oklch(0.65 0.16 208))",
                    color: "oklch(0.07 0.005 260)",
                    boxShadow:
                      status === "idle"
                        ? "0 0 28px oklch(0.80 0.15 200 / 0.28), 0 4px 20px oklch(0 0 0 / 0.35)"
                        : "none",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "sending" ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-current
                                         border-t-transparent animate-spin" />
                        Transmitting...
                      </>
                    ) : status === "sent" ? (
                      <>
                        <CheckCircle size={14} strokeWidth={2} />
                        Message Sent
                      </>
                    ) : status === "error" ? (
                      <>
                        <AlertCircle size={14} strokeWidth={2} />
                        Try Again
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={13} strokeWidth={2} />
                      </>
                    )}
                  </span>

                  {/* Shimmer on idle */}
                  {status === "idle" && (
                    <motion.span
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, oklch(0.97 0.005 220 / 0.20) 50%, transparent 100%)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ── Right: Contact info ── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-center gap-10"
          >
            {/* Contact list */}
            <div>
              <p className="section-label mb-7">Direct Contact</p>
              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group/item">
                    {/* Icon bubble */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                 border border-[oklch(0.80_0.15_200/0.14)]
                                 bg-[oklch(0.80_0.15_200/0.04)]
                                 text-[oklch(0.80_0.15_200/0.55)]
                                 group-hover/item:border-[oklch(0.80_0.15_200/0.38)]
                                 group-hover/item:bg-[oklch(0.80_0.15_200/0.08)]
                                 group-hover/item:text-[oklch(0.80_0.15_200)]
                                 group-hover/item:shadow-[0_0_14px_oklch(0.80_0.15_200/0.18)]
                                 transition-all duration-300"
                    >
                      <item.icon size={15} strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[9.5px] uppercase tracking-[0.16em]
                                    text-[oklch(0.40_0.010_220)] mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[0.85rem] text-[oklch(0.65_0.010_220)]
                                     hover:text-[oklch(0.80_0.15_200)] transition-colors duration-300
                                     truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[0.85rem] text-[oklch(0.65_0.010_220)]">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="rounded-2xl p-6
                         border border-[oklch(0.80_0.15_200/0.14)]
                         bg-[oklch(0.80_0.15_200/0.03)]
                         hover:border-[oklch(0.80_0.15_200/0.28)]
                         hover:bg-[oklch(0.80_0.15_200/0.05)]
                         transition-all duration-400"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full
                                   rounded-full bg-[oklch(0.78_0.18_150)] opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2
                                   bg-[oklch(0.78_0.18_150)]" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.20em]
                                 text-[oklch(0.78_0.18_150/0.80)]">
                  Currently Available
                </span>
              </div>
              <p className="text-[0.85rem] text-[oklch(0.50_0.012_220)] leading-relaxed">
                Open to senior engineering roles, technical consulting, and ambitious
                freelance projects. Response time usually within{" "}
                <span className="text-[oklch(0.80_0.15_200)] font-medium">24 hours</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
