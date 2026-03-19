import Link from 'next/link'
import { TiltCard } from '@/components/ui/TiltCard'

type PricingCardProps = {
  id: string
  name: string
  tagline: string
  price: number
  delay: string
  highlight: boolean
  features: readonly string[]
  cta: string
  anchor: string
}

export function PricingCard({
  id,
  name,
  tagline,
  price,
  delay,
  highlight,
  features,
  cta,
  anchor,
}: PricingCardProps) {
  return (
    <TiltCard className="h-full">
      <div
        className={`relative glass-card rounded-md p-4 flex flex-col h-full ${
          highlight
            ? 'border-evolvia-border-hover shadow-silver-glow'
            : ''
        } transition-colors`}
      >
        {highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-body px-4 py-1 rounded-md" style={{ background: 'var(--accent)', color: 'var(--white)' }}>
            Recommandé
          </div>
        )}

        <div className="mb-3">
          <h3 className="font-body text-lg font-medium text-evolvia-text mb-1">
            {name}
          </h3>
          <p className="text-evolvia-muted text-sm font-body">{tagline}</p>
        </div>

        <div className="mb-1">
          <span className="font-display text-5xl font-light text-chrome">
            {price.toLocaleString('fr-FR')}€
          </span>
        </div>
        <div className="text-evolvia-muted text-xs font-body mb-3">
          Livré en {delay} · Acompte 50%
        </div>

        <ul className="flex-1 space-y-1.5 mb-4">
          {features.map((f, j) => (
            <li
              key={j}
              className="text-evolvia-text-secondary text-sm font-body flex items-start gap-2"
            >
              <span className="text-evolvia-silver mt-0.5">&mdash;</span>
              {f}
            </li>
          ))}
        </ul>

        <p className="text-evolvia-silver/60 text-xs font-body mb-3 text-center">
          {anchor}
        </p>

        <Link
          href={`/commande?offre=${id}`}
          className={`block text-center font-body text-sm py-3 rounded-full transition-all duration-300 justify-center ${
            highlight
              ? 'btn-primary'
              : 'border border-evolvia-border text-evolvia-text hover:border-evolvia-border-hover hover-silver-glow'
          }`}
        >
          {cta}
        </Link>
      </div>
    </TiltCard>
  )
}
