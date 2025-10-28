
import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.rankeddaily.com';

  let blogPostsSitemap: MetadataRoute.Sitemap = [];
  try {
    const { data: blogPosts, error } = await supabase.from('blog_posts').select('slug, updated_at');
    if (error) throw error;

    if (blogPosts) {
        blogPostsSitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
      }));
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  return blogPostsSitemap;
}
