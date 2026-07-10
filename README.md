# Mendel11

Eine mobile-first Betriebsanleitung für Gäste: Wohnung, Katzen, Smart Home und kleine Alltagshilfen.

## Eigenschaften

- statische Web-App ohne Build-Schritt
- vier feste Hauptbereiche: Start, Katzen, Wohnung und Hilfe
- anklickbarer, vereinfachter SVG-Grundriss
- zusätzliche Seiten für Kaffee, Film & Musik, Umgebung und Abreise
- responsive Gestaltung für Smartphone, Tablet und Desktop
- keine vollständige Adresse und kein WLAN-Passwort im öffentlichen Quelltext

## Lokal öffnen

Die Dateien können direkt geöffnet werden. Für ein realistischeres Verhalten empfiehlt sich ein kleiner lokaler Server:

```bash
python3 -m http.server 8000
```

Danach im Browser `http://localhost:8000` öffnen.

## Veröffentlichung über GitHub Pages

Das Projekt ist vollständig statisch. In den Repository-Einstellungen kann GitHub Pages auf den Branch `main` und den Ordner `/ (root)` gestellt werden.

## Struktur

- `index.html` – App-Rahmen und Dialoge
- `styles.css` – Farbwelt, Layout und Responsive Design
- `app.js` – Inhalte, Navigation und interaktiver Grundriss

## Datenschutz

Das Repository ist öffentlich. Deshalb gehören folgende Angaben nicht in den Quelltext:

- vollständige Wohnadresse
- WLAN-Passwort
- private Telefonnummern
- sensible persönliche oder medizinische Informationen

Der WLAN-Hinweis in der App verweist daher nur auf Zugangsdaten vor Ort.
