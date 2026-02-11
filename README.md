# Nexus Command Center

A modern command center for managing rank-to-rent websites. Built with React, TypeScript, Tailwind CSS, and optimized for Cloudflare Pages.

## Features

- 📊 **Dashboard Overview** - Monitor KPIs, charts, and key metrics
- 🌐 **Sites Management** - Manage all your rank-to-rent websites
- 📧 **Lead Tracking** - Track and manage incoming leads
- ⚡ **Uptime Monitoring** - Monitor site uptime and performance
- 🔍 **SEO Analytics** - Track keyword rankings and organic traffic
- 💰 **Revenue Tracking** - Monitor rental income and payments
- ⚙️ **Settings** - Manage API keys and integrations
- 👥 **Admin Panel** - User management and system settings

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Architecture**: Monorepo with npm workspaces
- **Deployment**: Cloudflare Pages (with Workers + D1 support)

## Project Structure

```
nexus-command-center/
├── apps/
│   └── web/              # Main web application
│       ├── src/
│       │   ├── components/
│       │   ├── layouts/   # Shell layout (nav + topbar)
│       │   ├── pages/     # All page components
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css
│       └── package.json
├── packages/
│   └── shared/           # Shared components library
│       ├── src/
│       │   └── components/
│       │       ├── Card.tsx
│       │       ├── Button.tsx
│       │       ├── Input.tsx
│       │       ├── Badge.tsx
│       │       ├── Table.tsx
│       │       └── PageHeader.tsx
│       └── package.json
├── package.json          # Root workspace configuration
├── LICENSE              # MIT License
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WebFoundryAI/nexus-command-center.git
cd nexus-command-center
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build the application for production:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Routes

- `/` - Redirects to `/login`
- `/login` - Login page with Google button (no actual authentication)
- `/overview` - Dashboard with KPIs and charts
- `/sites` - Sites management
- `/leads` - Lead tracking
- `/uptime` - Uptime monitoring
- `/seo` - SEO performance analytics
- `/revenue` - Revenue tracking
- `/settings` - API keys and integrations
- `/admin` - Admin panel

All routes except `/login` include the Shell layout (navigation sidebar + topbar).

## Components

The `@nexus/shared` package includes reusable components:

- **Card** - Container component with optional title
- **Button** - Button with variants (primary, secondary, outline) and sizes
- **Input** - Input field with label and error states
- **Badge** - Status badges with color variants
- **Table** - Data table with customizable columns
- **PageHeader** - Page title with description and action buttons

## Design System

- **Theme**: Light theme only (no dark mode)
- **Colors**: Blue primary, gray neutrals
- **Typography**: System fonts with Tailwind defaults
- **Spacing**: Tailwind spacing scale

## License

MIT License - see [LICENSE](LICENSE) file for details

## Author

WebFoundryAI

---

Built with ❤️ for rank-to-rent businesses
