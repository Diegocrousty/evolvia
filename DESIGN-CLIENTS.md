# DESIGN-CLIENTS.md — Standards qualité pour les sites clients
> Ce fichier définit la "marque de fabrique Evolvia" appliquée aux sites clients.
> Les clients ont leur propre identité visuelle — mais chaque site livré doit atteindre
> un niveau de qualité qui rend Evolvia reconnaissable sans que le client le sache.

---

## PRINCIPE FONDAMENTAL
Les sites clients n'utilisent PAS le design system Evolvia (palette sombre, Cormorant Garamond, grain).
Chaque site est personnalisé pour son secteur et son client.

**La marque de fabrique Evolvia, c'est le niveau de qualité, pas le style.**

Un artisan doit avoir un site qui ressemble à un site d'artisan — mais un site d'artisan exceptionnel.
Pas un template générique. Pas de l'AI-slop. Un site dont le client est fier et qui convertit.

---

## LES 5 MARQUEURS QUALITÉ EVOLVIA

Chaque site livré doit passer ces 5 tests :

### 1. Identité typographique distincte
- 2 fonts maximum, bien combinées et justifiées par le secteur
- Hiérarchie visuelle claire : H1 > H2 > body > caption, tailles différentes
- Jamais Inter ou Poppins seul — trop générique, signal "template"
- Combinaisons recommandées par secteur : voir section DESIGN PAR SECTEUR

### 2. Palette raisonnée
- 1 couleur primaire (identité du client ou du secteur)
- 1 couleur secondaire (contraste ou complémentaire)
- 3 neutres (blanc cassé, gris clair, gris foncé — jamais #000000 ou #ffffff pur)
- Accent unique pour le CTA principal seulement
- Max 3 couleurs visibles simultanément sur une section

### 3. Espacement intentionnel
- Spacing 4/8px — jamais de valeurs arbitraires (ex: 13px, 27px)
- Breathing room généreux entre sections (py-16 à py-24 minimum)
- Pas de contenu qui se touche — hierarchy par espace, pas seulement par couleur

### 4. CTA visible en < 2 secondes
- L'action principale est identifiable immédiatement sans lire
- Bouton CTA : couleur accent unique, position haute dans le viewport
- Sur mobile : CTA accessible sans scroll (above the fold)
- Artisans : numéro de téléphone cliquable en header, toujours

### 5. Mobile-first réel
- Codé d'abord pour 375px, puis adapté desktop
- Aucun élément tronqué ou superposé sur mobile
- Touch targets minimum 44px
- Formulaires utilisables avec les pouces

---

## ANTI-PATTERNS INTERDITS (AI-slop)
Ces patterns signalent "site générique IA" et détruisent la crédibilité du client et la réputation d'Evolvia.

**Visuels :**
- Gradient violet-to-pink en hero
- Background sombre + texte "Transformez votre business" en blanc
- Grilles de 3 cartes identiques (icône + titre + texte)
- Border-radius 24px+ sur tous les éléments
- Ombres bleues "glowy" sur les boutons
- Illustrations Undraw/Storyset sans modification
- Hero avec mockup laptop flottant sur fond dégradé
- Section "Nos valeurs" avec 6 icônes en grille uniforme

**Textuels :**
- CTA "Commencez dès aujourd'hui"
- "Transformez votre [secteur]"
- "Solutions innovantes pour votre entreprise"
- "Des experts passionnés à votre service"
- Toute phrase qui pourrait s'appliquer à n'importe quelle entreprise

---

## DESIGN PAR SECTEUR

### Artisan (plombier, électricien, maçon, menuisier, carreleur)
**Objectif principal :** générer des demandes de devis
**Priorités UX :** téléphone en header, formulaire devis rapide, zone géo visible

Palette : tons terre (beige, brun chaud) + bleu professionnel + blanc
Fonts recommandées : Nunito / Source Sans Pro / IBM Plex Sans
Structure hero : photo chantier réel + headline métier + numéro de téléphone
Sections clés : Services / Zone d'intervention / Réalisations / Devis rapide / Avis Google
Éléments obligatoires : tel: link cliquable, numéro en gros dans le header

### Cabinet professionnel (avocat, notaire, expert-conseil)
**Objectif principal :** crédibiliser, générer des prises de contact
**Priorités UX :** crédibilité avant tout, pas de prix affichés, 5 pages max

Palette : marine / gris anthracite / blanc cassé / or discret
Fonts recommandées : Playfair Display + Source Sans Pro / Cormorant + DM Sans
Structure hero : photo professionnelle + titre clair (pas de slogan) + bouton contact
Sections clés : Expertises / Équipe avec bio et diplômes / Contact

### Restaurant, traiteur, épicerie fine
**Objectif principal :** donner envie, déclencher une réservation ou commande
**Priorités UX :** photos d'abord, menu accessible en 1 clic

Palette : crème / terracotta / vert olive / noir chaud
Fonts recommandées : Playfair Display + Lato / Fraunces + Inter (exception autorisée ici)
Structure hero : photo plein écran haute qualité + bouton réservation
Sections clés : Menu (PDF ou page) / Réservation / Horaires + adresse above the fold

### Professionnel de santé (médecin, kiné, ostéo, dentiste)
**Objectif principal :** prise de rendez-vous en ligne
**Priorités UX :** accessibilité, clarté, rassurant

Palette : bleu clair / vert sauge / blanc / gris doux
Fonts recommandées : Plus Jakarta Sans / Nunito / DM Sans
Structure hero : photo pro + spécialité claire + bouton RDV
Sections clés : Spécialités / Infos pratiques (adresse, transports) / Prise de RDV
Accessibilité : taille corps minimum 16px, contraste 4.5:1, focus visible

### Commerce / Boutique spécialisée
**Objectif principal :** vendre ou générer de la visite en magasin
**Priorités UX :** photos produits, histoire différenciante

Palette : selon personnalité de la boutique — pas de règle fixe, raisonner par secteur
Fonts recommandées : selon identité existante du client
Structure hero : produit phare ou ambiance boutique en premier plan

---

## CHECKLIST SELF-QA — AVANT CHAQUE LIVRAISON

### Design
- [ ] Aucun pattern AI-slop de la liste noire
- [ ] Palette raisonnée : 1 primaire + 1 secondaire + 3 neutres
- [ ] 2 fonts max, combinaison justifiée par le secteur
- [ ] Spacing 4/8px — aucune valeur arbitraire
- [ ] Breathing room généreux entre sections

### UX & Conversion
- [ ] CTA identifiable en < 2 secondes
- [ ] Artisan/santé : tel: link en header, visible, cliquable
- [ ] Formulaire : 3 champs max au-dessus du fold (nom, email/tel, message)
- [ ] Mobile : aucun élément tronqué sur 375px

### Technique
- [ ] Responsive 375 / 768 / 1280
- [ ] Formulaire fonctionne (email Resend reçu)
- [ ] Aucun placeholder Lorem ipsum
- [ ] SEO : title unique, meta, h1 unique, alt images
- [ ] Lighthouse > 85
- [ ] Aucune erreur console
- [ ] Images en WebP, fonts en swap

### Légal & RGPD
- [ ] Mentions légales dans le footer (lien ou page)
- [ ] Bandeau cookies si analytics
- [ ] Politique de confidentialité si formulaire

### Anti-fausse-preuve-sociale
- [ ] Aucun témoignage inventé
- [ ] Aucune stat inventée ("98% de clients satisfaits")
- [ ] Aucun logo client fictif

---

## RÈGLE FINALE
Diego vend de la qualité, pas du volume.
Si un seul point de la checklist échoue → corriger avant de livrer.
Un site médiocre livré vite est pire qu'un site excellent livré un jour plus tard.
