import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const LINKS = [
  { href: '/demos/electricien-dubois/services', label: 'Services' },
  { href: '/demos/electricien-dubois/realisations', label: 'Réalisations' },
  { href: '/demos/electricien-dubois/a-propos', label: 'À propos' },
  { href: '/demos/electricien-dubois/contact', label: 'Contact' },
]

export function EDFooter() {
  return (
    <footer
      className="relative z-10 border-t md:pb-0"
      style={{
        paddingBottom: 80,
        background: 'var(--ed-bg-2)',
        borderColor: 'var(--ed-border)',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <p
              className="text-lg mb-4"
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                color: 'var(--ed-primary)',
              }}
            >
              Dubois Électricité
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--ed-text-secondary)' }}
            >
              Artisan électricien certifié RGE à Lyon.
              <br />
              Installation, mise aux normes, domotique.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Qualifelec RGE', 'NF C 15-100', 'IRVE'].map((cert) => (
                <span
                  key={cert}
                  className="text-xs px-2 py-1"
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase' as const,
                    background: 'var(--ed-badge-bg)',
                    border: '1px solid var(--ed-badge-border)',
                    color: 'var(--ed-primary)',
                    borderRadius: '6px',
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
            <p
              className="mt-3 text-xs"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                color: 'rgba(0,0,0,0.60)',
              }}
            >
              Qualifelec n°12345 | RGE | IRVE certifié
            </p>
            <p
              className="mt-1 text-xs"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                color: 'rgba(0,0,0,0.40)',
              }}
            >
              NF C 15-100 • Attestation CONSUEL fournie
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 600,
                color: 'var(--ed-text)',
              }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--ed-primary)]"
                    style={{ color: 'var(--ed-text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 600,
                color: 'var(--ed-text)',
              }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone size={14} style={{ color: 'var(--ed-primary)' }} />
                <a
                  href="tel:0745678901"
                  className="text-sm hover:text-[var(--ed-primary)] transition-colors"
                  style={{ color: 'var(--ed-text-secondary)' }}
                >
                  07 45 67 89 01
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} style={{ color: 'var(--ed-primary)' }} />
                <span
                  className="text-sm"
                  style={{ color: 'var(--ed-text-secondary)' }}
                >
                  contact@electricien-dubois.fr
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} style={{ color: 'var(--ed-primary)' }} />
                <span
                  className="text-sm"
                  style={{ color: 'var(--ed-text-secondary)' }}
                >
                  Lyon et agglomération
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} style={{ color: 'var(--ed-primary)' }} />
                <span
                  className="text-sm"
                  style={{ color: 'var(--ed-text-secondary)' }}
                >
                  Lun-Sam 8h-19h · Urgences 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--ed-border)' }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              color: 'rgba(0,0,0,0.60)',
            }}
          >
            © {new Date().getFullYear()} Dubois Électricité — SIRET 123 456 789 00012 — Mentions légales
          </p>
          <p className="text-xs" style={{ color: 'rgba(0,0,0,0.40)' }}>
            Site réalisé par{' '}
            <a
              href="/"
              className="hover:text-[var(--ed-primary)] transition-colors"
              style={{ color: 'rgba(0,0,0,0.40)' }}
            >
              Evolvia
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
