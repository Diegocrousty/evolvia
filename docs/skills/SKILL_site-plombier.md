---
name: site-plombier
version: 1.1.0
description: >
  Référence technique complète pour créer des sites web de plombiers / plombiers-chauffagistes français.
  Couvre palette (#1B3A6B bleu marine + #E8772E orange), typographie Source Sans Pro, structure page
  section par section, copy patterns, certifications (RGE, Qualibat), psychologie visiteur urgence vs
  planifié, et anti-patterns interdits.
  DÉCLENCHER CE SKILL dès que le contexte mentionne : plombier, plomberie, chauffagiste, fuite d'eau,
  chauffe-eau, ballon d'eau chaude, dépannage plomberie, site plombier, chaudière, sanitaire artisan,
  tuyauterie, ou toute demande de création / amélioration / audit de site web pour un professionnel
  de la plomberie ou du chauffage.
  Ne PAS déclencher pour : le site evolvia.fr lui-même, un électricien, un restaurant, ou tout secteur
  non-plomberie.
secteur: Plombier / Plombier-Chauffagiste
cible-evolvia: Starter (490€) ou Business (990€)
offre-recommandee: Starter si solo artisan, Business si équipe 2-5 pers.
triggers:
  - plombier
  - plomberie
  - chauffagiste
  - fuite d'eau
  - chauffe-eau
  - ballon d'eau chaude
  - dépannage plomberie
  - site plombier
  - chaudière
  - sanitaire artisan
  - tuyauterie
---

# SKILL Site Plombier — Evolvia

---

## 1. Analyse marché — Ce qui convertit

> **Grille de fiabilité (filtre data analyst) :**
> - ✅ Source primaire indépendante, volume suffisant
> - ⚠️ Source unique ou agence commerciale — illustration narrative uniquement, pas benchmark
> - ❌ Auto-promotionnel ou non sourcé — exclu des décisions design

---

### Données marché vérifiées ✅

**Cerfrance 2024 — cabinet comptable indépendant, ~80k clients artisans BTP :**
- **65%** des artisans BTP ont un site web (2022). 35% sans présence = opportunité directe. Parmi les 65%, majorité obsolètes/non-mobiles = opportunité refonte.

**MesDépanneurs + Yoojo (30k+ missions) + Axonaut — consensus tri-sources :**
- Tarif horaire : **40-70€ HT** en province, jusqu'à **90€ HT** en IDF
- Majoration IDF vs province : **+30 à +50%**
- Frais déplacement : **20-60€** selon zone
- Majoration urgence nuit/week-end : **+20 à +50%**
- → Ces données permettent de rédiger des **prix indicatifs réalistes** sur les sites clients sans inventer

**UFC-Que Choisir + MesDépanneurs + Habitatpresto — sources éditoriales indépendantes :**
- La peur de l'arnaque et du devis flou est documentée comme **enjeu #1** côté client plomberie
- RGE, Qualibat, assurance décennale citées comme critères de sélection dans **tous** les guides consommateurs indépendants analysés

---

### Patterns UX convergents — top performers secteur ✅

Observés sur Web Armor, Simplébo, Siiteo, Akisiweb, Webtherm, MesDépanneurs.
La convergence qualitative sur **100% des acteurs** est le signal fiable — pas un chiffre isolé.

| Pattern | Présent chez | Signal |
|---------|-------------|--------|
| Tel cliquable en header | 100% des top performers | Critique |
| Zone géo explicite homepage | 100% | Critique |
| Double CTA urgence + devis | 100% | Critique |
| Certifications affichées | 100% | Fort |
| Formulaire ≤4 champs | 100% | Fort |
| Photos chantiers réels | 100% | Fort |
| Avis Google visibles | 100% | Fort |
| Prix indicatifs par service | Majorité | Différenciateur |

**Cas réel illustratif ⚠️ (N=1, non généralisable mais instructif) :**
- Société Mailloux, Lannilis (Finistère) — site Web Armor + GMB : **50+ appels/mois** déclarés. Zone faible concurrence, non reproductible en agglomération. Valeur = narrative pour pitch client, pas benchmark.

---

### Données à ne jamais citer comme benchmarks ❌

- **"85-90% mobile"** — Web Armor (agence commerciale, biais d'intérêt). Pas de méthodologie.
- **"Taux conversion 2→6%"** — Prestaweb, 1 cas client Lille. N=1.
- **"87% lisent les avis avant d'appeler"** — non sourcé, exclu.

---

### Ce qui ne convertit pas (convergence qualitative)

- Hero plein écran sans numéro visible au-dessus du fold
- Formulaire 6+ champs sur mobile
- Photos stock homme salopette bleue fond blanc
- Zone géo absente → appels hors zone + mauvais SEO local
- Design "startup tech" — décalé avec attente artisan de confiance

---

## 2. Psychologie visiteur

### Profil visiteur type

| Critère | Valeur |
|---------|--------|
| Âge | 30-65 ans (propriétaire ou locataire en responsabilité) |
| Device | **Mobile dominant** — souvent dans la pièce du problème (% exact non sourcé indépendamment, mobile-first est le pattern de 100% des top performers secteur) |
| État d'esprit urgence | Stressé, pressé, veut un numéro immédiatement |
| État d'esprit planification | Méfiant, compare 2-3 artisans, lit les avis |
| Temps sur site | 45 secondes max avant décision d'appeler ou partir |
| Pain point #1 | "Je ne sais pas si ce plombier est fiable et honnête" |
| Pain point #2 | "Je ne sais pas si il intervient dans ma ville" |
| Pain point #3 | "Je ne sais pas combien ça va coûter" |

### Déclencheurs d'appel

- Numéro visible immédiatement → appel direct (urgence)
- Avis clients authentiques → confiance → appel (planification)
- Zone géo confirmée → appel (évite la frustration)
- Certifications affichées → légitimité → appel
- Transparence tarifaire → rassurance → formulaire devis

### Déclencheurs de fuite

- Numéro absent ou en footer uniquement
- Aucun avis visible
- Zone géo non mentionnée
- Design générique qui "ressemble à une arnaque"
- Formulaire trop long

---

## 3. Design System sectoriel

### Palette

```
Primaire     : #1B3A6B  — Bleu marine professionnel
               → Psychologie : confiance, sérieux, compétence technique
               → Dominant dans le secteur artisan BTP réputé

Accent CTA   : #E8A020  — Orange chaud
               → Psychologie : urgence, action, chaleur humaine
               → Contraste élevé sur bleu ET sur blanc → lisible mobile

Fond         : #FFFFFF  — Blanc pur (fond principal)
Surface      : #F5F7FA  — Gris très clair (cards, sections alternées)
Texte        : #1A1A1A  — Quasi-noir (lisibilité maximale, accessibilité)
Texte secondaire : #5C6B7A  — Gris bleu (sous-titres, labels)
```

**Interdit pour ce secteur :**
- Noir profond (#000) en fond → trop agressif, pas artisan
- Violet, rose, gradient → signale tech startup, détruit la crédibilité artisan
- Vert seul sans bleu → associé au médical ou à l'écologie, pas à la plomberie

### Typographie

```
Titres H1-H2  : Source Sans Pro Bold / SemiBold
               → Lisible, solide, pas tech, convient à un public 30-65 ans
               → Fonctionne parfaitement en gros sur mobile

Corps / body  : Nunito Regular 16px / line-height 1.6
               → Chaleureux, accessible, lisibilité mobile excellente

Labels / tags : Nunito SemiBold 13px uppercase letter-spacing 0.05em
               → Pour badges "Urgence 24h", "Zone : Ile-de-France", certifications

Taille minimum : 16px body mobile (jamais 14px pour ce public)
```

**Interdit :**
- Inter ou Poppins → trop startup tech
- Serif pour les titres → trop cabinet avocat, pas artisan
- Font size < 16px sur mobile

### Layout

```
Structure globale     : Single-column dominant sur mobile
Numéro téléphone      : Header collant + sticky bar mobile en bas de l'écran
CTA bouton            : Full-width sur mobile, taille 48px min (tap target)
Densité info          : Moyenne-haute — l'artisan veut montrer ses compétences
Espacement sections   : 64px desktop / 40px mobile (respiration sans aérer excessif)
Cards services        : 1 colonne mobile, 2-3 colonnes desktop avec icône + texte court
Formulaire devis      : Visible sans scroll sur mobile (above the fold ou 1 scroll)
```

**Position du numéro :**
- Header sticky visible en permanence
- Sticky bar en bas de l'écran sur mobile (pattern le plus efficace sur ce secteur)
- Répété dans chaque section CTA

### Photos

**Ce qui convertit :**
- Fondateur/artisan en tenue de travail (pas costume), souriant, outil en main
- Chantier réel avant/après (salle de bain rénovée, installation chauffe-eau)
- Équipe sur chantier (si applicable)
- Matériel professionnel propre et rangé

**Ce qui détruit la confiance :**
- Homme générique en salopette bleue sur fond blanc (stock évident)
- Illustrations ou icônes à la place de photos
- Photos IA générées (mains étranges, outils incorrects)
- Photos floues ou mal éclairées

**Mots-clés Unsplash optimaux :**
- `plumber working pipe` → artisan en action
- `bathroom renovation before after` → transformation
- `water heater installation` → technique crédible
- `french craftsman home` → localité
- Fallback acceptable si pas de photos client : `professional plumber France` mais toujours avec disclaimer interne que c'est temporaire

---

## 4. Structure page optimisée

### Landing Page Starter (490€ — 3 jours)

```
SECTION 1 — HERO (Above the fold)
├── Titre H1 : Problème résolu + Zone géo
│   Exemple : "Plombier à [Ville] — Dépannage sous 2h"
├── Sous-titre : Rassurance + Différenciateur
│   Exemple : "Artisan certifié RGE • Devis gratuit • Disponible 7j/7"
├── CTA principal : [Appeler maintenant] → tel:+33...  (orange, gros)
├── CTA secondaire : [Demander un devis] → ancre #formulaire (outline bleu)
├── Photo hero : Artisan en tenue, souriant, sur chantier réel
└── Trust signals inline : ⭐ 4.8/5 Google (47 avis) | Assurance décennale

SECTION 2 — ZONE D'INTERVENTION
├── Titre : "J'interviens dans toute la [Zone]"
├── Liste des villes/communes servies (important pour SEO local)
├── Délai moyen par type : Urgence → 2h | Planifié → sous 48h
└── CTA : [Vérifier ma zone] → formulaire ou appel

SECTION 3 — SERVICES (Cards)
├── Dépannage urgence (fuite, canalisation bouchée, panne eau chaude)
├── Installation (chauffe-eau, douche, WC, robinetterie)
├── Rénovation salle de bain
├── Entretien (chaudière, détartrage)
├── (Si applicable) Chauffage / PAC / RGE
└── Chaque card : icône SVG simple + titre + 2 lignes description + prix indicatif ou "Devis gratuit"

SECTION 4 — PREUVES SOCIALES
├── 3 avis Google authentiques (screenshot ou embed) avec note, prénom, ville
├── Certifications affichées (logos RGE, Qualibat, assurance décennale)
└── Stats si applicable : "X interventions" / "Y ans d'expérience" / "Z villes couvertes"

SECTION 5 — PHOTOS RÉALISATIONS
├── Grille 3-6 photos avant/après ou chantiers réels
└── Légende courte : type d'intervention + ville

SECTION 6 — FORMULAIRE DEVIS (ancre #formulaire)
├── Titre : "Demandez votre devis gratuit"
├── Sous-titre : "Réponse sous 24h — Devis sans engagement"
├── Champs (4 MAX) :
│   ├── Prénom + Ville (une ligne)
│   ├── Téléphone
│   ├── Type de prestation (select : Dépannage / Installation / Rénovation / Autre)
│   └── Message (textarea, optionnel, pas obligatoire)
├── Bouton : [Envoyer ma demande] — orange full-width
└── Micro-copy sous bouton : "Vos données ne sont pas revendues. Réponse garantie."

SECTION 7 — FOOTER
├── Nom + SIRET (si applicable) + Assurance décennale
├── Zones d'intervention (liste courte)
├── Liens : Mentions légales | Politique confidentialité
└── Numéro répété

STICKY MOBILE BAR (toujours visible en bas)
└── [📞 Appeler — 06 XX XX XX XX] — bouton orange full-width
```

### Site Business (990€ — 5 jours)

Ajouter aux sections Starter :
- Page /services détaillée par prestation avec SEO local
- Page /realisations avec galerie filtrée
- Page /a-propos avec bio artisan + certifications
- Formulaire avec upload photo (client envoie photo du problème)
- Intégration Google Maps API pour zone d'intervention visuelle
- Blog minimaliste (1 article/mois pour SEO local → service Retainer)

---

## 5. Copy patterns

### H1 qui convertit

Structure : **[Métier] à [Ville] — [Bénéfice urgent]**

```
✅ "Plombier à Lyon — Intervention d'urgence sous 2h"
✅ "Votre plombier à Bordeaux — Dépannage 7j/7, Devis Gratuit"
✅ "Plombier-Chauffagiste à Nantes — RGE certifié, disponible maintenant"

❌ "Bienvenue sur le site de la SARL Dupont Plomberie"
❌ "Expert en solutions plomberie et chauffage"
❌ "Votre partenaire de confiance pour tous vos besoins"
```

### Sous-titres de rassurance (inline trust signals)

```
✅ "Artisan certifié RGE • Assurance décennale • Devis gratuit sous 24h"
✅ "⭐ 4.9/5 sur Google (63 avis) • Intervention dans [N] communes"
✅ "Tarifs transparents • Pas de frais cachés • Matériaux garantis"
```

### CTAs par contexte

| Contexte | CTA | Couleur |
|---------|-----|---------|
| Urgence (hero) | "Appeler maintenant" | Orange |
| Devis planifié | "Demander un devis gratuit" | Bleu outline |
| Section services | "Voir le tarif" / "Obtenir un devis" | Orange |
| Footer | "Nous contacter" | Texte lien |
| Mobile sticky | "📞 06 XX XX XX XX" | Orange full-width |

### Micro-copy qui rassurent

```
Sous formulaire   : "Réponse sous 24h — Sans engagement — Données confidentielles"
Près du tel       : "Disponible du lundi au samedi, 8h-19h"
Sur les prix      : "Devis gratuit et détaillé avant toute intervention"
Sur les avis      : "Avis vérifiés Google — [Date du dernier avis]"
```

### Descriptions services (format)

```
[Nom du service]
[1 ligne : problème résolu]
[1 ligne : ce qui est inclus]
À partir de [X€] | Devis gratuit

Exemple :
Débouchage canalisation
Canalisations bouchées, évier ou WC bloqué — on intervient le jour même.
Diagnostic + débouchage + test d'évacuation inclus.
À partir de 80€ | Devis gratuit
```

---

## 6. Anti-patterns interdits

| Anti-pattern | Pourquoi interdit | Alternative |
|-------------|------------------|-------------|
| Numéro uniquement en footer | L'urgentiste quitte le site avant de scroller | Sticky header + sticky bar mobile |
| Formulaire 6+ champs | Taux d'abandon > 60% sur mobile | 4 champs max, dont 2 optionnels |
| "Experts de vos besoins" | Vague, générique, aucun signal de confiance | Certifications + années d'expérience chiffrées |
| Fond sombre / dark mode | Détruit la crédibilité artisan, illisible soleil mobile | Fond blanc ou gris très clair |
| Slider/carousel en hero | Les vieux clichés artisan, personne ne clique après la 1ère slide | Image fixe haute qualité |
| Aucun prix affiché | Renforce la peur de l'arnaque | Fourchettes ou "à partir de X€" |
| Photos stock homme en salopette bleue | Signale immédiatement "site template" | Photos réelles ou Unsplash ciblé |
| Font Inter/Poppins | Trop startup tech pour artisan | Source Sans Pro ou Nunito |
| Section "Nos valeurs" avec 6 icônes | AI slop universel | Avis clients réels à la place |
| Pas de zone géo mentionnée | Appels perdus hors zone + mauvais SEO local | Zone en hero + liste communes |

---

## 7. Prompt Claude Code final

```
Tu es un expert en création de sites web pour artisans français. 
Crée un site vitrine complet et optimisé pour la conversion pour 
un plombier indépendant français.

═══ DONNÉES CLIENT ═══
Nom de l'entreprise : [NOM_PLOMBIER]
Prénom artisan      : [PRENOM]
Ville principale    : [VILLE]
Zone intervention   : [ZONES_COUVERTES — ex: Lyon et 30km alentour]
Téléphone           : [TEL]
Email               : [EMAIL]
Services            : [SERVICES — ex: dépannage urgence, installation, rénovation SdB]
Certifications      : [CERTIFS — ex: RGE, Qualibat, assurance décennale]
Avis Google         : [NOTE]/5 ([NOMBRE] avis)
Années expérience   : [ANNEES]

═══ STACK TECHNIQUE ═══
HTML5 sémantique + Tailwind CSS CDN + Vanilla JS
Un seul fichier index.html auto-contenu
Pas de framework — déployable directement sur Vercel ou hébergement basic
Formulaire : action vers formspree.io ou mailto (temporaire)

═══ DESIGN SYSTEM — RESPECTER EXACTEMENT ═══
Couleurs :
  --bleu-marine    : #1B3A6B  (primaire, header, textes forts)
  --orange-cta     : #E8A020  (tous les boutons CTA, sticky bar mobile)
  --blanc          : #FFFFFF  (fond principal)
  --gris-surface   : #F5F7FA  (sections alternées, cards)
  --texte-principal: #1A1A1A
  --texte-secondaire: #5C6B7A

Typographie (Google Fonts) :
  Titres H1-H2-H3  : "Source Sans Pro" weights 600, 700
  Corps + labels   : "Nunito" weights 400, 600
  Taille body      : 16px minimum, 1.6 line-height
  JAMAIS Inter ou Poppins

Boutons :
  Primaire : bg-[#E8A020] text-white font-semibold px-6 py-3 rounded-md
             hover:bg-[#D4901A] transition-colors
             min-height 48px (tap target mobile)
  Secondaire : border-2 border-[#1B3A6B] text-[#1B3A6B] px-6 py-3 rounded-md
               hover:bg-[#1B3A6B] hover:text-white

═══ STRUCTURE OBLIGATOIRE ═══

1. HEADER STICKY
   - Logo / Nom entreprise (gauche)
   - Numéro tel cliquable EN GROS (centre ou droite)
   - Bouton "Devis gratuit" orange (droite)
   - Position: sticky top-0, z-50, bg-white shadow-sm
   - Sur mobile : logo + tel uniquement (pas de nav)

2. SECTION HERO
   - H1 : "[PRENOM] — Plombier à [VILLE] • Intervention sous 2h"
   - Sous-titre : certifications + disponibilité + devis gratuit
   - 2 CTAs côte à côte : [Appeler maintenant] orange + [Devis gratuit] outline
   - Trust signal inline : note Google + nombre avis + une certification
   - Image côté droit desktop (artisan ou chantier) — placer un placeholder 
     img avec alt descriptif si pas d'image fournie

3. BANDE ZONE INTERVENTION
   - Fond bleu marine, texte blanc
   - "J'interviens à [VILLE] et dans toute la zone : [ZONES]"
   - Délais : urgence X heures / planifié sous 48h

4. SECTION SERVICES (cards)
   - Grid responsive : 1 col mobile, 2 col tablet, 3 col desktop
   - Chaque card : icône SVG inline (simple) + titre service + 2 lignes description
     + "À partir de Xeu" ou "Devis gratuit" + lien ancre formulaire
   - Services minimum à inclure : dépannage urgence, installation, rénovation,
     entretien. Ajouter chauffage/PAC si RGE certifié.

5. SECTION CONFIANCE
   - Sous-titre : "Pourquoi choisir [PRENOM] ?"
   - 3 piliers : Réactivité (délai) + Transparence (tarifs) + Garanties (certifs)
   - Afficher les logos/badges certifications (SVG ou texte stylé)
   - 3 avis clients (fictifs avec disclaimer si pas de vrais, formatés comme 
     captures Google : nom prénom initial, note 5 étoiles, texte court, ville)

6. GALERIE RÉALISATIONS
   - Grille 2x3 photos (placeholders si pas de vraies photos — utiliser des 
     couleurs neutres avec légende, jamais de photos stock intégrées en dur)
   - Légende : type d'intervention + ville

7. FORMULAIRE DEVIS (id="formulaire")
   - Titre : "Devis gratuit — Réponse sous 24h"
   - 4 champs max :
     1. Prénom + Ville (flex row, deux inputs)
     2. Téléphone (type tel, required)
     3. Type prestation (select : Dépannage urgent / Installation / Rénovation / 
        Entretien / Autre)
     4. Description (textarea, placeholder "Décrivez votre problème...", pas required)
   - Bouton submit orange full-width
   - Micro-copy : "Sans engagement • Réponse garantie sous 24h • Données confidentielles"

8. FOOTER
   - Nom artisan + Numéro SIRET (si applicable) + Assurance décennale
   - Liste zones intervention
   - Liens : Mentions légales | Politique de confidentialité
   - Numéro téléphone répété, cliquable
   - Copyright [ANNEE]

9. STICKY MOBILE BAR
   - Position fixed bottom-0, z-50, visible UNIQUEMENT sur mobile (hidden md:hidden)
   - Fond orange [#E8A020], texte blanc
   - "📞 Appeler — [TEL]" — full width, hauteur 56px
   - IMPORTANT : ajouter padding-bottom au footer pour ne pas cacher le contenu

═══ RÈGLES TECHNIQUES ═══
- Mobile-first : toutes les breakpoints en sm: → md: → lg:
- Toutes les images : lazy loading, width/height définis, alt descriptif
- Formulaire : validation HTML5 native (required, type="tel", type="email")
- Performance : pas de JS inutile, CSS Tailwind CDN, 2 fonts Google max
- Accessibilité : contraste ≥ 4.5:1 partout, focus visible, labels sur tous les inputs
- SEO basique : title, meta description, og:tags, schema.org LocalBusiness en JSON-LD

═══ SCHEMA.ORG — INCLURE OBLIGATOIREMENT ═══
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "[NOM_PLOMBIER]",
  "telephone": "[TEL]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[VILLE]",
    "addressCountry": "FR"
  },
  "areaServed": "[ZONES]",
  "url": "[URL_SITE]"
}
</script>

═══ CONTENU À GÉNÉRER ═══
- Génère tous les textes en français naturel, ton artisan sérieux et accessible
- Pas de jargon corporate, pas de "solutions", pas de "expertise"
- Utiliser le prénom de l'artisan pour personnaliser
- Les avis fictifs si nécessaire : noms français réalistes, villes de la zone, 
  textes spécifiques (pas "Super artisan, je recommande") — ajouter un 
  commentaire HTML <!-- Avis à remplacer par vrais avis Google -->

═══ ANTI-PATTERNS — NE JAMAIS FAIRE ═══
- Background sombre ou dark mode
- Slider/carousel en hero
- Section "Nos valeurs" avec 6 icônes en grille uniforme
- Formulaire > 4 champs
- Texte "Bienvenue sur notre site"
- "Experts de vos besoins plomberie"
- Photos stock intégrées en dur (laisser placeholder avec bg-gray-200)
- Font Inter ou Poppins

═══ OUTPUT ATTENDU ═══
Un fichier index.html complet, auto-contenu, prêt à déployer.
Inclure un commentaire en haut du fichier :
<!-- 
  Site Plombier [NOM] — Généré par Evolvia
  Pour personnaliser : chercher [NOM_PLOMBIER], [PRENOM], [VILLE], [TEL], [EMAIL]
  Photos : remplacer les placeholders bg-gray-200 par des vraies photos
  Avis : remplacer les avis fictifs par de vrais avis Google
-->
```

---

## Notes d'application Evolvia

**Offre Starter (490€) :** Ce prompt → site one-page complet → 3 jours max

**Offre Business (990€) :** Partir du Starter + ajouter :
- Routes séparées : /services /realisations /a-propos
- Stack Next.js App Router au lieu de HTML
- Formulaire avec Resend (transactionnel) au lieu de formspree
- Google Maps embed zone intervention
- Galerie filtrable par type de prestation

**Upsell Retainer (150€/mois) :**
- 1 article SEO local/mois ("Plombier [Ville] : que faire en cas de fuite ?")
- Mise à jour photos chantiers
- Rapport mensuel position Google Maps
- Ajout de nouveaux avis

**Red flags client à qualifier avant de signer :**
- "Je veux qu'on voit bien mes 15 services différents" → négocier la simplification
- "Je veux un slider avec 8 photos en hero" → refuser, proposer 1 image fixe forte
- "Mets mes avis mais seulement les bons, cache les mauvais" → refus éthique, proposer de répondre aux mauvais
- Pas de photos réelles et refuse d'en fournir → bloquer le projet jusqu'à réception, ou utiliser Unsplash temporaire avec deadline explicite
