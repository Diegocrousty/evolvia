import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — VES Plomberie',
}

export default function MentionsLegales() {
  return (
    <main
      style={{
        backgroundColor: 'var(--vp-bg)',
        paddingTop: '120px',
        paddingBottom: '96px',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <h1
          className="vp-display"
          style={{
            color: 'var(--vp-primary)',
            fontSize: '32px',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            marginBottom: '48px',
          }}
        >
          Mentions légales
        </h1>

        <div className="flex flex-col" style={{ gap: '32px' }}>
          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Éditeur du site
            </h2>
            <div style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              <p><strong>VES Plomberie</strong> — SARL</p>
              <p>SIREN : 894 435 635</p>
              <p>Siège social : 51 Cours Franklin Roosevelt, 69006 Lyon</p>
              <p>Téléphone : 06 24 44 61 76</p>
              <p>Email : ves-plomberie@outlook.fr</p>
              <p>Responsable de la publication : Ludovic Vesque</p>
            </div>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Hébergement
            </h2>
            <div style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p>Site : vercel.com</p>
            </div>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Conception et réalisation
            </h2>
            <div style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              <p>
                <a
                  href="https://evolvia.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--vp-accent)', textDecoration: 'underline', textUnderlineOffset: '2px' }}
                >
                  Evolvia
                </a>{' '}
                — Sites web professionnels pour TPE/PME
              </p>
            </div>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Propriété intellectuelle
            </h2>
            <p style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la
              propriété exclusive de VES Plomberie ou de ses partenaires. Toute reproduction,
              représentation ou diffusion, en tout ou partie, du contenu de ce site est interdite
              sans autorisation expresse.
            </p>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Crédits photos
            </h2>
            <p style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              Photos d&apos;illustration : Unsplash (licence libre). Les photos seront remplacées par
              des photos réelles de chantiers VES Plomberie.
            </p>
          </section>
        </div>

        <div style={{ marginTop: '48px' }}>
          <a
            href="/demos/ves-plomberie"
            style={{
              color: 'var(--vp-accent)',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            }}
          >
            ← Retour au site
          </a>
        </div>
      </div>
    </main>
  )
}
