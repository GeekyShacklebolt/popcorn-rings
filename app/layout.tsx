import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getAssetPath } from './utils/paths'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Popcorn Rings - Movie Reviews & Box Office Collections',
  description: 'Not your usual movie site. And that\'s the whole point.',
  keywords: 'movie reviews, box office, film analysis, popcorn rings',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={getAssetPath('/favicon.ico')} />
        <link rel="icon" type="image/png" sizes="16x16" href={getAssetPath('/icon-16x16.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={getAssetPath('/icon-32x32.png')} />
        <link rel="apple-touch-icon" sizes="180x180" href={getAssetPath('/apple-touch-icon.png')} />
        <link rel="manifest" href={getAssetPath('/site.webmanifest')} />

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
