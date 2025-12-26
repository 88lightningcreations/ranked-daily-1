
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import BlogPostCard from './BlogPostCard';
import { PostgrestError } from '@supabase/supabase-js';
import { Row, Col } from 'react-bootstrap';

interface Post {
  id: string;
  title: string;
  slug: string;
  seo_meta: string;
}

export default function BlogPostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, slug, seo_meta')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setPosts(data || []);
      } catch (error) {
        setError(error as PostgrestError);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>Error loading blog posts: {error.message}</p>;
  }

  return (
    <Row>
      {posts.map((post) => (
        <Col md={4} key={post.id} className="mb-4">
            <BlogPostCard post={post} />
        </Col>
      ))}
    </Row>
  );
}
