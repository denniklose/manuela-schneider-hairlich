# Übergabe- und Freigabecheckliste

## Bereits erledigt

- Separate lokale Kopie unter `/Users/tim/Documents/Friseur Websites/manuela-schneider-hairlich`.
- Geschäftsidentität am gelieferten Google-Maps-Eintrag abgeglichen.
- Eindeutig bestätigte Adresse und Telefonnummer zentral eingetragen.
- Präsentationsfertige Inhalte für alle neun geforderten Seiten angelegt.
- KI-generierte, anonymisierte Haar- und Salonmotive eingebunden.
- Öffentliche Vorschau mit `noindex`, `nofollow` und `noarchive` vorbereitet.

## Vor dem produktiven Livegang ergänzen

- Betreibername beziehungsweise Unternehmensform und ladungsfähige Anschrift.
- Geschäftliche E-Mail-Adresse und finale Kontaktwege.
- Bestätigte Öffnungszeiten und konkrete Terminarten.
- Freigegebene Teamnamen, Rollen und echte oder freigegebene Teamfotos.
- Freigegebene Leistungsdetails, Techniken und Preise.
- Finale Impressums- und Datenschutztexte.
- Entscheidung, ob Google Maps und weitere externe Dienste produktiv eingesetzt werden.

## Technische Abnahme

- `npm run check`
- `npm run build`
- `npm run check:handover`
- Alle Seiten ohne horizontales Überlaufen bei Desktop, Tablet und 390px Mobilbreite prüfen.
- Mobile Navigation per Tastatur und Escape schließen können.
- Dropdowns per Tastatur öffnen und schließen können.
- Telefonlink, Maps-Route, Map-Consent und 404-Verhalten prüfen.
- Vor Übergabe anonymen HTTP-Status 200 und den `X-Robots-Tag` der Vorschau prüfen.
