import Logo from './Logo'

interface HeaderProps {
  currentPage?: 'home' | 'reviews'
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Logo size="lg" rounded />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-popcorn-600 font-medium'
                  : 'text-gray-700 hover:text-popcorn-600'
              }`}
            >
              Home
            </a>
            <a
              href="/reviews"
              className={`transition-colors ${
                currentPage === 'reviews'
                  ? 'text-popcorn-600 font-medium'
                  : 'text-gray-700 hover:text-popcorn-600'
              }`}
            >
              All Reviews
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
