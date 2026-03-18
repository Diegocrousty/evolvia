'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, FileCheck, Shield, Award } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Réactivité',
    description: 'Disponible du lundi au samedi, devis sous 24h. Vos urgences sont notre priorité.',
  },
  {
    icon: FileCheck,
    title: 'Prix transparent',
    description: 'Devis détaillé gratuit avant tout travail. Tarifs honnêtes, aucune surprise à la facture.',
  },
  {
    icon: Shield,
    title: 'Travaux garantis',
    description: 'Assurance décennale sur tous nos travaux. Matériaux de qualité, finitions soignées.',
  },
  {
    icon: Award,
    title: 'Partenaire Aubade',
    description: 'Accès aux showrooms Aubade de Limonest et Villeurbanne. Choix premium de matériaux pour vos salles de bain.',
  },
]

interface WhyUsProps {
  image: { src: string; alt: string }
}

export default function WhyUs({ image }: WhyUsProps) {
  return (
    <section
      style={{
        backgroundColor: 'var(--vp-bg-alt)',
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
            }}
          >
            Pourquoi choisir<br />
            VES Plomberie ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start" style={{ gap: '64px' }}>
          {/* Photo artisan */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '12px' }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p
              style={{
                marginTop: '12px',
                color: 'var(--vp-text-muted)',
                fontSize: '11px',
                lineHeight: '1.45',
              }}
            >
              Ludovic Vesque — Fondateur, 5 ans d&apos;expérience
            </p>
          </motion.div>

          {/* Arguments */}
          <motion.div
            className="flex flex-col"
            style={{ gap: '32px', paddingTop: '16px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div key={reason.title} className="flex" style={{ gap: '16px' }}>
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: 'rgba(27, 58, 107, 0.08)',
                    }}
                  >
                    <Icon size={17} style={{ color: 'var(--vp-primary)' }} strokeWidth={2} />
                  </div>
                  <div>
                    <h3
                      className="font-semibold"
                      style={{
                        color: 'var(--vp-primary)',
                        fontSize: '17px',
                        lineHeight: 1.6,
                        marginBottom: '4px',
                      }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--vp-text-secondary)',
                        fontSize: '15px',
                        lineHeight: 1.7,
                      }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
