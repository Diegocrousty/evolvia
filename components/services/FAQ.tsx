'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: "Est-ce que je dois fournir du contenu (textes, photos) ?",
    a: "Non, on gère tout. On rédige les textes adaptés à votre métier et on utilise des visuels professionnels. Si vous avez des photos de vos réalisations, c'est un plus mais ce n'est pas obligatoire.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Un acompte de 50% à la commande, le solde à la livraison. Paiement par carte bancaire sécurisé via Stripe. Si le résultat ne vous convient pas, vous êtes remboursé.",
  },
  {
    q: "Est-ce que je pourrai modifier mon site après ?",
    a: "Oui. Vous recevez un accès complet à votre site. Pour les modifications courantes (textes, images), notre forfait maintenance à 150€/mois inclut les mises à jour illimitées.",
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: "Oui. Chaque site est optimisé pour le référencement local (SEO). On configure les balises, la vitesse de chargement et la structure pour que Google vous trouve facilement.",
  },
  {
    q: "Qu'est-ce que le chatbot IA inclus dans l'offre Pro ?",
    a: "C'est un assistant intelligent intégré à votre site qui répond aux questions de vos visiteurs 24h/24, 7j/7. Il qualifie les prospects et vous envoie un résumé par email.",
  },
  {
    q: "Est-ce que l'hébergement est vraiment inclus ?",
    a: "Oui, la première année d'hébergement est incluse dans toutes nos offres Business et Pro. Ensuite, le renouvellement est proposé au tarif préférentiel de notre forfait maintenance.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 data-cursor-headline className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light mb-12 text-center">
          Questions{' '}
          <span className="italic text-chrome">fréquentes</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-evolvia-border rounded-2xl overflow-hidden hover:border-evolvia-border-hover transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-evolvia-text font-body text-sm">
                  {faq.q}
                </span>
                <span
                  className={`text-evolvia-silver text-xl shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-evolvia-muted font-body text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
