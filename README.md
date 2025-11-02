
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
<summary><h2>🌟 About AMADEUSE YTM</h2></summary>

**AMADEUSE YTM** is a **Windows desktop app** that wraps **YouTube Music** using **Electron + Vite**, adding quick startup and modular tweaks.
**Goal:** Deliver a smoother standalone window experience, with plug-and-play feature patches.

```
class AmadeuseYTM {
  name = "AMADEUSE YTM"
  platform = "Windows (Electron)"
  stack = ["TypeScript","Electron","Vite","pnpm"]
  features = [
    "🎵 Desktop YT Music experience",
    "🔧 Modular patches (UI/UX)",
    "⚡ Fast launch (Vite)",
    "🧩 Clear structure (patches/, vite-plugins/)"
  ]
}
```

</details>

<details>
<summary><h2>🚀 Features</h2></summary>

* 🖥️ **Windows** desktop app (dedicated window)
* 🔧 **Tweaks** & patches (folders: `patches/`, `vite-plugins/`)
* ⚙️ Ready-to-build setup: `electron-builder.yml`, `electron.vite.config.mts`
* 🧪 Test base (`tests/`)
* 📄 **MIT license** — unofficial project, not affiliated with YouTube/Google (respects their ToS)

</details>

<details>
<summary><h2>🛠️ Technical Stack</h2></summary>

<p align="center">
<img src="https://img.shields.io/badge/TypeScript-b3001b?style=for-the-badge&logo=typescript&logoColor=ffffff&labelColor=161b22"/>
<img src="https://img.shields.io/badge/Electron-b3001b?style=for-the-badge&logo=electron&logoColor=ffffff&labelColor=161b22"/>
<img src="https://img.shields.io/badge/Vite-b3001b?style=for-the-badge&logo=vite&logoColor=ffffff&labelColor=161b22"/>
<img src="https://img.shields.io/badge/pnpm-b3001b?style=for-the-badge&logo=pnpm&logoColor=ffffff&labelColor=161b22"/>
</p>

</details>

<details>
<summary><h2>📥 Installation & Setup</h2></summary>

### Prerequisites

* **Windows 10/11**
* **Node.js 22.x+**
* **pnpm**

```
# Clone
git clone https://github.com/Lyraxyse/AMADEUSE-YTM.git
cd AMADEUSE-YTM

# Install pnpm if needed
npm i -g pnpm

# Install dependencies
pnpm install --frozen-lockfile

# Dev (Electron + Vite)
pnpm dev
```

### Build / Production

```
# Build the app
pnpm build

# Start built app
pnpm start

# Generate Windows installer
pnpm dist:win
```

</details>

<details>
<summary><h2>💻 Usage</h2></summary>

1. `pnpm dev` for development mode
2. `pnpm start` after build
3. Adjust options in **Settings** menu (if available)
4. Enjoy YouTube Music in a dedicated **desktop window**

</details>

<details>
<summary><h2>🤝 Contributing</h2></summary>

* Fork the repo
* `git checkout -b feature/your-feature`
* Use meaningful commits (`feat: ...`, `fix: ...`)
* PR → let's discuss!

</details>

<details>
<summary><h2>📄 License</h2></summary>

Licensed under **MIT** — see `LICENSE`.
**Unofficial** project. Compliant with YouTube/Google **Terms of Service**.

</details>

<details>
<summary><h2>📞 Contact & Community</h2></summary>

* **GitHub**: [@Lyraxyse](https://github.com/Lyraxyse)
* **Discord**: [AMADEUSE Community](https://discord.gg/GEZCQwczMY)

<p align="center">
<img src="https://img.shields.io/badge/Made_with-💖_&_☕-b3001b?style=for-the-badge&labelColor=161b22" alt="Made with love"/>
</p>

</details>

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=8B0000&height=120&section=footer&text=Thank%20you%20for%20visiting!&fontSize=26&fontColor=ffffff&animation=twinkling"/>
</div>
