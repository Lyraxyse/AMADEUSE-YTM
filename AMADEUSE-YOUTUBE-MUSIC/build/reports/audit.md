# AMADEUSE MUSIC Audit Report

## Branding & Metadata
- Set application name, product metadata, and repository links to Lyraxyse/AMADEUSE-YTM.
- Normalised README and documentation to reference the official project only.
- Added centralized branding constants for runtime menus, notifications, and Discord integration.

## Icon Pipeline
- Generated Windows, macOS, and Linux icon assets from `logo_background.png` via `pnpm run icons`.
- Stored outputs under `build/icons/` and updated Electron packaging to reference the new assets.
- Added checksum-safe icon generation script and wired it into packaging commands.

## VRChat OSC Plugin
- Verified the VRChat OSC plugin is bundled in Vite build output and production installers.
- Added automated validation script `pnpm run validate:artifacts` and checksum generation for release artifacts.
- Synced package version to `3.10.0-amadeuse.1` to align installers and release tags.

## CI/CD
- Rebranded GitHub Actions workflow, added cross-platform artifact uploads, and included checksum handling.
- Build scripts now generate icons, validate plugin presence, and emit checksums before publishing.

Generated on $(Get-Date -Format 'yyyy-MM-dd').
