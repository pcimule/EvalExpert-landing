# EvalExpert Pro — Landing Page

The official marketing and landing page for **EvalExpert Pro**, an AI-powered candidate evaluation and recruitment platform.

> **Live site:** https://evalexpertpro.com  
> **Main application:** https://app.evalexpertpro.com

---

## Tech Stack

| Technology      | Purpose                              |
|----------------|--------------------------------------|
| React 18        | UI framework                         |
| Vite 5          | Build tool & dev server              |
| Tailwind CSS 3  | Utility-first styling                |
| PostCSS         | CSS processing                       |

No UI library dependencies — all components are custom-built for performance and visual consistency.

---

## Project Structure

```
EvalExpert-landing/
├── public/
│   └── favicon.svg              # Brand shield icon
├── src/
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Root component + scroll reveal
│   ├── index.css                # Global styles, Tailwind layers, animations
│   └── components/
│       ├── Navbar.jsx           # Sticky navigation with mobile menu
│       ├── Hero.jsx             # Hero section + live eval mockup
│       ├── LogosBar.jsx         # Infinite-scroll trusted-by logos
│       ├── Features.jsx         # 8-card capability grid
│       ├── HowItWorks.jsx       # 3-step workflow with mockups
│       ├── AISection.jsx        # AI provider config section
│       ├── Modules.jsx          # Tab-based module showcase
│       ├── Multilingual.jsx     # 5-language support section
│       ├── Security.jsx         # Security pillars + compliance
│       ├── Pricing.jsx          # 4-tier pricing cards
│       ├── Testimonials.jsx     # Customer quotes + social proof
│       ├── DemoSection.jsx      # Demo request form
│       ├── FAQ.jsx              # Accordion FAQ (10 questions)
│       └── Footer.jsx           # Complete footer with CTA banner
├── index.html                   # SEO-optimized HTML entry
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind with custom theme
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── .gitignore
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/pcimule/EvalExpert-landing.git
cd EvalExpert-landing

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The dev server starts at **http://localhost:4000** with hot module replacement.

### Production Build

```bash
npm run build
```

Output is generated in `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Configuration

### App URL

Update the application URL in `src/components/Navbar.jsx` and `src/components/Footer.jsx`:

```jsx
// Navbar.jsx — Sign In link
href="https://app.evalexpertpro.com/auth"
```

Replace `evalexpertpro.com` with your actual domain.

### AI Provider Branding

If you change the supported AI providers, update the provider cards in:
- `src/components/AISection.jsx` — Provider selector mockup
- `src/components/FAQ.jsx` — FAQ answers mentioning model names

### Contact Form

The demo request form in `src/components/DemoSection.jsx` currently shows a success state on submit. Wire it to your backend or a form service (e.g., Formspree, Resend, or your own `/api/contact` endpoint):

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repository to Vercel via the dashboard for automatic deployments on push.

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Add a `netlify.toml` for SPA routing:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

```bash
npm run build
# Push contents of dist/ to gh-pages branch
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

---

## CI/CD Pipeline

### GitHub Actions (example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Landing Page

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: --prod
```

---

## SEO

The landing page includes:

- `<title>` and `<meta description>` optimized for recruitment software keywords
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data (`SoftwareApplication` schema)
- Canonical URL tag
- Semantic HTML5 section structure with proper heading hierarchy
- `<link rel="preconnect">` for Google Fonts performance

Update `index.html` with your actual domain and OG image before deploying.

---

## Performance Notes

- All animations use CSS `@keyframes` — no animation library dependency
- Fonts loaded via Google Fonts with `display=swap`
- React vendor chunk is split from app code for better caching
- Scroll-reveal uses native `IntersectionObserver` (no library)
- No icon library — all icons are inline SVG

---

## License

Copyright © 2025 EvalExpert Pro. All rights reserved.
