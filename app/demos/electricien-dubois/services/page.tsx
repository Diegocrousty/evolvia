'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { EDAnimatedSection } from '@/components/demos/electricien-dubois/AnimatedSection'

interface ServiceItem {
  text: string
  cert?: boolean
}

interface Service {
  title: string
  description: string
  items: ServiceItem[]
}

const services: Service[] = [
  {
    title: 'Installation électrique neuve',
    description:
      'Conception et réalisation complète de votre installation électrique conforme NF C 15-100. Tableau, circuits, prises, éclairage — matériaux certifiés et mise en service validée dès le premier jour.',
    items: [
      { text: 'Tableau électrique aux normes NF C 15-100', cert: true },
      { text: 'Circuits spécialisés' },
      { text: 'Prises et interrupteurs' },
      { text: 'Éclairage intérieur et extérieur' },
    ],
  },
  {
    title: 'Mise aux normes NF C 15-100',
    description:
      "Votre installation a plus de 15 ans ? On réalise le diagnostic complet et la mise en conformité NF C 15-100. Attestation CONSUEL délivrée à l\u2019issue — obligatoire avant toute vente ou location.",
    items: [
      { text: 'Diagnostic électrique complet' },
      { text: 'Rapport détaillé de non-conformité' },
      { text: 'Mise en conformité NF C 15-100', cert: true },
      { text: 'Attestation de conformité CONSUEL', cert: true },
    ],
  },
  {
    title: 'Domotique & Smart Home',
    description:
      "Volets roulants, éclairage connecté, thermostat intelligent, alarme — on installe et configure tout avec des matériaux certifiés CE pour que votre maison réponde au doigt et à l'œil.",
    items: [
      { text: 'Volets et stores connectés' },
      { text: 'Éclairage intelligent' },
      { text: 'Thermostat et chauffage' },
      { text: 'Compatible Google Home / Apple Home / Alexa' },
    ],
  },
  {
    title: 'Borne de recharge véhicule électrique',
    description:
      "Installation IRVE certifiée pour particuliers et copropriétés, conforme à la norme NF C 15-100 section 722. On s'occupe de tout, du dimensionnement au raccordement.",
    items: [
      { text: 'Étude de faisabilité' },
      { text: 'Installation certifiée IRVE', cert: true },
      { text: 'Raccordement au tableau' },
      { text: "Éligible aide ADVENIR (jusqu'à 960€)" },
    ],
  },
  {
    title: 'Panneaux solaires & autoconsommation',
    description:
      'Produisez votre propre électricité. Étude personnalisée, installation avec matériaux certifiés et raccordement Enedis conforme. Certification RGE Qualifelec pour bénéficier des aides.',
    items: [
      { text: 'Étude de rentabilité' },
      { text: 'Installation panneaux' },
      { text: 'Raccordement Enedis conforme', cert: true },
      { text: "Aide MaPrimeRénov' (RGE certifié)", cert: true },
    ],
  },
  {
    title: 'Dépannage & urgences',
    description:
      'Panne électrique, court-circuit, disjoncteur qui saute — on intervient rapidement pour diagnostiquer et remettre en service. Toute intervention respecte les exigences NF C 15-100.',
    items: [
      { text: 'Intervention 24h/24 urgences' },
      { text: 'Diagnostic rapide' },
      { text: 'Remise en service' },
      { text: 'Devis avant travaux' },
    ],
  },
]

const h: React.CSSProperties = {
  fontFamily: 'var(--font-heading), sans-serif',
  fontWeight: 700,
}
const h6: React.CSSProperties = {
  fontFamily: 'var(--font-heading), sans-serif',
  fontWeight: 600,
}
const lbl: React.CSSProperties = {
  fontFamily: 'var(--font-heading), sans-serif',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  fontSize: 11,
}
const divider: React.CSSProperties = {
  height: 1,
  background: 'var(--ed-border)',
  border: 'none',
  margin: 0,
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ paddingTop: 128, paddingBottom: 64 }}>
        <div
          style={{ maxWidth: 1100, marginInline: 'auto', paddingInline: 24 }}
        >
          <EDAnimatedSection>
            <p
              style={{
                ...lbl,
                color: 'var(--ed-text-secondary)',
                marginBottom: 16,
              }}
            >
              Nos prestations
            </p>
          </EDAnimatedSection>
          <EDAnimatedSection delay={1}>
            <h1
              style={{
                ...h,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--ed-primary)',
                marginBottom: 16,
              }}
            >
              Ce qu&apos;on fait pour vous
            </h1>
          </EDAnimatedSection>
          <EDAnimatedSection delay={2}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--ed-text-secondary)',
                maxWidth: 560,
              }}
            >
              De l&apos;installation neuve à la mise aux normes, on intervient
              sur tous types de chantiers.
            </p>
          </EDAnimatedSection>
        </div>
      </section>

      {/* ── Services list ── */}
      <section style={{ paddingBottom: 96 }}>
        <div
          style={{
            maxWidth: 1100,
            marginInline: 'auto',
            paddingInline: 24,
          }}
        >
          {services.map((service, index) => {
            const num = String(index + 1).padStart(2, '0')
            return (
              <EDAnimatedSection key={service.title} delay={index * 0.5}>
                {/* Divider above every item */}
                <hr style={divider} />

                <div
                  style={{
                    display: 'flex',
                    gap: 48,
                    paddingBlock: 56,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Large faded number */}
                  <span
                    style={{
                      ...h,
                      fontSize: 'clamp(64px, 8vw, 96px)',
                      lineHeight: 1,
                      color: 'var(--ed-border)',
                      userSelect: 'none',
                      flexShrink: 0,
                      minWidth: 100,
                    }}
                  >
                    {num}
                  </span>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <h3
                      style={{
                        ...h6,
                        fontSize: 20,
                        lineHeight: 1.35,
                        color: 'var(--ed-text)',
                        marginBottom: 12,
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.75,
                        color: 'var(--ed-text-secondary)',
                        marginBottom: 24,
                        maxWidth: 560,
                      }}
                    >
                      {service.description}
                    </p>

                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        marginBottom: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                      }}
                    >
                      {service.items.map((item) => (
                        <li
                          key={item.text}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            fontSize: 13,
                            lineHeight: 1.5,
                            color: 'var(--ed-text-secondary)',
                          }}
                        >
                          <Check
                            size={15}
                            style={{
                              color: item.cert
                                ? 'var(--ed-cert-green)'
                                : 'var(--ed-accent)',
                              flexShrink: 0,
                            }}
                            strokeWidth={2.5}
                          />
                          {item.text}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/demos/electricien-dubois/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--ed-primary)',
                        textDecoration: 'none',
                        transition: 'color 200ms',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--ed-accent)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--ed-primary)')
                      }
                    >
                      Demander un devis
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </EDAnimatedSection>
            )
          })}

          {/* Final divider after last item */}
          <hr style={divider} />
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        style={{
          background: 'var(--ed-primary)',
          paddingBlock: 80,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            marginInline: 'auto',
            paddingInline: 24,
            textAlign: 'center',
          }}
        >
          <EDAnimatedSection>
            <h2
              style={{
                ...h,
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: 32,
              }}
            >
              Besoin d&apos;un électricien ?
            </h2>
          </EDAnimatedSection>

          <EDAnimatedSection delay={1}>
            <Link
              href="/demos/electricien-dubois/contact"
              style={{
                display: 'inline-block',
                background: 'var(--ed-accent)',
                color: '#ffffff',
                fontSize: 13,
                fontWeight: 600,
                fontFamily: 'var(--font-heading), sans-serif',
                padding: '12px 32px',
                borderRadius: 11,
                textDecoration: 'none',
                letterSpacing: '0.02em',
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
            </Link>
          </EDAnimatedSection>

          <EDAnimatedSection delay={2}>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.60)',
                marginTop: 24,
              }}
            >
              Réponse sous 24h — Déplacement gratuit sur Lyon
            </p>
          </EDAnimatedSection>

          <EDAnimatedSection delay={3}>
            <p
              style={{
                fontSize: 11,
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.40)',
                marginTop: 16,
              }}
            >
              Qualifelec certifié • NF C 15-100 conforme
            </p>
          </EDAnimatedSection>
        </div>
      </section>
    </>
  )
}
