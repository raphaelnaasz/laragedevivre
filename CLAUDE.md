# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev server

```powershell
npx --yes serve C:\Users\rapha\projets\laragedevivre --listen 3456 --no-clipboard
# → http://localhost:3456
```

**Important :** le preview local Claude peut rendre les `.page` (qui utilisent `aspect-ratio`) à 0×0 px, surtout juste après un `reload()` programmatique ou un changement de viewport — c'est un artefact de l'outil, pas un bug du site. Si `window.innerHeight`/`innerWidth` valent `0` en `preview_eval`, appeler `preview_resize` (ou re-régler explicitement une largeur/hauteur) puis re-mesurer. Valider la structure DOM et l'absence d'erreurs console localement, puis tester sur le **déploiement live à 100% de zoom navigateur** (jamais à 80%).

`preview_screenshot` peut aussi time out sans que ce soit une régression réelle — si `preview_eval` répond normalement et qu'il n'y a pas d'erreur console, se fier aux mesures DOM (`getBoundingClientRect`, `scrollHeight`/`clientHeight`, classes appliquées) plutôt qu'insister sur le screenshot.

## Déploiement

Push direct sur `main` → GitHub Pages déploie automatiquement. Ne jamais pousser sans autorisation explicite de Raphaël (attendre le mot « pousse »/« push »).

```powershell
$env:PATH += ";C:\Program Files\GitHub CLI"   # si gh n'est pas dans le PATH
git add -A
git commit -m "…"
git push origin main
```

Après un push, vérifier que le déploiement GitHub Pages a bien abouti (`gh run list --limit 1`) — un échec transitoire de l'étape *deploy* (indépendant du build) arrive occasionnellement ; un commit vide ou un nouveau push suffit généralement à relancer un déploiement propre.

## Architecture

**Fichier unique :** tout le code est dans `index.html` (~1700 lignes) : HTML + `<style>` inline + `<script>` inline. **Édition chirurgicale uniquement** — ne jamais réécrire le fichier entier avec `Write`, toujours `Edit` pour des remplacements ciblés.

**Ressources :**
- `assets/images/` — fonds de page (`img-N.jpg/.webp`), portraits, œuvres (Rothko, Basquiat, Crewdson, Watteau…), converties en jpg+webp via ffmpeg (~1300px sur le grand côté).
- `assets/audio/` — pistes par page/chapitre, y compris `silence.mp3` (2s de silence généré via `ffmpeg -f lavfi -i anullsrc`, utilisé pour forcer un vrai silence sur certaines pages plutôt que laisser la piste précédente continuer).
- `panneaux-texte.md` / `content.md` — copies éditables historiques du texte des panneaux ; **partiellement obsolètes** après plusieurs refontes du chapitre "Intentions" (pages 15-19) — se fier à `index.html` comme source de vérité, pas à ces fichiers.
- `scripts/optimize.mjs` — conversion JPG→WebP (sharp) + compression MP3 (fluent-ffmpeg).

## Système de mise à l'échelle

`--pw: min(75vw, 608px)` est la largeur de page. `--u = calc(var(--pw)/595.276)` est l'unité universelle (mm-équivalent A4, 595.276×841.89) dérivée de cette largeur — toutes les positions/tailles de contenu de page sont en `calc(var(--u)*N)`. Les diptyques et overlays hors-page (`.hi-revele`, `.abs-revele`, `.page-revele`) redéfinissent localement `--u`/`--u2` car ils ne sont pas descendants directs d'un `.page`.

**Panneaux latéraux** (`#panneau-g`/`#panneau-d`) : largeur dynamique `--pl-w` calculée par `largeurPanneau()`. Une image seule dans un panneau (`.panneau--image`, ajoutée automatiquement par `monter()` si 1 seule `<figure>` sans `<p>`) se dimensionne par la hauteur (`max-height:74vh`), sans recadrage ni scroll interne.

## Structure des pages (état courant)

Ordre affiché actuel (folio → contenu) :

| Page | data-folio | Contenu |
|---|---|---|
| 1 | `1` | Couverture |
| 2-4 | `2,3,4` | Texte + panneaux latéraux |
| 5 | `5` | Citations Mezz (encadrés `.cadre4`) |
| 6 (double) | `13`/`14` | Diptyque Hart's Island — reveal au scroll (`#dip-1314`, cercle **retiré**, IntersectionObserver seuil 0.6) |
| 7-13 | `6..12` | "Une vie" — dates 1920-1960 en gros titre direct sur la page (`.date-annee`), plus dans le panneau latéral |
| 14 | `int-basquiat` | Basquiat *Now's the Time* (1985), fond entièrement noir, `object-fit:contain` |
| 15-19 | `int-rothko`,`16`,`int-contrebasse`,`int-crewdson2`,`int-kaddish` | Chapitre **"Intentions"** — voir section dédiée ci-dessous |
| 20 | `15` | Le Passing |
| 21-22 | `19`,`20` | Roy DeCarava |
| 23 (double) | `17`/`17b` | Absence — reveal au scroll (`#dip-absence`, épigraphe Céline) |

**Si on renumérote :** mettre à jour `data-folio` (idéalement inchangé — c'est l'identifiant stable référencé par le JS), `aria-label`, et le `<span>PAGE N</span>` de l'entête ensemble. Ne jamais recalculer `data-folio` juste pour "faire propre" — le JS s'appuie dessus via `querySelector('[data-folio="…"]')`.

### Chapitre "Intentions" (pages 15-19)

Le plus remanié du dossier. Pattern actuel :
- **Fond central** : peinture Rothko (`rothko02-bg`/`03`/`05`/`07`, ou œuvre spécifique p.15/17) en `img.fond`.
- **Texte** : classe `.page-textreveal` sur la `<section>`, contenu dans `.page-revele > .page-corps` — **caché par défaut, révélé au scroll** via un unique `IntersectionObserver` générique (`document.querySelectorAll('.page-textreveal')`, seuil `0.6`, même mécanique que Hart's Island/Absence : voile radial sombre + `opacity/filter(blur)/transform(scale)`).
- **Typographie du texte** : un seul flux (`<p>` unique par page, pas plusieurs paragraphes séparés), retours à la ligne manuels (`<br>`) choisis pour le rythme de lecture, `<br class="saut">` pour marquer une transition plus marquée (marge supplémentaire). Alignement **à gauche** (pas justifié), colonne unique (pas de `column-count`). Variante `.page-corps--dense` (typo réduite) sur la page la plus chargée (p.19, texte fusionné int-5+int-6).
- **Vignettes latérales** : certaines images (Watteau p.16, Crewdson p.18, clarinettiste p.19) sont désormais des **vignettes dans le panneau latéral** (`data-panneau-page`/`data-cote`), pas des images centrales — réutilise le mécanisme `.panneau--image` standard.
- **Cas particulier p.16** : le cercle cliquable qui déclenche *Reincarnation of a Lovebird* (Mingus) et révèle la pochette (`#p16-pochette`) vit **dans le contenu du panneau latéral** (Watteau), pas sur la page centrale — il est monté/démonté dynamiquement, donc son clic est géré par **délégation d'événement** (`document.addEventListener('click', e => e.target.closest('#p16-cercle-panel'))`), pas par un listener direct posé une fois au chargement.
- **Double vignette simultanée (p.20 historique, retirée)** : `infosPage` (~ligne 1216) sait gérer un cas où une page a DEUX images latérales en même temps via `data-panneau-g`/`data-panneau-d` (prioritaire sur `data-panneau-page`/`data-cote` classique) — pattern disponible si besoin futur, actuellement inutilisé après suppression de l'ancienne page 20.

## Repères JS clés

| Fonction | Rôle |
|---|---|
| `tick()` | Moteur principal desktop (`requestAnimationFrame`), pilote panneaux + audio |
| `etroit()` | `true` si `innerWidth <= 760` → bascule mobile |
| `appliquer()` / `monter()` | Gestion des panneaux latéraux (contenu + `.panneau--image`) |
| `infosPage` | Table par page : quel panneau/vignette afficher, quel côté (supporte simple ou double vignette) |
| `setupP6Scroll()` + `p6Fade()` | Pin GSAP + fondu overlay page "Une vie" |
| `majAudio()` / `viser()` / `fondu()` / `muterAutres()` | Moteur audio cross-fade, piloté par `data-son`/`data-son-geste` |
| `assure()` | Crée/retrouve l'`<audio>` pour une clé `EMB:*`, préchargement |
| `creerSwitchAB()` | Switch 2 ou 3 pistes (boutons `.ab-pos`), réutilisé pages "Une vie" |
| `largeurPanneau()` / `dim()` | Dimensions panneaux |
| `ouvreBio()` / `ouvreLightbox()` | Panneaux bio et lightbox image |

## Pièges techniques

- **Seuil `IntersectionObserver` sur un diptyque** : les diptyques (`#dip-1314`, `#dip-absence`) sont larges (2 pages en `flex-direction:row`) mais gardent la **hauteur d'une seule page**, souvent plus haute que le viewport visible. Un seuil `intersectionRatio` trop élevé (ex. `0.7`) peut devenir **inatteignable** dans les conditions d'affichage courantes → le contenu ne se révèle plus jamais. Rester à **`0.6`** (valeur éprouvée) sauf test réel confirmant qu'un seuil plus élevé reste atteignable.
- **`gsap.registerPlugin(ScrollTrigger)`** doit être appelé aussi bien sur desktop que mobile — une omission cause une `ReferenceError` silencieuse.
- **Page "Une vie" (overlay `.p6-qui`, `position:fixed`)** : les `.page` ont `aspect-ratio` + `overflow:hidden` qui clippent tout contenu en flux normal ; l'overlay reste donc en `position:fixed`, hors flux.
- **Contenu injecté dynamiquement dans un panneau latéral** (`monter()` fait `innerHTML =`) : tout élément interactif à l'intérieur (bouton, lien) **perd ses event listeners** à chaque remontage. Toujours utiliser la délégation d'événement (`document.addEventListener('click', e => e.target.closest(...))`) pour ce genre d'élément, jamais un listener attaché une seule fois au chargement — cf. `.lien-img`, `.nom-lien[data-bio]`, `#p16-cercle-panel`.
- **Positionnement en `%` dans un panneau latéral** : un conteneur `position:relative` sans hauteur explicite (ex. `<figure>` autour d'une image `height:auto`) empêche les enfants absolus de résoudre correctement `top:%`/`height:%` (résolvent à 0 ou `auto`). Fixer `aspect-ratio` sur le conteneur (basé sur les dimensions naturelles de l'image) pour que les pourcentages se calculent correctement.
- **`og:image` en chemin relatif** — si l'aperçu de partage social ne s'affiche pas, remplacer par l'URL absolue du déploiement.

## Workflow

- **Mode plan** (`EnterPlanMode`) avant toute modification touchant plusieurs blocs logiques, plusieurs pages, ou introduisant un nouveau mécanisme (ex. nouveau pattern d'animation).
- **`AskUserQuestion`** si la demande est ambiguë plutôt que de supposer — en particulier pour les choix de mise en page/couleur non spécifiés, ou les allégations factuelles à vérifier avant de les intégrer au texte (utiliser `WebSearch` pour les crédits d'œuvres/faits historiques cités dans le texte).
- **Audits lourds** (poids artefacts, chemins, métadonnées) → sous-agent dédié pour préserver le contexte.
- Apostrophes typographiques `'`, tirets `–`/`—`, `&nbsp;` avant `:`/`;`/`!`/`?` : matcher l'existant dans les textes.
- **Ne jamais pousser sans le mot explicite « pousse »/« push ».**
