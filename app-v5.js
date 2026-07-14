function startPageV5() {
  return `<section class="page">
    <div class="hero"><div class="hero-content"><p class="eyebrow">Willkommen zu Hause</p><h1>Willkommen in Mendel11</h1><p>Alles Wichtige für eine entspannte Woche mit Wohnung, Smart Home, Peppi und Minna.</p><div class="cat-orbit"><span class="cat-token"><span class="cat-dot black"></span>Peppi</span><span class="cat-token"><span class="cat-dot orange"></span>Minna</span></div></div></div>
    ${sectionTitle('Ankommen in 5 Minuten')}
    <div class="quick-grid">
      <article class="quick-card"><span class="quick-number">1</span><div><h3>Ein Schlüssel</h3><p>Für Haustür, Wohnung, Briefkasten und Keller.</p></div></article>
      <article class="quick-card"><span class="quick-number">2</span><div><h3>WLAN vor Ort</h3><p>QR-Code und Passwort hängen am grauen Regal direkt am Kücheneingang.</p></div></article>
      <article class="quick-card"><span class="quick-number">3</span><div><h3>Katzen</h3><p>Morgens und abends füttern. Abends/nachts sollen beide unbedingt drin sein.</p></div></article>
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

function catsPageV5() {
  return `<section class="page">${head('Katzenbetreuung', 'Peppi & Minna', 'Zwei Mahlzeiten, frisches Wasser, etwas Nähe und der gemeinsame Feierabend drinnen.')}
    <div class="portrait-strip"><article class="cat-profile peppi"><strong>Peppi</strong><small>schwarz · manchmal länger draußen</small></article><article class="cat-profile minna"><strong>Minna</strong><small>rot · eher häuslich</small></article></div>
    ${sectionTitle('Der tägliche Ablauf')}
    <div class="card-grid">
      ${info('Morgens', '<ul><li>Insgesamt eine halbe Dose Nassfutter verteilen.</li><li>Graue Wasserschale frisch machen.</li><li>Katzenklo kontrollieren.</li><li>Etwas Ansprache und Nähe.</li></ul>', 'accent-sage')}
      ${info('Abends', '<ul><li>Wieder eine halbe Dose Nassfutter.</li><li>Prüfen, ob beide Katzen drinnen sind.</li><li>Falls nötig mit Leckerlis locken.</li><li>Etwas Kuschelzeit einplanen.</li></ul>', 'accent-blue')}
    </div>
    <div class="notice"><strong>Zwischentüren</strong><p>Im Normalfall sollen die Zwischentüren offen bleiben – insbesondere die Tür zum Bad, weil dort das Katzenklo steht. Zum Schlafengehen oder wenn ein Kind Ruhe braucht, können einzelne Türen natürlich geschlossen und die Katzen aus dem Raum gehalten werden.</p></div>
    ${sectionTitle('Wo ist was?')}
    <div class="card-grid three">
      ${info('Futternäpfe', '<p>Zum Säubern nur den grünen Schwamm verwenden.</p>')}
      ${info('Trockenfutter', '<p>Sparsam wie Leckerlis geben. Es befindet sich im Joghurtglas im Katzenfutterschrank.</p>')}
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
    ${details('Wenn ihr abends noch auf der Terrasse sitzt', '<p>Wenn die Katzenklappe bereits geschlossen ist, sollen Peppi und Minna grundsätzlich nicht draußen bleiben. Sie können aber noch in eurer Nähe auf der Terrasse liegen. Achtet beim Reingehen unbedingt darauf, dass beide mitkommen. Falls nötig, mit Leckerlis oder etwas Trockenfutter hineinlocken.</p>')}
  </section>`;
}

function inlineRouteV5(route, label) {
  return `<button class="inline-route-link" type="button" data-route="${route}">${label}<span aria-hidden="true">→</span></button>`;
}

function roomSectionV5(id, title, subtitle, body) {
  return `<section class="room-section" id="${id}"><header class="room-section-header"><div><h2>${title}</h2><p>${subtitle}</p></div></header><div class="room-content-grid">${body}</div></section>`;
}

function homePageV5() {
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

    ${roomSectionV5('room-kueche', 'Küche', 'Kochen, Geschirrspüler, Kaffee und Ziggy',
      roomFact('Aktivierungswort', `<p>In der Küche hört Alexa auf <strong>Ziggy</strong>.</p>${command('Ziggy, Timer 5 Minuten')}`) +
      roomFact('Licht', '<p>Die Alexa-Lampen heißen Andreas, Esstisch, Kaffee und Obst. <strong>Andreas</strong> beleuchtet das Andreaskreuz, <strong>Kaffee</strong> hängt über der Kaffeemaschine und <strong>Obst</strong> über dem anderen Küchenelement. Andreas, Esstisch und Obst können auch per Handschalter bedient werden. Der Bahnhof wird weiter unten separat behandelt.</p><p>Die Abzugshaube lässt sich nach vorne ziehen; dadurch geht das Licht über dem Herd an. Das LED-Licht über der Arbeitsplatte neben dem Herd wird über einen eigenen Schalter bedient.</p>') +
      roomFact('Geschirrspüler', `<p>Pro Spülgang zwei volle blaue Löffel Pulver. Normalerweise das Effizienzprogramm; bei sehr voller Maschine oder Geruch das schnellere Intensivprogramm. Geschirrspülpulver, Klarspüler und Salz werden unter der Spüle gelagert.</p>${command('Ziggy, starte Effizienzprogramm')}${command('Ziggy, starte Intensivprogramm')}`) +
      roomFact('Geräte & Musik', '<p>Herd, Backofen und Wasserkocher sind normal zu bedienen; es gibt keine Mikrowelle. Zu Entsafter, Mixer und Dampfgarer könnt ihr bei Bedarf kurz nachfragen, wenn ihr Details zur Bedienung braucht. Die Fernbedienung der kleinen Musikanlage liegt in einer Schublade des Esstischs.</p>') +
      roomFact('Kaffee', `<p>Für den einfachen Weg gibt es die Bialetti. Sie steht im Holzregal über dem Müll, dort, wo auch die Zitronenpresse steht.</p>${inlineRouteV5('kaffee', 'Zur ausführlichen Kaffee-Anleitung')}`) +
      roomFact('Müll', '<p>Neben der Terrassentür: vorne Restmüll, hinten Plastik. Daneben Papier in der Pappkiste. Biomüll kommt in die kleine Schale auf der Arbeitsplatte.</p>')
    )}

    ${roomSectionV5('room-schlafzimmer', 'Schlafzimmer', 'Schlafen, Wohnen, Musik und Film',
      roomFact('Licht', '<p>Die Alexa-Lampen heißen Billy, Pilz, Sofa, Regal, Rakete, Simon, Kreis und Bettschlange. <strong>Billy</strong> steht auf dem Billy-Regal neben dem Bett. <strong>Pilz</strong>, <strong>Sofa</strong> und <strong>Regal</strong> befinden sich im Bücherregal. <strong>Rakete</strong> ist die Nanoleaf-Lampe, <strong>Simon</strong> die Nachtlampe am Kopfende und <strong>Bettschlange</strong> liegt unter dem Bett. Rakete und Simon können auch per Handschalter bedient werden. <strong>Stuhl</strong> steuert LeuchteEins und LeuchteZwei; außerdem gibt es die Gruppe <strong>Sofaecke</strong>.</p>') +
      roomFact('Denon-Musikanlage', '<p>Startet meist automatisch über Spotify Connect oder AirPlay. Die Fernbedienung hängt im Säckchen unter dem Lissabon-Bild. <strong>Quick Select 2 ist ein Knopf auf der Denon-Fernbedienung</strong> und stellt den Modus für normales Musikhören ein.</p>') +
      roomFact('Filmabend', `<p>Leinwand mit der Kordel herunterziehen, Fire TV einschalten und auf der Denon-Fernbedienung Quick Select 1 drücken.</p>${inlineRouteV5('film', 'Zur ausführlichen Film-Anleitung')}`) +
      roomFact('Bettgehzeit', `<p>Schaltet alles aus, nur die Leselampe Simon bleibt an.</p>${command('Alexa, Bettgehzeit')}`) +
      roomFact('Router-Neustart', '<p>Hinter dem linken Sofakissen liegt die Gruppensteckdose für Router, Drucker, Denon und Zigbee-Hub. Nur bei einer größeren gemeinsamen Störung kurz aus- und wieder einschalten.</p>') +
      roomFact('Heizung', '<p>Temperatur über Alexa, Wandregler oder Heizkörperthermostat. Doppeldruck aktiviert fünf Minuten Boost.</p>')
    )}

    ${roomSectionV5('room-kinderzimmer', 'Kinderzimmer', 'Licht, Musik und Heizung',
      roomFact('Alexa-Lampen', '<p>Die Alexa-Lampen heißen Ecke, Höhle, Joker, Lissabon, Mallampe, Weihnachten und Mond.</p>') +
      roomFact('Zuordnung', '<p><strong>Höhle</strong> befindet sich unter dem Bett, <strong>Joker</strong> ist die Lampe mit dem grünen Lampenschirm, <strong>Mallampe</strong> steht oben auf dem Schrank und <strong>Weihnachten</strong> ist der rote Stern an der Balkontür.</p>') +
      roomFact('Klassische Schalter', '<p>Mond kann auch per Handschalter bedient werden und wird meist so genutzt. Die Lichterkette über dem Kinderbett ist nicht smart und wird ausschließlich am Schalter bedient.</p>') +
      roomFact('Musik & Heizung', '<p>Vor Ort einfach „Alexa, spiele …“ sagen; der Lautsprecher heißt Lottezipp. Die Temperatur wird über Alexa oder den Wandregler eingestellt. Doppeldruck aktiviert fünf Minuten Boost.</p>')
    )}

    ${roomSectionV5('room-bad', 'Bad', 'Licht, Dusche, Musik und Wäsche',
      roomFact('Badlicht', '<p>Spiegel- und Deckenlicht werden gemeinsam über den Taster am Eingang ein- und ausgeschaltet.</p>') +
      roomFact('Nachtlicht', '<p>Der kleine runde Taster schaltet ein dezentes Nachtlicht an und wieder aus.</p>') +
      roomFact('Dusche', '<p>Rechter Drehregler: Temperatur. Linker Drehregler nach hinten: Regendusche; nach vorne: Handbrause.</p>') +
      roomFact('Musik', `<p>Mit „Alexa, ich will duschen“ starten Badlicht, Nachrichten und danach Musik. Mit „Alexa, ich will dunkel duschen“ läuft die gleiche Abfolge ohne Licht.</p>${command('Alexa, ich will duschen')}`) +
      roomFact('Handtücher', '<p>Handtücher liegen ganz oben im Badregal.</p>')
    )}

    ${roomSectionV5('room-flur', 'Flur', 'Lichtautomatik, Schlüssel und wichtige Ablagen',
      roomFact('Flurlicht', '<p>Bitte den <strong>Homematic-IP-Taster</strong> am Türrahmen zwischen Küche und Flur benutzen:</p><ul><li>kurz oben: zwei Minuten an</li><li>kurz unten: sofort aus</li><li>lang oben: heller</li><li>lang unten: dunkler</li></ul><p>Der andere klassische Lichtschalter soll nicht bedient werden. Falls er versehentlich betätigt wurde, bitte noch einmal drücken, damit der Strom für die smarte Beleuchtung wiederhergestellt ist.</p>') +
      roomFact('Dauerlicht', `<p>Der Türkontakt schaltet beim Heimkommen für zwei Minuten ein. Für dauerhaftes Licht Alexa verwenden.</p>${command('Alexa, Flurlicht an')}`) +
      roomFact('Katzen', '<p>Leckerlis liegen im weißen Schub links oben.</p>') +
      roomFact('Schlüssel', '<p>Der eine Schlüssel öffnet Haustür, Wohnungstür, Briefkasten und Kellertür.</p>') +
      roomFact('Sicherungen', '<p>Der Sicherungskasten ist direkt rechts neben der Eingangstür unter der Garderobe und innen genau beschriftet.</p>')
    )}

    ${roomSectionV5('room-bahnhof', 'Bahnhof', 'Das schmale Separee als Teil der Küche',
      roomFact('Licht', '<p>Separee links und Separee rechts bilden gemeinsam die Gruppe <strong>Bahnhof</strong>. Da der Bahnhof zur Küche gehört, geht er bei „Ziggy, Küche aus“ ebenfalls aus.</p>') +
      roomFact('Musik', '<p>Der Zipp Mini heißt <strong>Reisezipp</strong>. Er ist nicht mit Alexa verbunden und wird direkt angestreamt.</p>') +
      roomFact('Haushaltsschrank', '<p>Hier stehen der klassische Staubsauger und der Wäscheständer. Außerdem findet ihr dort Reinigungsutensilien, Mülltüten, Toilettenpapier, Küchenrolle, Taschentücher und weitere Haushaltsvorräte.</p>') +
      roomFact('Rollo', '<p>Das manuelle Rollo ist etwas kaputt. Entweder festbinden oder am besten in Ruhe lassen.</p>')
    )}

    ${roomSectionV5('room-aussen', 'Balkon & Terrasse', 'Fenster, Pflanzen, Katzenklappe und Müll',
      roomFact('Fenster und Türen', '<p>Balkontür und Fenster nur aufmerksam vollständig öffnen: Peppi und Minna springen gern hinaus.</p>') +
      roomFact('Pflanzen', '<p>Bei großer Hitze bitte die Balkonpflanzen und die Pflanzen im Garten gießen. Für den Garten steht ein Schlauch bereit; dazu vorher kurz bei uns nachfragen.</p>') +
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

function filmPageV5() {
  return `<section class="page">${head('Schlafzimmer', 'Film & Musik', 'Denon streamt direkt. Für Film braucht es Leinwand, Fire TV und Quick Select 1.')}
    ${sectionTitle('Musik hören')}
    ${info('Denon', `<p>Startet meist automatisch über Spotify Connect oder AirPlay. Quick Select 2 ist ein Knopf auf der Denon-Fernbedienung und aktiviert den Modus für normales Musikhören.</p>${pills('Spotify Connect', 'AirPlay', 'Quick Select 2')}<p>Die Fernbedienung hängt im Säckchen unter dem Lissabon-Bild.</p>`, 'accent-blue')}
    ${sectionTitle('Filmabend')}
    <article class="step-card"><ol class="steps"><li>Leinwand mit der Kordel herunterziehen.</li><li>Fire TV einschalten.</li><li>Am Denon Quick Select 1 drücken.</li><li>Falls nötig am Fire-TV-Rad hoch oder runter drücken.</li><li>Lautstärke anpassen.</li><li>Nach dem Film die Leinwand leicht nach unten ziehen; sie rollt dann automatisch sanft hoch.</li></ol></article>
    ${sectionTitle('Musik in den Räumen')}
    <div class="card-grid three">${info('Bad', '<p>„Alexa, spiele …“. Lautsprecher: Badzipp.</p>')}${info('Kinderzimmer', '<p>„Alexa, spiele …“. Lautsprecher: Lottezipp.</p>')}${info('Bahnhof', '<p>Direkt auf Reisezipp streamen.</p>')}</div>
  </section>`;
}

function placesPageV5() {
  const map = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const place = (type, name, body, query, recommended = '', symbol = '') => `
    <article class="place-card ${recommended}">
      ${symbol ? `<span class="tip-card-symbol" aria-hidden="true">${symbol}</span>` : ''}
      <span class="place-type">${type}</span>
      <h3>${name}</h3>
      <p>${body}</p>
      <a href="${map(query)}" target="_blank" rel="noreferrer">In Karten öffnen →</a>
    </article>`;
  const foodBody = text => `${text} Reservierung von Vorteil.`;

  return `<section class="page">
    ${head('Pankow & Berlin', 'Orte', 'Praktische Adressen rund um Mendel11 und persönliche Empfehlungen für Essen, Museen und Ausflüge in Berlin. Öffnungszeiten bitte aktuell prüfen.')}

    ${sectionTitle('Supermärkte rund um Mendel11')}
    <div class="place-grid">
      ${place('Unsere Empfehlung', 'BIO COMPANY', 'Die größere Filiale in der Breiten Straße.', 'BIO COMPANY Breite Straße 33 Berlin', 'recommended')}
      ${place('Großer Einkauf', 'Kaufland', 'Praktisch für einen großen Einkauf.', 'Kaufland Breite Straße Berlin Pankow')}
      ${place('Gut gelegen', 'EDEKA am Garbátyplatz', 'Häufig ziemlich voll.', 'EDEKA Garbátyplatz Berlin')}
    </div>

    ${sectionTitle('Drogerien')}
    <div class="place-grid">
      ${place('Drogerie', 'dm am Garbátyplatz', 'Direkt am Bahnhof Pankow.', 'dm Garbátyplatz Berlin')}
      ${place('Drogerie', 'dm im Rathaus-Center', 'Im Rathaus-Center Pankow.', 'dm Rathaus-Center Berlin Pankow')}
      ${place('Drogerie', 'Rossmann im Rathaus-Center', 'Ebenfalls im Rathaus-Center Pankow.', 'Rossmann Rathaus-Center Berlin Pankow')}
    </div>

    ${sectionTitle('Essen rund um Mendel11')}
    <div class="place-grid">
      ${place('Bäckerei', 'Madame Eule', 'Unsere klare Bäckerei-Empfehlung.', 'Madame Eule Berlin Pankow', 'recommended')}
      ${place('Vietnamesisch', 'Baba đu', foodBody('Nahe Hadlichstraße und Stiftsweg.'), 'Baba du Restaurant Berlin Pankow')}
      ${place('Pizza', 'Farina 00', foodBody('Eine gute Option in der Umgebung.'), 'Farina 00 Berlin Pankow')}
    </div>

    ${sectionTitle('Essen in Berlin')}
    <p class="floor-note berlin-tip-intro">Diese vier Orte liegen nicht direkt um die Ecke, gehören aber zu unseren Empfehlungen für einen Ausflug in die Stadt.</p>
    <div class="place-grid">
      ${place('Restaurant', 'GaYaYa', foodBody('In der Reinhardtstraße in Mitte.'), 'GaYaYa Reinhardtstraße Berlin', 'recommended', '✦')}
      ${place('Restaurant', 'Maru', foodBody('In Friedrichshain.'), 'Maru Friedrichshain Berlin', '', '◇')}
      ${place('Restaurant', 'Hummus & Friends', foodBody('Nahe Hackescher Markt.'), 'Hummus and Friends Berlin Hackescher Markt', '', '◉')}
      ${place('Brunch', 'Petit Brunch', foodBody('Nahe Eberswalder Straße.'), 'Petit Brunch Eberswalder Straße Berlin', '', '◌')}
    </div>

    ${sectionTitle('Mit Kind in der Nähe')}
    <div class="place-grid">
      ${place('Spielplatz', 'Eisenbahnspielplatz', 'Spielplatzidee in der näheren Umgebung.', 'Eisenbahnspielplatz Berlin Pankow', 'recommended', '♟')}
      ${place('Park & Spielplatz', 'Paule-Park', 'Kleiner Park mit Spielplatz nahe Rathaus-Center.', 'Paule-Park Berlin Pankow', '', '☘')}
      ${place('Bibliothek', 'Janusz-Korczak-Bibliothek', 'Kinderbücher und ein ruhiger Programmpunkt nahe S- und U-Bahnhof Pankow.', 'Janusz-Korczak-Bibliothek Berlin Pankow', '', '▥')}
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

const searchItemsV5 = [
  { route: 'start', title: 'Ankommen in 5 Minuten', text: 'Schlüssel WLAN QR-Code Passwort graues Regal Kücheneingang Katzen' },
  { route: 'katzen', title: 'Peppi & Minna', text: 'Füttern Futternäpfe Trockenfutter Wasser Leckerlis Katzenklo Katzenklappe Terrasse Türen Zwischentüren Beute Erbrechen', scroll: '' },
  { route: 'wohnung', title: 'Küche', text: 'Ziggy Timer Licht Andreas Esstisch Kaffee Obst Geschirrspüler Intensivprogramm Bialetti Abzugshaube', scroll: 'room-kueche' },
  { route: 'wohnung', title: 'Schlafzimmer', text: 'Denon Quick Select Film Leinwand Licht Billy Pilz Sofa Regal Rakete Simon Bettschlange Router', scroll: 'room-schlafzimmer' },
  { route: 'wohnung', title: 'Kinderzimmer', text: 'Licht Alexa Höhle Joker Lissabon Mallampe Weihnachten Mond Lichterkette Lottezipp Heizung', scroll: 'room-kinderzimmer' },
  { route: 'wohnung', title: 'Bad', text: 'Dusche Badlicht Nachtlicht Handtücher Musik Badzipp', scroll: 'room-bad' },
  { route: 'wohnung', title: 'Flur', text: 'Homematic IP Taster Flurlicht Schlüssel Sicherungen Leckerlis', scroll: 'room-flur' },
  { route: 'wohnung', title: 'Bahnhof', text: 'Reisezipp Haushaltsschrank Staubsauger Wäscheständer Reinigung Mülltüten Toilettenpapier Küchenrolle Taschentücher Rollo', scroll: 'room-bahnhof' },
  { route: 'wohnung', title: 'Balkon & Terrasse', text: 'Pflanzen gießen Katzenklappe Mülltonnen Fenster', scroll: 'room-aussen' },
  { route: 'hilfe', title: 'Hilfe bei Problemen', text: 'WLAN Router Alexa Heizung Katzenklappe McDreamy Sicherung Tierarzt Pflaster' },
  { route: 'kaffee', title: 'Kaffee-Anleitung', text: 'Bialetti Dedica Siebträger Mühle Milchaufschäumer Cold Brew Wassertank' },
  { route: 'film', title: 'Film & Musik', text: 'Denon Beamer Leinwand Fire TV Quick Select Spotify AirPlay' },
  { route: 'naehe', title: 'Orte', text: 'Supermarkt Drogerie Restaurant Essen Spielplatz Bibliothek Museum Ausflug Berlin Pankow' },
  { route: 'abreise', title: 'Abreise', text: 'Müll Bett Geschirrspüler Briefkasten Schlüssel Katzen Futter' }
];

let pendingSearchScrollV5 = '';

function openSearchResultV5(route, scroll = '') {
  pendingSearchScrollV5 = scroll;
  go(route);
  if (more.open) more.close();
  setTimeout(() => {
    if (pendingSearchScrollV5) scrollToSection(pendingSearchScrollV5);
    pendingSearchScrollV5 = '';
  }, 80);
}

function addSearchV5() {
  if (!more || more.querySelector('.menu-search')) return;
  const section = document.createElement('section');
  section.className = 'menu-search';
  section.innerHTML = `
    <label class="search-label" for="mendelSearch">Suche</label>
    <div class="search-field"><span aria-hidden="true">⌕</span><input id="mendelSearch" type="search" autocomplete="off" placeholder="z. B. Geschirrspüler oder Katzenklappe"></div>
    <div class="search-results" id="mendelSearchResults" aria-live="polite"></div>`;
  const skinPanel = more.querySelector('.skin-panel');
  if (skinPanel) more.insertBefore(section, skinPanel);
  else more.append(section);

  const input = section.querySelector('input');
  const results = section.querySelector('.search-results');
  const renderResults = () => {
    const query = input.value.trim().toLocaleLowerCase('de');
    if (!query) {
      results.innerHTML = '<p class="search-hint">Durchsucht Seiten, Räume und wichtige Geräte.</p>';
      return;
    }
    const words = query.split(/\s+/).filter(Boolean);
    const matches = searchItemsV5.filter(item => {
      const haystack = `${item.title} ${item.text}`.toLocaleLowerCase('de');
      return words.every(word => haystack.includes(word));
    }).slice(0, 8);
    results.innerHTML = matches.length
      ? matches.map((item, index) => `<button type="button" class="search-result" data-result-index="${index}"><strong>${item.title}</strong><small>${item.route === 'wohnung' ? 'Wohnung' : item.title}</small></button>`).join('')
      : '<p class="search-hint">Kein Treffer. Probiert ein kürzeres Stichwort.</p>';
    results.querySelectorAll('[data-result-index]').forEach((button, index) => {
      button.addEventListener('click', () => openSearchResultV5(matches[index].route, matches[index].scroll));
    });
  };
  input.addEventListener('input', renderResults);
  renderResults();
}

pages.start = startPageV5;
pages.katzen = catsPageV5;
pages.wohnung = homePageV5;
pages.film = filmPageV5;
pages.naehe = placesPageV5;

addSearchV5();
render();
syncPlacesTitleV4();
