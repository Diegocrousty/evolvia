'use client'

import Link from 'next/link'
import { EDAnimatedSection } from '@/components/demos/electricien-dubois/AnimatedSection'

const certifications = [
  {
    title: 'Qualifelec',
    number: 'n°12345',
    badge: 'Qualifelec ✓',
    description:
      "Qualification professionnelle pour les entreprises d'électricité — gage de compétence et de qualité.",
  },
  {
    title: 'RGE',
    number: 'n°RGE-67890',
    badge: 'RGE ✓',
    description:
      "Reconnu Garant de l'Environnement — éligible aides MaPrimeRénov' et CEE.",
  },
  {
    title: 'IRVE',
    number: 'n°IRVE-2024',
    badge: 'IRVE ✓',
    description:
      'Installateur agréé de bornes de recharge pour véhicules électriques.',
  },
  {
    title: 'NF C 15-100',
    number: null,
    badge: 'NF C 15-100 ✓',
    description:
      'Norme française régissant les installations électriques basse tension en habitation. Toutes nos installations sont réalisées dans le strict respect de la norme NF C 15-100.',
  },
]

const values = [
  {
    title: 'Transparence',
    description:
      'Devis détaillé, ligne par ligne. Pas de mauvaise surprise à la fin du chantier. Vous savez exactement ce que vous payez.',
  },
  {
    title: 'Ponctualité',
    description:
      'On respecte les délais annoncés. Si on dit mardi 8h, on est là mardi 8h.',
  },
  {
    title: 'Qualité',
    description:
      "Matériaux professionnels, finitions soignées. On ne fait pas du vite fait — on fait du bien fait.",
  },
]

const h: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700 }
const h6: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600 }
const lbl: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11 }
const mono: React.CSSProperties = { fontFamily: 'var(--font-mono), monospace', fontSize: 11 }
const divider: React.CSSProperties = { height: 1, background: 'var(--ed-border)', border: 'none', margin: 0 }

const certBadge: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  background: 'var(--ed-cert-green)',
  color: '#ffffff',
  borderRadius: 9999,
  fontSize: 11,
  padding: '4px 12px',
  fontFamily: 'var(--font-heading), sans-serif',
  fontWeight: 600,
  lineHeight: 1,
  flexShrink: 0,
}

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <p style={{ ...lbl, color: 'var(--ed-text-secondary)', marginBottom: 16 }}>
              À propos
            </p>
            <h1
              style={{
                ...h,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                color: 'var(--ed-primary)',
              }}
            >
              Marc Dubois
            </h1>
            <p
              className="mt-4"
              style={{
                color: 'var(--ed-text-secondary)',
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              Électricien indépendant depuis 2012
            </p>
          </EDAnimatedSection>
        </div>
      </section>

      {/* Bio */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection delay={1}>
            <div className="max-w-[720px] flex flex-col gap-6">
              <p
                style={{
                  color: 'var(--ed-text-secondary)',
                  fontSize: 15,
                  lineHeight: 1.75,
                }}
              >
                Après un CAP et un BP en électricité, Marc Dubois a travaillé
                3&nbsp;ans en entreprise avant de se lancer en indépendant en
                2012. Basé à Lyon&nbsp;3e, il intervient sur Lyon et toute
                l&apos;agglomération pour des chantiers résidentiels et
                tertiaires.
              </p>
              <p
                style={{
                  color: 'var(--ed-text-secondary)',
                  fontSize: 15,
                  lineHeight: 1.75,
                }}
              >
                Sa philosophie&nbsp;: un travail soigné, des devis transparents
                et le respect des délais. Chaque chantier est traité avec le
                même soin, qu&apos;il s&apos;agisse d&apos;une prise à changer
                ou d&apos;une installation complète.
              </p>
              <p
                style={{
                  color: 'var(--ed-text-secondary)',
                  fontSize: 15,
                  lineHeight: 1.75,
                }}
              >
                Toutes nos installations sont réalisées dans le strict respect
                de la norme NF C 15-100. Une attestation CONSUEL est fournie
                pour chaque nouvelle installation électrique.
              </p>
            </div>
          </EDAnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <h2
              className="mb-10"
              style={{
                ...h,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--ed-primary)',
              }}
            >
              Certifications &amp; qualifications
            </h2>
          </EDAnimatedSection>

          <EDAnimatedSection delay={1}>
            <div className="max-w-[720px]">
              <hr style={divider} />
              {certifications.map((cert) => (
                <div key={cert.title}>
                  <div className="py-5 flex items-start gap-4">
                    <span
                      className="flex-shrink-0 mt-1"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--ed-cert-green)',
                        marginTop: 6,
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3
                          style={{
                            ...h6,
                            fontSize: 15,
                            color: 'var(--ed-text)',
                            margin: 0,
                          }}
                        >
                          {cert.title}
                          {cert.number && (
                            <span
                              style={{
                                ...mono,
                                color: 'var(--ed-text-secondary)',
                                marginLeft: 8,
                              }}
                            >
                              {cert.number}
                            </span>
                          )}
                        </h3>
                        <span style={certBadge}>{cert.badge}</span>
                      </div>
                      <p
                        style={{
                          color: 'var(--ed-text-secondary)',
                          fontSize: 13,
                          lineHeight: 1.5,
                        }}
                      >
                        {cert.description}
                      </p>
                    </div>
                  </div>
                  <hr style={divider} />
                </div>
              ))}

              {/* CONSUEL mention */}
              <p
                className="mt-5"
                style={{
                  ...mono,
                  color: 'var(--ed-text-secondary)',
                  fontSize: 11,
                }}
              >
                Attestation CONSUEL fournie pour chaque installation
              </p>
            </div>
          </EDAnimatedSection>
        </div>
      </section>

      {/* Valeurs */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <h2
              className="mb-10"
              style={{
                ...h,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--ed-primary)',
              }}
            >
              Nos valeurs
            </h2>
          </EDAnimatedSection>

          <div className="max-w-[720px]">
            <hr style={divider} />
            {values.map((value, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <EDAnimatedSection key={value.title} delay={i * 0.08}>
                  <div className="py-8 flex items-start gap-6 md:gap-10">
                    <span
                      className="flex-shrink-0"
                      style={{
                        ...h,
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        lineHeight: 1,
                        color: 'var(--ed-border)',
                      }}
                    >
                      {num}
                    </span>
                    <div>
                      <h3
                        style={{
                          ...h6,
                          fontSize: 20,
                          color: 'var(--ed-text)',
                          marginBottom: 8,
                        }}
                      >
                        {value.title}
                      </h3>
                      <p
                        style={{
                          color: 'var(--ed-text-secondary)',
                          fontSize: 15,
                          lineHeight: 1.75,
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                  <hr style={divider} />
                </EDAnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: 'var(--ed-primary)',
          paddingBottom: 'max(80px, calc(80px + env(safe-area-inset-bottom)))',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <EDAnimatedSection>
            <h2
              className="mb-8"
              style={{
                ...h,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#ffffff',
              }}
            >
              Envie de travailler avec nous ?
            </h2>
            <Link
              href="/demos/electricien-dubois/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-200"
              style={{
                background: 'var(--ed-accent)',
                color: '#ffffff',
                borderRadius: 11,
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 600,
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
              className="mt-4"
              style={{
                color: 'rgba(255,255,255,0.60)',
                fontSize: 13,
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
