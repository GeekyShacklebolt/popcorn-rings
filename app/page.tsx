import Header from './components/Header'
import Footer from './components/Footer'
import MovieCard from './components/MovieCard'
import Link from 'next/link'
import { getFeaturedPosts } from './data/blogPosts'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header currentPage="home" />

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
            <Link href='/reviews' className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-popcorn-600">
              All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Latest Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFeaturedPosts(3).map((post) => (
              <MovieCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews" className="btn-primary bg-popcorn-600 text-white hover:bg-popcorn-700 px-8 py-3 rounded-lg font-medium transition-colors">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>



      <Footer />

    </div>
  )
}
