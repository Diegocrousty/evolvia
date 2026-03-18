import { NextResponse } from 'next/server'

// Rate limiting: max 5 requests per IP per 10 minutes
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 min

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// Escape HTML to prevent injection
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Simple email format check
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Réessayez dans quelques minutes.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      )
    }

    // Input validation
    if (typeof name !== 'string' || name.length > 200) {
      return NextResponse.json(
        { error: 'Nom invalide' },
        { status: 400 }
      )
    }

    if (typeof email !== 'string' || !isValidEmail(email) || email.length > 320) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    if (typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message trop long (max 5000 caractères)' },
        { status: 400 }
      )
    }

    if (phone && (typeof phone !== 'string' || phone.length > 20)) {
      return NextResponse.json(
        { error: 'Téléphone invalide' },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const safeName = escapeHtml(name.trim())
    const safeEmail = escapeHtml(email.trim())
    const safePhone = phone ? escapeHtml(phone.trim()) : 'Non renseigné'
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>')

    // If Resend API key is configured, send email
    const resendKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL || 'diego@evolvia.fr'

    if (resendKey && !resendKey.startsWith('re_xxxx')) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)

      await resend.emails.send({
        from: 'Evolvia <contact@evolvia.fr>',
        to: contactEmail,
        subject: `Nouveau contact — ${safeName}`,
        html: `
          <h2>Nouveau message depuis evolvia.fr</h2>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Téléphone :</strong> ${safePhone}</p>
          <p><strong>Message :</strong></p>
          <p>${safeMessage}</p>
        `,
      })
    } else {
      // Fallback: log to console in development
      console.log('📨 Nouveau contact:', { name: safeName, email: safeEmail, phone: safePhone, message: safeMessage })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
