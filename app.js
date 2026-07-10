const app = document.querySelector('#app');
const more = document.querySelector('#moreDialog');
const roomDialog = document.querySelector('#roomDialog');
const roomBody = document.querySelector('#roomDialogContent');
const routes = ['start','katzen','wohnung','hilfe','naehe','abreise','kaffee','film'];

const head = (over,title,intro) => `<header class="page-heading"><p class="eyebrow">${over}</p><h1>${title}</h1><p>${intro}</p></header>`;
const title = text => `<div class="section-title"><h2>${text}</h2></div>`;
const details = (label,body,open=false) => `<details ${open?'open':''}><summary>${label}</summary><div class="detail-body">${body}</div></details>`;
const info = (heading,body,accent='') => `<article class="info-card ${accent}"><h3>${heading}</h3>${body}</article>`;
const pills = (...items) => `<div class="pill-row">${items.map(x=>`<span class="pill">${x}</span>`).join('')}</div>`;

const rooms = {
  kinderzimmer:['Kinderzimmer','Zimmer 1',[
    ['Licht','Alexa-Lampen: Ecke, Höhle, Joker, Lissabon, Mallampe, Schaukel, Weihnachten und Mond. <strong>Höhle</strong> ist unter dem Bett, <strong>Joker</strong> hat den grünen Schirm, <strong>Mallampe</strong> steht oben auf dem Schrank und <strong>Weihnachten</strong> ist der rote Stern an der Balkontür.'],
    ['Klassisch','Mond wird meist am Schalter bedient. Die Lichterkette über dem Kinderbett funktioniert ebenfalls klassisch.'],
    ['Musik','Vor Ort einfach „Alexa, spiele …“ sagen. Der Lautsprecher heißt Lottezipp.'],
    ['Heizung','Temperatur über Alexa oder den Wandregler einstellen. Doppeldruck aktiviert fünf Minuten Heiz-Boost.']]],
  schlafzimmer:['Schlafzimmer','Schlafen, Sofa, Musik und Film',[
    ['Licht','Billy, Pilz, Rakete, Regal, Simon, Sofa und Kreis. <strong>Stuhl</strong> steuert LeuchteEins und LeuchteZwei; zusätzlich gibt es die Gruppe <strong>Sofaecke</strong>.'],
    ['Musik','Denon startet meist automatisch über Spotify Connect oder AirPlay. Für Musik: <strong>Quick Select 2</strong>.'],
    ['Film','Fernbedienungen liegen im Säckchen unter dem Lissabon-Bild. Für Film: <strong>Quick Select 1</strong>.'],
    ['Router','Hinter dem linken Sofakissen liegt die Gruppensteckdose für Router, Drucker, Denon und Zigbee-Hub.']]],
  kueche:['Küche','Kochen, Kaffee und Ziggy',[
    ['Alexa','Hier lautet das Aktivierungswort <strong>Ziggy</strong>.'],
    ['Licht','Andreas, Esstisch, Kaffee, Küchenschlange und Obst. „Küche aus“ schaltet auch den Bahnhof aus.'],
    ['Geschirrspüler','Zwei volle blaue Löffel Pulver. Standard: „Alexa, starte Effizienzprogramm“.'],
    ['Geräte','Herd, Backofen und Wasserkocher sind normal. Entsafter, Mixer und Dampfgarer bitte nur nach Rücksprache.']]],
  bahnhof:['Bahnhof','Kleines Separee in der Küche',[
    ['Licht','Die Gruppe Bahnhof besteht aus Separee links und Separee rechts.'],
    ['Musik','Direkt auf den Zipp Mini namens Reisezipp streamen.'],
    ['Haushalt','Im Haushaltsschrank steht der Handstaubsauger.'],
    ['Rollo','Das manuelle Rollo ist etwas defekt und bleibt am besten in Ruhe.']]],
  bad:['Bad','Licht, Dusche und Wäsche',[
    ['Licht','Badlicht verbindet Spiegel- und Deckenlicht. Kleiner runder Taster: Nachtlicht.'],
    ['Dusche','Rechts Temperatur. Links nach hinten Regendusche, nach vorne Handbrause.'],
    ['Musik','„Alexa, spiele …“ oder „Alexa, ich will duschen“.'],
    ['Handtücher','Ganz oben im Badregal. Pflaster liegen im kleinen weißen Schränkchen.']]],
  flur:['Flur','Licht, Schlüssel und Leckerlis',[
    ['Flurlicht','Kurz oben: zwei Minuten an. Kurz unten: aus. Lang oben oder unten: dimmen.'],
    ['Dauerlicht','„Alexa, Flurlicht an“ lässt das Licht dauerhaft an.'],
    ['Katzen','Leckerlis liegen im weißen Schub links oben. Innentüren leicht offen lassen.'],
    ['Sicherungen','Direkt rechts neben der Eingangstür unter der Garderobe.']]]
};

function startPage(){return `<section class="page">
<div class="hero"><div class="hero-content"><p class="eyebrow">Willkommen zu Hause</p><h1>Willkommen in Mendel11</h1><p>Alles Wichtige für eine entspannte Woche mit Wohnung, Smart Home, Peppi und Minna.</p><div class="cat-orbit"><span class="cat-token"><span class="cat-dot black"></span>Peppi</span><span class="cat-token"><span class="cat-dot orange"></span>Minna</span></div></div></div>
${title('Ankommen in 5 Minuten')}<div class="quick-grid">
<article class="quick-card"><span class="quick-number">1</span><div><h3>Ein Schlüssel</h3><p>Für Haustür, Wohnung, Briefkasten und Keller.</p></div></article>
<article class="quick-card"><span class="quick-number">2</span><div><h3>WLAN vor Ort</h3><p>QR-Code und Zugangsdaten findet ihr in der Wohnung.</p></div></article>
<article class="quick-card"><span class="quick-number">3</span><div><h3>Katzen</h3><p>Morgens und abends füttern. Abends sollen beide drinnen sein.</p></div></article></div>
${title('Was brauchst du?')}<div class="dashboard-grid">
${routeCard('katzen','sage','◖','Peppi & Minna','Füttern, Katzenklappe und Abendroutine.','Täglich wichtig')}
${routeCard('wohnung','blue','▦','Wohnung bedienen','Räume, Licht, Rollos, Heizung und Geräte.','Mit Grundriss')}
${routeCard('hilfe','peach','＋','Etwas klappt nicht','Schnelle Hilfe bei Technik, Heizung und Katzen.','Probleme lösen')}
${routeCard('naehe','yellow','◎','In der Nähe','Einkaufen, Bäckerei und ein paar Essensideen.','Unsere Auswahl')}
</div></section>`}

function routeCard(route,color,symbol,heading,body,small=''){return `<button class="route-card ${color}" type="button" data-route="${route}"><span class="route-symbol">${symbol}</span><h3>${heading}</h3><p>${body}</p>${small?`<small>${small}</small>`:''}</button>`}

function catsPage(){return `<section class="page">${head('Katzenbetreuung','Peppi & Minna','Zwei Mahlzeiten, frisches Wasser, etwas Nähe und der gemeinsame Feierabend drinnen.')}
<div class="portrait-strip"><article class="cat-profile peppi"><strong>Peppi</strong><small>schwarz · manchmal länger draußen</small></article><article class="cat-profile minna"><strong>Minna</strong><small>rot · eher häuslich</small></article></div>
${title('Der tägliche Ablauf')}<div class="card-grid">
${info('Morgens','<ul><li>Insgesamt eine halbe Dose Nassfutter verteilen.</li><li>Graue Wasserschale frisch machen.</li><li>Katzenklo kontrollieren.</li><li>Etwas Ansprache und Nähe.</li></ul>','accent-sage')}
${info('Abends','<ul><li>Wieder eine halbe Dose Nassfutter.</li><li>Prüfen, ob beide Katzen drinnen sind.</li><li>Falls nötig mit Leckerlis locken.</li><li>Etwas Kuschelzeit einplanen.</li></ul>','accent-blue')}</div>
<div class="notice"><strong>Futternäpfe</strong><p>Nur mit dem grünen Schwamm säubern. Trockenfutter sparsam wie Leckerlis geben.</p></div>
${title('Wo ist was?')}<div class="card-grid three">${info('Wasser','<p>Graue Schale links neben der Kommode unter dem Andreaskreuz.</p>')}${info('Leckerlis','<p>Im Flur, weißer Schub links oben.</p>')}${info('Katzenklo','<p>Täglich ansehen; meist gehen beide draußen.</p>')}</div>
${title('Katzenklappe')}${details('Normaler Betrieb','<p>Öffnet kurz vor 6 Uhr und verriegelt gegen 18 Uhr. Danach können Peppi und Minna hinein, aber nicht mehr hinaus. Fremde Katzen bleiben per Chip draußen.</p>',true)}${details('Rote LED oder schwache Akkus','<p>Vier AA-Akkus im grünen Schrank rechts neben der Terrassentür laden, zweites Fach von unten. Über Nacht laden und erst am nächsten Morgen wieder einsetzen.</p>')}
${title('Wenn etwas passiert')}${details('Minna erbricht','<p>Meist nach einer ungeeigneten Pflanze und gewöhnlich vorübergehend. Bei wiederholtem Erbrechen bitte Bescheid geben.</p>')}${details('Peppi bringt Beute mit','<ol><li>Andere Räume schließen.</li><li>Peppi ruhig nach draußen lotsen.</li><li>Katzenklappe vorübergehend auf „kein Eintritt“ stellen.</li><li>Danach wieder normal einstellen.</li></ol>')}${details('Langer Tag außer Haus','<p>Grundsätzlich in Ordnung. Morgens und abends dann bewusst Nähe und Kuschelzeit einplanen.</p>')}</section>`}

function floorplan(){return `<svg class="floorplan" viewBox="0 0 1000 760" role="img" aria-label="Anklickbarer vereinfachter Grundriss">
<rect x="72" y="28" width="300" height="75" rx="18" fill="#d8e5d8" stroke="rgba(23,54,58,.35)" stroke-width="4"/><text x="222" y="70" text-anchor="middle" class="room-label">Balkon</text>
${roomShape('kinderzimmer','<rect class="room-shape" x="72" y="118" width="390" height="268" rx="12" fill="#b9d2c1"/>','<text x="267" y="245" text-anchor="middle" class="room-label">Kinderzimmer</text><text x="267" y="271" text-anchor="middle" class="room-note">Zimmer 1</text>')}
${roomShape('schlafzimmer','<rect class="room-shape" x="72" y="386" width="390" height="300" rx="12" fill="#a9cbd8"/>','<text x="267" y="526" text-anchor="middle" class="room-label">Schlafzimmer</text><text x="267" y="552" text-anchor="middle" class="room-note">auch Wohnzimmer</text>')}
${roomShape('flur','<rect class="room-shape" x="462" y="118" width="124" height="122" rx="10" fill="#e4d9a9"/>','<text x="524" y="174" text-anchor="middle" class="room-label">Flur</text>')}
${roomShape('kueche','<path class="room-shape" d="M586 118 H928 V526 H780 V558 H586 Z" fill="#c8dcd0"/>','<text x="747" y="315" text-anchor="middle" class="room-label">Küche</text><text x="747" y="341" text-anchor="middle" class="room-note">Essen & Kochen</text>')}
${roomShape('bahnhof','<rect class="room-shape" x="744" y="118" width="184" height="116" rx="10" fill="#d7e6df"/>','<text x="836" y="170" text-anchor="middle" class="room-label">Bahnhof</text><text x="836" y="194" text-anchor="middle" class="room-note">Separee</text>')}
${roomShape('bad','<rect class="room-shape" x="586" y="558" width="342" height="128" rx="12" fill="#c8dce5"/>','<text x="757" y="617" text-anchor="middle" class="room-label">Bad</text>')}
<rect x="704" y="696" width="224" height="48" rx="16" fill="#e8c8b8" stroke="rgba(23,54,58,.35)" stroke-width="4"/><text x="816" y="728" text-anchor="middle" class="room-label">Terrasse</text></svg>`}
function roomShape(key,shape,label){return `<g tabindex="0" role="button" aria-label="${rooms[key][0]} öffnen" data-room="${key}">${shape}${label}</g>`}

function homePage(){return `<section class="page">${head('Wohnung','Alles hat seinen Platz','Tippe im Grundriss auf einen Raum. Darunter stehen die wichtigsten gemeinsamen Befehle und Geräte.')}
<article class="floorplan-card"><div class="floorplan-toolbar"><div><h2>Räume öffnen</h2><small>Tippe auf einen Raum</small></div><span class="pill">vereinfachter Plan</span></div>${floorplan()}</article>
${title('Alexa & Licht')}<div class="action-grid">${action('Aktivierungswort','In der Küche heißt Alexa <strong>Ziggy</strong>.','Ziggy, stelle einen Timer')}${action('Alles ruhig','Schaltet alle Lichter und die Musik aus.','Alexa, alles ausschalten')}${action('Bettgehzeit','Alles aus, nur die Leselampe Simon bleibt an.','Alexa, Bettgehzeit')}${action('Raumlicht','Normale Raum-Befehle funktionieren direkt.','Alexa, Licht im Schlafzimmer an')}</div>
${title('Rollos')}<div class="card-grid">${info('Per Sprache',pills('Rollos hoch','Rollos runter','Küchenrollo hoch')+'<p>Analog für die anderen Räume.</p>','accent-blue')}${info('Am Touchdisplay','<ul><li>oben: hoch</li><li>Mitte: Pause</li><li>unten: runter</li></ul><p>Das manuelle Rollo im Bahnhof bleibt am besten in Ruhe.</p>','accent-sage')}</div>
${title('Heizung')}${details('Temperatur einstellen','<p>Per Alexa, Wandregler oder Heizkörperthermostat. Im Kinderzimmer bitte den Wandregler benutzen.</p>')}${details('Fünf Minuten Heiz-Boost','<p>Doppelt auf den Drehregler am Wand- oder Heizkörperthermostat drücken.</p>')}
${title('Haushalt')}<div class="dashboard-grid">${routeCard('kaffee','yellow','☕','Kaffee','Bialetti, Dedica und Milchaufschäumer.')}${routeCard('film','blue','▷','Film & Musik','Denon, Beamer und Lautsprecher.')}${routeCard('hilfe','sage','⌁','McDreamy','Staubsaugerroboter und Handstaubsauger.')}${routeCard('abreise','peach','↗','Müll & Abreise','Trennung, Tonnen und letzter Check.')}</div></section>`}
function action(h,b,c){return `<article class="action-card"><h3>${h}</h3><p>${b}</p><span class="command">${c}</span></article>`}

function helpPage(){return `<section class="page">${head('Hilfe','Wenn etwas nicht klappt','Die meisten Probleme lassen sich mit wenigen Handgriffen lösen. Bei Unsicherheit bitte nachfragen.')}
${title('Schnelle Hilfe')}${details('WLAN, Alexa oder mehrere Geräte reagieren nicht','<ol><li>Im Schlafzimmer das linke Sofakissen umklappen.</li><li>Gruppensteckdose kurz aus- und wieder einschalten.</li><li>Ein paar Minuten warten.</li></ol><p>Router, Drucker, Denon und Zigbee-Hub starten dabei neu.</p>',true)}${details('Ein Heizkörper wird extrem heiß','<ol><li>Batterien aus der mittleren Schublade des Buffetschranks einsetzen.</li><li>Am Thermostat doppelt drücken.</li><li>Kalibrierung notfalls mehrfach wiederholen.</li><li>Warten, bis das Ventil hörbar schließt.</li></ol>')}${details('Katzenklappe zeigt rote LED','<p>Vier AA-Akkus im grünen Schrank rechts neben der Terrassentür laden. Erst am nächsten Morgen wieder einsetzen.</p>')}${details('McDreamy soll saugen','<p>„Alexa, starte McDreamy“. An Schwellen gegebenenfalls helfen. Ins Bad manuell setzen. Der Handstaubsauger steht im Bahnhof.</p>')}${details('Geschirrspüler starten','<p>Zwei volle blaue Löffel Pulver. Standard: „Alexa, starte Effizienzprogramm“. Intensiv bei sehr voller Maschine oder Geruch.</p>')}
${title('Sicherungen & kleine Notfälle')}<div class="card-grid">${info('Sicherungskasten','<p>Im Flur direkt rechts neben der Eingangstür unter der Garderobe. Innen genau beschriftet.</p>','accent-yellow')}${info('Pflaster','<p>Im kleinen weißen Schränkchen im Bad. Einen vollständigen Erste-Hilfe-Kasten gibt es nicht.</p>','accent-peach')}</div>
${title('Tierarzt')}${info('Tierarztpraxis am Amalienpark','<p>Breite Straße 2A · 13187 Berlin-Pankow</p><p><strong>030 4868702</strong></p><p>Außerhalb der Öffnungszeiten bitte zuerst bei uns melden.</p>','accent-sage')}
<div class="notice"><strong>Nachbarschaft</strong><p>Die Hausgemeinschaft ist freundlich und unkompliziert. Lokale Notfallkontakte teilen wir individuell.</p></div></section>`}

function coffeePage(){return `<section class="page">${head('Küche','Kaffee','Für den schnellen Weg gibt es die Bialetti. Alternativ stehen Mühle, Dedica und Milchaufschäumer bereit.')}
<div class="card-grid">${info('Einfach: Bialetti','<p>Die unkomplizierte Variante.</p>','accent-yellow')}${info('Siebträger: Grundrezept','<ul><li>Mühle etwa auf Mahlgrad 7.</li><li>Siebträger befüllen und tampen.</li><li>Beide horizontalen Markierungen müssen sichtbar bleiben.</li></ul>','accent-blue')}</div>
${title('De’Longhi Dedica')}<article class="step-card"><ol class="steps"><li>Einsatz für einfachen oder doppelten Shot wählen.</li><li>Siebträger einspannen.</li><li>Passende Taste drücken.</li><li>Kaffeemehl in die Knock Box geben.</li></ol></article>
${details('Wassertank leer','<p>Über die Milchdüse einmal frei laufen lassen beziehungsweise entlüften. Die genaue Anleitung liegt rechts vom Kühlschrank.</p>')}${details('Cold Brew','<p>Bitte die Anleitung in der Schublade rechts vom Kühlschrank verwenden.</p>')}
${title('Milchaufschäumer')}<article class="step-card"><ol class="steps"><li>Milch einfüllen, bis der magnetische Ring bedeckt ist.</li><li>Warm oder kalt wählen.</li><li>Start drücken.</li><li>Fertigen Schaum leicht klopfen.</li></ol><p>Cappuccinotassen stehen über Maschine und Mühle.</p></article></section>`}

function filmPage(){return `<section class="page">${head('Schlafzimmer','Film & Musik','Denon streamt direkt. Für Film braucht es Leinwand, Fire TV und Quick Select 1.')}
${title('Musik hören')}${info('Denon','<p>Startet meist automatisch über Spotify Connect oder AirPlay.</p>'+pills('Spotify Connect','AirPlay','Quick Select 2')+'<p>Fernbedienung im Säckchen unter dem Lissabon-Bild.</p>','accent-blue')}
${title('Filmabend')}<article class="step-card"><ol class="steps"><li>Leinwand mit der Kordel herunterziehen.</li><li>Fire TV einschalten.</li><li>Am Denon Quick Select 1 drücken.</li><li>Falls nötig am Fire-TV-Rad hoch oder runter drücken.</li><li>Lautstärke anpassen.</li></ol></article><div class="notice"><strong>Leinwand hoch</strong><p>Leicht nach unten ziehen; sie rollt dann automatisch hoch.</p></div>
${title('Musik in den Räumen')}<div class="card-grid three">${info('Bad','<p>„Alexa, spiele …“. Lautsprecher: Badzipp.</p>')}${info('Kinderzimmer','<p>„Alexa, spiele …“. Lautsprecher: Lottezipp.</p>')}${info('Bahnhof','<p>Direkt auf Reisezipp streamen.</p>')}</div></section>`}

function nearbyPage(){const map=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;const place=(type,name,body,q,rec='')=>`<article class="place-card ${rec}"><span class="place-type">${type}</span><h3>${name}</h3><p>${body}</p><a href="${map(q)}" target="_blank" rel="noreferrer">In Karten öffnen →</a></article>`;return `<section class="page">${head('Pankow','In der Nähe','Eine kurze Auswahl für den Alltag. Öffnungszeiten bitte aktuell prüfen.')}<div class="place-grid">${place('Unsere Empfehlung','BIO COMPANY','Die größere Filiale in der Breiten Straße.','BIO COMPANY Breite Straße 33 Berlin','recommended')}${place('Großer Einkauf','Kaufland','Praktisch für einen großen Einkauf.','Kaufland Breite Straße Berlin Pankow')}${place('Gut gelegen','EDEKA am Garbátyplatz','Häufig ziemlich voll.','EDEKA Garbátyplatz Berlin')}${place('Bäckerei','Madame Eule','Unsere klare Bäckerei-Empfehlung.','Madame Eule Berlin Pankow','recommended')}${place('Vietnamesisch','Baba đu','Nahe Hadlichstraße und Stiftsweg.','Baba du Restaurant Berlin Pankow')}${place('Pizza','Farina 00','Eine gute Option in der Umgebung.','Farina 00 Berlin Pankow')}</div>${title('Drogerien')}${info('dm & Rossmann','<p>dm am Garbátyplatz und im Rathaus-Center; Rossmann ebenfalls im Rathaus-Center.</p>')}</section>`}

function departurePage(){return `<section class="page">${head('Zum Schluss','Abreise','Eine freundliche Abschlussliste, keine strenge Pflicht.')}<article class="list-card"><h3>Gern erledigen</h3><ul class="check-list"><li>Müll rausbringen.</li><li>Bett abziehen.</li><li>Geschirrspüler starten.</li><li>Grob ordentlich hinterlassen.</li><li>Briefkasten leeren.</li></ul></article>${title('Katzen & Schlüssel')}<div class="card-grid">${info('Späte Rückkehr','<p>Wenn wir erst später kommen, den Katzen gern eine Extraportion Futter geben.</p>','accent-sage')}${info('Schlüssel','<p>Am individuell vereinbarten Ort hinterlegen.</p>','accent-blue')}</div><div class="notice"><strong>Danke</strong><p>Vor allem dafür, dass Peppi und Minna Gesellschaft hatten.</p></div></section>`}

const pages={start:startPage,katzen:catsPage,wohnung:homePage,hilfe:helpPage,naehe:nearbyPage,abreise:departurePage,kaffee:coffeePage,film:filmPage};
const current=()=>{const x=location.hash.replace(/^#\/?/,'');return routes.includes(x)?x:'start'};
function go(route){route=routes.includes(route)?route:'start';if(location.hash===`#/${route}`)render();else location.hash=`/${route}`;if(more.open)more.close()}
function render(){const route=current();app.innerHTML=pages[route]();document.querySelectorAll('.nav-item').forEach(x=>{const on=x.dataset.route===route;x.classList.toggle('active',on);x.setAttribute('aria-current',on?'page':'false')});bindRoutes();bindRooms();scrollTo({top:0,behavior:'auto'});document.title=route==='start'?'Mendel11':`${({katzen:'Peppi & Minna',wohnung:'Wohnung',hilfe:'Hilfe',naehe:'In der Nähe',abreise:'Abreise',kaffee:'Kaffee',film:'Film & Musik'})[route]} · Mendel11`}
function bindRoutes(){document.querySelectorAll('[data-route]').forEach(x=>{if(x.dataset.bound)return;x.dataset.bound='1';x.addEventListener('click',()=>go(x.dataset.route))})}
function bindRooms(){document.querySelectorAll('[data-room]').forEach(x=>{const open=()=>showRoom(x.dataset.room);x.addEventListener('click',open);x.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})})}
function showRoom(key){const [name,sub,sections]=rooms[key];roomBody.innerHTML=`<p class="eyebrow">${sub}</p><h2>${name}</h2>${sections.map(([h,b])=>`<section><h3>${h}</h3><p>${b}</p></section>`).join('')}`;roomDialog.showModal()}
document.querySelector('#moreButton').addEventListener('click',()=>more.showModal());
document.querySelector('#closeMore').addEventListener('click',()=>more.close());
document.querySelector('#closeRoom').addEventListener('click',()=>roomDialog.close());
[more,roomDialog].forEach(d=>d.addEventListener('click',e=>{const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}));
addEventListener('hashchange',render);bindRoutes();render();
