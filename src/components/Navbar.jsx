import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'

const navItems = [
  { label: 'Sobre',      href: '#sobre'    },
  { label: 'Projetos',   href: '#projetos' },
  { label: 'Skills',     href: '#skills'   },
  { label: 'Dashboard',  href: '#dashboard'},
  { label: 'Contato',    href: '#contato'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map(({ href }) => document.querySelector(href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06060e]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-400 to-violet-400 flex items-center justify-center text-white font-display font-bold text-sm">
            {profile.name.charAt(0)}
          </span>
          <span className="font-display font-semibold text-sm text-white/80 group-hover:text-white transition-colors">
            {profile.name.split(' ')[0]}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link ${active === href ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {profile.availableForWork && (
            <span className="flex items-center gap-1.5 text-xs font-mono text-electric-400 bg-electric-500/10 border border-electric-500/20 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
              disponível
            </span>
          )}
          <a href="#contato" className="btn-primary text-sm py-2 px-5">
            Fale comigo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white/70 transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a14]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="btn-primary w-full justify-center mt-4">
            Fale comigo
          </a>
        </div>
      )}
    </header>
  )
}
