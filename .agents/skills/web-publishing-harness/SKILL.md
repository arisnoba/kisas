---
name: web-publishing-harness
description: Use this skill for website publishing, pre-deploy review, landing/page QA, SEO/accessibility/responsive checks, release notes, PR body generation, and Codex harness workflows for web projects.
---

# Web Publishing Harness

Use this skill when the user asks to prepare, review, publish, or QA a website with Codex.

## Workflow

1. Read `AGENTS.md`, `.ai/MEMORY.md`, `.ai/RULES.md`, and `.ai/PLAN.md` if present.
2. Identify the project type, package manager, app entry points, and deploy target from local files.
3. State a short plan before non-trivial edits.
4. Make the smallest change that satisfies the publishing goal.
5. Run the harness checks appropriate to the work:
   - Use `npm run harness:smoke` as the default structural check.
   - Use `npm run harness:report` when a read-only report is useful in the terminal.
   - Use `npm run harness:report:write` only when the user explicitly wants a durable report artifact.
6. If a real app exists, also run its local verification commands such as lint, typecheck, tests, and build.
7. Save durable publishing findings under `.publish-artifacts/{branch-name}/` only when useful.
8. Report completed changes, validation results, and any unverified risk.

## Reference Selection

- For a pre-publish checklist, read `references/publishing-checklist.md`.
- For review criteria, read `references/review-criteria.md`.
- For PR or deployment notes, read `references/pr-template.md`.

## Constraints

- Do not add new production dependencies unless the project requires them.
- Prefer existing framework and deployment conventions over a new harness-specific abstraction.
- Do not claim browser, build, SEO, accessibility, or deploy verification unless it was actually performed.
- Keep generated artifacts out of commits unless the user explicitly wants them tracked.
