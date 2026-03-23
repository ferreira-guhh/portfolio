import { useEffect, useRef } from 'react'
import { skills } from '../data/portfolio'

function SkillBar({ name, level, color, delay = 0 }) {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bar.style.width = `${level}%`
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(bar.parentElement)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-mono text-white/70 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-white/30">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          ref={barRef}
          className="progress-bar-fill"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

const categories = [
  {
    key:   'frontend',
    label: 'Frontend',
    icon:  '⬡',
    color: 'electric',
    desc:  'Interface & experiência',
  },
  {
    key:   'backend',
    label: 'Backend',
    icon:  '⬡',
    color: 'violet',
    desc:  'APIs & servidor',
  },
  {
    key:   'tools',
    label: 'Ferramentas',
    icon:  '⬡',
    color: 'teal',
    desc:  'Fluxo de trabalho',
  },
]

const colorStyle = {
  electric: 'text-electric-400 bg-electric-500/10 border-electric-500/20',
  violet:   'text-violet-400 bg-violet-500/10 border-violet-500/20',
  teal:     'text-teal-400 bg-teal-500/10 border-teal-500/20',
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-sm text-electric-400 mb-3">
            <span className="text-white/20">03. </span>habilidades
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Meu stack
            <span className="block text-white/30">técnico</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(({ key, label, icon, color, desc }, catIndex) => (
            <div
              key={key}
              className={`reveal reveal-delay-${catIndex + 1}
                          card-glass rounded-2xl p-6
                          border border-white/[0.06] hover:border-white/[0.12]
                          transition-all duration-300`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center
                                  text-sm border ${colorStyle[color]}`}>
                  {icon}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm">{label}</h3>
                  <p className="text-xs text-white/30">{desc}</p>
                </div>
              </div>

              {/* Bars */}
              <div className="space-y-4">
                {skills[key].map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={color}
                    delay={i * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra technologies cloud */}
        <div className="reveal mt-12">
          <p className="text-xs font-mono text-white/25 mb-4 text-center">
            outras tecnologias que já usei
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'HTML5', 'CSS3', 'JavaScript ES2024', 'Axios', 'Zod',
              'React Hook Form', 'Zustand', 'Chart.js', 'Cheerio',
              'JWT', 'bcrypt', 'Mongoose', 'dotenv',
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-white/35 bg-white/[0.03]
                           border border-white/[0.06] px-3 py-1.5 rounded-full
                           hover:text-white/60 hover:border-white/15 transition-colors"
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
