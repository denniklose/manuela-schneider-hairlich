# Design- und UX-Protokoll

## Verbindliche Richtung

Die bestehende statische Codebasis wurde als einzige technische und visuelle Grundlage verwendet. Beibehalten wurden Dark Editorial, Bento-Flächen, Helvetica, geschwungene Serif-Akzentüberschriften und `#D9B47A`.

## Gate-Ausgaben

- Design-System-Aufruf: `design-system/manuela-schneider-hairlich-friseursalon/MASTER.md`
- UX-Aufruf: `salon website accessibility responsive navigation animation touch targets`
- Das generische Recherche-Ergebnis empfahl eine dunkle, bildstarke Bento-Richtung. Die dort vorgeschlagene Farb- und Typografieauswahl wurde dort überschrieben, wo sie den ausdrücklich gesetzten Projektvorgaben widersprach.

## Umgesetzte UX-Punkte

- Skip-Link, semantische Hauptbereiche, klare Überschriftenhierarchie und `aria-current`.
- Sichtbare `:focus-visible`-Zustände und native `<details>`-Dropdowns.
- Touch-Ziele von mindestens 44px für zentrale Buttons und mobile Navigation.
- Mobile Navigation mit `aria-expanded`, Escape-Schließen und ohne Hover-Abhängigkeit.
- Keine horizontale Überbreite in den responsiven Layouts; reduzierte Bewegung per `prefers-reduced-motion`.
- Lade- und Freigabestatus für Karte, Öffnungszeiten, Team und rechtliche Angaben.
- Alt-Texte und sichtbare Hinweise für jedes KI-generierte Motiv.
