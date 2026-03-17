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
  title: 'VES Plomberie — Plombier Lyon 6e | Dépannage & Rénovation',
  description:
    'Ludovic Vesque, plombier urgence Lyon 6e. Dépannage rapide, rénovation salle de bain, recherche de fuite, chauffage. 5 ans d\'expérience, 4.9/5 sur Google. Devis plombier Lyon gratuit. Appelez le 06 24 44 61 76.',
  openGraph: {
    title: 'VES Plomberie — Plombier Lyon 6e | Dépannage & Rénovation',
    description:
      'Plombier à Lyon — Dépannage rapide, rénovation salle de bain, recherche de fuite. 4.9/5 sur Google, 110 avis.',
    type: 'website',
  },
}

// Static JSON-LD for SEO — safe usage, all values are hardcoded string literals
const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'VES Plomberie',
  telephone: '+33624446176',
  url: 'https://evolvia.fr/demos/ves-plomberie',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '51 Cours Franklin Roosevelt',
    postalCode: '69006',
    addressLocality: 'Lyon',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  areaServed: 'Lyon et agglomération lyonnaise',
  email: 'ves-plomberie@outlook.fr',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '110',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
})

export default function VesPlomberieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`vp-demo ${sourceSans.variable} ${nunito.variable}`}
      style={{
        fontFamily: 'var(--font-body), "Nunito", sans-serif',
        fontSize: '17px',
        lineHeight: '1.7',
        backgroundColor: 'var(--vp-bg)',
        color: 'var(--vp-text)',
        minHeight: '100vh',
      }}
    >
      {children}
      {/* JSON-LD structured data — static hardcoded content, no user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </div>
  )
}
