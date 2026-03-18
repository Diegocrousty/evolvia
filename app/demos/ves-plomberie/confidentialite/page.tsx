import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — VES Plomberie',
}

export default function Confidentialite() {
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
          Politique de confidentialité
        </h1>

        <div className="flex flex-col" style={{ gap: '32px' }}>
          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Responsable du traitement
            </h2>
            <div style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              <p><strong>VES Plomberie</strong> — SARL</p>
              <p>51 Cours Franklin Roosevelt, 69006 Lyon</p>
              <p>Email : ves-plomberie@outlook.fr</p>
            </div>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Données collectées
            </h2>
            <p style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              Lors de l&apos;utilisation du formulaire de contact, nous collectons : votre prénom, ville,
              numéro de téléphone, le type de prestation souhaitée et un message optionnel. Ces données
              sont nécessaires pour vous recontacter et établir un devis.
            </p>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Finalité et base légale
            </h2>
            <p style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              Vos données sont traitées dans le cadre de notre intérêt légitime à répondre à vos
              demandes de devis (article 6.1.f du RGPD). Elles ne sont jamais vendues ni cédées à
              des tiers.
            </p>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Durée de conservation
            </h2>
            <p style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              Les données du formulaire sont conservées pendant 12 mois maximum, puis supprimées
              automatiquement.
            </p>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Vos droits
            </h2>
            <p style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous
              à <a href="mailto:ves-plomberie@outlook.fr" style={{ color: 'var(--vp-accent)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>ves-plomberie@outlook.fr</a>.
            </p>
          </section>

          <section>
            <h2
              className="font-bold"
              style={{ color: 'var(--vp-primary)', fontSize: '20px', marginBottom: '12px' }}
            >
              Cookies
            </h2>
            <p style={{ color: 'var(--vp-text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
              Ce site n&apos;utilise aucun cookie de tracking ou publicitaire. Seuls des cookies
              techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
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
