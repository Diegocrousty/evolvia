'use client'
import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Background } from '../Background'
import { GrainOverlay } from '../ui/GrainOverlay'
import { CustomCursor } from '../CustomCursor'

export function EvolviaShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDemo = pathname.startsWith('/demos/')

  if (isDemo) {
    return <>{children}</>
  }

  return (
    <div
      className="relative overflow-x-hidden min-h-screen"
      style={{ background: 'var(--bg)', cursor: 'none' }}
    >
      <Background />
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  )
}
