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
