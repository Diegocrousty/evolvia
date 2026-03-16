export default function ComptaPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="text-center max-w-xl">
        <div className="font-display text-6xl font-light text-holographic mb-6">Bientôt.</div>
        <p className="text-evolvia-muted font-body mb-8">
          Evolvia Compta arrive en Q3 2026. Automatisation comptable pour
          cabinets et TPE — en lien avec la réglementation facturation
          électronique 2026.
        </p>
        <a
          href="/contact"
          className="text-evolvia-text-secondary text-sm font-body underline underline-offset-4 hover:text-evolvia-text transition-colors"
        >
          Être notifié à l&apos;ouverture →
        </a>
      </div>
    </section>
  )
}
