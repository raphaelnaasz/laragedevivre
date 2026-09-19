/* ═══════════════════════════════════════════════════════════════════
   en.js — traduction anglaise du dossier PDF.
   Indexée par index de page (ordre des .page dans dossier.html) puis par
   sélecteur CSS. Le français n'est jamais modifié : ce fichier ne fait que
   remplacer l'affichage quand l'URL porte ?lang=en.

   RÈGLES APPLIQUÉES
   • Titre du spectacle : « La Rage de Vivre » reste en français (décision RN).
   • Titres d'œuvres : original publié (Really the Blues, Beneath the Underdog,
     The Investigation, What Is the Creative Act?, Lover for a Day, The Bacchae,
     The Seagull, Romeo and Juliet…).
   • Noms propres, théâtres, compagnies, titres de morceaux : inchangés.
   • CITATIONS DE MEZZ (pages 5, 6, 7) : Really the Blues est écrit EN ANGLAIS ;
     les citations du dossier sont des traductions françaises. L'original n'a pas
     pu être récupéré (archive.org en prêt restreint). Décision de RN : on LAISSE
     LE FRANÇAIS, en le signalant dans l'attribution. → à remplacer par le texte
     original de Mezzrow le jour où on l'a sous la main.
   • Glissant : la formulation exacte de la traduction Betsy Wing n'a pas été
     retrouvée ; traduction propre, signalée « trans. from the French ».
   ═══════════════════════════════════════════════════════════════════ */
window.I18N_EN = {

  title: "La Rage de Vivre — dossier",

  global: {
    ".bio-page .entete span:last-child": "BIOGRAPHY"
  },

  pages: {

    /* ── 0 · Accès à la version en ligne ── */
    0: {
      ".p0-intro": "This dossier also exists online — interactive, and meant to be heard.",
      ".p0-flash": "Scan or click for the online version"
    },

    /* ── 1 · Couverture ── */
    1: {
      ".byline": "From the memoir by<br><span class=\"mezz-nom\">Mezz Mezzrow</span><br>and Bernard Wolfe",
      ".noms": "Raphaël Naasz<span class=\"credits-role\">writer, performer, musician</span><br>Margaux Eskenazi<span class=\"credits-role\">director</span><br>Julia Baudet<span class=\"credits-role\">assistant director</span>",
      ".creation": "Creation 2027-2028"
    },

    /* ── 2 · Pourquoi ce livre ── */
    2: {
      ".bloc-titre": "Why this book",
      ".corps": "<p>My history with jazz is, first of all, a history of absences.</p>" +
        "<p>My older brother was a saxophonist. He was fifteen years older than me, and like any much younger brother, I loved what he loved, I took everything from him, I copied him, forever trying to resemble him in every way; he was my idol.</p>" +
        "<p>When I was thirteen he left to settle in Canada — not a violent break, more a polite disappearance of the bond, a silent divorce. The jazz he played and loved stayed behind, on this side of the Atlantic, in the space he had left. I began by studying classical music — the bassoon first — then I started listening to jazz the way you listen to someone who is no longer there. To make his absence exist as something other than a void.</p>"
    },

    /* ── 3 ── */
    3: {
      ".corps": "<p>That particular relationship to jazz — a music loved because there is a lack behind it, inhabited rather than possessed, reached only by returning to it again and again — is perhaps the first thing I share with Mezzrow. Not the music itself. The structure.</p>" +
        "<p>I discovered La Rage de vivre at the CNSAD, in my third year, on the advice of Xavier Gallais, Margaux Eskenazi and Florient Azoulay. I had been given the parade scene to play — without yet any of the questions this work would end up raising. A few weeks earlier, Camille — a classmate — had died of cardiac arrest in front of me, in the street. I tried to revive her with a defibrillator that didn’t work. It didn’t work.</p>" +
        "<p>Ten years later I wrote a text about that moment. I built it by taking up the incidental form of John Coltrane’s solos — those cries I could hear deep inside me and forced myself to swallow so as to stay lucid and try to save her. And even in that gesture — borrowing Coltrane’s form to say what I could not shout — I was using a cultural language that was not my own.</p>"
    },

    /* ── 4 ── */
    4: {
      ".corps": "<p>And that is what comes back now as a question I cannot dodge: even what is most intimate in my relationship to jazz is already a succession of borrowings, of absences inhabited by forms taken from elsewhere.</p>" +
        "<p>By what right?</p>" +
        "<p>I cannot fully answer that question: I am white, I am not Jewish, I am not American. I have no obvious legitimacy in carrying this story. Mezz Mezzrow had none either — no racial legitimacy, little musical legitimacy, no narrative legitimacy. And yet there he was — whole, burning, defenceless, convinced that he was. And that may also be the condition of the actor, of the performer-musician I have become.</p>" +
        "<p>This book imposed itself on me at a time when I was meeting death for the first time. I am not returning to it in order to adapt it. I am returning to it in order to answer it — a dialogue, ten years on, made of agreements, disagreements, reconciliations and contradictions held together, with nothing ever closing.</p>"
    },

    /* ── 5 · Citations (texte laissé en français, attribution adaptée) ── */
    5: {
      ".cadre4:nth-of-type(1) .qui": "Mezz Mezzrow — Really the Blues, p. 423 · French translation",
      ".cadre4:nth-of-type(2) .qui": "Mezz Mezzrow — Really the Blues, p. 424 · French translation"
    },

    /* ── 7 · Parade (suite) — attribution adaptée, texte laissé en français ── */
    7: {
      ".credit-src": "— Milton Mezzrow &amp; Bernard Wolfe, <em>Really the Blues</em>, 1946, pp. 422–424 · quoted here in the French translation (<em>La Rage de Vivre</em>)"
    },

    /* ── 8 · Une vie ── */
    8: {
      ".bloc-titre": "A life",
      ".corps": "<p>Milton Mesirow, known as “Mezz Mezzrow”, was born in 1899 on the West Side of Chicago, into a lower-middle-class Jewish family of Russian origin. He was sent to the reformatory at Pontiac, Illinois. It was there that he discovered the blues and learned music — first by hearing it sung by the Black inmates, then by playing it with them, on saxophone, in the prison’s mixed band. It was in playing that he felt, for the first time, that he was one of them.</p>" +
        "<p>It was there too that he witnessed a race riot, from which he emerged shaken. The connection took hold: a café owner in Missouri had thrown him out, Jew that he was, taking him for a Black man, and the rabbi of his childhood taught that Moses and Solomon were Black. Jews and Black people, he concluded, are on the same side. He left Pontiac with his mind made up: he would be a musician, a “Black musician”, and would reveal the blues as only Black people know how.</p>" +
        "<p>The music he discovered had no reigning soloist yet. The New Orleans style is a collective polyphony, almost anonymous, in which cornet, clarinet and trombone wind together into a single march — a joy wrested from segregation and three hundred years of slavery, carried in the body as a shared necessity.</p>"
    },

    /* ── 9 · 1920 ── */
    9: {
      ".corps": "<p>In the Chicago of the 1920s, Mezz becomes a figure on the scene. He crosses paths with King Oliver, Armstrong, Bechet, Jimmy Noone, Baby Dodds, the young Bix Beiderbecke. Admiration turns to devotion: he tells of driving for hours to Indiana, an Armstrong record under his arm, to play it for his friend Bix.</p>" +
        "<p>And it is precisely in those years that jazz shifts its centre of gravity. Armstrong invents the solo: a single voice detaches itself from the polyphony, the improvised chorus becomes the heart of the music. The Chicago style Mezz learns is already a white derivation of that Black invention. He is aware of it, and he writes it.</p>" +
        "<p>He is a clarinettist, a saxophonist, and technically not good enough. Boris Vian notes that he “tends to let his clarinet play all by itself” and relies on “clichés that quickly pall”. He moves among the greatest and he is not as good as they are. He knows it. And yet nothing dents his faith: he believes himself the bearer of what cannot be learned — the spirit of the origins, the joy of the real blues.</p>"
    },

    /* ── 10 · 1930 ── */
    10: {
      ".corps": "<p>Jazz, having already left New Orleans for Chicago, is now fleeing towards New York. Mezz follows: contracts grow scarce, and just before the crash of 1929 he arrives in Harlem.</p>" +
        "<p>There he finds unemployment and poverty. To get by, he starts selling Mexican marijuana and becomes the most famous weed dealer in the city. He speaks jive, immerses himself entirely in Black culture: he says he enters the community through service, hustle, language and shared daily life.</p>" +
        "<p>The 1930s are also the years when jazz becomes an industry. Swing — big bands, records, hits — is music made to get crowds dancing. This is the age of Tin Pan Alley, the “street of pots and pans” where hits are turned out on an assembly line. It is exactly what Mezz despises.</p>" +
        "<p>Against that industrialisation he turns back to the origins: he becomes one of the architects of the New Orleans revival. In 1938, for Hugues Panassié, he finances sessions bringing together Tommy Ladnier and Sidney Bechet. He dreams of a mixed band with Louis Armstrong, manages it for a few weeks, then has to stop, caught up by opium and heroin.</p>"
    },

    /* ── 11 · 1940 ── */
    11: {
      ".corps": "<p>In 1940 he is arrested at the door of a club with some sixty joints on him. In prison he demands to be treated as a Black man and obtains his transfer to the Black section — and it is from there that the central scene of the book will come, the parade.</p>" +
        "<p>He has married Johnnie Mae, a Black woman; he lives in Harlem; he declared himself a “voluntary negro” on his draft card. He is not playing at being Black: he is convinced he has “crossed the line” for good.</p>" +
        "<p>And at the very moment he is sinking into the past of jazz, a few streets away, without him, jazz is already inventing its future. At Minton’s Playhouse, Gillespie, Parker and Monk are working out bebop: punishing tempos, inverted changes, saturated harmony. The aim is explicit: to discourage those who come to take jazz over without paying its price. Complexity becomes a weapon, a border.</p>" +
        "<p><em>Really the Blues</em> appears in 1946, co-written with Bernard Wolfe — Jewish, a Yale graduate, once Trotsky’s secretary. The book lands on the exact hinge: Mezz writes the monument to the jazz of the origins at the very moment bebop has overturned everything.</p>"
    },

    /* ── 12 · 1950 ── */
    12: {
      ".corps": "<p>From here, two tempos part ways. Mezz’s stops: after the war he freezes into the guardian of a “pure” jazz and fights the bebop he judges decadent. He takes part in the first Nice Jazz Festival in 1948 and settles in France; Paris becomes his home for his last twenty years. The other tempo, the music’s, carries on without him: modal jazz opens up the changes (Miles, <em>Kind of Blue</em>), hard bop hardens bebop with a return to blues and gospel (Mingus). And this advance is not only formal: it is political.</p>" +
        "<p>In the America of the 1950s and 1960s — the marches, the bus boycotts, civil rights — the music becomes a claim: Black pride, anger, the assertion of a belonging no one else has the right to sign (Mingus, Max Roach, the Coltrane of <em>Alabama</em>, Coleman). In 1957, Baldwin was writing <em>Sonny’s Blues</em>.</p>"
    },

    /* ── 13 · 1960 ── */
    13: {
      ".corps": "<p>Then free jazz.</p>" +
        "<p>Ornette Coleman opens the breach — a jazz with no fixed changes, no imposed chord, where the melody goes where it likes; Coltrane commits to it in turn, soon Albert Ayler, Archie Shepp. They break with tonality, with tempo, with the chorus structure, and reconnect with the blues of the origins, but freed from every rule. With Coltrane the saxophone becomes a trance: torn phrases piling over one another at an unheard-of speed — what critics will call <em>sheets of sound</em> — a vertiginous drop into the low register followed at once by a hallucinatory climb into the highest. A rage, a dark and tragic violence, inseparable from the America of those years. It is no longer a school, it is an escape offered to everyone: once again jazz leaves behind everything it could be assigned to.</p>"
    },

    /* ── 14 ── */
    14: {
      ".corps": "<p>In the span of a single life, jazz went from the street band to abstraction, to political struggle. Mezz dies in Paris in 1972, faithful to the end to the music he loved, buried at Père-Lachaise, the guardian of a music jazz had left behind thirty years earlier.</p>" +
        "<p>It is the story of a man who wanted to <em>become</em> what he loved — and what his own gaze, in its turn, was manufacturing.</p>"
    },

    /* ── 16 · Note d'intention (I) ── */
    16: {
      ".ni-corps": "<p class=\"titre-intention\">Statement of intent</p>" +
        "<p>Ten years ago, <em>La Rage de Vivre</em> imposed itself on me. The autobiography of a Jewish clarinettist and saxophonist from Chicago who spent twenty years trying to become Black by sheer will. At the book’s climax, during a parade in the prison on Hart’s Island, he lets something go: he improvises, and believes he is finally playing the blues. He believes he grasps its message: life is good, it is good to be alive, in spite of the harshness of life.</p>" +
        "<p>For me that message is not so much the blues’ as his own, Milton Mezzrow’s. In improvising, Mezz finally accepts that he will never truly be one of those Black musicians he loves so much, and he hands us his own discovery: <em>to stop being afraid of it</em>. The joy he draws from it comes neither from conquest nor from possession; it comes from his letting go. A dissonant harmony, a jazz harmony.</p>" +
        "<p>That is what this show will be after: letting go. Through a device that puts it into play — me on stage, and the audience with me: what it means to give oneself up, to let go of what one loves.</p>",
      ".ni-inset figcaption": "Antoine Watteau — Pierrot, c. 1718"
    },

    /* ── 17 · Note d'intention (II) ── */
    17: {
      ".ni-corps": "<p>One principle of playing will structure the stage: I will not perform Black artists or thinkers without acknowledging the cost. It is an ethical rule I impose on myself so as not to repeat certain racist structures already present in the book: I will embody by preference the white figures facing them — a Jewish psychoanalyst in session with Charles Mingus; Henri Renaud facing Thelonious Monk; Boris Vian receiving this music from France; Dizzy Gillespie interviewed on the radio.</p>" +
        "<p>Some of these voices will come through sounding objects — transducers that make the very material of the object vibrate. Mingus’s voice coming out of the psychoanalyst’s couch; Dizzy through the radio, the object by which jazz arrived in France…</p>" +
        "<p>Sound will not merely accompany me: it will be a player in the game with me. This whole sound world arrives from outside the stage and can, at any moment, take power over me. That escape is the very nature of this music — what Fred Moten calls fugitivity, that which, in the history of Blackness, resists possession. I cannot possess this music. But it is what makes me play.</p>"
    },

    /* ── 18 · Note d'intention (III) ── */
    18: {
      ".ni-corps": "<p>One dream remains. Mezz wanted to put together a mixed band with Armstrong: it lasted a few weeks. I dream of taking up his gesture — gathering a contemporary band, mixed and gender-balanced, to compose the score of the show and to collect their spoken voices: what jazz means in their lives today. The living would join the dead in the sound world of the show. A creolisation, in Glissant’s sense. The Kaddish does not mention death: it praises the greatness of the world, it organises a temporal cohabitation with absence.</p>" +
        "<p><em>La Rage de Vivre</em> is a Kaddish that does not know itself: Mezz sanctifies Black musicians with a liturgical fervour, builds with his words a duration around a Blackness he cannot inhabit. The praise constructs the absence it meant to fill.</p>" +
        "<p>Allen Ginsberg had sensed it: in 1961 he opens his own <em>Kaddish</em> — for his mother Naomi — reciting the Jewish prayer while listening to Ray Charles. Two parallel forms of speech addressed to an absence, both refusing to name what is missing, both creating a duration around the void.</p>" +
        "<p>I am carrying this project with Margaux Eskenazi. Our shared language has been built over ten years and four productions. This solo extends it: a single body on stage, but a rhizome of a show, in Glissant’s sense — no single root, but multiple roots that make relation: the dead, the living, the objects, the control booth, the audience. Alone on stage, and never the centre.</p>" +
        "<p class=\"signature\">Raphaël Naasz</p>",
      ".ni-cite": "“But to the single root that kills all around it, shall we not dare to set, by way of enlargement, the root as rhizome — the root that opens Relation?”<span class=\"cite-sig\">Édouard Glissant, <em>Poétique de la Relation</em>, 1990 · trans. from the French</span>"
    },

    /* ── 21 · Bio Raphaël Naasz ── */
    21: {
      ".bio-role": "Writer, performer, musician",
      ".bio-texte": "<p>Raphaël Naasz trained first in music — bassoon and cello — at the Nice conservatoire. That musical training remains at the heart of his work as an actor and director, and the relationship between theatre and music runs through his whole career. In 2013 he entered the Conservatoire National Supérieur d’Art Dramatique (CNSAD), where he worked with Sandy Ouvrier, Nada Strancar, Mario Gonzales, Stuart Seide and Xavier Gallais.</p>" +
        "<p>In 2016 he co-directed, with Antoine Sarrasin, “Blue Train”, a music-theatre piece after Blaise Cendrars’s <em>Prose of the Trans-Siberian</em>, created at the Théâtre de l’Étoile du Nord at the invitation of Sarah Tick. That same year he appeared in auteur cinema in Philippe Garrel’s <em>Lover for a Day</em>.</p>" +
        "<p>In the theatre he has played in “Lourdes” by Paul Toucang (Théâtre National de la Colline, 2017) and in Euripides’s <em>The Bacchae</em>, directed by Marcus Borja, whose work is built on chorus and voice (2017). In 2019 he joined Margaux Eskenazi for “Et le Cœur Fume Encore”. He was Hippolytus in <em>Phèdre</em> (2020), then Treplev in <em>The Seagull</em> (2022), two productions by Brigitte Jacques-Wajeman at the Théâtre de la Ville. He rejoined Margaux Eskenazi for “1983” (2023), then for “Kaddish, la femme chauve en peignoir rouge”, created at the Théâtre Gérard Philipe in Saint-Denis in April 2026.</p>" +
        "<p>In 2022 he made a first short film, “Hémisphère”, and trained in video editing. He is now developing “La Rage de Vivre”, a solo music-theatre piece around jazz, extending the work begun with “Blue Train”.</p>" +
        "<p>Raphaël Naasz performs in <em>Kaddish, la femme chauve en peignoir rouge</em> (Cie Nova, created 2026). <em>La Rage de Vivre</em> hopes to extend, as a solo, certain questions from that cycle — memory, Jewishness, legitimacy — displaced towards jazz.</p>"
    },

    /* ── 22 · Bio Margaux Eskenazi ── */
    22: {
      ".bio-role": "Director",
      ".bio-texte": "<p>A graduate of a research Master’s in Theatre Studies at Paris III and of the directing department of the CNSAD in 2014, Margaux Eskenazi founded Compagnie Nova in 2007. With the company, her work is strongly rooted in Seine-Saint-Denis, where since 2007 she has developed many projects on the territory in connection with her productions. She also teaches in the higher drama schools, leading workshops with students: the École de la Comédie de Saint-Étienne, the ESAD in Paris, the École du Nord in Lille. After working on repertoire texts, she has since 2016 pursued a new line of research she never stops experimenting with: a theatre bringing together the intimate, the political and the poetic. Each show is an exploration of several materials, bringing forth a polysemic and rhizomatic theatricality. All her research centres on the work of memory and on the missing narratives that help us think our identities.</p>" +
        "<p>Between 2016 and 2023 she developed a triptych, “Writing in a Dominated Land”, devoted to colonial amnesia and to the poetics of decolonisation: <em>Nous sommes de ceux qui disent non à l’ombre, Et le cœur fume encore, 1983.</em> In the spring of 2021 Margaux Eskenazi created <em>Gilles ou qu’est-ce qu’un samouraï</em>, after Gilles Deleuze’s lecture <em>What Is the Creative Act?</em></p>" +
        "<p>In January 2024 she created <em>Si Vénus avait su</em>, a piece for non-theatre venues, commissioned by the Théâtre de la Poudrerie (Sevran) and devoted to socio-aestheticians. She also created the graduating show of the Belle Troupe in June 2024 at the Théâtre de Nanterre-Amandiers, <em>Kaddish-mémoires</em>, around the literature of Imre Kertész. In the summer of 2025 she created a piece devoted to the girls of the Bon Pasteur for the 17<sup>th</sup> edition of the Nouveau Théâtre Populaire festival.</p>" +
        "<p>For the 2025-2026 season, Margaux Eskenazi created <em>Kaddish, la femme chauve en peignoir rouge</em>, around Jewish identities in France today. She is preparing a young-audience show for autumn 2026 and is adapting, with Julie Deliquet and Julie André, Peter Weiss’s <em>The Investigation</em>, scheduled for autumn 2027 at the Théâtre National de la Colline.</p>"
    },

    /* ── 23 · Bio Julia Baudet ── */
    23: {
      ".bio-role": "Assistant director",
      ".bio-texte": "<p>Originally from Annecy, Julia Baudet moved to Paris at eighteen to train in theatre. She studied successively at La Générale, at the Studio Théâtral d’Ivry and then at the Conservatoire of the 14<sup>th</sup> arrondissement, before continuing her training in London at the Fourth Monkey Actor Training Company, from which she graduated in 2021.</p>" +
        "<p>Since returning to France she has worked with several theatre companies, notably La Tronçonneuse, led by Ambre Maton, J’ai tué mon bouc, led by Louis Berthelémy, the collective Les Assoiffés d’Azur, and the Compagnie des Méridiens. With the latter she took part in a schools tour around a contemporary text on youth, presented in several venues in eastern France.</p>" +
        "<p>Between 2024 and 2026 she worked with Les Assoiffés d’Azur on several forms inspired by <em>Romeo and Juliet</em>, continuing her exploration of Shakespeare’s work. In 2026, with the company J’ai tué mon bouc, she took part in the creation of an Elizabethan cabaret mixing theatre and song, presented at the Théâtre de la Barcarolle and then at the Théâtre d’Hardelot.</p>" +
        "<p>She also works as an assistant director, with Louis Berthelémy on <em>PLOUK(S)</em> in 2019 and then with Christophe Montenez of the Comédie-Française on <em>Mondes possibles</em> in 2026.</p>" +
        "<p>Alongside her acting she pursues, self-taught, a body of drawing and painting. Her work has been exhibited in Annecy, Paris and London. She is also involved in organising the Festival de Malaz in Annecy.</p>"
    },

    /* ── 24 · Contacts ── */
    24: {
      ".contact-liste": "<li>" +
        "<span class=\"c-nom\">Raphaël Naasz</span>" +
        "<span class=\"c-role\">writer, performer, musician</span>" +
        "<span class=\"c-mail\">raphael.naasz@gmail.com</span>" +
        "<span class=\"c-tel\">+33 7 66 00 48 38</span>" +
        "</li><li>" +
        "<span class=\"c-nom\">Margaux Eskenazi</span>" +
        "<span class=\"c-role\">director</span>" +
        "<span class=\"c-mail\">margaux@lacompagnienova.org</span>" +
        "<span class=\"c-tel\">+33 6 63 36 31 60</span>" +
        "</li><li>" +
        "<span class=\"c-nom\">Julia Baudet</span>" +
        "<span class=\"c-role\">assistant director</span>" +
        "<span class=\"c-mail\">juliabaudet74@gmail.com</span>" +
        "<span class=\"c-tel\">+33 6 49 15 40 42</span>" +
        "</li>"
    }
  },

  /* Ajustements de corps pour l'anglais (rempli après mesure du débordement). */
  styles: {}
};
