import Link from 'next/link'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

// Sample review data - in a real app, this would come from a CMS or API
const reviews = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: 4.5,
    boxOffice: "$282.1M",
    releaseDate: "2024-03-01",
    genre: "Sci-Fi",
    director: "Denis Villeneuve",
    runtime: "166 min",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&h=400&fit=crop",
    excerpt: "Denis Villeneuve's epic sci-fi sequel delivers stunning visuals and compelling storytelling.",
    fullReview: "Dune: Part Two is a masterful continuation of Frank Herbert's epic saga. Villeneuve's direction is impeccable, creating a world that feels both alien and familiar. The visual effects are groundbreaking, and the performances from Timothée Chalamet and Zendaya are outstanding. The film successfully balances intimate character moments with grand spectacle, making it one of the best sci-fi films in recent memory. The cinematography by Greig Fraser is breathtaking, capturing the vastness of Arrakis and the intricate details of the Fremen culture. Hans Zimmer's score is equally impressive, creating an immersive audio experience that enhances the film's epic scope. The screenplay by Villeneuve and Jon Spaihts effectively adapts the complex source material while maintaining the philosophical depth that makes Dune such a compelling story. This is a film that demands to be seen on the biggest screen possible."
  },
  {
    id: 2,
    title: "Poor Things",
    rating: 4.2,
    boxOffice: "$117.5M",
    releaseDate: "2023-12-08",
    genre: "Comedy/Drama",
    director: "Yorgos Lanthimos",
    runtime: "141 min",
    cast: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe", "Ramy Youssef"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop",
    excerpt: "Emma Stone shines in this bizarre and beautiful tale of rebirth and discovery.",
    fullReview: "Poor Things is a delightfully weird and wonderful film that showcases Emma Stone's incredible range as an actress. Lanthimos's unique visual style and dark humor create an unforgettable cinematic experience. The film's exploration of identity, freedom, and societal expectations is both thought-provoking and entertaining. Stone's performance as Bella Baxter is nothing short of extraordinary, capturing the character's evolution from childlike innocence to sophisticated understanding with remarkable nuance. The supporting cast, particularly Mark Ruffalo as the pompous Duncan Wedderburn, provides excellent comedic relief while adding depth to the film's themes. The production design and cinematography create a surreal, dreamlike atmosphere that perfectly complements the film's offbeat narrative. This is a film that challenges conventional storytelling while remaining thoroughly engaging and entertaining."
  }
]

// Generate static params for static export
export async function generateStaticParams() {
  return reviews.map((review) => ({
    id: review.id.toString(),
  }))
}

interface ReviewPageProps {
  params: {
    id: string
  }
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const review = reviews.find(r => r.id === parseInt(params.id))

  if (!review) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-popcorn-600">🍿 Popcorn Rings</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                Home
              </Link>
              <Link href="/reviews" className="text-popcorn-600 font-medium">
                Reviews
              </Link>
              <Link href="/box-office" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                Box Office
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Movie Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={review.image}
          alt={review.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-popcorn-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {review.rating}/5
              </span>
              <span className="text-white/80 text-sm">{review.genre}</span>
              <span className="text-white/80 text-sm">{review.runtime}</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{review.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{review.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Review Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Review</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{review.fullReview}</p>

                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Box Office Performance</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">{review.boxOffice}</div>
                  <p className="text-gray-600">Total worldwide gross as of latest data</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4">Movie Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600">Director:</span>
                    <div className="font-medium">{review.director}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Release Date:</span>
                    <div className="font-medium">{format(new Date(review.releaseDate), 'MMMM dd, yyyy')}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Genre:</span>
                    <div className="font-medium">{review.genre}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Runtime:</span>
                    <div className="font-medium">{review.runtime}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Rating:</span>
                    <div className="font-medium text-popcorn-600">{review.rating}/5</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold mb-3">Cast</h4>
                  <ul className="space-y-1">
                    {review.cast.map((actor, index) => (
                      <li key={index} className="text-sm text-gray-700">{actor}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link href="/reviews" className="btn-primary w-full text-center block">
                    ← Back to Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🍿 Popcorn Rings</h3>
            <p className="text-gray-300 mb-6">
              Your trusted source for movie reviews and box office insights.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 Popcorn Rings. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
