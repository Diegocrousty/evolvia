---
name: site-electricien
version: 1.1.0
description: >
  Référence technique complète pour créer des sites web d'électriciens français (artisans, PME).
  Couvre palette (#1C3557 bleu nuit + #F59E0B ambre), typographie IBM Plex Sans, structure page
  section par section, copy patterns, certifications (Qualifelec, RGE, IRVE, CONSUEL, NF C 15-100),
  psychologie visiteur urgence vs planifié, et anti-patterns interdits.
  DÉCLENCHER CE SKILL dès que le contexte mentionne : électricien, electricien, IRVE, borne de recharge,
  tableau électrique, dépannage électrique, installation électrique, mise aux normes électriques,
  Qualifelec, CONSUEL, NF C 15-100, domotique artisan, site électricien, ou toute demande de création /
  amélioration / audit de site web pour un professionnel de l'électricité.
  Ne PAS déclencher pour : le site evolvia.fr lui-même, un plombier, un restaurant, ou tout secteur
  non-électricité.
secteur: Électricien / Électricien-Domotique
cible-evolvia: Starter (490€) ou Business (990€)
offre-recommandee: Starter si solo artisan, Business si équipe + spécialité IRVE/domotique
triggers:
  - électricien
  - electricien
  - IRVE
  - borne de recharge
  - tableau électrique
  - dépannage électrique
  - installation électrique
  - mise aux normes
  - Qualifelec
  - CONSUEL
  - NF C 15-100
  - domotique artisan
  - site électricien
---

# SKILL Site Électricien — Evolvia

## 1. Analyse marché — Ce qui convertit

### Grille de fiabilité (filtre data analyst) :
* ✅ Source primaire indépendante, volume suffisant
* ⚠️ Source unique ou agence commerciale — illustration narrative uniquement
* ❌ Auto-promotionnel ou non sourcé — exclu des décisions design

### Données marché vérifiées ✅

**Cerfrance 2024** — même source que SKILL plombier, applicable secteur BTP global :
* 65% des artisans BTP ont un site web. 35% sans présence = opportunité directe.
* Majorité des sites existants : obsolètes, non-mobiles, sans certifications affichées.

**Sources multi-convergentes tarifs** (elecineris.fr, wattplus.net, obat.fr — guides consommateurs indépendants) :
* Tarif horaire marché : 35-95€ HT selon région, qualification et complexité
* Consensus resserré : 40-80€ HT pour dépannage standard
* Majoration urgence nuit/week-end : peut doubler le tarif de base (consensus multi-sources)
* Frais déplacement : forfait variable, généralement 20-50€
* IDF vs province : +20 à +40% en région parisienne
* → Données utilisables pour rédiger des prix indicatifs réalistes sur les sites clients

### Certifications — sources officielles Qualifelec + CONSUEL + IZI by EDF :
* **Qualifelec** : organisme de qualification depuis 1955, référence sectorielle absolue. Présence sur site = signal de confiance critique pour le client
* **CONSUEL** : attestation de conformité obligatoire avant mise en service de toute installation neuve/rénovée. Le client qui sait ça cherche un électricien qui l'accompagne sur cette démarche
* **RGE** (via Qualifelec) : indispensable pour que le client accède à MaPrimeRénov' et éco-prêt à taux zéro — argument commercial fort sur le site
* **IRVE** : qualification obligatoire légalement depuis 2017 pour bornes >3,7kW. Marché en forte croissance (objectif 400k bornes 2030). Électricien IRVE = différenciateur immédiat à afficher
* **NF C 15-100** : norme obligatoire pour toutes installations. La mentionner explicitement rassure le client non-technicien
* → Ces certifications sont plus déterminantes pour la conversion que dans n'importe quel autre secteur artisan : l'électricité engage la sécurité et les assurances habitation. Un client qui découvre qu'une installation non conforme annule son assurance prend sa décision différemment.

### Différence psychologique clé vs plombier — sourcée qualitativement :
* Plombier : peur de l'arnaque financière (devis flou)
* Électricien : peur double — arnaque financière ET risque sécurité (incendie, électrocution, refus assurance)
* → Le site doit rassurer sur les deux dimensions, pas seulement sur le prix

### Patterns UX convergents — top performers secteur ✅

Observés sur Atelier Conversion, Tatoun, Le Site Français, Octolio, Artdim, labassee.fr. Convergence 100% des acteurs spécialisés électricien :

| Pattern | Signal |
|---|---|
| Tel cliquable en header | Critique |
| Zone géo + délai intervention | Critique |
| Certifications affichées dès la homepage (Qualifelec, RGE, IRVE) | Plus critique que pour le plombier |
| Conformité NF C 15-100 mentionnée | Fort — différenciateur sécurité |
| Accompagnement CONSUEL mentionné | Fort — rassurance démarche |
| Double CTA : urgence (appel) + devis planifié | Critique |
| Formulaire ≤4 champs | Fort |
| Photos installations réelles (tableaux électriques, chantiers) | Fort |
| Section dédiée IRVE si certifié | Différenciateur fort — marché croissant |

**Cas illustratif ⚠️** (N=1, non généralisable) :
* Atelier Conversion cite "42 devis reçus, 28 signés en 8 mois" pour un électricien client. Source : agence commerciale avec biais d'intérêt direct. À utiliser uniquement en narrative pitch client, jamais comme benchmark.

### Ce qui ne convertit pas
* Certifications absentes ou cachées en footer
* Aucune mention de la norme NF C 15-100 ou du CONSUEL
* Formulaire 6+ champs — friction excessive en situation urgence
* Photos stock (électricien souriant avec casque jaune devant panneau solaire)
* Design trop "startup tech" ou trop "énergies renouvelables" si l'artisan fait surtout du dépannage résidentiel
* Pas de zone géo → appels hors zone + mauvais SEO local

---

## 2. Psychologie visiteur

### Deux profils très distincts — le site doit couvrir les deux

**Profil A — Urgence électrique**

| Critère | Valeur |
|---|---|
| Situation | Panne, disjoncteur qui saute, plus de courant dans une pièce |
| Device | Mobile — dans la pièce concernée |
| État d'esprit | Stressé, veut un numéro immédiatement |
| Temps sur site | 10-20 secondes avant décision d'appeler ou partir |
| Décision | Appel direct — formulaire trop long = fuite |

**Profil B — Travaux planifiés (mise aux normes, rénovation, IRVE)**

| Critère | Valeur |
|---|---|
| Situation | Projet de rénovation, achat voiture électrique, vente immobilière avec diagnostic |
| Device | Desktop ou mobile, contexte calme |
| État d'esprit | Méfiant sur la sécurité ET sur le prix, compare 2-3 artisans |
| Temps sur site | 2-5 minutes — lit les certifications, regarde les réalisations |
| Décision | Formulaire devis ou appel — cherche à être rassuré AVANT de contacter |
| Peur spécifique | "Si l'installation n'est pas aux normes, mon assurance ne couvrira pas" |

### Déclencheurs de conversion

**Profil A (urgence)** :
* Numéro visible immédiatement → appel
* Mention "Disponible 7j/7" ou délai d'intervention → appel
* Zone géo confirmée → appel

**Profil B (planifié)** :
* Certifications affichées (Qualifelec, RGE, IRVE) → confiance → devis
* Mention CONSUEL + accompagnement inclus → rassurance démarche → devis
* Photos installations réelles (tableaux propres, câblage soigné) → compétence → devis
* Transparence sur conformité NF C 15-100 → sécurité → devis
* Avis clients mentionnant "conforme", "propre", "ponctuel" → social proof → devis

### Déclencheurs de fuite
* Aucune certification visible → "pas sérieux" ou "risque pour mon assurance"
* Photos floues ou stock → doute sur la qualité réelle des travaux
* Formulaire trop long en urgence → appel du concurrent
* Design générique → indifférencié parmi 3 artisans comparés

---

## 3. Design System sectoriel

### Palette

```
Primaire     : #1C3557  — Bleu nuit professionnel
               → Psychologie : expertise technique, sécurité, fiabilité
               → Distinct du bleu marine plombier (#1B3A6B) — légèrement plus froid,
                 référence inconsciente aux réseaux électriques, tableaux de contrôle

Accent CTA   : #F59E0B  — Ambre/jaune technique
               → Psychologie : électricité, vigilance, énergie — sans être danger pur
               → Contraste élevé sur bleu ET sur blanc → lisible mobile
               → JAMAIS rouge (danger, urgence négative) ou vert (santé/écologie)
               → Le jaune est la couleur universellement associée à l'électricité

Fond         : #FFFFFF  — Blanc pur (fond principal)
Surface      : #F4F6F9  — Gris bleu très clair (cards, sections alternées)
Texte        : #1A1A2E  — Quasi-noir légèrement bleuté (cohérence palette)
Texte secon. : #5C6B8A  — Gris bleu (sous-titres, labels)
Accent sécur : #10B981  — Vert discret UNIQUEMENT pour badges certifications
               → "Qualifelec ✓", "RGE ✓", "IRVE ✓" — signal de validation
```

**Différence critique vs plombier :**
* Plombier : palette chaude (bleu marine + orange) → artisan de confiance, chaleur humaine
* Électricien : palette technique froide (bleu nuit + ambre) → expertise, précision, sécurité
* Raison : le client électricité est plus sensible à la compétence technique qu'à la sympathie

**Interdit pour ce secteur :**
* Rouge dominant → danger, peur → contre-productif même si électricité = risque
* Vert dominant seul → médical ou énergies renouvelables, sauf si IRVE/photovoltaïque est le cœur d'activité
* Noir/dark mode → trop "startup tech", décalé artisan traditionnel
* Orange seul sans bleu → trop proche BTP générique, perd la spécificité électricité

### Typographie

```
Titres H1-H2 : IBM Plex Sans SemiBold / Bold
               → Connotation technique, précision, fiabilité — parfaite pour électricien
               → Lisible en gros sur mobile, caractère "ingénierie" sans être froid

Corps / body : IBM Plex Sans Regular 16px / line-height 1.65
               → Cohérence famille, gain de lisibilité, cohérence visuelle totale

Labels/badges: IBM Plex Mono 12px — pour codes certifications, numéros SIRET, normes
               → Le mono sur les éléments techniques (NF C 15-100, Qualifelec n°XXXX)
                 crée une impression d'exactitude et de rigueur

Taille minimum : 16px body mobile
```

**Alternativement si IBM Plex Sans indisponible :**
* Titres : Source Sans Pro Bold — acceptable, légèrement moins technique
* Jamais : Inter (trop SaaS), Nunito (trop doux pour électricien), serif (trop cabinet avocat)

### Layout

```
Structure globale     : Single-column dominant mobile
Numéro téléphone      : Header sticky + sticky bar mobile bas de l'écran (identique plombier)
Certifications        : Bande dédiée immédiatement après le hero — pas cachées en footer
CTA bouton            : Full-width mobile, 48px min, couleur ambre #F59E0B
Densité info          : Moyenne — plus d'espace que plombier (les certifications prennent de la place)
Section IRVE          : Si certifié → section dédiée, pas juste une ligne dans les services
```

**Position des certifications — règle absolue électricien :**
* Logos Qualifelec, RGE, IRVE, CONSUEL = section visible sans scroll sur desktop
* Sur mobile = visible après 1 scroll maximum
* Jamais en footer uniquement — c'est ici que la décision se joue

### Photos

**Ce qui convertit :**
* Tableau électrique neuf, câblage propre et ordonné (avant/après si possible)
* Artisan en tenue de travail avec EPI (casque, gants isolants) — signale la sécurité
* Borne IRVE installée dans garage particulier (si certifié)
* Installation domotique propre (si applicable)
* Diagnostic thermique ou test de conformité en cours

**Ce qui détruit la confiance :**
* Stock photo : homme souriant avec casque jaune devant panneau solaire générique
* Fils enchevêtrés, tableau ancien mal rangé
* Photos floues ou mal éclairées d'un tableau électrique
* Illustrations IA (mains avec fils souvent incorrectes)

**Mots-clés Unsplash optimaux :**
* electrical panel renovation france → tableau rénovation
* electrician work professional → artisan en action
* EV charging station home installation → IRVE
* smart home installation → domotique
* electrical wiring professional → câblage propre

---

## 4. Structure page optimisée

### Landing Page Starter (490€ — 3 jours)

```
SECTION 1 — HERO (Above the fold)
├── Titre H1 : Problème + Zone + Sécurité
│   Exemple : "Électricien à [Ville] — Installations conformes NF C 15-100"
│   Exemple urgence : "Panne électrique à [Ville] ? Intervention sous 2h"
├── Sous-titre : Certifications + disponibilité + devis gratuit
│   Exemple : "Qualifelec certifié • RGE • Devis gratuit • 7j/7"
├── CTA principal : [Appeler maintenant] → tel:+33... (ambre, gros)
├── CTA secondaire : [Demander un devis] → ancre #formulaire (outline bleu)
├── Photo hero : Artisan en EPI sur chantier, ou tableau électrique neuf propre
└── Note de sécurité inline : "Toutes installations conformes + attestation CONSUEL fournie"

SECTION 2 — BANDE CERTIFICATIONS (critique — visible sans trop scroller)
├── Fond bleu nuit #1C3557, texte blanc
├── Logos/badges : Qualifelec ✓ | RGE ✓ | IRVE ✓ | Assurance décennale ✓
├── NF C 15-100 mentionnée explicitement
└── "Attestation CONSUEL fournie pour chaque installation"

SECTION 3 — ZONE D'INTERVENTION
├── "[Prénom] intervient à [Ville] et dans toute la zone : [ZONES]"
├── Délais : Urgence → sous 2h | Planifié → sous 48h
└── CTA : [Vérifier ma zone]

SECTION 4 — SERVICES (Cards)
├── Dépannage urgence (panne, disjoncteur, court-circuit)
├── Installation & rénovation électrique (NF C 15-100)
├── Mise aux normes (diagnostic + mise en conformité)
├── Tableau électrique (remplacement, extension)
├── Borne de recharge IRVE (si certifié)
├── Domotique (si applicable)
└── Chaque card : icône SVG + titre + description 2 lignes + prix indicatif ou "Devis gratuit"
    Mentions conformité dans les descriptions : "Installation certifiée conforme", "Attestation incluse"

SECTION 5 — SÉCURITÉ & GARANTIES (spécifique électricien — pas dans SKILL plombier)
├── Titre : "Votre installation est entre de bonnes mains"
├── 3 piliers :
│   ├── Conformité : NF C 15-100 respectée + CONSUEL accompagné
│   ├── Assurance : décennale + RC pro — détails sur demande
│   └── Garantie : matériel certifié, câblage soigné, rapport de fin de chantier
└── Micro-copy : "Une installation non conforme peut annuler votre assurance habitation.
                  [Prénom] vous garantit une installation qui passe le CONSUEL."

SECTION 6 — PREUVES SOCIALES
├── 3 avis Google (authentiques ou fictifs avec disclaimer)
│   → Choisir des avis mentionnant "conforme", "propre", "sérieux", "ponctuel"
│   → Éviter les avis vagues ("super artisan je recommande")
├── Stats si applicable : X installations / Y ans d'expérience / Z villes
└── Logos certifications répétés ici

SECTION 7 — RÉALISATIONS (photos)
├── Grille 3-6 photos : tableaux électriques avant/après, bornes IRVE, chantiers réels
└── Légende : type d'intervention + résultat (ex: "Mise aux normes — Lyon 3e")

SECTION 8 — FORMULAIRE DEVIS (id="formulaire")
├── Titre : "Devis gratuit — Réponse sous 24h"
├── 4 champs MAX :
│   ├── Prénom + Ville (flex row)
│   ├── Téléphone (required)
│   ├── Type prestation (select : Dépannage urgent / Installation / Mise aux normes /
│   │   Tableau électrique / Borne IRVE / Domotique / Autre)
│   └── Description (textarea, optionnel)
├── Bouton ambre full-width
└── Micro-copy : "Sans engagement • Devis détaillé avec matériaux et délais • Données confidentielles"

SECTION 9 — FOOTER
├── Nom artisan + SIRET + Assurance décennale
├── Certifications texte : Qualifelec n°[XXXX] | RGE | IRVE (si applicable)
├── Zones d'intervention
├── Liens légaux
└── Tel répété

STICKY MOBILE BAR
└── [⚡ Appeler — 06 XX XX XX XX] — fond ambre #F59E0B, texte blanc, full-width, 56px
```

### Site Business (990€ — 5 jours)

Ajouter au Starter :
* Page /services avec sous-pages dédiées : /depannage, /installation, /mise-aux-normes, /irve
* Page /realisations avec galerie filtrée par type
* Page /certifications dédiée — explication détaillée Qualifelec, RGE, CONSUEL, NF C 15-100 → Excellente pour SEO + confiance client Profil B
* Page /a-propos avec parcours artisan + certifications
* Formulaire avec upload photo (client envoie photo tableau ou prise défectueuse)
* Google Maps zone intervention

---

## 5. Copy patterns

### H1 qui convertit

```
Structure urgence : "[Métier] à [Ville] — [Bénéfice immédiat]"
Structure planifié : "[Métier] certifié à [Ville] — [Garantie sécurité]"

✅ "Électricien à Bordeaux — Dépannage 7j/7, installations NF C 15-100"
✅ "Panne électrique à Lyon ? Votre électricien Qualifelec intervient sous 2h"
✅ "Électricien certifié RGE à Nantes — Mise aux normes, IRVE, Domotique"
✅ "[Prénom] — Électricien à [Ville], Qualifelec certifié depuis [N] ans"

❌ "Solutions électriques professionnelles pour vos besoins"
❌ "Expert en installations électriques et énergies"
❌ "Bienvenue chez [Société] Électricité"
```

### Sous-titres de rassurance (inline trust signals)

```
✅ "Qualifelec certifié • RGE • Installations conformes NF C 15-100 • Devis gratuit"
✅ "⭐ 4.8/5 Google (52 avis) • Attestation CONSUEL fournie • Assurance décennale"
✅ "Dépannage sous 2h • Devis transparent • Matériaux certifiés"
```

### CTAs par contexte

| Contexte | CTA | Couleur |
|---|---|---|
| Urgence (hero) | "Appeler maintenant" | Ambre #F59E0B |
| Devis planifié | "Demander un devis gratuit" | Bleu outline |
| Section certifications | "Voir mes qualifications" | Texte lien blanc |
| Section IRVE | "Installer une borne chez moi" | Ambre |
| Footer | "Nous contacter" | Texte lien |
| Mobile sticky | "⚡ 06 XX XX XX XX" | Ambre full-width |

### Descriptions services (format électricien)

```
[Nom du service]
[1 ligne : situation client / problème résolu]
[1 ligne : ce qui est inclus + mention conformité]
À partir de [X€] ou Devis gratuit | [Certification applicable]

Exemple :
Mise aux normes électriques
Diagnostic complet de votre installation existante + rapport de conformité.
Travaux réalisés selon NF C 15-100 — attestation CONSUEL fournie à la fin.
Devis gratuit | Qualifelec certifié

Exemple IRVE :
Borne de recharge véhicule électrique
Installation wallbox jusqu'à 22kW chez vous, en habitation ou garage.
Qualification IRVE obligatoire — attestation pour aides État (prime Advenir) incluse.
À partir de 600€ pose comprise | IRVE certifié Qualifelec
```

### Micro-copy sécurité — spécifique électricien

```
Sous les certifications  : "Toutes nos installations sont conformes à la norme NF C 15-100
                            en vigueur. Attestation CONSUEL fournie systématiquement."
Près du formulaire IRVE  : "Qualification IRVE obligatoire pour bénéficier des aides État.
                            [Prénom] est certifié — vos aides sont garanties."
Note assurance            : "Une installation non conforme peut être refusée par votre assurance.
                            Nos travaux sont garantis et documentés."
Sur les avis              : "Avis vérifiés Google — [Date du dernier avis]"
```

---

## 6. Anti-patterns interdits

| Anti-pattern | Pourquoi interdit | Alternative |
|---|---|---|
| Certifications absentes ou en footer | Le Profil B prend sa décision sur les certifications — sans elles il part | Section dédiée visible immédiatement après hero |
| Aucune mention NF C 15-100 | Le client averti cherche cette mention — son absence = doute sur la compétence | Mentionner dans hero, descriptions services, footer |
| CONSUEL non mentionné | Les clients qui font une rénovation doivent passer le CONSUEL — accompagnement = valeur ajoutée | Section garanties explicite |
| Rouge dominant | Renforce la peur plutôt que la confiance | Ambre/jaune pour l'électricité, jamais rouge |
| Photos stock génériques | "Électricien souriant avec casque jaune" = aucun signal de compétence réelle | Tableaux électriques réels, avant/après |
| Formulaire 6+ champs | Trop long en urgence | 4 champs max |
| Section "Nos valeurs" avec 6 icônes | AI slop — destruction crédibilité | Section certifications avec logos officiels |
| IRVE non mis en avant si certifié | Marché en forte croissance, différenciateur clé | Section dédiée IRVE dans les services |
| Prix absents pour IRVE | Le client cherche à savoir si c'est accessible avant d'appeler | "À partir de 600€ pose comprise" visible |
| Font Inter/Poppins | Trop SaaS — décalé artisan technique | IBM Plex Sans ou Source Sans Pro |

---

## 7. Prompt Claude Code final

```
Tu es un expert en création de sites web pour artisans électriciens français.
Crée un site vitrine complet et optimisé pour la conversion pour un électricien
indépendant français. La sécurité et les certifications sont les éléments de
différenciation principaux dans ce secteur.

═══ DONNÉES CLIENT ═══
Nom de l'entreprise : [NOM_ELECTRICIEN]
Prénom artisan      : [PRENOM]
Ville principale    : [VILLE]
Zone intervention   : [ZONES]
Téléphone           : [TEL]
Email               : [EMAIL]
Services principaux : [SERVICES — ex: dépannage, installation, mise aux normes, IRVE]
Certifications      : [CERTIFS — ex: Qualifelec n°XXXX, RGE, IRVE, assurance décennale]
Avis Google         : [NOTE]/5 ([NOMBRE] avis)
Années expérience   : [ANNEES]
IRVE certifié       : [OUI/NON]
Domotique           : [OUI/NON]

═══ STACK TECHNIQUE ═══
HTML5 sémantique + Tailwind CSS CDN + Vanilla JS
Un seul fichier index.html auto-contenu
Pas de framework — déployable directement sur Vercel ou hébergement basic
Formulaire : action vers formspree.io ou mailto (temporaire)

═══ DESIGN SYSTEM — RESPECTER EXACTEMENT ═══
Couleurs :
  --bleu-nuit      : #1C3557  (primaire, header, textes forts)
  --ambre-cta      : #F59E0B  (tous les boutons CTA, sticky bar mobile)
  --vert-certif    : #10B981  (badges certifications UNIQUEMENT — Qualifelec ✓, RGE ✓)
  --blanc          : #FFFFFF  (fond principal)
  --gris-surface   : #F4F6F9  (sections alternées, cards)
  --texte-principal: #1A1A2E  (légèrement bleuté)
  --texte-secon    : #5C6B8A
Typographie (Google Fonts) :
  Titres H1-H2-H3  : "IBM Plex Sans" weights 600, 700
  Corps + labels   : "IBM Plex Sans" weights 400, 500
  Mono (certifs)   : "IBM Plex Mono" weight 400
  JAMAIS Inter, Poppins, Nunito pour ce secteur

Boutons :
  Primaire : bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-md
             hover:bg-[#D97706] transition-colors
             min-height 48px (tap target mobile)
  Secondaire : border-2 border-[#1C3557] text-[#1C3557] px-6 py-3 rounded-md
               hover:bg-[#1C3557] hover:text-white

Badges certifications :
  bg-[#10B981] text-white text-xs font-semibold px-3 py-1 rounded-full
  Contenu : "Qualifelec ✓" | "RGE ✓" | "IRVE ✓" | "NF C 15-100 ✓"

═══ STRUCTURE OBLIGATOIRE ═══

1. HEADER STICKY
   - Logo / Nom entreprise (gauche)
   - Numéro tel cliquable EN GROS (centre ou droite)
   - Bouton "Devis gratuit" ambre (droite)
   - Position: sticky top-0, z-50, bg-white shadow-sm
   - Mobile : logo + tel uniquement

2. SECTION HERO
   - H1 : "[PRENOM] — Électricien à [VILLE] • Installations NF C 15-100"
          OU si dépannage prioritaire : "Panne électrique à [VILLE] ? Sous 2h."
   - Sous-titre : certifications principales + disponibilité
   - 2 CTAs : [Appeler maintenant] ambre + [Devis gratuit] outline
   - Trust signal : note Google + Qualifelec certifié + "attestation CONSUEL fournie"
   - Image hero : tableau électrique neuf propre, ou artisan en EPI — placeholder bg-slate-200

3. BANDE CERTIFICATIONS (immédiatement après hero — non-négociable)
   - Fond bleu nuit #1C3557, texte blanc
   - Flex row centré : badges verts pour chaque certification
   - Texte : "Toutes installations conformes NF C 15-100 • Attestation CONSUEL fournie"
   - Note : si client n'a pas de certifications → remplacer par années d'expérience
             + assurance décennale + zones d'intervention

4. ZONE D'INTERVENTION
   - "J'interviens à [VILLE] et dans toute la zone : [ZONES]"
   - Délais : urgence X heures | planifié sous 48h

5. SERVICES (cards)
   - Grid : 1 col mobile, 2 col tablet, 3 col desktop
   - Chaque card : icône SVG + titre + description 2 lignes avec mention conformité
                   + "À partir de X€" ou "Devis gratuit"
   - Services minimum : dépannage urgence, installation/rénovation, mise aux normes,
                         tableau électrique, [IRVE si certifié], [domotique si applicable]
   - Dans chaque description, glisser naturellement : "conforme NF C 15-100",
     "attestation fournie", "matériaux certifiés"

6. SECTION SÉCURITÉ & GARANTIES (unique à ce SKILL — absente chez plombier)
   - Titre : "Votre installation, notre responsabilité"
   - 3 colonnes :
     ├── Conformité : NF C 15-100 + CONSUEL accompagné
     ├── Couverture : assurance décennale + RC pro
     └── Transparence : devis détaillé matériaux + délais avant tout travail
   - Micro-copy : "Une installation non conforme peut entraîner un refus d'assurance
                   en cas de sinistre. [PRENOM] vous garantit la conformité totale."

7. PREUVES SOCIALES
   - 3 avis (authentiques ou fictifs avec disclaimer HTML)
   - Choisir/rédiger des avis mentionnant "conforme", "sérieux", "propre", "ponctuel"
   - Badges certifications répétés

8. GALERIE RÉALISATIONS
   - 4-6 photos placeholder bg-slate-200 avec légendes :
     "Tableau électrique rénové — [Ville]" / "Borne IRVE installée — [Ville]" etc.

9. FORMULAIRE DEVIS (id="formulaire")
   - Titre : "Devis gratuit — Réponse sous 24h"
   - 4 champs MAX :
     1. Prénom + Ville (flex row)
     2. Téléphone (required)
     3. Téléphone (required)
     3. Type (select : Dépannage urgent / Installation-Rénovation / Mise aux normes /
                       Tableau électrique / Borne IRVE / Domotique / Autre)
     4. Description (textarea, optionnel)
   - Bouton ambre full-width
   - Micro-copy : "Devis détaillé avec matériaux et délais • Sans engagement • Réponse garantie sous 24h"

10. FOOTER
    - Nom + SIRET + Assurance décennale
    - Certifications : Qualifelec n°[XXXX] | RGE | IRVE (texte, pas seulement logos)
    - Zones d'intervention
    - Mentions légales | Politique confidentialité
    - Tel répété

11. STICKY MOBILE BAR
    - Position fixed bottom-0, z-50, hidden md:hidden
    - Fond ambre #F59E0B, texte blanc
    - "⚡ Appeler — [TEL]" full-width, 56px
    - padding-bottom footer pour ne pas masquer le contenu

═══ SCHEMA.ORG — INCLURE OBLIGATOIREMENT ═══
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "[NOM_ELECTRICIEN]",
  "telephone": "[TEL]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[VILLE]",
    "addressCountry": "FR"
  },
  "areaServed": "[ZONES]",
  "url": "[URL_SITE]",
  "hasCredential": "Qualifelec"
}
</script>

═══ CONTENU À GÉNÉRER ═══
- Français naturel, ton artisan expert et rassurant — pas "solutions", pas "expertise"
- Certifications mentionnées naturellement dans CHAQUE section, pas entassées en un seul bloc
- CONSUEL : l'expliquer simplement dans la section garanties — pas de jargon
- NF C 15-100 : mentionner que c'est obligatoire + que l'artisan la respecte
- Avis fictifs si nécessaire : noms réalistes, villes de la zone, textes spécifiques
  ("Tom a refait tout le tableau, propre et conforme, j'ai eu mon CONSUEL sans problème")
  → commentaire HTML : <!-- Avis à remplacer par vrais avis Google -->

═══ ANTI-PATTERNS — NE JAMAIS FAIRE ═══
- Certifications cachées en footer uniquement
- Rouge comme couleur dominante
- Aucune mention CONSUEL ou NF C 15-100
- Photos stock générique homme avec casque jaune
- Formulaire > 4 champs
- Section "Nos valeurs" avec 6 icônes
- Font Inter ou Poppins
- Design system Evolvia (fond sombre, grain, curseur) — réservé au site Evolvia.fr

═══ OUTPUT ATTENDU ═══
Un fichier index.html complet, auto-contenu, prêt à déployer.
Commentaire en haut :
<!--
   Site Électricien [NOM] — Généré par Evolvia
  Variables à personnaliser : [NOM_ELECTRICIEN], [PRENOM], [VILLE], [TEL], [EMAIL]
  Photos : remplacer les placeholders bg-slate-200 par photos réelles
  Avis : remplacer les avis fictifs par vrais avis Google
  Certifications : vérifier les numéros Qualifelec avec le client
-->
```

---

## Notes d'application Evolvia

**Différence principale vs SKILL plombier :**
* La section Sécurité & Garanties est obligatoire pour l'électricien, optionnelle pour le plombier
* Les certifications doivent apparaître plus tôt dans la page — dès la section 2, pas en section 4-5
* Le copy doit systématiquement mentionner la conformité — pas juste le prix et le délai
* La palette est délibérément plus "technique" (IBM Plex, bleu nuit + ambre) vs "humaine" (Source Sans, bleu marine + orange) pour le plombier

**Upsell Retainer (150€/mois) :**
* 1 article SEO local/mois : "Mise aux normes électriques à [Ville] : ce qu'il faut savoir"
* Mise à jour photos chantiers
* Section IRVE si le client obtient la certification en cours de retainer
* Rapport mensuel position Google Maps

**Red flags client à qualifier avant signature :**
* "Je n'ai aucune certification" → site faisable mais réduire les promesses de sécurité dans le copy, ne pas mentionner Qualifelec si absent. Formuler autrement : "X ans d'expérience, assurance décennale"
* "Mets que je suis certifié Qualifelec" alors qu'il ne l'est pas → refus catégorique — risque légal
* "Je ne veux pas afficher mes tarifs" → acceptable, mais suggérer "Devis gratuit sous 24h" partout pour compenser
* Pas de photos du tout et refuse d'en prendre → bloquer jusqu'à réception minimum 3 photos de chantiers réels
