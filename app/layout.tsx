import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { EvolviaShell } from '@/components/layout/EvolviaShell'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})
const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Evolvia — Sites web professionnels en 3 jours pour TPE/PME françaises',
  description:
    'Evolvia crée des sites web professionnels avec IA pour les artisans et commerçants français. Livraison en 3 à 7 jours, à partir de 490€.',
  keywords:
    'site web artisan, site web plombier, site web electricien, agence web IA France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <EvolviaShell>{children}</EvolviaShell>
      </body>
    </html>
  )
}
