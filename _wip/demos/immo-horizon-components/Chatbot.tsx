'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

/* ─── TYPES ─── */

interface Message {
  from: 'bot' | 'user'
  text: string
}

interface Step {
  botMessage: string
  options: { label: string; next: string }[]
}

/* ─── FLOW DATA ─── */

const FLOWS: Record<string, Step> = {
  start: {
    botMessage:
      'Bonjour ! Je suis l\u2019assistant Immo Horizon. Vous souhaitez vendre, acheter ou estimer un bien ?',
    options: [
      { label: 'Vendre mon bien', next: 'vendre_type' },
      { label: 'Acheter un bien', next: 'acheter_type' },
      { label: 'Estimer mon bien', next: 'estimer' },
    ],
  },

  /* ── FLUX VENDEUR ── */
  vendre_type: {
    botMessage: 'Quel type de bien souhaitez-vous vendre ?',
    options: [
      { label: 'Appartement', next: 'vendre_quartier' },
      { label: 'Maison', next: 'vendre_quartier' },
      { label: '\u00C9choppe', next: 'vendre_quartier' },
      { label: 'Autre', next: 'vendre_quartier' },
    ],
  },
  vendre_quartier: {
    botMessage: 'Dans quel quartier de Bordeaux se situe votre bien ?',
    options: [
      { label: 'Chartrons', next: 'vendre_surface' },
      { label: 'Saint-Michel', next: 'vendre_surface' },
      { label: 'Caud\u00E9ran', next: 'vendre_surface' },
      { label: 'Autre quartier', next: 'vendre_surface' },
    ],
  },
  vendre_surface: {
    botMessage: 'Quelle est la surface approximative ?',
    options: [
      { label: 'Moins de 50 m\u00B2', next: 'vendre_fin' },
      { label: '50 \u2013 80 m\u00B2', next: 'vendre_fin' },
      { label: '80 \u2013 120 m\u00B2', next: 'vendre_fin' },
      { label: 'Plus de 120 m\u00B2', next: 'vendre_fin' },
    ],
  },
  vendre_fin: {
    botMessage:
      'Merci pour ces informations ! Un conseiller Immo Horizon vous contactera dans les prochaines heures pour une estimation personnalis\u00E9e. Bonne journ\u00E9e !',
    options: [{ label: 'Recommencer', next: 'start' }],
  },

  /* ── FLUX ACHETEUR ── */
  acheter_type: {
    botMessage: 'Quel type de bien recherchez-vous ?',
    options: [
      { label: 'Appartement', next: 'acheter_budget' },
      { label: 'Maison', next: 'acheter_budget' },
      { label: '\u00C9choppe', next: 'acheter_budget' },
    ],
  },
  acheter_budget: {
    botMessage: 'Quel est votre budget maximum ?',
    options: [
      { label: 'Moins de 250 000 \u20AC', next: 'acheter_quartier' },
      { label: '250 000 \u2013 400 000 \u20AC', next: 'acheter_quartier' },
      { label: '400 000 \u2013 600 000 \u20AC', next: 'acheter_quartier' },
      { label: 'Plus de 600 000 \u20AC', next: 'acheter_quartier' },
    ],
  },
  acheter_quartier: {
    botMessage: 'Quels quartiers vous int\u00E9ressent ?',
    options: [
      { label: 'Chartrons / Bastide', next: 'acheter_fin' },
      { label: 'Caud\u00E9ran / M\u00E9rignac', next: 'acheter_fin' },
      { label: 'Saint-Michel / Victoire', next: 'acheter_fin' },
      { label: 'Tous quartiers', next: 'acheter_fin' },
    ],
  },
  acheter_fin: {
    botMessage:
      'Parfait ! Je vous envoie une s\u00E9lection personnalis\u00E9e par email. Un conseiller Immo Horizon vous contactera pour organiser des visites. Bonne recherche !',
    options: [{ label: 'Recommencer', next: 'start' }],
  },

  /* ── ESTIMATION ── */
  estimer: {
    botMessage:
      'Pour une estimation pr\u00E9cise, je vous invite \u00E0 remplir notre formulaire d\u2019estimation gratuite. Un expert vous recontactera sous 24h.',
    options: [
      { label: 'Aller au formulaire', next: '__scroll_estimation' },
      { label: 'Poser une autre question', next: 'start' },
    ],
  },
}

/* ─── COMPONENT ─── */

export function IHChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState('start')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  /* Listen for external openChatbot event (from "Essayer l'assistant" button) */
  useEffect(() => {
    const handler = () => handleOpen()
    window.addEventListener('openChatbot', handler)
    return () => window.removeEventListener('openChatbot', handler)
  })

  /* Cleanup timeout on unmount */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  /* Show initial bot message when opened */
  const handleOpen = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      setIsTyping(true)
      timerRef.current = setTimeout(() => {
        setMessages([{ from: 'bot', text: FLOWS.start.botMessage }])
        setIsTyping(false)
      }, 600)
    }
  }

  const handleOptionClick = useCallback(
    (label: string, next: string) => {
      if (next === '__scroll_estimation') {
        setIsOpen(false)
        document
          .getElementById('estimation')
          ?.scrollIntoView({ behavior: 'smooth' })
        return
      }

      /* Add user message */
      setMessages((prev) => [...prev, { from: 'user', text: label }])
      setCurrentStep(next)
      setIsTyping(true)

      /* Simulate bot typing delay */
      timerRef.current = setTimeout(() => {
        const step = FLOWS[next]
        if (step) {
          setMessages((prev) => [
            ...prev,
            { from: 'bot', text: step.botMessage },
          ])
        }
        setIsTyping(false)
      }, 800)
    },
    []
  )

  const step = FLOWS[currentStep]

  return (
    <>
      {/* ── Toggle button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleOpen}
            className="fixed z-50 flex items-center justify-center transition-transform duration-200 hover:scale-105"
            style={{
              bottom: 24,
              right: 24,
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'var(--ih-primary)',
              color: '#ffffff',
              boxShadow: '0 4px 24px rgba(26,60,94,0.30)',
            }}
            aria-label="Ouvrir l'assistant"
          >
            <MessageCircle size={24} />
            {/* Green badge */}
            <span
              className="absolute"
              style={{
                top: 2,
                right: 2,
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: 'var(--ih-chatbot-green)',
                border: '2px solid var(--ih-primary)',
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 flex flex-col"
            style={{
              bottom: 24,
              right: 24,
              width: 360,
              maxWidth: 'calc(100vw - 48px)',
              height: 480,
              maxHeight: 'calc(100vh - 48px)',
              borderRadius: 16,
              background: '#ffffff',
              boxShadow: '0 8px 48px rgba(0,0,0,0.15)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between shrink-0"
              style={{
                background: 'var(--ih-primary)',
                padding: '16px 16px',
                color: '#ffffff',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                  }}
                >
                  <MessageCircle size={16} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 500,
                      fontSize: 15,
                    }}
                  >
                    Assistant Immo Horizon
                  </p>
                  <p
                    className="flex items-center gap-1"
                    style={{ fontSize: 11, color: 'rgba(255,255,255,0.60)' }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--ih-chatbot-green)',
                        display: 'inline-block',
                      }}
                    />
                    En ligne 24h/7
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 transition-opacity hover:opacity-70"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages area */}
            <div
              className="flex-1 overflow-y-auto"
              role="log"
              aria-live="polite"
              style={{ padding: 16 }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex mb-3 ${
                    msg.from === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    style={{
                      maxWidth: '80%',
                      padding: '12px 16px',
                      borderRadius:
                        msg.from === 'user'
                          ? '12px 12px 4px 12px'
                          : '12px 12px 12px 4px',
                      background:
                        msg.from === 'user'
                          ? 'var(--ih-primary)'
                          : 'var(--ih-bg-alt)',
                      color:
                        msg.from === 'user'
                          ? '#ffffff'
                          : 'var(--ih-text)',
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div
                    className="flex items-center gap-1"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px 12px 12px 4px',
                      background: 'var(--ih-bg-alt)',
                    }}
                  >
                    <span
                      className="animate-bounce"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--ih-text-secondary)',
                        opacity: 0.4,
                        animationDelay: '0ms',
                      }}
                    />
                    <span
                      className="animate-bounce"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--ih-text-secondary)',
                        opacity: 0.4,
                        animationDelay: '150ms',
                      }}
                    />
                    <span
                      className="animate-bounce"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--ih-text-secondary)',
                        opacity: 0.4,
                        animationDelay: '300ms',
                      }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Options buttons */}
            {!isTyping && step && (
              <div
                className="shrink-0 flex flex-wrap gap-2"
                style={{
                  padding: '12px 16px',
                  borderTop: '1px solid rgba(26,26,24,0.08)',
                  background: '#ffffff',
                }}
              >
                {step.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleOptionClick(opt.label, opt.next)}
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 500,
                      fontSize: 13,
                      padding: '10px 16px',
                      minHeight: 44,
                      borderRadius: 8,
                      border: '1px solid rgba(26,60,94,0.08)',
                      background: 'transparent',
                      color: 'var(--ih-primary)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--ih-primary)'
                      e.currentTarget.style.color = '#ffffff'
                      e.currentTarget.style.borderColor = 'var(--ih-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--ih-primary)'
                      e.currentTarget.style.borderColor = 'rgba(26,60,94,0.08)'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Footer note */}
            <div
              className="shrink-0 text-center"
              style={{
                padding: '8px 16px',
                fontSize: 11,
                color: 'var(--ih-text-secondary)',
                opacity: 0.5,
                fontFamily: 'var(--font-mono), monospace',
              }}
            >
              Démo — Assistant simulé
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
