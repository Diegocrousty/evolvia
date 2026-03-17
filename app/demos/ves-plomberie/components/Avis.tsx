'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

/* VRAIS avis Google de VES PLOMBERIE — extraits le 17/03/2026 */
const avis = [
  {
    stars: 5,
    text: 'Réactivité exemplaire, dépannage rapide, travail soigné. Laisse le chantier nickel. Et en plus, souriant et aimable. Je recommande vivement.',
    prenom: 'Rosine M.',
    lieu: 'Lyon',
    date: 'Février 2026',
  },
  {
    stars: 5,
    text: 'J\'ai cherché en vain la 6e étoile sur Google ! C\'était la 2e rénovation complète de salle de bain avec Ludovic et son équipe. Si comme nous, vous êtes des clients fidèles, c\'est que le travail est impeccable.',
    prenom: 'Carole M.',
    lieu: 'Lyon',
    date: 'Octobre 2025',
  },
  {
    stars: 5,
    text: 'Et oui ça existe encore des plombiers rapides et sérieux ! J\'ai appelé à 16h30 pour un chauffe-eau percé et le lendemain à 8h30 ils étaient là. Travail nickel.',
    prenom: 'Christian D.',
    lieu: 'Lyon',
    date: 'Novembre 2022',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex" style={{ gap: '4px' }} role="img" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={15}
          fill="var(--vp-star)"
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
        backgroundColor: 'var(--vp-white)',
        paddingTop: '128px',
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
            className="vp-display"
            style={{
              color: 'var(--vp-primary)',
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
              color: 'var(--vp-text-secondary)',
              fontSize: '15px',
              gap: '8px',
            }}
          >
            <span className="flex" style={{ gap: '4px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="var(--vp-star)" stroke="none" aria-hidden="true" />
              ))}
            </span>
            4.9/5 — 110 avis vérifiés Google
          </p>
        </motion.div>

        {/* Layout varié : 1 featured + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: '24px' }}>
          {/* Featured review */}
          <motion.div
            className="vp-review-card md:col-span-5"
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
                color: 'var(--vp-text)',
                fontSize: '17px',
                lineHeight: 1.6,
              }}
            >
              &ldquo;{avis[0].text}&rdquo;
            </p>
            <p style={{ marginTop: '24px', fontSize: '15px' }}>
              <span className="font-bold" style={{ color: 'var(--vp-primary)' }}>
                {avis[0].prenom}
              </span>
              <span style={{ marginLeft: '8px', color: 'var(--vp-text-muted)' }}>
                — {avis[0].lieu} · {avis[0].date}
              </span>
            </p>
          </motion.div>

          {/* 2 smaller reviews */}
          <div className="md:col-span-7 flex flex-col" style={{ gap: '24px' }}>
            {avis.slice(1).map((review, i) => (
              <motion.div
                key={review.prenom}
                className="vp-review-card flex-1"
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
                    color: 'var(--vp-text)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <p style={{ marginTop: '12px', fontSize: '15px' }}>
                  <span className="font-bold" style={{ color: 'var(--vp-primary)' }}>
                    {review.prenom}
                  </span>
                  <span style={{ marginLeft: '8px', color: 'var(--vp-text-muted)' }}>
                    — {review.lieu} · {review.date}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <p
          style={{
            marginTop: '32px',
            color: 'var(--vp-text-muted)',
            fontSize: '11px',
            lineHeight: '1.45',
          }}
        >
          Avis clients authentiques Google — Site réalisé par Evolvia
        </p>
      </div>
    </section>
  )
}
