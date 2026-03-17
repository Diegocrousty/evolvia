'use client'

import Image from 'next/image'
import { ArrowRight, Home, Moon, Sun, Calendar, Star, TrendingUp, Clock, Users, Phone, Send } from 'lucide-react'
import { IHAnimatedSection } from '@/components/demos/immo-horizon/AnimatedSection'
import type { UnsplashImage } from '@/lib/unsplash'

/* ─── STYLE HELPERS ─── */

const display: React.CSSProperties = {
  fontFamily: 'var(--font-display), serif',
  fontWeight: 600,
}

const body500: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 500,
}

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-mono), monospace',
  fontWeight: 400,
}

const lbl: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 500,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  fontSize: 11,
}

/* Extracted repeated styles */
const sectionLabel: React.CSSProperties = {
  ...lbl,
  color: 'var(--ih-text-secondary)',
  display: 'block',
  marginBottom: 8,
}

const h2Style: React.CSSProperties = {
  ...display,
  fontSize: 'clamp(2rem, 3vw, 3rem)',
  color: 'var(--ih-primary)',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
}

const labelStyle: React.CSSProperties = {
  ...body500,
  fontSize: 13,
  color: 'var(--ih-text)',
  display: 'block',
  marginBottom: 4,
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 8,
  border: '1px solid rgba(26,26,24,0.15)',
  background: 'var(--ih-bg)',
  fontSize: 15,
  color: 'var(--ih-text)',
  fontFamily: 'var(--font-body), sans-serif',
}

/* ─── DATA ─── */

const biens = [
  {
    type: 'Appartement T3',
    quartier: 'Chartrons',
    surface: '85',
    chambres: 2,
    etage: '3\u00E8me \u00E9tage avec ascenseur',
    accroche: 'Lumineux, vue sur cour int\u00E9rieure, cuisine ouverte refaite.',
    prix: '389 000',
    color: '#E8D5B7',
  },
  {
    type: '\u00C9choppe',
    quartier: 'Saint-Michel',
    surface: '120',
    chambres: 3,
    etage: null,
    accroche: 'Jardin arboré de 45\u00A0m\u00B2, parquet massif, poutres apparentes.',
    prix: '520 000',
    color: '#C9D4C5',
  },
  {
    type: 'Appartement T2',
    quartier: 'Caud\u00E9ran',
    surface: '52',
    chambres: 1,
    etage: '2\u00E8me \u00E9tage',
    accroche: 'R\u00E9nov\u00E9, proximit\u00E9 parc Bordelais, id\u00E9al premier achat.',
    prix: '235 000',
    color: '#D5D0CB',
  },
]

const agents = [
  {
    nom: 'Sophie Martel',
    specialite: 'Chartrons, Bastide, Saint-Michel',
    experience: '8 ans',
    quote: '\u00AB\u00A0Chaque bien a une histoire. Mon r\u00F4le, c\u2019est de trouver l\u2019acheteur qui la continuera.\u00A0\u00BB',
    initials: 'SM',
  },
  {
    nom: 'Julien Lacombe',
    specialite: 'Caud\u00E9ran, M\u00E9rignac, Pessac',
    experience: '5 ans',
    quote: '\u00AB\u00A0Je connais chaque rue de Caud\u00E9ran. Mes clients ne visitent que des biens qui leur correspondent.\u00A0\u00BB',
    initials: 'JL',
  },
]

const avis = [
  {
    texte: 'Sophie a vendu notre appartement des Chartrons en 28\u00A0jours, au prix demand\u00E9. Suivi irr\u00E9prochable du d\u00E9but \u00E0 la fin.',
    auteur: 'Marie & Thomas D.',
    type: 'Vendeurs \u2014 Chartrons',
  },
  {
    texte: 'Julien a trouv\u00E9 notre maison \u00E0 Caud\u00E9ran en 3\u00A0semaines. R\u00E9actif, \u00E0 l\u2019\u00E9coute, et surtout honn\u00EAte sur les d\u00E9fauts des biens.',
    auteur: 'Paul M.',
    type: 'Acheteur \u2014 Caud\u00E9ran',
  },
  {
    texte: 'Gestion locative sans accroc depuis 2\u00A0ans. Mes locataires sont satisfaits, mes revenus r\u00E9guliers. Je recommande.',
    auteur: 'Isabelle R.',
    type: 'Bailleur',
  },
]

/* ─── PAGE ─── */

export default function HomeContent({
  heroImage,
  propertyImages,
  agentImages,
}: {
  heroImage: UnsplashImage
  propertyImages: UnsplashImage[]
  agentImages: UnsplashImage[]
}) {
  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION 1 — HERO (Vendeur priorité)
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
        {/* Background image */}
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        {/* Overlays */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'rgba(10,18,32,0.55)' }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to top, rgba(26,60,94,0.50) 0%, transparent 50%)',
          }}
        />

        <div
          className="max-w-[1100px] mx-auto px-6 relative z-[2] flex flex-col justify-end"
          style={{ minHeight: '90vh', paddingTop: 96, paddingBottom: 96 }}
        >
          <IHAnimatedSection>
            {/* Trust badge */}
            <p
              className="mb-8"
              style={{
                ...mono,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.40)',
              }}
            >
              Agence ind\u00E9pendante \u00B7 Bordeaux & m\u00E9tropole \u00B7 Carte CPI 33012025XXXX
            </p>

            <h1
              className="mb-6"
              style={{
                ...display,
                fontSize: 'clamp(3rem, 5.5vw, 5rem)',
                lineHeight: 1.05,
                color: '#ffffff',
                maxWidth: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Vendez votre bien \u00E0 Bordeaux<br />
              au meilleur prix, accompagn\u00E9<br />
              <span style={{ color: 'var(--ih-accent)' }}>
                par des experts locaux.
              </span>
            </h1>

            <p
              className="mb-10"
              style={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: 17,
                lineHeight: 1.65,
                maxWidth: 520,
              }}
            >
              Immo Horizon, l&apos;agence ind\u00E9pendante bordelaise qui conna\u00EEt
              chaque quartier, chaque \u00E9choppe, chaque opportunit\u00E9.
            </p>

            {/* Double CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#estimation"
                className="inline-flex items-center gap-2 transition-colors duration-200"
                style={{
                  background: 'var(--ih-primary)',
                  color: '#ffffff',
                  borderRadius: 11,
                  padding: '16px 32px',
                  ...body500,
                  fontSize: 15,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = 'var(--ih-primary-hover)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'var(--ih-primary)')
                }
              >
                Estimer mon bien gratuitement
              </a>

              <a
                href="#biens"
                className="inline-flex items-center gap-2 transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 11,
                  padding: '16px 32px',
                  ...body500,
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
                Voir nos biens
                <ArrowRight size={15} strokeWidth={1.5} />
              </a>
            </div>

            {/* Stats inline — DM Mono */}
            <div
              className="flex flex-wrap items-center gap-6 mt-10"
              style={{
                ...mono,
                fontSize: 13,
                color: 'rgba(255,255,255,0.40)',
                letterSpacing: '0.02em',
              }}
            >
              <span>127 biens vendus</span>
              <span style={{ opacity: 0.25 }}>|</span>
              <span>34 jours d\u00E9lai moyen</span>
              <span style={{ opacity: 0.25 }}>|</span>
              <span>4.9/5 Google</span>
            </div>
          </IHAnimatedSection>
        </div>

        {heroImage.credit && (
          <a
            href={heroImage.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-4 z-[3] transition-opacity hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }}
          >
            Photo : {heroImage.credit} / Unsplash
          </a>
        )}
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — ESTIMATION GRATUITE
      ══════════════════════════════════════════ */}
      <section
        id="estimation"
        style={{ background: 'var(--ih-bg-alt)', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center">
            {/* Left — Copy */}
            <IHAnimatedSection>
              <span style={sectionLabel}>
                Estimation gratuite
              </span>
              <h2
                className="mb-4"
                style={{
                  ...h2Style,
                }}
              >
                Quelle est la vraie valeur de votre bien ?
              </h2>
              <p
                style={{
                  color: 'var(--ih-text-secondary)',
                  fontSize: 15,
                  lineHeight: 1.75,
                  maxWidth: 440,
                }}
              >
                Estimation pr\u00E9cise bas\u00E9e sur les transactions r\u00E9centes
                de votre quartier. Gratuite, sans engagement, en 24h.
              </p>

              <div
                className="mt-8 inline-flex items-center gap-3"
                style={{
                  background: 'rgba(26,60,94,0.06)',
                  borderLeft: '3px solid var(--ih-primary)',
                  borderRadius: '0 8px 8px 0',
                  padding: '12px 16px',
                }}
              >
                <TrendingUp size={15} style={{ color: 'var(--ih-primary)' }} />
                <span style={{ ...mono, fontSize: 13, color: 'var(--ih-text-secondary)' }}>
                  March\u00E9 bordelais stabilis\u00E9 depuis mi-2025 \u2014 fen\u00EAtre d\u2019opportunit\u00E9
                </span>
              </div>
            </IHAnimatedSection>

            {/* Right — Form */}
            <IHAnimatedSection delay={0.1}>
              <form
                className="flex flex-col gap-4"
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: 32,
                  border: '1px solid rgba(26,26,24,0.08)',
                }}
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Type de bien */}
                <div>
                  <label
                    htmlFor="type"
                    style={labelStyle}
                  >
                    Type de bien
                  </label>
                  <select
                    id="type"
                    style={inputStyle}
                  >
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>\u00C9choppe</option>
                    <option>Terrain</option>
                    <option>Autre</option>
                  </select>
                </div>

                {/* Quartier */}
                <div>
                  <label
                    htmlFor="quartier"
                    style={labelStyle}
                  >
                    Quartier / Adresse
                  </label>
                  <input
                    id="quartier"
                    type="text"
                    placeholder="ex: Chartrons, rue Notre-Dame"
                    style={inputStyle}
                  />
                </div>

                {/* Surface + Téléphone row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="surface"
                      style={labelStyle}
                    >
                      Surface (m\u00B2)
                    </label>
                    <input
                      id="surface"
                      type="number"
                      placeholder="85"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tel"
                      style={labelStyle}
                    >
                      T\u00E9l\u00E9phone
                    </label>
                    <input
                      id="tel"
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full transition-colors duration-200 mt-2"
                  style={{
                    background: 'var(--ih-accent)',
                    color: '#ffffff',
                    borderRadius: 11,
                    padding: '16px 32px',
                    ...body500,
                    fontSize: 15,
                    border: 'none',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = 'var(--ih-accent-hover)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'var(--ih-accent)')
                  }
                >
                  Recevoir mon estimation gratuite
                </button>

                <p
                  className="text-center"
                  style={{ ...mono, fontSize: 11, color: 'var(--ih-text-secondary)', opacity: 0.60 }}
                >
                  Estimation personnalis\u00E9e par un expert sous 24h \u2014 Sans engagement
                </p>
              </form>
            </IHAnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — CHATBOT IA (différenciateur Pro)
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--ih-primary)', paddingTop: 112, paddingBottom: 112 }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <IHAnimatedSection>
            <div className="text-center" style={{ maxWidth: 600, margin: '0 auto 64px' }}>
              <span style={{ ...lbl, color: 'rgba(255,255,255,0.40)', display: 'block', marginBottom: 8 }}>
                Assistant IA 24h/7
              </span>
              <h2
                className="mb-4"
                style={{
                  ...display,
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                Immo Horizon vous r\u00E9pond \u00E0 toute heure
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: 15, lineHeight: 1.75 }}>
                Notre assistant IA qualifie votre projet en 2\u00A0minutes,
                m\u00EAme \u00E0 23h. Un conseiller vous rappelle le lendemain matin.
              </p>
            </div>
          </IHAnimatedSection>

          {/* 3 use cases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Moon,
                time: '23h',
                title: 'Envie de vendre',
                desc: 'Le chatbot qualifie votre bien \u2014 type, quartier, surface. Un conseiller vous rappelle d\u00E8s le lendemain matin.',
              },
              {
                icon: Sun,
                time: '8h',
                title: 'Recherche d\u2019un bien',
                desc: 'Pr\u00E9cisez votre budget et vos quartiers. Recevez une s\u00E9lection personnalis\u00E9e par email dans l\u2019heure.',
              },
              {
                icon: Calendar,
                time: 'Week-end',
                title: 'Demande de visite',
                desc: 'Planifiez une visite m\u00EAme le dimanche soir. Confirmation automatique, rappel le lundi.',
              },
            ].map((item, i) => (
              <IHAnimatedSection key={item.title} delay={i * 0.1}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    padding: 32,
                    height: '100%',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 9,
                        background: 'rgba(200,169,110,0.15)',
                      }}
                    >
                      <item.icon size={18} style={{ color: 'var(--ih-accent)' }} />
                    </div>
                    <span style={{ ...mono, fontSize: 11, color: 'var(--ih-accent)', letterSpacing: '0.04em' }}>
                      {item.time}
                    </span>
                  </div>
                  <h3
                    className="mb-2"
                    style={{ ...body500, fontSize: 17, color: '#ffffff', lineHeight: 1.3 }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: 15, lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              </IHAnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <IHAnimatedSection>
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  const event = new CustomEvent('openChatbot')
                  window.dispatchEvent(event)
                }}
                className="inline-flex items-center gap-2 transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 11,
                  padding: '16px 32px',
                  ...body500,
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
                Essayer l&apos;assistant
                <ArrowRight size={15} strokeWidth={1.5} />
              </button>
            </div>
          </IHAnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — BIENS EN VENTE
      ══════════════════════════════════════════ */}
      <section
        id="biens"
        style={{ background: 'var(--ih-bg)', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <IHAnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span style={sectionLabel}>
                  Biens disponibles
                </span>
                <h2
                  style={h2Style}
                >
                  Nos biens \u00E0 Bordeaux
                </h2>
              </div>
              <a
                href="#"
                className="hidden md:inline-flex items-center gap-1 transition-opacity hover:opacity-60"
                style={{ color: 'var(--ih-primary)', ...body500, fontSize: 13 }}
              >
                Voir toutes nos annonces
                <ArrowRight size={14} />
              </a>
            </div>
          </IHAnimatedSection>

          {/* Property cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {biens.map((bien, i) => (
              <IHAnimatedSection key={bien.type + bien.quartier} delay={i * 0.1}>
                <div
                  className="group transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: '#ffffff',
                    borderRadius: 12,
                    border: '1px solid rgba(26,26,24,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Property photo */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: 200 }}
                  >
                    <Image
                      src={propertyImages[i]?.src || ''}
                      alt={`${bien.type} — ${bien.quartier}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Quartier badge */}
                    <span
                      className="absolute z-[1]"
                      style={{
                        top: 12,
                        left: 12,
                        ...body500,
                        fontSize: 11,
                        background: 'rgba(255,255,255,0.92)',
                        color: 'var(--ih-primary)',
                        padding: '4px 10px',
                        borderRadius: 6,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {bien.quartier}
                    </span>
                  </div>

                  <div style={{ padding: 24 }}>
                    <h3
                      className="mb-1"
                      style={{ ...body500, fontSize: 17, color: 'var(--ih-text)', lineHeight: 1.3 }}
                    >
                      {bien.type} \u2014 {bien.quartier}
                    </h3>
                    <p
                      className="mb-3"
                      style={{ ...mono, fontSize: 13, color: 'var(--ih-text-secondary)', opacity: 0.60 }}
                    >
                      {bien.surface}\u00A0m\u00B2 \u00B7 {bien.chambres} chambre{bien.chambres > 1 ? 's' : ''}
                      {bien.etage ? ` \u00B7 ${bien.etage}` : ''}
                    </p>
                    <p
                      className="mb-4"
                      style={{ fontSize: 15, color: 'var(--ih-text-secondary)', lineHeight: 1.65 }}
                    >
                      {bien.accroche}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        style={{
                          ...mono,
                          fontSize: 20,
                          lineHeight: 1.4,
                          color: 'var(--ih-primary)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {bien.prix}\u00A0\u20AC
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 transition-opacity hover:opacity-60"
                        style={{ ...body500, fontSize: 13, color: 'var(--ih-primary)' }}
                      >
                        Demander une visite
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </IHAnimatedSection>
            ))}
          </div>

          {/* Mobile link */}
          <a
            href="#"
            className="md:hidden inline-flex items-center gap-1 mt-8 transition-opacity hover:opacity-60"
            style={{ color: 'var(--ih-primary)', ...body500, fontSize: 13 }}
          >
            Voir toutes nos annonces
            <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — ÉQUIPE
      ══════════════════════════════════════════ */}
      <section
        id="equipe"
        style={{ background: 'var(--ih-bg-alt)', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <IHAnimatedSection>
            <div className="mb-12">
              <span style={sectionLabel}>
                Notre \u00E9quipe
              </span>
              <h2
                style={{
                  ...h2Style,
                }}
              >
                Des experts qui connaissent<br />Bordeaux par c\u0153ur
              </h2>
            </div>
          </IHAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent, i) => (
              <IHAnimatedSection key={agent.nom} delay={i * 0.1}>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 12,
                    border: '1px solid rgba(26,26,24,0.08)',
                    padding: 32,
                  }}
                >
                  <div className="flex items-start gap-5">
                    {/* Agent photo */}
                    <div
                      className="shrink-0 relative overflow-hidden"
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                      }}
                    >
                      <Image
                        src={agentImages[i]?.src || ''}
                        alt={agent.nom}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 style={{ ...body500, fontSize: 20, lineHeight: 1.4, color: 'var(--ih-text)' }}>
                        {agent.nom}
                      </h3>
                      <p style={{ ...mono, fontSize: 13, color: 'var(--ih-accent)', marginBottom: 4 }}>
                        {agent.specialite}
                      </p>
                      <p style={{ ...mono, fontSize: 11, color: 'var(--ih-text-secondary)', opacity: 0.6 }}>
                        {agent.experience} d&apos;exp\u00E9rience
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-6"
                    style={{
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: 'var(--ih-text-secondary)',
                      fontStyle: 'italic',
                      borderLeft: '2px solid var(--ih-accent)',
                      paddingLeft: 16,
                    }}
                  >
                    {agent.quote}
                  </p>
                </div>
              </IHAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — TÉMOIGNAGES
      ══════════════════════════════════════════ */}
      {/* Avis fictifs — à remplacer par vrais avis Google */}
      <section style={{ background: 'var(--ih-bg)', paddingTop: 96, paddingBottom: 96 }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <IHAnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span style={sectionLabel}>
                  Avis clients
                </span>
                <h2
                  style={h2Style}
                >
                  Ce que nos clients disent
                </h2>
              </div>
              <div
                className="hidden md:flex items-center gap-2"
                style={{ ...mono, fontSize: 24, color: 'var(--ih-accent)' }}
              >
                <span style={{ ...mono, fontSize: 32, lineHeight: 1 }}>4.9</span>
                <span style={{ fontSize: 13, color: 'var(--ih-text-secondary)' }}>/5 \u2014 84 avis</span>
              </div>
            </div>
          </IHAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {avis.map((a, i) => (
              <IHAnimatedSection key={a.auteur} delay={i * 0.1}>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: 12,
                    border: '1px solid rgba(26,26,24,0.08)',
                    padding: 32,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        fill="var(--ih-accent)"
                        style={{ color: 'var(--ih-accent)' }}
                      />
                    ))}
                  </div>

                  <p
                    className="flex-1 mb-4"
                    style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ih-text-secondary)' }}
                  >
                    &ldquo;{a.texte}&rdquo;
                  </p>

                  <div>
                    <p style={{ ...body500, fontSize: 13, color: 'var(--ih-text)' }}>
                      {a.auteur}
                    </p>
                    <p style={{ ...mono, fontSize: 11, color: 'var(--ih-text-secondary)', opacity: 0.6 }}>
                      {a.type}
                    </p>
                  </div>
                </div>
              </IHAnimatedSection>
            ))}
          </div>

          {/* Stats row */}
          <IHAnimatedSection>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
              style={{
                background: '#ffffff',
                borderRadius: 12,
                border: '1px solid rgba(26,26,24,0.08)',
                padding: 32,
              }}
            >
              {[
                { value: '127', label: 'biens vendus en 2025', icon: Home },
                { value: '34j', label: 'd\u00E9lai moyen de vente', icon: Clock },
                { value: '98%', label: 'du prix demand\u00E9 obtenu', icon: TrendingUp },
                { value: '84', label: 'avis Google 5\u2605', icon: Users },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon
                    size={18}
                    className="mx-auto mb-3"
                    style={{ color: 'var(--ih-primary)', opacity: 0.4 }}
                  />
                  <p
                    style={{
                      ...mono,
                      fontSize: 32,
                      lineHeight: 1.2,
                      color: 'var(--ih-primary)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ ...mono, fontSize: 11, color: 'var(--ih-text-secondary)', marginTop: 4 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </IHAnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — MARCHÉ BORDELAIS
      ══════════════════════════════════════════ */}
      <section style={{ background: 'var(--ih-bg-alt)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <IHAnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">
              <div style={{ maxWidth: 320 }}>
                <span style={sectionLabel}>
                  March\u00E9 local
                </span>
                <h2
                  style={{
                    ...display,
                    fontSize: 24,
                    lineHeight: 1.3,
                    color: 'var(--ih-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Le march\u00E9 immobilier \u00E0 Bordeaux en 2026
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  'Apr\u00E8s 2\u00A0ans de correction post-hausse des taux, les prix se stabilisent depuis mi-2025. Pour les vendeurs bien conseill\u00E9s, c\u2019est le moment de positionner son bien avant la reprise.',
                  'Les biens correctement estim\u00E9s se vendent en moins de 40\u00A0jours sur Bordeaux intra-muros. La cl\u00E9\u00A0: un prix juste d\u00E8s le d\u00E9part, pas une n\u00E9gociation \u00E0 la baisse.',
                  'Le DPE devient un crit\u00E8re d\u00E9cisif pour les acheteurs. Les biens class\u00E9s F ou G perdent en attractivit\u00E9 — un audit \u00E9nerg\u00E9tique peut cr\u00E9er un avantage concurrentiel.',
                ].map((insight, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: 'var(--ih-text-secondary)',
                      paddingLeft: 16,
                      borderLeft: '2px solid rgba(26,60,94,0.12)',
                    }}
                  >
                    {insight}
                  </p>
                ))}
              </div>
            </div>
          </IHAnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8 — CONTACT
      ══════════════════════════════════════════ */}
      <section
        id="contact"
        style={{ background: 'var(--ih-bg)', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Left — Copy */}
            <IHAnimatedSection>
              <span style={sectionLabel}>
                Contact
              </span>
              <h2
                className="mb-4"
                style={{
                  ...h2Style,
                }}
              >
                Un projet ? Parlons-en.
              </h2>
              <p
                className="mb-8"
                style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ih-text-secondary)', maxWidth: 400 }}
              >
                Que vous souhaitiez vendre, acheter ou simplement obtenir un conseil,
                notre \u00E9quipe vous r\u00E9pond sous 24h ouvr\u00E9es.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+33556000000"
                  className="flex items-center gap-3 transition-opacity hover:opacity-80"
                  style={{ color: 'var(--ih-primary)', fontSize: 17, ...body500 }}
                >
                  <Phone size={18} />
                  05 56 00 00 00
                </a>
                <p
                  style={{ ...mono, fontSize: 11, color: 'var(--ih-text-secondary)', opacity: 0.40, marginLeft: 30 }}
                >
                  Lun\u2013Ven 9h\u201318h \u00B7 Sam 10h\u201313h
                </p>
              </div>
            </IHAnimatedSection>

            {/* Right — Form */}
            <IHAnimatedSection delay={0.1}>
              <form
                className="flex flex-col gap-4"
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: 32,
                  border: '1px solid rgba(26,26,24,0.08)',
                }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="prenom"
                      style={labelStyle}
                    >
                      Pr\u00E9nom
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      placeholder="Votre pr\u00E9nom"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={labelStyle}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="votre@email.fr"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Objet */}
                <div>
                  <label
                    htmlFor="objet"
                    style={labelStyle}
                  >
                    Objet
                  </label>
                  <select
                    id="objet"
                    style={inputStyle}
                  >
                    <option>Estimer mon bien</option>
                    <option>Vendre</option>
                    <option>Acheter</option>
                    <option>Louer</option>
                    <option>Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={labelStyle}
                  >
                    Message <span style={{ color: 'var(--ih-text-secondary)', opacity: 0.40 }}>(optionnel)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="D\u00E9crivez votre projet..."
                    style={{ ...inputStyle, resize: 'vertical' as const }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 transition-colors duration-200 mt-2"
                  style={{
                    background: 'var(--ih-primary)',
                    color: '#ffffff',
                    borderRadius: 11,
                    padding: '16px 32px',
                    ...body500,
                    fontSize: 15,
                    border: 'none',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = 'var(--ih-primary-hover)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'var(--ih-primary)')
                  }
                >
                  <Send size={15} />
                  Envoyer mon message
                </button>

                <p
                  className="text-center"
                  style={{ ...mono, fontSize: 11, color: 'var(--ih-text-secondary)', opacity: 0.60 }}
                >
                  R\u00E9ponse garantie sous 24h ouvr\u00E9es
                </p>
              </form>
            </IHAnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
