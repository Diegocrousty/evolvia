'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Dépannage urgent',
    description: 'Fuite, canalisation bouchée, panne eau chaude. Intervention en moins d\'1h sur Paris.',
    price: 'Devis gratuit',
    badge: 'Disponible 24h/24',
  },
  {
    title: 'Rénovation salle de bain',
    description: 'De la conception à la finition. Devis gratuit et travaux garantis.',
    price: 'Devis gratuit',
  },
  {
    title: 'Installation & entretien',
    description: 'Robinetterie, WC, cumulus, chaudière. Matériaux pro, finitions soignées.',
    price: 'À partir de 80€',
  },
]

interface ServiceImage {
  src: string
  alt: string
}

export default function Services({ images }: { images: ServiceImage[] }) {
  return (
    <section
      id="services"
      style={{
        backgroundColor: 'var(--pm-bg)',
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
            Nos prestations
          </h2>
          <p
            style={{
              color: 'var(--pm-text-secondary)',
              fontSize: '17px',
              lineHeight: 1.6,
              maxWidth: '420px',
            }}
          >
            Intervention rapide sur tous types de travaux de plomberie
          </p>
        </motion.div>

        {/* SKILL: Grid responsive 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: '24px' }}>
          {/* Featured: Dépannage urgent — spans 7 cols */}
          <motion.div
            className="pm-card overflow-hidden md:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {images[0] && (
              <div className="relative overflow-hidden" style={{ height: '288px' }}>
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            )}
            <div style={{ padding: '24px' }}>
              {services[0].badge && (
                <span className="pm-badge-info inline-block" style={{ marginBottom: '12px' }}>
                  {services[0].badge}
                </span>
              )}
              <h3
                className="pm-display"
                style={{
                  color: 'var(--pm-primary)',
                  fontSize: '24px',
                  lineHeight: 1.3,
                  marginBottom: '8px',
                }}
              >
                {services[0].title}
              </h3>
              <p
                style={{
                  color: 'var(--pm-text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  maxWidth: '400px',
                  marginBottom: '16px',
                }}
              >
                {services[0].description}
              </p>
              <a
                href="#devis"
                className="inline-block font-bold"
                style={{
                  color: 'var(--pm-accent)',
                  fontSize: '15px',
                }}
              >
                {services[0].price} →
              </a>
            </div>
          </motion.div>

          {/* 2 smaller cards — stacked, spans 5 cols */}
          <div className="md:col-span-5 flex flex-col" style={{ gap: '24px' }}>
            {services.slice(1).map((service, i) => {
              const img = images[i + 1]
              return (
                <motion.div
                  key={service.title}
                  className="pm-card overflow-hidden flex-1"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + i * 0.08,
                  }}
                >
                  <div className="flex flex-col sm:flex-row md:flex-col">
                    {img && (
                      <div className="relative overflow-hidden flex-shrink-0" style={{ height: '128px' }}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 42vw"
                        />
                      </div>
                    )}
                    <div style={{ padding: '24px' }}>
                      <h3
                        className="font-semibold"
                        style={{
                          color: 'var(--pm-primary)',
                          fontSize: '17px',
                          lineHeight: 1.6,
                          marginBottom: '4px',
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          color: 'var(--pm-text-secondary)',
                          fontSize: '15px',
                          lineHeight: 1.7,
                          marginBottom: '12px',
                        }}
                      >
                        {service.description}
                      </p>
                      <span
                        className="font-bold"
                        style={{
                          color: 'var(--pm-accent)',
                          fontSize: '13px',
                        }}
                      >
                        {service.price} →
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
