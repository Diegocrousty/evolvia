import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative glass-card rounded-md p-12 md:p-20 text-center overflow-hidden">
            {/* Warm glow from top */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(240,238,235,0.03) 0%, transparent 60%)',
              }}
            />

            <div className="relative z-10">
              <h2 data-cursor-headline className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-6 leading-tight">
                <span className="text-holographic">Votre site en 3&nbsp;jours.</span>
                <br />
                <span className="italic text-evolvia-text-secondary">
                  Ou on vous rembourse.
                </span>
              </h2>
              <p className="text-evolvia-muted font-body max-w-md mx-auto mb-8">
                Aucun risque. Si le r&eacute;sultat ne vous convient pas, vous &ecirc;tes
                rembours&eacute; int&eacute;gralement.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block"
              >
                D&eacute;marrer mon projet &rarr;
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
