# NXDI — Intelligent Processes & Workflow Automation

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-EA4C89?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/)

> **Harness the Power of Intelligent Processes and Automation**  
> *Transforming organizational operations and scaling Home Care client pipelines with precision.*

---

## 📌 Executive Overview

**NXDI** is a premier Melbourne-based digital transformation and operational consultancy platform designed to modernize and scale enterprise operations. By combining data-backed process discovery with state-of-the-art workflow engineering, NXDI helps organizations eliminate operational friction, optimize throughput, and unlock automated business growth.

NXDI specializes in accelerating lead generation and onboarding for **Home Care and Healthcare providers**, enabling organizations to capture client demand faster while maintaining compliance and operational agility.

---

## 💡 The M.I.A. Methodology

NXDI operates on our proprietary **Mine, Improve & Automate (M.I.A.)** framework:

```
  ┌─────────────────────────┐
  │         1. MINE         │  Process Mining & Operational Discovery
  │    (Discover & Map)     │  Identify bottlenecks, leaks, and latent opportunities
  └────────────┬────────────┘
               │
               ▼
  ┌─────────────────────────┐
  │        2. IMPROVE       │  Data-Driven Workflow Restructuring
  │   (Streamline & Align)  │  Eliminate friction and optimize operational turnaround
  └────────────┬────────────┘
               │
               ▼
  ┌─────────────────────────┐
  │       3. AUTOMATE       │  Intelligent Robotic & System Automation
  │     (Scale & Empower)   │  High-accuracy, automated execution and pipeline growth
  └─────────────────────────┘
```

1. **We Mine**: Utilizing advanced process mining principles to map real-world customer journeys and internal workflows, uncovering hidden inefficiencies and lead leakages.
2. **We Improve**: Re-architecting operational models and procedures with a client-first focus, significantly lowering turnaround times and operational overhead.
3. **We Automate**: Deploying targeted robotic automation, automated CRM synchronization, and smart process triggers to ensure consistent 24/7 reliability and scalability.

---

## ✨ Key Value Propositions & Benefits

- 📈 **Accelerated Home Care Client Acquisition**: Be the first to capture and onboard qualified Home Care package leads with zero latency.
- ⚡ **Enhanced Operational Efficiency**: Streamlined workflows decrease turnaround times and dramatically reduce manual overhead.
- 🎯 **Pinpoint Accuracy & Compliance**: Minimize human error through automated data handling and deterministic business rules.
- 🤝 **Superior Client & Patient Experiences**: Fast, seamless interactions that elevate customer trust, retention, and satisfaction.
- 👥 **Empowered Workforce**: Relieve team members of mundane repetitive admin tasks so they can focus on compassionate client care and high-impact strategy.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) | Modern server-rendered and static React application framework |
| **UI Library** | [React 19](https://react.dev/) | Component architecture and reactive state management |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end static typing and robust developer experience |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` | High-performance modern utility styling |
| **Motion & FX** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/) | Interactive sticky scroll stacks, smooth animations, and transitions |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) | Hardware-accelerated fluid scrolling experience |
| **UI Primitives** | [Headless UI](https://headlessui.com/) & [Radix UI](https://www.radix-ui.com/) | Accessible disclosures, dropdowns, and interactive widgets |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Crisp, unified iconography |
| **Validation** | [Zod](https://zod.dev/) | Runtime schema validation and type-safe data handling |
| **Quality** | ESLint 9 (Flat Config) & Prettier | Opinionated code quality and automatic formatting |

---

## 📂 Project Architecture

```
ad4m-g1ll/
├── public/                     # Static media and public resources
│   ├── assets/Images/          # High-resolution project visual assets
│   │   ├── process_mining_insights.png        # Process mining & workflow analytics
│   │   ├── intelligent_automation_rpa.png     # Robotic & AI process automation
│   │   ├── homecare_lead_intelligence.png     # Home care client operations
│   │   ├── operational_growth_kpi.png         # Growth & efficiency KPI metrics
│   │   └── digital_transformation_future.png  # Enterprise consulting & digital roadmap
│   ├── font/                   # Custom Grotesk brand typography
│   └── landingPage/            # Section backgrounds, video teasers, and banners
├── src/
│   ├── app/                    # Next.js 15 App Router pages & layouts
│   │   ├── (LandingPage)/      # Interactive landing experience (Hero, MIA Stack, Benefits)
│   │   ├── Contacts/           # Comprehensive contact & partnership inquiry page
│   │   ├── (AdminDashboard)/   # Admin analytics & system dashboard
│   │   ├── (UserDashboard)/    # User portal & client overview
│   │   ├── layout.tsx          # Root HTML shell, fonts, and global metadata
│   │   └── globals.css         # Global styling and Tailwind directives
│   ├── components/
│   │   ├── contactsComponents/ # Contact hero banner and interactive form
│   │   ├── features/           # Landing page section components:
│   │   │   ├── Banner/         # Dynamic video hero header with quick actions
│   │   │   ├── ScrollStack/    # Sticky stacked cards for Mine, Improve & Automate
│   │   │   ├── About/          # Corporate mission, Melbourne team story & video
│   │   │   ├── Benefits/       # Modular benefit grid with customized SVG cards
│   │   │   ├── FAQSection.tsx  # Accessible accordion Q&A section
│   │   │   └── WhyChooseUs/    # Trust factors and strategic differentiation
│   │   ├── layout/             # Glassmorphism Navbar and complete Footer
│   │   ├── reusable/           # HomeButton, ScrollButton, Wrapper containers
│   │   └── ui/                 # Reusable atomic inputs, textareas, and labels
│   ├── constants/              # Global application constants and navigation items
│   ├── hooks/                  # Custom React hooks (useLoading, resize observers)
│   ├── lib/                    # Data models, SVG iconography, and utility functions
│   └── typesAndIntefaces/      # TypeScript declarations, models, and interfaces
└── package.json                # Project dependencies and script runner
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node `v20+` or `v22+` recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/softvence-omega/ad4m-g1ll.git
   cd ad4m-g1ll
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server with Hot Module Replacement |
| `npm run build` | Compiles and builds the production bundle |
| `npm run start` | Boots the compiled Next.js production server |
| `npm run lint` | Runs ESLint 9 checks to verify code quality and style standards |
| `npm run format` | Automatically formats the entire codebase with Prettier |
| `npm run format:check` | Verifies formatting compliance across all workspace files |
| `npm run typecheck` | Validates TypeScript types across the project with zero emission |

---

## 🎨 Visual Assets Overview

The project features a dedicated visual system crafted specifically for digital intelligence and automated workflows:

1. **`process_mining_insights.png`**: Visualizes complex data nodes, path analysis, and event log discovery.
2. **`intelligent_automation_rpa.png`**: Depicts system orchestration, microservices integration, and bots.
3. **`homecare_lead_intelligence.png`**: Showcases healthcare management, client tracking, and mobile coordination.
4. **`operational_growth_kpi.png`**: High-impact metrics illustrating accuracy spikes and operational turnaround reduction.
5. **`digital_transformation_future.png`**: Executive consulting, organizational agility, and cloud scaling.

---

## 🚢 Deployment

The easiest way to deploy this Next.js application is with [Vercel](https://vercel.com/):

1. Push your changes to GitHub on the `main` branch.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Next.js, optimizes assets, and delivers edge-cached global distribution.

---

## 📄 License & Team Conventions

Distributed under the proprietary license of **NXDI**. All rights reserved.  
Refer to [TEAM_CONVENTIONS.md](file:///d:/Ramjan/github/ad4m-g1ll/TEAM_CONVENTIONS.md) for code styling guidelines, Git commit formats, and PR review standards.
