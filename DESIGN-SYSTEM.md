# DESIGN-SYSTEM.md — Evolvia
# Marque de fabrique géométrique — appliquée H24 sur tous les projets
# Ce fichier est la référence absolue de qualité visuelle Evolvia
# NE PAS MODIFIER sans Diego

---

## PHILOSOPHIE

Apple ne fait pas des coins arrondis "jolis par hasard".
Chaque courbe, chaque proportion, chaque espacement suit
une règle géométrique précise et cohérente.
C'est ça qui rend leurs produits reconnaissables entre tous.

Evolvia applique le même principe sur chaque pixel de chaque site.
Chaque décision visuelle est justifiée mathématiquement.
Ce n'est pas du style — c'est de la rigueur systématique.

Quand Claude Code voit ce fichier, il applique toutes ces règles
automatiquement sur tout ce qu'il touche — sans exception,
sans dérogation, sans "juste cette fois".

---

## RÈGLE 1 — SUPERELLIPSE (coins Apple)

Le border-radius CSS standard crée une coupure nette entre
la ligne droite et le cercle. La superellipse Apple crée
une courbe continue — c'est ça qui rend les coins "premium".

RÈGLE ABSOLUE — border-radius par famille :

  Boutons    → border-radius = hauteur_bouton ÷ 4
               Bouton 40px → 10px
               Bouton 44px → 11px
               Bouton 52px → 13px

  Cards      → 12px fixe — jamais variable selon le contenu

  Badges/tags → hauteur ÷ 4
               Badge 24px → 6px
               Badge 28px → 7px
               Badge 36px → 9px

  Inputs     → 8px fixe

  Avatar     → 50% (cercle parfait)

  Modal/drawer → 16px en haut, 0 en bas si plein écran mobile

INTERDICTIONS :
  ❌ Deux valeurs différentes sur des éléments de même famille
  ❌ border-radius > 16px sauf avatar et pill navigation
  ❌ border-radius arbitraire non justifié par la règle hauteur÷4

---

## RÈGLE 2 — ÉCHELLE TYPOGRAPHIQUE

Toutes les tailles de texte viennent de cette échelle uniquement.
Aucune valeur hors liste n'est autorisée.

  11px  → Caption — métadonnées, disclaimers
  13px  → Small — labels secondaires
  15px  → Body — texte courant standard
  17px  → Body+ — sous-titres, textes mis en avant
  20px  → H4 — titres de cards, features
  24px  → H3 — titres de sections secondaires
  32px  → H2 — titres de sections principales
  48px  → H1 — headline de page
  64px  → Display — hero headline desktop
  80px  → Hero — grand affichage nom de marque

VALEURS INTERDITES (hors échelle) :
  ❌ 12px, 14px, 16px, 18px, 19px, 22px, 26px, 28px
  ❌ 36px, 40px, 42px, 56px, 72px, 96px
  → Si besoin d'une taille "entre deux" → utiliser la plus proche

LINE-HEIGHT par taille — règle inverse (grand = serré) :

  80px Display  → lh 1.0
  64px Display  → lh 1.0–1.05
  48px H1       → lh 1.05–1.1
  32px H2       → lh 1.1–1.2
  24px H3       → lh 1.25–1.35
  20px H4       → lh 1.3–1.4
  17px Body+    → lh 1.6–1.7
  15px Body     → lh 1.65–1.75
  13px Small    → lh 1.5
  11px Caption  → lh 1.4–1.5

  ❌ JAMAIS lh > 1.8 sur du body text
  ❌ JAMAIS lh < 1.0 sauf texte décoratif

LETTER-SPACING — règle inverse (grand = serré, petit = aéré) :

  Display/H1 → -0.02em à -0.03em
  H2         → -0.01em
  H3         → 0em (neutre)
  Body       → 0em (ne jamais modifier)
  Labels uppercase → +0.08em à +0.16em

  ❌ JAMAIS letter-spacing positif sur H1/H2/H3
  ❌ JAMAIS letter-spacing négatif sur labels uppercase

---

## RÈGLE 3 — SPACING SYSTEM (grille 8px)

Tout espacement est un multiple de 8px.
Aucune valeur arbitraire n'est tolérée.

  4px  → micro   (gap icône ↔ label)
  8px  → xs      (padding interne compact)
  12px → sm      (gap éléments proches)
  16px → md      (padding cards compact)
  24px → lg      (gap standard composants)
  32px → xl      (padding cards généreux)
  48px → 2xl     (espacement sections mobile)
  64px → 3xl     (espacement sections tablet)
  96px → 4xl     (padding section desktop)
  128px → 5xl    (padding hero)

BOUTONS — ratio padding 1:2 obligatoire :
  Petit   → 8px vertical  × 16px horizontal
  Moyen   → 12px vertical × 24px horizontal
  Grand   → 16px vertical × 32px horizontal

CONTAINER :
  max-width : 1100px — padding-x : 24px
  Centré horizontalement — jamais full-bleed sauf hero

INTERDICTIONS :
  ❌ 5px, 7px, 9px, 10px, 11px, 13px, 14px, 15px
  ❌ 17px, 18px, 19px, 20px (utiliser 16px ou 24px)
  ❌ 22px, 26px, 28px, 36px, 40px (utiliser 24px ou 32px)

---

## RÈGLE 4 — PROPORTIONS IMAGES ET LAYOUT

Images :
  Hero plein écran   → 16:9 ou 100vh
  Cards paysage      → 16:9 (ex: 640×360)
  Cards portrait     → 4:3 (ex: 400×300)
  Thumbnail carré    → 1:1
  Photo profil       → 1:1 cercle

Layout colonnes :
  2 colonnes égales  → 1:1
  Contenu + sidebar  → 2:1 ou 3:1
  Hero texte + image → 1:1 desktop, plein width mobile
  3 colonnes         → toujours égales (1:1:1)

---

## RÈGLE 5 — HIÉRARCHIE COULEUR 60-30-10

Toute interface respecte cette répartition :
  60% → couleur dominante (fond principal)
  30% → couleur secondaire (surfaces, cards)
  10% → accent (CTA uniquement — jamais dilué)

OPACITÉS TEXTE — valeurs autorisées uniquement :
  100% → titres principaux
  82%  → body text courant
  60%  → texte secondaire / metadata
  40%  → captions, labels discrets
  25%  → placeholders

  ❌ JAMAIS 70%, 75%, 90% ou toute autre valeur hors liste
  ❌ L'accent couleur ne va QUE sur le bouton CTA principal

BORDERS — valeurs autorisées uniquement :
  rgba(X,X,X, 0.08) → border par défaut
  rgba(X,X,X, 0.15) → border secondaire
  rgba(X,X,X, 0.25) → border hover ou highlighted

---

## RÈGLE 6 — TAILWIND CONFIG OBLIGATOIRE

Chaque projet Evolvia ou démo client ajoute dans tailwind.config.ts :

```typescript
theme: {
  extend: {
    fontSize: {
      'xxs':  ['11px', { lineHeight: '1.45' }],
      'xs':   ['13px', { lineHeight: '1.5'  }],
      'sm':   ['15px', { lineHeight: '1.7'  }],
      'base': ['17px', { lineHeight: '1.65' }],
      'lg':   ['20px', { lineHeight: '1.4'  }],
      'xl':   ['24px', { lineHeight: '1.3'  }],
      '2xl':  ['32px', { lineHeight: '1.2'  }],
      '3xl':  ['48px', { lineHeight: '1.1'  }],
      '4xl':  ['64px', { lineHeight: '1.05' }],
      '5xl':  ['80px', { lineHeight: '1.0'  }],
    },
    spacing: {
      '0.5': '4px',
      '1':   '8px',
      '1.5': '12px',
      '2':   '16px',
      '3':   '24px',
      '4':   '32px',
      '6':   '48px',
      '8':   '64px',
      '12':  '96px',
      '16':  '128px',
    },
    borderRadius: {
      'none': '0px',
      'xs':   '4px',
      'sm':   '8px',
      'md':   '12px',
      'lg':   '16px',
      'xl':   '24px',
      'full': '9999px',
    },
  }
}
```

---

## AUTO-VÉRIFICATION OBLIGATOIRE

Avant de livrer tout composant ou page, Claude vérifie :

  □ Toutes les font-size sont dans l'échelle (11/13/15/17/20/24/32/48/64/80)
  □ Tous les spacings sont multiples de 8px
  □ Tous les border-radius suivent la règle famille (cards=12, btn=h÷4)
  □ Opacités texte dans les valeurs (100/82/60/40/25%)
  □ Opacités borders dans les valeurs (0.08/0.15/0.25)
  □ line-height inverse à la taille (grand titre = serré)
  □ letter-spacing négatif sur titres, positif sur labels uppercase
  □ Accent couleur sur UN SEUL CTA par page
  □ Ratio couleur respecte 60-30-10

  Si un point échoue → corriger AVANT de livrer

---

Evolvia — DESIGN-SYSTEM.md v1.0 — Mars 2026
Marque de fabrique géométrique — inspirée Apple HIG
Appliquée H24 sur tout projet Evolvia et démo client
