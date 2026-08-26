import { copyFile, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const output = path.join(root, ".site-build");
const excluded = new Set([
  ".git",
  ".vercel",
  ".site-build",
  "node_modules",
  "design-system",
  "scripts",
  "CUSTOMIZATION_CHECKLIST.md",
  "DESIGN_DECISIONS.md",
  "HANDOVER.md",
  "SALON_RESEARCH_LEDGER.md",
  "TEMPLATE_README.md",
  ".gitignore",
  ".vercelignore",
  "package.json",
  "package-lock.json",
  "vercel.json",
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
async function copyDirectory(sourceDirectory) {
  const entries = await readdir(sourceDirectory, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && excluded.has(entry.name)) continue;
    if (entry.isFile() && excluded.has(entry.name)) continue;
    if (entry.isFile() && (entry.name === ".env" || entry.name.startsWith(".env."))) continue;
    const source = path.join(sourceDirectory, entry.name);
    const relative = path.relative(root, source);
    const destination = path.join(output, relative);
    if (entry.isDirectory()) {
      await mkdir(destination, { recursive: true });
      await copyDirectory(source);
    }
    if (entry.isFile()) {
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(source, destination);
    }
  }
}

await copyDirectory(root);

console.log("Statischer Build erstellt: .site-build");
