import { format } from 'date-fns'
import Logo from '../components/Logo'
import { getAllPosts } from '../data/blogPosts'

export default function ReviewsPage() {
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
              <a href="/" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                Home
              </a>
              <a href="/reviews" className="text-popcorn-600 font-medium">
                All Reviews
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-popcorn-500 to-popcorn-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">All Movie Reviews</h1>
          <p className="text-xl">Complete collection of movie reviews and box office insights</p>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getAllPosts().map((post) => (
              <article key={post.id} className="movie-card">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top"
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
                        <span className="text-gray-500">Upto Week:</span>
                        <span className="ml-1 font-medium">{post.boxOffice.uptoWeek}</span>
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
              © 2024 Popcorn Rings. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
