'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const prestations = [
  'Dépannage urgent',
  'Rénovation salle de bain',
  'Installation robinetterie',
  'Chauffe-eau / cumulus',
  'Débouchage',
  'Autre',
]

export default function Formulaire() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--pm-bg-alt)',
        paddingTop: '96px',
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
            className="pm-display"
            style={{
              color: 'var(--pm-primary)',
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
              color: 'var(--pm-text-secondary)',
              fontSize: '17px',
              lineHeight: 1.6,
            }}
          >
            Réponse garantie sous 24h — Déplacement gratuit
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
                href="tel:0612345678"
                aria-label="Appeler le 06 12 34 56 78"
                className="flex items-center font-bold"
                style={{
                  color: 'var(--pm-accent)',
                  fontSize: '20px',
                  lineHeight: 1.35,
                  gap: '12px',
                }}
              >
                <Phone size={20} />
                06 12 34 56 78
              </a>
              <a
                href="mailto:contact@plomberie-martin.fr"
                className="pm-link flex items-center"
                style={{ fontSize: '15px', gap: '12px' }}
              >
                <Mail size={17} />
                contact@plomberie-martin.fr
              </a>
              <p
                className="flex items-center"
                style={{
                  color: 'var(--pm-text-secondary)',
                  fontSize: '15px',
                  gap: '12px',
                }}
              >
                <MapPin size={17} />
                Paris et petite couronne (75/92/93/94)
              </p>
              <p
                className="flex items-center"
                style={{
                  color: 'var(--pm-text-secondary)',
                  fontSize: '15px',
                  gap: '12px',
                }}
              >
                <Clock size={17} />
                Lun-Sam 8h-19h · Urgences 24h/24
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap" style={{ gap: '8px' }}>
              <span className="pm-badge-certif">Qualibat</span>
              <span className="pm-badge-certif">RGE</span>
              <span className="pm-badge-certif">Garantie décennale</span>
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
                    color: 'var(--pm-text-secondary)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                  }}
                >
                  Prénom
                </label>
                <input type="text" id="prenom" name="prenom" required placeholder="Jean" className="pm-input" />
              </div>
              <div>
                <label
                  htmlFor="ville"
                  className="block uppercase font-bold"
                  style={{
                    marginBottom: '4px',
                    color: 'var(--pm-text-secondary)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                  }}
                >
                  Ville
                </label>
                <input type="text" id="ville" name="ville" required placeholder="Paris 11e" className="pm-input" />
              </div>
            </div>

            {/* Téléphone */}
            <div>
              <label
                htmlFor="telephone"
                className="block uppercase font-bold"
                style={{
                  marginBottom: '4px',
                  color: 'var(--pm-text-secondary)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                }}
              >
                Téléphone
              </label>
              <input type="tel" id="telephone" name="telephone" required placeholder="06 00 00 00 00" className="pm-input" />
            </div>

            {/* Type de prestation */}
            <div>
              <label
                htmlFor="prestation"
                className="block uppercase font-bold"
                style={{
                  marginBottom: '4px',
                  color: 'var(--pm-text-secondary)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                }}
              >
                Type de prestation
              </label>
              <div className="pm-select-wrap">
                <select
                  id="prestation"
                  name="prestation"
                  required
                  defaultValue=""
                  className="pm-input"
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
                  color: 'var(--pm-text-secondary)',
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
                className="pm-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="pm-cta-primary w-full flex items-center justify-center hover:scale-[1.01] active:scale-[0.98]"
              style={{ gap: '12px' }}
            >
              <Send size={17} />
              Envoyer ma demande
            </button>

            <p
              className="text-center"
              style={{
                color: 'var(--pm-text-muted)',
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
