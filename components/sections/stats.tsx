"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 3, suffix: "+", label: "Years of Experience", sublabel: "Building production systems" },
  { value: 20, suffix: "+", label: "Projects Shipped", sublabel: "From MVP to scale" },
  { value: 100, suffix: "k+", label: "Lines of Code", sublabel: "Crafted with precision" },
  { value: 24, suffix: "/7", label: "Dedication", sublabel: "Committed to excellence" },
]

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const isDecimal = !Number.isInteger(value)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, value)
      setCount(parseFloat(current.toFixed(isDecimal ? 1 : 0)))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value, isDecimal])

  return (
    <span>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.78 0.12 78 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Divider */}
        <div className="divider-gold mb-16" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div
                className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light mb-2"
                style={{
                  background: "linear-gradient(135deg, oklch(0.92 0.06 85), oklch(0.78 0.12 78))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="font-sans font-medium text-foreground/80 text-sm mb-1">{stat.label}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mt-16" />
      </div>
    </section>
  )
}
