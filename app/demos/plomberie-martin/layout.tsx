import type { Metadata } from 'next'
import { Source_Sans_3, Nunito } from 'next/font/google'
import './demo.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Plomberie Martin — Plombier Paris 11e | Dépannage 24h/24 7j/7',
  description:
    'Jean-Pierre Martin, plombier certifié Qualibat à Paris 11e. Dépannage en 1h, rénovation salle de bain, installation. 15 ans d\'expérience, 4.8/5 sur 127 avis Google.',
}

export default function PlomberieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`pm-demo ${sourceSans.variable} ${nunito.variable}`}
      style={{
        fontFamily: 'var(--font-body), "Nunito", sans-serif',
        fontSize: '17px',
        lineHeight: '1.7',
        backgroundColor: 'var(--pm-bg)',
        color: 'var(--pm-text)',
        minHeight: '100vh',
      }}
    >
      {children}
      {/* JSON-LD structured data — static content, safe usage of dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Plumber',
            name: 'Plomberie Martin',
            telephone: '+33612345678',
            url: 'https://evolvia.fr/demos/plomberie-martin',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressRegion: 'Île-de-France',
              addressCountry: 'FR',
            },
            areaServed: 'Paris et petite couronne (75, 92, 93, 94)',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '127',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '19:00',
              },
            ],
          }),
        }}
      />
    </div>
  )
}
