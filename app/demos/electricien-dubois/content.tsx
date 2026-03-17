'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Shield, Zap } from 'lucide-react'
import { EDAnimatedSection } from '@/components/demos/electricien-dubois/AnimatedSection'
import type { UnsplashImage } from '@/lib/unsplash'

/* ─── DATA ─── */

const services = [
  {
    num: '01',
    title: 'Installation électrique neuve',
    description:
      "Tableaux divisionnaires, câblage, prises et circuits d\u2019éclairage — en neuf ou rénovation. Chaque installation est livrée conforme NF C 15-100 avec attestation CONSUEL.",
  },
  {
    num: '02',
    title: 'Mise aux normes NF C 15-100',
    description:
      'Diagnostic complet, remise en conformité et accompagnement CONSUEL. Votre assurance habitation est valide. Votre famille est protégée.',
  },
  {
    num: '03',
    title: 'Borne de recharge IRVE',
    description:
      "Installation certifiée IRVE pour véhicules électriques — en habitat individuel ou copropriété. Éligible Advenir et crédit d\u2019impôt.",
  },
  {
    num: '04',
    title: "Domotique & gestion d\u2019énergie",
    description:
      'Éclairage connecté, volets motorisés, pilotage de chauffage. Systèmes Somfy, Legrand et Schneider intégrés proprement, sans bricolage.',
  },
]

const guarantees = [
  {
    label: 'Conformité',
    title: 'NF C 15-100 + CONSUEL accompagné',
    body: "Chaque chantier est remis avec une attestation de conformité. Vous n\u2019avez rien à gérer : on s\u2019occupe du dossier CONSUEL de bout en bout.",
  },
  {
    label: 'Couverture',
    title: 'Décennale + RC pro',
    body: 'Assurance décennale et responsabilité civile professionnelle à jour. En cas de sinistre, vous êtes couvert pendant 10 ans.',
  },
  {
    label: 'Transparence',
    title: 'Devis ligne par ligne',
    body: "Aucune surprise en fin de chantier. Le devis détaille chaque fourniture, chaque heure de main-d\u2019œuvre. Vous signez en sachant exactement ce que vous payez.",
  },
]

const reasons = [
  {
    num: '01',
    title: "Qualifelec RGE \u2014 pour vos aides d\u2019\u00C9tat",
    description:
      "Notre certification Qualifelec RGE vous rend \u00E9ligible \u00E0 MaPrimeR\u00E9nov\u2019 et aux Certificats d\u2019\u00C9conomie d\u2019\u00C9nergie. Des milliers d\u2019euros d\u2019aides accessibles, que vous perdez avec un \u00E9lectricien non certifi\u00E9.",
  },
  {
    num: '02',
    title: 'CONSUEL fourni, pas sous-traité',
    description:
      "On gère l\u2019attestation de conformité en interne. Pas de délais supplémentaires, pas de prestataire externe à relancer. Le dossier est prêt le jour de la réception.",
  },
  {
    num: '03',
    title: 'Réponse sous 24h, déplacement gratuit',
    description:
      'Devis gratuit sur Lyon et agglomération. Intervention sous 48h pour les urgences. Vous ne restez pas sans réponse.',
  },
]

/* ─── STYLE HELPERS ─── */

const h: React.CSSProperties = {
  fontFamily: 'var(--font-heading), sans-serif',
  fontWeight: 700,
}

const h6: React.CSSProperties = {
  fontFamily: 'var(--font-heading), sans-serif',
  fontWeight: 600,
}

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-mono), monospace',
  fontWeight: 400,
}

const lbl: React.CSSProperties = {
  fontFamily: 'var(--font-heading), sans-serif',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  fontSize: 11,
}

const divider: React.CSSProperties = {
  height: 1,
  background: 'var(--ed-border)',
  border: 'none',
  margin: 0,
}

/* ─── PAGE ─── */

export default function HomeContent({
  heroImage,
}: {
  heroImage: UnsplashImage
}) {
  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '88vh' }}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        {/* Two-layer overlay: darken + warm tint bottom */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'rgba(10,14,28,0.62)' }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to top, rgba(28,53,87,0.55) 0%, transparent 60%)',
          }}
        />

        <div
          className="max-w-[1100px] mx-auto px-6 relative z-[2] flex flex-col justify-end"
          style={{ minHeight: '88vh', paddingTop: 80, paddingBottom: 96 }}
        >
          <EDAnimatedSection>
            {/* Badge — subtle, not AI slop */}
            <p
              className="mb-8"
              style={{
                ...mono,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.50)',
              }}
            >
              Qualifelec RGE · IRVE certifié · Lyon & agglomération
            </p>

            <h1
              className="mb-6"
              style={{
                ...h,
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: 1.05,
                color: '#ffffff',
                maxWidth: 720,
                letterSpacing: '-0.01em',
              }}
            >
              Électricien certifié à Lyon —<br />
              <span style={{ opacity: 0.82 }}>
                Installations conformes NF&nbsp;C&nbsp;15-100
              </span>
            </h1>

            <p
              className="mb-10"
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: 17,
                lineHeight: 1.65,
                maxWidth: 500,
              }}
            >
              Qualifelec certifié · RGE · Devis gratuit · 7j/7
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <a
                href="tel:+33745678901"
                className="inline-flex items-center gap-2 transition-colors duration-200"
                style={{
                  background: 'var(--ed-accent)',
                  color: '#ffffff',
                  borderRadius: 11,
                  padding: '14px 28px',
                  ...h6,
                  fontSize: 15,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = 'var(--ed-accent-hover)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'var(--ed-accent)')
                }
              >
                <Phone size={16} strokeWidth={2} />
                Appeler maintenant
              </a>

              {/* Secondary CTA */}
              <Link
                href="/demos/electricien-dubois/contact"
                className="inline-flex items-center gap-2 transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 11,
                  padding: '14px 28px',
                  ...h6,
                  fontSize: 15,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.50)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Demander un devis
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </div>

            {/* Phone number prominent */}
            <p
              className="mt-8"
              style={{
                ...mono,
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.04em',
              }}
            >
              07 45 67 89 01 · Disponible 7j/7 · Urgences traitées sous 2h
            </p>
          </EDAnimatedSection>
        </div>

        {heroImage.credit && (
          <a
            href={heroImage.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-4 z-[3] transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.30)', fontSize: 10 }}
          >
            Photo : {heroImage.credit} / Unsplash
          </a>
        )}
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — BANDE CERTIFICATIONS (non-negotiable)
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--ed-primary)' }}>
        <div
          className="max-w-[1100px] mx-auto px-6"
          style={{ paddingTop: 24, paddingBottom: 24 }}
        >
          <p
            style={{
              ...mono,
              fontSize: 11,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.60)',
            }}
          >
            Qualifelec · RGE · IRVE · NF C 15-100 · Attestation CONSUEL fournie
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — SERVICES (numbered list, no cards)
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--ed-bg)', paddingTop: 96, paddingBottom: 96 }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <div className="flex items-baseline justify-between mb-16">
              <div>
                <span
                  style={{
                    ...lbl,
                    color: 'var(--ed-text-secondary)',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Prestations
                </span>
                <h2
                  style={{
                    ...h,
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    color: 'var(--ed-primary)',
                    lineHeight: 1.1,
                  }}
                >
                  Ce qu'on fait,<br />et comment on le fait
                </h2>
              </div>
              <Link
                href="/demos/electricien-dubois/services"
                className="hidden md:inline-flex items-center gap-1 transition-opacity duration-200 hover:opacity-60"
                style={{ color: 'var(--ed-primary)', ...h6, fontSize: 13 }}
              >
                Tout voir
                <ArrowRight size={14} />
              </Link>
            </div>
          </EDAnimatedSection>

          {services.map((service, i) => (
            <EDAnimatedSection key={service.num} delay={i * 0.08}>
              {i > 0 && <hr style={divider} />}
              <div
                className="grid grid-cols-1 md:grid-cols-[72px_1fr_auto] gap-4 md:gap-8 items-start"
                style={{ padding: '32px 0' }}
              >
                {/* Faded number */}
                <span
                  style={{
                    ...h,
                    fontSize: 48,
                    color: 'var(--ed-primary)',
                    opacity: 0.15,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {service.num}
                </span>

                <div>
                  <h3
                    className="mb-2"
                    style={{ ...h6, fontSize: 20, color: 'var(--ed-text)', lineHeight: 1.3 }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--ed-text-secondary)',
                      fontSize: 15,
                      lineHeight: 1.75,
                      maxWidth: 560,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/demos/electricien-dubois/services"
                  className="hidden md:inline-flex items-center gap-1 transition-opacity duration-200 hover:opacity-60 mt-1"
                  style={{
                    color: 'var(--ed-primary)',
                    ...h6,
                    fontSize: 13,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Détails
                  <ArrowRight size={13} />
                </Link>
              </div>
            </EDAnimatedSection>
          ))}
          <hr style={divider} />

          <Link
            href="/demos/electricien-dubois/services"
            className="md:hidden inline-flex items-center gap-1 mt-8 transition-opacity duration-200 hover:opacity-60"
            style={{ color: 'var(--ed-primary)', ...h6, fontSize: 13 }}
          >
            Voir toutes les prestations
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — SÉCURITÉ & GARANTIES
          (unique to electrician — mandatory)
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--ed-bg-2)', paddingTop: 96, paddingBottom: 96 }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <div className="mb-16" style={{ maxWidth: 600 }}>
              <span
                style={{
                  ...lbl,
                  color: 'var(--ed-text-secondary)',
                  display: 'block',
                  marginBottom: 8,
                }}
              >
                Sécurité & Garanties
              </span>
              <h2
                style={{
                  ...h,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--ed-primary)',
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Votre installation est entre de bonnes mains
              </h2>
              <p
                style={{
                  ...mono,
                  fontSize: 13,
                  color: 'var(--ed-text-secondary)',
                  lineHeight: 1.6,
                  padding: '12px 16px',
                  background: 'rgba(28,53,87,0.06)',
                  borderLeft: '3px solid var(--ed-primary)',
                  borderRadius: '0 6px 6px 0',
                }}
              >
                <Shield
                  size={13}
                  style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }}
                  strokeWidth={2}
                />
                Une installation non conforme peut annuler votre assurance habitation.
              </p>
            </div>
          </EDAnimatedSection>

          {/* Asymmetric layout: 2 cols on left, 1 col stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8">
            {guarantees.map((g, i) => (
              <EDAnimatedSection key={g.label} delay={i * 0.1}>
                <div
                  style={{
                    background: 'var(--ed-bg)',
                    border: '1px solid var(--ed-border)',
                    borderRadius: 12,
                    padding: 32,
                    height: '100%',
                  }}
                >
                  <span
                    style={{
                      ...lbl,
                      color: 'var(--ed-primary)',
                      opacity: 0.6,
                      display: 'block',
                      marginBottom: 16,
                    }}
                  >
                    {g.label}
                  </span>
                  <h3
                    className="mb-3"
                    style={{ ...h6, fontSize: 17, color: 'var(--ed-text)', lineHeight: 1.3 }}
                  >
                    {g.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--ed-text-secondary)',
                      fontSize: 15,
                      lineHeight: 1.75,
                    }}
                  >
                    {g.body}
                  </p>
                </div>
              </EDAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — WHY US (asymmetric layout)
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--ed-bg)', paddingTop: 96, paddingBottom: 96 }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <div className="mb-16">
              <span
                style={{
                  ...lbl,
                  color: 'var(--ed-text-secondary)',
                  display: 'block',
                  marginBottom: 8,
                }}
              >
                Pourquoi Dubois Électricité
              </span>
              <h2
                style={{
                  ...h,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--ed-primary)',
                  lineHeight: 1.1,
                }}
              >
                La certification n'est pas<br />un argument de vente.
                <br />
                <span style={{ opacity: 0.5 }}>C'est une obligation légale.</span>
              </h2>
            </div>
          </EDAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16">
            {/* Large left argument */}
            <EDAnimatedSection>
              <div>
                <span
                  style={{
                    ...h,
                    fontSize: 80,
                    color: 'var(--ed-primary)',
                    opacity: 0.08,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    display: 'block',
                    marginBottom: -16,
                  }}
                >
                  {reasons[0].num}
                </span>
                <h3
                  className="mb-4"
                  style={{ ...h, fontSize: 32, color: 'var(--ed-text)', lineHeight: 1.15 }}
                >
                  {reasons[0].title}
                </h3>
                <p
                  style={{
                    color: 'var(--ed-text-secondary)',
                    fontSize: 15,
                    lineHeight: 1.75,
                    maxWidth: 440,
                  }}
                >
                  {reasons[0].description}
                </p>

                {/* Stat accent */}
                <div
                  className="mt-8 inline-flex items-center gap-3"
                  style={{
                    background: 'var(--ed-bg-2)',
                    border: '1px solid var(--ed-border)',
                    borderRadius: 8,
                    padding: '12px 20px',
                  }}
                >
                  <Zap size={15} style={{ color: 'var(--ed-primary)' }} strokeWidth={2} />
                  <span style={{ ...h6, fontSize: 13, color: 'var(--ed-text)' }}>
                    Aides MaPrimeRénov' accessibles dès aujourd'hui
                  </span>
                </div>
              </div>
            </EDAnimatedSection>

            {/* Two stacked right arguments */}
            <div className="flex flex-col gap-10">
              {reasons.slice(1).map((reason, i) => (
                <EDAnimatedSection key={reason.num} delay={(i + 1) * 0.08}>
                  <div
                    style={{
                      borderLeft: '2px solid rgba(28,53,87,0.12)',
                      paddingLeft: 24,
                    }}
                  >
                    <span
                      style={{
                        ...mono,
                        fontSize: 11,
                        color: 'var(--ed-primary)',
                        opacity: 0.40,
                        marginBottom: 10,
                        display: 'block',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {reason.num}
                    </span>
                    <h3
                      className="mb-2"
                      style={{ ...h6, fontSize: 17, color: 'var(--ed-text)', lineHeight: 1.3 }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--ed-text-secondary)',
                        fontSize: 15,
                        lineHeight: 1.75,
                      }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </EDAnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — FINAL CTA
      ══════════════════════════════════════════ */}
      <section
        className="pb-20 md:pb-0"
        style={{ background: 'var(--ed-primary)', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <span
                  style={{
                    ...lbl,
                    color: 'rgba(255,255,255,0.40)',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Démarrer un projet
                </span>
                <h2
                  className="mb-3"
                  style={{
                    ...h,
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    color: '#ffffff',
                    lineHeight: 1.1,
                  }}
                >
                  Un projet électrique à Lyon ?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: 15, lineHeight: 1.65 }}>
                  Devis gratuit sous 24h · Déplacement offert sur Lyon et agglomération
                </p>

                <a
                  href="tel:+33745678901"
                  className="inline-flex items-center gap-2 mt-6 transition-opacity duration-200 hover:opacity-70"
                  style={{ color: 'rgba(255,255,255,0.82)', ...mono, fontSize: 17, letterSpacing: '0.02em' }}
                >
                  <Phone size={16} strokeWidth={1.5} />
                  07 45 67 89 01
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/demos/electricien-dubois/contact"
                  className="inline-flex items-center justify-center gap-2 transition-colors duration-200"
                  style={{
                    background: 'var(--ed-accent)',
                    color: '#ffffff',
                    borderRadius: 11,
                    padding: '14px 32px',
                    ...h6,
                    fontSize: 15,
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = 'var(--ed-accent-hover)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'var(--ed-accent)')
                  }
                >
                  Demander un devis gratuit
                </Link>

                <p
                  style={{
                    ...mono,
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.40)',
                    textAlign: 'center',
                    letterSpacing: '0.04em',
                  }}
                >
                  Réponse sous 24h · Sans engagement
                </p>
              </div>
            </div>
          </EDAnimatedSection>
        </div>
      </section>
    </>
  )
}
