# Portfolio Modification Contract

The existing visual system is intentional. The active presentation is rendered by `src/main.jsx` and `src/App.jsx`.

## Protected presentation

Do not modify these paths for a content-only project task:

- `src/App.jsx`
- `src/components/**`
- `src/App.css`
- `src/index.css`
- `src/main.jsx`
- `index.html`

Do not change layout, typography, colors, spacing, navigation, responsive behavior, or existing project content while adding a project.

## Project content

Project additions and updates belong in:

- `content/**`
- `public/projects/<slug>/**`

Isolated top-level sections have narrower boundaries. Shop of Horrors content and
assets belong in `content/shop-of-horrors/**` and `public/shop-of-horrors/**`.
The scope validator accepts those boundaries only when invoked with
`--slug shop-of-horrors`; it does not grant access to `src/**` or unrelated
`public/**` paths.

The homepage page boundary is `src/pages/Home/**` and remains presentation
protected after this architecture refactor. New Shop of Horrors artifacts do
not require changes to `src/App.jsx`, global CSS, routing, shared navigation, or
validation configuration.

Use the existing content schema and presentation. Do not create custom project layouts.

## Scope expansion

If a request requires a protected file, stop and report the file, why it is required, and the smallest proposed change. Do not make the change without explicit approval.

## Verification

Before completion, run `npm run build` and `npm run validate:content-scope -- --baseline <commit> --slug <slug>`. Report the exact changed files and confirm protected files were not changed.

The legacy files under `src/components/` are currently unreachable from the active entrypoint. They are intentionally out of scope for this refactor.
