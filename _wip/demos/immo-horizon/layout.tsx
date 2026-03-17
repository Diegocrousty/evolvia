import './demo.css'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { IHNavbar } from '@/components/demos/immo-horizon/Navbar'
import { IHFooter } from '@/components/demos/immo-horizon/Footer'
import { IHChatbot } from '@/components/demos/immo-horizon/Chatbot'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Immo Horizon — Agence immobilière indépendante à Bordeaux',
  description:
    'Vendez ou achetez votre bien à Bordeaux avec des experts locaux. 127 biens vendus en 2025. Estimation gratuite sous 24h. Assistant IA disponible 24h/7.',
}

export default function ImmoHorizonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} ih-demo`}
      style={
        {
          '--ih-primary': '#1A3C5E',
          '--ih-primary-hover': '#0F2540',
          '--ih-accent': '#C8A96E',
          '--ih-accent-hover': '#B8956A',
          '--ih-bg': '#FAFAF8',
          '--ih-bg-alt': '#F0EDE8',
          '--ih-text': '#1A1A18',
          '--ih-text-secondary': '#6B6560',
          '--ih-border': 'rgba(26,26,24,0.08)',
          '--ih-chatbot-green': '#10B981',
        } as React.CSSProperties
      }
    >
      <div
        className="relative overflow-hidden min-h-screen"
        style={{
          background: 'var(--ih-bg)',
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: 15,
          lineHeight: 1.7,
          color: 'var(--ih-text)',
        }}
      >
        <IHNavbar />
        <main className="relative z-10">{children}</main>
        <IHFooter />
        <IHChatbot />
      </div>
    </div>
  )
}
