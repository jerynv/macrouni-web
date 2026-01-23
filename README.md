# MacroUni

A modern nutrition tracking platform for university students and faculty.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Cloudflare Pages

### Option 1: Connect GitHub Repository (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click "Save and Deploy"

### Option 2: Direct Upload

```bash
# Build the project
npm run build

# Install Wrangler CLI
npm install -g wrangler

# Deploy to Cloudflare Pages
wrangler pages deploy dist
```

## 🛠 Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Cloudflare Pages** - Hosting & global CDN

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer)
├── pages/          # Page components (Home, About, etc.)
├── App.jsx         # Main app with routing
├── main.jsx        # Entry point
└── index.css       # Global styles

public/
└── _redirects      # SPA routing config for Cloudflare
```

## Features

- Single Page Application (SPA) with client-side routing
- Dark/Light theme toggle with localStorage persistence
- Fully responsive design
- Optimized for Cloudflare Pages edge network
- Privacy-first: No tracking, no cookies, no data collection

## License

Open source - feel free to use and modify!
