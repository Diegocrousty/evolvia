# PROCESS.md — Livraison client A→Z
> Étapes exactes quand un client signe. À suivre dans l'ordre.

---

## ÉTAPE 1 — QUALIFICATION
Avant tout devis, valider 4 points (framework BANT adapté PME) :
- **Budget** : peuvent-ils payer 490€+ ? (signe indirect : ils ont un local, des ouvriers, une flotte)
- **Autorité** : est-ce le décideur ? (gérant, patron, pas un salarié)
- **Besoin** : pas de site ou site obsolète / honteux ?
- **Timing** : ils veulent avancer maintenant, pas "un jour"

Si 3/4 OK → envoyer devis dans les 24h.

---

## ÉTAPE 2 — DEVIS
- Offre choisie + prix + délai + inclus/exclus
- Mention explicite : "Démarrage après réception de l'acompte de 50%"
- Validité : 7 jours
- Formulation 50% : "Comme pour tous mes projets, je travaille avec 50% à la commande et 50% à la livraison."

---

## ÉTAPE 3 — ACOMPTE (BLOQUANT)
- Lien Stripe envoyé
- **Rien ne commence avant encaissement confirmé**
- Confirmation Stripe → email automatique de démarrage (Resend)

---

## ÉTAPE 4 — BRIEF CLIENT
Collecter par formulaire ou appel 30 min :
- Couleurs préférées / à éviter
- Concurrents appréciés / pas appréciés
- Textes existants ou à créer
- Photos / logo disponibles (formats acceptés : PNG, SVG, JPG haute qualité)
- Domaine existant ou à acheter
- Zone géographique d'intervention (artisans)
- Numéro de téléphone à afficher

---

## ÉTAPE 5 — BUILD (Claude Code)
- Ouvrir le repo dans Claude Code
- Briefer avec : brief client + CONTEXT.md + OFFERS.md + DESIGN-CLIENTS.md
- Builder selon l'offre (Starter / Business / Pro+IA)
- Appliquer les guidelines secteur du client (voir DESIGN-CLIENTS.md)
- **Ne montrer au client qu'une version complète** — jamais un WIP

---

## ÉTAPE 6 — QA INTERNE (checklist obligatoire)
- [ ] Responsive : mobile 375px / tablette 768px / desktop 1280px
- [ ] Formulaire de contact fonctionne (email reçu via Resend)
- [ ] Aucun placeholder "Lorem ipsum" ou contenu factice
- [ ] SEO : title unique, meta description, h1 unique, alt sur toutes les images
- [ ] Performance Lighthouse > 85
- [ ] Pas d'erreurs console
- [ ] Tel cliquable en header (artisans, santé)
- [ ] Mentions légales présentes dans le footer
- [ ] RGPD : bandeau cookies prévu
- [ ] Anti-slop : aucun pattern interdit (voir DESIGN-CLIENTS.md)
- [ ] Accessibilité : contraste 4.5:1, alt texts, focus visible

---

## ÉTAPE 7 — PRÉSENTATION CLIENT
- Lien preview Vercel (pas le domaine final)
- Email de présentation : lien + résumé des choix design + next steps
- Délai de retour client : 48h max

---

## ÉTAPE 8 — RETOURS
Selon l'offre : 1 round (Starter), 2 rounds (Business), 3 rounds (Pro+IA)
- Collecter les retours par écrit (email ou formulaire)
- Prioriser : fonctionnel > contenu > visuel
- Retours au-delà des rounds inclus : 50€/h, facturer avant d'exécuter

---

## ÉTAPE 9 — MISE EN LIGNE
- Configuration domaine client (DNS → Vercel)
- Test final sur le domaine réel
- Email de livraison : URL finale + identifiants si applicable + guide rapide

---

## ÉTAPE 10 — SOLDE + UPSELL
- Lien Stripe pour les 50% restants
- **Attendre encaissement avant de fermer le projet**
- 1 semaine après mise en ligne → proposer le retainer 150€/mois
- Ne pas proposer immédiatement à la livraison — laisser le client "vivre" avec son site

---

## DÉLAIS PAR OFFRE
| Offre | Délai | Commence à partir de |
|---|---|---|
| Starter | 3 jours ouvrés | Brief reçu + acompte encaissé |
| Business | 5 jours ouvrés | Brief reçu + acompte encaissé |
| Pro+IA | 7 jours ouvrés | Brief reçu + acompte encaissé |

---

## RÈGLES ABSOLUES PROCESS
- Acompte 50% TOUJOURS avant de commencer — sans exception
- Le délai court à partir du brief complet reçu, pas de la signature
- Jamais promettre un résultat en termes de trafic ou leads
- Jamais de contenu inventé (témoignages fictifs, stats inventées)
