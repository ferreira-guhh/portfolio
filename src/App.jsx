import { useEffect } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Projects  from './components/Projects'
import Skills    from './components/Skills'
import Dashboard from './components/Dashboard'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  /* Mouse-position for card glow effect */
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.project-card').forEach((card) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#06060e] text-white grid-bg">
      {/* Global noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '200px 200px',
           }} />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Dashboard />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
