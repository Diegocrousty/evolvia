'use client'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  {
    target: 340000,
    suffix: '',
    label: 'prospects qualifi\u00e9s en France',
  },
  {
    target: 3,
    suffix: ' jours',
    label: 'de d\u00e9lai moyen',
  },
  {
    target: 490,
    prefix: '',
    suffix: '\u20ac',
    label: 'le prix le plus comp\u00e9titif',
  },
]

export function SocialProof() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 data-cursor-headline className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-16 text-center leading-tight">
            Les chiffres{' '}
            <span className="italic text-chrome">
              parlent d&apos;eux-m&ecirc;mes
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="text-center">
                <div className="font-display text-6xl md:text-7xl font-light text-holographic mb-3">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-evolvia-muted text-sm font-body tracking-wide">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
