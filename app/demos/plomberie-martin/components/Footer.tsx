'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--pm-primary)',
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '48px' }}>
          {/* Col 1 — Logo + certifs */}
          <div>
            <span
              className="pm-display block"
              style={{
                color: '#fff',
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Plomberie Martin
            </span>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}
            >
              Votre plombier de confiance à Paris depuis 2009
            </p>
            <div className="flex flex-wrap" style={{ gap: '8px' }}>
              {['Qualibat', 'RGE', 'SIRET: 123 456 789'].map((label) => (
                <span
                  key={label}
                  className="inline-block uppercase font-bold"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontSize: '11px',
                    lineHeight: '1.45',
                    letterSpacing: '0.08em',
                    padding: '4px 16px',
                    borderRadius: '8px',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <span
              className="block uppercase font-bold"
              style={{
                color: 'rgba(255, 255, 255, 0.40)',
                fontSize: '11px',
                lineHeight: '1.45',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Navigation
            </span>
            <nav className="flex flex-col" style={{ gap: '8px' }}>
              {[
                { label: 'Services', href: '#services' },
                { label: "Zone d'intervention", href: '#zone' },
                { label: 'Avis clients', href: '#avis' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="pm-footer-link"
                  style={{ fontSize: '15px' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <span
              className="block uppercase font-bold"
              style={{
                color: 'rgba(255, 255, 255, 0.40)',
                fontSize: '11px',
                lineHeight: '1.45',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Contact
            </span>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <a
                href="tel:0612345678"
                aria-label="Appeler le 06 12 34 56 78"
                className="pm-footer-link flex items-center"
                style={{ fontSize: '15px', gap: '8px' }}
              >
                <Phone size={14} />
                06 12 34 56 78
              </a>
              <a
                href="mailto:contact@plomberie-martin.fr"
                aria-label="Envoyer un email"
                className="pm-footer-link flex items-center"
                style={{ fontSize: '15px', gap: '8px' }}
              >
                <Mail size={14} />
                contact@plomberie-martin.fr
              </a>
              <p
                className="flex items-center"
                style={{
                  color: 'rgba(255,255,255,0.60)',
                  fontSize: '15px',
                  gap: '8px',
                }}
              >
                <MapPin size={14} />
                Paris et petite couronne
              </p>
              <p
                className="flex items-center"
                style={{
                  color: 'rgba(255,255,255,0.60)',
                  fontSize: '15px',
                  gap: '8px',
                }}
              >
                <Clock size={14} />
                Lun-Sam 8h-19h · Urgences 24h/24
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            gap: '12px',
          }}
        >
          <p style={{ color: 'rgba(255, 255, 255, 0.40)', fontSize: '13px' }}>
            &copy; 2026 Plomberie Martin —{' '}
            <a href="#mentions" className="pm-footer-link underline underline-offset-2">Mentions l&eacute;gales</a>
            {' '}—{' '}
            <a href="#confidentialite" className="pm-footer-link underline underline-offset-2">Politique de confidentialit&eacute;</a>
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.40)', fontSize: '13px' }}>
            Site réalisé par{' '}
            <a
              href="https://evolvia.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="pm-footer-link underline underline-offset-2"
            >
              Evolvia
            </a>
            {' '}— evolvia.fr
          </p>
        </div>
      </div>
    </footer>
  )
}
