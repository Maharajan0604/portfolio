"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, Folder, Coffee, Users } from "lucide-react"

const stats = [
  {
    icon: Folder,
    value: 15,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Code2,
    value: 25,
    suffix: "+",
    label: "Technologies Used",
  },
  {
    icon: Users,
    value: 3,
    suffix: "+",
    label: "Years Experience",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  })
  
  const rounded = useTransform(spring, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            Achievements
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">
            By the numbers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
