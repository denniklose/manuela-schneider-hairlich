import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const required = [
  "TEMPLATE_README.md",
  "CUSTOMIZATION_CHECKLIST.md",
  "SALON_RESEARCH_LEDGER.md",
  "HANDOVER.md",
  "DESIGN_DECISIONS.md",
  "design-system/manuela-schneider-hairlich-friseursalon/MASTER.md",
];

for (const file of required) {
  await access(path.join(root, file), constants.F_OK);
}

const config = await readFile(path.join(root, "data/salon-template.js"), "utf8");
const handover = await readFile(path.join(root, "HANDOVER.md"), "utf8");
if (!config.includes('mode: "preview"')) {
  throw new Error("Handover-Check erwartet den Kunden-Vorschau-Modus.");
}
if (!handover.includes("Im Review entscheiden") || !handover.includes("Nach der Freigabe")) {
  throw new Error("Handover-Check erwartet Review- und Freigabeabschnitte.");
}

console.log("Handover-Check bestanden: Recherche, Designprotokoll und Freigabegrenze vorhanden.");
