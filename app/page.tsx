import { format } from 'date-fns'
import Logo from './components/Logo'
import { getFeaturedPosts } from './data/blogPosts'

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
            {getFeaturedPosts(3).map((post) => (
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
