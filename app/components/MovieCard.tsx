import { format } from 'date-fns'
import { BlogPost } from '../data/blogPosts'

interface MovieCardProps {
  post: BlogPost
  showBoxOffice?: boolean
}

export default function MovieCard({ post, showBoxOffice = true }: MovieCardProps) {
  return (
    <a href={`/reviews/${post.slug}`} className="movie-card block hover:shadow-lg transition-shadow duration-300">
      <article>
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

          {showBoxOffice && (
            /* Box Office Details */
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
          )}

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
    </a>
  )
}
