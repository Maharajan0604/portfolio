"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 3,   suffix: "+",   label: "Years of Experience", sublabel: "Building production systems" },
  { value: 20,  suffix: "+",   label: "Projects Shipped",    sublabel: "From MVP to scale"           },
  { value: 100, suffix: "k+",  label: "Lines of Code",       sublabel: "Crafted with precision"      },
  { value: 24,  suffix: "/7",  label: "Dedication",          sublabel: "Committed to excellence"     },
]

/* ── Animated counter ──────────────────────────────── */
function Counter({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps    = 60
    const increment = value / steps
    let current = 0
    let step    = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, value)
      setCount(Math.round(current))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

/* ── Main component ────────────────────────────────── */
export function Stats() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* ── Ambient glow ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.80 0.15 200 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">

        {/* Top divider */}
        <div className="divider-cyan mb-16" />

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] }}
              className="group relative text-center rounded-2xl p-6
                         border border-[oklch(0.80_0.15_200/0.08)]
                         bg-[oklch(0.10_0.008_240/0.40)]
                         hover:border-[oklch(0.80_0.15_200/0.22)]
                         hover:bg-[oklch(0.10_0.008_240/0.65)]
                         hover:shadow-[0_0_32px_oklch(0.80_0.15_200/0.07)]
                         transition-all duration-400 cursor-default"
            >
              {/* Corner index */}
              <span className="absolute top-3 right-4 font-mono text-[9px]
                               text-[oklch(0.80_0.15_200/0.18)] tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Number */}
              <div
                className="font-display font-700 leading-none mb-3 tabular-nums"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  background:
                    "linear-gradient(135deg, oklch(0.92 0.08 190), oklch(0.80 0.15 200))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>

              {/* Label */}
              <p className="font-sans font-500 text-[oklch(0.72_0.008_220)] text-[0.85rem] mb-1">
                {stat.label}
              </p>

              {/* Sub-label */}
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em]
                            text-[oklch(0.40_0.010_220)]">
                {stat.sublabel}
              </p>

              {/* Bottom glow line on hover */}
              <div className="absolute bottom-0 inset-x-8 h-[1px] rounded-full
                              bg-[oklch(0.80_0.15_200/0)] group-hover:bg-[oklch(0.80_0.15_200/0.40)]
                              transition-all duration-400" />
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="divider-cyan mt-16" />
      </div>
    </section>
  )
}
