# wonkle.io

## Setup

1. Setup development environment with [mise](https://mise.jdx.dev/getting-started.html) and [nix](https://nixos.org/download/#download-nix)
   - [IDE integration](https://mise.jdx.dev/ide-integration.html)
2. Install dependencies:
   ```bash
   bun install install
   ```
3. Create `.env.local` from `.env.local.example`
4. Setup Convex (only required once):
   ```bash
   bunx convex dev
   ```
5. Start dev server:
   ```bash
   bun dev
   ```

## Web Platform Baseline

[Web Platform Baseline](https://web.dev/baseline/) allows developers to easily tell whether a
feature will work across different browsers. In wonkle, we override
[Next.js' default browserslist config](https://nextjs.org/docs/architecture/supported-browsers) in
[`package.json`](./package.json). This is then picked up by
[swc](https://swc.rs/docs/configuration/supported-browsers) and
[eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat).
At the time of writing (2026-02-07), our config (`baseline widely available with downstream`)
[covers 87.8%](https://browsersl.ist/#q=baseline+widely+available+with+downstream) of global users.
