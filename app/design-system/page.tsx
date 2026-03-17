'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

/* ─── Section wrapper with label ─── */
function Section({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="relative" style={{ padding: '96px 0' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <AnimatedSection>
          <span
            className="font-mono uppercase block"
            style={{
              fontSize: '11px',
              letterSpacing: '0.16em',
              color: 'rgba(240,238,235,0.40)',
              marginBottom: '16px',
            }}
          >
            {label}
          </span>
          <h2
            className="font-display font-light"
            style={{
              fontSize: '48px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#f0eeeb',
              marginBottom: '64px',
            }}
          >
            {title}
          </h2>
        </AnimatedSection>
        {children}
      </div>
    </section>
  )
}

/* ─── Before/After comparison block ─── */
function Comparison({
  beforeLabel,
  afterLabel,
  before,
  after,
  delay = 0,
}: {
  beforeLabel?: string
  afterLabel?: string
  before: React.ReactNode
  after: React.ReactNode
  delay?: number
}) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: '32px', marginBottom: '64px' }}
      >
        {/* BEFORE */}
        <div>
          <span
            className="font-mono uppercase block"
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: 'rgba(240,238,235,0.25)',
              marginBottom: '16px',
            }}
          >
            {beforeLabel || 'Sans design system'}
          </span>
          <div
            style={{
              background: '#1a1918',
              border: '1px solid rgba(240,238,235,0.08)',
              borderRadius: '12px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Red subtle indicator */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, rgba(239,68,68,0.4), rgba(239,68,68,0.1))',
              }}
            />
            {before}
          </div>
        </div>

        {/* AFTER */}
        <div>
          <span
            className="font-mono uppercase block"
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: 'rgba(240,238,235,0.40)',
              marginBottom: '16px',
            }}
          >
            {afterLabel || 'Avec design system'}
          </span>
          <div
            style={{
              background: '#1a1918',
              border: '1px solid rgba(240,238,235,0.08)',
              borderRadius: '12px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Green subtle indicator */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, rgba(52,211,153,0.4), rgba(52,211,153,0.1))',
              }}
            />
            {after}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Critique card ─── */
function Critique({
  verdict,
  text,
  type,
}: {
  verdict: string
  text: string
  type: 'good' | 'warning' | 'bad'
}) {
  const colors = {
    good: { border: 'rgba(52,211,153,0.25)', bg: 'rgba(52,211,153,0.04)', dot: '#34d399' },
    warning: { border: 'rgba(251,191,36,0.25)', bg: 'rgba(251,191,36,0.04)', dot: '#fbbf24' },
    bad: { border: 'rgba(239,68,68,0.25)', bg: 'rgba(239,68,68,0.04)', dot: '#ef4444' },
  }
  const c = colors[type]

  return (
    <div
      style={{
        border: `1px solid ${c.border}`,
        background: c.bg,
        borderRadius: '12px',
        padding: '24px',
      }}
    >
      <div className="flex items-center" style={{ gap: '12px', marginBottom: '8px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: c.dot,
            flexShrink: 0,
          }}
        />
        <span
          className="font-body"
          style={{ fontSize: '15px', color: '#f0eeeb', fontWeight: 500 }}
        >
          {verdict}
        </span>
      </div>
      <p
        className="font-body"
        style={{
          fontSize: '13px',
          lineHeight: 1.5,
          color: 'rgba(240,238,235,0.60)',
          marginLeft: '20px',
        }}
      >
        {text}
      </p>
    </div>
  )
}

/* ════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════ */
export default function DesignSystemShowcase() {
  const [grainVisible, setGrainVisible] = useState(false)

  return (
    <main className="relative" style={{ background: '#080808' }}>
      {/* ─── HERO ─── */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: '80vh', padding: '128px 24px 96px' }}
      >
        <GrainOverlay />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-15%',
            left: '50%',
            marginLeft: '-400px',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(240,238,235,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono uppercase relative z-10"
          style={{
            fontSize: '11px',
            letterSpacing: '0.16em',
            color: 'rgba(240,238,235,0.40)',
            marginBottom: '32px',
          }}
        >
          Design System Evolvia — Validation interne
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light relative z-10"
          style={{
            fontSize: 'clamp(32px, 6vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#f0eeeb',
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          Chaque pixel suit{' '}
          <em className="font-light" style={{ fontStyle: 'italic' }}>
            une règle géométrique.
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-body relative z-10"
          style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(240,238,235,0.60)',
            maxWidth: '560px',
          }}
        >
          Pas du style — de la rigueur systématique.
          Voici ce que le design system change concrètement, comparé au &quot;au feeling&quot;.
        </motion.p>
      </section>

      {/* Separator */}
      <div
        className="mx-auto"
        style={{
          width: 'min(80%, 600px)',
          height: '1px',
          background: 'rgba(240,238,235,0.08)',
        }}
      />

      {/* ─── 1. TYPOGRAPHIE ─── */}
      <Section label="Règle 01" title="Échelle typographique">
        <Comparison
          beforeLabel="Tailles random (14px, 16px, 22px, 36px)"
          afterLabel="Échelle Evolvia (13/15/20/32/48px)"
          before={
            <div>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '36px', lineHeight: 1.4, color: '#f0eeeb', marginBottom: '12px' }}>
                Titre en Arial 36px
              </p>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: 1.6, color: 'rgba(240,238,235,0.7)', marginBottom: '10px' }}>
                Body en 16px avec du line-height random à 1.6 et une font system sans aucune personnalité. Ça fonctionne, mais ça ne dit rien.
              </p>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(240,238,235,0.5)' }}>
                Label 14px — ni lisible ni discret
              </p>
            </div>
          }
          after={
            <div>
              <p
                className="font-display font-light"
                style={{ fontSize: '32px', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#f0eeeb', marginBottom: '16px' }}
              >
                Titre en Cormorant 32px
              </p>
              <p
                className="font-body"
                style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,238,235,0.82)', marginBottom: '12px' }}
              >
                Body en DM Sans 15px avec line-height 1.7 — chaque valeur vient de l&apos;échelle. Le texte respire, la hiérarchie est immédiate.
              </p>
              <p
                className="font-mono uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(240,238,235,0.40)' }}
              >
                Label DM Mono 11px · tracking +0.12em
              </p>
            </div>
          }
        />

        <Comparison
          delay={1}
          beforeLabel="Letter-spacing identique partout"
          afterLabel="Tracking inversé (grand = serré)"
          before={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '48px', lineHeight: 1.3, letterSpacing: '0em', color: '#f0eeeb' }}>
                Headline
              </p>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', letterSpacing: '0em', color: 'rgba(240,238,235,0.5)', textTransform: 'uppercase' }}>
                Label texte
              </p>
            </div>
          }
          after={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p className="font-display font-light" style={{ fontSize: '48px', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#f0eeeb' }}>
                Headline
              </p>
              <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.16em', color: 'rgba(240,238,235,0.40)', textTransform: 'uppercase' }}>
                Label texte
              </p>
            </div>
          }
        />
      </Section>

      <div className="mx-auto" style={{ width: 'min(80%, 600px)', height: '1px', background: 'rgba(240,238,235,0.08)' }} />

      {/* ─── 2. SPACING ─── */}
      <Section label="Règle 02" title="Grille de spacing">
        <Comparison
          beforeLabel="Padding arbitraire (7px, 13px, 18px, 35px)"
          afterLabel="Grille 8px (8/16/24/32px)"
          before={
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {[35, 18, 13, 7].map((px) => (
                  <div key={px} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: `${px * 2}px`,
                        height: '32px',
                        background: 'rgba(239,68,68,0.15)',
                        border: '1px dashed rgba(239,68,68,0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(239,68,68,0.6)' }}>
                        {px}px
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body" style={{ fontSize: '13px', color: 'rgba(240,238,235,0.40)', marginTop: '16px' }}>
                Chaque composant invente ses propres valeurs — incohérence visuelle garantie.
              </p>
            </div>
          }
          after={
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[32, 24, 16, 8].map((px) => (
                  <div key={px} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: `${px * 2}px`,
                        height: '32px',
                        background: 'rgba(52,211,153,0.1)',
                        border: '1px dashed rgba(52,211,153,0.25)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(52,211,153,0.6)' }}>
                        {px}px
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body" style={{ fontSize: '13px', color: 'rgba(240,238,235,0.40)', marginTop: '16px' }}>
                Tout snap sur la grille — l&apos;oeil détecte l&apos;alignement sans le nommer.
              </p>
            </div>
          }
        />
      </Section>

      <div className="mx-auto" style={{ width: 'min(80%, 600px)', height: '1px', background: 'rgba(240,238,235,0.08)' }} />

      {/* ─── 3. BORDER-RADIUS ─── */}
      <Section label="Règle 03" title="Superellipse — coins Apple">
        <Comparison
          beforeLabel="Border-radius random (6px, 10px, 20px, 50px)"
          afterLabel="Règle hauteur÷4 + familles (12px cards, h÷4 buttons)"
          before={
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { r: '6px', label: 'Card' },
                { r: '20px', label: 'Button' },
                { r: '50px', label: 'Badge' },
                { r: '10px', label: 'Input' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    width: '96px',
                    height: '64px',
                    background: '#242220',
                    border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: item.r,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(239,68,68,0.5)' }}>
                    {item.r}
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(240,238,235,0.40)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          }
          after={
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { r: '12px', label: 'Card', h: '64px' },
                { r: '11px', label: 'Button 44px', h: '44px' },
                { r: '7px', label: 'Badge 28px', h: '28px' },
                { r: '8px', label: 'Input', h: '40px' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    width: '96px',
                    height: item.h,
                    background: '#242220',
                    border: '1px solid rgba(52,211,153,0.2)',
                    borderRadius: item.r,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(52,211,153,0.5)' }}>
                    {item.r}
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(240,238,235,0.40)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          }
        />
      </Section>

      <div className="mx-auto" style={{ width: 'min(80%, 600px)', height: '1px', background: 'rgba(240,238,235,0.08)' }} />

      {/* ─── 4. COULEURS 60-30-10 ─── */}
      <Section label="Règle 04" title="Hiérarchie couleur 60-30-10">
        <Comparison
          beforeLabel="Accent dilué partout"
          afterLabel="Un seul CTA orange — 60-30-10"
          before={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '20px', color: '#d97706', fontWeight: 600 }}>
                Titre en orange
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(240,238,235,0.7)' }}>
                Du texte avec des <span style={{ color: '#d97706' }}>mots en accent</span> un peu partout, des <span style={{ color: '#d97706', borderBottom: '1px solid #d97706' }}>liens orange</span> et des icônes dorées.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ background: '#d97706', color: '#fff', padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '13px' }}>
                  CTA 1
                </button>
                <button style={{ background: '#d97706', color: '#fff', padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '13px', opacity: 0.8 }}>
                  CTA 2
                </button>
                <button style={{ background: 'transparent', color: '#d97706', padding: '8px 16px', borderRadius: '8px', border: '1px solid #d97706', fontSize: '13px' }}>
                  CTA 3
                </button>
              </div>
              <p style={{ fontSize: '11px', color: 'rgba(240,238,235,0.40)' }}>
                L&apos;oeil ne sait plus où regarder. L&apos;accent ne guide plus rien.
              </p>
            </div>
          }
          after={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p className="font-display font-light" style={{ fontSize: '20px', lineHeight: 1.4, color: '#f0eeeb' }}>
                Titre sans accent — propre
              </p>
              <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,238,235,0.82)' }}>
                Le texte courant reste neutre. L&apos;oeil scanne naturellement la page et s&apos;arrête sur le seul élément coloré : le CTA.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '13px' }}
                >
                  Obtenir un devis
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '13px' }}
                >
                  En savoir plus
                </button>
              </div>
              <p className="font-mono" style={{ fontSize: '11px', color: 'rgba(240,238,235,0.40)' }}>
                Un seul point focal → conversion claire.
              </p>
            </div>
          }
        />

        {/* Color bar visualization */}
        <AnimatedSection delay={1}>
          <div style={{ marginBottom: '64px' }}>
            <p className="font-mono uppercase" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(240,238,235,0.40)', marginBottom: '16px' }}>
              Répartition visuelle idéale
            </p>
            <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', height: '48px' }}>
              <div style={{ flex: 60, background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="font-mono" style={{ fontSize: '11px', color: 'rgba(240,238,235,0.40)' }}>
                  60% fond
                </span>
              </div>
              <div style={{ flex: 30, background: '#1a1918', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="font-mono" style={{ fontSize: '11px', color: 'rgba(240,238,235,0.40)' }}>
                  30% surface
                </span>
              </div>
              <div style={{ flex: 10, background: '#c2620a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="font-mono" style={{ fontSize: '11px', color: '#f0eeeb' }}>
                  10%
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <div className="mx-auto" style={{ width: 'min(80%, 600px)', height: '1px', background: 'rgba(240,238,235,0.08)' }} />

      {/* ─── 5. GRAIN ─── */}
      <Section label="Règle 05" title="Grain argentique — signature visuelle">
        <AnimatedSection>
          <div style={{ marginBottom: '64px' }}>
            <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,238,235,0.60)', marginBottom: '32px', maxWidth: '560px' }}>
              Le grain ajoute une texture organique subtile qui casse la froideur du digital.
              C&apos;est ce qui fait qu&apos;un site Evolvia ne ressemble pas à un template.
            </p>

            <button
              onClick={() => setGrainVisible(!grainVisible)}
              className="btn-secondary"
              style={{ padding: '12px 24px', fontSize: '13px', marginBottom: '32px' }}
            >
              {grainVisible ? 'Masquer le grain' : 'Afficher le grain'}
            </button>

            <div
              style={{
                position: 'relative',
                background: '#0f0e0d',
                borderRadius: '12px',
                border: '1px solid rgba(240,238,235,0.08)',
                padding: '64px 32px',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              {grainVisible && <GrainOverlay />}
              <p
                className="font-display font-light relative z-10"
                style={{ fontSize: '32px', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#f0eeeb', marginBottom: '16px' }}
              >
                Une surface avec et sans grain
              </p>
              <p
                className="font-body relative z-10"
                style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,238,235,0.60)' }}
              >
                {grainVisible
                  ? 'Le grain est activé — texture organique subtile, fractalNoise 0.035 + turbulence overlay 0.02.'
                  : 'Le grain est désactivé — surface plate, froide, digitale.'}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <div className="mx-auto" style={{ width: 'min(80%, 600px)', height: '1px', background: 'rgba(240,238,235,0.08)' }} />

      {/* ─── 6. COMPOSANT COMPLET ─── */}
      <Section label="Règle 06" title="Tout combiné — la card">
        <Comparison
          beforeLabel="Card sans aucune règle"
          afterLabel="Card design system Evolvia"
          before={
            <div
              style={{
                background: '#1e1e1e',
                border: '1px solid #333',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '140px',
                  background: '#2a2a2a',
                  borderRadius: '6px',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: 'Arial', fontSize: '14px', color: '#888' }}>
                  Image 16:9
                </span>
              </div>
              <p style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
                Site Plomberie Martin
              </p>
              <p style={{ fontFamily: 'Arial', fontSize: '14px', color: '#aaa', lineHeight: 1.5, marginBottom: '12px' }}>
                Un site vitrine classique pour un plombier local avec formulaire de contact.
              </p>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ background: '#d97706', color: '#fff', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>
                  Plomberie
                </span>
                <span style={{ background: '#d97706', color: '#fff', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', opacity: 0.7 }}>
                  Offre Solo
                </span>
              </div>
            </div>
          }
          after={
            <div
              className="glass-card"
              style={{
                padding: '24px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '140px',
                  background: '#242220',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(240,238,235,0.08)',
                }}
              >
                <span className="font-mono" style={{ fontSize: '11px', color: 'rgba(240,238,235,0.25)', letterSpacing: '0.08em' }}>
                  16:9
                </span>
              </div>
              <p
                className="font-display font-light"
                style={{ fontSize: '20px', lineHeight: 1.4, color: '#f0eeeb', marginBottom: '8px' }}
              >
                Site Plomberie Martin
              </p>
              <p
                className="font-body"
                style={{ fontSize: '13px', lineHeight: 1.5, color: 'rgba(240,238,235,0.60)', marginBottom: '16px' }}
              >
                Un site vitrine classique pour un plombier local avec formulaire de contact.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '7px',
                    border: '1px solid rgba(240,238,235,0.15)',
                    fontSize: '11px',
                    color: 'rgba(240,238,235,0.60)',
                    letterSpacing: '0.04em',
                  }}
                >
                  Plomberie
                </span>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '7px',
                    border: '1px solid rgba(240,238,235,0.08)',
                    fontSize: '11px',
                    color: 'rgba(240,238,235,0.40)',
                    letterSpacing: '0.04em',
                  }}
                >
                  Offre Solo
                </span>
              </div>
            </div>
          }
        />
      </Section>

      <div className="mx-auto" style={{ width: 'min(80%, 600px)', height: '1px', background: 'rgba(240,238,235,0.08)' }} />

      {/* ─── CRITIQUE ─── */}
      <Section label="Verdict" title="Critique honnête du design system">
        <AnimatedSection>
          <div style={{ display: 'grid', gap: '16px', marginBottom: '64px' }}>
            <Critique
              type="good"
              verdict="Superellipse — vraiment efficace"
              text="La règle hauteur÷4 crée une cohérence que l'oeil perçoit inconsciemment. C'est exactement le principe Apple. Ça marche."
            />
            <Critique
              type="good"
              verdict="Échelle typo fermée — discipline payante"
              text="Interdire 14px/16px force la cohérence. Chaque taille a un rôle précis. La hiérarchie visuelle est immédiate sans effort."
            />
            <Critique
              type="good"
              verdict="60-30-10 strict — conversion maximisée"
              text="Un seul CTA orange par page = l'oeil sait exactement où aller. Pas de dilution, pas de confusion."
            />
            <Critique
              type="good"
              verdict="Grain argentique — signature unique"
              text="Distingue immédiatement un site Evolvia d'un template Wix. Subtil mais reconnaissable."
            />
            <Critique
              type="warning"
              verdict="Opacité 82% — valeur inhabituelle"
              text="L'industrie utilise 87% (Material) ou 75%. Le CLAUDE.md utilise 0.75 pour le body, mais le DESIGN-SYSTEM.md dit 82%. Incohérence entre fichiers à résoudre."
            />
            <Critique
              type="warning"
              verdict="'Grille 8px' qui autorise 4px et 12px"
              text="C'est en réalité un système 4px (4/8/12/16/24/32...), pas un système 8px. La doc devrait le nommer correctement pour éviter la confusion."
            />
            <Critique
              type="warning"
              verdict="Interdire 16px — un pari"
              text="Le 16px est le défaut navigateur et la base rem. Utiliser 15px ou 17px fonctionne visuellement mais nage à contre-courant pour un gain subtil."
            />
          </div>
        </AnimatedSection>

        {/* Final score */}
        <AnimatedSection delay={1}>
          <div
            style={{
              textAlign: 'center',
              padding: '64px 32px',
              marginBottom: '64px',
            }}
          >
            <p
              className="font-display font-light"
              style={{
                fontSize: '80px',
                lineHeight: 1,
                color: '#f0eeeb',
                marginBottom: '16px',
              }}
            >
              85%
            </p>
            <p
              className="font-body"
              style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,238,235,0.60)', maxWidth: '480px', margin: '0 auto' }}
            >
              Un design system solide avec une vraie personnalité.
              Les 15% restants sont des incohérences mineures entre fichiers — facilement corrigeables.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Bottom spacing */}
      <div style={{ height: '96px' }} />
    </main>
  )
}
