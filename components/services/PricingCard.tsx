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
        className={`relative glass-card rounded-2xl p-8 flex flex-col h-full ${
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

        <div className="mb-6">
          <h3 className="font-display text-2xl font-light text-evolvia-text mb-1">
            {name}
          </h3>
          <p className="text-evolvia-muted text-sm font-body">{tagline}</p>
        </div>

        <div className="mb-2">
          <span className="font-display text-5xl font-light text-chrome">
            {price.toLocaleString('fr-FR')}€
          </span>
        </div>
        <div className="text-evolvia-muted text-xs font-body mb-6">
          Livré en {delay} · Acompte 50%
        </div>

        <ul className="flex-1 space-y-3 mb-8">
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

        <p className="text-evolvia-silver/60 text-xs font-body mb-4 text-center">
          {anchor}
        </p>

        <Link
          href={`/commande?offre=${id}`}
          className="block text-center font-body text-sm py-3.5 rounded-sm transition-all duration-300 btn-primary justify-center"
        >
          {cta}
        </Link>
      </div>
    </TiltCard>
  )
}
