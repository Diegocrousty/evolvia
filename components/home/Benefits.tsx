import { AnimatedSection } from '@/components/ui/AnimatedSection'

const benefits = [
  {
    number: '01',
    title: 'Livr\u00e9 en 3 \u00e0 7 jours',
    desc: "L\u2019IA nous permet d\u2019aller 10\u00d7 plus vite que les agences traditionnelles \u2014 sans sacrifier la qualit\u00e9.",
  },
  {
    number: '02',
    title: 'Con\u00e7u pour convertir',
    desc: "Chaque page transforme un visiteur Google en client. Pas juste pour \u00eatre \u00abjoli\u00bb.",
  },
  {
    number: '03',
    title: '100% mobile-first',
    desc: "60% de vos clients arrivent sur leur t\u00e9l\u00e9phone. Parfait sur tous les \u00e9crans.",
  },
  {
    number: '04',
    title: 'Cl\u00e9 en main',
    desc: "Design, code, d\u00e9ploiement, h\u00e9bergement. Vous recevez un lien. C\u2019est tout.",
  },
]

export function Benefits() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 data-cursor-headline className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-4 leading-tight">
            Pourquoi Evolvia
            <br />
            <span className="italic text-chrome">
              et pas une autre agence&nbsp;?
            </span>
          </h2>
          <p className="text-evolvia-muted font-body max-w-md mb-16">
            Les grandes agences co&ucirc;tent 10&times; plus cher. Les freelances ne se
            sp&eacute;cialisent pas. Evolvia fait les deux.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 group relative overflow-hidden">
                <div className="absolute top-4 right-6 font-display text-6xl font-light select-none" style={{ color: 'rgba(194,98,10,0.8)' }}>
                  {b.number}
                </div>
                <h3 className="font-display text-2xl font-light text-evolvia-text mb-3">
                  {b.title}
                </h3>
                <p className="text-evolvia-muted font-body text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
