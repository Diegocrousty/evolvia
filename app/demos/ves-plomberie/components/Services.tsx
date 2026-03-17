'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Dépannage urgence',
    description: 'Fuite d\'eau, canalisation bouchée, mécanisme WC, panne eau chaude. Votre plombier urgence Lyon intervient sous 2h.',
    price: 'Devis gratuit',
    badge: 'Réactif 7j/7',
  },
  {
    title: 'Rénovation salle de bain',
    description: 'De la conception à la finition. Douche à l\'italienne, remplacement baignoire, carrelage. Partenaire Aubade — accès showrooms.',
    price: 'Devis gratuit',
  },
  {
    title: 'Chauffage & chaudière',
    description: 'Entretien, dépannage et remplacement de chaudière. Installation chauffage central, plancher chauffant.',
    price: 'Devis gratuit',
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
        backgroundColor: 'var(--vp-bg)',
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
            className="vp-display"
            style={{
              color: 'var(--vp-primary)',
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
              color: 'var(--vp-text-secondary)',
              fontSize: '17px',
              lineHeight: 1.6,
              maxWidth: '420px',
            }}
          >
            Plomberie, chauffage, rénovation — on s&apos;occupe de tout
          </p>
        </motion.div>

        {/* SKILL: Grid responsive 1 col mobile, asymmetric desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: '24px' }}>
          {/* Featured: Dépannage urgent — spans 7 cols */}
          <motion.div
            className="vp-card overflow-hidden md:col-span-7"
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
                <span className="vp-badge-info inline-block" style={{ marginBottom: '12px' }}>
                  {services[0].badge}
                </span>
              )}
              <h3
                className="vp-display"
                style={{
                  color: 'var(--vp-primary)',
                  fontSize: '24px',
                  lineHeight: 1.3,
                  marginBottom: '8px',
                }}
              >
                {services[0].title}
              </h3>
              <p
                style={{
                  color: 'var(--vp-text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  maxWidth: '400px',
                  marginBottom: '16px',
                }}
              >
                {services[0].description}
              </p>
              <a href="#devis" className="vp-service-link">
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
                  className="vp-card overflow-hidden flex-1"
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
                          color: 'var(--vp-primary)',
                          fontSize: '17px',
                          lineHeight: 1.6,
                          marginBottom: '4px',
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          color: 'var(--vp-text-secondary)',
                          fontSize: '15px',
                          lineHeight: 1.7,
                          marginBottom: '12px',
                        }}
                      >
                        {service.description}
                      </p>
                      <a href="#devis" className="vp-service-link" style={{ fontSize: '13px' }}>
                        {service.price} →
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Additional services — compact inline tags (avoids 3-card grid anti-pattern) */}
        <motion.div
          style={{
            marginTop: '32px',
            padding: '24px 32px',
            backgroundColor: 'var(--vp-bg-alt)',
            borderRadius: '12px',
            border: '1px solid var(--vp-border)',
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span
            className="block uppercase font-bold"
            style={{
              color: 'var(--vp-text-muted)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            Également disponible
          </span>
          <div className="flex flex-wrap" style={{ gap: '12px' }}>
            {['Recherche de fuite', 'Chauffe-eau & ballon', 'Mécanisme WC', 'Installation tuyauterie', 'Robinetterie', 'Détartrage'].map((s) => (
              <a
                key={s}
                href="#devis"
                className="inline-flex items-center"
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--vp-white)',
                  border: '1px solid var(--vp-border)',
                  borderRadius: '8px',
                  color: 'var(--vp-primary)',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
