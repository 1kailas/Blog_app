import { MetadataRoute } from 'next'
import { fetchBlogPosts } from '@/lib/api'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts()
  
  const blogPosts = posts.map((post) => ({
    url: `https://yourwebsite.com/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [
    {
      url: 'https://yourwebsite.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogPosts,
  ]
}
