import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.rankeddaily.com';

  // Static pages
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/marketing/ad-management`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/marketing/bespoke-website`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/marketing/blog-creation`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/marketing/google-business-profile`, lastModified: new Date(), priority: 0.8 },
  ];

  // Dynamic pages (blog posts)
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    const { data: blogPosts, error } = await supabase.from('blog_posts').select('slug, updated_at');
    if (error) throw error;

    if (blogPosts) {
      dynamicRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
