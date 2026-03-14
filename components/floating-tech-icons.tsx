"use client"

import { motion } from "framer-motion"
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGit
} from "react-icons/si"

const techIcons = [
  { Icon: SiReact, color: "#61DAFB", delay: 0 },
  { Icon: SiTypescript, color: "#3178C6", delay: 0.5 },
  { Icon: SiNextdotjs, color: "#ffffff", delay: 1 },
  { Icon: SiTailwindcss, color: "#06B6D4", delay: 1.5 },
  { Icon: SiNodedotjs, color: "#339933", delay: 2 },
  { Icon: SiPython, color: "#3776AB", delay: 2.5 },
  { Icon: SiDocker, color: "#2496ED", delay: 3 },
  { Icon: SiGit, color: "#F05032", delay: 3.5 },
]

const positions = [
  { x: "10%", y: "20%" },
  { x: "85%", y: "15%" },
  { x: "5%", y: "70%" },
  { x: "90%", y: "65%" },
  { x: "20%", y: "45%" },
  { x: "75%", y: "40%" },
  { x: "15%", y: "85%" },
  { x: "80%", y: "80%" },
]

export function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 hidden md:block"
          style={{
            left: positions[index].x,
            top: positions[index].y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: delay * 0.3, duration: 0.5 },
            scale: { delay: delay * 0.3, duration: 0.5 },
            y: { delay: delay * 0.3, duration: 4 + index, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Icon size={40} style={{ color }} />
        </motion.div>
      ))}
    </div>
  )
}
