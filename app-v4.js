function startPageV4() {
  return `<section class="page">
    <div class="hero"><div class="hero-content"><p class="eyebrow">Willkommen zu Hause</p><h1>Willkommen in Mendel11</h1><p>Alles Wichtige für eine entspannte Woche mit Wohnung, Smart Home, Peppi und Minna.</p><div class="cat-orbit"><span class="cat-token"><span class="cat-dot black"></span>Peppi</span><span class="cat-token"><span class="cat-dot orange"></span>Minna</span></div></div></div>
    ${sectionTitle('Ankommen in 5 Minuten')}
    <div class="quick-grid">
      <article class="quick-card"><span class="quick-number">1</span><div><h3>Ein Schlüssel</h3><p>Für Haustür, Wohnung, Briefkasten und Keller.</p></div></article>
      <article class="quick-card"><span class="quick-number">2</span><div><h3>WLAN vor Ort</h3><p>QR-Code und Passwort hängen am grauen Regal direkt am Kücheneingang.</p></div></article>
      <article class="quick-card"><span class="quick-number">3</span><div><h3>Katzen</h3><p>Morgens und abends füttern. Abends sollen beide drinnen sein.</p></div></article>
    </div>
    ${sectionTitle('Was brauchst du?')}
    <div class="dashboard-grid">
      ${routeCard('katzen', 'sage', '◖', 'Peppi & Minna', 'Füttern, Katzenklappe und Abendroutine.', 'Täglich wichtig')}
      ${routeCard('wohnung', 'blue', '▦', 'Wohnung bedienen', 'Räume, Licht, Rollos, Heizung und Geräte.', 'Mit Grundriss')}
      ${routeCard('hilfe', 'peach', '＋', 'Etwas klappt nicht', 'Schnelle Hilfe bei Technik, Heizung und Katzen.', 'Probleme lösen')}
      ${routeCard('naehe', 'yellow', '⌂', 'Orte', 'Einkaufen, Essen und Ausflüge in Berlin.', 'Unsere Auswahl')}
    </div>
  </section>`;
}

function catsPageV4() {
  return `<section class="page">${head('Katzenbetreuung', 'Peppi & Minna', 'Zwei Mahlzeiten, frisches Wasser, etwas Nähe und der gemeinsame Feierabend drinnen.')}
    <div class="portrait-strip"><article class="cat-profile peppi"><strong>Peppi</strong><small>schwarz · manchmal länger draußen</small></article><article class="cat-profile minna"><strong>Minna</strong><small>rot · eher häuslich</small></article></div>
    ${sectionTitle('Der tägliche Ablauf')}
    <div class="card-grid">
      ${info('Morgens', '<ul><li>Insgesamt eine halbe Dose Nassfutter verteilen.</li><li>Graue Wasserschale frisch machen.</li><li>Katzenklo kontrollieren.</li><li>Etwas Ansprache und Nähe.</li></ul>', 'accent-sage')}
      ${info('Abends', '<ul><li>Wieder eine halbe Dose Nassfutter.</li><li>Prüfen, ob beide Katzen drinnen sind.</li><li>Falls nötig mit Leckerlis locken.</li><li>Etwas Kuschelzeit einplanen.</li></ul>', 'accent-blue')}
    </div>
    ${sectionTitle('Wo ist was?')}
    <div class="card-grid three">
      ${info('Futternäpfe', '<p>Zum Säubern nur den grünen Schwamm verwenden. Trockenfutter sparsam wie Leckerlis geben.</p>')}
      ${info('Wasser', '<p>Graue Schale links neben der Kommode unter dem Andreaskreuz.</p>')}
      ${info('Leckerlis', '<p>Im Flur, weißer Schub links oben.</p>')}
      ${info('Katzenklo', '<p>Täglich ansehen; meist gehen beide draußen.</p>')}
    </div>
    ${sectionTitle('Katzenklappe')}
    ${details('Normaler Betrieb', '<p>Öffnet kurz vor 6 Uhr und verriegelt gegen 18 Uhr. Danach können Peppi und Minna hinein, aber nicht mehr hinaus. Fremde Katzen bleiben per Chip draußen.</p>', true)}
    ${details('Rote LED oder schwache Akkus', '<p>Vier AA-Akkus im grünen Schrank rechts neben der Terrassentür laden, zweites Fach von unten. Über Nacht laden und erst am nächsten Morgen wieder einsetzen.</p>')}
    ${sectionTitle('Wenn etwas passiert')}
    ${details('Minna erbricht', '<p>Meist nach einer ungeeigneten Pflanze und gewöhnlich vorübergehend. Bei wiederholtem Erbrechen bitte Bescheid geben.</p>')}
    ${details('Peppi bringt Beute mit', '<ol><li>Andere Räume schließen.</li><li>Peppi ruhig nach draußen lotsen.</li><li>Katzenklappe vorübergehend auf „kein Eintritt“ stellen.</li><li>Danach wieder normal einstellen.</li></ol>')}
    ${details('Wenn ihr als Besuch lange draußen seid', '<p>Peppi und Minna können grundsätzlich einen ganzen Tag allein sein. Dann bitte morgens und abends bewusst Nähe, Ansprache und Kuschelzeit einplanen.</p>')}
  </section>`;
}

function floorplanV4() {
  return floorplan()
    .replace('Zimmer 1 · ca. 22,97 m²', 'ca. 22,97 m²')
    .replace('Zimmer 2 · ca. 25,5 m²', 'ca. 25,5 m²')
    .replace('Terrasse oben, Bad links oben, Küche und Bahnhof rechts oben, Flur in der Mitte, Kinderzimmer links unten, Schlafzimmer rechts unten und Balkon unten links.', 'Terrasse oben, Bad links oben, Küche und Bahnhof rechts oben, Flur in der Mitte, Kinderzimmer links unten, Schlafzimmer rechts unten und Balkon unten links.');
}

function roomSectionV4(id, title, subtitle, body) {
  return `<section class="room-section" id="${id}"><header class="room-section-header"><div><h2>${title}</h2><p>${subtitle}</p></div></header><div class="room-content-grid">${body}</div></section>`;
}

function homePageV4() {
  const marquee = [
    ['room-kueche', 'Küche'],
    ['room-schlafzimmer', 'Schlafzimmer'],
    ['room-kinderzimmer', 'Kinderzimmer'],
    ['room-bad', 'Bad'],
    ['room-flur', 'Flur'],
    ['room-bahnhof', 'Bahnhof'],
    ['room-aussen', 'Außen']
  ].map(([id, label]) => `<button class="chapter-link" type="button" data-scroll="${id}">${label}</button>`).join('');

  return `<section class="page">${head('Wohnung', 'Raum für Raum', 'Tippe auf einen Raum im Grundriss oder nutze die Kapitelzeile. Alle wichtigen Informationen stehen fortlaufend auf dieser Seite.')}
    <article class="floorplan-card">
      <div class="floorplan-toolbar"><div><h2>Grundriss</h2><small>Räume antippen</small></div><span class="pill">nach Originalplan</span></div>
      <div class="floorplan-stage">${floorplanV4()}</div>
      <p class="floor-note">Der Bahnhof ist das schmale Separee innerhalb der großen Küche.</p>
    </article>

    <div class="chapter-marquee-wrap" aria-label="Kapitel der Wohnungsseite"><nav class="chapter-marquee">${marquee}</nav></div>

    ${roomSectionV4('room-kueche', 'Küche', 'Kochen, Geschirrspüler, Kaffee und Ziggy',
      roomFact('Aktivierungswort', `<p>In der Küche hört Alexa auf <strong>Ziggy</strong>. Das ist besonders praktisch für Timer beim Kochen.</p>${command('Ziggy, stelle einen Timer')}`) +
      roomFact('Licht', '<p>Andreas, Esstisch, Kaffee, Küchenschlange und Obst. Mit „Ziggy, Küche aus“ gehen auch die beiden Lampen im Bahnhof aus.</p>') +
      roomFact('Geschirrspüler', `<p>Pro Spülgang zwei volle blaue Löffel Pulver. Normalerweise das Effizienzprogramm; bei sehr voller Maschine oder Geruch das schnellere Intensivprogramm.</p>${command('Ziggy, starte Effizienzprogramm')}${command('Ziggy, starte Intensivprogramm')}`) +
      roomFact('Geräte & Musik', '<p>Herd, Backofen und Wasserkocher sind normal zu bedienen; es gibt keine Mikrowelle. Entsafter, Mixer und Dampfgarer bitte nur nach Rücksprache. Die Fernbedienung der kleinen Musikanlage liegt in einer Schublade des Esstischs.</p>') +
      roomFact('Kaffee', '<p>Für den einfachen Weg gibt es die Bialetti. Die ausführliche Anleitung für Dedica, Mühle und Milchaufschäumer steht auf der Seite „Kaffee“ im Menü oben rechts.</p>') +
      roomFact('Müll', '<p>Neben der Terrassentür: vorne Restmüll, hinten Plastik. Daneben Papier in der Pappkiste. Biomüll kommt in die kleine Schale auf der Arbeitsplatte.</p>')
    )}

    ${roomSectionV4('room-schlafzimmer', 'Schlafzimmer', 'Schlafen, Wohnen, Musik und Film',
      roomFact('Licht', '<p>Billy, Pilz, Rakete, Regal, Simon, Sofa und Kreis. <strong>Stuhl</strong> steuert LeuchteEins und LeuchteZwei; außerdem gibt es die Gruppe <strong>Sofaecke</strong>.</p>') +
      roomFact('Denon-Musikanlage', '<p>Startet meist automatisch über Spotify Connect oder AirPlay. Die Fernbedienung hängt im Säckchen unter dem Lissabon-Bild. <strong>Quick Select 2 ist ein Knopf auf der Denon-Fernbedienung</strong> und stellt den Modus für normales Musikhören ein.</p>') +
      roomFact('Filmabend', '<p>Leinwand mit der Kordel herunterziehen, Fire TV einschalten und auf der Denon-Fernbedienung Quick Select 1 drücken. Die ausführliche Schrittfolge steht im Menü unter „Film & Musik“.</p>') +
      roomFact('Bettgehzeit', `<p>Schaltet alles aus, nur die Leselampe Simon bleibt an.</p>${command('Alexa, Bettgehzeit')}`) +
      roomFact('Router-Neustart', '<p>Hinter dem linken Sofakissen liegt die Gruppensteckdose für Router, Drucker, Denon und Zigbee-Hub. Nur bei einer größeren gemeinsamen Störung kurz aus- und wieder einschalten.</p>') +
      roomFact('Heizung', '<p>Temperatur über Alexa, Wandregler oder Heizkörperthermostat. Doppeldruck aktiviert fünf Minuten Boost.</p>')
    )}

    ${roomSectionV4('room-kinderzimmer', 'Kinderzimmer', 'Licht, Musik und Heizung',
      roomFact('Alexa-Lampen', '<p>Ecke, Höhle, Joker, Lissabon, Mallampe, Schaukel, Weihnachten und Mond.</p>') +
      roomFact('Zuordnung', '<ul><li>Höhle: unter dem Bett</li><li>Joker: grüner Lampenschirm</li><li>Mallampe: oben auf dem Schrank</li><li>Weihnachten: roter Stern an der Balkontür</li></ul>') +
      roomFact('Klassische Schalter', '<p>Mond wird meist direkt am Schalter bedient. Die Lichterkette über dem Kinderbett ebenfalls.</p>') +
      roomFact('Musik & Heizung', '<p>Vor Ort einfach „Alexa, spiele …“ sagen; der Lautsprecher heißt Lottezipp. Die Temperatur wird über Alexa oder den Wandregler eingestellt. Doppeldruck aktiviert fünf Minuten Boost.</p>')
    )}

    ${roomSectionV4('room-bad', 'Bad', 'Licht, Dusche und Wäsche',
      roomFact('Badlicht', '<p>Spiegel- und Deckenlicht werden gemeinsam über den Taster am Eingang ein- und ausgeschaltet.</p>') +
      roomFact('Nachtlicht', '<p>Der kleine runde Taster schaltet ein dezentes Nachtlicht an und wieder aus.</p>') +
      roomFact('Dusche', '<p>Rechter Drehregler: Temperatur. Linker Drehregler nach hinten: Regendusche; nach vorne: Handbrause.</p>') +
      roomFact('Musik & Handtücher', `<p>Vor Ort „Alexa, spiele …“ sagen. Mit „Alexa, ich will duschen“ starten Badlicht, Nachrichten und danach Musik. Handtücher liegen ganz oben im Badregal.</p>${command('Alexa, ich will dunkel duschen')}`)
    )}

    ${roomSectionV4('room-flur', 'Flur', 'Lichtautomatik, Schlüssel und wichtige Ablagen',
      roomFact('Flurlicht', '<ul><li>kurz oben: zwei Minuten an</li><li>kurz unten: sofort aus</li><li>lang oben: heller</li><li>lang unten: dunkler</li></ul>') +
      roomFact('Dauerlicht', `<p>Der Türkontakt schaltet beim Heimkommen für zwei Minuten ein. Für dauerhaftes Licht Alexa verwenden.</p>${command('Alexa, Flurlicht an')}`) +
      roomFact('Katzen & Türen', '<p>Leckerlis liegen im weißen Schub links oben. Die Innentüren bitte immer leicht offen stehen lassen, sonst mauzen die Katzen.</p>') +
      roomFact('Schlüssel & Sicherungen', '<p>Der eine Schlüssel öffnet alles. Der Sicherungskasten ist direkt rechts neben der Eingangstür unter der Garderobe und innen genau beschriftet.</p>')
    )}

    ${roomSectionV4('room-bahnhof', 'Bahnhof', 'Das schmale Separee als Teil der Küche',
      roomFact('Licht', '<p>Separee links und Separee rechts bilden gemeinsam die Gruppe <strong>Bahnhof</strong>. Da der Bahnhof zur Küche gehört, geht er bei „Ziggy, Küche aus“ ebenfalls aus.</p>') +
      roomFact('Musik', '<p>Der Zipp Mini heißt <strong>Reisezipp</strong>. Er ist nicht mit Alexa verbunden und wird direkt angestreamt.</p>') +
      roomFact('Haushalt', '<p>Im Haushaltsschrank steht ein <strong>klassischer Staubsauger</strong> – für kleine Stellen oft praktischer als McDreamy.</p>') +
      roomFact('Rollo', '<p>Das manuelle Rollo ist etwas kaputt. Entweder festbinden oder am besten in Ruhe lassen.</p>')
    )}

    ${roomSectionV4('room-aussen', 'Balkon & Terrasse', 'Fenster, Pflanzen, Katzenklappe und Müll',
      roomFact('Fenster und Türen', '<p>Balkontür und Fenster nur aufmerksam vollständig öffnen: Peppi und Minna springen gern hinaus.</p>') +
      roomFact('Pflanzen', '<p>Bei großer Hitze können Balkon- und Gartenpflanzen gegossen werden. Für den Garten steht ein Schlauch bereit – bitte vorher kurz nachfragen.</p>') +
      roomFact('Katzenklappe', '<p>Sie befindet sich bei der Terrassentür. Im normalen Betrieb muss nichts eingestellt werden; die ausführliche Erklärung steht bei Peppi & Minna.</p>') +
      roomFact('Mülltonnen', '<p>Die Außentonnen stehen im Hinterhof hinter Hausnummer 13 und entsprechen den Müllarten. Dort befindet sich auch Altglas.</p>')
    )}

    <section class="shared-home-section">
      ${sectionTitle('Gemeinsame Steuerung')}
      <div class="action-grid">
        <article class="action-card"><h3>Alles ruhig</h3><p>Schaltet alle Lichter und die Musik aus.</p>${command('Alexa, alles ausschalten')}</article>
        <article class="action-card"><h3>Alle Rollos</h3><p>Per Sprache hoch oder runter. Am Touchdisplay gilt: oben hoch, Mitte Pause, unten runter.</p>${command('Alexa, Rollos hoch')}${command('Alexa, Rollos runter')}</article>
        <article class="action-card"><h3>Heiz-Boost</h3><p>Doppeldruck am Drehregler aktiviert fünf Minuten volle Heizleistung.</p></article>
      </div>
    </section>
  </section>`;
}

function helpPageV4() {
  return `<section class="page">${head('Hilfe', 'Wenn etwas nicht klappt', 'Die meisten Probleme lassen sich mit wenigen Handgriffen lösen. Bei Unsicherheit bitte nachfragen.')}
    ${sectionTitle('Schnelle Hilfe')}
    ${details('WLAN, Alexa oder mehrere Geräte reagieren nicht', '<ol><li>Im Schlafzimmer das linke Sofakissen umklappen.</li><li>Gruppensteckdose kurz aus- und wieder einschalten.</li><li>Ein paar Minuten warten.</li></ol><p>Router, Drucker, Denon und Zigbee-Hub starten dabei neu.</p>', true)}
    ${details('Ein Heizkörper wird extrem heiß', '<ol><li>Batterien aus der mittleren Schublade des Buffetschranks einsetzen.</li><li>Am Thermostat doppelt drücken.</li><li>Kalibrierung notfalls mehrfach wiederholen.</li><li>Warten, bis das Ventil hörbar schließt.</li></ol>')}
    ${details('Katzenklappe zeigt rote LED', '<p>Vier AA-Akkus im grünen Schrank rechts neben der Terrassentür laden. Erst am nächsten Morgen wieder einsetzen.</p>')}
    ${details('McDreamy soll saugen', '<p>„Alexa, starte McDreamy“. An Schwellen gegebenenfalls helfen. Ins Bad manuell setzen. Der klassische Staubsauger steht im Bahnhof.</p>')}
    ${details('Geschirrspüler starten', '<p>Zwei volle blaue Löffel Pulver. In der Küche: „Ziggy, starte Effizienzprogramm“. Intensiv bei sehr voller Maschine oder Geruch.</p>')}
    ${sectionTitle('Sicherungen & kleine Notfälle')}
    <div class="card-grid">${info('Sicherungskasten', '<p>Im Flur direkt rechts neben der Eingangstür unter der Garderobe. Innen genau beschriftet.</p>', 'accent-yellow')}${info('Pflaster', '<p>Im kleinen weißen Schränkchen im Bad. Einen vollständigen Erste-Hilfe-Kasten gibt es nicht.</p>', 'accent-peach')}</div>
    ${sectionTitle('Tierarzt')}
    ${info('Tierarztpraxis am Amalienpark', '<p>Breite Straße 2A · 13187 Berlin-Pankow</p><p><strong>030 4868702</strong></p><p>Außerhalb der Öffnungszeiten bitte zuerst bei uns melden.</p>', 'accent-sage')}
    <div class="notice"><strong>Nachbarschaft</strong><p>Die Hausgemeinschaft ist freundlich und unkompliziert. Lokale Notfallkontakte teilen wir individuell.</p></div>
  </section>`;
}

function filmPageV4() {
  return `<section class="page">${head('Schlafzimmer', 'Film & Musik', 'Denon streamt direkt. Für Film braucht es Leinwand, Fire TV und Quick Select 1.')}
    ${sectionTitle('Musik hören')}
    ${info('Denon', `<p>Startet meist automatisch über Spotify Connect oder AirPlay. Quick Select 2 ist ein Knopf auf der Denon-Fernbedienung und aktiviert den Modus für normales Musikhören.</p>${pills('Spotify Connect', 'AirPlay', 'Quick Select 2')}<p>Die Fernbedienung hängt im Säckchen unter dem Lissabon-Bild.</p>`, 'accent-blue')}
    ${sectionTitle('Filmabend')}
    <article class="step-card"><ol class="steps"><li>Leinwand mit der Kordel herunterziehen.</li><li>Fire TV einschalten.</li><li>Am Denon Quick Select 1 drücken.</li><li>Falls nötig am Fire-TV-Rad hoch oder runter drücken.</li><li>Lautstärke anpassen.</li><li>Nach dem Film die Leinwand leicht nach unten ziehen; sie rollt dann automatisch sanft hoch.</li></ol></article>
    ${sectionTitle('Musik in den Räumen')}
    <div class="card-grid three">${info('Bad', '<p>„Alexa, spiele …“. Lautsprecher: Badzipp.</p>')}${info('Kinderzimmer', '<p>„Alexa, spiele …“. Lautsprecher: Lottezipp.</p>')}${info('Bahnhof', '<p>Direkt auf Reisezipp streamen.</p>')}</div>
  </section>`;
}

function placesPageV4() {
  const map = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const place = (type, name, body, query, recommended = '', symbol = '') => `
    <article class="place-card ${recommended}">
      ${symbol ? `<span class="tip-card-symbol" aria-hidden="true">${symbol}</span>` : ''}
      <span class="place-type">${type}</span>
      <h3>${name}</h3>
      <p>${body}</p>
      <a href="${map(query)}" target="_blank" rel="noreferrer">In Karten öffnen →</a>
    </article>`;

  return `<section class="page">
    ${head('Pankow & Berlin', 'Orte', 'Praktische Adressen rund um Mendel11 und persönliche Empfehlungen für Essen, Museen und Ausflüge in Berlin. Öffnungszeiten bitte aktuell prüfen.')}

    ${sectionTitle('Supermärkte rund um Mendel11')}
    <div class="place-grid">
      ${place('Unsere Empfehlung', 'BIO COMPANY', 'Die größere Filiale in der Breiten Straße.', 'BIO COMPANY Breite Straße 33 Berlin', 'recommended')}
      ${place('Großer Einkauf', 'Kaufland', 'Praktisch für einen großen Einkauf.', 'Kaufland Breite Straße Berlin Pankow')}
      ${place('Gut gelegen', 'EDEKA am Garbátyplatz', 'Häufig ziemlich voll.', 'EDEKA Garbátyplatz Berlin')}
    </div>

    ${sectionTitle('Drogerien')}
    ${info('dm & Rossmann', '<p>dm am Garbátyplatz und im Rathaus-Center; Rossmann ebenfalls im Rathaus-Center.</p>')}

    ${sectionTitle('Essen rund um Mendel11')}
    <div class="place-grid">
      ${place('Bäckerei', 'Madame Eule', 'Unsere klare Bäckerei-Empfehlung.', 'Madame Eule Berlin Pankow', 'recommended')}
      ${place('Vietnamesisch', 'Baba đu', 'Nahe Hadlichstraße und Stiftsweg.', 'Baba du Restaurant Berlin Pankow')}
      ${place('Pizza', 'Farina 00', 'Eine gute Option in der Umgebung.', 'Farina 00 Berlin Pankow')}
    </div>

    ${sectionTitle('Essen in Berlin')}
    <p class="floor-note berlin-tip-intro">Diese vier Orte liegen nicht direkt um die Ecke, gehören aber zu unseren Empfehlungen für einen Ausflug in die Stadt.</p>
    <div class="place-grid">
      ${place('Restaurant', 'GaYaYa', 'In der Reinhardtstraße in Mitte.', 'GaYaYa Reinhardtstraße Berlin', 'recommended', '✦')}
      ${place('Restaurant', 'Maru', 'In Friedrichshain.', 'Maru Friedrichshain Berlin', '', '◇')}
      ${place('Restaurant', 'Hummus & Friends', 'Nahe Hackescher Markt.', 'Hummus and Friends Berlin Hackescher Markt', '', '◉')}
      ${place('Bistro', 'Petit Bistro', 'Nahe Schönhauser Allee.', 'Petit Bistro Schönhauser Allee Berlin', '', '◌')}
    </div>

    ${sectionTitle('Museen & Ausflüge')}
    <div class="place-grid">
      ${place('Gegenwartskunst', 'Hamburger Bahnhof', 'Großes Haus für zeitgenössische Kunst nahe Hauptbahnhof.', 'Hamburger Bahnhof Berlin', 'recommended', '▱')}
      ${place('Medizingeschichte', 'Berliner Medizinhistorisches Museum', 'Medizingeschichte und die historische Sammlung der Charité.', 'Berliner Medizinhistorisches Museum Charité', '', '✚')}
      ${place('Zukunft', 'Futurium', 'Ausstellung, Forum und Labor zu möglichen Zukünften.', 'Futurium Berlin', 'recommended', '∞')}
      ${place('DDR-Alltag', 'Museum in der Kulturbrauerei', 'Die Ausstellung zum Alltag in der DDR in Prenzlauer Berg.', 'Museum in der Kulturbrauerei Berlin', '', '⌂')}
      ${place('DDR-Geschichte', 'DDR Museum', 'Interaktives Museum nahe Berliner Dom.', 'DDR Museum Berlin', '', '▤')}
      ${place('Berliner Geschichte', 'Museum Ephraim-Palais', 'Stadtgeschichte im Nikolaiviertel.', 'Museum Ephraim Palais Berlin', '', '◇')}
    </div>
  </section>`;
}

pages.start = startPageV4;
pages.katzen = catsPageV4;
pages.wohnung = homePageV4;
pages.hilfe = helpPageV4;
pages.film = filmPageV4;
pages.naehe = placesPageV4;

function syncPlacesTitleV4() {
  if (current() === 'naehe') document.title = 'Orte · Mendel11';
}

addEventListener('hashchange', () => queueMicrotask(syncPlacesTitleV4));
render();
syncPlacesTitleV4();
