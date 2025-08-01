import { format } from 'date-fns'
import Logo from './components/Logo'





// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: 4.5,
    boxOffice: {
      total: "$282.1M",
      domestic: "$145.2M",
      international: "$136.9M",
      weeksInRelease: 8
    },
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
    boxOffice: {
      total: "$117.5M",
      domestic: "$35.2M",
      international: "$82.3M",
      weeksInRelease: 16
    },
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
    boxOffice: {
      total: "$15.8M",
      domestic: "$8.2M",
      international: "$7.6M",
      weeksInRelease: 12
    },
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
    boxOffice: {
      total: "$950.2M",
      domestic: "$326.1M",
      international: "$624.1M",
      weeksInRelease: 24
    },
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
    boxOffice: {
      total: "$1.45B",
      domestic: "$636.2M",
      international: "$809.8M",
      weeksInRelease: 24
    },
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
    boxOffice: {
      total: "$156.8M",
      domestic: "$67.4M",
      international: "$89.4M",
      weeksInRelease: 18
    },
    releaseDate: "2023-10-20",
    genre: "Crime/Drama",
    director: "Martin Scorsese",
    runtime: "206 min",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    excerpt: "Scorsese's epic Western is a powerful indictment of American greed and racism.",
    fullReview: "Killers of the Flower Moon is a powerful and important film that sheds light on a dark chapter of American history. Scorsese's direction is masterful, and the performances from Leonardo DiCaprio and Lily Gladstone are outstanding. The film's length is justified by its scope and ambition."
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
              <Logo size="lg" rounded />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-popcorn-600 font-medium">
                Home
              </a>
              <a href="/reviews" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                All Reviews
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-popcorn-500 to-popcorn-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Movie Reviews & Box Office</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Not a usual movie site — just fun reviews, random insights, and box office buzz at times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://www.youtube.com/@PopcornRings' target='_blank' rel="noopener noreferrer" className="btn-primary bg-white text-popcorn-600 hover:bg-gray-100">
              YouTube Channel
            </a>
            <a href='/reviews' className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-popcorn-600">
              All Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Latest Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="movie-card">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-popcorn-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {post.rating}/5
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{post.genre}</span>
                    <span className="text-sm font-medium text-green-600">{post.boxOffice.total}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{post.title}</h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  {/* Box Office Details */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-sm text-gray-600 mb-2">Box Office Performance</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Domestic:</span>
                        <span className="ml-1 font-medium">{post.boxOffice.domestic}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">International:</span>
                        <span className="ml-1 font-medium">{post.boxOffice.international}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Weeks:</span>
                        <span className="ml-1 font-medium">{post.boxOffice.weeksInRelease}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {format(new Date(post.releaseDate), 'MMM dd, yyyy')}
                    </span>
                    <div className="text-popcorn-600 font-medium">
                      {post.director} • {post.runtime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/reviews" className="btn-primary bg-popcorn-600 text-white hover:bg-popcorn-700 px-8 py-3 rounded-lg font-medium transition-colors">
              View All Reviews
            </a>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Popcorn Rings — where every film is a potential blockbuster... or a meme.
            </p>
            <div className="text-sm text-gray-400">
              © 2025 Popcorn Rings. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
