const app=document.querySelector("#app");
const moreDialog=document.querySelector("#moreDialog");
const roomDialog=document.querySelector("#roomDialog");
const roomDialogContent=document.querySelector("#roomDialogContent");
const routes=new Set(["start","katzen","wohnung","hilfe","naehe","abreise","kaffee","film"]);

const roomContent={
  kinderzimmer:{title:"Kinderzimmer",subtitle:"Zimmer 1",sections:[
    {title:"Licht",body:`Alexa-Lampen: Ecke, Höhle, Joker, Lissabon, Mallampe, Schaukel, Weihnachten und Mond. <strong>Höhle</strong> liegt unter dem Bett, <strong>Joker</strong> hat den grünen Schirm, <strong>Mallampe</strong> steht oben auf dem Schrank und <strong>Weihnachten</strong> ist der rote Stern an der Balkontür.`},
    {title:"Klassisch bedienen",body:`Mond wird meist direkt am Schalter bedient. Die Lichterkette über dem Kinderbett funktioniert ebenfalls klassisch per Schalter.`},
    {title:"Musik",body:`Vor Ort einfach „Alexa, spiele …“ sagen. Der Lautsprecher heißt technisch <strong>Lottezipp</strong>.`},
    {title:"Heizung",body:`Temperatur über den Wandregler oder Alexa einstellen. Das Thermostat am Heizkörper ist kindersicher gesperrt. Doppeldruck am Wandregler aktiviert fünf Minuten Heiz-Boost.`}
  ]},
  schlafzimmer:{title:"Schlafzimmer",subtitle:"Schlafen, Sofa, Musik und Film",sections:[
    {title:"Licht",body:`Einzellampen: Billy, Pilz, Rakete, Regal, Simon, Sofa und Kreis. <strong>Stuhl</strong> steuert LeuchteEins und LeuchteZwei gemeinsam. Zusätzlich gibt es die Gruppe <strong>Sofaecke</strong>. Kreis ist die Lampe am Raumteiler.`},
    {title:"Musik",body:`Die Denon-Anlage startet meist automatisch über Spotify Connect oder AirPlay. Für normales Musikhören auf der Fernbedienung <strong>Quick Select 2</strong> drücken.`},
    {title:"Film",body:`Fernbedienungen liegen im kleinen Säckchen unter dem Lissabon-Bild. Leinwand herunterziehen, Fire TV einschalten und am Denon <strong>Quick Select 1</strong> wählen.`},
    {title:"Router",body:`Hinter dem linken Sofakissen befindet sich die Gruppensteckdose für Router, Drucker, Denon und Zigbee-Hub. Nur bei einer größeren Störung kurz aus- und wieder einschalten.`}
  ]},
  kueche:{title:"Küche",subtitle:"Kochen, Kaffee und Ziggy",sections:[
    {title:"Alexa",body:`In der Küche lautet das Aktivierungswort <strong>Ziggy</strong>. Zum Beispiel: „Ziggy, stelle einen Timer auf zehn Minuten.“`},
    {title:"Licht",body:`Einzellampen: Andreas, Esstisch, Kaffee, Küchenschlange und Obst. „Küche aus“ schaltet auch die beiden Lampen im Bahnhof aus.`},
    {title:"Geschirrspüler",body:`Standard: „Alexa, starte Effizienzprogramm“. Zwei volle blaue Löffel Pulver verwenden. Bei sehr voller Maschine oder Geruch kann das Intensivprogramm laufen.`},
    {title:"Sonstiges",body:`Herd, Backofen und Wasserkocher sind normal zu bedienen. Es gibt keine Mikrowelle. Entsafter, Mixer und Dampfgarer bitte nur nach Rücksprache verwenden.`}
  ]},
  bahnhof:{title:"Bahnhof",subtitle:"Kleines Separee in der Küche",sections:[
    {title:"Licht",body:`Die Gruppe <strong>Bahnhof</strong> besteht aus Separee links und Separee rechts. Sie gehört technisch zur Küche.`},
    {title:"Musik",body:`Der Zipp Mini heißt <strong>Reisezipp</strong>. Er ist nicht mit Alexa verbunden und kann direkt per Streaming angesteuert werden.`},
    {title:"Haushalt",body:`Im Haushaltsschrank steht ein klassischer Handstaubsauger. Am Fenster befindet sich außerdem der Vorratsschrank.`},
    {title:"Rollo",body:`Das manuelle Rollo ist etwas defekt. Entweder festbinden oder besser in Ruhe lassen.`}
  ]},
  bad:{title:"Bad",subtitle:"Licht, Dusche und Wäsche",sections:[
    {title:"Licht",body:`<strong>Badlicht</strong> verbindet Spiegel- und Deckenbeleuchtung. Der Taster am Eingang schaltet es an und aus. Der kleine runde Taster aktiviert das Nachtlicht.`},
    {title:"Dusche",body:`Rechter Drehregler: Temperatur. Linker Drehregler nach hinten: Regendusche. Nach vorne: Handbrause.`},
    {title:"Musik",body:`Vor Ort einfach „Alexa, spiele …“ sagen. „Alexa, ich will duschen“ startet Badlicht, Nachrichten und anschließend Musik.`},
    {title:"Handtücher",body:`Handtücher liegen ganz oben im Badregal. Pflaster befinden sich im kleinen weißen Schränkchen.`}
  ]},
  flur:{title:"Flur",subtitle:"Licht, Schlüssel und Leckerlis",sections:[
    {title:"Flurlicht",body:`Kurzer Druck oben am Taster: zwei Minuten an. Kurzer Druck unten: aus. Langer Druck oben oder unten dimmt heller beziehungsweise dunkler.`},
    {title:"Dauerlicht",body:`Mit „Alexa, Flurlicht an“ bleibt das Licht an, bis Taster oder Türkontakt wieder die Automatik übernehmen.`},
    {title:"Katzen",body:`Leckerlis liegen im weißen Schub links oben. Innentüren bitte grundsätzlich leicht offen stehen lassen.`},
    {title:"Sicherungen",body:`Der Sicherungskasten befindet sich direkt rechts neben der Eingangstür unter der Garderobe und ist innen gut beschriftet.`}
  ]}
};

function pageHeading(eyebrow,title,intro){return `<header class="page-heading"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${intro}</p></header>`}

function startPage(){return `<section class="page">
  <div class="hero"><div class="hero-content"><p class="eyebrow">Willkommen zu Hause</p><h1>Willkommen in Mendel11</h1><p>Alles Wichtige für eine entspannte Woche mit Wohnung, Smart Home, Peppi und Minna.</p><div class="cat-orbit" aria-label="Unsere Katzen"><span class="cat-token"><span class="cat-dot black"></span>Peppi</span><span class="cat-token"><span class="cat-dot orange"></span>Minna</span></div></div></div>
  <div class="section-title"><div><p class="eyebrow">Der schnelle Start</p><h2>Ankommen in 5 Minuten</h2></div></div>
  <div class="quick-grid">
    <article class="quick-card"><span class="quick-number">1</span><div><h3>Ein Schlüssel</h3><p>Er öffnet Haustür, Wohnung, Briefkasten und Keller.</p></div></article>
    <article class="quick-card"><span class="quick-number">2</span><div><h3>WLAN vor Ort</h3><p>QR-Code und Zugangsdaten findet ihr in der Wohnung.</p></div></article>
    <article class="quick-card"><span class="quick-number">3</span><div><h3>Katzen versorgen</h3><p>Morgens und abends füttern. Abends sollen beide drinnen sein.</p></div></article>
  </div>
  <div class="section-title"><div><p class="eyebrow">Direkt zum Thema</p><h2>Was brauchst du?</h2></div></div>
  <div class="dashboard-grid">
    <button class="route-card sage" type="button" data-route="katzen"><span class="route-symbol" aria-hidden="true">◖</span><h3>Peppi & Minna</h3><p>Füttern, Katzenklappe und Abendroutine.</p><small>Täglich wichtig</small></button>
    <button class="route-card blue" type="button" data-route="wohnung"><span class="route-symbol" aria-hidden="true">▦</span><h3>Wohnung bedienen</h3><p>Räume, Licht, Rollos, Heizung und Geräte.</p><small>Mit Grundriss</small></button>
    <button class="route-card peach" type="button" data-route="hilfe"><span class="route-symbol" aria-hidden="true">＋</span><h3>Etwas klappt nicht</h3><p>Schnelle Hilfe bei Technik, Heizung und Katzen.</p><small>Probleme lösen</small></button>
    <button class="route-card yellow" type="button" data-route="naehe"><span class="route-symbol" aria-hidden="true">◎</span><h3>In der Nähe</h3><p>Einkaufen, Bäckerei und ein paar Essensideen.</p><small>Unsere Auswahl</small></button>
  </div>
</section>`}

function catsPage(){return `<section class="page">${pageHeading("Katzenbetreuung","Peppi & Minna","Der normale Tagesablauf ist unkompliziert. Wichtig sind zwei Mahlzeiten, frisches Wasser, etwas Nähe und der gemeinsame Feierabend drinnen.")}
  <div class="portrait-strip"><article class="cat-profile peppi"><strong>Peppi</strong><small>schwarz · manchmal länger draußen</small></article><article class="cat-profile minna"><strong>Minna</strong><small>rot · eher häuslich</small></article></div>
  <div class="section-title"><h2>Der tägliche Ablauf</h2></div>
  <div class="card-grid"><article class="info-card accent-sage"><h3>Morgens</h3><ul><li>Insgesamt eine halbe Dose Nassfutter auf die Näpfe verteilen.</li><li>Wasser in der grauen Schale frisch machen.</li><li>Katzenklo kurz kontrollieren.</li><li>Etwas Ansprache und Nähe einplanen.</li></ul></article><article class="info-card accent-blue"><h3>Abends</h3><ul><li>Wieder insgesamt eine halbe Dose Nassfutter geben.</li><li>Prüfen, ob Peppi und Minna beide drinnen sind.</li><li>Falls nötig mit Leckerlis aus dem Flur locken.</li><li>Ein wenig Kuschelzeit ist sehr willkommen.</li></ul></article></div>
  <div class="notice"><strong>Futternäpfe</strong><p>Zum Säubern bitte nur den grünen Schwamm benutzen. Trockenfutter nur sparsam wie Leckerlis geben, sonst bleibt das Nassfutter liegen.</p></div>
  <div class="section-title"><h2>Wo ist was?</h2></div>
  <div class="card-grid three"><article class="info-card"><h3>Wasser</h3><p>Graue Schale links neben der Kommode unter dem Andreaskreuz.</p></article><article class="info-card"><h3>Leckerlis</h3><p>Im Flur im weißen Schub, links oben.</p></article><article class="info-card"><h3>Katzenklo</h3><p>Täglich ansehen. Meistens erledigen beide ihr Geschäft draußen.</p></article></div>
  <div class="section-title"><h2>Katzenklappe</h2></div>
  <details open><summary>Normaler Betrieb</summary><div class="detail-body"><p>Die Klappe öffnet morgens ungefähr kurz vor 6 Uhr und verriegelt abends gegen 18 Uhr. Danach können Peppi und Minna weiterhin hinein, aber nicht mehr hinaus. Fremde Katzen werden über den Chip ausgesperrt.</p><p>Im normalen Betrieb müsst ihr nichts einstellen.</p></div></details>
  <details><summary>Rote LED oder schwache Batterien</summary><div class="detail-body"><p>Die rote LED blinkt zunächst und leuchtet später dauerhaft. Die Klappe verwendet vier AA-Akkus.</p><ol><li>Akkus im grünen Schrank rechts neben der Terrassentür laden – zweites Fach von unten.</li><li>Am besten über Nacht laden.</li><li>Erst am nächsten Morgen ungefähr zur normalen Öffnungszeit wieder einsetzen.</li></ol><p>Nach dem Einsetzen kann die Verriegelung vorübergehend außer Kraft sein. Deshalb bitte nicht abends einsetzen.</p></div></details>
  <div class="section-title"><h2>Wenn etwas passiert</h2></div>
  <details><summary>Minna erbricht</summary><div class="detail-body"><p>Das passiert gelegentlich, meist nach einer ungeeigneten Pflanze, und beruhigt sich üblicherweise von selbst. Bei wiederholtem Erbrechen bitte Bescheid geben.</p></div></details>
  <details><summary>Peppi bringt eine Maus oder einen Vogel mit</summary><div class="detail-body"><ol><li>Türen zu noch nicht betroffenen Räumen schließen.</li><li>Peppi ruhig nach draußen lotsen.</li><li>Die Katzenklappe manuell vorübergehend auf „kein Eintritt“ stellen.</li><li>Danach wieder auf normalen Betrieb zurückstellen.</li></ol></div></details>
  <details><summary>Die Katzen sind lange allein</summary><div class="detail-body"><p>Ein ganzer Tag ist grundsätzlich in Ordnung. Dann morgens und abends bitte bewusst Zeit für Ansprache, Nähe und Kuscheln einplanen.</p></div></details>
</section>`}

function floorplanSvg(){return `<svg class="floorplan" viewBox="0 0 1000 760" role="img" aria-labelledby="floorplan-title floorplan-desc">
  <title id="floorplan-title">Vereinfachter Grundriss von Mendel11</title><desc id="floorplan-desc">Anklickbare Räume: Kinderzimmer, Schlafzimmer, Küche, Bahnhof, Bad und Flur.</desc>
  <rect x="72" y="28" width="300" height="75" rx="18" fill="#d8e5d8" stroke="rgba(23,54,58,.35)" stroke-width="4"/><text x="222" y="70" text-anchor="middle" class="room-label">Balkon</text>
  <g tabindex="0" role="button" aria-label="Kinderzimmer öffnen" data-room="kinderzimmer"><rect class="room-shape" x="72" y="118" width="390" height="268" rx="12" fill="#b9d2c1"/><text x="267" y="245" text-anchor="middle" class="room-label">Kinderzimmer</text><text x="267" y="271" text-anchor="middle" class="room-note">Zimmer 1</text></g>
  <g tabindex="0" role="button" aria-label="Schlafzimmer öffnen" data-room="schlafzimmer"><rect class="room-shape" x="72" y="386" width="390" height="300" rx="12" fill="#a9cbd8"/><text x="267" y="526" text-anchor="middle" class="room-label">Schlafzimmer</text><text x="267" y="552" text-anchor="middle" class="room-note">auch Wohnzimmer</text></g>
  <g tabindex="0" role="button" aria-label="Flur öffnen" data-room="flur"><rect class="room-shape" x="462" y="118" width="124" height="122" rx="10" fill="#e4d9a9"/><text x="524" y="174" text-anchor="middle" class="room-label">Flur</text></g>
  <g tabindex="0" role="button" aria-label="Küche öffnen" data-room="kueche"><path class="room-shape" d="M586 118 H928 V526 H780 V558 H586 Z" fill="#c8dcd0"/><text x="747" y="315" text-anchor="middle" class="room-label">Küche</text><text x="747" y="341" text-anchor="middle" class="room-note">Essen & Kochen</text></g>
  <g tabindex="0" role="button" aria-label="Bahnhof öffnen" data-room="bahnhof"><rect class="room-shape" x="744" y="118" width="184" height="116" rx="10" fill="#d7e6df"/><text x="836" y="170" text-anchor="middle" class="room-label">Bahnhof</text><text x="836" y="194" text-anchor="middle" class="room-note">Separee</text></g>
  <g tabindex="0" role="button" aria-label="Bad öffnen" data-room="bad"><rect class="room-shape" x="586" y="558" width="342" height="128" rx="12" fill="#c8dce5"/><text x="757" y="617" text-anchor="middle" class="room-label">Bad</text></g>
  <rect x="704" y="696" width="224" height="48" rx="16" fill="#e8c8b8" stroke="rgba(23,54,58,.35)" stroke-width="4"/><text x="816" y="728" text-anchor="middle" class="room-label">Terrasse</text>
</svg>`}

function homePage(){return `<section class="page">${pageHeading("Wohnung","Alles hat seinen Platz","Der Grundriss ist anklickbar. Darunter stehen die wichtigsten gemeinsamen Befehle und Geräte.")}
  <article class="floorplan-card"><div class="floorplan-toolbar"><div><h2>Räume öffnen</h2><small>Tippe auf einen Raum</small></div><span class="pill">vereinfachter Plan</span></div>${floorplanSvg()}</article>
  <div class="section-title"><h2>Alexa & Licht</h2></div>
  <div class="action-grid">
    <article class="action-card"><h3>Aktivierungswort</h3><p>In der Küche heißt Alexa <strong>Ziggy</strong>. In allen anderen Räumen bleibt es bei Alexa.</p><span class="command">Ziggy, stelle einen Timer</span></article>
    <article class="action-card"><h3>Alles ruhig</h3><p>Schaltet alle Lichter und die Musik aus. Andere Geräte bleiben an.</p><span class="command">Alexa, alles ausschalten</span></article>
    <article class="action-card"><h3>Bettgehzeit</h3><p>Alles geht aus, nur die Leselampe <strong>Simon</strong> am Bett bleibt an.</p><span class="command">Alexa, Bettgehzeit</span></article>
    <article class="action-card"><h3>Raumlicht</h3><p>Die normalen Raum-Befehle funktionieren direkt.</p><span class="command">Alexa, Licht im Schlafzimmer an</span></article>
  </div>
  <div class="section-title"><h2>Rollos</h2></div>
  <div class="card-grid"><article class="info-card accent-blue"><h3>Per Sprache</h3><div class="pill-row"><span class="pill">Rollos hoch</span><span class="pill">Rollos runter</span><span class="pill">Küchenrollo hoch</span></div><p>Die Raum-Namen funktionieren entsprechend auch für die anderen Rollos.</p></article><article class="info-card accent-sage"><h3>Am Touchdisplay</h3><ul><li>oben: hoch</li><li>Mitte: Pause</li><li>unten: runter</li></ul><p>Das manuelle Rollo im Bahnhof ist etwas kaputt und bleibt am besten in Ruhe.</p></article></div>
  <div class="section-title"><h2>Heizung</h2></div>
  <details><summary>Temperatur einstellen</summary><div class="detail-body"><p>Per Alexa, an den Wandreglern in Küche, Schlafzimmer und Kinderzimmer oder direkt am Thermostat. Im Kinderzimmer bitte den Wandregler benutzen.</p></div></details>
  <details><summary>Fünf Minuten Heiz-Boost</summary><div class="detail-body"><p>Doppelt auf den Drehregler am Wandthermostat oder Heizkörperthermostat drücken.</p></div></details>
  <div class="section-title"><h2>Haushalt</h2></div>
  <div class="dashboard-grid"><button class="route-card yellow" type="button" data-route="kaffee"><span class="route-symbol">☕</span><h3>Kaffee</h3><p>Bialetti, Dedica und Milchaufschäumer.</p></button><button class="route-card blue" type="button" data-route="film"><span class="route-symbol">▷</span><h3>Film & Musik</h3><p>Denon, Beamer, Leinwand und Lautsprecher.</p></button><button class="route-card sage" type="button" data-route="hilfe"><span class="route-symbol">⌁</span><h3>McDreamy</h3><p>Staubsaugerroboter und Handstaubsauger.</p></button><button class="route-card peach" type="button" data-route="abreise"><span class="route-symbol">↗</span><h3>Müll & Abreise</h3><p>Trennung, Tonnen und letzter Check.</p></button></div>
</section>`}

function helpPage(){return `<section class="page">${pageHeading("Hilfe","Wenn etwas nicht klappt","Die meisten Probleme lassen sich mit wenigen Handgriffen lösen. Bei Unsicherheit bitte lieber kurz nachfragen.")}
  <div class="section-title"><h2>Schnelle Hilfe</h2></div>
  <details open><summary>WLAN, Alexa oder mehrere Geräte reagieren nicht</summary><div class="detail-body"><ol><li>Im Schlafzimmer das linke Sofakissen umklappen.</li><li>Den Schalter der Gruppensteckdose kurz aus- und wieder einschalten.</li><li>Ein paar Minuten warten.</li></ol><p>Dabei starten Router, Drucker, Denon und Zigbee-Hub neu.</p></div></details>
  <details><summary>Ein Heizkörper wird plötzlich extrem heiß</summary><div class="detail-body"><ol><li>Neue Batterien aus der mittleren Schublade des Buffetschranks in der Küche einsetzen.</li><li>Am Thermostat doppelt auf den Drehregler drücken.</li><li>Die Kalibrierung notfalls zwei- oder dreimal wiederholen.</li><li>Warten, bis das Ventil hörbar schließt.</li></ol></div></details>
  <details><summary>Die Katzenklappe zeigt eine rote LED</summary><div class="detail-body"><p>Vier AA-Akkus im Ladegerät im grünen Schrank rechts neben der Terrassentür laden. Zweites Fach von unten. Erst am nächsten Morgen wieder einsetzen.</p></div></details>
  <details><summary>McDreamy soll saugen</summary><div class="detail-body"><p>„Alexa, starte McDreamy“. An Schwellen braucht der Roboter manchmal Hilfe. Ins Bad muss er manuell gesetzt werden. Ein Handstaubsauger steht im Haushaltsschrank im Bahnhof.</p></div></details>
  <details><summary>Der Geschirrspüler soll laufen</summary><div class="detail-body"><p>Zwei volle blaue Löffel Pulver einfüllen. Standardmäßig „Alexa, starte Effizienzprogramm“. Bei starker Beladung oder Geruch kann das Intensivprogramm verwendet werden.</p></div></details>
  <div class="section-title"><h2>Sicherungen & kleine Notfälle</h2></div>
  <div class="card-grid"><article class="info-card accent-yellow"><h3>Sicherungskasten</h3><p>Im Flur direkt rechts neben der Eingangstür, unter der Garderobe. Innen ist alles genau beschriftet.</p></article><article class="info-card accent-peach"><h3>Pflaster</h3><p>Im kleinen weißen Schränkchen im Bad. Einen vollständigen Erste-Hilfe-Kasten gibt es nicht.</p></article></div>
  <div class="section-title"><h2>Tierarzt</h2></div><article class="info-card accent-sage"><h3>Tierarztpraxis am Amalienpark</h3><p>Breite Straße 2A · 13187 Berlin-Pankow</p><p><strong>030 4868702</strong></p><p>Außerhalb der Öffnungszeiten bitte zuerst bei uns melden.</p></article>
  <div class="notice"><strong>Nachbarschaft</strong><p>Die Hausgemeinschaft ist freundlich und unkompliziert. Im Notfall können Vogelsang gegenüber oder Hassel/Köpke in Hausnummer 13 helfen.</p></div>
</section>`}

function coffeePage(){return `<section class="page">${pageHeading("Küche","Kaffee","Für den schnellen Weg gibt es die Bialetti. Wer Lust auf mehr hat, nutzt Mühle, Dedica und den separaten Milchaufschäumer.")}
  <div class="card-grid"><article class="info-card accent-yellow"><h3>Einfach: Bialetti</h3><p>Die unkomplizierte Variante, falls ihr nicht tiefer in den Siebträger einsteigen möchtet.</p></article><article class="info-card accent-blue"><h3>Siebträger: Grundrezept</h3><ul><li>Mühle ungefähr auf Mahlgrad 7 stellen.</li><li>Siebträger direkt befüllen.</li><li>Mit dem Tamper andrücken.</li><li>Die beiden horizontalen Markierungsstriche müssen sichtbar bleiben.</li></ul></article></div>
  <div class="section-title"><h2>De’Longhi Dedica</h2></div><article class="step-card"><h3>Espresso zubereiten</h3><ol class="steps"><li>Passenden Einsatz für einfachen oder doppelten Shot wählen.</li><li>Siebträger einspannen.</li><li>Oben die Taste für einen oder zwei Shots drücken.</li><li>Kaffeemehl in die Knock Box geben – Biomüll.</li></ol></article>
  <details><summary>Häufigster Fehler: Wassertank leer</summary><div class="detail-body"><p>Das System über die Milchdüse einmal frei laufen lassen beziehungsweise entlüften. Die genaue Anleitung liegt in der Schublade rechts vom Kühlschrank.</p></div></details>
  <details><summary>Cold Brew</summary><div class="detail-body"><p>Bitte die Anleitung in der Schublade rechts vom Kühlschrank verwenden.</p></div></details>
  <div class="section-title"><h2>Milchaufschäumer</h2></div><article class="step-card"><ol class="steps"><li>Milch mindestens so hoch einfüllen, dass der magnetische Ring bedeckt ist.</li><li>Warm oder kalt wählen.</li><li>Start drücken.</li><li>Den fertigen Schaum leicht klopfen.</li></ol><p>Cappuccinotassen stehen links und rechts vom Kaffee- und Teeregal.</p></article>
</section>`}

function filmPage(){return `<section class="page">${pageHeading("Schlafzimmer","Film & Musik","Die Denon-Anlage lässt sich sehr einfach streamen. Für einen Film braucht es nur Leinwand, Fire TV und den richtigen Quick-Select-Modus.")}
  <div class="section-title"><h2>Musik hören</h2></div><article class="info-card accent-blue"><h3>Denon</h3><p>Startet normalerweise automatisch über Spotify Connect oder AirPlay.</p><div class="pill-row"><span class="pill">Spotify Connect</span><span class="pill">AirPlay</span><span class="pill">Quick Select 2</span></div><p>Die Fernbedienung hängt im kleinen Säckchen unter dem Lissabon-Bild.</p></article>
  <div class="section-title"><h2>Filmabend</h2></div><article class="step-card"><ol class="steps"><li>Leinwand mit der kleinen Kordel herunterziehen.</li><li>Fire TV Stick einschalten.</li><li>Am Denon <strong>Quick Select 1</strong> drücken.</li><li>Falls Fire TV nicht reagiert, am Steuerrad hoch oder runter drücken.</li><li>Gegebenenfalls die Lautstärke erhöhen.</li></ol></article><div class="notice"><strong>Leinwand wieder hoch</strong><p>Leicht nach unten ziehen. Danach rollt sie automatisch sanft nach oben.</p></div>
  <div class="section-title"><h2>Musik in den Räumen</h2></div><div class="card-grid three"><article class="info-card"><h3>Bad</h3><p>„Alexa, spiele …“. Lautsprecher: Badzipp.</p></article><article class="info-card"><h3>Kinderzimmer</h3><p>„Alexa, spiele …“. Lautsprecher: Lottezipp.</p></article><article class="info-card"><h3>Bahnhof</h3><p>Direkt auf Reisezipp streamen.</p></article></div>
</section>`}

function nearbyPage(){const map=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;return `<section class="page">${pageHeading("Pankow","In der Nähe","Eine kleine, bewusst kurze Auswahl für den Alltag. Öffnungszeiten bitte aktuell prüfen.")}
  <div class="place-grid">
    <article class="place-card recommended"><span class="place-type">Unsere Empfehlung</span><h3>BIO COMPANY</h3><p>Die größere Filiale in der Breiten Straße ist für uns der schönste Ort zum Einkaufen.</p><a href="${map("BIO COMPANY Breite Straße 33 Berlin")}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>
    <article class="place-card"><span class="place-type">Großer Einkauf</span><h3>Kaufland</h3><p>In der Breiten Straße. Praktisch, wenn viel gebraucht wird.</p><a href="${map("Kaufland Breite Straße Berlin Pankow")}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>
    <article class="place-card"><span class="place-type">Lange geöffnet</span><h3>EDEKA am Garbátyplatz</h3><p>Gut gelegen, aber häufig ziemlich voll.</p><a href="${map("EDEKA Garbátyplatz Berlin")}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>
    <article class="place-card recommended"><span class="place-type">Bäckerei</span><h3>Madame Eule</h3><p>Unsere klare Empfehlung für Brot, Gebäck und einen kleinen Ausflug.</p><a href="${map("Madame Eule Berlin Pankow")}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>
    <article class="place-card"><span class="place-type">Vietnamesisch</span><h3>Baba đu</h3><p>Nahe Hadlichstraße und Stiftsweg.</p><a href="${map("Baba du Restaurant Berlin Pankow")}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>
    <article class="place-card"><span class="place-type">Pizza</span><h3>Farina 00</h3><p>Eine gute Option für Pizza in der Umgebung.</p><a href="${map("Farina 00 Berlin Pankow")}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>
  </div>
  <div class="section-title"><h2>Drogerien</h2></div><article class="info-card"><p>dm gibt es am Garbátyplatz und im Rathaus-Center. Im Rathaus-Center befindet sich außerdem Rossmann.</p></article>
</section>`}

function departurePage(){return `<section class="page">${pageHeading("Zum Schluss","Abreise","Alles hier ist als freundlicher Abschluss gedacht, nicht als strenge Pflichtliste.")}
  <article class="list-card"><h3>Gern erledigen, falls es gut passt</h3><ul class="check-list"><li>Müll rausbringen.</li><li>Bett abziehen.</li><li>Geschirrspüler starten.</li><li>Wohnung grob ordentlich hinterlassen.</li><li>Briefkasten noch einmal leeren.</li></ul></article>
  <div class="section-title"><h2>Katzen & Schlüssel</h2></div><div class="card-grid"><article class="info-card accent-sage"><h3>Späte Rückkehr</h3><p>Wenn wir erst später zurückkommen, den Katzen gern eine Extraportion Futter geben.</p></article><article class="info-card accent-blue"><h3>Schlüssel</h3><p>Bitte an dem Ort hinterlegen, den wir individuell vereinbart haben.</p></article></div>
  <div class="notice"><strong>Danke</strong><p>Vor allem dafür, dass Peppi und Minna Gesellschaft hatten und Mendel11 nicht allein war.</p></div>
</section>`}

const renderers={start:startPage,katzen:catsPage,wohnung:homePage,hilfe:helpPage,naehe:nearbyPage,abreise:departurePage,kaffee:coffeePage,film:filmPage};
function currentRoute(){const hash=window.location.hash.replace(/^#\/?/,"");return routes.has(hash)?hash:"start"}
function navigate(route){const safe=routes.has(route)?route:"start";if(window.location.hash===`#/${safe}`)render();else window.location.hash=`/${safe}`;if(moreDialog.open)moreDialog.close()}
function routeTitle(route){return({katzen:"Peppi & Minna",wohnung:"Wohnung",hilfe:"Hilfe",naehe:"In der Nähe",abreise:"Abreise",kaffee:"Kaffee",film:"Film & Musik"})[route]||"Mendel11"}
function render(){const route=currentRoute();app.innerHTML=renderers[route]();document.querySelectorAll(".nav-item").forEach(item=>{const active=item.dataset.route===route;item.classList.toggle("active",active);item.setAttribute("aria-current",active?"page":"false")});bindRouteButtons();bindRooms();window.scrollTo({top:0,behavior:"instant"});document.title=route==="start"?"Mendel11":`${routeTitle(route)} · Mendel11`}
function bindRouteButtons(){document.querySelectorAll("[data-route]").forEach(button=>{if(button.dataset.bound==="true")return;button.dataset.bound="true";button.addEventListener("click",()=>navigate(button.dataset.route))})}
function bindRooms(){document.querySelectorAll("[data-room]").forEach(room=>{const open=()=>openRoom(room.dataset.room);room.addEventListener("click",open);room.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();open()}})})}
function openRoom(key){const room=roomContent[key];if(!room)return;roomDialogContent.innerHTML=`<p class="eyebrow">${room.subtitle}</p><h2>${room.title}</h2>${room.sections.map(section=>`<section><h3>${section.title}</h3><p>${section.body}</p></section>`).join("")}`;roomDialog.showModal()}
document.querySelector("#moreButton").addEventListener("click",()=>moreDialog.showModal());
document.querySelector("#closeMore").addEventListener("click",()=>moreDialog.close());
document.querySelector("#closeRoom").addEventListener("click",()=>roomDialog.close());
[moreDialog,roomDialog].forEach(dialog=>dialog.addEventListener("click",event=>{const rect=dialog.getBoundingClientRect();const outside=event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;if(outside)dialog.close()}));
window.addEventListener("hashchange",render);bindRouteButtons();render();
