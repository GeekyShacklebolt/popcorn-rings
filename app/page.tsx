import Link from 'next/link'
import { format } from 'date-fns'

// Sample movie data - in a real app, this would come from a CMS or API
const featuredMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: 4.5,
    boxOffice: "$282.1M",
    releaseDate: "2024-03-01",
    genre: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=400&h=300&fit=crop",
    excerpt: "Denis Villeneuve's epic sci-fi sequel delivers stunning visuals and compelling storytelling."
  },
  {
    id: 2,
    title: "Poor Things",
    rating: 4.2,
    boxOffice: "$117.5M",
    releaseDate: "2023-12-08",
    genre: "Comedy/Drama",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    excerpt: "Emma Stone shines in this bizarre and beautiful tale of rebirth and discovery."
  },
  {
    id: 3,
    title: "The Zone of Interest",
    rating: 4.0,
    boxOffice: "$15.8M",
    releaseDate: "2023-12-15",
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop",
    excerpt: "A haunting exploration of evil in its most banal form."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-popcorn-600">🍿 Popcorn Rings</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                Home
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                Reviews
              </Link>
              <Link href="/box-office" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                Box Office
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-popcorn-500 to-popcorn-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Movie Reviews & Box Office</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your go-to destination for concise movie reviews and box office collections.
            No fluff, just the facts you need to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reviews" className="btn-primary bg-white text-popcorn-600 hover:bg-gray-100">
              Read Reviews
            </Link>
            <Link href="/box-office" className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-popcorn-600">
              Box Office Data
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <article key={movie.id} className="movie-card">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-popcorn-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {movie.rating}/5
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{movie.genre}</span>
                    <span className="text-sm font-medium text-green-600">{movie.boxOffice}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{movie.title}</h4>
                  <p className="text-gray-600 mb-4">{movie.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {format(new Date(movie.releaseDate), 'MMM dd, yyyy')}
                    </span>
                    <Link href={`/reviews/${movie.id}`} className="text-popcorn-600 hover:text-popcorn-700 font-medium">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-popcorn-600 mb-2">150+</div>
              <div className="text-gray-600">Movies Reviewed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-popcorn-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">Box Office Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-popcorn-600 mb-2">4.2</div>
              <div className="text-gray-600">Average Rating</div>
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
