import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
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
  "package.json",
  "components.json",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/zh/page.tsx",
  "src/app/globals.css",
  "src/components/home-scaffold.tsx",
  "src/i18n/config.ts",
  "src/i18n/pages/home.ts",
  "src/styles/_mixins.scss",
  "src/styles/common.scss",
  "src/styles/index.scss",
  "src/styles/pages/home.scss",
  "public/assets/images/home/README.md"
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

async function listFiles(relativePath) {
  const absolutePath = path.join(root, relativePath);
  const entries = await readdir(absolutePath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(relativePath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(entryPath)));
    } else {
      files.push(entryPath);
    }
  }

  return files;
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
const missingDependencies = [];
if (!packageJson.devDependencies?.sass && !packageJson.dependencies?.sass) {
  missingDependencies.push("sass");
}

const componentsJson = await readJson("components.json");
const invalidConfig = [];
if (componentsJson.tailwind?.css !== "src/app/globals.css") {
  invalidConfig.push("components.json tailwind.css must point to src/app/globals.css");
}

const detectedSignals = [];
for (const signal of websiteSignals) {
  if (await exists(signal)) {
    detectedSignals.push(signal);
  }
}

const forbiddenPaths = ["public/assets/figma", "public/assets/home"];
const presentForbiddenPaths = [];
for (const forbiddenPath of forbiddenPaths) {
  if (await exists(forbiddenPath)) {
    presentForbiddenPaths.push(forbiddenPath);
  }
}

const sourceFiles = await listFiles("src");
const koreanTextAllowedFiles = new Set(["src/i18n/pages/legal.ts"]);
const koreanTextFiles = [];
for (const file of sourceFiles) {
  if (!/\.(ts|tsx|scss|css)$/.test(file)) {
    continue;
  }
  if (koreanTextAllowedFiles.has(file)) {
    continue;
  }

  const content = await readFile(path.join(root, file), "utf8");
  if (/[가-힣]/.test(content)) {
    koreanTextFiles.push(file);
  }
}

if (
  missing.length > 0 ||
  missingScripts.length > 0 ||
  missingDependencies.length > 0 ||
  invalidConfig.length > 0 ||
  presentForbiddenPaths.length > 0 ||
  koreanTextFiles.length > 0
) {
  console.error("Harness smoke failed.");
  if (missing.length > 0) {
    console.error(`Missing files: ${missing.join(", ")}`);
  }
  if (missingScripts.length > 0) {
    console.error(`Missing package scripts: ${missingScripts.join(", ")}`);
  }
  if (missingDependencies.length > 0) {
    console.error(`Missing dependencies: ${missingDependencies.join(", ")}`);
  }
  if (invalidConfig.length > 0) {
    console.error(`Invalid config: ${invalidConfig.join(", ")}`);
  }
  if (presentForbiddenPaths.length > 0) {
    console.error(`Forbidden asset paths: ${presentForbiddenPaths.join(", ")}`);
  }
  if (koreanTextFiles.length > 0) {
    console.error(`Korean text found in production source files: ${koreanTextFiles.join(", ")}`);
  }
  process.exit(1);
}

console.log("Harness smoke passed.");
console.log(`Required files: ${requiredFiles.length}`);
console.log(`Website signals: ${detectedSignals.length > 0 ? detectedSignals.join(", ") : "not detected yet"}`);
console.log("Project checks: i18n, SCSS, home assets, shadcn config, and production source language");
