import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos — Evolvia | Agence IA pour TPE/PME françaises',
  description:
    "Evolvia utilise l'intelligence artificielle pour créer des sites web professionnels en un temps record pour les artisans et commerçants français.",
}

const values = [
  {
    title: 'Rapidité',
    desc: "L'IA nous permet de livrer en 3 à 7 jours ce qui prend 2 à 3 mois ailleurs. Sans sacrifier la qualité.",
  },
  {
    title: 'Accessibilité',
    desc: 'Nos prix commencent à 490€. Un site professionnel ne devrait pas coûter 5 000€ quand on est artisan.',
  },
  {
    title: 'Simplicité',
    desc: "Vous n'avez rien à faire. Pas de brief de 20 pages, pas de réunions interminables. On gère tout de A à Z.",
  },
  {
    title: 'Résultats',
    desc: 'Chaque site est conçu pour convertir des visiteurs en clients. Pas juste pour être joli dans un portfolio.',
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light mb-8 leading-tight">
              Une agence née de{' '}
              <span className="italic text-chrome">
                la frustration
              </span>
            </h1>
            <p className="text-evolvia-muted font-body text-lg leading-relaxed max-w-2xl mb-8">
              Les artisans et commerçants français méritent un site web
              professionnel. Pas dans 3 mois. Pas pour 5 000€. Maintenant, à un
              prix juste.
            </p>
            <p className="text-evolvia-muted font-body text-lg leading-relaxed max-w-2xl">
              Evolvia combine intelligence artificielle et expertise humaine pour
              livrer des sites sur mesure en quelques jours. Chaque page est
              pensée pour votre métier, vos clients, votre zone géographique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Séparateur */}
      <div className="flex justify-center">
        <div style={{ width: 'clamp(200px, 35vw, 420px)', height: '1px', background: 'rgba(240,238,235,0.08)' }} />
      </div>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light mb-16">
              Nos{' '}
              <span className="italic text-chrome">valeurs</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border-l-2 border-evolvia-silver/20 pl-6">
                  <h3 className="font-display text-2xl font-light text-evolvia-text mb-3">
                    {v.title}
                  </h3>
                  <p className="text-evolvia-muted font-body text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 md:p-16">
              <h2 className="font-display text-3xl font-light text-evolvia-text mb-6">
                Notre mission
              </h2>
              <p className="text-evolvia-muted font-body leading-relaxed mb-8">
                Rendre la présence en ligne accessible à chaque professionnel
                français. En 2026, ne pas avoir de site web, c&apos;est perdre
                des clients chaque jour. Evolvia existe pour que ça ne soit plus
                un problème de budget ou de temps.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block"
              >
                Démarrer votre projet →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
