import { useEffect, useRef, useState } from 'react'
import { dashboardStats } from '../data/portfolio'

/* Animated counter */
function Counter({ target, suffix = '', duration = 1800 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(ease * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="stat-number">
      {value}{suffix}
    </span>
  )
}

/* Skill donut simulation */
const frontendSkills = [
  { name: 'React',    pct: 42, color: '#00aed4' },
  { name: 'Tailwind', pct: 28, color: '#7c5cfc' },
  { name: 'TS',       pct: 16, color: '#14b8a6' },
  { name: 'Outros',   pct: 14, color: '#ffffff18' },
]

/* Activity grid (mock) */
function ActivityGrid() {
  const weeks = 26
  const days  = 7
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const r = Math.random()
    if (r < 0.35) return 0
    if (r < 0.60) return 1
    if (r < 0.80) return 2
    if (r < 0.92) return 3
    return 4
  })

  const colorLevel = (l) => {
    if (l === 0) return 'bg-white/[0.04]'
    if (l === 1) return 'bg-electric-600/30'
    if (l === 2) return 'bg-electric-500/50'
    if (l === 3) return 'bg-electric-400/75'
    return 'bg-electric-400'
  }

  return (
    <div className="flex gap-1 flex-wrap" style={{ maxWidth: '100%' }}>
      {cells.map((level, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-sm ${colorLevel(level)} transition-opacity hover:opacity-80`}
          title={`${level} contributions`}
        />
      ))}
    </div>
  )
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-28 relative">
      {/* bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-500/[0.025] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/20">04. </span>dashboard
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Em números
            <span className="block text-white/30">a jornada até aqui</span>
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {dashboardStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} dashboard-card text-center`}
            >
              <p className="text-3xl md:text-4xl font-display font-bold mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-mono text-white/35 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom panels */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Activity */}
          <div className="reveal md:col-span-2 dashboard-card">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-mono text-white/50">atividade de código</p>
              <span className="text-xs font-mono text-electric-400">últimos 6 meses</span>
            </div>
            <ActivityGrid />
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xs text-white/25 font-mono">menos</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div key={l}
                     className={`w-2.5 h-2.5 rounded-sm ${
                       ['bg-white/[0.04]','bg-electric-600/30','bg-electric-500/50','bg-electric-400/75','bg-electric-400'][l]
                     }`} />
              ))}
              <span className="text-xs text-white/25 font-mono">mais</span>
            </div>
          </div>

          {/* Focus split */}
          <div className="reveal reveal-delay-2 dashboard-card">
            <p className="text-sm font-mono text-white/50 mb-4">foco técnico</p>
            <div className="space-y-3">
              {frontendSkills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs font-mono text-white/45 mb-1">
                    <span>{s.name}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${s.pct}%`, background: s.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06]">
              <p className="text-xs font-mono text-white/25 mb-2">stack principal</p>
              <p className="font-display font-bold text-white text-lg">Frontend</p>
              <p className="text-xs text-white/35">React · Tailwind · Vite</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal mt-8 dashboard-card">
          <p className="text-sm font-mono text-white/50 mb-6">linha do tempo</p>
          <div className="relative pl-6">
            <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-electric-500/50 via-violet-500/30 to-transparent" />

            {[
              { date: '2026 Q1', event: 'Entrega do sistema para o Bazar Ana Paula e avanços práticos no 3º semestre de Ciência da Computação na UNIP.', color: '#00aed4' },
              { date: '2025 Q4', event: 'Desenvolvimento do catálogo do Agromoreli e arquitetura de um e-commerce funcional com carrinho.',  color: '#7c5cfc' },
              { date: '2025 Q3', event: 'Construção do Vigia de Preço com scraping automatizado e integrações de API.',      color: '#14b8a6' },
              { date: '2025 Q2', event: 'Criação do Portal de Jogos com IA local (Jogo da Velha) para solidificar lógica em JavaScript puro.',      color: '#ec4899' },
              { date: '2025 Q1',    event: 'Primeiros projetos estruturais com React e Tailwind, unindo estética e responsividade.',           color: '#64748b' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-5 last:mb-0 group">
                <div className="timeline-dot mt-1 flex-shrink-0"
                     style={{ background: item.color, boxShadow: `0 0 0 3px ${item.color}30, 0 0 12px ${item.color}50` }} />
                <div>
                  <p className="text-xs font-mono text-white/30 mb-0.5">{item.date}</p>
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
