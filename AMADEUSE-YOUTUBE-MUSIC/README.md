# AMADEUSE MUSIC

Official desktop distribution of AMADEUSE MUSIC by Lyraxyse.
This project wraps the YouTube Music web experience in an Electron shell, ships with the full community plugin suite, and bundles the VRChat OSC integration for every installer build.

## Highlights
- Consistent marketing and metadata for AMADEUSE MUSIC across Windows, macOS, and Linux installers.
- VRChat OSC plugin included by default in production builds with automated validation.
- Electron + Vite toolchain using TypeScript and pnpm.
- Auto-update and release pipelines pointing to the official repository.

## Getting Started

```bash
git clone https://github.com/Lyraxyse/AMADEUSE-YTM.git
cd AMADEUSE-YTM
pnpm install --frozen-lockfile
pnpm dev
```

### Production Builds

```bash
# Full cross-platform build (artifacts in pack/)
pnpm dist

# Platform-specific helpers
pnpm dist:win
pnpm dist:mac
pnpm dist:linux
```

Build scripts automatically package the VRChat OSC plugin and execute post-build validation.

## Project Structure
- `src/` - Electron main process, preload, renderer, and plugin sources.
- `assets/` - Branding assets and generated icons.
- `tests/` - Playwright smoke and post-build verification scripts.
- `.github/workflows/` - CI/CD pipelines publishing signed artifacts and release notes.

## Validation
- `pnpm run validate:artifacts` asserts the VRChat OSC plugin is bundled in build outputs.
- `pnpm run checksums` generates `pack/CHECKSUMS.sha256` for release assets.

## Support & Updates
The official source of truth for updates, issues, and releases is
**https://github.com/Lyraxyse/AMADEUSE-YTM**

## License
MIT license. See `LICENSE` for details.
