'use client'

import { Phone } from 'lucide-react'

export default function StickyMobile() {
  return (
    <div className="pm-sticky-mobile md:hidden">
      <a
        href="tel:0612345678"
        aria-label="Appeler maintenant au 06 12 34 56 78"
      >
        <Phone size={17} />
        Appeler — 06 12 34 56 78
      </a>
    </div>
  )
}
