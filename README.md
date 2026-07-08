# Tailwind Workspace Monorepo

A Turborepo-based monorepo containing web and mobile frontends plus a shared design-token package.

## Structure

```text
apps/
  web-app/            # Vite + React
  mobile-app/         # React Native + Expo
packages/
  shared-tokens/      # Shared design tokens (CSS/JSON)
```

## Workspace Model

- Root workspaces are declared as `apps/*` and `packages/*` in [package.json](package.json).
- pnpm workspace discovery is defined in [pnpm-workspace.yaml](pnpm-workspace.yaml).
- Apps depend on `@shezan-test/mtn-design-tokens` via `workspace:*` to create a dependency edge.
- Turbo uses topological execution with `dependsOn: ["^build"]`, so `shared-tokens` runs before dependent apps.

## Turbo Tasks

Defined in [turbo.json](turbo.json):

- `build`: cached, topologically ordered
- `lint`: cached, topologically ordered
- `type-check`: cached, topologically ordered
- `dev`: persistent, not cached
- `clean`: not cached

## Commands

From repo root:

```bash
pnpm install
pnpm build:all
pnpm lint:all
pnpm type-check:all
pnpm dev:all
```

## Caching Notes

- Turbo cache keys include `package.json`, `turbo.json`, root `tsconfig.json` (if present), and `.env*`.
- Build outputs cached by default include `dist/**`, `build/**`, and `.next/**` (excluding `.next/cache/**`).

## Per-Package Scripts (Required for Turbo)

Each workspace should expose these scripts for full pipeline coverage:

- `build`
- `lint`
- `type-check`

This repository is already configured with those scripts in all three workspaces.
