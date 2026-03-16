# CONTEXT.md — Evolvia
> Lu automatiquement à chaque session Claude Code. Ne pas modifier sans raison.
> Dernière mise à jour : 14 mars 2026

---

## RÈGLE ABSOLUE
Ne jamais confondre EXPLIQUÉ vs EXÉCUTÉ. Seul Diego confirme qu'une action terrain est faite.

## MISE À JOUR AUTO
Claude Code met à jour CONTEXT.md et ROADMAP.md au fil de la session quand du travail avance — sans attendre qu'on lui demande.
- Travail fait ensemble en session (page buildée, bug fixé, composant créé) → mettre à jour directement.
- Actions terrain de Diego (domaine acheté, compte créé, email envoyé) → mettre à jour si Diego le mentionne.
- En cas de doute sur un truc important → demander avant de modifier.
- Toujours éditer chirurgicalement (ligne par ligne) — ne jamais réécrire un fichier entier.

---

## QUI EST DIEGO
- 19 ans, étudiant IE Business School Madrid
- Dev React / FastAPI / Python
- Français natif — cible marché France uniquement
- Fondateur solo — pas d'associé, pas d'équipe

## QU'EST-CE QU'EVOLVIA
Agence web pour TPE/PME françaises — artisans, commerçants, indépendants.

**Positionnement :** prix fixe + délai court + qualité premium. Ni low-cost. Ni grosse agence.
**Contre :** freelances anonymes (trop lents, trop variables) ET grosses agences (trop cher, impersonnelles)
**Promesse :** "Le site que vos clients cherchent quand vous ne décrochez pas."
**Cadre StoryBrand :** Le client (artisan) est le héros. Evolvia est le guide. Le problème = site amateur ou absent. La solution = site pro livré en 3 jours.

**Vision long terme :** groupe de services IA pour entreprises françaises.
- Phase 1 (actif) : Evolvia Web
- Phase 2 (Q3 2026) : Evolvia Compta
- Phase 3 (2027+) : verticale inconnue — garder l'architecture ouverte

## PRIORITÉ ABSOLUE
**Premier client signé dans 30 jours.** Tout le reste est secondaire.

---

## ÉTAT RÉEL — 14 mars 2026
| Élément | Statut |
|---|---|
| Site evolvia.fr | Non buildé |
| Domaine evolvia.fr | À acheter (Infomaniak ~10€) |
| Email contact@evolvia.fr | À créer (Zoho Mail gratuit) |
| Compte Resend | À créer |
| Compte Stripe | À créer |
| Repo GitHub | À créer |
| Emails cold outreach | 0 envoyés |
| Prospects identifiés | 0 |
| Clients signés | 0 |
| Notion CRM | Non setup |

---

## STACK TECHNIQUE — DÉCISIONS FIGÉES
- **Framework :** Next.js 14 App Router + TypeScript
- **Style :** Tailwind CSS — échelle spacing 4/8px stricte
- **Déploiement :** Vercel
- **Animations :** framer-motion UNIQUEMENT
- **Email transactionnel :** Resend
- **Paiements :** Stripe
- **JAMAIS :** Three.js, GSAP, AOS, Lottie, particles.js, Inter, Geist
- **Exception autorisée :** Cobe (globe 3D, ~30kb) — déjà utilisé sur le site

---

## DESIGN SYSTEM EVOLVIA — SITE EVOLVIA UNIQUEMENT
> Ces tokens s'appliquent au site evolvia.fr uniquement.
> Les sites clients ont leur propre identité — voir DESIGN-CLIENTS.md.

### Palette
| Token | Hex | Usage |
|---|---|---|
| background | `#080808` | Fond global (jamais pur noir) |
| foreground | `#f0eeeb` | Texte principal (jamais pur blanc) |
| muted | `#8a8780` | Texte secondaire |
| muted-dark | `#5a5753` | Texte tertiaire |
| surface | `#3a3835` | Surfaces élevées |
| accent | `rgb(194, 98, 10)` | **CTA primaire uniquement** (ambre/orange) |

### Typographie
| Rôle | Font | Poids |
|---|---|---|
| Display / Headlines | Cormorant Garamond | 300 |
| Body / UI | DM Sans | 400 |
| Labels / Captions | DM Mono | 400 |

JAMAIS : Inter, Geist, Poppins, Roboto

### Grain
- 2 couches SVG (fractalNoise + turbulence)
- `position: absolute` dans containers `position: relative`
- **JAMAIS `position: fixed`** — iOS Safari performance

### Logo
- Cormorant Garamond Light, couleur `#f0eeeb`
- Grain opacity 0.04, pas de gradient couleur

### Anti-patterns (jamais sur le site Evolvia)
- Gradients violet-to-pink
- Grilles 3 cartes icône+titre+texte identiques
- Border-radius 24px+ partout
- Ombres "glowy" bleues sur boutons
- Illustrations Undraw/Storyset
- CTA "Commencez dès aujourd'hui"

---

## COPY FIGÉ — NE PAS MODIFIER
- **Headline hero :** "Le site que vos clients cherchent quand vous ne décrochez pas."
- **Subtitle :** "On construit votre site pendant que vous êtes sur le terrain. Livré en 3 jours, à partir de 490€."
- **Hook secondaire :** "Votre prochain client vous cherche en ce moment. Il trouve quoi ?"
- **CTA primaire :** "Obtenir un devis en 24h"

---

## ROUTES — ARCHITECTURE OUVERTE
```
/                    → Homepage
/services/web        → Offres Web (Phase 1 actif)
/services/compta     → Placeholder vide — NE JAMAIS SUPPRIMER
/realisations        → Portfolio démos fictives
/contact             → Formulaire devis
/mentions-legales    → Obligatoire RGPD
```

---

## RÈGLES ABSOLUES
1. Rien d'irréversible architecturalement
2. 0€ pub — outreach direct uniquement
3. Pas de structure légale avant 1er client récurrent
4. Acompte 50% TOUJOURS avant de commencer
5. JAMAIS "comptable" ou "expert-comptable" dans les services
6. Ne jamais garantir un résultat en CA ou leads
7. Pas de fausse preuve sociale — jamais inventer témoignages ou résultats
8. JAMAIS "pas cher" / "prix cassé" / "discount"
