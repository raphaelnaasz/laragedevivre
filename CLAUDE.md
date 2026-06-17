# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev server

```powershell
npx --yes serve C:\Users\rapha\projets\laragedevivre --listen 3456 --no-clipboard
# → http://localhost:3456
```

**Important :** le preview local Claude rend à 0×0 px → force le mode mobile (`etroit()` = `innerWidth<=760`). Impossible de valider le desktop en local. Valider la structure DOM et l'absence d'erreurs console localement, puis tester sur le **déploiement live à 100% de zoom navigateur** (jamais à 80%).

## Déploiement

Push direct sur `main` → GitHub Pages déploie automatiquement. Ne jamais pousser sans autorisation explicite de Raphaël.

```powershell
$env:PATH += ";C:\Program Files\GitHub CLI"   # si gh n'est pas dans le PATH
git add index.html
git commit -m "…"
git push origin HEAD:main
```

## Architecture

**Fichier unique :** tout le code est dans `index.html` (~1450 lignes) : HTML + `<style>` inline + `<script>` inline. Ne jamais réécrire le fichier entier avec `Write` — utiliser `Edit` pour des remplacements chirurgicaux.

**Ressources :**
- `assets/images/` — fonds `img-1..18.jpg/.webp`, couverture, portraits.
- `assets/audio/` — `really-the-blues-1938.mp3` (pages 1-2), `darn-that-dream-1963.mp3` (pages 3-5), `souvenirs-nouvelle-orleans.mp3` (pages 6+).
- `panneaux-texte.md` — copie éditable du texte des panneaux (miroir de ce qui est dans le HTML ; éditer ici, puis reporter dans le HTML).
- `scripts/optimize.mjs` — conversion JPG→WebP (sharp) + compression MP3 (fluent-ffmpeg). Usage : `node scripts/optimize.mjs`.

## Système de mise à l'échelle

`--pw: min(75vw, 608px)` est la largeur de page. La variable `--u = calc(var(--pw)/595.276)` est l'unité universelle qui dérive de cette largeur — toutes les positions et tailles de contenu de page sont exprimées en `calc(var(--u)*N)`. Ne pas modifier `--pw` sans recalibrer `largeurPanneau()` en JS.

## Structure des pages

```html
<section class="page" data-folio="N" aria-label="Page N">
```

Ordre actuel : 1 couverture · 2-4 texte (panneaux latéraux) · 5 citations Mezz + panneaux · 6 « Qui il est. » (overlay GSAP pin) · 7 image · 8-11 Saul Leiter · 12-13 diptyque pano · 14 Zhang Huan · 15 Watteau · 16 Glenn Ligon · 17 (2 images empilées) · 18-19 DeCarava.

**Si on renuméroite :** mettre à jour `data-folio`, `aria-label`, et le texte de l'entête ensemble.

## Repères JS clés

| Fonction | Rôle |
|---|---|
| `tick()` | Moteur principal desktop (appelé par `requestAnimationFrame`) |
| `etroit()` | `true` si `innerWidth <= 760` → bascule mobile |
| `appliquer()` / `monter()` | Gestion des panneaux latéraux |
| `setupP6Scroll()` + `p6Fade()` | Pin GSAP + fondu de l'overlay page 6 |
| `setupGSAPMobile()` | Moteur mobile GSAP ScrollTrigger |
| `majAudio()` / `basculePiste()` / `fondu()` | Audio cross-fade |
| `largeurPanneau()` / `dim()` | Dimensions panneaux |
| `ouvreBio()` / `ouvreLightbox()` | Panneaux bio et lightbox |

## Pièges techniques

- **`gsap.registerPlugin(ScrollTrigger)` doit être appelé aussi bien sur desktop que mobile.** Ancienne omission causait une `ReferenceError` silencieuse. Toujours grep les références après suppression d'une fonction.
- **Page 6 — overlay `position:fixed`** : les `.page` ont `aspect-ratio` + `overflow:hidden` qui clippent tout encadré en flux. L'overlay est en dehors du flux, centré, en `position:fixed`. Timings ajustables : `0.40`/`0.45` dans `p6Fade()` (apparition/disparition), `0.18` (`holdIn`) dans `setupP6Scroll()`.
- **Panneau « image seule »** : classe `panneau--image` ajoutée par `monter()` si exactement 1 `<figure>` et aucun `<p>`. Ne pas modifier cette logique sans tester le panneau photo New-Orleans (page 5) et les panneaux multi-images (src-trio).
- **`og:image` en chemin relatif** — si l'aperçu de partage social ne s'affiche pas, remplacer par l'URL absolue du déploiement.

## Workflow

- **Mode plan** (`EnterPlanMode`) avant toute modification touchant plusieurs blocs logiques ou plus d'un fichier.
- **`AskUserQuestion`** si la demande est ambiguë plutôt que de supposer.
- **Audits lourds** (poids artefacts, chemins, métadonnées) → sous-agent dédié pour préserver le contexte.
- Apostrophes typographiques `'`, tirets `–`/`—` : matcher l'existant dans les textes.
