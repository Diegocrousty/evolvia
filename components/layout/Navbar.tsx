'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services/web', label: 'Offres' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Floating pill */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled
            ? 'rgba(8,8,8,0.85)'
            : 'rgba(8,8,8,0.5)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border)',
          borderRadius: '9999px',
          padding: '0.5rem 1.5rem',
          transition: 'background 0.4s, border-color 0.4s',
        }}
        className="flex items-center gap-1 md:gap-6"
      >
        {/* Logo — Cormorant Garamond 300, uppercase, texte pur */}
        <Link
          href="/"
          className="font-display font-light mr-2 md:mr-4"
          style={{
            color: '#f0eeeb',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontSize: '1.25rem',
            border: 'none',
            background: 'none',
            borderRadius: '0',
          }}
        >
          Evolvia
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-body tracking-wide transition-colors duration-200"
              style={{ color: 'var(--white-45)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--white)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--white-45)')
              }
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ color: 'var(--white)' }}
        >
          <span
            className="block w-5 h-px mb-1.5 transition-all"
            style={{ background: 'var(--white-45)' }}
          />
          <span
            className="block w-5 h-px mb-1.5 transition-all"
            style={{ background: 'var(--white-45)' }}
          />
          <span
            className="block w-3 h-px transition-all"
            style={{ background: 'var(--white-45)' }}
          />
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-20 left-4 right-4 md:hidden rounded-2xl px-6 pb-6 pt-4"
            style={{
              background: 'rgba(8,8,8,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
            }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-3 text-sm font-body transition-colors"
                style={{ color: 'var(--white-82)' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
