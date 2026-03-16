'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { href: '/demos/electricien-dubois', label: 'Accueil' },
  { href: '/demos/electricien-dubois/services', label: 'Services' },
  { href: '/demos/electricien-dubois/realisations', label: 'Réalisations' },
  { href: '/demos/electricien-dubois/a-propos', label: 'À propos' },
  { href: '/demos/electricien-dubois/contact', label: 'Contact' },
]

export function EDNavbar() {
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
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(0,0,0,0.08)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — left */}
        <Link
          href="/demos/electricien-dubois"
          className="text-lg tracking-tight shrink-0"
          style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, color: 'var(--ed-primary)' }}
        >
          Dubois Électricité
        </Link>

        {/* Desktop nav links — center */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 400,
                color: 'var(--ed-text-secondary)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--ed-primary)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--ed-text-secondary)')
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop: phone number + CTA — right */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <a
            href="tel:0745678901"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            style={{
              color: 'var(--ed-primary)',
              fontWeight: 600,
              fontSize: '15px',
              fontFamily: 'var(--font-heading), sans-serif',
            }}
          >
            <Phone size={16} />
            07 45 67 89 01
          </a>
          <Link
            href="/demos/electricien-dubois/contact"
            className="text-sm font-medium px-5 py-2 transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 600,
              background: 'var(--ed-accent)',
              color: '#ffffff',
              borderRadius: '11px',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'var(--ed-accent-hover)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'var(--ed-accent)')
            }
          >
            Devis gratuit
          </Link>
        </div>

        {/* Mobile: phone + burger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:0745678901"
            className="p-2"
            style={{ color: 'var(--ed-primary)' }}
            aria-label="Appeler"
          >
            <Phone size={20} />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            style={{ color: 'var(--ed-text)' }}
            aria-label="Menu"
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
              paddingBottom: 'calc(56px + 24px)',
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base"
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    color: 'var(--ed-text-secondary)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/demos/electricien-dubois/contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium px-5 py-3 text-center mt-2"
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 600,
                  background: 'var(--ed-accent)',
                  color: '#ffffff',
                  borderRadius: '11px',
                }}
              >
                Devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
