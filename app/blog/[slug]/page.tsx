
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const { data: posts } = await supabase.from('blog_posts').select('slug');
  return posts?.map(({ slug }) => ({ slug })) || [];
}

async function getPost(slug: string) {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, content')
    .match({ slug })
    .single();
  return post;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
