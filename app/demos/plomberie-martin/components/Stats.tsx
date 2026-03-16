'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '< 1h', label: 'Temps d\'intervention' },
  { value: '15', suffix: 'ans', label: 'D\'expérience terrain' },
  { value: '4.8', suffix: '/5', label: 'Avis Google · 127 notes' },
  { value: '100%', label: 'Certifié Qualibat RGE' },
]

export default function Stats() {
  return (
    <section
      style={{
        backgroundColor: 'var(--pm-white)',
        borderBottom: '1px solid var(--pm-border)',
      }}
    >
      <motion.div
        style={{
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '48px',
          paddingBottom: '48px',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '32px' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center${i > 0 ? ' pm-stat-divider' : ''}`}
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              <span
                className="pm-display pm-stat-value"
                style={{
                  color: 'var(--pm-primary)',
                  lineHeight: 1.08,
                }}
              >
                {stat.value}
                {stat.suffix && (
                  <span className="pm-stat-suffix" style={{ fontWeight: 400, marginLeft: '4px' }}>
                    {stat.suffix}
                  </span>
                )}
              </span>
              <span
                className="uppercase"
                style={{
                  color: 'var(--pm-text-muted)',
                  fontSize: '11px',
                  lineHeight: '1.45',
                  letterSpacing: '0.08em',
                  marginTop: '8px',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
