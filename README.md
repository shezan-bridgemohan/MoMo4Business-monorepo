# MTN MoMo4Business Monorepo

A Turborepo + pnpm workspace monorepo for MTN MoMo4Business design tokens, reusable React UI components, the web app, mobile app, and Storybook documentation.

## Structure

```text
apps/
  web-app/            # Vite + React app
  mobile-app/         # Expo + React Native app
  storybook/          # Storybook workspace for shared components
packages/
  shared-tokens/      # Shared CSS design tokens
  ui-components/      # Shared React component library
```

## Workspace Model

- Root workspaces are declared as `apps/*` and `packages/*` in [package.json](package.json).
- pnpm workspace discovery is defined in [pnpm-workspace.yaml](pnpm-workspace.yaml).
- Shared tokens live in [packages/shared-tokens/package.json](packages/shared-tokens/package.json) and are consumed everywhere through the `@shared/tokens` workspace dependency.
- Shared UI components live in [packages/ui-components/package.json](packages/ui-components/package.json), depend on `@shared/tokens`, and include local Storybook typings (`@storybook/react`) so story files type-check in-package.
- Storybook lives in [apps/storybook/package.json](apps/storybook/package.json) and loads stories directly from `packages/ui-components/src`.
- Turbo runs tasks topologically (for example `build` depends on `^build`) so shared packages resolve before dependent apps.

## Shared UI Components

Current exports from [packages/ui-components/src/index.ts](packages/ui-components/src/index.ts):

- `Button`
- `Card`
- `Table`
- `Tabs`
- `WebNavigationItem`
- `TransactionsQuickView`

Each component has Storybook coverage under [packages/ui-components/src](packages/ui-components/src).

## How The Pieces Connect

```mermaid
flowchart LR
  tokens[packages/shared-tokens]
  ui[packages/ui-components]
  web[apps/web-app]
  sb[apps/storybook]
  mobile[apps/mobile-app]

  tokens --> ui
  tokens --> web
  tokens --> sb
  tokens --> mobile
  ui --> web
  ui --> sb
```

- `packages/shared-tokens` defines the design system primitives as CSS custom properties and Tailwind v4 theme tokens.
- `packages/ui-components` builds reusable React primitives on top of those tokens.
- `apps/web-app` imports token CSS and uses `@source` for `packages/ui-components/src` so Tailwind compiles shared component classes.
- `apps/web-app` resolves `@shared/ui-components` to source via Vite alias for fast local iteration.
- `apps/storybook` imports the same token CSS and renders the same source components for isolated review.
- `apps/mobile-app` also consumes `@shared/tokens` so the same visual language can be shared with the Expo app.

## Runtime Flow

1. `packages/shared-tokens` provides the base theme values and CSS variables.
2. `packages/ui-components` builds UI on top of those tokens using Tailwind utility classes.
3. `apps/web-app` and `apps/storybook` both import the token CSS entry and explicitly source the shared component folder.
4. Storybook renders the shared component library in isolation for review and includes a global Light/Dark toolbar toggle (default is Light).
5. Turbo coordinates the pipeline so package dependencies resolve before app-level tasks run.

## Turbo Tasks

Defined in [turbo.json](turbo.json):

- `build`: cached, topologically ordered
- `lint`: cached, topologically ordered
- `type-check`: cached, topologically ordered
- `dev`: persistent, not cached
- `clean`: not cached

## Commands

From the repo root:

```bash
pnpm install
pnpm build:all
pnpm lint:all
pnpm type-check:all
pnpm dev:all
```

Targeted local development:

```bash
pnpm --filter web-app dev
pnpm --filter mobile-app dev
pnpm --filter storybook dev
```

Storybook runs on http://localhost:6006 and loads stories from `packages/ui-components/src/**/*.stories.@(js|jsx|ts|tsx)`.

Useful targeted checks:

```bash
pnpm --filter web-app build
pnpm --filter storybook build
pnpm --filter @shared/ui-components type-check
```

## Caching Notes

- Turbo cache keys include `package.json`, `turbo.json`, root `tsconfig.json` (if present), and `.env*`.
- Build outputs cached by default include `dist/**`, `build/**`, and `.next/**` (excluding `.next/cache/**`).

## Per-Package Scripts

Each workspace exposes the standard scripts needed by Turbo:

- `build`
- `lint`
- `type-check`
- `dev` where the workspace is runnable

The shared tokens package is static, while the web app, mobile app, and Storybook workspace are runnable entry points.
