# Manuela Schneider HAIRlich · Kunden-Vorschau

Diese getrennte statische Website ist die präsentationsfertige Vorschau für Manuela Schneider HAIRlich in Kreuztal. Sie bleibt bis zur Betreiber- und Rechtsfreigabe mit `noindex`, `nofollow` und `noarchive` gekennzeichnet.

## Projektumfang

- Statisches HTML, CSS und JavaScript-Module ohne Laufzeit-Abhängigkeiten.
- Seiten: Start, Leistungen, Salon, Team, Öffnungszeiten, Über uns, Termin, Impressum, Datenschutz und 404.
- Dark-Editorial-/Bento-System mit Helvetica, geschwungenen Akzent-Überschriften und Champagner `#D9B47A`.
- Leistungsbereiche als native, tastaturbedienbare `<details>`-Dropdowns.
- Google Maps wird erst nach bewusster Zustimmung eingebettet; die direkte Maps-Route bleibt separat verfügbar.
- Die Bilder sind KI-generierte, anonymisierte Editorial-Motive und keine echten Kundenergebnisse oder Teamfotos.

## Zentrale Anpassungsstelle

Bestätigte Kontaktdaten, offene Fakten, Copy, Medienpfade und Freigabehinweise liegen in [data/salon-template.js](data/salon-template.js). Die Research-Grundlage und widersprüchliche Altinformationen sind in [SALON_RESEARCH_LEDGER.md](SALON_RESEARCH_LEDGER.md) dokumentiert.

## Lokaler Start und Prüfung

```bash
npm run check
npm run build
npm run check:handover
```

Für eine lokale Vorschau:

```bash
npm run dev
```

Danach die Startseite unter `http://127.0.0.1:4173/` öffnen.

## Freigabegrenze

Die öffentliche Vorschau enthält nur eindeutig bestätigte Adresse und Telefonnummer. Öffnungszeiten, E-Mail, Online-Buchung, Teamprofile, Bewertungen, Preise, Betreiberangaben und finale Rechtstexte bleiben bis zur Kundenfreigabe offen. Erst danach wird aus der Vorschau ein produktiver Livegang.
