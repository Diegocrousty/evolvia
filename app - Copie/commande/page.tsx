'use client'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { offers } from '@/content/offers'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

function CommandeContent() {
  const searchParams = useSearchParams()
  const offreParam = searchParams.get('offre')
  const [selectedOffer, setSelectedOffer] = useState(
    offreParam || 'business'
  )
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    details: '',
  })

  const offer = offers.find((o) => o.id === selectedOffer) || offers[1]
  const deposit = Math.round(offer.price / 2)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[COMMANDE — ${offer.name} à ${offer.price}€]\n\nActivité : ${formData.business}\n\nDétails : ${formData.details}`,
        }),
      })

      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <section className="min-h-screen pt-32 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 text-center border-evolvia-silver/20">
              <div className="text-evolvia-silver text-4xl mb-4">✓</div>
              <h2 className="font-display text-3xl font-light text-evolvia-text mb-3">
                Commande reçue
              </h2>
              <p className="text-evolvia-muted font-body mb-6">
                On vous envoie un devis détaillé + lien de paiement sous 24h.
                Vérifiez vos spams.
              </p>
              <p className="text-evolvia-text-secondary font-body text-sm">
                Offre : {offer.name} — {offer.price.toLocaleString('fr-FR')}€
                (acompte {deposit}€)
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light mb-6 leading-tight">
            Commander{' '}
            <span className="italic text-chrome">
              votre site
            </span>
          </h1>
          <p className="text-evolvia-muted font-body text-lg mb-12">
            Remplissez ce formulaire et recevez un devis + lien de paiement
            sous 24h.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Offer selector */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {offers.map((o) => (
              <button
                key={o.id}
                onClick={() => setSelectedOffer(o.id)}
                className={`border rounded-2xl p-4 text-center transition-all duration-300 ${
                  selectedOffer === o.id
                    ? 'border-evolvia-silver/40 bg-white/[0.05]'
                    : 'border-evolvia-border hover:border-evolvia-border-hover'
                }`}
              >
                <div className="font-display text-lg font-light text-evolvia-text">
                  {o.name}
                </div>
                <div className="font-display text-2xl font-light text-chrome mt-1">
                  {o.price.toLocaleString('fr-FR')}€
                </div>
                <div className="text-evolvia-muted text-xs font-body mt-1">
                  {o.delay}
                </div>
              </button>
            ))}
          </div>

          {/* Deposit reminder */}
          <div className="glass-card rounded-2xl p-5 mb-8 flex items-center gap-4">
            <span className="text-evolvia-silver text-2xl">💳</span>
            <div>
              <p className="text-evolvia-text font-body text-sm">
                Acompte de 50% à la commande :{' '}
                <span className="font-display text-xl text-chrome">
                  {deposit}€
                </span>
              </p>
              <p className="text-evolvia-muted font-body text-xs">
                Solde de {deposit}€ à la livraison. Remboursement si non
                satisfait.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-evolvia-text font-body text-sm mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-evolvia-border rounded-2xl px-5 py-3.5 text-evolvia-text font-body text-sm placeholder:text-evolvia-muted focus:border-evolvia-silver/50 focus:outline-none transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-evolvia-text font-body text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-evolvia-border rounded-2xl px-5 py-3.5 text-evolvia-text font-body text-sm placeholder:text-evolvia-muted focus:border-evolvia-silver/50 focus:outline-none transition-colors"
                  placeholder="jean@entreprise.fr"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-evolvia-text font-body text-sm mb-2">
                  Téléphone{' '}
                  <span className="text-evolvia-muted">(optionnel)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-evolvia-border rounded-2xl px-5 py-3.5 text-evolvia-text font-body text-sm placeholder:text-evolvia-muted focus:border-evolvia-silver/50 focus:outline-none transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label className="block text-evolvia-text font-body text-sm mb-2">
                  Votre activité *
                </label>
                <input
                  type="text"
                  required
                  value={formData.business}
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-evolvia-border rounded-2xl px-5 py-3.5 text-evolvia-text font-body text-sm placeholder:text-evolvia-muted focus:border-evolvia-silver/50 focus:outline-none transition-colors"
                  placeholder="Plombier, électricien, agent immobilier..."
                />
              </div>
            </div>

            <div>
              <label className="block text-evolvia-text font-body text-sm mb-2">
                Détails supplémentaires
              </label>
              <textarea
                rows={4}
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                className="w-full bg-white/[0.03] border border-evolvia-border rounded-2xl px-5 py-3.5 text-evolvia-text font-body text-sm placeholder:text-evolvia-muted focus:border-evolvia-silver/50 focus:outline-none transition-colors resize-none"
                placeholder="Avez-vous déjà un site ? Des préférences de couleurs ? Des exemples de sites que vous aimez ?"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 font-body text-sm">
                Une erreur est survenue. Réessayez ou{' '}
                <Link
                  href="/contact"
                  className="underline underline-offset-2"
                >
                  contactez-nous directement
                </Link>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full btn-primary disabled:opacity-50"
            >
              {status === 'sending'
                ? 'Envoi en cours...'
                : `Commander — ${offer.name} à ${offer.price.toLocaleString('fr-FR')}€`}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default function CommandePage() {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="font-display text-4xl font-light text-evolvia-text">
              Chargement...
            </div>
          </div>
        </section>
      }
    >
      <CommandeContent />
    </Suspense>
  )
}
