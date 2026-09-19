// prepare-bg.mjs — pré-cuit des fonds ASSOMBRIS et OPAQUES pour le PDF.
// But : supprimer toute transparence (voiles/dégradés) qui, composée par-dessus
// les images, fait exploser le nombre d'images/masques dans le PDF (→ lag navigateur).
// Chaque fond devient un seul JPEG opaque, déjà sombre → texte jaune lisible dessus.
//
// Usage : node pdf/prepare-bg.mjs   (depuis la racine du projet)

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const SRC  = path.join(here, '..', 'assets', 'images');
const OUT  = path.join(here, 'bg');
fs.mkdirSync(OUT, { recursive: true });

// A4 ~150 dpi — compromis fluidité / qualité (moins de pixels = décodage plus
// rapide dans les lecteurs PDF de navigateur). fill pour coller à object-fit:fill.
const W = 1240, H = 1754;

// { fichier source, sortie, luminosité (1 = inchangé, <1 = plus sombre) }
const pages = [
  { src: 'sidney-bechet.jpg',     out: 'p02.jpg', b: 0.42 },
  { src: 'fond-p3.jpg',           out: 'p03.jpg', b: 0.44 },
  { src: 'img-1.jpg',             out: 'p04.jpg', b: 0.42 },
  { src: 'img-2.jpg',             out: 'p05.jpg', b: 0.48 },
  { src: 'img-5.jpg',             out: 'p06.jpg', b: 0.30 },
  { src: 'img-6.jpg',             out: 'p06b.jpg', b: 0.30 },
  { src: 'img-3.jpg',             out: 'p07.jpg', b: 0.40 },
  { src: 'img-4.jpg',             out: 'p08.jpg', b: 0.42 },
  { src: 'img-18.jpg',            out: 'p09.jpg', b: 0.40 },
  { src: 'img-9.jpg',             out: 'p10.jpg', b: 0.40 },
  { src: 'img-8.jpg',             out: 'p11.jpg', b: 0.42 },
  { src: 'img-10.jpg',            out: 'p12.jpg', b: 0.42 },
  { src: 'img-7.jpg',             out: 'p13.jpg', b: 0.42 },
  { src: 'int-rothko.jpg',        out: 'p15.jpg', b: 0.55 },
  { src: 'img-11.jpg',            out: 'p16.jpg', b: 0.38 },
  { src: 'saul-leiter-femme.jpg', out: 'p17.jpg', b: 0.40 },
  { src: 'int-contrebasse.jpg',   out: 'p19.jpg', b: 0.34 },
];

let total = 0;
for (const p of pages) {
  const inPath = path.join(SRC, p.src);
  const outPath = path.join(OUT, p.out);
  // Assombrissement PUR : multiplication linéaire de R/G/B par p.b (baisse
  // d'exposition). Aucune touche à la teinte ni à la saturation → la
  // colorimétrie propre de chaque image est conservée telle quelle.
  await sharp(inPath)
    .resize(W, H, { fit: 'fill' })
    .linear(p.b, 0)
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(outPath);
  const kb = Math.round(fs.statSync(outPath).size / 1024);
  total += kb;
  console.log(`${p.out.padEnd(9)} ← ${p.src.padEnd(24)} b=${p.b}  ${kb} KB`);
}
console.log(`\nTotal fonds : ${total} KB (${(total/1024).toFixed(1)} MB)`);
