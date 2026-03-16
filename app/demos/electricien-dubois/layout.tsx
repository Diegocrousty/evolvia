import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { EDNavbar } from '@/components/demos/electricien-dubois/Navbar'
import { EDFooter } from '@/components/demos/electricien-dubois/Footer'
import { EDMobileBar } from '@/components/demos/electricien-dubois/MobileBar'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Électricien Dubois — Artisan électricien certifié Qualifelec à Lyon',
  description:
    'Installation électrique NF C 15-100, mise aux normes, domotique et bornes IRVE. Électricien certifié Qualifelec RGE à Lyon. Devis gratuit sous 24h.',
}

export default function ElectricienDuboisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${plexSans.variable} ${plexMono.variable} ed-demo`}
      style={
        {
          '--ed-bg': '#FFFFFF',
          '--ed-bg-2': '#F4F6F9',
          '--ed-surface': '#FFFFFF',
          '--ed-accent': '#F59E0B',
          '--ed-accent-hover': '#D97706',
          '--ed-text': '#1A1A2E',
          '--ed-text-secondary': '#5C6B8A',
          '--ed-border': 'rgba(0,0,0,0.08)',
          '--ed-primary': '#1C3557',
          '--ed-cert-green': '#10B981',
          '--ed-badge-bg': 'rgba(28,53,87,0.08)',
          '--ed-badge-border': 'rgba(28,53,87,0.15)',
        } as React.CSSProperties
      }
    >
      <div
        className="relative overflow-hidden min-h-screen"
        style={{
          background: 'var(--ed-bg)',
          fontFamily: 'var(--font-heading), sans-serif',
          color: 'var(--ed-text)',
        }}
      >
        <EDNavbar />
        <main className="relative z-10">{children}</main>
        <EDFooter />
        <EDMobileBar />
      </div>
    </div>
  )
}
