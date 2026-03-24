# 📱 AppNexus.IO

> **Discover Every App You Need, All in One Place.**

AppNexus.IO is a modern app marketplace web application where users can explore 28+ apps, view detailed statistics, install their favorites, sort and manage installed apps — all within a clean, fully responsive interface.

---

## ✨ Features

- 🏠 **Hero Section** — Eye-catching landing page with platform stats (117.3M+ Downloads, 317.3K+ Reviews, 132+ Active Apps)
- 📊 **Trending Apps** — Homepage showcases the most popular apps at a glance
- 🔍 **Live Search** — Instantly filter all 28 apps by name as you type
- 📦 **Install Apps** — One-click install from the App Details page with size info shown on the button
- 📈 **Rating Chart** — Bar chart showing star-by-star rating breakdown per app (powered by Recharts)
- ✅ **Installation Manager** — Dedicated page to view and manage all your installed apps
- 🔃 **Smart Sorting** — Sort installed apps by Review, Rating, Downloads, or Size (Low→High / High→Low)
- 🗑️ **Uninstall** — Remove any installed app instantly from the Installation page
- 🔔 **Toast Notifications** — Real-time feedback on install/uninstall actions
- 🚫 **Empty State Handling** — Friendly UI when no apps are found or none are installed
- ⚡ **Navigation Loading** — Smooth loading indicator during page transitions
- 📱 **Fully Responsive** — Optimized layout for mobile, tablet, and desktop

---

## 🛠️ Technologies Used

| Category               | Technology     | Version |
| ---------------------- | -------------- | ------- |
| **Frontend Framework** | React          | ^19.1.1 |
| **Routing**            | React Router   | ^7.13.1 |
| **Styling**            | Tailwind CSS   | ^4.2.1  |
| **UI Components**      | DaisyUI        | ^5.5.19 |
| **Charts**             | Recharts       | ^3.8.0  |
| **Icons**              | React Icons    | ^5.6.0  |
| **Notifications**      | React Toastify | ^11.0.5 |
| **Build Tool**         | Vite           | —       |
| **Linting**            | ESLint         | ^9.36.0 |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AppCard/            # App card displayed in the grid
│   ├── InstalledApp/       # Row component for each installed app
│   ├── Header/
│   │   ├── NavBar.jsx      # Navigation bar
│   │   └── Hero.jsx        # Hero section with CTA
│   ├── Footer/             # Site footer with links & contact
│   ├── Statistic/          # Stats section (downloads, reviews, apps)
│   ├── PleaseInstall/      # Empty state — no apps installed
│   └── SearchNotFound/     # Empty state — no search results
│
├── pages/
│   ├── Home/               # Landing page
│   ├── Apps/               # All apps with live search
│   ├── AppDetails/         # Single app detail with chart & install
│   ├── Installation/       # Installed apps with sort & uninstall
│   ├── TopApps/            # Top rated apps
│   ├── AppNotFound/        # Reusable empty/not-found wrapper
│   └── NotFound/           # 404 page
│
├── utilities/
│   └── addToDB.js          # LocalStorage helpers (save/get/remove)
│
└── Router/
    └── Router.jsx          # All route definitions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or above
- npm or yarn

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/app-nexus-io.git

# 2. Navigate into the project
cd app-nexus-io

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📦 App Catalog

The platform features **28 apps** across diverse categories:

| Category            | Apps                                                              |
| ------------------- | ----------------------------------------------------------------- |
| 🧘 Productivity     | ZenTask: Focus Planner, FocusTimer, MindNotes                     |
| 🎨 Creative         | PixelEdit Pro, ArtFlow: Digital Painting, RetroCode: 8-Bit Engine |
| 💪 Health & Fitness | SwiftFit 360, GymLog Pro, YogaFlow Studio, ZenPoint Meditation    |
| 💰 Finance          | ChartWise Finance, StockPulse                                     |
| 🔐 Security         | Vortex VPN, CloudKeeper                                           |
| 🎓 Education        | SpeakEasy AI, HackerRank Pro, StudyBuddy AI                       |
| 🎵 Entertainment    | VibeStream: Music, SoundScape Pro                                 |
| 💻 Developer Tools  | CodeSprint IDE, DataStream BI, CollabBoard                        |
| 🍕 Lifestyle        | FlavorQuest, NightSky Guide, PathFinder: Offline Maps             |
| 🏠 Home & Career    | HomeDesign 3D, ResumeBuild AI                                     |

---

## 🌐 Pages Overview

| Page         | Route           | Description                         |
| ------------ | --------------- | ----------------------------------- |
| Home         | `/`             | Hero, stats, and trending apps      |
| Apps         | `/apps`         | All 28 apps with live search        |
| App Details  | `/apps/:id`     | Stats, rating chart, install button |
| Installation | `/installation` | Manage installed apps with sorting  |
| Not Found    | `*`             | Custom 404 page                     |

---

## 📞 Contact

- 📍 **Location:** Mirpur, Dhaka, Bangladesh-1216
- 📧 **Email:** app-nexus-io@gmail.com
- 📞 **Phone:** +990235189
