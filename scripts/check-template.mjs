import { access, readdir, readFile, stat } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const ignoredDirectories = new Set([".git", ".vercel", ".site-build", "node_modules"]);
const requiredFiles = [
  "index.html",
  "startseite.html",
  "leistungen.html",
  "salon.html",
  "team.html",
  "oeffnungszeiten.html",
  "ueber-uns.html",
  "termin.html",
  "termin-buchen.html",
  "impressum.html",
  "datenschutz.html",
  "404.html",
  "assets/app.js",
  "assets/styles.css",
  "assets/brand-mark.svg",
  "assets/favicon.svg",
  "assets/images/hero-salon.jpg",
  "assets/images/hair-bob-editorial.jpg",
  "assets/images/hair-cut-detail.jpg",
  "assets/images/hair-curl-detail.jpg",
  "data/salon-template.js",
  "design-system/manuela-schneider-hairlich-friseursalon/MASTER.md",
  "robots.txt",
  "sitemap.xml",
  "vercel.json",
  "TEMPLATE_README.md",
  "CUSTOMIZATION_CHECKLIST.md",
  "SALON_RESEARCH_LEDGER.md",
  "HANDOVER.md",
  "DESIGN_DECISIONS.md",
];

const htmlPages = [
  "index.html",
  "startseite.html",
  "leistungen.html",
  "salon.html",
  "team.html",
  "oeffnungszeiten.html",
  "ueber-uns.html",
  "termin.html",
  "termin-buchen.html",
  "impressum.html",
  "datenschutz.html",
  "404.html",
];

const textExtensions = new Set([".html", ".js", ".json", ".css", ".md", ".txt", ".svg", ".xml"]);
const failures = [];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

async function exists(file) {
  try {
    await access(path.join(root, file), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(fullPath)));
    if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

for (const file of requiredFiles) {
  expect(await exists(file), `Pflichtdatei fehlt: ${file}`);
}

const sourceFiles = await listFiles(root);
const textFiles = sourceFiles.filter((file) => textExtensions.has(path.extname(file).toLowerCase()));
const textSources = new Map(
  await Promise.all(textFiles.map(async (file) => [file, await readFile(file, "utf8")])),
);

for (const page of htmlPages) {
  const content = textSources.get(path.join(root, page)) || "";
  expect(content.includes('meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex"'), `${page}: noindex-Meta fehlt`);
  expect(content.includes('id="site-root"'), `${page}: Site-Root fehlt`);
  expect(content.includes('type="module" src="/assets/app.js"'), `${page}: App-Modul fehlt`);
  expect(/data-page="[a-z-]+"/.test(content), `${page}: Seitenkennung fehlt`);
}

const app = textSources.get(path.join(root, "assets/app.js")) || "";
const config = textSources.get(path.join(root, "data/salon-template.js")) || "";
const styles = textSources.get(path.join(root, "assets/styles.css")) || "";
const vercelConfig = textSources.get(path.join(root, "vercel.json")) || "";
const robots = textSources.get(path.join(root, "robots.txt")) || "";

expect(config.includes('mode: "preview"'), "Zentrale Konfiguration muss im Kunden-Vorschau-Modus starten");
expect(config.includes("KUNDENVORSCHAU"), "Sichtbare Kunden-Vorschau-Kennzeichnung fehlt");
expect(config.includes("Zum Hammerseifen 51"), "Bestätigte Adresse fehlt");
expect(config.includes("02732 767997"), "Bestätigte Telefonnummer fehlt");
expect(config.includes("embedUrl:"), "Map-Embed-Konfiguration fehlt");
expect(config.includes("routeUrl:"), "Maps-Route-Konfiguration fehlt");
expect(app.includes("serviceDropdown"), "Leistungsseite muss Dropdown-Leistungen rendern");
expect(app.includes('"termin-buchen"'), "Terminroute fehlt");
expect(app.includes("data-map-consent"), "Map-Consent fehlt");
expect(styles.toLowerCase().includes("#d9b47a"), "Champagner-Akzent #D9B47A fehlt");
expect(styles.includes("Helvetica"), "Helvetica-Schriftstack fehlt");
expect(styles.includes("min-height: 44px"), "44px-Touchziel fehlt");
expect(styles.includes("prefers-reduced-motion"), "Reduced-Motion-Regel fehlt");
expect(styles.includes(":focus-visible"), "Sichtbarer Fokuszustand fehlt");
expect(robots.includes("Disallow: /"), "robots.txt muss die Indexierung sperren");
expect(vercelConfig.includes("X-Robots-Tag"), "Vercel X-Robots-Tag fehlt");
expect(vercelConfig.includes("noindex, nofollow, noarchive"), "Vercel noindex-Wert fehlt");

const forbiddenMarkers = /janssen|rohstoffhandel|workhub|friseursalon website-vorlage|\[salonname\]|\[ort\]|\[telefonnummer\]|\[quelle\]|\[datum\]/i;
const directSubmission = /<(?:form)\b|\b(?:fetch|XMLHttpRequest)\s*\(/i;
for (const [file, content] of textSources) {
  const relative = path.relative(root, file);
  if (relative.startsWith("design-system/")) continue;
  if (relative === "scripts/check-template.mjs") continue;
  expect(!forbiddenMarkers.test(content), `${relative}: alte Marke oder sichtbarer Platzhalter gefunden`);
  expect(!directSubmission.test(content), `${relative}: Formular- oder Datenübermittlungslogik gefunden`);
}

const hero = await stat(path.join(root, "assets/images/hero-salon.jpg"));
expect(hero.size > 100_000, "Neutrales Hero-Bild ist nicht plausibel vorhanden");
for (const image of ["hair-bob-editorial.jpg", "hair-cut-detail.jpg", "hair-curl-detail.jpg"]) {
  const imageStat = await stat(path.join(root, "assets/images", image));
  expect(imageStat.size > 100_000, `Bild ist nicht plausibel vorhanden: ${image}`);
}

if (failures.length) {
  console.error("Kunden-Vorschau-Check fehlgeschlagen:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Kunden-Vorschau-Check bestanden: ${textFiles.length} Textdateien und UX-/Freigabe-Gates geprüft.`);
}
