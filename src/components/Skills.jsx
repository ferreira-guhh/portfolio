import { skills, skillLevels } from '../data/portfolio'

const categories = [
  { key: 'frontend', label: 'Frontend',    color: 'electric', desc: 'Interface & experiência' },
  { key: 'backend',  label: 'Backend',     color: 'violet',   desc: 'APIs & servidor' },
  { key: 'tools',    label: 'Ferramentas', color: 'teal',     desc: 'Fluxo de trabalho' },
]

const colorStyle = {
  electric: { box: 'text-electric-400 bg-electric-500/10 border-electric-500/20', dot: 'bg-electric-400' },
  violet:   { box: 'text-violet-400 bg-violet-500/10 border-violet-500/20',       dot: 'bg-violet-400' },
  teal:     { box: 'text-teal-400 bg-teal-500/10 border-teal-500/20',             dot: 'bg-teal-400' },
}

function LevelDots({ count, color }) {
  return (
    <span className="flex gap-1" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`w-1.5 h-1.5 rounded-full ${n <= count ? colorStyle[color].dot : 'bg-white/10'}`}
        />
      ))}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/40">03. </span>habilidades
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Meu stack
            <span className="block text-white/40">técnico</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(({ key, label, color, desc }, catIndex) => (
            <div
              key={key}
              className={`reveal reveal-delay-${catIndex + 1}
                          card-glass rounded-2xl p-6
                          border border-white/[0.06] hover:border-white/[0.12]
                          transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm border ${colorStyle[color].box}`}>
                  ⬡
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm">{label}</h3>
                  <p className="text-xs text-white/50">{desc}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {skills[key].map((skill) => {
                  const lvl = skillLevels[skill.level]
                  return (
                    <li key={skill.name} className="flex items-center justify-between gap-3 group">
                      <span className="text-sm font-mono text-white/75 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-white/45">{lvl.label}</span>
                        <LevelDots count={lvl.dots} color={color} />
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra technologies cloud */}
        <div className="reveal mt-12">
          <p className="text-xs font-mono text-white/45 mb-4 text-center">
            outras tecnologias que já usei
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'HTML5', 'CSS3', 'JavaScript ES2024', 'Axios', 'Zod',
              'React Hook Form', 'Zustand', 'Chart.js', 'Cheerio',
              'JWT', 'bcrypt', 'Mongoose', 'dotenv', 'Fastify', 'Drizzle ORM',
              'TanStack Query', 'Recharts', 'Flask', 'BeautifulSoup', 'Vitest',
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-white/55 bg-white/[0.03]
                           border border-white/[0.06] px-3 py-1.5 rounded-full
                           hover:text-white/80 hover:border-white/15 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
