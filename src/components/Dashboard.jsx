import { useEffect, useRef, useState } from 'react'
import { projects, extraProjects, skills, timeline, githubUser, githubHiddenRepos } from '../data/portfolio'

/* ── Contador animado ── */
function Counter({ target, suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || target == null) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setValue(target); return }

    let raf
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setValue(Math.round((1 - Math.pow(1 - progress, 3)) * target))
          if (progress < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); cancelAnimationFrame(raf) }
  }, [target, duration])

  return (
    <span ref={ref} className="stat-number">
      {target == null ? '—' : `${value}${suffix}`}
    </span>
  )
}

/* ── Dados reais do GitHub (API pública, sem token) ── */
const CACHE_KEY = `gh-repos-${githubUser}`
const CACHE_MS = 30 * 60 * 1000

function useGithubRepos() {
  const [state, setState] = useState({ repos: null, error: false })

  useEffect(() => {
    let cancelled = false
    try {
      const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null')
      if (cached && Date.now() - cached.at < CACHE_MS) {
        setState({ repos: cached.repos, error: false })
        return
      }
    } catch { /* sem storage: segue para a API */ }

    fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=pushed`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        const repos = data
          .filter((r) => !r.fork && !r.archived && !githubHiddenRepos.includes(r.name))
          .map(({ name, html_url, description, language, pushed_at }) => ({ name, html_url, description, language, pushed_at }))
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos })) } catch { /* ignora */ }
        if (!cancelled) setState({ repos, error: false })
      })
      .catch(() => { if (!cancelled) setState({ repos: null, error: true }) })

    return () => { cancelled = true }
  }, [])

  return state
}

const langColors = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Java: '#b07219',
  HTML: '#e34c26', CSS: '#663399', 'Jupyter Notebook': '#DA5B0B', SQL: '#e38c00',
}

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000)
  if (days < 1) return 'hoje'
  if (days === 1) return 'ontem'
  if (days < 30) return `há ${days} dias`
  const months = Math.floor(days / 30)
  if (months < 12) return months === 1 ? 'há 1 mês' : `há ${months} meses`
  const years = Math.floor(months / 12)
  return years === 1 ? 'há 1 ano' : `há ${years} anos`
}

/* ── Números calculados a partir do próprio portfólio ── */
const allProjects = [...projects, ...extraProjects]
const techCount = new Set([
  ...allProjects.flatMap((p) => p.tags),
  ...Object.values(skills).flat().map((s) => s.name),
].map((t) => t.toLowerCase())).size

export default function Dashboard() {
  const { repos, error } = useGithubRepos()

  const languages = repos
    ? Object.entries(
        repos.reduce((acc, r) => {
          if (r.language) acc[r.language] = (acc[r.language] || 0) + 1
          return acc
        }, {})
      ).sort((a, b) => b[1] - a[1]).slice(0, 5)
    : []
  const maxLang = languages[0]?.[1] || 1

  const stats = [
    { label: 'Projetos no portfólio', value: allProjects.length },
    { label: 'Tecnologias utilizadas', value: techCount },
    { label: 'Repositórios públicos', value: repos ? repos.length : null },
    { label: 'Linguagens no GitHub', value: repos ? languages.length : null },
  ]

  return (
    <section id="dashboard" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-500/[0.025] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/40">04. </span>dashboard
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Em números
            <span className="block text-white/40">a jornada até aqui</span>
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`reveal reveal-delay-${i + 1} dashboard-card text-center`}>
              <p className="text-3xl md:text-4xl font-display font-bold mb-1">
                <Counter target={stat.value} />
              </p>
              <p className="text-xs font-mono text-white/50 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Atividade recente (real) */}
          <div className="reveal md:col-span-2 dashboard-card min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-mono text-white/60">atividade recente no GitHub</p>
              <span className="flex items-center gap-1.5 text-xs font-mono text-electric-400">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400" aria-hidden="true" />
                dados reais
              </span>
            </div>

            {error && (
              <p className="text-sm text-white/55">
                Não foi possível carregar agora.{' '}
                <a href={`https://github.com/${githubUser}`} target="_blank" rel="noreferrer"
                   className="text-electric-400 hover:underline">Ver perfil no GitHub →</a>
              </p>
            )}

            {!repos && !error && (
              <ul className="space-y-2" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="h-11 rounded-lg bg-white/[0.03] animate-pulse" />
                ))}
              </ul>
            )}

            {repos && (
              <ul className="space-y-1">
                {repos.slice(0, 5).map((r) => (
                  <li key={r.name}>
                    <a
                      href={r.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: langColors[r.language] || '#64748b' }}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-mono text-white/80 group-hover:text-electric-400 transition-colors truncate">
                          {r.name}
                        </span>
                        {r.description && (
                          <span className="block text-xs text-white/45 truncate">{r.description}</span>
                        )}
                      </span>
                      <span className="text-xs font-mono text-white/45 whitespace-nowrap">{timeAgo(r.pushed_at)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Linguagens (real) */}
          <div className="reveal reveal-delay-2 dashboard-card min-w-0">
            <p className="text-sm font-mono text-white/60 mb-4">linguagens nos repositórios</p>
            {repos ? (
              <div className="space-y-3">
                {languages.map(([lang, count]) => (
                  <div key={lang}>
                    <div className="flex justify-between text-xs font-mono text-white/60 mb-1">
                      <span>{lang}</span>
                      <span>{count} {count === 1 ? 'repo' : 'repos'}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${(count / maxLang) * 100}%`, background: langColors[lang] || '#64748b' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-white/45">{error ? 'Indisponível no momento.' : 'Carregando…'}</p>
            )}

            <div className="mt-5 pt-4 border-t border-white/[0.06]">
              <p className="text-xs font-mono text-white/45 mb-2">stack principal</p>
              <p className="font-display font-bold text-white text-lg">Frontend</p>
              <p className="text-xs text-white/55">React · Tailwind · Vite</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal mt-8 dashboard-card">
          <p className="text-sm font-mono text-white/60 mb-6">linha do tempo</p>
          <div className="relative pl-6">
            <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-electric-500/50 via-violet-500/30 to-transparent" aria-hidden="true" />
            <ol>
            {timeline.map((item) => (
              <li key={item.date} className="flex gap-4 mb-5 last:mb-0 group">
                <div
                  className="timeline-dot mt-1 flex-shrink-0"
                  style={{ background: item.color, boxShadow: `0 0 0 3px ${item.color}30, 0 0 12px ${item.color}50` }}
                />
                <div>
                  <p className="text-xs font-mono text-white/50 mb-0.5">{item.date}</p>
                  <p className="text-sm text-white/75 group-hover:text-white/90 transition-colors">{item.event}</p>
                </div>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
