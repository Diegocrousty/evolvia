'use client'

import { Phone } from 'lucide-react'

export default function StickyMobile() {
  return (
    <div className="vp-sticky-mobile md:hidden">
      <a
        href="tel:0624446176"
        aria-label="Appeler maintenant au 06 24 44 61 76"
      >
        <Phone size={17} />
        Appeler — 06 24 44 61 76
      </a>
    </div>
  )
}
