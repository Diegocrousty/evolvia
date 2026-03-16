'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const avis = [
  {
    stars: 5,
    text: 'Intervention rapide pour une fuite importante. Jean-Pierre est arrivé en 45 minutes, problème réglé proprement. Je recommande.',
    prenom: 'Marie L.',
    lieu: 'Paris 11e',
  },
  {
    stars: 5,
    text: 'Rénovation complète de notre salle de bain. Travail soigné, délais respectés, prix honnête. On referait appel sans hésiter.',
    prenom: 'Thomas B.',
    lieu: 'Vincennes',
  },
  {
    stars: 5,
    text: 'Changement chauffe-eau en urgence un dimanche soir. Disponible, professionnel et pas de surfacturation. Parfait.',
    prenom: 'Sophie M.',
    lieu: 'Paris 12e',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex" style={{ gap: '4px' }} role="img" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={15}
          fill="var(--pm-star)"
          stroke="none"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Avis() {
  return (
    <section
      id="avis"
      style={{
        backgroundColor: 'var(--pm-white)',
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          style={{ marginBottom: '48px' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="pm-display"
            style={{
              color: 'var(--pm-primary)',
              fontSize: '32px',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginBottom: '12px',
            }}
          >
            Ce que disent nos clients
          </h2>
          <p
            className="flex items-center"
            style={{
              color: 'var(--pm-text-secondary)',
              fontSize: '15px',
              gap: '8px',
            }}
          >
            <span className="flex" style={{ gap: '4px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="var(--pm-star)" stroke="none" aria-hidden="true" />
              ))}
            </span>
            4.8/5 — 127 avis vérifiés Google
          </p>
        </motion.div>

        {/* Layout varié : 1 featured + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: '24px' }}>
          {/* Featured review */}
          <motion.div
            className="pm-review-card md:col-span-5"
            style={{ padding: '32px' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Stars count={avis[0].stars} />
            <p
              style={{
                marginTop: '16px',
                color: 'var(--pm-text)',
                fontSize: '17px',
                lineHeight: 1.6,
              }}
            >
              &ldquo;{avis[0].text}&rdquo;
            </p>
            <p style={{ marginTop: '24px', fontSize: '15px' }}>
              <span className="font-bold" style={{ color: 'var(--pm-primary)' }}>
                {avis[0].prenom}
              </span>
              <span style={{ marginLeft: '8px', color: 'var(--pm-text-muted)' }}>
                — {avis[0].lieu}
              </span>
            </p>
          </motion.div>

          {/* 2 smaller reviews */}
          <div className="md:col-span-7 flex flex-col" style={{ gap: '24px' }}>
            {avis.slice(1).map((review, i) => (
              <motion.div
                key={review.prenom}
                className="pm-review-card flex-1"
                style={{ padding: '24px' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.08 + i * 0.06,
                }}
              >
                <Stars count={review.stars} />
                <p
                  style={{
                    marginTop: '12px',
                    color: 'var(--pm-text)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <p style={{ marginTop: '12px', fontSize: '15px' }}>
                  <span className="font-bold" style={{ color: 'var(--pm-primary)' }}>
                    {review.prenom}
                  </span>
                  <span style={{ marginLeft: '8px', color: 'var(--pm-text-muted)' }}>
                    — {review.lieu}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <p
          style={{
            marginTop: '32px',
            color: 'var(--pm-text-muted)',
            fontSize: '11px',
            lineHeight: '1.45',
          }}
        >
          Avis illustratifs — site réalisé par Evolvia à titre de démonstration
        </p>
      </div>
    </section>
  )
}
