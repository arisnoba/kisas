# Review Criteria

## Code

- The change is limited to the requested behavior.
- Naming and structure match the existing codebase.
- Shared utilities and design primitives are reused when available.
- New logic has a clear verification path.

## UI

- The first viewport shows the actual product, place, content, or workflow.
- Text does not overlap, truncate awkwardly, or resize layout unexpectedly.
- Controls use familiar UI patterns and include clear states.
- Cards are used for repeated items, modals, or framed tools, not as default page wrappers.

## Publishing

- Production build assumptions are explicit.
- Environment variables are documented without exposing secrets.
- Generated files, local logs, and temporary screenshots are not committed by accident.
- Deployment notes mention unverified items plainly.
