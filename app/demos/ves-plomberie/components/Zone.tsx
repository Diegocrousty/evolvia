'use client'

import { motion } from 'framer-motion'

const lyonArrondissements = [
  'Lyon 1er', 'Lyon 2e', 'Lyon 3e', 'Lyon 4e', 'Lyon 5e',
  'Lyon 6e', 'Lyon 7e', 'Lyon 8e', 'Lyon 9e',
]

const agglomeration = [
  'Villeurbanne', 'Caluire', 'Écully', 'Tassin',
  'Oullins', 'Bron', 'Vénissieux', 'Saint-Fons',
  'Vaulx-en-Velin', 'Rillieux',
]

export default function Zone() {
  return (
    <section
      id="zone"
      style={{
        backgroundColor: 'var(--vp-primary)',
        paddingTop: '64px',
        paddingBottom: '64px',
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="vp-display"
            style={{
              color: '#fff',
              fontSize: '32px',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginBottom: '12px',
            }}
          >
            Zone d&apos;intervention
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.60)',
              fontSize: '17px',
              lineHeight: 1.6,
              maxWidth: '420px',
              marginBottom: '48px',
            }}
          >
            Besoin d&apos;un plombier urgence Lyon&nbsp;? On intervient dans tout Lyon et l&apos;agglomération — sous 2h en urgence, sous 48h en planifié
          </p>
        </motion.div>

        {/* Lyon intra-muros */}
        <motion.div
          style={{ marginBottom: '32px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span
            className="block uppercase font-bold"
            style={{
              color: 'rgba(255, 255, 255, 0.40)',
              fontSize: '11px',
              lineHeight: '1.45',
              letterSpacing: '0.12em',
              marginBottom: '12px',
            }}
          >
            Lyon intra-muros
          </span>
          <div className="flex flex-wrap" style={{ gap: '8px' }}>
            {lyonArrondissements.map((zone) => (
              <span key={zone} className="vp-zone-badge">{zone}</span>
            ))}
          </div>
        </motion.div>

        {/* Agglomération */}
        <motion.div
          style={{ marginBottom: '48px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span
            className="block uppercase font-bold"
            style={{
              color: 'rgba(255, 255, 255, 0.40)',
              fontSize: '11px',
              lineHeight: '1.45',
              letterSpacing: '0.12em',
              marginBottom: '12px',
            }}
          >
            Agglomération lyonnaise
          </span>
          <div className="flex flex-wrap" style={{ gap: '8px' }}>
            {agglomeration.map((zone) => (
              <span key={zone} className="vp-zone-badge">{zone}</span>
            ))}
          </div>
        </motion.div>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.60)',
            fontSize: '15px',
            lineHeight: 1.7,
          }}
        >
          Devis gratuit — Sans engagement — Réponse sous 24h
        </p>
      </div>
    </section>
  )
}
