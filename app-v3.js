const SKIN_KEY = 'mendel11-skin';
const SKINS = ['classic', 'dark', 'bright'];

function setSkin(skin) {
  const safeSkin = SKINS.includes(skin) ? skin : 'classic';
  document.documentElement.dataset.skin = safeSkin;
  try { localStorage.setItem(SKIN_KEY, safeSkin); } catch (error) { /* Speicherung ist optional. */ }
  document.querySelectorAll('[data-skin-choice]').forEach(button => {
    button.setAttribute('aria-pressed', button.dataset.skinChoice === safeSkin ? 'true' : 'false');
  });
}

function addSkinPicker() {
  const dialog = document.querySelector('#moreDialog');
  if (!dialog || dialog.querySelector('.skin-panel')) return;
  const panel = document.createElement('section');
  panel.className = 'skin-panel';
  panel.innerHTML = `
    <p class="eyebrow">Darstellung</p>
    <h3>Skin auswählen</h3>
    <div class="skin-options" role="group" aria-label="Darstellung auswählen">
      <button class="skin-choice" type="button" data-skin-choice="classic" aria-pressed="false">
        <span class="skin-swatch" aria-hidden="true"><i></i><i></i><i></i></span>
        <strong>Klassisch</strong>
        <small>Helle Pastelltöne</small>
      </button>
      <button class="skin-choice" type="button" data-skin-choice="dark" aria-pressed="false">
        <span class="skin-swatch" aria-hidden="true"><i></i><i></i><i></i></span>
        <strong>Nacht</strong>
        <small>Dunkel und ruhig</small>
      </button>
      <button class="skin-choice" type="button" data-skin-choice="bright" aria-pressed="false">
        <span class="skin-swatch" aria-hidden="true"><i></i><i></i><i></i></span>
        <strong>Quietschbunt</strong>
        <small>Kräftig und verspielt</small>
      </button>
    </div>`;
  dialog.append(panel);
  panel.querySelectorAll('[data-skin-choice]').forEach(button => {
    button.addEventListener('click', () => setSkin(button.dataset.skinChoice));
  });
  setSkin(document.documentElement.dataset.skin || 'classic');
}

function nearbyPageV3() {
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
    ${head('Pankow & Berlin', 'In der Nähe und in der Stadt', 'Zuerst die praktischen Orte rund um Mendel11, danach unsere persönlichen Essens- und Ausflugstipps in Berlin. Öffnungszeiten bitte aktuell prüfen.')}

    ${sectionTitle('Rund um Mendel11')}
    <div class="place-grid">
      ${place('Unsere Empfehlung', 'BIO COMPANY', 'Die größere Filiale in der Breiten Straße.', 'BIO COMPANY Breite Straße 33 Berlin', 'recommended')}
      ${place('Großer Einkauf', 'Kaufland', 'Praktisch für einen großen Einkauf.', 'Kaufland Breite Straße Berlin Pankow')}
      ${place('Gut gelegen', 'EDEKA am Garbátyplatz', 'Häufig ziemlich voll.', 'EDEKA Garbátyplatz Berlin')}
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

    ${sectionTitle('Drogerien')}
    ${info('dm & Rossmann', '<p>dm am Garbátyplatz und im Rathaus-Center; Rossmann ebenfalls im Rathaus-Center.</p>')}
  </section>`;
}

pages.naehe = nearbyPageV3;
addSkinPicker();
render();
