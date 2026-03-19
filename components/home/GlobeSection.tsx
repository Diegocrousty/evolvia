// components/home/GlobeSection.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe } from '@/components/ui/globe'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function GlobeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* ── Radial glow backdrop ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(240,238,235,0.02) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* ── Text content ── */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-xxs tracking-[0.35em] uppercase text-evolvia-muted mb-6">
            Visibilit&eacute; mondiale
          </p>
          <h2 data-cursor-headline className="font-display text-2xl md:text-4xl lg:text-5xl font-light leading-[1.05] tracking-tight">
            Pensez local,{' '}
            <span className="text-chrome italic">
              rayonnez global.
            </span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-evolvia-text-secondary text-sm md:text-base font-light leading-relaxed">
            Votre site professionnel travaille 24h/24&nbsp;&mdash;&nbsp;visible
            partout dans le monde, depuis la France.
          </p>
        </AnimatedSection>

        {/* ── Globe — centered, no clipping ── */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]"
            style={{ isolation: 'isolate' }}
          >
            <Globe className="w-full h-full" />
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <AnimatedSection delay={2} className="mt-16 md:mt-20">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { value: '24/7', label: 'Disponibilit\u00e9' },
              { value: '195+', label: 'Pays accessibles' },
              { value: '<2s', label: 'Temps de chargement' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl md:text-3xl text-chrome tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xxs tracking-[0.2em] uppercase text-evolvia-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
