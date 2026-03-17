'use client'
import { Phone, Mail, MapPin } from 'lucide-react'

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-mono), monospace',
  fontWeight: 400,
}

const display: React.CSSProperties = {
  fontFamily: 'var(--font-display), serif',
  fontWeight: 700,
}

const body500: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 500,
}

const zones = [
  'Bordeaux',
  'Mérignac',
  'Le Bouscat',
  'Caudéran',
  'Pessac',
  'Talence',
]

export function IHFooter() {
  return (
    <footer style={{ background: 'var(--ih-primary)', color: '#ffffff' }}>
      <div
        className="max-w-[1100px] mx-auto px-6"
        style={{ paddingTop: 64, paddingBottom: 48 }}
      >
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <p
              className="mb-4"
              style={{ ...display, fontSize: 24, lineHeight: 1.3 }}
            >
              Immo Horizon
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.60)',
                maxWidth: 320,
              }}
            >
              Agence immobilière indépendante à Bordeaux.
              Vente, achat, location et gestion locative.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              <a
                href="tel:+33556000000"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15 }}
              >
                <Phone size={14} />
                05 56 00 00 00
              </a>
              <a
                href="mailto:contact@immo-horizon.fr"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15 }}
              >
                <Mail size={14} />
                contact@immo-horizon.fr
              </a>
            </div>
          </div>

          {/* Col 2 — Zones */}
          <div>
            <p
              className="mb-4"
              style={{
                ...body500,
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.40)',
              }}
            >
              Zones d&apos;intervention
            </p>
            <div className="flex flex-col gap-2">
              {zones.map((z) => (
                <span
                  key={z}
                  className="flex items-center gap-2"
                  style={{ color: 'rgba(255,255,255,0.60)', fontSize: 15 }}
                >
                  <MapPin size={12} style={{ opacity: 0.5 }} />
                  {z}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <p
              className="mb-4"
              style={{
                ...body500,
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.40)',
              }}
            >
              Informations légales
            </p>
            <div
              className="flex flex-col gap-3"
              style={{ color: 'rgba(255,255,255,0.60)', fontSize: 13 }}
            >
              <p style={mono}>CPI 33012025XXXX</p>
              <p>Chambre de Commerce et d&apos;Industrie de Bordeaux Gironde</p>
              <p>Garantie financière : Caisse des Dépôts</p>
              <p>Assurance RCP : AXA France — Police n°XXXX</p>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.10)',
            marginBottom: 24,
          }}
        />

        {/* Bottom — Disclaimer + Copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            style={{
              ...mono,
              fontSize: 11,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.02em',
            }}
          >
            © 2026 Immo Horizon — Agence immobilière indépendante
          </p>
          <p
            style={{
              ...mono,
              fontSize: 11,
              color: 'var(--ih-accent)',
              letterSpacing: '0.02em',
              padding: '4px 12px',
              border: '1px solid rgba(200,169,110,0.30)',
              borderRadius: 6,
            }}
          >
            Site de démonstration Evolvia — données fictives
          </p>
        </div>
      </div>
    </footer>
  )
}
