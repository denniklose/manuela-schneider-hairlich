/**
 * Zentrale Inhalte der Kunden-Vorschau.
 *
 * Bestätigte öffentliche Fakten werden hier von redaktioneller Vorschau-Copy
 * getrennt gehalten. Offene Punkte bleiben bewusst als klare Zustände sichtbar
 * und werden erst nach Betreiberfreigabe zu Produktionsinhalten.
 */
export const template = {
  mode: "preview",
  previewLabel: "KUNDENVORSCHAU · INHALTE VOR DEM PRODUKTIVEN LIVEGANG ABSTIMMEN",
  brand: {
    name: "HAIRlich",
    subline: "MANUELA SCHNEIDER · KREUZTAL",
    markAlt: "Abstraktes Haarsträhnen-Zeichen für HAIRlich",
  },
  seo: {
    title: "Manuela Schneider HAIRlich · Friseursalon in Kreuztal",
    description:
      "Kunden-Vorschau für Manuela Schneider HAIRlich in Kreuztal – mit Leistungen, Saloninformationen und telefonischem Terminweg.",
  },
  business: {
    name: "Manuela Schneider HAIRlich",
    category: "FRISEURSALON · KREUZTAL",
    heroTitle: "DEIN LOOK.\nHAIRlich.",
    heroText:
      "Ein klarer, persönlicher Weg zu deinem nächsten Look – mit Raum für Beratung, Veränderung und die Details, die sich richtig anfühlen.",
    introTitle: "DEIN AUSDRUCK\nHAT RAUM.",
    introText:
      "Diese Vorschau bringt Manuela Schneider HAIRlich in eine ruhige, editoriale Form: Ankommen, den eigenen Wunsch besprechen und den passenden Weg gemeinsam sortieren.",
    roomTitle: "ZEIT FÜR\nDEINEN LOOK.",
    roomText:
      "Zwischen Beratung und Styling entsteht Raum für die Details, die einen Look persönlich machen. Konkrete Schwerpunkte und Terminarten werden vor dem finalen Livegang mit dem Salon abgestimmt.",
  },
  contact: {
    street: "Zum Hammerseifen 51",
    postalCity: "57223 Kreuztal",
    phone: "02732 767997",
    phoneHref: "tel:02732767997",
    emailLabel: "E-Mail-Kontakt wird im finalen Livegang ergänzt",
  },
  booking: {
    label: "Telefonisch Termin anfragen",
    url: "",
    note:
      "Ein Online-Buchungslink konnte in den geprüften öffentlichen Quellen nicht bestätigt werden. Für Terminwünsche und Fragen ist der Salon telefonisch unter 02732 767997 erreichbar.",
  },
  map: {
    routeUrl:
      "https://www.google.com/maps/place/Manuela+Schneider+HAIRlich,+Zum+Hammerseifen+51,+57223+Kreuztal/@50.9689066,7.9868268,15z/data=!4m6!3m5!1s0x47bc026ad6ec8529:0x1b8e23f01b5b5ee0!8m2!3d50.9689066!4d7.9868268!16s%2Fg%2F1ptyj2ybc?g_ep=Eg1tbF8yMDI2MDgyNV8wIOC7DCoASAJQAg%3D%3D",
    embedUrl:
      "https://www.google.com/maps?q=50.9689066,7.9868268&z=15&output=embed",
  },
  socials: [],
  images: {
    hero: "/assets/images/hero-salon.jpg",
    salon: "/assets/images/hair-bob-editorial.jpg",
    cut: "/assets/images/hair-cut-detail.jpg",
    curls: "/assets/images/hair-curl-detail.jpg",
  },
  services: [
    {
      number: "01",
      name: "Schnitt & Styling",
      short: "Ein Look, der zu deinem Alltag und deinem Ausdruck passt.",
      detail:
        "Im Gespräch wird sortiert, was bleiben darf, was sich verändern soll und welches Finish du dir wünschst. Der genaue Leistungsumfang wird vor dem Termin individuell abgestimmt.",
    },
    {
      number: "02",
      name: "Farbe & Nuancen",
      short: "Von leiser Veränderung bis zu einem neuen Farbgefühl.",
      detail:
        "Farbwünsche leben von einer guten Ausgangsanalyse und einer klaren Abstimmung. Techniken, Produkte, Aufwand und Ergebnis werden im persönlichen Termin konkret besprochen.",
    },
    {
      number: "03",
      name: "Pflege & Beratung",
      short: "Mehr Klarheit für Struktur, Pflege und dein tägliches Styling.",
      detail:
        "Eine ruhige Beratung schafft die Grundlage für Entscheidungen, die zu deiner Haarstruktur und deiner Routine passen. Konkrete Pflegeempfehlungen werden nach Freigabe ergänzt.",
    },
    {
      number: "04",
      name: "Finish & Anlass",
      short: "Ein besonderer Moment beginnt mit einem klaren Plan.",
      detail:
        "Für besondere Anlässe lässt sich der gewünschte Ausdruck vorab gemeinsam einordnen. Verfügbarkeit, Ablauf und konkrete Optionen werden telefonisch geklärt.",
    },
  ],
  principles: [
    {
      label: "BERATUNG",
      text: "Ein guter Look beginnt damit, dass Wünsche, Alltag und Haar ehrlich zusammen gedacht werden.",
      icon: "spark",
    },
    {
      label: "HANDWERK",
      text: "Schnitt, Farbe und Finish werden in dieser Vorschau als sorgfältige Handarbeit und nicht als Schnelllösung erzählt.",
      icon: "scissors",
    },
    {
      label: "ZEIT FÜR DICH",
      text: "Der Termin darf ein klarer Zwischenraum sein: ankommen, auswählen, verändern und mit einem guten Gefühl weitergehen.",
      icon: "clock",
    },
  ],
  process: [
    {
      number: "01",
      title: "DEIN WUNSCH",
      text: "Du beschreibst, was du suchst, bringst eine Idee mit oder startest ganz offen.",
    },
    {
      number: "02",
      title: "DEIN TERMIN",
      text: "Der passende Weg wird telefonisch abgestimmt – inklusive Fragen zu Zeit und Leistung.",
    },
    {
      number: "03",
      title: "DEIN LOOK",
      text: "Aus Beratung und Handwerk entsteht eine Veränderung, die sich in deinen Alltag übersetzen lässt.",
    },
  ],
  team: [],
  hours: [],
  legal: {
    imprintNote:
      "Diese Seite ist eine öffentliche Kunden-Vorschau und noch kein produktives Impressum. Verantwortliche Betreiberangaben werden nach Prüfung und Freigabe ergänzt.",
    privacyNote:
      "Diese Seite beschreibt die Technik dieser Kunden-Vorschau. Die finale Datenschutzerklärung wird vor dem produktiven Livegang anhand der tatsächlich eingesetzten Dienste freigegeben.",
  },
};
