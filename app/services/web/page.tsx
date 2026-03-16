import { offers, retainer } from '@/content/offers'
import { PricingCard } from '@/components/services/PricingCard'
import { FAQ } from '@/components/services/FAQ'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offres sites web — Evolvia | À partir de 490€',
  description:
    'Sites web professionnels pour artisans et PME françaises. Landing page à 490€, site vitrine à 990€, site + chatbot IA à 1490€. Livraison en 3 à 7 jours.',
}

export default function WebServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light mb-6 leading-tight">
              Nos offres{' '}
              <span className="italic text-chrome">
                sites web
              </span>
            </h1>
            <p className="text-evolvia-muted font-body max-w-lg mx-auto text-lg">
              Choisissez votre formule. Commandez en ligne. Recevez votre site
              en quelques jours. Acompte 50% à la commande.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <AnimatedSection key={offer.id} delay={i * 0.1}>
                <PricingCard {...offer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer / Maintenance */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-light text-evolvia-text mb-2">
                    Forfait maintenance
                  </h3>
                  <p className="text-evolvia-muted font-body text-sm mb-4">
                    Gardez votre site à jour et performant.
                  </p>
                  <ul className="space-y-2">
                    {retainer.features.map((f, i) => (
                      <li
                        key={i}
                        className="text-evolvia-text-secondary text-sm font-body flex items-center gap-2"
                      >
                        <span className="text-evolvia-silver">&mdash;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-right shrink-0">
                  <div className="font-display text-5xl font-light text-chrome">
                    {retainer.price}€
                  </div>
                  <div className="text-evolvia-muted text-sm font-body">
                    /{retainer.period}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  )
}
