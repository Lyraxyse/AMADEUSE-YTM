export const APP_BRAND = {
  productName: 'AMADEUSE MUSIC',
  appId: 'com.lyraxyse.amadeusemusic',
  protocol: 'amadeusemusic',
  homepage: 'https://github.com/Lyraxyse/AMADEUSE-YTM',
  issues: 'https://github.com/Lyraxyse/AMADEUSE-YTM/issues',
  repository: 'https://github.com/Lyraxyse/AMADEUSE-YTM',
  downloadLatest: 'https://github.com/Lyraxyse/AMADEUSE-YTM/releases/latest',
  author: 'Lyraxyse',
  loggerPrefix: '[AMADEUSE]',
  windowsShortcutName: 'AMADEUSE MUSIC.lnk',
  shortcutDescription:
    'AMADEUSE MUSIC desktop app with bundled enhancements and VRChat OSC integration',
} as const;

export type AppBrand = typeof APP_BRAND;

