'use client'

const items = [
  'Livraison 3 jours',
  'Sites pro dès 490\u20ac',
  'IA intégrée',
  'Acompte 50% seulement',
  'Hébergement inclus',
  'SEO optimisé',
  'Design sur-mesure',
  'Support réactif',
]

function MarqueeRow() {
  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-3 whitespace-nowrap px-6"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
          <span
            className="font-body text-sm tracking-wide"
            style={{ color: 'var(--white-40)' }}
          >
            {item}
          </span>
        </span>
      ))}
    </>
  )
}

export function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-6"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div
        className="flex"
        style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}
      >
        <MarqueeRow />
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  )
}
