'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Send, Mail } from 'lucide-react'

const prestations = [
  'Dépannage urgent',
  'Rénovation salle de bain',
  'Recherche de fuite',
  'Chauffage / chaudière',
  'Chauffe-eau / ballon',
  'Mécanisme WC',
  'Installation plomberie',
  'Autre',
]

export default function Formulaire() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--vp-bg-alt)',
        paddingTop: '64px',
        paddingBottom: '96px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          style={{ marginBottom: '48px' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="vp-display"
            style={{
              color: 'var(--vp-primary)',
              fontSize: '32px',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginBottom: '8px',
            }}
          >
            Demander un devis gratuit
          </h2>
          <p
            style={{
              color: 'var(--vp-text-secondary)',
              fontSize: '17px',
              lineHeight: 1.6,
            }}
          >
            Réponse garantie sous 24h — Devis sans engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start" style={{ gap: '64px' }}>
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col" style={{ gap: '16px', marginBottom: '32px' }}>
              <a
                href="tel:0624446176"
                aria-label="Appeler le 06 24 44 61 76"
                className="flex items-center font-bold"
                style={{
                  color: 'var(--vp-accent)',
                  fontSize: '20px',
                  lineHeight: 1.35,
                  gap: '12px',
                }}
              >
                <Phone size={20} />
                06 24 44 61 76
              </a>
              <p
                className="flex items-center"
                style={{
                  color: 'var(--vp-text-secondary)',
                  fontSize: '15px',
                  gap: '12px',
                }}
              >
                <MapPin size={17} />
                51 Cours Franklin Roosevelt, 69006 Lyon
              </p>
              <a
                href="mailto:ves-plomberie@outlook.fr"
                className="flex items-center"
                style={{
                  color: 'var(--vp-text-secondary)',
                  fontSize: '15px',
                  gap: '12px',
                }}
              >
                <Mail size={17} />
                ves-plomberie@outlook.fr
              </a>
              <p
                className="flex items-center"
                style={{
                  color: 'var(--vp-text-secondary)',
                  fontSize: '15px',
                  gap: '12px',
                }}
              >
                <Clock size={17} />
                Lun-Sam 8h-17h
              </p>
            </div>

            {/* Google Maps embed — SEO local */}
            <div
              className="overflow-hidden"
              style={{
                borderRadius: '12px',
                border: '1px solid var(--vp-border)',
                marginTop: '24px',
                height: '200px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5!2d4.8505!3d45.7700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5e1f0a1b0f%3A0x0!2s51+Cours+Franklin+Roosevelt%2C+69006+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VES Plomberie — 51 Cours Franklin Roosevelt, Lyon 6e"
              />
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap" style={{ gap: '8px' }}>
              <span className="vp-badge-certif">Assurance décennale</span>
              <span className="vp-badge-certif">SIREN: 894 435 635</span>
            </div>
          </motion.div>

          {/* Right — form (4 champs max per SKILL) */}
          <motion.form
            id="devis"
            action="https://formspree.io/f/VOTRE_ID_FORMSPREE"
            method="POST"
            className="flex flex-col"
            style={{ gap: '16px' }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Prénom + Ville */}
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
              <div>
                <label
                  htmlFor="prenom"
                  className="block uppercase font-bold"
                  style={{
                    marginBottom: '4px',
                    color: 'var(--vp-text-secondary)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                  }}
                >
                  Prénom
                </label>
                <input type="text" id="prenom" name="prenom" required placeholder="Ludovic" className="vp-input" />
              </div>
              <div>
                <label
                  htmlFor="ville"
                  className="block uppercase font-bold"
                  style={{
                    marginBottom: '4px',
                    color: 'var(--vp-text-secondary)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                  }}
                >
                  Ville
                </label>
                <input type="text" id="ville" name="ville" required placeholder="Lyon 6e" className="vp-input" />
              </div>
            </div>

            {/* Téléphone */}
            <div>
              <label
                htmlFor="telephone"
                className="block uppercase font-bold"
                style={{
                  marginBottom: '4px',
                  color: 'var(--vp-text-secondary)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                }}
              >
                Téléphone
              </label>
              <input type="tel" id="telephone" name="telephone" required placeholder="06 00 00 00 00" className="vp-input" />
            </div>

            {/* Type de prestation */}
            <div>
              <label
                htmlFor="prestation"
                className="block uppercase font-bold"
                style={{
                  marginBottom: '4px',
                  color: 'var(--vp-text-secondary)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                }}
              >
                Type de prestation
              </label>
              <div className="vp-select-wrap">
                <select
                  id="prestation"
                  name="prestation"
                  required
                  defaultValue=""
                  className="vp-input"
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled>Choisir une prestation</option>
                  {prestations.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message (optionnel) */}
            <div>
              <label
                htmlFor="message"
                className="block uppercase font-bold"
                style={{
                  marginBottom: '4px',
                  color: 'var(--vp-text-secondary)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                }}
              >
                Message <span style={{ fontWeight: 400, textTransform: 'none' }}>(optionnel)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Décrivez votre problème..."
                className="vp-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="vp-cta-primary w-full flex items-center justify-center hover:scale-[1.01] active:scale-[0.98]"
              style={{ gap: '12px' }}
            >
              <Send size={17} />
              Envoyer ma demande
            </button>

            <p
              className="text-center"
              style={{
                color: 'var(--vp-text-muted)',
                fontSize: '13px',
                lineHeight: 1.5,
              }}
            >
              Sans engagement · Réponse sous 24h · Données confidentielles
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
