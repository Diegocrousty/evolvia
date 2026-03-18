import Link from 'next/link'
import { offers, retainerSite, retainerChatbot } from '@/content/offers'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Offers() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 data-cursor-headline className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-4 text-center leading-tight">
            Des offres{' '}
            <span className="italic text-chrome">
              claires et sans surprise
            </span>
          </h2>
          <p className="text-evolvia-muted font-body text-center max-w-lg mx-auto mb-16">
            Pas de devis &agrave; rallonge. Choisissez, commandez, recevez.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {offers.map((offer, i) => (
            <AnimatedSection key={offer.id} delay={i * 0.1}>
              <div
                className={`glass-card rounded-md p-8 flex flex-col h-full relative transition-transform duration-300 ${
                  offer.highlight
                    ? 'border-evolvia-border-hover shadow-silver-glow md:scale-[1.04] md:-my-4'
                    : ''
                }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[var(--accent)] text-white text-xs font-body px-4 py-1 rounded-full">
                    Recommand&eacute;
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-light text-evolvia-text mb-1">
                    {offer.name}
                  </h3>
                  <p className="text-evolvia-muted text-sm font-body">
                    {offer.tagline}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="font-display text-3xl font-light text-chrome">
                    {offer.price.toLocaleString('fr-FR')}&euro;
                  </span>
                  <span className="text-evolvia-muted text-sm font-body ml-2">
                    &middot; {offer.delay}
                  </span>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {offer.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-evolvia-text-secondary text-sm font-body flex items-start gap-2"
                    >
                      <span className="text-evolvia-silver mt-0.5">&mdash;</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/commande?offre=${offer.id}`}
                  className={`block text-center font-body text-sm py-3 rounded-full transition-all duration-300 ${
                    offer.highlight
                      ? 'btn-primary'
                      : 'border border-evolvia-border text-evolvia-text hover:border-evolvia-border-hover hover-silver-glow'
                  }`}
                >
                  {offer.cta}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Forfaits maintenance */}
        <div className="flex flex-col gap-6 mt-12">
          {[retainerSite, retainerChatbot].map((plan) => (
            <AnimatedSection key={plan.name}>
              <div className="glass-card rounded-md p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="font-display text-xl font-light text-evolvia-text mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-evolvia-muted font-body text-sm mb-4">
                      {plan.tagline}
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((f, i) => (
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
                    <div className="font-display text-3xl md:text-4xl font-light text-chrome">
                      {plan.price}&euro;
                    </div>
                    <div className="text-evolvia-muted text-sm font-body">
                      /{plan.period}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
