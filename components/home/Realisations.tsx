import { realisations } from '@/content/realisations'
import { getUnsplashImages } from '@/lib/unsplash'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ProjectCard } from '@/components/ProjectCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export async function Realisations() {
  const images = await getUnsplashImages(
    realisations.map((r) => ({
      query: r.poster.unsplashQuery,
      width: 800,
      height: 600,
    }))
  )

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-evolvia-silver text-xs font-mono tracking-widest uppercase block mb-3">
                Portfolio
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight">
                Ce qu&apos;on a{' '}
                <span className="italic text-chrome">construit</span>
              </h2>
            </div>
            <Link
              href="/realisations"
              className="hidden md:inline-flex items-center gap-2 text-evolvia-muted hover:text-evolvia-text transition-colors font-body text-sm"
            >
              Tout voir
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realisations.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard {...project} image={images[i]} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile link */}
        <Link
          href="/realisations"
          className="md:hidden inline-flex items-center gap-2 mt-8 text-evolvia-muted hover:text-evolvia-text transition-colors font-body text-sm"
        >
          Voir toutes nos réalisations
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}
