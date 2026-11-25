import { useEffect, useRef } from 'react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Hero() {
  const canvasRef = useRef(null)

  /* ── Particle grid background ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animId = null
    let dots = []
    let visible = true
    let t = 0

    const setup = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      dots = []
      const cols = Math.ceil(canvas.width / 60)
      const rows = Math.ceil(canvas.height / 60)
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          dots.push({
            x: c * 60,
            y: r * 60,
            baseAlpha: Math.random() * 0.25 + 0.05,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.01 + 0.005,
          })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.01
      dots.forEach((d) => {
        const alpha = reduceMotion
          ? d.baseAlpha * 0.6
          : d.baseAlpha * (0.5 + 0.5 * Math.sin(t * d.speed * 60 + d.phase))
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 174, 212, ${alpha})`
        ctx.fill()
      })
      animId = !reduceMotion && visible ? requestAnimationFrame(draw) : null
    }

    const onResize = () => { setup(); if (!animId) draw() }

    // Pausa a animação quando o hero sai da tela (economiza CPU/bateria)
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !animId) draw()
    })

    setup()
    draw()
    observer.observe(canvas)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
      window.removeEventListener('resize', onResize)
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
        aria-hidden="true"
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
            <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" aria-hidden="true" />
            <span className="text-sm font-mono text-white/60">
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
              {profile.shortName || profile.name}
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
              <GithubIcon size={16} />
              GitHub
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline text-base">
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex items-center gap-3 text-white/40 text-xs font-mono
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
