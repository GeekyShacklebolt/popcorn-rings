# Popcorn Rings

A simple, elegant movie review and box office tracking blog built with Next.js and deployed on GitHub Pages.

## Features

- **Movie Reviews**: Concise, honest reviews of the latest films
- **Box Office Tracking**: Real-time box office collections and performance data
- **Responsive Design**: Beautiful, mobile-friendly interface
- **Static Site Generation**: Fast loading and SEO optimized
- **GitHub Pages Ready**: Configured for automatic deployment

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/popcorn-rings.git
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
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── reviews/           # Reviews pages
│   │   ├── page.tsx       # Reviews listing
│   │   └── [id]/          # Individual review pages
│   └── box-office/        # Box office pages
│       └── page.tsx       # Box office data
├── .github/               # GitHub Actions workflow
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The workflow will:

1. Build the Next.js application
2. Generate static files
3. Deploy to GitHub Pages

To deploy:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://www.shivasaxena.com/popcorn-rings`

## Customization

### Adding New Reviews

Edit the reviews data in the respective page files:
- `app/page.tsx` - Featured movies on homepage
- `app/reviews/page.tsx` - All reviews listing
- `app/reviews/[id]/page.tsx` - Individual review data

### Styling

The project uses Tailwind CSS with custom popcorn-themed colors. You can modify:
- `tailwind.config.js` - Color scheme and theme
- `app/globals.css` - Custom styles and components

### Content Management

For a production site, consider integrating with:
- A headless CMS (Strapi, Contentful, etc.)
- A database (PostgreSQL, MongoDB, etc.)
- An API for dynamic content

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Movie data and images are for demonstration purposes
- Built with love for movie enthusiasts everywhere
- Special thanks to the Next.js and Tailwind CSS communities

---

**Popcorn Rings** - Your go-to destination for movie reviews and box office insights. 🍿
