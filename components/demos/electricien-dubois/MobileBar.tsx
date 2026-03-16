'use client'

import { Zap } from 'lucide-react'

export function EDMobileBar() {
  return (
    <a
      href="tel:0745678901"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-2"
      style={{
        background: 'var(--ed-accent)',
        color: '#FFFFFF',
        fontFamily: 'var(--font-heading), sans-serif',
        fontWeight: 600,
        fontSize: 17,
        height: 56,
        letterSpacing: '0.01em',
      }}
    >
      <Zap size={20} fill="#FFFFFF" />
      Appeler — 07 45 67 89 01
    </a>
  )
}
