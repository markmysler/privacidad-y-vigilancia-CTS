# Privacidad y Vigilancia - CTS

A comprehensive educational web application exploring privacy and surveillance in the digital age, created as part of a CTS (Science, Technology and Society) course project at UB.

## Project Objective

This web application serves as an educational resource to help users understand:
- The concepts of privacy and surveillance in modern society
- Different levels of digital privacy protection
- Practical strategies to enhance personal privacy
- The historical and social context of surveillance technologies
- Research methodologies and resources related to privacy studies

The platform provides interactive tools including a privacy checklist and resources to help users assess and improve their digital privacy practices.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, pnpm, or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/markmysler/privacidad-y-vigilancia-CTS.git
cd privacidad-y-vigilancia-CTS
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Create a production build:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

### Start Production Server

Run the production build locally:

```bash
npm start
# or
pnpm start
# or
yarn start
```

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── acerca/                  # About page
│   ├── contexto/                # Context/background information
│   ├── estrategias/             # Privacy strategies page
│   ├── faq/                     # Frequently asked questions
│   ├── investigacion/           # Research page
│   ├── metodologia/             # Methodology page
│   ├── niveles/                 # Privacy levels
│   │   ├── 1/                   # Level 1 privacy
│   │   ├── 2/                   # Level 2 privacy
│   │   └── 3/                   # Level 3 privacy
│   ├── privacidad/              # Privacy main page
│   └── recursos/                # Resources page
├── components/                   # React components
│   ├── header.tsx               # Navigation header
│   ├── footer.tsx               # Footer component
│   ├── privacy-checklist.tsx    # Interactive privacy checklist
│   ├── resources-content.tsx    # Resources content component
│   ├── theme-provider.tsx       # Theme context provider
│   ├── theme-toggle.tsx         # Dark/light mode toggle
│   └── ui/                      # Reusable UI components (Radix-based)
│       ├── alert.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── input.tsx
│       └── sheet.tsx
├── lib/                         # Utility functions and helpers
│   ├── utils.ts                 # Common utility functions
│   └── pdf-generator.ts         # PDF generation utilities
├── public/                      # Static assets
├── styles/                      # Additional stylesheets
│   └── globals.css
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies and scripts
```

## Key Features

- **Multi-page Navigation**: Comprehensive coverage of privacy topics across multiple pages
- **Interactive Checklist**: Privacy assessment tool for users
- **Privacy Levels**: Three-tier system explaining different levels of privacy protection
- **Resource Library**: Curated collection of privacy-related resources
- **Dark/Light Mode**: Theme toggle for user preference
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Accessible Components**: Built with Radix UI for accessibility

## License

This project is part of an academic assignment at Universitat de Barcelona (UB).

## Deployment

The application is deployed on Vercel at:
[https://privacidad-y-vigilancia-cts.vercel.app/](https://privacidad-y-vigilancia-cts.vercel.app/)