# Handoff — Version PDF du dossier « La Rage de Vivre »

Document de démarrage pour une **nouvelle conversation Claude Code** dédiée à la
création d'une **version papier / PDF** du dossier artistique.

---

## 1. Objectif

Produire un **dossier PDF téléchargeable** (format imprimable), à partir du même
contenu que le site web interactif, mais avec une **mise en page repensée pour le
papier** — pas une simple capture du site.

- **Usage** : version lue **en commission** par les programmateur·rice·s et
  professionnel·le·s du spectacle vivant (Paris). Doit tenir la route en lecture
  posée, imprimée ou à l'écran, sans son ni animation.
- **Livrable** : `assets/dossier.pdf` dans le dépôt. Le site pointe **déjà** vers
  ce chemin (lien « Télécharger le dossier (PDF) » sur la page 0 / écran
  « Entrer & écouter »). Déposer le PDF final à cet emplacement suffit à activer
  le lien.
- **Esprit** : rester **fidèle à l'univers** du site (voir §4), mais **trancher
  les partis-pris de mise en page avec Claude** — la version print a le droit (le
  devoir) de réinventer le rythme, la grille, la séquence.

## 2. Le projet (résumé)

*La Rage de Vivre* — **solo théâtre-musique** d'après l'autobiographie de **Mezz
Mezzrow** (et Bernard Wolfe), *Really the Blues*. Un acteur-musicien blanc porte
seul le récit d'un clarinettiste/saxophoniste juif de Chicago qui a passé vingt
ans à vouloir « devenir noir ». Thèmes : le lâcher-prise, l'absence, le jazz
comme langue empruntée, le Kaddish, la créolisation (Glissant), la fugitivité
(Moten).

- **Auteur, interprète, musicien** : Raphaël Naasz
- **Mise en scène** : Margaux Eskenazi (La Compagnie Nova)
- **Assistante mise en scène** : Julia Baudet
- **Création 2027-2028**

## 3. Où est le contenu (sources)

| Source | Contenu | Fiabilité |
|---|---|---|
| `index.html` (racine du dépôt) | **Source de vérité** : tous les textes définitifs, l'ordre des pages, les crédits d'images, les intitulés | ✅ à jour |
| `C:\Users\rapha\Downloads\NOTE D'INTENTION V3.1.docx` | Texte canonique de la note d'intention (paragraphes + citations de marge Glissant/Moten pas toutes utilisées sur le web) | ✅ référence texte |
| `C:\Users\rapha\Desktop\contacts.txt` | Coordonnées des 3 créateurs (déjà intégrées en page Contacts) | ✅ |
| `assets/images/*.jpg / *.webp` | Toutes les images (voir §5) | ⚠️ **résolution écran** — vérifier le DPI pour l'impression (peut nécessiter des versions haute-déf) |
| `content.md`, `panneaux-texte.md` | Fichiers historiques | ❌ **obsolètes**, ne pas s'y fier |
| `CLAUDE.md` (racine) | Directives projet + architecture web | ✅ |

**Recommandation** : extraire d'abord tout le texte + la liste ordonnée
images/crédits depuis `index.html` (c'est la matière première du PDF).

## 4. Identité visuelle (à conserver)

- **Couleurs** : noir `#0e0e0e` (fond), jaune `#EFD51A` (texte/traits). Contraste
  fort, très peu de demi-teintes. (Pour l'**impression**, décider RVB vs CMJN et
  tester le rendu du jaune — le `#EFD51A` peut virer en CMJN.)
- **Typo** : `Helvetica Now Text` **Black (900)** — grotesque très gras.
  ⚠️ Fonte **commerciale** ; le `.woff2` référencé (`HelveticaNowText-Black.woff2`)
  n'est **pas garanti présent** dans le dépôt. Pour le PDF : soit obtenir le
  fichier de fonte (licence), soit une alternative libre proche (**Archivo Black**,
  ou une grotesque type Neue Haas Grotesk Black / Inter Black). Les crédits/labels
  sont en **majuscules espacées** (`letter-spacing` large).
- **Motifs récurrents** : cadres jaunes fins autour de certaines images
  (« cerclage » aux bords exacts de l'image), bandeau d'en-tête « LA RAGE DE VIVRE
  · PAGE N », citations encadrées en marge, gros chiffres de dates (1920…1960),
  images pleine page assombries sous le texte.
- **Format de référence** : **A4 portrait** (le site simule une page 595×842).

## 5. Structure narrative actuelle (carte du site → matière du PDF)

Ordre actuel des « pages » du dossier web (chaque section = une page A4) :

1. **Couverture** — *La Rage de Vivre* / *Really the Blues* / « D'après le roman de
   Mezz Mezzrow et Bernard Wolfe » / créateurs + rôles / « Création 2027-2028 ».
2-5. **Ouverture** — photos (Bechet, Idris Khan…), **double citation de la parade**
   (Mezz p.423-424 : « J'étais Jimmy Noone, Johnny Dodds, Sidney Bechet… » / « la
   vie est belle, il fait bon vivre »).
6-13. **« Une vie »** — frise 1920→1960 (Armstrong, Ellington, Bechet, Miles Davis,
   Monk…), portraits Saul Leiter, encadrés biographiques (parcours de Mezz,
   Pontiac, New Orleans, le *passing*/blackface, Nice 1948, mort au Père-Lachaise
   1972). Textes dans les `panneau-source` de `index.html` (`#src-p2`…`#src-p12`,
   `#src-p15`, etc.).
14. **Basquiat** — *Now's the Time* (1985) sur fond noir.
15-17. **Note d'intention** (texte V3.1) : lâcher-prise / dramaturgie du son /
   principe éthique d'incarnation / objets sonorisés / Kaddish / Ginsberg /
   Margaux Eskenazi & le rhizome. Images latérales : Watteau *Pierrot*, Crewdson,
   clarinettiste. Citation **Glissant** (*Poétique de la Relation*, 1990).
   Signature « Raphaël Naasz ».
18. **Double page « Absence »** — actuellement **vidée** ; un **nouveau texte
   intime arrivera prochainement** (l'ancien récit « frère / Camille » est
   conservé en commentaire dans `index.html`, cherchez `PAGE 18 — TEXTE RETIRÉ`).
19. **Contacts** — nom + rôle + email + tél des 3 créateurs.

Citations de marge disponibles (docx) pas toutes placées : **Glissant** (« La
créolisation… », *Le Monde* 2005 ; « racine en rhizome… », *Poétique de la
Relation* 1990), **Moten** (« The history of blackness is testament to the fact
that objects can and do resist », *In the Break*, 2003).

## 6. Outillage recommandé (choisir en début de conversation)

Le rendu print doit être **beau et scriptable**. Deux bonnes voies avec Claude
Code :

- **Typst** *(recommandé)* — moteur de composition moderne, excellent en typo,
  images faciles, itération rapide, PDF propre. Idéal pour **inventer une mise en
  page** (grille, marges, rythme) plutôt que reproduire le web. `typst compile`.
- **HTML/CSS → PDF** (WeasyPrint, Paged.js, ou Chrome headless `--print-to-pdf`) —
  permet de **réutiliser directement le langage visuel CSS** (jaune/noir, cadres)
  et les assets. Plus fidèle au web, un peu moins libre pour le print natif.
- Compléments : le **skill `pdf`** d'Anthropic (assemblage, fusion, filigrane,
  images) ; le skill `canvas-design` pour des planches/affiches.

Éviter de partir sur InDesign (hors périmètre Code) ou LaTeX lourd sauf besoin
typographique précis.

## 7. Contraintes & pièges à anticiper

- **Résolution des images** : les JPG/WebP sont optimisés écran. Vérifier qu'ils
  tiennent à ~300 dpi en A4 ; sinon récupérer des versions haute-déf auprès de
  Raphaël (surtout pour une éventuelle impression).
- **Licence de fonte** : Helvetica Now = payante. Prévoir une alternative libre si
  la fonte n'est pas fournie (voir §4).
- **Couleur d'impression** : tester le jaune `#EFD51A` en CMJN.
- **Pas de scroll/reveal** : toute la dramaturgie web repose sur l'apparition au
  scroll et le son. En print, **réinventer le tempo** (doubles pages, respirations,
  images pleine page, citations isolées).
- **Crédits incomplets** : certains Rothko (« Mark Rothko » sans titre/année) et
  le clarinettiste (`int-kaddish`) n'ont pas de crédit source confirmé — demander
  à Raphaël avant de les inscrire.

## 8. Fidélité vs. liberté (cadrage créatif)

- **Garder** : palette noir+jaune, typo grasse, les œuvres/images, les **textes
  verbatim** (note d'intention, citations), l'esprit jazz/absence.
- **Réinventer librement** : grille, séquence, hiérarchie, pagination, couverture,
  usage des citations de marge — c'est l'objet de la collaboration (« trancher les
  choix de mise en page avec Claude »).

## 9. Première étape suggérée (pour démarrer)

1. Extraire depuis `index.html` : tout le texte + la liste ordonnée
   images/crédits (produire un `pdf/contenu.md` de travail).
2. Choisir le moteur (Typst conseillé) et poser le **gabarit** (A4, marges,
   couleurs, fonte de substitution).
3. Composer d'abord **la couverture + une double page intérieure** comme preuve de
   style, la soumettre à Raphaël, itérer.
4. Sortir vers `assets/dossier.pdf`.

## 10. Directives de travail (rappel `CLAUDE.md`)

- Nouveau chantier → **produire d'abord dans un sous-dossier `pdf/`** ; ne pas
  toucher `index.html` sauf pour le lien final.
- **Mode Plan** avant tout mécanisme/structure nouvelle ; `AskUserQuestion` si
  ambiguïté ; `WebSearch` pour vérifier toute allégation factuelle avant de
  l'inscrire.
- Édition chirurgicale, commits clairs par étape.
- **Ne jamais pousser sans le mot explicite « push ».**
- `gh` CLI pour GitHub ; branche dédiée + PR pour une évolution validée.

---

*Écrit après le commit qui ajoute l'animation de la page Contacts et l'agrandissement
des images/citations p.15-17. Le site est à jour : `raphaelnaasz.github.io/laragedevivre.github.io/`.*
