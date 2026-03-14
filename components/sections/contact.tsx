"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  { icon: Github, href: "https://github.com/Maharajan0604", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/maharajan0604", label: "LinkedIn" },
  { icon: Mail, href: "mailto:0604maharaja@gmail.com", label: "Email" },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"Let's work together"}
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Reach me at 0604maharaja@gmail.com or +91 81048 41870. Located in Mumbai, ready for freelance or full-time roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-card/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-card/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:pl-12"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Connect with me
              </h3>
              <p className="text-muted-foreground mb-6">
                Mumbai-based Full Stack Developer.
              </p>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {link.href.includes("@") ? "0604maharaja@gmail.com" : `@${link.href.split('/').pop()}`}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
