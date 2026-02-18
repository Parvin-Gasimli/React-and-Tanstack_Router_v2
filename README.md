# Modern React Enterprise Template

A professional-grade React application boilerplate demonstrating advanced architecture, type-safe routing, and premium UI/UX patterns. Built with the **TanStack Ecosystem**, **MSW**, and **Tailwind CSS**.

---

## 🚀 Key Features

### 🛠️ Advanced Routing (TanStack Router)
- **Type-Safe Navigation**: Fully typed routes, params, and search queries.
- **Nested Layouts**: Modular dashboard architecture with shared layouts and sidebars.
- **Route Guards**: Sophisticated `beforeLoad` authentication patterns and automatic redirects.
- **Intent-based Prefetching**: Instant page transitions by fetching data on hover.
- **Global Orchestration**: Centralized loading states and custom Not Found/Error handling.

### Data & Mocking
- **TanStack Query (v5)**: Professional caching, auto-refetching, and mutation strategies.
- **MSW (Mock Service Worker)**: API-agnostic development with a full service-worker-based mock backend.
- **Deterministic Delays**: Simulated network latency for testing loading states (Skeletons/Spinners).

###   UI/UX
- **Responsive Grid Systems**: Modern blog and user listing patterns.
- **Tailwind 4 Dynamics**: Utility-first styling with high performance and zero runtime.

---

## 🏗️ Technical Architecture

The project follows a **Feature-Based** directory structure for maximum scalability:

```text
src/
├── api/            # Low-level API definitions and Query Options
├── components/     # Global shared UI components (Navbar, etc.)
├── features/       # Domain-specific modules (blog, users, dashboard)
│   ├── components/ # Feature-specific UI
│   └── hooks/      # Domain logic
├── lib/            # Third-party configurations (QueryClient)
├── routes/         # File-based routing definitions
└── mocks/          # MSW Handlers and Browser integration
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm / pnpm / yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔧 Core Implementation Details

### Protected Routes
Authentication is handled at the routing layer using `beforeLoad`. If a user is unauthorized, they are redirected before the component even attempts to mount.

### Nested Dashboard
The dashboard uses a parent route (`dashboard.tsx`) to manage the sidebar and layout, while children routes (`stats.tsx`, `settings.tsx`) are rendered into an `<Outlet />`.

### Global Loading UI
We use `useRouterState` in the `__root.tsx` to detect pending transitions and show a global progress bar at the top of the viewport.

---

## 📦 Tech Stack
- **Frontend**: React 18 / Vite
- **Routing**: @tanstack/react-router
- **State Management**: @tanstack/react-query
- **Styling**: Tailwind CSS
- **Mocking**: MSW (Mock Service Worker)
- **Icons**: Lucide React (via native emoji/CSS)
- **DevTools**: TanStack Router & Query DevTools integrated

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
