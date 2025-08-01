import Link from 'next/link'
import { format } from 'date-fns'
import Logo from '../components/Logo'

// Sample reviews data
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
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=400&h=300&fit=crop",
    excerpt: "Denis Villeneuve's epic sci-fi sequel delivers stunning visuals and compelling storytelling.",
    fullReview: "Dune: Part Two is a masterful continuation of Frank Herbert's epic saga. Villeneuve's direction is impeccable, creating a world that feels both alien and familiar. The visual effects are groundbreaking, and the performances from Timothée Chalamet and Zendaya are outstanding. The film successfully balances intimate character moments with grand spectacle, making it one of the best sci-fi films in recent memory."
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
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    excerpt: "Emma Stone shines in this bizarre and beautiful tale of rebirth and discovery.",
    fullReview: "Poor Things is a delightfully weird and wonderful film that showcases Emma Stone's incredible range as an actress. Lanthimos's unique visual style and dark humor create an unforgettable cinematic experience. The film's exploration of identity, freedom, and societal expectations is both thought-provoking and entertaining."
  },
  {
    id: 3,
    title: "The Zone of Interest",
    rating: 4.0,
    boxOffice: "$15.8M",
    releaseDate: "2023-12-15",
    genre: "Drama",
    director: "Jonathan Glazer",
    runtime: "105 min",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop",
    excerpt: "A haunting exploration of evil in its most banal form.",
    fullReview: "The Zone of Interest is a chilling and innovative take on the Holocaust film. Glazer's decision to focus on the perpetrators rather than the victims creates a unique perspective on evil. The film's minimalist approach and sound design create an atmosphere of dread that lingers long after the credits roll."
  },
  {
    id: 4,
    title: "Oppenheimer",
    rating: 4.8,
    boxOffice: "$950.2M",
    releaseDate: "2023-07-21",
    genre: "Biography/Drama",
    director: "Christopher Nolan",
    runtime: "180 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    excerpt: "Nolan's masterpiece about the father of the atomic bomb is both intimate and epic.",
    fullReview: "Oppenheimer is Christopher Nolan's crowning achievement. Cillian Murphy delivers a career-defining performance as J. Robert Oppenheimer, capturing the complexity of a man who changed the world forever. The film's technical achievements are matched by its emotional depth, making it a truly unforgettable cinematic experience."
  },
  {
    id: 5,
    title: "Barbie",
    rating: 3.8,
    boxOffice: "$1.45B",
    releaseDate: "2023-07-21",
    genre: "Comedy/Adventure",
    director: "Greta Gerwig",
    runtime: "114 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    excerpt: "A surprisingly deep and entertaining exploration of feminism and identity.",
    fullReview: "Barbie is much more than a toy commercial. Gerwig's direction and Margot Robbie's performance create a film that's both entertaining and thought-provoking. The film's exploration of gender roles and societal expectations is handled with wit and intelligence, making it accessible to audiences of all ages."
  },
  {
    id: 6,
    title: "Killers of the Flower Moon",
    rating: 4.3,
    boxOffice: "$156.8M",
    releaseDate: "2023-10-20",
    genre: "Crime/Drama",
    director: "Martin Scorsese",
    runtime: "206 min",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    excerpt: "Scorsese's epic Western is a powerful indictment of American greed and racism.",
    fullReview: "Killers of the Flower Moon is a powerful and important film that sheds light on a dark chapter of American history. Scorsese's direction is masterful, and the performances from Leonardo DiCaprio and Lily Gladstone are outstanding. The film's length is justified by its scope and ambition."
  }
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Logo size="lg" href="/" rounded />
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-popcorn-500 to-popcorn-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Movie Reviews</h1>
          <p className="text-xl">Honest, concise reviews of the latest films</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-popcorn-500">
                <option>All Genres</option>
                <option>Sci-Fi</option>
                <option>Drama</option>
                <option>Comedy</option>
                <option>Action</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-popcorn-500">
                <option>Sort by Date</option>
                <option>Sort by Rating</option>
                <option>Sort by Box Office</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-popcorn-500 w-64"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <article key={review.id} className="movie-card">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-popcorn-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {review.rating}/5
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{review.genre}</span>
                    <span className="text-sm font-medium text-green-600">{review.boxOffice}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                  <div className="text-sm text-gray-500 mb-3">
                    <span>Dir. {review.director}</span>
                    <span className="mx-2">•</span>
                    <span>{review.runtime}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{review.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {format(new Date(review.releaseDate), 'MMM dd, yyyy')}
                    </span>
                    <Link href={`/reviews/${review.id}`} className="text-popcorn-600 hover:text-popcorn-700 font-medium">
                      Read Full Review →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
