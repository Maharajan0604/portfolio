"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let W = 0, H = 0

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Spawn particles
    const spawn = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      size: Math.random() * 1.5 + 0.3,
      opacity: 0,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    })

    for (let i = 0; i < 60; i++) {
      const p = spawn()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Deep vignette
      const vignette = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W, H) * 0.7)
      vignette.addColorStop(0, "transparent")
      vignette.addColorStop(1, "oklch(0.04 0.002 260 / 0.6)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, W, H)

      // Gold orb top-right
      const orb1 = ctx.createRadialGradient(W * 0.85, H * 0.1, 0, W * 0.85, H * 0.1, W * 0.35)
      orb1.addColorStop(0, "oklch(0.78 0.12 78 / 0.06)")
      orb1.addColorStop(1, "transparent")
      ctx.fillStyle = orb1
      ctx.fillRect(0, 0, W, H)

      // Gold orb bottom-left
      const orb2 = ctx.createRadialGradient(W * 0.1, H * 0.85, 0, W * 0.1, H * 0.85, W * 0.3)
      orb2.addColorStop(0, "oklch(0.78 0.12 78 / 0.04)")
      orb2.addColorStop(1, "transparent")
      ctx.fillStyle = orb2
      ctx.fillRect(0, 0, W, H)

      // Particles
      particles.forEach((p, i) => {
        p.life++
        p.x += p.vx
        p.y += p.vy

        const progress = p.life / p.maxLife
        p.opacity = progress < 0.2
          ? progress / 0.2
          : progress > 0.8
          ? 1 - (progress - 0.8) / 0.2
          : 1

        if (p.life >= p.maxLife) particles[i] = spawn()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `oklch(0.82 0.10 78 / ${p.opacity * 0.35})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
