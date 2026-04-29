import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "AGENTS.md",
  ".ai/MEMORY.md",
  ".ai/PLAN.md",
  ".ai/RULES.md",
  ".ai/CODEX_HARNESS.md",
  ".agents/skills/web-publishing-harness/SKILL.md",
  ".agents/skills/web-publishing-harness/references/publishing-checklist.md",
  ".agents/skills/web-publishing-harness/references/review-criteria.md",
  ".agents/skills/web-publishing-harness/references/pr-template.md",
  "scripts/publish-smoke.mjs",
  "scripts/publish-report.mjs",
  "package.json"
];

const websiteSignals = [
  "app",
  "src/app",
  "pages",
  "src/pages",
  "src",
  "public",
  "index.html",
  "next.config.js",
  "next.config.mjs",
  "next.config.ts",
  "vite.config.js",
  "vite.config.ts",
  "astro.config.mjs"
];

async function exists(relativePath) {
  try {
    await access(path.join(root, relativePath), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function readJson(relativePath) {
  const content = await readFile(path.join(root, relativePath), "utf8");
  return JSON.parse(content);
}

const missing = [];
for (const file of requiredFiles) {
  if (!(await exists(file))) {
    missing.push(file);
  }
}

const packageJson = await readJson("package.json");
const requiredScripts = ["harness:smoke", "harness:report"];
const missingScripts = requiredScripts.filter((script) => !packageJson.scripts?.[script]);

const detectedSignals = [];
for (const signal of websiteSignals) {
  if (await exists(signal)) {
    detectedSignals.push(signal);
  }
}

if (missing.length > 0 || missingScripts.length > 0) {
  console.error("Harness smoke failed.");
  if (missing.length > 0) {
    console.error(`Missing files: ${missing.join(", ")}`);
  }
  if (missingScripts.length > 0) {
    console.error(`Missing package scripts: ${missingScripts.join(", ")}`);
  }
  process.exit(1);
}

console.log("Harness smoke passed.");
console.log(`Required files: ${requiredFiles.length}`);
console.log(`Website signals: ${detectedSignals.length > 0 ? detectedSignals.join(", ") : "not detected yet"}`);
