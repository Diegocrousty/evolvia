'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { EDAnimatedSection } from '@/components/demos/electricien-dubois/AnimatedSection'

const h: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700 }
const h6: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600 }
const lbl: React.CSSProperties = { fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11 }
const divider: React.CSSProperties = { height: 1, background: 'var(--ed-border)', border: 'none', margin: 0 }

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#ffffff',
  border: '1px solid var(--ed-border)',
  borderRadius: 8,
  padding: '12px 16px',
  fontSize: 13,
  color: 'var(--ed-text)',
  fontFamily: 'var(--font-heading), sans-serif',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 200ms ease',
}

const focusBorderColor = 'var(--ed-primary)'

function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = focusBorderColor
}

function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'var(--ed-border)'
}

const contactItems = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '07 45 67 89 01',
    href: 'tel:0745678901',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@electricien-dubois.fr',
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: 'Lyon + 30km',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun-Sam 8h-19h · Urgences 24/7',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <EDAnimatedSection>
            <h1
              style={{
                ...h,
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                lineHeight: 1.1,
                color: 'var(--ed-primary)',
              }}
            >
              Demander un devis
            </h1>
            <p
              className="mt-4"
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--ed-text-secondary)',
                maxWidth: 520,
              }}
            >
              Réponse sous 24h — Déplacement gratuit sur Lyon et agglo
            </p>
          </EDAnimatedSection>
        </div>
      </section>

      {/* 2-Column Layout */}
      <section
        className="pb-24"
        style={{
          paddingBottom: 'max(96px, calc(80px + env(safe-area-inset-bottom)))',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12">
          {/* Left Column — Contact Info */}
          <div>
            <EDAnimatedSection delay={1}>
              <div className="flex flex-col">
                {contactItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label}>
                      <div className="flex items-center gap-3" style={{ padding: '16px 0' }}>
                        <Icon
                          size={16}
                          className="flex-shrink-0"
                          style={{ color: 'var(--ed-primary)' }}
                        />
                        <div className="flex flex-col">
                          <span
                            style={{
                              ...lbl,
                              display: 'block',
                              color: 'var(--ed-text-secondary)',
                              marginBottom: 2,
                            }}
                          >
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="hover:opacity-80 transition-opacity"
                              style={{
                                color: 'var(--ed-text)',
                                fontSize: 15,
                                textDecoration: 'none',
                              }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span
                              style={{
                                color: 'var(--ed-text)',
                                fontSize: 15,
                              }}
                            >
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                      {index < contactItems.length - 1 && <hr style={divider} />}
                    </div>
                  )
                })}
              </div>
            </EDAnimatedSection>

            <EDAnimatedSection delay={2}>
              <div className="mt-8">
                <p
                  className="mb-2"
                  style={{
                    fontSize: 13,
                    color: 'var(--ed-text-secondary)',
                  }}
                >
                  Urgence électrique ? Appelez directement.
                </p>
                <a
                  href="tel:0745678901"
                  className="inline-block"
                  style={{
                    ...h,
                    fontSize: 24,
                    color: 'var(--ed-primary)',
                    textDecoration: 'none',
                  }}
                >
                  07 45 67 89 01
                </a>
              </div>

              {/* Certification trust signal */}
              <div
                className="mt-8"
                style={{
                  padding: '12px 16px',
                  background: 'rgba(28, 53, 87, 0.04)',
                  border: '1px solid rgba(28, 53, 87, 0.08)',
                  borderRadius: 8,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--ed-primary)',
                    letterSpacing: '0.04em',
                    lineHeight: 1.5,
                  }}
                >
                  Qualifelec certifié · Installations NF C 15-100 conformes
                </p>
              </div>
            </EDAnimatedSection>
          </div>

          {/* Right Column — Form */}
          <EDAnimatedSection delay={2}>
            <div
              className="p-8"
              style={{
                background: 'var(--ed-surface)',
                border: '1px solid var(--ed-border)',
                borderRadius: 12,
              }}
            >
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center text-center"
                  style={{ minHeight: 320, gap: 16 }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: 'var(--ed-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Send size={24} color="#ffffff" />
                  </div>
                  <h2
                    style={{
                      ...h,
                      fontSize: 20,
                      color: 'var(--ed-text)',
                    }}
                  >
                    Demande envoyée !
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      color: 'var(--ed-text-secondary)',
                      lineHeight: 1.6,
                      maxWidth: 340,
                    }}
                  >
                    Merci pour votre message. Nous vous répondrons sous 24h.
                  </p>
                </div>
              ) : (
              <form
                onSubmit={handleSubmit}
              >
                {/* Prénom + Nom */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="prenom" style={{ ...lbl, display: 'block', color: 'var(--ed-text-secondary)', marginBottom: 8 }}>
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      placeholder="Jean"
                      required
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" style={{ ...lbl, display: 'block', color: 'var(--ed-text-secondary)', marginBottom: 8 }}>
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      placeholder="Dupont"
                      required
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                {/* Email + Téléphone */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" style={{ ...lbl, display: 'block', color: 'var(--ed-text-secondary)', marginBottom: 8 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jean@exemple.fr"
                      required
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" style={{ ...lbl, display: 'block', color: 'var(--ed-text-secondary)', marginBottom: 8 }}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      placeholder="07 00 00 00 00"
                      required
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                {/* Type de prestation */}
                <div className="mb-4">
                  <label htmlFor="prestation" style={{ ...lbl, display: 'block', color: 'var(--ed-text-secondary)', marginBottom: 8 }}>
                    Type de prestation
                  </label>
                  <select
                    id="prestation"
                    name="prestation"
                    required
                    aria-required="true"
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(0,0,0,0.40)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      paddingRight: 40,
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    <option value="">Sélectionnez une prestation</option>
                    <option value="installation">Installation électrique</option>
                    <option value="normes">Mise aux normes</option>
                    <option value="domotique">Domotique</option>
                    <option value="borne-ve">Borne de recharge VE</option>
                    <option value="solaires">Panneaux solaires</option>
                    <option value="urgence">Dépannage / Urgence</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Adresse des travaux */}
                <div className="mb-4">
                  <label htmlFor="adresse" style={{ ...lbl, display: 'block', color: 'var(--ed-text-secondary)', marginBottom: 8 }}>
                    Adresse des travaux
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    placeholder="12 rue de la République, 69001 Lyon"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                {/* Description du projet */}
                <div className="mb-6">
                  <label htmlFor="description" style={{ ...lbl, display: 'block', color: 'var(--ed-text-secondary)', marginBottom: 8 }}>
                    Description du projet
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: 'var(--ed-accent)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 11,
                    cursor: 'pointer',
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
                  Envoyer ma demande
                  <Send size={16} />
                </button>

                {/* Micro-copy */}
                <p
                  className="mt-3 text-center"
                  style={{
                    fontSize: 11,
                    color: 'var(--ed-text-secondary)',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-mono), monospace',
                  }}
                >
                  Devis détaillé avec matériaux et délais · Sans engagement · Données confidentielles
                </p>
              </form>
              )}
            </div>
          </EDAnimatedSection>
        </div>
      </section>
    </>
  )
}
