import Header from '../components/Header'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import { getAllPosts } from '../data/blogPosts'

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <Header currentPage="reviews" />

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
              <MovieCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
