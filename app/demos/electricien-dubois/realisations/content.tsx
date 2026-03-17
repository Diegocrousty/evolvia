'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { EDAnimatedSection } from '@/components/demos/electricien-dubois/AnimatedSection'
import type { UnsplashImage } from '@/lib/unsplash'

interface Project {
  title: string
  location: string
  description: string
  badge: string
  certCaption?: string
}

const projects: Project[] = [
  {
    title: 'Rénovation électrique complète',
    location: 'Maison, Lyon 6e',
    description:
      'Reprise intégrale du tableau et des circuits. 45 points lumineux, 60 prises.',
    badge: 'Rénovation',
    certCaption: 'Conforme NF C 15-100 — CONSUEL obtenu',
  },
  {
    title: 'Installation domotique',
    location: 'Appartement, Villeurbanne',
    description:
      'Volets, éclairage et thermostat connectés. Pilotage Google Home.',
    badge: 'Domotique',
  },
  {
    title: 'Borne de recharge IRVE',
    location: 'Garage privé, Caluire',
    description:
      'Wallbox 7.4kW installée et raccordée. Aide ADVENIR obtenue.',
    badge: 'IRVE',
    certCaption: 'Certification IRVE — Conforme NF C 15-100 §722',
  },
  {
    title: 'Mise aux normes NF C 15-100',
    location: 'Local commercial, Part-Dieu',
    description:
      'Diagnostic, mise en conformité et attestation CONSUEL délivrée.',
    badge: 'Conformité',
    certCaption: 'Attestation CONSUEL délivrée',
  },
  {
    title: 'Panneaux solaires 6kWc',
    location: 'Maison, Écully',
    description:
      '12 panneaux installés en autoconsommation. Raccordement Enedis conforme.',
    badge: 'Solaire',
    certCaption: 'RGE Qualifelec — Raccordement Enedis conforme',
  },
  {
    title: 'Tableau électrique neuf',
    location: 'Immeuble, Lyon 3e',
    description:
      'Remplacement complet du tableau vétuste. 3 appartements.',
    badge: 'Installation',
    certCaption: 'Conforme NF C 15-100',
  },
]

const h: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700 }
const h6: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600 }
const lbl: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11 }

function ProjectCard({
  project,
  image,
  index,
  wide,
}: {
  project: Project
  image: UnsplashImage
  index: number
  wide?: boolean
}) {
  return (
    <EDAnimatedSection delay={index * 0.8}>
      <div
        className="overflow-hidden"
        style={{
          background: '#ffffff',
          border: '1px solid var(--ed-border)',
          borderRadius: 12,
        }}
      >
        {/* Project image */}
        <div className="relative" style={{ aspectRatio: wide ? '16 / 8' : '16 / 10' }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes={wide ? '(max-width: 768px) 100vw, 1100px' : '(max-width: 768px) 100vw, 540px'}
          />

          {/* Badge */}
          <span
            className="absolute top-3 left-3 z-[1]"
            style={{
              ...lbl,
              fontSize: '11px',
              padding: '4px 8px',
              borderRadius: '7px',
              background: 'rgba(28,53,87,0.60)',
              color: '#ffffff',
            }}
          >
            {project.badge}
          </span>

          {/* Credit */}
          {image.credit && (
            <a
              href={image.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-1.5 right-2 z-[1] text-[9px] opacity-50 hover:opacity-80 transition-opacity"
              style={{ color: 'rgba(255,255,255,0.60)' }}
            >
              {image.credit}
            </a>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            style={{
              ...h6,
              fontSize: wide ? '20px' : '17px',
              color: 'var(--ed-text)',
              marginBottom: '4px',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              ...lbl,
              color: 'var(--ed-text-secondary)',
              marginBottom: '12px',
            }}
          >
            {project.location}
          </p>
          <p
            style={{
              fontSize: '13px',
              lineHeight: 1.5,
              color: 'var(--ed-text-secondary)',
            }}
          >
            {project.description}
          </p>

          {project.certCaption && (
            <p
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontWeight: 400,
                fontSize: '11px',
                color: 'var(--ed-text-secondary)',
                marginTop: '12px',
                opacity: 0.7,
              }}
            >
              {project.certCaption}
            </p>
          )}
        </div>
      </div>
    </EDAnimatedSection>
  )
}

export default function RealisationsContent({
  images,
}: {
  images: UnsplashImage[]
}) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[1100px]">
          <EDAnimatedSection>
            <h1
              style={{
                ...h,
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--ed-primary)',
                marginBottom: '16px',
              }}
            >
              Nos réalisations
            </h1>
          </EDAnimatedSection>
          <EDAnimatedSection delay={1}>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--ed-text-secondary)',
                maxWidth: '520px',
              }}
            >
              Quelques exemples de chantiers réalisés à Lyon et agglomération.
            </p>
          </EDAnimatedSection>
        </div>
      </section>

      {/* ── Projects — Varied Layout ── */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-[1100px]" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Row 1: Full width */}
          <ProjectCard project={projects[0]} image={images[0]} index={0} wide />

          {/* Row 2: Two side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard project={projects[1]} image={images[1]} index={1} />
            <ProjectCard project={projects[2]} image={images[2]} index={2} />
          </div>

          {/* Row 3: Full width */}
          <ProjectCard project={projects[3]} image={images[3]} index={3} wide />

          {/* Row 4: Two side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard project={projects[4]} image={images[4]} index={4} />
            <ProjectCard project={projects[5]} image={images[5]} index={5} />
          </div>

          {/* Disclaimer */}
          <EDAnimatedSection delay={2} className="mt-12">
            <p
              className="text-center"
              style={{
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'rgba(0,0,0,0.40)',
              }}
            >
              Projets illustratifs — réalisés par Evolvia à titre de
              démonstration
            </p>
          </EDAnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      {/* pt-20 = 80px top, pb-20 md:pb-[120px] = 80px mobile / 120px desktop, ensures content clears sticky bar on mobile */}
      <section
        className="pt-20 pb-20 md:pt-[80px] md:pb-[80px] px-6"
        style={{ background: 'var(--ed-primary)' }}
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <EDAnimatedSection>
            <h2
              style={{
                ...h,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#ffffff',
                marginBottom: '32px',
              }}
            >
              Un projet similaire ?
            </h2>
          </EDAnimatedSection>

          <EDAnimatedSection delay={1}>
            <Link
              href="/demos/electricien-dubois/contact"
              className="inline-flex items-center gap-2"
              style={{
                background: 'var(--ed-accent)',
                color: '#ffffff',
                ...h6,
                fontSize: '13px',
                letterSpacing: '0.02em',
                padding: '12px 32px',
                borderRadius: '11px',
                transition: 'background 200ms, transform 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ed-accent-hover)'
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--ed-accent)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Demander un devis gratuit
              <ArrowRight size={16} />
            </Link>
          </EDAnimatedSection>

          <EDAnimatedSection delay={2}>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.60)',
                marginTop: '24px',
              }}
            >
              Réponse sous 24h — Déplacement gratuit sur Lyon
            </p>
          </EDAnimatedSection>
        </div>
      </section>
    </>
  )
}
