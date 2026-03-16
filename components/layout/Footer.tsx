import Link from 'next/link'

const footerLinks = [
  { href: '/services/web', label: 'Offres' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="font-display text-3xl italic font-light tracking-wide" style={{ color: 'var(--white)' }}>
            Evolvia
          </div>
          <p className="text-sm font-body mt-2" style={{ color: 'var(--white-45)' }}>
            Agence IA pour entreprises fran&ccedil;aises
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="footer-link text-sm font-body transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="w-16 h-px mx-auto mb-8" style={{ background: 'var(--grey-3)' }} />

        {/* Copyright */}
        <div className="text-center text-xs font-body" style={{ color: 'var(--white-45)' }}>
          &copy; {new Date().getFullYear()} Evolvia &mdash; Tous droits r&eacute;serv&eacute;s
        </div>
      </div>
    </footer>
  )
}
