# Visual Regression Procedure

The presentation layer is protected. Before and after a structural or content extraction change:

1. Run `npm ci`.
2. Run `npm run dev -- --host 127.0.0.1` and capture desktop and mobile screenshots at the chosen fixed viewport sizes.
3. Run `npm run build` and serve the generated `dist/` output with `npm run preview -- --host 127.0.0.1`.
4. Capture the same viewport sizes and compare against the baseline.
5. Confirm the navigation anchors, work records, lab records, notes, contact section, and external links are unchanged.

The extraction is accepted only when differences are absent or explicitly explained as an approved content change. A browser automation tool may be used for screenshot capture, but a build pass alone is not visual equivalence evidence.
