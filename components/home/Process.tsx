import { AnimatedSection } from '@/components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Vous nous contactez',
    desc: "Un formulaire de 5 minutes. D\u00e9crivez votre activit\u00e9, vos besoins. Pas d\u2019appel obligatoire.",
    time: '5 minutes',
  },
  {
    number: '02',
    title: 'On livre en quelques jours',
    desc: "Notre \u00e9quipe + IA con\u00e7oit votre site sur mesure. Vous n\u2019avez rien \u00e0 faire.",
    time: '3 \u00e0 7 jours',
  },
  {
    number: '03',
    title: 'Votre site est en ligne',
    desc: "D\u00e9ploiement inclus, h\u00e9bergement configur\u00e9, support prioritaire.",
    time: 'Imm\u00e9diat',
  },
]

export function Process() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 data-cursor-headline className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-16 leading-tight">
            Comment &ccedil;a marche<br />
            <span className="italic text-chrome">en 3 &eacute;tapes</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line removed */}

          <div className="space-y-16">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="flex gap-8 md:gap-12 items-start">
                  <div className="relative shrink-0">
                    <div className="font-display text-3xl md:text-4xl font-light" style={{ color: 'rgba(194,98,10,1)' }}>
                      {step.number}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-evolvia-silver/60 text-xxs font-body tracking-widest uppercase mb-2">
                      {step.time}
                    </div>
                    <h3 className="font-display text-2xl font-light text-evolvia-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-evolvia-muted font-body text-sm leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
