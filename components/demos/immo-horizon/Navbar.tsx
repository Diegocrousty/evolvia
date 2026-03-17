'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { href: '#biens', label: 'Acheter' },
  { href: '#estimation', label: 'Vendre' },
  { href: '#equipe', label: 'Notre équipe' },
  { href: '#contact', label: 'Contact' },
]

const display: React.CSSProperties = {
  fontFamily: 'var(--font-display), serif',
  fontWeight: 700,
}

const body500: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 500,
}

export function IHNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250,250,248,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(26,26,24,0.08)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="tracking-tight shrink-0"
          style={{
            ...display,
            fontSize: 20,
            lineHeight: 1.4,
            color: scrolled ? 'var(--ih-primary)' : '#ffffff',
            transition: 'color 0.3s',
          }}
        >
          Immo Horizon
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200"
              style={{
                ...body500,
                fontSize: 13,
                color: scrolled
                  ? 'var(--ih-text-secondary)'
                  : 'rgba(255,255,255,0.70)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? 'var(--ih-primary)'
                  : '#ffffff')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? 'var(--ih-text-secondary)'
                  : 'rgba(255,255,255,0.70)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop: phone + CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:+33556000000"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            style={{
              ...body500,
              fontSize: 13,
              color: scrolled ? 'var(--ih-primary)' : 'rgba(255,255,255,0.82)',
            }}
          >
            <Phone size={14} />
            05 56 00 00 00
          </a>
          <a
            href="#estimation"
            className="transition-colors duration-200"
            style={{
              ...body500,
              fontSize: 13,
              background: 'var(--ih-accent)',
              color: '#ffffff',
              borderRadius: 11,
              padding: '8px 16px',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'var(--ih-accent-hover)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'var(--ih-accent)')
            }
          >
            Estimer mon bien
          </a>
        </div>

        {/* Mobile: phone + burger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+33556000000"
            className="p-2"
            style={{ color: scrolled ? 'var(--ih-primary)' : '#ffffff' }}
            aria-label="Appeler"
          >
            <Phone size={20} />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            style={{ color: scrolled ? 'var(--ih-text)' : '#ffffff' }}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pt-2"
            style={{
              paddingBottom: 24,
              background: 'rgba(250,250,248,0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(26,26,24,0.08)',
            }}
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    ...body500,
                    fontSize: 15,
                    color: 'var(--ih-text-secondary)',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#estimation"
                onClick={() => setMobileOpen(false)}
                className="text-center mt-2"
                style={{
                  ...body500,
                  fontSize: 15,
                  background: 'var(--ih-accent)',
                  color: '#ffffff',
                  borderRadius: 11,
                  padding: '12px 24px',
                }}
              >
                Estimer mon bien
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
