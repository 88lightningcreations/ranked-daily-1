
'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import BlogPostCard from './BlogPostCard';
import { PostgrestError } from '@supabase/supabase-js';
import './RecentBlogPosts.css';

interface Post {
  id: string;
  title: string;
  slug: string;
  seo_meta: string;
}

export default function RecentBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(1);
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    resetTimeout();
    if (!isHovered && posts.length > slidesToShow) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (posts.length - slidesToShow + 1)
          ),
        2000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovered, posts.length, slidesToShow]);

  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>Error loading blog posts: {error.message}</p>;
  }

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="carousel-track-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
      >
        {posts.map((post) => (
          <div className="carousel-slide" key={post.id} style={{ width: `${100 / slidesToShow}%` }}>
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
