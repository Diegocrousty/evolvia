// content/offers.ts
// NE JAMAIS hardcoder ces valeurs ailleurs dans le code

export const offers = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Landing page professionnelle',
    price: 490,
    delay: '3 jours',
    delayDays: 3,
    highlight: false,
    features: [
      'Design sur mesure',
      '1 page complète',
      'Formulaire de contact',
      'Mobile-ready',
      'Déploiement inclus',
      'Livré en 3 jours',
    ],
    cta: 'Commander maintenant',
    anchor: '4-6h de ton travail',
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Site vitrine 5 pages',
    price: 990,
    delay: '5 jours',
    delayDays: 5,
    highlight: true, // carte mise en avant
    features: [
      'Accueil + Services + À propos',
      'Galerie + Contact',
      'Hébergement 1 an inclus',
      'Mobile-ready',
      'Formulaire de contact',
      'Livré en 5 jours',
    ],
    cta: 'Commander maintenant',
    anchor: '8-12h de ton travail',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Site + Chatbot IA',
    price: 1490,
    delay: '7 jours',
    delayDays: 7,
    highlight: false,
    features: [
      'Tout le pack Business',
      'Chatbot autonome 24h/7',
      'Répond aux questions clients',
      'Qualifie les leads automatiquement',
      'Hébergement 1 an inclus',
      'Livré en 7 jours',
    ],
    cta: 'Commander maintenant',
    anchor: 'Le plus populaire',
  },
] as const

export const retainer = {
  price: 150,
  period: 'mois',
  features: [
    'Mises à jour contenu',
    'Backup mensuel',
    'Rapport de performance',
    'Support prioritaire',
  ],
}

export type OfferId = typeof offers[number]['id']
