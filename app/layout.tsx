import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getAssetPath } from './utils/paths'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Popcorn Rings - Movie Reviews & Box Office',
    template: '%s | Popcorn Rings'
  },
  description: 'Not a usual movie site — just fun reviews, random insights, and box office buzz at times.',
  keywords: 'movie reviews, box office, film analysis, popcorn rings, cinema, movies, film criticism, box office collections, movie ratings',
  authors: [{ name: 'Popcorn Rings' }],
  creator: 'Popcorn Rings',
  publisher: 'Popcorn Rings',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.shivasaxena.com/popcorn-rings/'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.shivasaxena.com/popcorn-rings/',
    siteName: 'Popcorn Rings',
    title: 'Popcorn Rings - Movie Reviews & Box Office',
    description: 'Not your usual movie site. And that\'s the whole point.',
    images: [
      {
        url: getAssetPath('/logo.png'),
        width: 1200,
        height: 630,
        alt: 'Popcorn Rings - Movie Reviews & Box Office',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Popcorn Rings - Movie Reviews & Box Office',
    description: 'Not your usual movie site. And that\'s the whole point.',
    images: [getAssetPath('/logo.png')],
    creator: '@ershivaxena',
    site: '@ershivaxena',
  },
  icons: {
    icon: [
      { url: getAssetPath('/favicon.ico'), sizes: 'any' },
      { url: getAssetPath('/icon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: getAssetPath('/icon-32x32.png'), sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: getAssetPath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: getAssetPath('/site.webmanifest'),
  category: 'entertainment',
  classification: 'Movie Reviews and Entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e09c00" />
        <meta name="msapplication-TileColor" content="#e09c00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Popcorn Rings" />

        <link rel="icon" href={getAssetPath('/favicon.ico')} />
        <link rel="icon" type="image/png" sizes="16x16" href={getAssetPath('/icon-16x16.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={getAssetPath('/icon-32x32.png')} />
        <link rel="apple-touch-icon" sizes="180x180" href={getAssetPath('/apple-touch-icon.png')} />
        <link rel="manifest" href={getAssetPath('/site.webmanifest')} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Popcorn Rings",
              "description": "Movie Reviews & Box Office Collections",
              "url": "https://www.shivasaxena.com/popcorn-rings/",
              "publisher": {
                "@type": "Organization",
                "name": "Popcorn Rings",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.shivasaxena.com/popcorn-rings/logo-round.png"
                }
              }
            })
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RYYZFLSFTB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RYYZFLSFTB');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
