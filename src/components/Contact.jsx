import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div
        className="orb absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-electric-500/15"
        style={{ filter: 'blur(60px)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div className="reveal mb-6">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/40">05. </span>contato
          </p>
        </div>

        <h2 className="reveal font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Vamos construir
          <span className="block bg-gradient-to-r from-electric-300 to-violet-400 bg-clip-text text-transparent">
            algo incr&iacute;vel?
          </span>
        </h2>

        <p className="reveal reveal-delay-1 text-xl text-white/50 leading-relaxed max-w-xl mx-auto mb-12">
          Estou em busca de uma oportunidade como{' '}
          <span className="bg-gradient-to-r from-electric-300 via-electric-400 to-violet-400 bg-clip-text text-transparent text-glow-electric">
            Desenvolvedor J&uacute;nior
          </span>{' '}
          ou{' '}
          <span className="bg-gradient-to-r from-electric-300 via-electric-400 to-violet-400 bg-clip-text text-transparent text-glow-electric">
            Estagi&aacute;rio
          </span>{' '}
          para aplicar minha base t&eacute;cnica e evoluir junto com um time experiente. Se a sua empresa busca
          algu&eacute;m focado em resolu&ccedil;&atilde;o de problemas reais e entrega de valor desde o primeiro dia,
          vamos conversar.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href={`mailto:${profile.email}`} className="btn-primary text-base px-8 py-3.5">
            <MailIcon />
            Enviar e-mail
          </a>

          <a
            href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-base px-8 py-3.5"
          >
            <WhatsappIcon />
            WhatsApp
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline text-base px-8 py-3.5">
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>

        {/* Contact card */}
        <div
          className="reveal reveal-delay-3 max-w-md mx-auto
                        card-glass rounded-2xl p-6
                        border border-white/[0.06] hover:border-electric-500/20
                        transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-400 to-violet-500
                            flex items-center justify-center font-display font-bold text-white text-lg"
            >
              {profile.name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-display font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-white/55">{profile.role}</p>
            </div>
            {profile.availableForWork && (
              <span
                className="ml-auto flex items-center gap-1.5 text-xs font-mono
                               text-electric-400 bg-electric-500/10 border border-electric-500/20
                               px-2.5 py-1 rounded-full whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
                dispon&iacute;vel
              </span>
            )}
          </div>

          <div className="space-y-2 border-t border-white/[0.06] pt-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-white/60 hover:text-electric-400 transition-colors"
            >
              <MailIcon size={14} />
              {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-electric-400 transition-colors"
            >
              <WhatsappIcon size={14} />
              <span>WhatsApp</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-electric-400 transition-colors"
            >
              <GithubIcon size={14} />
              github.com/{profile.github.split('/').pop()}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
