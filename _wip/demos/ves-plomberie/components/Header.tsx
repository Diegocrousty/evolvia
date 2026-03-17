'use client'

import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--vp-bg)',
        borderBottom: '1px solid var(--vp-border)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1100px',
          paddingLeft: '24px',
          paddingRight: '24px',
          height: '64px',
        }}
      >
        {/* Logo — display font, bleu marine */}
        <span
          className="vp-display"
          style={{
            color: 'var(--vp-primary)',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          VES Plomberie
        </span>

        {/* Nav links — hidden mobile per SKILL */}
        <nav className="hidden md:flex items-center" style={{ gap: '24px' }}>
          {['Services', 'Zone', 'Avis', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="vp-link"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Téléphone EN GROS — SKILL: "Numéro tel cliquable EN GROS" */}
        <div className="flex flex-col items-end">
          <a
            href="tel:0624446176"
            aria-label="Appeler le 06 24 44 61 76"
            className="flex items-center font-bold"
            style={{
              color: 'var(--vp-accent)',
              fontSize: '17px',
              gap: '8px',
            }}
          >
            <Phone size={17} strokeWidth={2.5} />
            06 24 44 61 76
          </a>
          <span
            className="hidden md:block"
            style={{
              color: 'var(--vp-text-muted)',
              fontSize: '11px',
              lineHeight: '1.45',
            }}
          >
            Lun-Sam · 8h-17h
          </span>
        </div>
      </div>
    </header>
  )
}
