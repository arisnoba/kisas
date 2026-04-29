import { mkdir, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { access } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";

const execFileAsync = promisify(execFile);
const root = process.cwd();

async function exists(relativePath) {
  try {
    await access(path.join(root, relativePath), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function run(command, args) {
  try {
    const { stdout } = await execFileAsync(command, args, { cwd: root });
    return stdout.trim();
  } catch {
    return "";
  }
}

async function readPackageJson() {
  if (!(await exists("package.json"))) {
    return {};
  }

  const content = await readFile(path.join(root, "package.json"), "utf8");
  return JSON.parse(content);
}

const branch = (await run("git", ["branch", "--show-current"])) || "detached";
const safeBranch = branch.replace(/[^a-zA-Z0-9._-]/g, "-");
const status = await run("git", ["status", "--short"]);
const packageJson = await readPackageJson();

const frameworkSignals = [
  [
    "Next.js",
    ["next.config.js", "next.config.mjs", "next.config.ts", "app", "src/app", "pages", "src/pages"]
  ],
  ["Vite", ["vite.config.js", "vite.config.ts", "index.html"]],
  ["Astro", ["astro.config.mjs", "astro.config.ts"]],
  ["Static assets", ["public"]]
];

const detected = [];
for (const [name, signals] of frameworkSignals) {
  const found = [];
  for (const signal of signals) {
    if (await exists(signal)) {
      found.push(signal);
    }
  }
  if (found.length > 0) {
    detected.push(`${name} (${found.join(", ")})`);
  }
}

const scripts = Object.keys(packageJson.scripts ?? {}).sort();
const artifactDir = path.join(root, ".publish-artifacts", safeBranch);
await mkdir(artifactDir, { recursive: true });

const generatedAt = new Date().toISOString();
const report = `# Publishing Harness Report

Generated: ${generatedAt}
Branch: ${branch}

## Repository State

${status ? `Changed files:\n\n\`\`\`txt\n${status}\n\`\`\`` : "Working tree has no tracked file changes."}

## Detected Project

- Framework signals: ${detected.length > 0 ? detected.join("; ") : "not detected yet"}
- Package scripts: ${scripts.length > 0 ? scripts.join(", ") : "none"}

## Harness Checks

- AGENTS.md: ${await exists("AGENTS.md") ? "present" : "missing"}
- .ai docs: ${await exists(".ai/MEMORY.md") && await exists(".ai/RULES.md") && await exists(".ai/PLAN.md") ? "present" : "incomplete"}
- Skill: ${await exists(".agents/skills/web-publishing-harness/SKILL.md") ? "present" : "missing"}
- Smoke command: ${packageJson.scripts?.["harness:smoke"] ? packageJson.scripts["harness:smoke"] : "missing"}

## Publishing Status

- Build: unverified
- Routing: unverified
- Responsive layout: unverified
- Accessibility: unverified
- SEO metadata: unverified
- Assets: unverified

## Notes

- This report verifies the harness structure only.
- Add actual app code and project-specific build commands before treating this as deploy-ready evidence.
`;

const reportPath = path.join(artifactDir, "publish-report.md");
await writeFile(reportPath, report, "utf8");

console.log(`Publishing report written: ${path.relative(root, reportPath)}`);
