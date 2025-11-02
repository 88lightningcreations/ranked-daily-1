
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
  seo_meta_desc: string;
}

export default function RecentBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, slug, seo_meta_desc')
          .order('published_at', { ascending: false });

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
    resetTimeout();
    if (!isHovered && posts.length > 1) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === posts.length - 1 ? 0 : prevIndex + 1
          ),
        2000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovered, posts.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

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
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {posts.map((post) => (
          <div className="carousel-slide" key={post.id}>
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
      {posts.length > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={prevSlide}>&#10094;</button>
          <button className="carousel-arrow next" onClick={nextSlide}>&#10095;</button>
        </>
      )}
    </div>
  );
}
