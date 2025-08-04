import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getPostBySlug, getAllPosts } from '../../data/blogPosts'
import { getAssetPath } from '../../utils/paths'

interface ReviewPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for each review page
export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Review Not Found',
    }
  }

  const description = post.excerpt || `Read our review of ${post.title} - Rating: ${post.rating}/10. Box office collections and detailed analysis.`

  return {
    title: `${post.title} Review`,
    description,
    keywords: `${post.title}, movie review, ${post.genre}, ${post.director}, box office, film analysis, popcorn rings`,
    openGraph: {
      title: `${post.title} Review - Popcorn Rings`,
      description,
      type: 'article',
      url: `https://www.shivasaxena.com/popcorn-rings/reviews/${params.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} - Movie Review`,
        },
      ],
      publishedTime: post.releaseDate,
      authors: ['Popcorn Rings'],
      tags: [post.genre, 'movie review', 'box office'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} Review - Popcorn Rings`,
      description,
      images: [post.image],
      creator: '@ershivaxena',
      site: '@ershivaxena',
    },
    alternates: {
      canonical: `/reviews/${params.slug}`,
    },
    other: {
      'article:published_time': post.releaseDate,
      'article:author': 'Popcorn Rings',
      'article:section': 'Movie Reviews',
      'article:tag': post.genre,
    },
  }
}

// Generate static params for all possible slugs
export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-popcorn-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.rating}/10
              </span>
              <span className="text-white/80 text-sm">{post.genre}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-white/80 text-sm">
              <span>{post.director}</span>
              <span>•</span>
              <span>{post.runtime}</span>
              <span>•</span>
              <span>{format(new Date(post.releaseDate), 'MMM dd, yyyy')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Box Office Collections */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Box Office Collections</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-popcorn-600 mb-1">{post.boxOffice.total}</div>
                <div className="text-sm text-gray-600 font-medium">Total</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-popcorn-500 mb-1">{post.boxOffice.domestic}</div>
                <div className="text-sm text-gray-600 font-medium">Domestic</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-popcorn-700 mb-1">{post.boxOffice.international}</div>
                <div className="text-sm text-gray-600 font-medium">International</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-popcorn-600 mb-1">Week {post.boxOffice.uptoWeek}</div>
                <div className="text-sm text-gray-600 font-medium">Upto Week</div>
              </div>
            </div>
          </div>

          {/* Full Review */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Review</h2>
            <div className="text-gray-700 leading-relaxed">
              {post.fullReview.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* YouTube Video Embed */}
          {post.videoUrl && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Watch My Review</h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src={post.videoUrl}
                  title={`${post.title} - Review Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Back to Reviews */}
          <div className="mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center text-popcorn-600 hover:text-popcorn-700 font-medium"
            >
              ← Back to All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data for Movie Review */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Movie",
              "name": post.title,
              "director": {
                "@type": "Person",
                "name": post.director
              },
              "genre": post.genre,
              "datePublished": post.releaseDate,
              "duration": post.runtime
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": post.rating,
              "bestRating": 10,
              "worstRating": 1
            },
            "author": {
              "@type": "Organization",
              "name": "Popcorn Rings"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Popcorn Rings",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.shivasaxena.com/popcorn-rings/logo-round.png"
              }
            },
            "datePublished": post.releaseDate,
            "reviewBody": post.excerpt,
            "url": `https://www.shivasaxena.com/popcorn-rings/reviews/${params.slug}`
          })
        }}
      />

      <Footer />
    </div>
  )
}
