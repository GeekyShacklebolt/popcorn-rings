import { MetadataRoute } from 'next'
import { getAllPosts } from './data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shivasaxena.com/popcorn-rings/'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Dynamic review pages
  const reviewPages = getAllPosts().map((post) => ({
    url: `${baseUrl}/reviews/${post.slug}`,
    lastModified: new Date(post.releaseDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...reviewPages]
}
