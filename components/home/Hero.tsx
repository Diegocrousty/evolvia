'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'


export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Spotlight */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          marginLeft: "-400px",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(240,238,235,0.07) 0%, rgba(240,238,235,0.02) 50%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Grain overlay handled by EvolviaShell — no duplicate here */}

      <div className="relative z-10 max-w-[1100px] mx-auto w-full px-6 flex flex-col items-center text-center">
        {/* 1. Eyebrow label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
          <span
            className="font-mono uppercase"
            style={{
              color: 'rgba(240,238,235,0.40)',
              fontSize: '11px',
              letterSpacing: '0.16em',
            }}
          >
            Sites web pour TPE &amp; PME fran&ccedil;aises
          </span>
        </motion.div>

        {/* 2. EVOLVIA — label de marque discret */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light uppercase mb-4"
          style={{
            fontSize: 'clamp(64px, 10vw, 80px)',
            letterSpacing: '0.12em',
            color: '#f0eeeb',
            lineHeight: 1,
          }}
        >
          Evolvia
        </motion.p>

        {/* Séparateur 1 — entre EVOLVIA et H1 */}
        <div
          className="mb-4"
          style={{
            width: 'clamp(200px, 35vw, 420px)',
            height: '1px',
            background: 'rgba(240,238,235,0.08)',
          }}
        />

        {/* 3. H1 — copy figée avec italic sur la partie émotionnelle */}
        <motion.h1
          data-cursor-headline
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light mb-4"
          style={{
            fontSize: 'clamp(32px, 6vw, 64px)',
            letterSpacing: '-0.02em',
            color: '#f0eeeb',
            lineHeight: 1.05,
          }}
        >
          Le site que vos clients cherchent{' '}
          <em className="font-light" style={{ fontStyle: 'italic' }}>
            quand vous ne décrochez pas.
          </em>
        </motion.h1>

        {/* Séparateur 2 — entre H1 et sous-titre */}
        <div
          className="mb-4"
          style={{
            width: 'clamp(200px, 35vw, 420px)',
            height: '1px',
            background: 'rgba(240,238,235,0.08)',
          }}
        />

        {/* 4. Sous-titre — copy figée */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-body mb-8"
          style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(240,238,235,0.82)',
            maxWidth: '720px',
          }}
        >
          On construit votre site pendant que vous êtes sur le terrain.
          Livré en 3&nbsp;jours, à partir de 490€.
        </motion.p>

        {/* 5. CTA — bouton amber principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#c2620a',
              color: '#f0eeeb',
              padding: '12px 24px',
              borderRadius: '9999px',
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#a0510a'
              e.currentTarget.style.transform = 'scale(1.02)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#c2620a'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            Obtenir un devis en 24h
          </Link>
        </motion.div>

        {/* 6. Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span
            className="font-mono uppercase"
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: 'rgba(240,238,235,0.25)',
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '24px',
              background: 'linear-gradient(to bottom, rgba(240,238,235,0.2), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
