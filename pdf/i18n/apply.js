/* ═══════════════════════════════════════════════════════════════════
   apply.js — applique une traduction PAR-DESSUS le document français.

   Principe : le français reste la source, écrit en dur dans le HTML.
   Ce script ne s'active QUE si l'URL contient ?lang=en. Sans lui (ou s'il
   échoue), le document s'affiche en français, intact. Rien n'est jamais
   réécrit sur le disque : le remplacement a lieu à l'affichage seulement.

   Le dictionnaire est indexé par INDEX DE PAGE (l'ordre des .page) puis par
   sélecteur CSS, ce qui évite d'avoir à baliser le HTML.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  if (lang !== 'en' || !window.I18N_EN) return;   // FR = défaut, aucun effet

  var dict = window.I18N_EN;
  var pages = document.querySelectorAll('.page');
  var manques = [];

  function appliquer(racine, table) {
    Object.keys(table).forEach(function (sel) {
      var valeur = table[sel];
      var cibles = racine.querySelectorAll(sel);
      if (!cibles.length) { manques.push(sel); return; }
      cibles.forEach(function (el) {
        if (valeur && typeof valeur === 'object') {
          // forme attribut : { html: "...", href: "..." }
          Object.keys(valeur).forEach(function (cle) {
            if (cle === 'html') el.innerHTML = valeur.html;
            else el.setAttribute(cle, valeur[cle]);
          });
        } else {
          el.innerHTML = valeur;
        }
      });
    });
  }

  // remplacements valables sur tout le document
  appliquer(document, dict.global || {});

  // remplacements page par page
  Object.keys(dict.pages || {}).forEach(function (i) {
    var pg = pages[Number(i)];
    if (!pg) { manques.push('page[' + i + ']'); return; }
    appliquer(pg, dict.pages[i]);
  });

  // ajustements de style (l'anglais est plus court : corps parfois à revoir)
  Object.keys(dict.styles || {}).forEach(function (i) {
    var pg = pages[Number(i)];
    if (!pg) return;
    var table = dict.styles[i];
    Object.keys(table).forEach(function (sel) {
      pg.querySelectorAll(sel).forEach(function (el) {
        Object.assign(el.style, table[sel]);
      });
    });
  });

  document.documentElement.lang = 'en';
  if (dict.title) document.title = dict.title;

  if (manques.length) console.warn('[i18n] sélecteurs non appliqués :', manques);
})();
