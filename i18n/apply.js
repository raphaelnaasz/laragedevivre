/* ═══════════════════════════════════════════════════════════════════
   apply.js — bascule FR / EN du site.

   PRINCIPE DE SÛRETÉ : le français reste écrit en dur dans index.html.
   Ce script ne fait que remplacer le texte À L'AFFICHAGE. Avant tout
   remplacement il mémorise le français, ce qui permet de revenir en arrière
   sans rechargement. Si ce fichier (ou en.js) manque ou plante, le site
   s'affiche en français, intact : le français ne dépend d'aucun code ici.

   On ne touche QUE du texte : jamais les attributs data-son, data-folio,
   data-piste, data-bio, data-panneau… ni la structure des pages.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var DICO = { en: window.I18N_EN };
  var CLE = 'lrdv-lang';
  var memoireFR = new Map();   // élément -> { html, attrs:{} }
  var courante = 'fr';

  /* ── mémorise le français une seule fois, avant de l'écraser ── */
  function memoriser(el, attrs) {
    if (memoireFR.has(el)) return;
    var snap = { html: el.innerHTML, attrs: {} };
    (attrs || []).forEach(function (a) { snap.attrs[a] = el.getAttribute(a); });
    memoireFR.set(el, snap);
  }

  function estObjet(v) { return v && typeof v === 'object' && !Array.isArray(v); }

  function ecrire(el, valeur) {
    if (estObjet(valeur)) {
      Object.keys(valeur).forEach(function (k) {
        if (k !== 'html') el.setAttribute(k, valeur[k]);
      });
      if (valeur.html != null) el.innerHTML = valeur.html;
    } else {
      el.innerHTML = valeur;
    }
  }

  /* DEUX PASSES, volontairement : on mémorise TOUT le français avant d'écrire
     quoi que ce soit. Sinon, si un sélecteur vise un conteneur et un autre un
     élément qu'il contient, la « sauvegarde du français » du conteneur serait
     prise après coup et contiendrait déjà de l'anglais — le retour au français
     serait alors incomplet. */
  function appliquer(table) {
    var manques = [], travaux = [];
    Object.keys(table).forEach(function (sel) {
      var cibles = document.querySelectorAll(sel);
      if (!cibles.length) { manques.push(sel); return; }
      var v = table[sel];
      cibles.forEach(function (el, i) {
        var valeur = Array.isArray(v) ? v[i] : v;
        if (valeur == null) return;
        memoriser(el, estObjet(valeur) ? Object.keys(valeur).filter(function (k) { return k !== 'html'; }) : []);
        travaux.push([el, valeur]);
      });
    });
    travaux.forEach(function (t) { ecrire(t[0], t[1]); });
    return manques;
  }

  function restaurerFR() {
    memoireFR.forEach(function (snap, el) {
      el.innerHTML = snap.html;
      Object.keys(snap.attrs).forEach(function (k) {
        if (snap.attrs[k] === null) el.removeAttribute(k);
        else el.setAttribute(k, snap.attrs[k]);
      });
    });
  }

  function majMeta(lang) {
    var d = DICO[lang];
    document.documentElement.lang = lang;
    if (lang === 'fr') {
      if (memoireFR.has(document.title)) { /* rien : titre géré ci-dessous */ }
    }
    if (d && lang !== 'fr') {
      if (d.title) document.title = d.title;
      var m = document.querySelector('meta[name="description"]');
      if (m && d.description) { m.__fr = m.__fr || m.content; m.content = d.description; }
    } else {
      document.title = majMeta.titreFR;
      var m2 = document.querySelector('meta[name="description"]');
      if (m2 && m2.__fr) m2.content = m2.__fr;
    }
  }
  majMeta.titreFR = document.title;

  /* ── lien de téléchargement du PDF selon la langue ── */
  function majPdf(lang) {
    var a = document.querySelector('.intro-pdf');
    if (!a) return;
    if (!a.__frHref) { a.__frHref = a.getAttribute('href'); a.__frDl = a.getAttribute('download'); }
    var d = DICO[lang];
    if (lang !== 'fr' && d && d.pdf) {
      a.setAttribute('href', d.pdf.href);
      a.setAttribute('download', d.pdf.download);
    } else {
      a.setAttribute('href', a.__frHref);
      if (a.__frDl) a.setAttribute('download', a.__frDl);
    }
  }

  function definirLangue(lang, memoriserChoix) {
    if (lang !== 'en') lang = 'fr';
    if (lang === 'en' && !DICO.en) return;        // dictionnaire absent → on reste en FR
    restaurerFR();                                 // repart toujours du français
    if (lang === 'en') appliquer(DICO.en.map || {});
    majMeta(lang);
    majPdf(lang);
    courante = lang;
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      var actif = b.getAttribute('data-lang') === lang;
      b.classList.toggle('actif', actif);
      b.setAttribute('aria-pressed', actif ? 'true' : 'false');
    });
    if (memoriserChoix) { try { localStorage.setItem(CLE, lang); } catch (e) {} }
  }

  /* ── boutons FR / EN (écran d'entrée) ── */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-lang]');
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();          // n'active pas l'intro en cliquant la langue
    definirLangue(b.getAttribute('data-lang'), true);
  }, true);

  /* ── langue au chargement : ?lang= > choix mémorisé > français ── */
  var demandee = new URLSearchParams(location.search).get('lang');
  var choisie = demandee;
  if (!choisie) { try { choisie = localStorage.getItem(CLE); } catch (e) {} }
  definirLangue(choisie || 'fr', !!demandee);

  /* Certains éléments sont fabriqués par le JS du site après le chargement
     (switches A/B). On repasse dessus, sans risque : l'opération est idempotente. */
  function rejouer() { if (courante === 'en') definirLangue('en', false); }
  window.addEventListener('load', function () {
    setTimeout(rejouer, 400);
    setTimeout(rejouer, 1500);
  });

  window.LRDV_LANG = { set: definirLangue, get: function () { return courante; } };
})();
