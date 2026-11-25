import { useState, useRef } from 'react'
import { projects, extraProjects } from '../data/portfolio'
import { Settings } from 'lucide-react'
import { GithubIcon, ExternalIcon, PlayIcon } from './Icons'

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

/**
 * Descobre que tipo de link "ao vivo" o projeto tem:
 * - 'site'  → demo navegável
 * - 'video' → post/vídeo (ex.: LinkedIn) mostrando o projeto
 * - null    → sem link (ou em manutenção)
 */
function getLive(project) {
  const url = project.liveUrl
  if (!url || url === '#' || project.status === 'maintenance') return null
  if (/linkedin\.com|youtube\.com|youtu\.be/.test(url)) return { url, kind: 'video', label: 'Ver demonstração em vídeo' }
  return { url, kind: 'site', label: 'Ver projeto ao vivo' }
}

const DevelopmentBadge = () => (
  <p className="mb-3 inline-flex items-center gap-2 self-start px-2.5 py-1 text-[11px] font-mono rounded-md
                text-electric-300 bg-electric-500/5 border border-electric-500/25">
    <span className="w-1.5 h-1.5 rounded-full bg-electric-400" aria-hidden="true" /> em desenvolvimento · já utilizável
  </p>
)

const MaintenanceBadge = () => (
  <p className="mb-3 inline-flex items-center gap-2 self-start px-2.5 py-1 text-[11px] font-mono rounded-md
                text-yellow-300/90 bg-yellow-400/5 border border-yellow-400/20">
    <span aria-hidden="true">🛠️</span> em atualização
  </p>
)

function FeaturedCard({ project }) {
  const colors = colorMap[project.color] || colorMap.electric
  const live = getLive(project)

  return (
    <article className="project-card col-span-full card-glass rounded-2xl p-8 md:p-10
                        border border-electric-500/20 hover:border-electric-500/40 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="badge-featured">✦ Projeto Destaque</span>
            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${colors.badge}`}>{project.subtitle}</span>
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-white/65 leading-relaxed mb-5">{project.description}</p>
          <div className="mb-6 p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="font-mono text-[11px] text-white/45 mb-1">foco arquitetural</p>
            <p className="text-sm text-white/65">{project.problem}</p>
          </div>
          <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tecnologias">
            {project.tags.map((tag) => (
              <li key={tag} className={`skill-tag ${colors.tag}`}>{tag}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {live && (
              <a href={live.url} target="_blank" rel="noreferrer" className="btn-primary">
                {live.kind === 'video' ? <PlayIcon /> : <ExternalIcon />}
                {live.kind === 'video' ? 'Ver Demonstração' : 'Ver ao Vivo'}
              </a>
            )}
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-outline">
              <GithubIcon /> Ver Código
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] text-white/45 mb-4">resultados</p>
          <ul>
            {project.metrics.map((metric) => (
              <li key={metric} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.025]
                                          border border-white/[0.06] hover:border-electric-500/20
                                          transition-colors mb-2">
                <span className="text-electric-400" aria-hidden="true">✓</span>
                <span className="text-sm text-white/75">{metric}</span>
              </li>
            ))}
          </ul>

          {project.recruiterTip ? (
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-electric-500/10 to-violet-500/10
                            border border-electric-500/25">
              <p className="flex items-center gap-2 font-mono text-xs text-electric-400 mb-2">
                <span aria-hidden="true">💡</span> dica para recrutadores
              </p>
              <p className="text-sm text-white/75 leading-relaxed">{project.recruiterTip}</p>
            </div>
          ) : (
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-electric-500/10 to-violet-500/10
                            border border-white/[0.08] text-center flex flex-col items-center">
              <div className="stat-number mb-2 flex justify-center">
                <Settings className="block" size={28} aria-hidden="true" />
              </div>
              <p className="font-mono text-[11px] text-white/55 mt-1">Operações completas e rotas seguras</p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project, style }) {
  const colors = colorMap[project.color] || colorMap.electric
  const live = getLive(project)
  const isMaintenance = project.status === 'maintenance'

  return (
    <article
      className="project-card card-glass rounded-2xl p-6 flex flex-col h-full
                 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
      style={style}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${colors.badge}`}>
            {project.highlight}
          </span>
          <div className="flex gap-1.5">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Código do ${project.title} no GitHub`}
              title="Ver código"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] transition-colors text-white/55 hover:text-white"
            >
              <GithubIcon size={13} />
            </a>
            {live && (
              <a
                href={live.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${live.label}: ${project.title}`}
                title={live.label}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] transition-colors text-white/55 hover:text-white"
              >
                {live.kind === 'video' ? <PlayIcon size={13} /> : <ExternalIcon size={13} />}
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="font-mono text-[11px] text-white/45 mb-3">{project.subtitle}</p>

        {isMaintenance && <MaintenanceBadge />}
        {project.status === 'development' && <DevelopmentBadge />}

        <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

        {project.problem && (
          <div className="mb-4 px-3 py-2.5 rounded-lg bg-white/[0.025] border-l-2"
               style={{ borderLeftColor: colors.accent }}>
            <p className="text-xs text-white/55 leading-relaxed">{project.problem}</p>
          </div>
        )}

        <ul className="flex flex-wrap gap-1.5 mt-auto pt-2" aria-label="Tecnologias">
          {project.tags.map((tag) => (
            <li key={tag} className={`skill-tag text-xs ${colors.tag}`}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
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
      document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const [featured, ...others] = projects

  return (
    <section id="projetos" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/40">02. </span>projetos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            O que já construí
            <span className="block text-white/40">na prática</span>
          </h2>
        </div>

        {/* Projetos principais */}
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

        {/* Divisor + botão expandir */}
        <div className="flex flex-col items-center gap-5 mt-4">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/[0.08]" />
            <span className="font-mono text-[11px] text-white/45 whitespace-nowrap px-2">
              {expanded ? 'mostrando todos os projetos' : `+ ${extraProjects.length} projetos disponíveis`}
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/[0.08]" />
          </div>

          <button
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-controls="projetos-extras"
            className="group relative flex items-center gap-3 px-7 py-3.5 rounded-xl
                       font-medium text-sm border border-white/[0.1] bg-white/[0.03]
                       hover:border-electric-500/40 hover:bg-electric-500/[0.06]
                       text-white/65 hover:text-electric-400
                       transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                             bg-gradient-to-r from-electric-500/5 to-violet-500/5
                             transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center
                             w-5 h-5 rounded-full text-xs font-mono
                             bg-white/[0.06] border border-white/[0.1]
                             text-white/55 group-hover:border-electric-500/30
                             group-hover:text-electric-400 transition-all">
              {extraProjects.length}
            </span>
            <span className="relative z-10 font-mono tracking-wide">
              {expanded ? 'Recolher projetos' : `Ver mais ${extraProjects.length} projetos`}
            </span>
            <svg
              className={`relative z-10 transition-transform duration-300 ease-in-out
                          ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Projetos extras (accordion) */}
        <div
          id="projetos-extras"
          ref={extraRef}
          hidden={!expanded}
          className="pt-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="font-mono text-[11px] text-white/45 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
              outros projetos
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extraProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                style={{ animation: `fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms both` }}
              />
            ))}
          </div>

          <div className="mt-10 pb-2 text-center">
            <a
              href="https://github.com/ferreira-guhh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-electric-400 transition-colors group"
            >
              <GithubIcon size={12} />
              ver todos os repositórios no GitHub
              <svg className="group-hover:translate-x-1 transition-transform"
                   width="10" height="10" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
