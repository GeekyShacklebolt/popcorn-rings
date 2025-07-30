import Link from 'next/link'
import { format } from 'date-fns'

// Sample box office data
const boxOfficeData = [
  {
    id: 1,
    title: "Barbie",
    totalGross: "$1.45B",
    domesticGross: "$636.2M",
    internationalGross: "$809.8M",
    releaseDate: "2023-07-21",
    weeksInRelease: 24,
    genre: "Comedy/Adventure",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Oppenheimer",
    totalGross: "$950.2M",
    domesticGross: "$326.1M",
    internationalGross: "$624.1M",
    releaseDate: "2023-07-21",
    weeksInRelease: 24,
    genre: "Biography/Drama",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "The Super Mario Bros. Movie",
    totalGross: "$1.36B",
    domesticGross: "$574.9M",
    internationalGross: "$785.1M",
    releaseDate: "2023-04-05",
    weeksInRelease: 32,
    genre: "Animation/Adventure",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Guardians of the Galaxy Vol. 3",
    totalGross: "$845.6M",
    domesticGross: "$358.9M",
    internationalGross: "$486.7M",
    releaseDate: "2023-05-05",
    weeksInRelease: 28,
    genre: "Action/Adventure",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Fast X",
    totalGross: "$704.7M",
    domesticGross: "$145.9M",
    internationalGross: "$558.8M",
    releaseDate: "2023-05-19",
    weeksInRelease: 26,
    genre: "Action/Thriller",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Spider-Man: Across the Spider-Verse",
    totalGross: "$690.5M",
    domesticGross: "$381.3M",
    internationalGross: "$309.2M",
    releaseDate: "2023-06-02",
    weeksInRelease: 25,
    genre: "Animation/Action",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop"
  }
]

export default function BoxOfficePage() {
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
              <Link href="/reviews" className="text-gray-700 hover:text-popcorn-600 transition-colors">
                Reviews
              </Link>
              <Link href="/box-office" className="text-popcorn-600 font-medium">
                Box Office
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-popcorn-500 to-popcorn-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Box Office Collections</h1>
          <p className="text-xl">Track the latest movie earnings and performance</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-popcorn-600 mb-2">$5.1B</div>
              <div className="text-gray-600">Total Box Office</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-popcorn-600 mb-2">6</div>
              <div className="text-gray-600">Top Movies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-popcorn-600 mb-2">$1.45B</div>
              <div className="text-gray-600">Highest Grossing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-popcorn-600 mb-2">24</div>
              <div className="text-gray-600">Avg. Weeks in Release</div>
            </div>
          </div>
        </div>
      </section>

      {/* Box Office Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">2023 Top Grossing Movies</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Movie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Gross
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Domestic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      International
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Release Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {boxOfficeData.map((movie, index) => (
                    <tr key={movie.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-lg object-cover" src={movie.image} alt={movie.title} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{movie.title}</div>
                            <div className="text-sm text-gray-500">{movie.genre}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                        {movie.totalGross}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {movie.domesticGross}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {movie.internationalGross}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(movie.releaseDate), 'MMM dd, yyyy')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Box Office Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Box Office Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boxOfficeData.map((movie) => (
              <div key={movie.id} className="card">
                <div className="relative h-48 bg-gray-200 rounded-lg mb-4">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Gross:</span>
                    <span className="font-bold text-green-600">{movie.totalGross}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domestic:</span>
                    <span className="text-gray-900">{movie.domesticGross}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">International:</span>
                    <span className="text-gray-900">{movie.internationalGross}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weeks in Release:</span>
                    <span className="text-gray-900">{movie.weeksInRelease}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Released: {format(new Date(movie.releaseDate), 'MMM dd, yyyy')}
                </div>
              </div>
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
