import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="orb absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-electric-500/15"
           style={{ filter: 'blur(60px)' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div className="reveal mb-6">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/20">05. </span>contato
          </p>
        </div>

        <h2 className="reveal font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Vamos construir
          <span className="block bg-gradient-to-r from-electric-300 to-violet-400
                           bg-clip-text text-transparent">
            algo incrível?
          </span>
        </h2>

        <p className="reveal reveal-delay-1 text-xl text-white/50 leading-relaxed max-w-xl mx-auto mb-12">
          Estou em busca de uma oportunidade de estágio para aplicar minha base técnica e evoluir junto com um time experiente. Se a sua empresa busca um desenvolvedor focado em resolução de problemas e entrega de valor, vamos conversar.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href={`mailto:${profile.email}`} className="btn-primary text-base px-8 py-3.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Enviar e-mail
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline text-base px-8 py-3.5">
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

        {/* Contact card */}
        <div className="reveal reveal-delay-3 max-w-md mx-auto
                        card-glass rounded-2xl p-6
                        border border-white/[0.06] hover:border-electric-500/20
                        transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-400 to-violet-500
                            flex items-center justify-center font-display font-bold text-white text-lg">
              {profile.name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-display font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-white/40">{profile.role}</p>
            </div>
            {profile.availableForWork && (
              <span className="ml-auto flex items-center gap-1.5 text-xs font-mono
                               text-electric-400 bg-electric-500/10 border border-electric-500/20
                               px-2.5 py-1 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
                disponível
              </span>
            )}
          </div>

          <div className="space-y-2 border-t border-white/[0.06] pt-4">
            <a href={`mailto:${profile.email}`}
               className="flex items-center gap-3 text-sm text-white/50 hover:text-electric-400 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer"
               className="flex items-center gap-3 text-sm text-white/50 hover:text-electric-400 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              github.com/{profile.github.split('/').pop()}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
