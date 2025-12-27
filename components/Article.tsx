'use client';

import ReactMarkdown from 'react-markdown';
import '@/app/blog/article.css';

interface ArticleProps {
  post: {
    title: string;
    content: string;
    subtitle?: string;
  };
}

export default function Article({ post }: ArticleProps) {
  return (
    <div className="article-container">
      <div className="section-content">
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          {post.subtitle && <p className="article-subtitle">{post.subtitle}</p>}
        </header>
        <div className="article-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
