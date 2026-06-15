# La Rage de Vivre — dossier artistique interactif

Dossier HTML hébergé sur GitHub Pages.

## Structure

- `index.html` — la page (≈ 71 Ko). Ne contient **plus** d'images ni d'audio en base64 :
  tout est référencé par chemin vers `assets/`. C'est désormais un fichier léger,
  facile à lire et à modifier.
- `assets/` — toutes les images (`.jpg`) et les deux pistes audio (`.mp3`).
- `panneaux-texte.md` — copie **lisible et éditable** du texte des panneaux
  (src-p2, src-p3, src-p4, src-qui, src-trio). Miroir de ce qui s'affiche dans
  `index.html`. Sert de brouillon : on édite ici, puis on reporte dans le HTML.

## Audio

Deux pistes, déclarées en haut du `<script>` de `index.html` :

- `RTB` = `assets/really-the-blues-1938.mp3` — *Really the Blues*, Mezz Mezzrow & Sidney Bechet, 1938 (page 1).
- `DARN` = `assets/darn-that-dream-1963.mp3` — *Darn That Dream*, Thelonious Monk, 1963 (pages 2–4).

## Mise en ligne

```
git add -A
git commit -m "Sortir les médias en assets/ ; index.html léger"
git push
```

GitHub Pages sert automatiquement les fichiers de `assets/`. Vérifier ensuite
sur téléphone que les images et le son se chargent (chemins relatifs corrects).

## Pour économiser des tokens à l'avenir

- `index.html` est maintenant petit : toute retouche de texte/structure est peu coûteuse.
- Pour changer une image : remplacer le fichier dans `assets/` (même nom) — aucune
  modification du HTML nécessaire.
- Pour changer un texte : éditer la section précise (ex. « panneau src-p4 »), pas tout le fichier.
- Ne plus jamais ré-incorporer de base64 dans `index.html`.
