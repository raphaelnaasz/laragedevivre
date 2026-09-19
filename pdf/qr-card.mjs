// qr-card.mjs — génère une carte QR aux couleurs du dossier (noir/jaune, Archivo
// Black), titre + lien copiable dessus. Sort un HTML autonome (QR SVG inline).
// Le PNG final est rendu ensuite par Chrome headless (cf. commande d'accompagnement).

import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const URL_SITE = 'https://raphaelnaasz.github.io/laragedevivre/';
const JAUNE = '#EFD51A', NOIR = '#0e0e0e';

// QR : modules NOIRS sur fond JAUNE (polarité sombre-sur-clair = fiable à scanner),
// le fond jaune se fond dans la tuile jaune de la carte. Correction d'erreur haute.
const qrSvg = await QRCode.toString(URL_SITE, {
  type: 'svg', margin: 1, errorCorrectionLevel: 'H',
  color: { dark: NOIR, light: JAUNE },
});
// rend le SVG responsive dans sa tuile
const qrSvgResp = qrSvg.replace('<svg ', '<svg style="width:100%;height:100%;display:block" ');

// SVG QR autonome (pour l'intégrer dans la couverture du dossier PDF, cliquable)
fs.writeFileSync(path.join(here, 'qr-site.svg'), qrSvg, 'utf8');

const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<style>
@font-face{font-family:'Archivo Black';src:url('fonts/ArchivoBlack.ttf') format('truetype');font-weight:900;font-display:block;}
@page{size:1080px 1350px;margin:0;}
*{box-sizing:border-box;margin:0;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
:root{--jaune:${JAUNE};--noir:${NOIR};}
html,body{background:var(--noir);}
.card{position:relative;width:1080px;height:1350px;background:var(--noir);
  font-family:'Archivo Black','Arial Black',sans-serif;color:var(--jaune);
  display:flex;flex-direction:column;align-items:center;justify-content:space-between;
  padding:96px 84px 76px;}
.cadre{position:absolute;inset:34px;border:3px solid var(--jaune);pointer-events:none;}
.titre{font-size:118px;line-height:.92;letter-spacing:-0.02em;text-align:center;}
.sous{font-size:24px;letter-spacing:.34em;text-transform:uppercase;opacity:.9;margin-top:26px;}
.tuile{width:600px;height:600px;background:var(--jaune);border-radius:30px;padding:34px;}
.flash{font-size:26px;letter-spacing:.2em;text-transform:uppercase;opacity:.95;text-align:center;}
.lienlabel{font-size:19px;letter-spacing:.16em;text-transform:uppercase;opacity:.7;text-align:center;margin-bottom:14px;}
.lien{font-family:'Consolas','Courier New',monospace;font-weight:700;font-size:25px;letter-spacing:.01em;
  color:var(--jaune);border:2px solid var(--jaune);border-radius:10px;padding:16px 22px;text-align:center;
  word-break:break-all;line-height:1.35;max-width:912px;}
.crea{font-size:19px;letter-spacing:.16em;text-transform:uppercase;color:#E9DFB8;opacity:.85;}
.bloc{display:flex;flex-direction:column;align-items:center;}
</style></head><body>
<div class="card">
  <div class="cadre"></div>
  <div class="bloc">
    <div class="titre">La Rage<br>de Vivre</div>
  </div>
  <a href="${URL_SITE}" style="text-decoration:none"><div class="tuile">${qrSvgResp}</div></a>
  <div class="bloc" style="gap:30px">
    <div class="flash">Scannez pour ouvrir le dossier</div>
    <div class="bloc">
      <div class="lienlabel">Ou copiez ce lien</div>
      <a href="${URL_SITE}" style="text-decoration:none;color:inherit"><div class="lien">${URL_SITE}</div></a>
    </div>
    <div class="crea">Création 2027-2028</div>
  </div>
</div>
</body></html>`;

fs.writeFileSync(path.join(here, 'qr-card.html'), html, 'utf8');
console.log('qr-card.html écrit — QR généré pour', URL_SITE);
