import { realisations } from '@/content/realisations'
import { getUnsplashImages } from '@/lib/unsplash'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ProjectCard } from '@/components/ProjectCard'

export default async function RealisationsPage() {
  const images = await getUnsplashImages(
    realisations.map((r) => ({
      query: r.poster.unsplashQuery,
      width: 800,
      height: 600,
    }))
  )

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
                <ProjectCard {...project} image={images[i]} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
