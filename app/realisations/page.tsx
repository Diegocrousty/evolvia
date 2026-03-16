'use client'
import { useState } from 'react'
import { realisations } from '@/content/realisations'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Link from 'next/link'

function ProjectCard({
  name,
  location,
  category,
  offer,
  url,
  description,
}: (typeof realisations)[number]) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={url}>
      <div
        className="relative glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-evolvia-border-hover transition-colors"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Placeholder visual */}
        <div className="aspect-[4/3] bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex items-center justify-center">
          <span className="font-display text-4xl font-light text-white/10">
            {name.charAt(0)}
          </span>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-evolvia-silver text-xs font-body tracking-widest uppercase">
              {category}
            </span>
            <span className="text-evolvia-muted text-xs">·</span>
            <span className="text-evolvia-muted text-xs font-body">
              {location}
            </span>
          </div>
          <h3 className="font-display text-2xl font-light text-evolvia-text mb-1">
            {name}
          </h3>
          <p className="text-evolvia-text-secondary text-xs font-body mb-3">
            {offer}
          </p>

          {/* Description reveal on hover */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              hovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-evolvia-muted font-body text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function RealisationsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light mb-6 leading-tight">
              Nos{' '}
              <span className="italic text-chrome">
                réalisations
              </span>
            </h1>
            <p className="text-evolvia-muted font-body max-w-lg text-lg mb-16">
              Des sites créés pour de vrais professionnels français. Chaque
              projet est unique, conçu sur mesure pour le métier du client.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realisations.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
