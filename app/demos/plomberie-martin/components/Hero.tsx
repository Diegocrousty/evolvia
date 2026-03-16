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
      style={{ backgroundColor: 'var(--pm-primary)', minHeight: '88vh' }}
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
          {/* Badge urgence — dark blue, NOT accent */}
          <span
            className="pm-badge-info inline-block"
            style={{ letterSpacing: '0.12em', marginBottom: '32px' }}
          >
            Urgence 24h/24 — Intervention &lt; 1h
          </span>

          {/* H1 — 48px desktop / 32px mobile (échelle Design System) */}
          <h1
            className="pm-display pm-hero-h1"
            style={{
              color: '#fff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Votre plombier<br />
            de confiance<br className="hidden md:block" />
            <span style={{ fontWeight: 600 }}> à Paris</span>
          </h1>

          {/* Trust line — opacity 82% */}
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
                <Star key={i} size={13} fill="var(--pm-star)" stroke="none" aria-hidden="true" />
              ))}
              <span style={{ marginLeft: '4px' }}>4.8/5 — 127 avis</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>15 ans d&apos;expérience</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>Qualibat certifié</span>
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
            Dépannage en 1h, rénovation clé-en-main, installation.
            On intervient dans tout Paris et petite couronne.
          </p>

          {/* CTAs — padding géré par CSS classes */}
          <div className="flex flex-col sm:flex-row" style={{ gap: '16px' }}>
            <a
              href="tel:0612345678"
              aria-label="Appeler maintenant au 06 12 34 56 78"
              className="pm-cta-primary inline-flex items-center justify-center hover:scale-[1.02] active:scale-[0.97]"
              style={{ gap: '12px' }}
            >
              <Phone size={17} />
              Appeler — 06 12 34 56 78
            </a>
            <a
              href="#devis"
              className="pm-cta-secondary-light inline-flex items-center justify-center"
              style={{ gap: '12px' }}
            >
              <FileText size={17} />
              Demander un devis gratuit
            </a>
          </div>
        </motion.div>
      </div>

      {/* Photo credit — 11px Caption — opacity 25% */}
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
