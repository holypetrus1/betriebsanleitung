const originalCatsPageV6 = pages.katzen;
const originalPlacesPageV6 = pages.naehe;

function insertCardsIntoSectionV6(html, heading, cards) {
  const headingMarker = `<div class="section-title"><h2>${heading}</h2></div>`;
  const sectionStart = html.indexOf(headingMarker);
  if (sectionStart < 0) return html;

  const nextSection = html.indexOf('<div class="section-title"><h2>', sectionStart + headingMarker.length);
  const sectionEnd = nextSection < 0 ? html.length : nextSection;
  const sectionHtml = html.slice(sectionStart, sectionEnd);
  const gridEnd = sectionHtml.lastIndexOf('</div>');
  if (gridEnd < 0) return html;

  const updatedSection = `${sectionHtml.slice(0, gridEnd)}${cards}${sectionHtml.slice(gridEnd)}`;
  return `${html.slice(0, sectionStart)}${updatedSection}${html.slice(sectionEnd)}`;
}

function placeCardV6(type, name, body, query, recommended = '') {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  return `<article class="place-card ${recommended}">
    <span class="place-type">${type}</span>
    <h3>${name}</h3>
    <p>${body}</p>
    <a href="${mapUrl}" target="_blank" rel="noreferrer">In Karten öffnen →</a>
  </article>`;
}

pages.katzen = () => originalCatsPageV6()
  .replaceAll('Zwischentüren', 'Zimmertüren');

pages.naehe = () => {
  let html = originalPlacesPageV6();

  html = html.replace(
    'Eine gute Option in der Umgebung. Reservierung von Vorteil.',
    'Eine gute Option in der Umgebung.'
  );

  const berlinFoodStart = html.indexOf('<div class="section-title"><h2>Essen in Berlin</h2></div>');
  const childSectionStart = html.indexOf('<div class="section-title"><h2>Mit Kind in der Nähe</h2></div>');
  if (berlinFoodStart >= 0 && childSectionStart > berlinFoodStart) {
    const berlinFoodSection = html
      .slice(berlinFoodStart, childSectionStart)
      .replace(/\s*<span class="tip-card-symbol" aria-hidden="true">[^<]*<\/span>/g, '');
    html = `${html.slice(0, berlinFoodStart)}${berlinFoodSection}${html.slice(childSectionStart)}`;
  }

  html = insertCardsIntoSectionV6(
    html,
    'Essen rund um Mendel11',
    placeCardV6('Café', 'Café Schönholz', 'In der Neuen Schönholzer Straße.', 'Café Schönholz Neue Schönholzer Straße Berlin') +
    placeCardV6('Eis', 'Hokey Pokey', 'Nahe U-Bahnhof Vinetastraße.', 'Hokey Pokey Vinetastraße Berlin')
  );

  html = insertCardsIntoSectionV6(
    html,
    'Mit Kind in der Nähe',
    placeCardV6('Natur & Ausflug', 'Botanischer Volkspark Blankenfelde-Pankow', 'Großer Park mit Pflanzenwelt, viel Platz und schönen Wegen für einen Familienausflug.', 'Botanischer Volkspark Blankenfelde-Pankow', 'recommended')
  );

  return html;
};

const catsSearchItemV6 = searchItemsV5.find(item => item.route === 'katzen');
if (catsSearchItemV6) {
  catsSearchItemV6.text = catsSearchItemV6.text.replace('Zwischentüren', 'Zimmertüren');
}

const placesSearchItemV6 = searchItemsV5.find(item => item.route === 'naehe');
if (placesSearchItemV6) {
  placesSearchItemV6.text += ' Café Schönholz Neue Schönholzer Straße Hokey Pokey Vinetastraße Botanischer Volkspark Blankenfelde';
}

render();
syncPlacesTitleV4();
