import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center
                      justify-between gap-4 text-xs font-mono text-white/25">
        <p>
          © {year} {profile.name} · feito com React + Tailwind
        </p>
        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer"
             className="hover:text-electric-400 transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
             className="hover:text-electric-400 transition-colors">LinkedIn</a>
          <a href={`mailto:${profile.email}`}
             className="hover:text-electric-400 transition-colors">Email</a>
        </div>
        <p>v1.0.0</p>
      </div>
    </footer>
  )
}
