# Repository Guidelines

This repository hosts the MapConductor documentation site built with Docusaurus. Follow these guidelines when contributing changes.

## Project Structure & Module Organization

- `docs/`: Primary documentation content (Markdown/MDX). Add new pages here and update `sidebars.js` when needed.
- `src/pages/`: Custom React pages (e.g., `src/pages/index.js`) that complement the docs.
- `src/theme/`: Docusaurus theme overrides and layout customizations.
- `static/`: Static assets (images, downloads) served as-is.
- Root config: `docusaurus.config.js`, `sidebars.js`, and `package.json` define site behavior and tooling.

## Build, Test, and Development Commands

- `pnpm start`: Run the dev server with hot reload at `http://localhost:3000`.
- `pnpm build`: Build the static site; run before large changes or PRs.
- `pnpm serve`: Serve the production build locally to verify output.
- `pnpm clear`: Clear Docusaurus cache to resolve build anomalies.
- You may use `npm`/`yarn` equivalents if preferred, but `pnpm` is recommended.

## Coding Style & Naming Conventions

- JavaScript/React: Use functional components, hooks, and two-space indentation as in `src/pages/index.js`.
- Strings use single quotes; end statements with semicolons.
- Name React components in `PascalCase` and props/variables in `camelCase`.
- Keep documentation file names and slugs lowercase with hyphens (e.g., `getting-started.md`).

## Testing Guidelines

- There is no dedicated unit test suite; validation is via docs behavior.
- Before opening a PR, ensure `pnpm build` succeeds and visually inspect pages using `pnpm serve`.
- For new features or layouts, add or update example content in `docs/` to exercise changes.

## Commit & Pull Request Guidelines

- Write clear, imperative commit messages (e.g., `Adjust Mermaid diagram sizing`, `Add onboarding guide`).
- Group related changes into small, focused commits.
- For PRs, include: a short summary, rationale, key files touched, and screenshots/GIFs for visual changes.
- Reference related issues (e.g., `Closes #12`) where applicable.
- Ensure the dev server or production build has been checked locally before requesting review.

## Agent-Specific Instructions

- Respect this file’s guidance for all changes within the repository.
- Prefer minimal, focused diffs that align with existing patterns in `docs/` and `src/`.
