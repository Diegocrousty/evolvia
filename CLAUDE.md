# EVOLVIA — Brief Claude Code

## FICHIERS À LIRE EN DÉBUT DE SESSION
Au démarrage, toujours lire :
- CONTEXT.md, OFFERS.md, PROCESS.md, DESIGN-CLIENTS.md, TONE-AND-COPY.md, ROADMAP.md

## SKILLS SECTORIELS — OBLIGATOIRE POUR TOUT SITE CLIENT

### Convention de nommage
Chaque secteur a un fichier `SKILL_site-{secteur}.md` dans `docs/skills/`.
Exemples : `docs/skills/SKILL_site-plombier.md`, `docs/skills/SKILL_site-electricien.md`

### Règle de déclenchement — AUTOMATIQUE
Dès qu'un site client est demandé (build, refonte, démo, amélioration) :
1. **IDENTIFIER le secteur** du client (plombier, électricien, restaurant, etc.)
2. **CHERCHER** `docs/skills/SKILL_site-{secteur}.md`
3. **SI trouvé → LIRE INTÉGRALEMENT avant d'écrire une seule ligne de code**
4. **SI absent → demander à Diego** s'il veut en créer un avant de démarrer

### Hiérarchie des sources de vérité
Pour un site client, l'ordre de priorité est :
1. **SKILL sectoriel** (palette, typo, layout, structure, copy, anti-patterns DU SECTEUR)
2. **DESIGN-SYSTEM.md** (règles géométriques : superellipse, échelle typo, spacing 8px, 60-30-10)
3. **DESIGN-CLIENTS.md** (marqueurs qualité Evolvia, checklist QA, anti-patterns AI-slop)
4. **CLAUDE.md** (règles globales Evolvia)

Le SKILL sectoriel OVERRIDE la palette, la typo et le layout du CLAUDE.md —
car les sites clients n'utilisent PAS le design system Evolvia (fond sombre, Cormorant, grain).
Les règles géométriques du DESIGN-SYSTEM.md s'appliquent TOUJOURS (spacing, proportions, border-radius).

### Règle d'application continue — NE JAMAIS OUBLIER
Le SKILL sectoriel n'est pas un fichier "lu une fois puis oublié".
C'est la référence technique active pendant TOUT le build :

- **Avant chaque composant** → vérifier que la palette, typo et layout du SKILL sont respectés
- **Avant chaque section** → vérifier la structure définie dans le SKILL (section par section)
- **Avant chaque texte** → vérifier les copy patterns et anti-patterns du SKILL
- **Avant chaque commit/livraison** → relire le SKILL et vérifier la conformité totale
- **En cas de doute sur un choix design** → le SKILL tranche, pas l'intuition

Si à un moment du build tu réalises qu'un composant ne respecte pas le SKILL → corriger immédiatement, même si ça implique de refaire le composant.

### Skills disponibles
| Secteur | Fichier | Statut |
|---|---|---|
| Plombier / Plombier-Chauffagiste | `docs/skills/SKILL_site-plombier.md` | ✅ Actif |
| Électricien / Électricien-Domotique | `docs/skills/SKILL_site-electricien.md` | ✅ Actif |

### Evals QA — Vérification automatique
Fichier : `docs/skills/evals/evals.json`
Après chaque build de site client, vérifier les assertions du skill correspondant :
- **contains** : le HTML doit contenir la string (palette, font, certifications)
- **not_contains** : le HTML ne doit PAS contenir (anti-patterns, design Evolvia réservé)
- **max_form_fields** : formulaire ≤ N champs
- **contextual** : vérification logique selon le client

Si une assertion critique échoue → corriger AVANT livraison. Pas de dérogation.

## Source de vérité design & architecture — NE PAS MODIFIER sans Diego

## PROJET
Evolvia est une agence web IA ciblant les TPE/PME françaises.
Stack : Next.js 14 App Router + TypeScript + Tailwind CSS + Vercel.
Objectif du site : convertir des prospects froids en demandes de devis.
Chaque élément qui ne sert pas cet objectif est supprimé.

## MESSAGING — COPY FIGÉE (ne pas paraphraser)
- HEADLINE HERO : "Le site que vos clients cherchent quand vous ne décrochez pas."
- SOUS-TITRE HERO : "On construit votre site pendant que vous êtes sur le terrain. Livré en 3 jours, à partir de 490€."
- CTA PRINCIPAL : "Obtenir un devis en 24h"
- ACCROCHE SECTION : "Votre prochain client vous cherche en ce moment. Il trouve quoi ?"

## PALETTE — NON-NÉGOCIABLE

### FONDS
- --bg: #080808 fond principal — jamais #000000 pur
- --bg-2: #0f0e0d fond secondaire — légèrement brun-chaud
- --bg-3: #1a1918 surface cards, sections alternées
- --surface: #242220 surface élevée
- --surface-2: #2e2b29 hover states, borders

### TEXTE
- --white: #f0eeeb texte principal — jamais #ffffff pur
- --white-75: rgba(240, 238, 235, 0.75) corps de texte
- --white-45: rgba(240, 238, 235, 0.45) labels, metadata

### GRIS CHAUDS (hiérarchie sans couleur)
- --grey-1: #8a8780
- --grey-2: #5a5753
- --grey-3: #3a3835

### ACCENT
- --accent: #d97706 UNIQUEMENT : bouton CTA principal
- --accent-hover: #b45309 hover state du bouton CTA uniquement
- JAMAIS dans textes, titres, backgrounds, borders

### RÈGLES ABSOLUES
- JAMAIS #ffffff pur — toujours #f0eeeb
- JAMAIS #000000 pur — toujours #080808
- --accent = UN SEUL endroit : le bouton CTA principal
- Gris = toujours chauds (brun/beige), jamais froids (bleu/vert)

## TYPOGRAPHIE — NON-NÉGOCIABLE

### JAMAIS : Inter, Geist, Roboto, Arial, system-ui, Poppins

### Display / Headlines H1-H2
- font-family: 'Cormorant Garamond', serif
- font-weight: 300
- italic pour les accents émotionnels

### Body / UI
- font-family: 'DM Sans', sans-serif
- font-weight: 400
- font-size: 15px
- line-height: 1.75

### Mono / Labels
- font-family: 'DM Mono', monospace
- font-size: 12px

### HIÉRARCHIE
- H1 : Cormorant 300, 56-72px, #f0eeeb, letter-spacing -0.02em
- H2 : Cormorant 300, 36-48px, #f0eeeb
- H3 : DM Sans 500, 20-24px, #f0eeeb
- Body : DM Sans 400, 15px, rgba(240,238,235,0.75), line-height 1.75
- Label : DM Sans 400, 12px, rgba(240,238,235,0.45), uppercase, tracking 0.08em

### IMPORT NEXT.JS
```
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
Cormorant_Garamond : weight ['300','400'], style ['normal','italic'], variable '--font-display'
DM_Sans : weight ['400','500','600'], variable '--font-body'
DM_Mono : weight ['400'], variable '--font-mono'
```

## GRAIN — SIGNATURE VISUELLE EVOLVIA
Le grain argentique est LA signature visuelle. Obligatoire sur toutes les pages.
Composant GrainOverlay dans components/ui/grain.tsx.

- Position : absolute dans un container relative — JAMAIS fixed (perf mobile iOS)
- Opacité couche 1 (fractalNoise) : 0.035
- Opacité couche 2 (turbulence, mix-blend overlay) : 0.02

## ANIMATIONS

### RÈGLES
- framer-motion UNIQUEMENT
- JAMAIS : Three.js, GSAP, AOS, Lottie, particles.js
- JAMAIS useEffect pour scroll animations — utiliser useInView
- TOUJOURS respecter prefers-reduced-motion

### TRANSITION PAR DÉFAUT EVOLVIA
- duration: 0.5, ease: [0.16, 1, 0.3, 1]

### SCROLL ANIMATIONS
- useInView(ref, { once: true, margin: '-80px' })

### STAGGER PATTERN
- container : staggerChildren 0.08
- item : hidden { opacity: 0, y: 20 } → show { opacity: 1, y: 0 }

## COMPOSANTS

### BOUTON CTA PRINCIPAL (seul endroit avec --accent)
- bg #d97706, hover #b45309
- px-8 py-4 rounded-sm
- DM Sans, text-sm, font-medium, tracking-wide
- hover:scale-[1.02], transition 200ms

### BOUTON SECONDAIRE (sans accent)
- border rgba(240,238,235,0.15)
- hover:border rgba(240,238,235,0.35)
- hover:bg rgba(240,238,235,0.04)

### BORDERS
- Toujours rgba — jamais couleur solide
- Default : rgba(240, 238, 235, 0.08)
- Hover : rgba(240, 238, 235, 0.18)

### CARDS
- background : --bg-3 (#1a1918)
- border : 1px solid rgba(240,238,235,0.08)

## ARCHITECTURE PAGES
```
app/
  page.tsx          → Homepage
  pricing/page.tsx  → 3 offres + retainer + FAQ
  realisations/page.tsx → Portfolio 3 démos fictifs
  pourquoi/page.tsx → Stats + pain points artisans
  contact/page.tsx  → Formulaire devis (Formspree)
  support/page.tsx  → FAQ 8 questions
  services/
    compta/page.tsx → Placeholder "Bientôt disponible" — NE PAS exposer avant août 2026
```

### SOURCE DE VÉRITÉ PRIX : content/offers.ts
- JAMAIS hardcoder 490€, 990€, 1490€, 150€ dans un composant
- Toujours importer depuis offers.ts

## SPACING
- Section padding-y : 120px desktop / 80px mobile
- Container max-width : 1100px, centré, padding-x 24px
- Gap : multiples de 8px uniquement — jamais de valeurs arbitraires

## RÈGLES MÉTIER
1. Acompte 50% toujours requis — mentionné sur /pricing et /contact
2. JAMAIS "comptable" ou "expert-comptable" dans aucun texte
3. Pas de fausse preuve sociale — démos fictives = clairement présentées comme telles
4. Mentions légales + RGPD obligatoires — footer + bandeau cookies
5. Mobile-first — designer pour 375px en premier
6. /services/compta = "Bientôt disponible" uniquement — pas d'offre visible

---
Evolvia — CLAUDE.md v2.1 — Mars 2026
Décisions validées par Diego
Toute modification architecturale = noter dans CONTEXT Notion avant d'exécuter

## DESIGN QUALITY
Impeccable rules are installed in .claude/impeccable/
Run /audit before considering any UI work complete.
Run /polish to fix identified issues.
Run /critique to get honest design feedback.

---
## DESIGN SYSTEM — MARQUE DE FABRIQUE EVOLVIA
Lire DESIGN-SYSTEM.md à chaque démarrage de session.
Appliquer toutes ses règles H24 sur tout élément visuel sans exception.
Proportions, typographie, spacing, couleurs — aucune dérogation
sans validation explicite de Diego.
Ce système est la marque de fabrique Evolvia — inspirée Apple HIG.
