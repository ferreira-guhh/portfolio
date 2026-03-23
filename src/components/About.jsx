import { profile } from '../data/portfolio'

const highlights = [
  {
    icon: '◈',
    title: 'Frontend First',
    desc: 'Especializado em React + Tailwind, com atenção obsessiva a UX e performance.',
  },
  {
    icon: '◈',
    title: 'Projeto Real em Produção',
    desc: 'Já entreguei e mantenho um sistema usado por uma empresa real de varejo físico.',
  },
  {
    icon: '◈',
    title: 'Visão Full Stack',
    desc: 'Construindo base sólida em Node.js e APIs para evoluir como desenvolvedor completo.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/20">01. </span>sobre mim
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Quem está por trás
            <span className="block text-white/30">do código</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio text */}
          <div className="reveal reveal-delay-1 space-y-5">
            {profile.bio.split('\n').filter(Boolean).map((paragraph, i) => (
              <p key={i} className="text-white/65 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}

            {/* Stack badges */}
            <div className="pt-4 flex flex-wrap gap-2">
              {['React', 'JavaScript/ES6+', 'Tailwind', 'Vite', 'Node.js', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="skill-tag text-electric-400 border-electric-500/25 bg-electric-500/8"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="space-y-4 reveal reveal-delay-2">
            {highlights.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl
                           bg-white/[0.025] border border-white/[0.06]
                           hover:border-electric-500/25 hover:bg-white/[0.04]
                           transition-all duration-300 group"
              >
                <span className="text-electric-400 text-xl mt-0.5 group-hover:scale-110 transition-transform">
                  {icon}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* Currently learning */}
            <div className="mt-6 p-4 rounded-xl border border-dashed border-white/10
                            bg-gradient-to-br from-violet-500/5 to-transparent">
              <p className="text-xs font-mono text-white/30 mb-2">atualmente estudando</p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript avançado', 'PostgreSQL', 'Docker', 'Next.js'].map((item) => (
                  <span key={item} className="text-xs font-mono text-violet-400/80
                                              bg-violet-500/10 border border-violet-500/20
                                              px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
