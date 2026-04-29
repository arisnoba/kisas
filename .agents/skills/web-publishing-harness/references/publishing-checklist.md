# Publishing Checklist

## Scope

- Confirm changed pages, components, routes, assets, and configuration files.
- Identify the deploy target and whether preview or production behavior differs.
- Note environment variables and external services touched by the change.

## Required Checks

- Build: app production build completes or the missing build path is documented.
- Routing: changed routes render and expected redirects or rewrites still work.
- Responsive layout: mobile, tablet, and desktop layouts do not overlap or hide critical controls.
- Accessibility: interactive controls have labels, focus states, keyboard access, and sufficient contrast.
- SEO: changed public pages have title, description, canonical where relevant, and share metadata.
- Assets: images load, dimensions are stable, and important media is not broken or overly cropped.
- Forms/actions: submissions, validation, loading, success, and failure states are handled.
- Errors: not found, empty, and loading states remain coherent.

## Report Format

Use this compact result format:

```md
## Publishing Result

- Scope:
- Validation:
- Risks:
- Follow-up:
```
