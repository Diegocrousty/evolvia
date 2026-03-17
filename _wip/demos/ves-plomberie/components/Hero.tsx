'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, FileText, Star } from 'lucide-react'

interface HeroProps {
  image: { src: string; alt: string; credit: string; creditUrl: string }
}

export default function Hero({ image }: HeroProps) {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--vp-primary)', minHeight: 'min(88vh, 720px)' }}
    >
      {/* Background image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay — gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(27,58,107,0.85) 0%, rgba(27,58,107,0.65) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content — LEFT ALIGNED */}
      <div
        className="relative w-full"
        style={{
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '96px',
          paddingBottom: '96px',
          zIndex: 2,
        }}
      >
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge — dark blue, NOT accent */}
          <span
            className="vp-badge-info inline-block"
            style={{ letterSpacing: '0.12em', marginBottom: '32px' }}
          >
            Dépannage rapide · Lyon & agglomération
          </span>

          {/* H1 — 48px desktop / 32px mobile (échelle Design System) */}
          <h1
            className="vp-display vp-hero-h1"
            style={{
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Votre plombier<br />
            de confiance<br className="hidden md:block" />
            <span style={{ fontWeight: 600 }}> à Lyon</span>
          </h1>

          {/* Trust line — opacity 82% — REAL data */}
          <div
            className="flex flex-wrap items-center"
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '15px',
              lineHeight: 1.7,
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <span className="flex items-center" style={{ gap: '4px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="var(--vp-star)" stroke="none" aria-hidden="true" />
              ))}
              <span style={{ marginLeft: '4px' }}>4.9/5 — 110 avis</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>5 ans d&apos;expérience</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>Assurance décennale</span>
          </div>

          {/* Subtitle — 17px Body+ — opacity 82% */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '17px',
              lineHeight: 1.65,
              maxWidth: '440px',
              marginBottom: '48px',
            }}
          >
            Dépannage plomberie, rénovation salle de bain, chauffage, recherche de fuite.
            Devis gratuit sous 24h — intervention rapide sur tout Lyon et sa périphérie.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row" style={{ gap: '16px' }}>
            <a
              href="tel:0624446176"
              aria-label="Appeler maintenant au 06 24 44 61 76"
              className="vp-cta-primary inline-flex items-center justify-center hover:scale-[1.02] active:scale-[0.97]"
              style={{ gap: '12px' }}
            >
              <Phone size={17} />
              Appeler — 06 24 44 61 76
            </a>
            <a
              href="#devis"
              className="vp-cta-secondary-light inline-flex items-center justify-center"
              style={{ gap: '12px' }}
            >
              <FileText size={17} />
              Demander un devis gratuit
            </a>
          </div>
        </motion.div>
      </div>

      {/* Photo credit */}
      <div
        className="absolute"
        style={{
          zIndex: 2,
          color: 'rgba(255, 255, 255, 0.25)',
          fontSize: '11px',
          lineHeight: '1.45',
          bottom: '12px',
          right: '24px',
        }}
      >
        Photo :{' '}
        <a
          href={image.creditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {image.credit}
        </a>{' '}
        / Unsplash
      </div>
    </section>
  )
}
