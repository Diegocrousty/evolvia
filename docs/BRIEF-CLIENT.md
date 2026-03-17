# BRIEF-CLIENT — Template pour chaque nouveau site client

> Remplir avant de démarrer le build. Claude Code lit ce fichier et part en build direct.
> Copier ce template, le renommer `BRIEF-[NOM-CLIENT].md` et compléter.

---

## INFOS CLIENT

| Champ | Valeur |
|---|---|
| Nom / Entreprise | |
| Secteur | (plombier / électricien / immobilier / maçon / restaurant / cabinet pro / santé / commerce / autre) |
| Ville / Zone d'intervention | |
| Numéro de téléphone | |
| Email de contact | |
| Site existant | (URL ou "aucun") |
| Ce qui rend ce client DIFFÉRENT de ses concurrents locaux | |

## OBJECTIF DU SITE

| Champ | Valeur |
|---|---|
| Action principale | (devis / appel / réservation / contact) |
| Offre Evolvia | (Starter 490€ / Business 990€ / Pro+IA 1490€) |

## CONTENU DISPONIBLE

| Champ | Valeur |
|---|---|
| Logo | (oui — format / non) |
| Photos réelles | (oui — nombre / non) |
| Textes existants | (oui / non — à générer) |
| Avis Google | (oui — combien / non) |

## IDENTITÉ VISUELLE

| Champ | Valeur |
|---|---|
| Couleurs de la marque | (si existantes, sinon "libre") |
| Couleurs à éviter | |
| Style souhaité | (moderne / classique / chaleureux / technique / premium / accessible) |
| Concurrents appréciés | (URLs si dispo) |

## CONTRAINTES

| Champ | Valeur |
|---|---|
| Domaine | (URL existant ou "à acheter") |
| Fonctionnalités spéciales | (RDV / carte / galerie / formulaire devis / chatbot / autre) |

---

## INSTRUCTION POUR CLAUDE CODE

### Étape 1 — Consulte le Registre
Lis le Registre Sites Livrés dans Notion.
Extrais la liste des combinaisons déjà utilisées (palette + fonts + structure hero) pour ce secteur.

### Étape 2 — Génère 3 directions créatives
Chaque direction doit être visuellement distincte des autres ET du dernier site livré dans ce secteur.

Pour chaque direction, définis :
- **Palette** : primaire / secondaire / 3 neutres (hex)
- **Font titres + font body**
- **Structure hero** : (photo plein écran / split image-texte / texte centré / fond coloré)
- **Mood** en 3 mots

Ce qui crée de la vraie différenciation — varie AU MOINS 2 de ces 4 éléments :
1. Structure du hero (le plus impactant visuellement)
2. Font titres (serif élégant vs sans-serif bold vs slab)
3. Traitement des cards/sections (bordures fines / fond coloré / ombre / sans décoration)
4. Couleur primaire (même gamme OK, mais ton différent)

### Étape 3 — Recommande et attends validation
Indique laquelle tu recommandes et pourquoi (1 phrase).
Attends la validation de Diego avant de coder.

### Étape 4 — Build
Code selon la direction validée + SKILL sectoriel + DESIGN-CLIENTS.md.
Le SKILL sectoriel reste la source de vérité pour la structure, les règles de conversion et les anti-patterns.
Les 3 directions ne dégradent JAMAIS la qualité — elles varient la surface, pas la structure.

### Étape 5 — Après livraison
Ajoute une entrée dans le Registre Notion avec : client, secteur, palette, fonts, structure hero, mood.

---

## RÈGLE FONDAMENTALE

Deux sites peuvent avoir des palettes proches — c'est acceptable.
Ce qui n'est pas acceptable : deux sites du même secteur avec la même structure de hero + les mêmes fonts.

La "marque de fabrique Evolvia" c'est la qualité et la cohérence interne de chaque site — pas l'uniformité entre les sites.

**Le SKILL sectoriel = le plancher de qualité (jamais dégradé).**
**Les directions créatives = la surface visuelle (toujours variée).**
