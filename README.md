# Popcorn Rings

Not a usual movie site — just fun reviews, random insights, and box office buzz at times.

## Features

- **Movie Reviews**: Concise, honest reviews of the latest films
- **Box Office Tracking**: Real-time box office collections and performance data
- **Responsive Design**: Beautiful, mobile-friendly interface with Tailwind CSS
- **Static Site Generation**: Fast loading and SEO optimized with `output: export`
- **GitHub Pages Ready**: Configured for deployment at `/popcorn-rings` subdirectory
- **Google Analytics**: Integrated tracking for insights
- **PWA Ready**: Web app manifest for mobile installation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom popcorn theme
- **Language**: TypeScript
- **Deployment**: GitHub Pages with basePath configuration
- **Date Handling**: date-fns
- **Analytics**: Google Analytics (gtag)
- **Static Export**: `output: export` for GitHub Pages compatibility

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GeekyShacklebolt/popcorn-rings.git
cd popcorn-rings
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `out` directory, ready for deployment.

## Project Structure

```
popcorn-rings/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Logo.tsx       # Logo component
│   │   └── MovieCard.tsx  # Movie review cards
│   ├── data/              # Static data
│   │   └── blogPosts.ts   # Movie reviews data
│   ├── reviews/           # Reviews pages
│   │   ├── page.tsx       # All reviews listing
│   │   └── [slug]/        # Individual review pages
│   │       └── page.tsx   # Dynamic review page
│   ├── utils/             # Utility functions
│   │   └── paths.ts       # BasePath utilities
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with GA
│   └── page.tsx           # Homepage
├── public/                # Static assets
│   ├── favicon.ico        # Site favicon
│   ├── logo.png           # Square logo
│   ├── logo-round.png     # Round logo
│   ├── icon-*.png         # Various favicon sizes
│   └── site.webmanifest   # PWA manifest
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## Configuration

### BasePath Setup

The project is configured for deployment at `/popcorn-rings` subdirectory:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/popcorn-rings' : '',
  images: {
    unoptimized: true
  }
}
```

### Static Assets

All static assets use dynamic paths through `utils/paths.ts`:
- Development: `/logo.png`
- Production: `/popcorn-rings/logo.png`

## Deployment

This project is configured for deployment to GitHub Pages at `https://www.shivasaxena.com/popcorn-rings/`.

## Customization

### Adding New Reviews

Edit the reviews data in `app/data/blogPosts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Movie Title",
    slug: "movie-slug",
    rating: 9.0,
    // ... other properties
  }
]
```

### Styling

The project uses Tailwind CSS with custom popcorn-themed colors:
- Primary: `popcorn-500` (#e09c00)
- Secondary: `popcorn-600`, `popcorn-700`, `popcorn-800`
- Configure in `tailwind.config.js`

### Google Analytics

Analytics is configured in `app/layout.tsx` with tracking ID `G-RYYZFLSFTB`.

## License

This project is open source and available under the [MIT License](LICENSE).
