const app = document.querySelector('#app');
const more = document.querySelector('#moreDialog');
const routes = ['start', 'katzen', 'wohnung', 'hilfe', 'naehe', 'abreise', 'kaffee', 'film'];

const head = (over, title, intro) => `<header class="page-heading"><p class="eyebrow">${over}</p><h1>${title}</h1><p>${intro}</p></header>`;
const sectionTitle = text => `<div class="section-title"><h2>${text}</h2></div>`;
const details = (label, body, open = false) => `<details ${open ? 'open' : ''}><summary>${label}</summary><div class="detail-body">${body}</div></details>`;
const info = (heading, body, accent = '') => `<article class="info-card ${accent}"><h3>${heading}</h3>${body}</article>`;
const pills = (...items) => `<div class="pill-row">${items.map(item => `<span class="pill">${item}</span>`).join('')}</div>`;
const command = text => `<span class="command room-command">${text}</span>`;

function routeCard(route, color, symbol, heading, body, small = '') {
  return `<button class="route-card ${color}" type="button" data-route="${route}"><span class="route-symbol" aria-hidden="true">${symbol}</span><h3>${heading}</h3><p>${body}</p>${small ? `<small>${small}</small>` : ''}</button>`;
}

function startPage() {
  return `<section class="page">
    <div class="hero"><div class="hero-content"><p class="eyebrow">Willkommen zu Hause</p><h1>Willkommen in Mendel11</h1><p>Alles Wichtige für eine entspannte Woche mit Wohnung, Smart Home, Peppi und Minna.</p><div class="cat-orbit"><span class="cat-token"><span class="cat-dot black"></span>Peppi</span><span class="cat-token"><span class="cat-dot orange"></span>Minna</span></div></div></div>
    ${sectionTitle('Ankommen in 5 Minuten')}
    <div class="quick-grid">
      <article class="quick-card"><span class="quick-number">1</span><div><h3>Ein Schlüssel</h3><p>Für Haustür, Wohnung, Briefkasten und Keller.</p></div></article>
      <article class="quick-card"><span class="quick-number">2</span><div><h3>WLAN vor Ort</h3><p>QR-Code und Zugangsdaten findet ihr in der Wohnung.</p></div></article>
      <article class="quick-card"><span class="quick-number">3</span><div><h3>Katzen</h3><p>Morgens und abends füttern. Abends sollen beide drinnen sein.</p></div></article>
    </div>
    ${sectionTitle('Was brauchst du?')}
    <div class="dashboard-grid">
      ${routeCard('katzen', 'sage', '◖', 'Peppi & Minna', 'Füttern, Katzenklappe und Abendroutine.', 'Täglich wichtig')}
      ${routeCard('wohnung', 'blue', '▦', 'Wohnung bedienen', 'Räume, Licht, Rollos, Heizung und Geräte.', 'Mit Grundriss')}
      ${routeCard('hilfe', 'peach', '＋', 'Etwas klappt nicht', 'Schnelle Hilfe bei Technik, Heizung und Katzen.', 'Probleme lösen')}
      ${routeCard('naehe', 'yellow', '◎', 'In der Nähe', 'Einkaufen, Bäckerei und ein paar Essensideen.', 'Unsere Auswahl')}
    </div>
  </section>`;
}

function catsPage() {
  return `<section class="page">${head('Katzenbetreuung', 'Peppi & Minna', 'Zwei Mahlzeiten, frisches Wasser, etwas Nähe und der gemeinsame Feierabend drinnen.')}
    <div class="portrait-strip"><article class="cat-profile peppi"><strong>Peppi</strong><small>schwarz · manchmal länger draußen</small></article><article class="cat-profile minna"><strong>Minna</strong><small>rot · eher häuslich</small></article></div>
    ${sectionTitle('Der tägliche Ablauf')}
    <div class="card-grid">
      ${info('Morgens', '<ul><li>Insgesamt eine halbe Dose Nassfutter verteilen.</li><li>Graue Wasserschale frisch machen.</li><li>Katzenklo kontrollieren.</li><li>Etwas Ansprache und Nähe.</li></ul>', 'accent-sage')}
      ${info('Abends', '<ul><li>Wieder eine halbe Dose Nassfutter.</li><li>Prüfen, ob beide Katzen drinnen sind.</li><li>Falls nötig mit Leckerlis locken.</li><li>Etwas Kuschelzeit einplanen.</li></ul>', 'accent-blue')}
    </div>
    <div class="notice"><strong>Futternäpfe</strong><p>Nur mit dem grünen Schwamm säubern. Trockenfutter sparsam wie Leckerlis geben.</p></div>
    ${sectionTitle('Wo ist was?')}
    <div class="card-grid three">${info('Wasser', '<p>Graue Schale links neben der Kommode unter dem Andreaskreuz.</p>')}${info('Leckerlis', '<p>Im Flur, weißer Schub links oben.</p>')}${info('Katzenklo', '<p>Täglich ansehen; meist gehen beide draußen.</p>')}</div>
    ${sectionTitle('Katzenklappe')}
    ${details('Normaler Betrieb', '<p>Öffnet kurz vor 6 Uhr und verriegelt gegen 18 Uhr. Danach können Peppi und Minna hinein, aber nicht mehr hinaus. Fremde Katzen bleiben per Chip draußen.</p>', true)}
    ${details('Rote LED oder schwache Akkus', '<p>Vier AA-Akkus im grünen Schrank rechts neben der Terrassentür laden, zweites Fach von unten. Über Nacht laden und erst am nächsten Morgen wieder einsetzen.</p>')}
    ${sectionTitle('Wenn etwas passiert')}
    ${details('Minna erbricht', '<p>Meist nach einer ungeeigneten Pflanze und gewöhnlich vorübergehend. Bei wiederholtem Erbrechen bitte Bescheid geben.</p>')}
    ${details('Peppi bringt Beute mit', '<ol><li>Andere Räume schließen.</li><li>Peppi ruhig nach draußen lotsen.</li><li>Katzenklappe vorübergehend auf „kein Eintritt“ stellen.</li><li>Danach wieder normal einstellen.</li></ol>')}
    ${details('Langer Tag außer Haus', '<p>Grundsätzlich in Ordnung. Morgens und abends dann bewusst Nähe und Kuschelzeit einplanen.</p>')}
  </section>`;
}

function floorplan() {
  return `<svg class="floorplan-exact" viewBox="0 0 900 1430" role="img" aria-labelledby="plan-title plan-desc">
    <title id="plan-title">Grundriss von Mendel11</title>
    <desc id="plan-desc">Terrasse oben, Bad links oben, Küche und Bahnhof rechts oben, Flur in der Mitte, Kinderzimmer links unten, Schlafzimmer rechts unten und Balkon unten links. Die Räume sind anklickbar.</desc>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-aussen" aria-label="Zu Balkon und Terrasse springen">
      <rect class="floor-room-fill" x="80" y="32" width="310" height="188" fill="#e8d9bc" />
      <text class="floor-label" x="235" y="114" text-anchor="middle">Terrasse</text>
      <text class="floor-sub" x="235" y="142" text-anchor="middle">ca. 5,5 m²</text>
    </g>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-bad" aria-label="Zum Bad springen">
      <rect class="floor-room-fill" x="70" y="220" width="215" height="360" fill="#c8dce5" />
      <text class="floor-label" x="177" y="390" text-anchor="middle">Bad</text>
      <text class="floor-sub" x="177" y="418" text-anchor="middle">ca. 11,05 m²</text>
    </g>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-kueche" aria-label="Zur Küche springen">
      <rect class="floor-room-fill" x="285" y="220" width="355" height="510" fill="#c8dcd0" />
      <text class="floor-label" x="462" y="446" text-anchor="middle">Küche / Essen</text>
      <text class="floor-sub" x="462" y="474" text-anchor="middle">ca. 33,86 m² gesamt</text>
    </g>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-bahnhof" aria-label="Zum Bahnhof springen">
      <rect class="floor-room-fill" x="640" y="220" width="120" height="510" fill="#d9e8e1" />
      <text class="floor-label" x="700" y="455" text-anchor="middle" transform="rotate(90 700 455)">Bahnhof</text>
      <text class="floor-sub" x="700" y="485" text-anchor="middle" transform="rotate(90 700 485)">Separee</text>
    </g>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-flur" aria-label="Zum Flur springen">
      <path class="floor-room-fill" d="M70 580 H285 V730 H70 Z" fill="#e4d9a9" />
      <text class="floor-label" x="177" y="646" text-anchor="middle">Flur</text>
      <text class="floor-sub" x="177" y="674" text-anchor="middle">ca. 4,21 m²</text>
    </g>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-kinderzimmer" aria-label="Zum Kinderzimmer springen">
      <rect class="floor-room-fill" x="70" y="730" width="320" height="545" fill="#b9d2c1" />
      <text class="floor-label" x="230" y="985" text-anchor="middle">Kinderzimmer</text>
      <text class="floor-sub" x="230" y="1014" text-anchor="middle">Zimmer 1 · ca. 22,97 m²</text>
    </g>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-schlafzimmer" aria-label="Zum Schlafzimmer springen">
      <path class="floor-room-fill" d="M390 730 H760 V1275 H675 V1320 H430 V1275 H390 Z" fill="#a9cbd8" />
      <text class="floor-label" x="575" y="985" text-anchor="middle">Schlafzimmer</text>
      <text class="floor-sub" x="575" y="1014" text-anchor="middle">Zimmer 2 · ca. 25,5 m²</text>
    </g>

    <g class="floor-room-hit" tabindex="0" role="button" data-scroll="room-aussen" aria-label="Zu Balkon und Terrasse springen">
      <rect class="floor-room-fill" x="100" y="1275" width="260" height="120" fill="#e8c8b8" />
      <text class="floor-label" x="230" y="1333" text-anchor="middle">Balkon</text>
      <text class="floor-sub" x="230" y="1361" text-anchor="middle">ca. 3,8 m²</text>
    </g>

    <path class="floor-wall" d="M80 220 V32 H390 V220" />
    <path class="floor-wall" d="M70 220 H760 V1275 H675 V1320 H430 V1275 H390 V1395 H100 V1275 H70 V730" />
    <path class="floor-wall" d="M70 220 V580 H70" />
    <path class="floor-wall" d="M285 220 V580" />
    <path class="floor-wall" d="M70 580 H285" />
    <path class="floor-wall" d="M70 730 H760" />
    <path class="floor-wall" d="M390 730 V1275" />
    <path class="floor-wall" d="M640 220 V390 M640 570 V730" />

    <path class="floor-opening" d="M210 580 H278" />
    <path class="floor-opening" d="M285 602 V688" />
    <path class="floor-opening" d="M188 730 H252" />
    <path class="floor-opening" d="M520 730 H582" />
    <path class="floor-opening" d="M390 930 V1034" />
    <path class="floor-opening" d="M235 1275 H310" />
    <path class="floor-opening" d="M148 220 H220 M300 220 H375" />

    <path class="floor-door" d="M210 580 L210 515 M285 602 L350 602 M188 730 L188 795 M520 730 L585 795 M390 930 L455 995 M235 1275 L300 1210" />
    <path class="floor-window" d="M150 220 H220 M302 220 H372 M445 220 H520 M548 220 H618" />
    <path class="floor-window" d="M120 1275 H190 M465 1320 H545 M575 1320 H650" />
  </svg>`;
}

function roomFact(title, body) {
  return `<article class="room-fact"><h3>${title}</h3>${body}</article>`;
}

function roomSection(id, number, title, subtitle, body) {
  return `<section class="room-section" id="${id}"><header class="room-section-header"><div><p class="eyebrow">Raum ${number}</p><h2>${title}</h2><p>${subtitle}</p></div><span class="room-index">${String(number).padStart(2, '0')}</span></header><div class="room-content-grid">${body}</div></section>`;
}

function homePage() {
  const marquee = [
    ['room-bad', 'Bad'], ['room-kueche', 'Küche'], ['room-bahnhof', 'Bahnhof'], ['room-flur', 'Flur'],
    ['room-kinderzimmer', 'Kinderzimmer'], ['room-schlafzimmer', 'Schlafzimmer'], ['room-aussen', 'Außen']
  ].map(([id, label]) => `<button class="chapter-link" type="button" data-scroll="${id}">${label}</button>`).join('');

  return `<section class="page">${head('Wohnung', 'Raum für Raum', 'Der Grundriss folgt jetzt dem hochgeladenen Originalplan. Tippe auf einen Raum oder nutze die Kapitelzeile – alle Informationen stehen anschließend fortlaufend auf dieser Seite.')}
    <article class="floorplan-card">
      <div class="floorplan-toolbar"><div><h2>Grundriss</h2><small>Räume antippen</small></div><span class="pill">nach Originalplan</span></div>
      <div class="floorplan-stage">${floorplan()}</div>
      <p class="floor-note">Zimmer 1 ist das Kinderzimmer, Zimmer 2 das Schlafzimmer. Der Bahnhof ist das schmale Separee innerhalb der großen Küche.</p>
    </article>

    <div class="chapter-marquee-wrap" aria-label="Kapitel der Wohnungsseite"><nav class="chapter-marquee">${marquee}</nav></div>

    ${roomSection('room-bad', 1, 'Bad', 'Licht, Dusche und Wäsche',
      roomFact('Badlicht', '<p>Spiegel- und Deckenlicht werden gemeinsam über den Taster am Eingang ein- und ausgeschaltet.</p>') +
      roomFact('Nachtlicht', '<p>Der kleine runde Taster schaltet ein dezentes Nachtlicht an und wieder aus.</p>') +
      roomFact('Dusche', '<p>Rechter Drehregler: Temperatur. Linker Drehregler nach hinten: Regendusche; nach vorne: Handbrause.</p>') +
      roomFact('Musik & Handtücher', `<p>Vor Ort „Alexa, spiele …“ sagen. Mit „Alexa, ich will duschen“ starten Badlicht, Nachrichten und danach Musik. Handtücher liegen ganz oben im Badregal.</p>${command('Alexa, ich will dunkel duschen')}`)
    )}

    ${roomSection('room-kueche', 2, 'Küche', 'Kochen, Geschirrspüler, Kaffee und Ziggy',
      roomFact('Aktivierungswort', `<p>In der Küche hört Alexa auf <strong>Ziggy</strong>. Das ist besonders praktisch für Timer beim Kochen.</p>${command('Ziggy, stelle einen Timer')}`) +
      roomFact('Licht', '<p>Andreas, Esstisch, Kaffee, Küchenschlange und Obst. „Küche aus“ schaltet auch die beiden Lampen im Bahnhof aus.</p>') +
      roomFact('Geschirrspüler', `<p>Pro Spülgang zwei volle blaue Löffel Pulver. Normalerweise das Effizienzprogramm; bei sehr voller Maschine oder Geruch das schnellere Intensivprogramm.</p>${command('Alexa, starte Effizienzprogramm')}`) +
      roomFact('Geräte & Musik', '<p>Herd, Backofen und Wasserkocher sind normal zu bedienen; es gibt keine Mikrowelle. Entsafter, Mixer und Dampfgarer bitte nur nach Rücksprache. Die Fernbedienung der kleinen Musikanlage liegt in einer Schublade des Esstischs.</p>') +
      roomFact('Kaffee', '<p>Für den einfachen Weg gibt es die Bialetti. Die ausführliche Anleitung für Dedica, Mühle und Milchaufschäumer steht auf der Seite „Kaffee“ im Menü oben rechts.</p>') +
      roomFact('Müll', '<p>Neben der Terrassentür: vorne Restmüll, hinten Plastik. Daneben Papier in der Pappkiste. Biomüll kommt in die kleine Schale auf der Arbeitsplatte.</p>')
    )}

    ${roomSection('room-bahnhof', 3, 'Bahnhof', 'Das schmale Separee als Teil der Küche',
      roomFact('Licht', '<p>Separee links und Separee rechts bilden gemeinsam die Gruppe <strong>Bahnhof</strong>. Da der Bahnhof zur Küche gehört, geht er bei „Küche aus“ ebenfalls aus.</p>') +
      roomFact('Musik', '<p>Der Zipp Mini heißt <strong>Reisezipp</strong>. Er ist nicht mit Alexa verbunden und wird direkt angestreamt.</p>') +
      roomFact('Haushalt', '<p>Im Haushaltsschrank steht ein klassischer Handstaubsauger – für kleine Stellen oft praktischer als McDreamy.</p>') +
      roomFact('Rollo', '<p>Das manuelle Rollo ist etwas kaputt. Entweder festbinden oder am besten in Ruhe lassen.</p>')
    )}

    ${roomSection('room-flur', 4, 'Flur', 'Lichtautomatik, Schlüssel und wichtige Ablagen',
      roomFact('Flurlicht', '<ul><li>kurz oben: zwei Minuten an</li><li>kurz unten: sofort aus</li><li>lang oben: heller</li><li>lang unten: dunkler</li></ul>') +
      roomFact('Dauerlicht', `<p>Der Türkontakt schaltet beim Heimkommen für zwei Minuten ein. Für dauerhaftes Licht Alexa verwenden.</p>${command('Alexa, Flurlicht an')}`) +
      roomFact('Katzen & Türen', '<p>Leckerlis liegen im weißen Schub links oben. Die Innentüren bitte immer leicht offen stehen lassen, sonst mauzen die Katzen.</p>') +
      roomFact('Schlüssel & Sicherungen', '<p>Der eine Schlüssel öffnet alles. Der Sicherungskasten ist direkt rechts neben der Eingangstür unter der Garderobe und innen genau beschriftet.</p>')
    )}

    ${roomSection('room-kinderzimmer', 5, 'Kinderzimmer', 'Zimmer 1 im Grundriss',
      roomFact('Alexa-Lampen', '<p>Ecke, Höhle, Joker, Lissabon, Mallampe, Schaukel, Weihnachten und Mond.</p>') +
      roomFact('Zuordnung', '<ul><li>Höhle: unter dem Bett</li><li>Joker: grüner Lampenschirm</li><li>Mallampe: oben auf dem Schrank</li><li>Weihnachten: roter Stern an der Balkontür</li></ul>') +
      roomFact('Klassische Schalter', '<p>Mond wird meist direkt am Schalter bedient. Die Lichterkette über dem Kinderbett ebenfalls.</p>') +
      roomFact('Musik & Heizung', '<p>Vor Ort einfach „Alexa, spiele …“ sagen; der Lautsprecher heißt Lottezipp. Die Temperatur wird über Alexa oder den Wandregler eingestellt. Doppeldruck aktiviert fünf Minuten Boost.</p>')
    )}

    ${roomSection('room-schlafzimmer', 6, 'Schlafzimmer', 'Zimmer 2 – zugleich Wohnzimmer und Gästezimmer',
      roomFact('Licht', '<p>Billy, Pilz, Rakete, Regal, Simon, Sofa und Kreis. <strong>Stuhl</strong> steuert LeuchteEins und LeuchteZwei; außerdem gibt es die Gruppe <strong>Sofaecke</strong>.</p>') +
      roomFact('Denon-Musikanlage', '<p>Startet meist automatisch über Spotify Connect oder AirPlay. Die Fernbedienung hängt im Säckchen unter dem Lissabon-Bild. Für Musik: Quick Select 2.</p>') +
      roomFact('Filmabend', '<p>Leinwand mit der Kordel herunterziehen, Fire TV einschalten und am Denon Quick Select 1 drücken. Die ausführliche Schrittfolge steht im Menü unter „Film & Musik“.</p>') +
      roomFact('Bettgehzeit', `<p>Schaltet alles aus, nur die Leselampe Simon bleibt an.</p>${command('Alexa, Bettgehzeit')}`) +
      roomFact('Router-Neustart', '<p>Hinter dem linken Sofakissen liegt die Gruppensteckdose für Router, Drucker, Denon und Zigbee-Hub. Nur bei einer größeren gemeinsamen Störung kurz aus- und wieder einschalten.</p>') +
      roomFact('Heizung', '<p>Temperatur über Alexa, Wandregler oder Heizkörperthermostat. Doppeldruck aktiviert fünf Minuten Boost.</p>')
    )}

    ${roomSection('room-aussen', 7, 'Balkon & Terrasse', 'Oben die Terrasse, unten links der Balkon',
      roomFact('Fenster und Türen', '<p>Balkontür und Fenster nur aufmerksam vollständig öffnen: Peppi und Minna springen gern hinaus.</p>') +
      roomFact('Pflanzen', '<p>Bei großer Hitze können Balkon- und Gartenpflanzen gegossen werden. Für den Garten steht ein Schlauch bereit – bitte vorher kurz nachfragen.</p>') +
      roomFact('Katzenklappe', '<p>Sie befindet sich bei der Terrassentür. Im normalen Betrieb muss nichts eingestellt werden; die ausführliche Erklärung steht bei Peppi & Minna.</p>') +
      roomFact('Mülltonnen', '<p>Die Außentonnen stehen im Hinterhof hinter Hausnummer 13 und entsprechen den Müllarten. Dort befindet sich auch Altglas.</p>')
    )}

    <section class="shared-home-section">
      ${sectionTitle('Gemeinsame Steuerung')}
      <div class="action-grid">
        <article class="action-card"><h3>Alles ruhig</h3><p>Schaltet alle Lichter und die Musik aus.</p>${command('Alexa, alles ausschalten')}</article>
        <article class="action-card"><h3>Alle Rollos</h3><p>Einzelne Räume funktionieren analog, zum Beispiel Küchenrollo hoch.</p>${command('Alexa, Rollos runter')}</article>
        <article class="action-card"><h3>Am Touchdisplay</h3><p>Oben hoch, Mitte Pause, unten runter.</p></article>
        <article class="action-card"><h3>Heiz-Boost</h3><p>Doppeldruck am Drehregler aktiviert fünf Minuten volle Heizleistung.</p></article>
      </div>
    </section>
  </section>`;
}

function helpPage() {
  return `<section class="page">${head('Hilfe', 'Wenn etwas nicht klappt', 'Die meisten Probleme lassen sich mit wenigen Handgriffen lösen. Bei Unsicherheit bitte nachfragen.')}
    ${sectionTitle('Schnelle Hilfe')}
    ${details('WLAN, Alexa oder mehrere Geräte reagieren nicht', '<ol><li>Im Schlafzimmer das linke Sofakissen umklappen.</li><li>Gruppensteckdose kurz aus- und wieder einschalten.</li><li>Ein paar Minuten warten.</li></ol><p>Router, Drucker, Denon und Zigbee-Hub starten dabei neu.</p>', true)}
    ${details('Ein Heizkörper wird extrem heiß', '<ol><li>Batterien aus der mittleren Schublade des Buffetschranks einsetzen.</li><li>Am Thermostat doppelt drücken.</li><li>Kalibrierung notfalls mehrfach wiederholen.</li><li>Warten, bis das Ventil hörbar schließt.</li></ol>')}
    ${details('Katzenklappe zeigt rote LED', '<p>Vier AA-Akkus im grünen Schrank rechts neben der Terrassentür laden. Erst am nächsten Morgen wieder einsetzen.</p>')}
    ${details('McDreamy soll saugen', '<p>„Alexa, starte McDreamy“. An Schwellen gegebenenfalls helfen. Ins Bad manuell setzen. Der Handstaubsauger steht im Bahnhof.</p>')}
    ${details('Geschirrspüler starten', '<p>Zwei volle blaue Löffel Pulver. Standard: „Alexa, starte Effizienzprogramm“. Intensiv bei sehr voller Maschine oder Geruch.</p>')}
    ${sectionTitle('Sicherungen & kleine Notfälle')}
    <div class="card-grid">${info('Sicherungskasten', '<p>Im Flur direkt rechts neben der Eingangstür unter der Garderobe. Innen genau beschriftet.</p>', 'accent-yellow')}${info('Pflaster', '<p>Im kleinen weißen Schränkchen im Bad. Einen vollständigen Erste-Hilfe-Kasten gibt es nicht.</p>', 'accent-peach')}</div>
    ${sectionTitle('Tierarzt')}
    ${info('Tierarztpraxis am Amalienpark', '<p>Breite Straße 2A · 13187 Berlin-Pankow</p><p><strong>030 4868702</strong></p><p>Außerhalb der Öffnungszeiten bitte zuerst bei uns melden.</p>', 'accent-sage')}
    <div class="notice"><strong>Nachbarschaft</strong><p>Die Hausgemeinschaft ist freundlich und unkompliziert. Lokale Notfallkontakte teilen wir individuell.</p></div>
  </section>`;
}

function coffeePage() {
  return `<section class="page">${head('Küche', 'Kaffee', 'Für den schnellen Weg gibt es die Bialetti. Alternativ stehen Mühle, Dedica und Milchaufschäumer bereit.')}
    <div class="card-grid">${info('Einfach: Bialetti', '<p>Die unkomplizierte Variante.</p>', 'accent-yellow')}${info('Siebträger: Grundrezept', '<ul><li>Mühle etwa auf Mahlgrad 7.</li><li>Siebträger befüllen und tampen.</li><li>Beide horizontalen Markierungen müssen sichtbar bleiben.</li></ul>', 'accent-blue')}</div>
    ${sectionTitle('De’Longhi Dedica')}
    <article class="step-card"><ol class="steps"><li>Einsatz für einfachen oder doppelten Shot wählen.</li><li>Siebträger einspannen.</li><li>Passende Taste drücken.</li><li>Kaffeemehl in die Knock Box geben.</li></ol></article>
    ${details('Wassertank leer', '<p>Über die Milchdüse einmal frei laufen lassen beziehungsweise entlüften. Die genaue Anleitung liegt rechts vom Kühlschrank.</p>')}
    ${details('Cold Brew', '<p>Bitte die Anleitung in der Schublade rechts vom Kühlschrank verwenden.</p>')}
    ${sectionTitle('Milchaufschäumer')}
    <article class="step-card"><ol class="steps"><li>Milch einfüllen, bis der magnetische Ring bedeckt ist.</li><li>Warm oder kalt wählen.</li><li>Start drücken.</li><li>Fertigen Schaum leicht klopfen.</li></ol><p>Cappuccinotassen stehen über Maschine und Mühle.</p></article>
  </section>`;
}

function filmPage() {
  return `<section class="page">${head('Schlafzimmer', 'Film & Musik', 'Denon streamt direkt. Für Film braucht es Leinwand, Fire TV und Quick Select 1.')}
    ${sectionTitle('Musik hören')}
    ${info('Denon', `<p>Startet meist automatisch über Spotify Connect oder AirPlay.</p>${pills('Spotify Connect', 'AirPlay', 'Quick Select 2')}<p>Fernbedienung im Säckchen unter dem Lissabon-Bild.</p>`, 'accent-blue')}
    ${sectionTitle('Filmabend')}
    <article class="step-card"><ol class="steps"><li>Leinwand mit der Kordel herunterziehen.</li><li>Fire TV einschalten.</li><li>Am Denon Quick Select 1 drücken.</li><li>Falls nötig am Fire-TV-Rad hoch oder runter drücken.</li><li>Lautstärke anpassen.</li></ol></article>
    <div class="notice"><strong>Leinwand hoch</strong><p>Leicht nach unten ziehen; sie rollt dann automatisch hoch.</p></div>
    ${sectionTitle('Musik in den Räumen')}
    <div class="card-grid three">${info('Bad', '<p>„Alexa, spiele …“. Lautsprecher: Badzipp.</p>')}${info('Kinderzimmer', '<p>„Alexa, spiele …“. Lautsprecher: Lottezipp.</p>')}${info('Bahnhof', '<p>Direkt auf Reisezipp streamen.</p>')}</div>
  </section>`;
}

function nearbyPage() {
  const map = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const place = (type, name, body, query, recommended = '') => `<article class="place-card ${recommended}"><span class="place-type">${type}</span><h3>${name}</h3><p>${body}</p><a href="${map(query)}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>`;
  return `<section class="page">${head('Pankow', 'In der Nähe', 'Eine kurze Auswahl für den Alltag. Öffnungszeiten bitte aktuell prüfen.')}
    <div class="place-grid">
      ${place('Unsere Empfehlung', 'BIO COMPANY', 'Die größere Filiale in der Breiten Straße.', 'BIO COMPANY Breite Straße 33 Berlin', 'recommended')}
      ${place('Großer Einkauf', 'Kaufland', 'Praktisch für einen großen Einkauf.', 'Kaufland Breite Straße Berlin Pankow')}
      ${place('Gut gelegen', 'EDEKA am Garbátyplatz', 'Häufig ziemlich voll.', 'EDEKA Garbátyplatz Berlin')}
      ${place('Bäckerei', 'Madame Eule', 'Unsere klare Bäckerei-Empfehlung.', 'Madame Eule Berlin Pankow', 'recommended')}
      ${place('Vietnamesisch', 'Baba đu', 'Nahe Hadlichstraße und Stiftsweg.', 'Baba du Restaurant Berlin Pankow')}
      ${place('Pizza', 'Farina 00', 'Eine gute Option in der Umgebung.', 'Farina 00 Berlin Pankow')}
    </div>
    ${sectionTitle('Drogerien')}${info('dm & Rossmann', '<p>dm am Garbátyplatz und im Rathaus-Center; Rossmann ebenfalls im Rathaus-Center.</p>')}
  </section>`;
}

function departurePage() {
  return `<section class="page">${head('Zum Schluss', 'Abreise', 'Eine freundliche Abschlussliste, keine strenge Pflicht.')}
    <article class="list-card"><h3>Gern erledigen</h3><ul class="check-list"><li>Müll rausbringen.</li><li>Bett abziehen.</li><li>Geschirrspüler starten.</li><li>Grob ordentlich hinterlassen.</li><li>Briefkasten leeren.</li></ul></article>
    ${sectionTitle('Katzen & Schlüssel')}
    <div class="card-grid">${info('Späte Rückkehr', '<p>Wenn wir erst später kommen, den Katzen gern eine Extraportion Futter geben.</p>', 'accent-sage')}${info('Schlüssel', '<p>Am individuell vereinbarten Ort hinterlegen.</p>', 'accent-blue')}</div>
    <div class="notice"><strong>Danke</strong><p>Vor allem dafür, dass Peppi und Minna Gesellschaft hatten.</p></div>
  </section>`;
}

const pages = {
  start: startPage,
  katzen: catsPage,
  wohnung: homePage,
  hilfe: helpPage,
  naehe: nearbyPage,
  abreise: departurePage,
  kaffee: coffeePage,
  film: filmPage
};

const current = () => {
  const route = location.hash.replace(/^#\/?/, '');
  return routes.includes(route) ? route : 'start';
};

function go(route) {
  const safeRoute = routes.includes(route) ? route : 'start';
  if (location.hash === `#/${safeRoute}`) render();
  else location.hash = `/${safeRoute}`;
  if (more.open) more.close();
}

function bindRoutes() {
  document.querySelectorAll('[data-route]').forEach(element => {
    if (element.dataset.bound) return;
    element.dataset.bound = '1';
    element.addEventListener('click', () => go(element.dataset.route));
  });
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function bindSectionJumps() {
  document.querySelectorAll('[data-scroll]').forEach(element => {
    const jump = () => scrollToSection(element.dataset.scroll);
    element.addEventListener('click', jump);
    if (element.matches('g')) {
      element.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          jump();
        }
      });
    }
  });
}

function render() {
  const route = current();
  app.innerHTML = pages[route]();
  document.querySelectorAll('.nav-item').forEach(item => {
    const active = item.dataset.route === route;
    item.classList.toggle('active', active);
    if (active) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });
  bindRoutes();
  bindSectionJumps();
  scrollTo({ top: 0, behavior: 'auto' });
  const names = { katzen: 'Peppi & Minna', wohnung: 'Wohnung', hilfe: 'Hilfe', naehe: 'In der Nähe', abreise: 'Abreise', kaffee: 'Kaffee', film: 'Film & Musik' };
  document.title = route === 'start' ? 'Mendel11' : `${names[route]} · Mendel11`;
}

document.querySelector('#moreButton').addEventListener('click', () => more.showModal());
document.querySelector('#closeMore').addEventListener('click', () => more.close());
more.addEventListener('click', event => {
  const rect = more.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) more.close();
});
addEventListener('hashchange', render);
bindRoutes();
render();
