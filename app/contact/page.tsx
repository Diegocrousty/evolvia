'use client'
import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light mb-6 leading-tight">
            Parlons de{' '}
            <span className="italic text-chrome">
              votre projet
            </span>
          </h1>
          <p className="text-evolvia-muted font-body text-lg mb-12">
            Décrivez votre activité et vos besoins. On vous répond sous 24h
            avec une proposition concrète.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {status === 'sent' ? (
            <div className="glass-card rounded-2xl p-12 text-center border-evolvia-silver/20">
              <div className="text-evolvia-silver text-4xl mb-4">✓</div>
              <h2 className="font-display text-3xl font-light text-evolvia-text mb-3">
                Message envoyé
              </h2>
              <p className="text-evolvia-muted font-body">
                On vous répond sous 24h. Vérifiez vos spams si vous ne recevez
                pas de confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Décrivez votre besoin *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-evolvia-border rounded-2xl px-5 py-3.5 text-evolvia-text font-body text-sm placeholder:text-evolvia-muted focus:border-evolvia-silver/50 focus:outline-none transition-colors resize-none"
                  placeholder="Je suis plombier à Paris et j'aimerais un site pour recevoir des demandes de devis..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 font-body text-sm">
                  Une erreur est survenue. Réessayez ou contactez-nous
                  directement par email.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary disabled:opacity-50"
              >
                {status === 'sending'
                  ? 'Envoi en cours...'
                  : 'Envoyer ma demande'}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
