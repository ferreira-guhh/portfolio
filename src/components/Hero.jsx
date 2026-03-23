import { useEffect, useRef } from 'react'
import { profile } from '../data/portfolio'

export default function Hero() {
  const canvasRef = useRef(null)

  /* ── Particle grid background ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dots = []
    const COLS = Math.ceil(window.innerWidth / 60)
    const ROWS = Math.ceil(window.innerHeight / 60)

    for (let c = 0; c <= COLS; c++) {
      for (let r = 0; r <= ROWS; r++) {
        dots.push({
          x: c * 60,
          y: r * 60,
          baseAlpha: Math.random() * 0.25 + 0.05,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.01 + 0.005,
        })
      }
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.01
      dots.forEach((d) => {
        const alpha = d.baseAlpha * (0.5 + 0.5 * Math.sin(t * d.speed * 60 + d.phase))
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 174, 212, ${alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Glow orbs */}
      <div className="orb absolute top-1/4 left-1/4 w-80 h-80 bg-electric-500/20" />
      <div className="orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/15"
           style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full
                          bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm
                          animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
            <span className="text-sm font-mono text-white/50">
              disponível para estágio
            </span>
            <span className="text-white/20">·</span>
            <span className="text-sm font-mono text-electric-400">
              {profile.location}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold
                         leading-[1.05] tracking-tight mb-6
                         animate-fade-up [animation-delay:0.1s]">
            <span className="block text-white">
              Olá, sou
            </span>
            <span className="block bg-gradient-to-r from-electric-300 via-electric-400 to-violet-400
                             bg-clip-text text-transparent text-glow-electric">
              {profile.name}
            </span>
          </h1>

          {/* Role */}
          <p className="font-mono text-sm text-electric-400/80 mb-4
                        animate-fade-up [animation-delay:0.2s]">
            <span className="text-white/30">{'> '}</span>
            {profile.role}
          </p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed
                        max-w-xl mb-10 animate-fade-up [animation-delay:0.3s]">
            {profile.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:0.4s]">
            <a href="#projetos" className="btn-primary text-base">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
              </svg>
              Ver Projetos
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline text-base">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482
                         0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462
                         -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832
                         .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683
                         -.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004
                         1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699
                         1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336
                         -.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline text-base">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136
                         2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37
                         4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063
                         2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0
                         23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex items-center gap-3 text-white/25 text-xs font-mono
                          animate-fade-in [animation-delay:1s]">
            <div className="flex flex-col gap-1">
              <span className="w-4 h-px bg-white/20" />
              <span className="w-6 h-px bg-white/20" />
              <span className="w-4 h-px bg-white/20" />
            </div>
            scroll para explorar
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32
                      bg-gradient-to-t from-[#06060e] to-transparent pointer-events-none" />
    </section>
  )
}
