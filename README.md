
<div align="center">

<!-- Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=8B0000&height=250&section=header&text=AMADEUSE%20YTM&fontSize=64&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=🎵%20YouTube%20Music%20Desktop%20•%20🔧%20Patched%20Features%20•%20🖥️%20Windows&descAlignY=60&descSize=18"/>

<!-- Author stats (crimson theme) -->
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Lyraxyse&show_icons=true&hide_border=true&bg_color=0d1117&title_color=b3001b&icon_color=b3001b&text_color=d0d0d0" alt="GitHub Stats" width="48%"/>
  <img src="https://streak-stats.demolab.com?user=Lyraxyse&hide_border=true&background=0d1117&stroke=b3001b&ring=b3001b&fire=b3001b&currStreakLabel=b3001b&dates=d0d0d0" alt="GitHub Streak" width="48%"/>
</p>

<!-- Typing -->
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=26&duration=3200&pause=900&color=B3001B&center=true&vCenter=true&width=900&height=60&lines=YouTube+Music+Desktop+Wrapper+%7C+Electron+%2B+Vite" alt="Typing" />

<!-- Activity Graph -->
<img src="https://github-readme-activity-graph.vercel.app/graph?username=Lyraxyse&bg_color=0d1117&color=b3001b&line=b3001b&point=b3001b&area=true&hide_border=true" width="100%"/>

<!-- Badges -->
<p>
<img src="https://img.shields.io/badge/Status-🚀%20ACTIVE%20DEVELOPMENT-b3001b?style=for-the-badge&logo=github&logoColor=ffffff&labelColor=161b22" alt="Status"/>
<img src="https://img.shields.io/badge/Platform-🖥️%20Windows-b3001b?style=for-the-badge&logo=windows&logoColor=ffffff&labelColor=161b22" alt="Platform"/>
<img src="https://img.shields.io/badge/Stack-⚡%20Electron%20%2F%20Vite%20%2F%20TypeScript-b3001b?style=for-the-badge&logo=electron&logoColor=ffffff&labelColor=161b22" alt="Stack"/>
<img src="https://img.shields.io/badge/License-📄%20MIT-b3001b?style=for-the-badge&logo=opensourceinitiative&logoColor=ffffff&labelColor=161b22" alt="License"/>
</p>

<!-- Repo social proof -->
<p>
<img src="https://img.shields.io/github/stars/Lyraxyse/AMADEUSE-YTM?style=for-the-badge&logo=github&color=b3001b&labelColor=161b22" alt="Stars"/>
<img src="https://img.shields.io/github/forks/Lyraxyse/AMADEUSE-YTM?style=for-the-badge&logo=github&color=b3001b&labelColor=161b22" alt="Forks"/>
<img src="https://img.shields.io/github/watchers/Lyraxyse/AMADEUSE-YTM?style=for-the-badge&logo=github&color=b3001b&labelColor=161b22" alt="Watchers"/>
</p>

<!-- Views -->
<p align="center">
<img src="https://komarev.com/ghpvc/?username=Lyraxyse&label=Profile%20views&color=b3001b&style=for-the-badge" alt="Profile views" />
</p>

</div>

---

<details open>
<summary><h2>🌟 À propos d’AMADEUSE YTM</h2></summary>

**AMADEUSE YTM** est une application **desktop (Windows)** qui enveloppe **YouTube Music** avec **Electron + Vite**, en y ajoutant des **tweaks** et un lancement rapide.  
Objectif : offrir une expérience plus fluide en fenêtre dédiée, avec des patches modulaires.

```ts
class AmadeuseYTM {
  name = "AMADEUSE YTM"
  platform = "Windows (Electron)"
  stack = ["TypeScript","Electron","Vite","pnpm"]
  features = [
    "🎵 Expérience YT Music en desktop",
    "🔧 Patches modulaires (UI/UX)",
    "⚡ Démarrage rapide (Vite)",
    "🧩 Structure claire (patches/, vite-plugins/)"
  ]
}
````

</details>

<details>
<summary><h2>🚀 Fonctionnalités</h2></summary>

* 🖥️ Application **Windows** native (fenêtre dédiée)
* 🔧 **Tweaks** & patches (répertoires `patches/`, `vite-plugins/`)
* ⚙️ Config prête pour build : `electron-builder.yml`, `electron.vite.config.mts`
* 🧪 Base de tests (`tests/`)
* 📄 **MIT** — projet non-officiel, sans affiliation avec YouTube/Google (respecte leurs CGU)

</details>

<details>
<summary><h2>🛠️ Stack Technique</h2></summary>

<p align="center">
<img src="https://img.shields.io/badge/TypeScript-b3001b?style=for-the-badge&logo=typescript&logoColor=ffffff&labelColor=161b22"/>
<img src="https://img.shields.io/badge/Electron-b3001b?style=for-the-badge&logo=electron&logoColor=ffffff&labelColor=161b22"/>
<img src="https://img.shields.io/badge/Vite-b3001b?style=for-the-badge&logo=vite&logoColor=ffffff&labelColor=161b22"/>
<img src="https://img.shields.io/badge/pnpm-b3001b?style=for-the-badge&logo=pnpm&logoColor=ffffff&labelColor=161b22"/>
</p>

</details>

<details>
<summary><h2>📥 Installation & Setup</h2></summary>

### Prérequis

* **Windows 10/11**
* **Node.js 22.x+**
* **pnpm**

```bash
# Cloner
git clone https://github.com/Lyraxyse/AMADEUSE-YTM.git
cd AMADEUSE-YTM

# Installer pnpm si besoin
npm i -g pnpm

# Dépendances
pnpm install --frozen-lockfile

# Dev (Electron + Vite)
pnpm dev
```

### Build / Production

```bash
# Build de l'app
pnpm build

# Lancer la build
pnpm start

# Générer un installeur Windows
pnpm dist:win
```

</details>

<details>
<summary><h2>💻 Usage</h2></summary>

1. `pnpm dev` pour le mode développement
2. `pnpm start` après build
3. Paramètres et options dans le menu **Settings** (si dispo)
4. Profite de YouTube Music en **fenêtre desktop**

</details>

<details>
<summary><h2>🤝 Contribuer</h2></summary>

* Fork
* `git checkout -b feature/ma-feature`
* Commits clairs (`feat: ...`, `fix: ...`)
* PR → on discute !

</details>

<details>
<summary><h2>📄 Licence</h2></summary>

Sous **MIT** — voir `LICENSE`.
Projet **non-officiel**. Respecte les **CGU** YouTube/Google.

</details>

<details>
<summary><h2>📞 Contact & Communauté</h2></summary>

* **GitHub** : [@Lyraxyse](https://github.com/Lyraxyse)
* **Discord** : [AMADEUSE Community](https://discord.gg/GEZCQwczMY)

<p align="center">
<img src="https://img.shields.io/badge/Made_with-💖_&_☕-b3001b?style=for-the-badge&labelColor=161b22" alt="Made with love"/>
</p>

</details>

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=8B0000&height=120&section=footer&text=Thank%20you%20for%20visiting!&fontSize=26&fontColor=ffffff&animation=twinkling"/>
</div>
