import { template as site } from "/data/salon-template.js";

const page = document.body.dataset.page || "home";
const titleBrand = site.business.name;

const navItems = [
  { key: "leistungen", label: "Leistungen", href: "/leistungen.html" },
  { key: "salon", label: "Salon", href: "/salon.html" },
  { key: "team", label: "Team", href: "/team.html" },
  { key: "oeffnungszeiten", label: "Öffnungszeiten", href: "/oeffnungszeiten.html" },
  { key: "ueber-uns", label: "Über uns", href: "/ueber-uns.html" },
  { key: "termin-buchen", label: "Termin", href: "/termin-buchen.html" },
];

const pageTitles = {
  home: site.seo.title,
  leistungen: `Leistungen | ${titleBrand}`,
  salon: `Salon | ${titleBrand}`,
  team: `Team | ${titleBrand}`,
  oeffnungszeiten: `Öffnungszeiten | ${titleBrand}`,
  "ueber-uns": `Über uns | ${titleBrand}`,
  termin: `Termin | ${titleBrand}`,
  "termin-buchen": `Termin buchen | ${titleBrand}`,
  impressum: `Impressum | ${titleBrand}`,
  datenschutz: `Datenschutz | ${titleBrand}`,
  notfound: `Seite nicht gefunden | ${titleBrand}`,
};

function icon(name, className = "") {
  const paths = {
    arrow:
      '<path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    menu:
      '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    close:
      '<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    phone:
      '<path d="M8.2 3.5 5.6 4.7c-1.2.6-1.7 2-1.2 3.2 2 4.8 5.9 8.7 10.7 10.7 1.2.5 2.6 0 3.2-1.2l1.2-2.6-4.1-2-1.3 1.9a13.3 13.3 0 0 1-4.8-4.8l1.9-1.3-2-4.1Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    pin:
      '<path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="9" r="2.3" stroke="currentColor" stroke-width="1.7"/>',
    clock:
      '<circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.4V12l3.1 1.9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    calendar:
      '<rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 3.8v3.4M16 3.8v3.4M4 10h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    spark:
      '<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m18.4 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" fill="currentColor"/>',
    scissors:
      '<circle cx="7.2" cy="17" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="7.2" cy="7" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="m9.2 8.4 10.1 7.1M9.2 15.6l10.1-7.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    check:
      '<path d="m5.5 12.3 4.1 4.1 8.9-9" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  };

  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}

function titleWithBreaks(text) {
  return text.replace(/\n/g, "<br>");
}

function brand() {
  return `
    <a class="brand" href="/" aria-label="${site.brand.name} – Startseite">
      <img src="/assets/brand-mark.svg" width="32" height="32" alt="${site.brand.markAlt}">
      <span class="brand-copy"><strong>${site.brand.name}</strong><span>${site.brand.subline}</span></span>
    </a>`;
}

function navLinks() {
  return navItems
    .map(
      (item) =>
        `<a href="${item.href}"${page === item.key ? ' aria-current="page"' : ""}>${item.label}</a>`,
    )
    .join("");
}

function header() {
  const homeClass = page === "home" ? " site-header--home" : "";
  return `
    <div class="demo-strip" role="note">${site.previewLabel}</div>
    <header class="site-header${homeClass}">
      <div class="shell header-inner">
        ${brand()}
        <nav class="desktop-nav" aria-label="Seitennavigation">
          ${navLinks()}
          <a class="button button-small button-accent" href="/termin-buchen.html">Termin anfragen ${icon("arrow")}</a>
        </nav>
        <button class="menu-toggle" type="button" aria-label="Menü öffnen" aria-controls="mobile-menu" aria-expanded="false">${icon("menu")}</button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile Seitennavigation" hidden>
        <div class="mobile-menu-inner">
          ${navLinks()}
          <a class="button button-accent" href="/termin-buchen.html">Termin anfragen ${icon("arrow")}</a>
        </div>
      </nav>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-lead">
          ${brand()}
          <p>Eine ruhige, klare Webpräsenz für deinen nächsten Salonmoment in Kreuztal. Diese Seite ist als Kunden-Vorschau gekennzeichnet.</p>
        </div>
        <div>
          <p class="footer-label">Entdecken</p>
          <a href="/leistungen.html">Leistungen</a>
          <a href="/salon.html">Salon</a>
          <a href="/team.html">Team</a>
          <a href="/oeffnungszeiten.html">Öffnungszeiten</a>
          <a href="/ueber-uns.html">Über uns</a>
          <a href="/termin-buchen.html">Termin anfragen</a>
        </div>
        <div>
          <p class="footer-label">Rechtliches</p>
          <a href="/impressum.html">Impressum</a>
          <a href="/datenschutz.html">Datenschutz</a>
        </div>
        <div class="footer-demo-contact">
          <p class="footer-label">Kontakt</p>
          <a href="${site.contact.phoneHref}">${site.contact.phone}</a>
          <span>${site.contact.emailLabel}</span>
          <span>${site.contact.street}<br>${site.contact.postalCity}</span>
        </div>
      </div>
      <div class="shell footer-bottom">
        <span>© <span data-year></span> ${site.business.name}</span>
        <span>Kunden-Vorschau · Noindex</span>
      </div>
    </footer>`;
}

function eyebrow(text, inverted = false) {
  return `<p class="eyebrow${inverted ? " eyebrow-light" : ""}"><span></span>${text}</p>`;
}

function cta(label, modifier = "", href = "/termin-buchen.html") {
  return `<a class="button ${modifier}" href="${href}">${label} ${icon("arrow")}</a>`;
}

function phoneCta(label, modifier = "button-accent") {
  return `<a class="button ${modifier}" href="${site.contact.phoneHref}">${icon("phone")} ${label}</a>`;
}

function mediaFigure(source, alt, caption, className, width, height) {
  return `
    <figure class="${className}">
      <img src="${source}" width="${width}" height="${height}" loading="lazy" decoding="async" alt="${alt}">
      <figcaption>${caption}</figcaption>
    </figure>`;
}

function serviceCard(service) {
  return `
    <article class="service-card">
      <div class="service-number">${service.number}</div>
      <div>
        <h3>${service.name}</h3>
        <p>${service.short}</p>
      </div>
    </article>`;
}

function serviceDropdown(service) {
  return `
    <details class="service-dropdown">
      <summary class="service-summary">
        <span class="service-number">${service.number}</span>
        <span class="service-summary-copy">
          <h3>${service.name}</h3>
          <p>${service.short}</p>
          <em>Mehr erfahren</em>
        </span>
        <span class="service-toggle" aria-hidden="true">+</span>
      </summary>
      <div class="service-dropdown-body"><p>${service.detail}</p></div>
    </details>`;
}

function heroImage() {
  return `<img class="hero-image" src="${site.images.hero}" width="1672" height="941" fetchpriority="high" decoding="async" alt="Ruhige, anonym dargestellte Salonatmosphäre mit einem Stylingplatz">`;
}

function contactDetails() {
  return `
    <div>${icon("pin")}<span><strong>${site.contact.street}</strong><br>${site.contact.postalCity}</span></div>
    <div>${icon("phone")}<span><a href="${site.contact.phoneHref}"><strong>${site.contact.phone}</strong></a><br><small>TELEFONISCH ERREICHBAR</small></span></div>
    <div>${icon("clock")}<span><strong>ÖFFNUNGSZEITEN</strong><br><small>AKTUELL NICHT ÖFFENTLICH HINTERLEGT</small></span></div>`;
}

function homePage() {
  return `
    <section class="hero" aria-labelledby="hero-title">
      ${heroImage()}
      <div class="hero-strands" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <div class="shell hero-grid">
        <div class="hero-copy">
          ${eyebrow(site.business.category, true)}
          <h1 id="hero-title">${titleWithBreaks(site.business.heroTitle)}</h1>
          <p class="hero-text">${site.business.heroText}</p>
          <div class="hero-actions">
            ${phoneCta("Telefonisch Termin anfragen", "button-accent")}
            <a class="button button-ghost" href="#leistungen">Leistungen entdecken ${icon("arrow")}</a>
          </div>
          <ul class="hero-list" aria-label="Wichtige Orientierungspunkte">
            <li>${icon("check")} Persönlich beraten</li>
            <li>${icon("check")} Klarer Terminweg</li>
            <li>${icon("check")} In Kreuztal</li>
          </ul>
        </div>
        <aside class="hero-card" aria-label="Bildhinweis">
          <div class="hero-card-icon">${icon("spark")}</div>
          <p class="card-label">INSPIRATION</p>
          <h2>Raum für<br>deinen Look.</h2>
          <p>KI-generiertes, anonymes Editorial-Motiv für diese Kunden-Vorschau.</p>
        </aside>
      </div>
    </section>

    <section class="section" id="leistungen" aria-labelledby="services-title">
      <div class="shell">
        <div class="section-heading split-heading">
          <div>
            ${eyebrow("LEISTUNGEN")}
            <h2 id="services-title">DEIN NÄCHSTER<br>LOOK.</h2>
          </div>
          <p>Vier redaktionelle Leistungsbereiche geben Orientierung. Konkrete Terminarten, Techniken und Preise werden vor dem produktiven Livegang mit dem Salon abgestimmt.</p>
        </div>
        <div class="service-grid">
          ${site.services.map(serviceCard).join("")}
        </div>
        <div class="section-action">${cta("Alle Leistungen ansehen", "button-dark", "/leistungen.html")}</div>
      </div>
    </section>

    <section class="section section-soft" aria-labelledby="intro-title">
      <div class="shell intro-grid">
        <figure class="intro-visual">
          <img src="${site.images.curls}" width="1254" height="1254" loading="lazy" decoding="async" alt="Nahaufnahme von anonym dargestellten, weich fallenden Locken in warmen Brauntönen">
          <span class="visual-tag">KI-GENERIERT · HAARDETAIL</span>
          <div class="ribbon ribbon-one" aria-hidden="true"></div><div class="ribbon ribbon-two" aria-hidden="true"></div><div class="ribbon ribbon-three" aria-hidden="true"></div>
        </figure>
        <div class="intro-copy">
          ${eyebrow("ÜBER DEN SALON")}
          <h2 id="intro-title">${titleWithBreaks(site.business.introTitle)}</h2>
          <p>${site.business.introText}</p>
          <a class="text-link" href="/salon.html">Zum Salonbereich ${icon("arrow")}</a>
        </div>
      </div>
    </section>

    <section class="section section-dark" aria-labelledby="principles-title">
      <div class="shell">
        <div class="section-heading dark-heading">
          <div>
            ${eyebrow("WAS ZÄHLT", true)}
            <h2 id="principles-title">RUHE. KÖNNEN.<br>AUFMERKSAMKEIT.</h2>
          </div>
          <p>Ein Besuch darf klar beginnen und persönlich bleiben – vom ersten Wunsch bis zum letzten Blick in den Spiegel.</p>
        </div>
        <div class="principle-grid">
          ${site.principles
            .map(
              (principle) => `
                <article class="principle-card">
                  <div class="principle-icon">${icon(principle.icon)}</div>
                  <h3>${principle.label}</h3>
                  <p>${principle.text}</p>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="process-title">
      <div class="shell">
        <div class="section-heading process-heading">
          <div>
            ${eyebrow("DEIN TERMIN")}
            <h2 id="process-title">KLAR VOM<br>ERSTEN KONTAKT.</h2>
          </div>
          ${phoneCta("Termin telefonisch anfragen", "button-dark")}
        </div>
        <ol class="process-grid">
          ${site.process
            .map(
              (item) => `
                <li>
                  <span>${item.number}</span>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </li>`,
            )
            .join("")}
        </ol>
      </div>
    </section>

    <section class="section section-contact" aria-labelledby="contact-title">
      <div class="shell contact-panel">
        <div>
          ${eyebrow("KONTAKT & ANFAHRT", true)}
          <h2 id="contact-title">DEIN WEG ZU<br>HAIRlich.</h2>
          <p>Adresse und Telefonnummer sind öffentlich verifiziert. Öffnungszeiten und E-Mail-Kontakt werden nach Betreiberfreigabe ergänzt.</p>
          <div class="contact-actions">
            ${phoneCta("Jetzt anrufen", "button-light")}
            <a class="button button-outline-light" href="${site.map.routeUrl}" target="_blank" rel="noopener noreferrer">Anfahrt auf Maps ${icon("arrow")}</a>
          </div>
        </div>
        <div class="contact-details">${contactDetails()}</div>
      </div>
    </section>
  `;
}

function pageHero(label, title, text) {
  return `
    <section class="page-hero">
      <div class="shell page-hero-inner">
        ${eyebrow(label, true)}
        <h1>${titleWithBreaks(title)}</h1>
        <p>${text}</p>
      </div>
    </section>`;
}

function lookbook() {
  return `
    <div class="lookbook-grid" aria-label="Editoriale Haar-Inspiration">
      ${mediaFigure(site.images.salon, "Anonym dargestellter, weich texturierter Bob im warmen Salonlicht", "KI-GENERIERT · LOOKBOOK-INSPIRATION", "lookbook-image lookbook-image--wide", 1536, 1024)}
      ${mediaFigure(site.images.cut, "Anonym dargestelltes Haar im Moment des Formens mit einem Kamm", "KI-GENERIERT · HANDWERKDETAIL", "lookbook-image lookbook-image--tall", 1122, 1402)}
    </div>`;
}

function servicesPage() {
  return `
    ${pageHero("LEISTUNGEN", "DEINE LEISTUNGEN.\nKLAR SORTIERT.", "Die Leistungsbereiche der Vorschau schaffen Orientierung, ohne konkrete Preise oder nicht bestätigte Terminarten vorwegzunehmen.")}
    <section class="section">
      <div class="shell service-page-layout">
        <aside class="sticky-note">
          <p class="card-label">VORSCHAU-PRINZIP</p>
          <p>Jede Leistung öffnet sich erst auf Klick. So bleibt die Seite ruhig und die Details dort, wo sie hingehören.</p>
          <p class="note-small">Konkrete Leistungen, Techniken und Preise werden vor dem Livegang mit dem Salon abgestimmt.</p>
          ${phoneCta("Termin anfragen", "button-dark")}
        </aside>
        <div class="service-stack">
          ${site.services.map(serviceDropdown).join("")}
        </div>
      </div>
    </section>
    <section class="section section-soft">
      <div class="shell callout-grid">
        <div>
          ${eyebrow("DEIN ABLAUF")}
          <h2>EIN GUTER LOOK<br>BEGINNT MIT ZUHÖREN.</h2>
        </div>
        <div><p>Du musst noch nicht alles wissen. Ein kurzer Anruf reicht, um Wunsch, Zeit und den passenden nächsten Schritt zu sortieren.</p>${phoneCta("Telefonisch abstimmen", "button-dark")}</div>
      </div>
    </section>
    <section class="section">
      <div class="shell">
        <div class="section-heading split-heading">
          <div>${eyebrow("LOOKBOOK")}<h2>FORM.<br>TEXTUR.<br>FINISH.</h2></div>
          <p>Anonyme KI-Motive zeigen die visuelle Richtung dieser Vorschau. Sie sind keine Aufnahmen realer Kundinnen oder Kunden und keine Leistungsversprechen.</p>
        </div>
        ${lookbook()}
      </div>
    </section>`;
}

function salonPage() {
  return `
    ${pageHero("DER SALON", "EIN ORT FÜR\nDEINEN AUSDRUCK.", "Manuela Schneider HAIRlich in Kreuztal wird hier als ruhiger Ort für Beratung, Veränderung und persönliche Details erzählt.")}
    <section class="section">
      <div class="shell salon-story-grid">
        ${mediaFigure(site.images.salon, "Anonym dargestellter Bob-Haarschnitt im warmen Editorial-Licht", "KI-GENERIERT · INSPIRATIONSMOTIV", "story-image", 1536, 1024)}
        <div>
          ${eyebrow("DEINE GESCHICHTE")}
          <h2>${titleWithBreaks(site.business.roomTitle)}</h2>
          <p>${site.business.roomText}</p>
          <p class="muted-copy">Die genaue Salon-Geschichte, Raumdetails und Betreiberinformationen werden im Kundenreview ergänzt, sobald sie freigegeben sind.</p>
        </div>
      </div>
    </section>
    <section class="section section-dark">
      <div class="shell">
        <div class="section-heading dark-heading"><div>${eyebrow("DAS GEFÜHL", true)}<h2>RUHIG ANKOMMEN.<br>KLARER WEITER.</h2></div><p>Ein guter Termin braucht nicht mehr Lautstärke, sondern mehr Aufmerksamkeit für das, was du dir wünschst.</p></div>
        <div class="principle-grid">${site.principles.map((principle) => `<article class="principle-card"><div class="principle-icon">${icon(principle.icon)}</div><h3>${principle.label}</h3><p>${principle.text}</p></article>`).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="shell quote-panel">
        <span class="quote-mark" aria-hidden="true">“</span>
        <p>Ein guter Look beginnt mit Zeit zum Zuhören.</p>
        <span class="quote-caption">EDITORIALER LEITSATZ · ${site.brand.name}</span>
      </div>
    </section>`;
}

function teamAvailability() {
  return `
    <article class="team-availability">
      <div class="availability-mark">${icon("spark")}</div>
      <div>
        <p class="card-label">ÖFFENTLICH NICHT GELISTET</p>
        <h3>Persönlichkeit folgt im Review.</h3>
        <p>Die öffentliche Geschäftsquelle bestätigt den Salon und die Ansprechbarkeit, führt aber kein belastbares Teamprofil. Namen, Rollen und Bilder werden erst nach Freigabe ergänzt.</p>
        <div class="availability-actions">${phoneCta("Direkt anfragen", "button-light")}</div>
      </div>
    </article>`;
}

function teamPage() {
  return `
    ${pageHero("TEAM", "MENSCHEN MIT\nFINGERSPITZENGEFÜHL.", "Ein guter Salontermin ist persönlich. Die öffentliche Quellenlage führt aktuell jedoch keine freigegebenen Teamprofile.")}
    <section class="section section-dark">
      <div class="shell">
        <div class="section-heading dark-heading">
          <div>${eyebrow("DAS TEAM", true)}<h2>PERSÖNLICH.<br>AUFMERKSAM.</h2></div>
          <p>Diese Seite ist vorbereitet für Namen, Rollen und Bilder – und bleibt bis zur Bestätigung transparent.</p>
        </div>
        ${teamAvailability()}
      </div>
    </section>
    <section class="section">
      <div class="shell about-hero-grid">
        ${mediaFigure(site.images.cut, "Anonym dargestelltes Haar im Moment des Formens mit einem Kamm", "KI-GENERIERT · KEIN TEAMFOTO", "story-image story-image--short", 1122, 1402)}
        <div>
          ${eyebrow("DEIN KONTAKT")}
          <h2>DER ERSTE<br>SCHRITT IST<br>EIN ANRUF.</h2>
          <p>Fragen zu Termin, Wunsch oder Ablauf lassen sich direkt und persönlich klären.</p>
          ${phoneCta("Telefonisch anfragen", "button-dark")}
        </div>
      </div>
    </section>`;
}

function hoursCard() {
  return `
    <div class="hours-card hours-card--open" aria-label="Öffnungszeiten-Status">
      <div class="availability-mark">${icon("clock")}</div>
      <div>
        <p class="card-label">ÖFFNUNGSZEITEN</p>
        <strong>Bitte telefonisch erfragen</strong>
        <p>Google Maps führt aktuell keine Öffnungszeiten. Für die genaue Terminplanung bitte direkt beim Salon nachfragen.</p>
        ${phoneCta("Öffnungszeiten anfragen", "button-dark")}
      </div>
    </div>`;
}

function hoursPage() {
  return `
    ${pageHero("ÖFFNUNGSZEITEN", "ZEIT FÜR\nDEINEN LOOK.", "Die öffentliche Maps-Quelle führt aktuell keine Öffnungszeiten. Der sichere Weg ist eine kurze telefonische Anfrage.")}
    <section class="section">
      <div class="shell hours-layout">
        <div>
          ${eyebrow("PLANUNG")}
          <h2>ANKOMMEN.<br>ABSCHALTEN.</h2>
          <p>Bevor du deinen Termin planst, lassen sich aktuelle Zeiten, Verfügbarkeit und der passende Leistungsbereich direkt mit dem Salon klären.</p>
          <div class="hours-fact-list"><span>${icon("pin")} Zum Hammerseifen 51 · 57223 Kreuztal</span><span>${icon("phone")} ${site.contact.phone}</span></div>
        </div>
        ${hoursCard()}
      </div>
    </section>
    <section class="section section-soft">
      <div class="shell callout-grid">
        <div>
          ${eyebrow("KONTAKT")}
          <h2>FRAGEN VOR<br>DEM BESUCH?</h2>
        </div>
        <div><p>Telefon, Adresse und der Maps-Link sind für die Vorschau bestätigt. Ein Online-Buchungssystem und eine E-Mail-Adresse wurden nicht öffentlich bestätigt.</p>${phoneCta("Direkt anrufen", "button-dark")}</div>
      </div>
    </section>`;
}

function aboutPage() {
  return `
    ${pageHero("ÜBER UNS", "DEIN SALON.\nDEINE HALTUNG.", "Eine ruhige Editorial-Seite für die Geschichte, Philosophie und Atmosphäre von Manuela Schneider HAIRlich.")}
    <section class="section section-soft">
      <div class="shell about-hero-grid">
        ${mediaFigure(site.images.cut, "Anonym dargestelltes Haar im Moment des Formens mit einem Kamm", "KI-GENERIERT · INSPIRATIONSMOTIV", "story-image", 1122, 1402)}
        <div>
          ${eyebrow("DIE IDEE")}
          <h2>EIN RAUM FÜR<br>GUTE VERÄNDERUNG.</h2>
          <p>Die Vorschau verbindet klare Orientierung mit einer persönlichen Bildsprache. Sie macht den ersten Kontakt leicht und lässt offen, was im Gespräch noch genauer werden darf.</p>
          <p class="muted-copy">Geschichte, Werte und besondere Raumdetails werden nach dem Kundenreview mit bestätigten Fakten ergänzt.</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="shell">
        <div class="section-heading split-heading"><div>${eyebrow("DREI GEDANKEN")}<h2>WAS EINEN<br>TERMIN TRÄGT.</h2></div><p>Die Leitlinien dieser Vorschau halten die Seite nahbar, ohne nicht bestätigte Versprechen über den Salon zu machen.</p></div>
        <div class="principle-grid principle-grid--light">${site.principles.map((principle) => `<article class="principle-card"><div class="principle-icon">${icon(principle.icon)}</div><h3>${principle.label}</h3><p>${principle.text}</p></article>`).join("")}</div>
      </div>
    </section>
    <section class="section section-dark">
      <div class="shell about-image-bento">
        <div><p class="card-label">HAARDETAIL</p><h2>FORM WIRD<br>GEFÜHL.</h2><p>Editoriale Bildmotive geben der Vorschau Wärme und Tiefe. Sie zeigen keine realen Kundenergebnisse.</p></div>
        ${mediaFigure(site.images.curls, "Nahaufnahme von anonym dargestellten, weich fallenden Locken", "KI-GENERIERT · INSPIRATION", "bento-image", 1254, 1254)}
      </div>
    </section>`;
}

function bookingPage() {
  return `
    ${pageHero("TERMIN", "DEIN TERMIN.\nDEIN MOMENT.", "Ein Online-Buchungslink ist öffentlich nicht bestätigt. Der verlässliche Weg für diese Vorschau führt telefonisch über den Salon.")}
    <section class="section">
      <div class="shell booking-grid">
        <div class="booking-lead">
          ${eyebrow("TERMIN VEREINBAREN")}
          <h2>WÄHLE DEINEN<br>PASSENDEN WEG.</h2>
          <p>${site.booking.note}</p>
          ${phoneCta("Jetzt telefonisch anfragen", "button-dark")}
          <p class="booking-note">Kein Kontaktformular, kein erfundener Kalender: Du erreichst den Salon direkt über die bestätigte Telefonnummer.</p>
        </div>
        <div class="booking-card">
          <p class="card-label">KONTAKT</p>
          <div class="booking-contact"><span>${icon("phone")}</span><div><a href="${site.contact.phoneHref}"><strong>${site.contact.phone}</strong></a><small>BESTÄTIGTER TELEFONISCHER TERMINWEG</small></div></div>
          <div class="booking-contact"><span>${icon("calendar")}</span><div><strong>Online-Terminbuchung</strong><small>ÖFFENTLICH NICHT BESTÄTIGT</small></div></div>
          <div class="booking-contact"><span>${icon("pin")}</span><div><strong>${site.contact.street}</strong><small>${site.contact.postalCity}</small></div></div>
          <div class="booking-contact"><span>${icon("clock")}</span><div><strong>Öffnungszeiten</strong><small>BITTE TELEFONISCH ERFRAGEN</small></div></div>
        </div>
      </div>
    </section>
    <section class="section section-soft">
      <div class="shell hours-layout">
        <div>${eyebrow("ÖFFNUNGSZEITEN")}<h2>ZEIT FÜR<br>DEINEN LOOK.</h2><p>Da die öffentlichen Maps-Daten aktuell keine Öffnungszeiten enthalten, werden sie vor der Terminplanung telefonisch abgeglichen.</p></div>
        ${hoursCard()}
      </div>
    </section>
    <section class="section">
      <div class="shell map-placeholder" id="map-placeholder" aria-live="polite">
        <div><p class="card-label">ANFAHRT</p><h2>DEIN SALON<br>IN KREUZTAL.</h2><p>Die Karte wird erst geladen, wenn du auf den Zustimmungsbutton klickst. Eine direkte Maps-Route bleibt ebenfalls verfügbar.</p><a class="text-link" href="${site.map.routeUrl}" target="_blank" rel="noopener noreferrer">Google Maps öffnen ${icon("arrow")}</a></div>
        <button class="button button-dark" type="button" data-map-consent>${icon("pin")} Karte bewusst laden</button>
      </div>
    </section>`;
}

function legalPage(type) {
  const isImprint = type === "impressum";
  const label = isImprint ? "IMPRESSUM" : "DATENSCHUTZ";
  const title = isImprint ? "RECHTLICHE\nANGABEN." : "DATENSCHUTZ\nPRÜFEN.";
  const note = isImprint ? site.legal.imprintNote : site.legal.privacyNote;
  const heading = isImprint ? "BETREIBERANGABEN" : "TECHNIK DIESER VORSCHAU";
  return `
    ${pageHero(label, title, note)}
    <section class="section legal-section">
      <div class="shell legal-grid">
        <aside class="legal-aside"><p class="card-label">FREIGABE OFFEN</p><p>Diese Seite ist gestaltet und erreichbar, ersetzt aber noch nicht die finale rechtliche Prüfung für den produktiven Livegang.</p></aside>
        <article class="legal-copy">
          <h2>${heading}</h2>
          ${isImprint ? `
            <p>Die verantwortliche Betreiberperson oder Unternehmensform, eine ladungsfähige Anschrift, eine geschäftliche E-Mail-Adresse und gegebenenfalls weitere Pflichtangaben wurden für diese Vorschau noch nicht eindeutig freigegeben.</p>
            <h3>Bereits bestätigte Standortangabe</h3>
            <p>${site.contact.street}, ${site.contact.postalCity}. Diese öffentliche Geschäftsangabe wird in der Vorschau als Standort verwendet und darf erst nach Betreiberfreigabe als vollständige rechtliche Anschrift eingesetzt werden.</p>
            <h3>Vor dem produktiven Livegang ergänzen</h3>
            <ul>
              <li>Verantwortliche Betreiberperson oder korrekte Unternehmensbezeichnung</li>
              <li>Ladungsfähige Anschrift, Kontaktangaben und gegebenenfalls Register- oder Steuerangaben</li>
              <li>Final geprüfte Rechtstexte und Zuständigkeiten</li>
            </ul>` : `
            <p>Diese Vorschau verwendet keine Analyse- oder Werbeskripte und kein Kontaktformular. Ein Telefonlink öffnet bei bewusster Nutzung die Telefonfunktion des jeweiligen Geräts.</p>
            <h3>Karte und externe Dienste</h3>
            <p>Die Google-Maps-Karte wird nicht automatisch geladen. Erst nach Klick auf „Karte bewusst laden“ wird ein eingebetteter Karteninhalt von Google angefordert. Alternativ kann die direkte Maps-Seite geöffnet werden.</p>
            <h3>Vor dem produktiven Livegang prüfen</h3>
            <ul>
              <li>Tatsächlich eingesetzte Dienste, externe Inhalte und deren Rechtsgrundlage</li>
              <li>Verantwortliche Stelle, Kontakt und Aufbewahrungs- beziehungsweise Löschfristen</li>
              <li>Finale, auf die reale Website abgestimmte Datenschutzerklärung</li>
            </ul>`}
          <p class="legal-warning">Kunden-Vorschau: Diese Seite ist keine Rechtsberatung. Betreiberangaben und Rechtstexte müssen vor dem produktiven Livegang geprüft und freigegeben werden.</p>
        </article>
      </div>
    </section>`;
}

function notFoundPage() {
  return `
    <section class="notfound">
      <div class="shell notfound-inner">
        ${eyebrow("404")}
        <h1>Diese Seite gibt es<br>hier nicht.</h1>
        <p>Die gewünschte Adresse wurde nicht gefunden. Zurück zu Manuela Schneider HAIRlich in Kreuztal.</p>
        <a href="/" class="button button-dark">Zur Startseite ${icon("arrow")}</a>
      </div>
    </section>`;
}

function pageContent() {
  const pages = {
    home: homePage,
    leistungen: servicesPage,
    salon: salonPage,
    team: teamPage,
    oeffnungszeiten: hoursPage,
    "ueber-uns": aboutPage,
    termin: bookingPage,
    "termin-buchen": bookingPage,
    impressum: () => legalPage("impressum"),
    datenschutz: () => legalPage("datenschutz"),
    notfound: notFoundPage,
  };
  return (pages[page] || pages.notfound)();
}

function mount() {
  const root = document.getElementById("site-root");
  if (!root) return;

  root.innerHTML = `
    <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
    ${header()}
    <main id="main-content">${pageContent()}</main>
    ${footer()}
    <div class="toast" role="status" aria-live="polite" aria-atomic="true"></div>`;

  document.title = pageTitles[page] || pageTitles.notfound;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = site.seo.description;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = document.title;
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = site.seo.description;
  root.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const toggle = root.querySelector(".menu-toggle");
  const menu = root.querySelector(".mobile-menu");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu();
      return;
    }
    menu?.removeAttribute("hidden");
    requestAnimationFrame(() => menu?.classList.add("is-open"));
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menü schließen");
    toggle.innerHTML = icon("close");
    document.body.classList.add("menu-open");
  });
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) closeMenu();
  });

  root.querySelectorAll("[data-map-consent]").forEach((button) => {
    button.addEventListener("click", () => activateMap(button));
  });
}

function closeMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Menü öffnen");
  if (toggle) toggle.innerHTML = icon("menu");
  menu?.classList.remove("is-open");
  menu?.setAttribute("hidden", "");
  document.body.classList.remove("menu-open");
}

let toastTimer;

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4800);
}

function activateMap(button) {
  if (!site.map.embedUrl || site.mode !== "preview") {
    showToast("Die Kartenfreigabe ist aktuell nicht verfügbar.");
    return;
  }
  const target = button.closest(".map-placeholder");
  if (!target || target.querySelector("iframe")) return;
  const iframe = document.createElement("iframe");
  iframe.src = site.map.embedUrl;
  iframe.title = `Karte zu ${site.business.name}`;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  target.classList.add("is-map-active");
  target.replaceChildren(
    iframe,
    Object.assign(document.createElement("div"), {
      className: "map-active-bar",
      innerHTML: `<span>Karte geladen nach deiner Zustimmung.</span><a href="${site.map.routeUrl}" target="_blank" rel="noopener noreferrer">Auf Google Maps öffnen ${icon("arrow")}</a>`,
    }),
  );
}

mount();
