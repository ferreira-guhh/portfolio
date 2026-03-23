import { useState, useRef } from 'react'
import { projects, extraProjects } from '../data/portfolio'

const colorMap = {
  electric: {
    badge:  'bg-electric-500/15 text-electric-400 border-electric-500/25',
    tag:    'text-electric-400 border-electric-500/20 bg-electric-500/8',
    accent: '#00aed4',
  },
  violet: {
    badge:  'bg-violet-500/15 text-violet-400 border-violet-500/25',
    tag:    'text-violet-400 border-violet-500/20 bg-violet-500/8',
    accent: '#7c5cfc',
  },
  teal: {
    badge:  'bg-teal-500/15 text-teal-400 border-teal-500/25',
    tag:    'text-teal-400 border-teal-500/20 bg-teal-500/8',
    accent: '#14b8a6',
  },
  pink: {
    badge:  'bg-pink-500/15 text-pink-400 border-pink-500/25',
    tag:    'text-pink-400 border-pink-500/20 bg-pink-500/8',
    accent: '#ec4899',
  },
}

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const ExternalIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

function FeaturedCard({ project }) {
  const colors = colorMap[project.color] || colorMap.electric
  return (
    <div className="project-card col-span-full card-glass rounded-2xl p-8 md:p-10
                    border border-electric-500/20 hover:border-electric-500/40 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="badge-featured">✦ Projeto Destaque</span>
            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${colors.badge}`}>{project.subtitle}</span>
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-white/60 leading-relaxed mb-5">{project.description}</p>
          <div className="mb-6 p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="text-xs font-mono text-white/30 mb-1">problema resolvido</p>
            <p className="text-sm text-white/60">{project.problem}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className={`skill-tag ${colors.tag}`}>{tag}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalIcon /> Ver ao Vivo
            </a>
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-outline">
              <GithubIcon /> Ver Código
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-mono text-white/25 mb-4">resultados</p>
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.025]
                                    border border-white/[0.06] hover:border-electric-500/20
                                    transition-colors mb-2">
              <span className="text-electric-400">✓</span>
              <span className="text-sm text-white/70">{metric}</span>
            </div>
          ))}
          <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-electric-500/10 to-violet-500/10
                          border border-white/[0.08] text-center">
            <p className="stat-number text-5xl font-display font-bold">01</p>
            <p className="text-xs font-mono text-white/40 mt-1">sistema em produção</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, animDelay = 0 }) {
  const colors = colorMap[project.color] || colorMap.electric
  return (
    <div
      className="project-card card-glass rounded-2xl p-6 flex flex-col h-full
                 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
      style={{ animationDelay: `${animDelay}ms` }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${colors.badge}`}>
            {project.highlight}
          </span>
          <div className="flex gap-1.5">
            <a href={project.repoUrl} target="_blank" rel="noreferrer"
               className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09]
                          transition-colors text-white/40 hover:text-white">
              <GithubIcon size={13} />
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
               className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09]
                          transition-colors text-white/40 hover:text-white">
              <ExternalIcon size={13} />
            </a>
          </div>
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-xs font-mono text-white/25 mb-3">{project.subtitle}</p>
        <p className="text-white/55 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        {project.problem && (
          <div className="mb-4 px-3 py-2.5 rounded-lg bg-white/[0.025] border-l-2"
               style={{ borderLeftColor: colors.accent }}>
            <p className="text-xs text-white/45 leading-relaxed">{project.problem}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className={`skill-tag text-xs ${colors.tag}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExtraProjectCard({ project, index, visible }) {
  return (
    <div
      className="project-card card-glass rounded-2xl p-6 flex flex-col h-full
                 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.45s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms,
                     transform 0.45s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms`,
      }}
    >
      {(() => {
        const colors = colorMap[project.color] || colorMap.electric
        return (
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <span className={`text-xs font-mono px-3 py-1 rounded-full border ${colors.badge}`}>
                {project.highlight}
              </span>
              <div className="flex gap-1.5">
                <a href={project.repoUrl} target="_blank" rel="noreferrer"
                   className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09]
                              transition-colors text-white/40 hover:text-white">
                  <GithubIcon size={13} />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer"
                   className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09]
                              transition-colors text-white/40 hover:text-white">
                  <ExternalIcon size={13} />
                </a>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-xs font-mono text-white/25 mb-3">{project.subtitle}</p>
            <p className="text-white/55 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className={`skill-tag text-xs ${colors.tag}`}>{tag}</span>
              ))}
            </div>
          </div>
        )
      })()}
    </div>
  )
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false)
  const extraRef = useRef(null)

  const handleToggle = () => {
    if (!expanded) {
      setExpanded(true)
      setTimeout(() => {
        extraRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    } else {
      setExpanded(false)
      // scroll back up to the button area
      document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const [featured, ...others] = projects

  return (
    <section id="projetos" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent
                      via-violet-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/20">02. </span>projetos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            O que já construí
            <span className="block text-white/30">na prática</span>
          </h2>
        </div>

        {/* ── Projetos principais ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <div className="reveal reveal-delay-1 md:col-span-3">
            <FeaturedCard project={featured} />
          </div>
          {others.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${i + 2}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* ── Divisor + botão expandir ── */}
        <div className="flex flex-col items-center gap-5 mt-4">
          {/* Linha com contador */}
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/[0.08]" />
            <span className="text-xs font-mono text-white/20 whitespace-nowrap px-2">
              {expanded ? 'mostrando todos os projetos' : `+ ${extraProjects.length} projetos disponíveis`}
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/[0.08]" />
          </div>

          {/* Botão */}
          <button
            onClick={handleToggle}
            className="group relative flex items-center gap-3 px-7 py-3.5 rounded-xl
                       font-medium text-sm border border-white/[0.1] bg-white/[0.03]
                       hover:border-electric-500/40 hover:bg-electric-500/[0.06]
                       text-white/55 hover:text-electric-400
                       transition-all duration-300 overflow-hidden"
          >
            {/* Glow hover */}
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                             bg-gradient-to-r from-electric-500/5 to-violet-500/5
                             transition-opacity duration-300" />

            {/* Badge com contagem */}
            <span className="relative z-10 flex items-center justify-center
                             w-5 h-5 rounded-full text-xs font-mono
                             bg-white/[0.06] border border-white/[0.1]
                             text-white/40 group-hover:border-electric-500/30
                             group-hover:text-electric-400 transition-all">
              {extraProjects.length}
            </span>

            <span className="relative z-10 font-mono tracking-wide">
              {expanded ? 'Recolher projetos' : `Ver mais ${extraProjects.length} projetos`}
            </span>

            {/* Seta animada */}
            <svg
              className={`relative z-10 transition-transform duration-300 ease-in-out
                          ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* ── Projetos extras (accordion) ── */}
        <div
          ref={extraRef}
          style={{
            maxHeight:  expanded ? `${extraProjects.length * 600}px` : '0px',
            opacity:    expanded ? 1 : 0,
            overflow:   'hidden',
            transition: 'max-height 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
          }}
        >
          {/* Cabeçalho da seção extra */}
          <div className="flex items-center gap-4 mt-12 mb-8">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs font-mono text-white/25 px-4 py-1.5 rounded-full
                             border border-white/[0.06] bg-white/[0.02]">
              outros projetos
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          {/* Grid extras — 2 colunas no mobile, 4 no desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extraProjects.map((project, i) => (
              <ExtraProjectCard
                key={project.id}
                project={project}
                index={i}
                visible={expanded}
              />
            ))}
          </div>

          {/* Link GitHub ao final */}
          <div className="mt-10 pb-2 text-center">
            <a
              href="https://github.com/ferreira-guhh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/25
                         hover:text-electric-400 transition-colors group"
            >
              <GithubIcon size={12} />
              ver todos os repositórios no GitHub
              <svg className="group-hover:translate-x-1 transition-transform"
                   width="10" height="10" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
