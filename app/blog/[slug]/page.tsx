import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Article from '@/components/Article';

export async function generateStaticParams() {
  const { data: posts } = await supabase.from('blog_posts').select('slug');
  return posts?.map(({ slug }) => ({ slug })) || [];
}

async function getPost(slug: string) {
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('title, content')
    .match({ slug })
    .single();

  if (error) {
    console.error("Error fetching post:", error);
  }
  
  return post;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return <Article post={post} />;
}
