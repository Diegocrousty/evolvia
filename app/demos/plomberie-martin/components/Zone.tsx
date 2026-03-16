'use client'

import { motion } from 'framer-motion'

const paris = [
  'Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e',
  'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e',
  'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e',
  'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e',
]

const banlieue = [
  'Vincennes', 'Montreuil', 'Bagnolet', 'Saint-Denis',
  'Aubervilliers', 'Nanterre', 'Boulogne', 'Issy',
  'Montrouge', 'Ivry',
]

export default function Zone() {
  return (
    <section
      id="zone"
      style={{
        backgroundColor: 'var(--pm-primary)',
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="pm-display"
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
              maxWidth: '400px',
              marginBottom: '48px',
            }}
          >
            On intervient dans tout Paris et la petite couronne — Urgence &lt; 2h, planifié sous 48h
          </p>
        </motion.div>

        {/* Paris intra-muros */}
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
            Paris intra-muros
          </span>
          <div className="flex flex-wrap" style={{ gap: '8px' }}>
            {paris.map((zone) => (
              <span key={zone} className="pm-zone-badge">{zone}</span>
            ))}
          </div>
        </motion.div>

        {/* Petite couronne */}
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
            Petite couronne (92 · 93 · 94)
          </span>
          <div className="flex flex-wrap" style={{ gap: '8px' }}>
            {banlieue.map((zone) => (
              <span key={zone} className="pm-zone-badge">{zone}</span>
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
          Déplacement gratuit — Devis sans engagement — Réponse sous 2h
        </p>
      </div>
    </section>
  )
}
