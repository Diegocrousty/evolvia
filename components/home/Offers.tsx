import Link from 'next/link'
import { offers, retainerSite, retainerChatbot } from '@/content/offers'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Offers() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <AnimatedSection key={offer.id} delay={i * 0.1} className={offer.highlight ? 'md:scale-[1.04] md:-my-4 z-10' : ''}>
              <div
                className={`glass-card rounded-md p-6 flex flex-col h-full relative transition-transform duration-300 ${
                  offer.highlight
                    ? 'border-evolvia-border-hover shadow-silver-glow'
                    : ''
                }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[var(--accent)] text-white text-xs font-body px-4 py-1 rounded-full">
                    Recommand&eacute;
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="font-body text-lg font-medium text-evolvia-text mb-1">
                    {offer.name}
                  </h3>
                  <p className="text-evolvia-muted text-sm font-body">
                    {offer.tagline}
                  </p>
                </div>

                <div className="mb-4">
                  <span className="font-display text-3xl font-light text-chrome">
                    {offer.price.toLocaleString('fr-FR')}&euro;
                  </span>
                  <span className="text-evolvia-muted text-sm font-body ml-2">
                    &middot; {offer.delay}
                  </span>
                </div>

                <ul className="flex-1 space-y-2 mb-6">
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

        {/* Séparateur */}
        <div className="w-72 h-px mx-auto mt-20 mb-16" style={{ background: 'rgba(240,238,235,0.15)' }} />

        {/* Forfaits maintenance — côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[retainerSite, retainerChatbot].map((plan) => (
            <AnimatedSection key={plan.name}>
              <div className="glass-card rounded-md p-5 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-light text-evolvia-text mb-0.5">
                      {plan.name}
                    </h3>
                    <p className="text-evolvia-muted font-body text-sm">
                      {plan.tagline}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-2xl font-light text-chrome">
                      {plan.price}&euro;
                    </div>
                    <div className="text-evolvia-muted text-xs font-body">
                      /{plan.period}
                    </div>
                  </div>
                </div>
                <ul className="space-y-1.5">
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
