'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '< 2h', label: 'Intervention urgence' },
  { value: '5', suffix: 'ans', label: 'D\'expérience terrain' },
  { value: '4.9', suffix: '/5', label: 'Avis Google · 110 notes' },
  { value: '110', suffix: '+', label: 'Clients satisfaits' },
]

export default function Stats() {
  return (
    <section
      style={{
        backgroundColor: 'var(--vp-white)',
        borderBottom: '1px solid var(--vp-border)',
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
              className={`flex flex-col items-center text-center${i > 0 ? ' vp-stat-divider' : ''}`}
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              <span
                className="vp-display vp-stat-value"
                style={{
                  color: 'var(--vp-primary)',
                  lineHeight: 1.08,
                }}
              >
                {stat.value}
                {stat.suffix && (
                  <span className="vp-stat-suffix" style={{ fontWeight: 400, marginLeft: '4px' }}>
                    {stat.suffix}
                  </span>
                )}
              </span>
              <span
                className="uppercase"
                style={{
                  color: 'var(--vp-text-muted)',
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
