import Link from 'next/link';
import './BlogPostCard.css';

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    seo_meta: string;
  };
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
    const summary = post.seo_meta || '';
    const maxWords = 40;
    const words = summary.split(' ');

    const isTruncated = words.length > maxWords;

    let summaryContent;

    if (isTruncated) {
        const truncatedWords = words.slice(0, maxWords);
        summaryContent = truncatedWords.join(' ') + '...';
    } else {
        summaryContent = summary;
    }

  return (
    <Link href={`/blog/${post.slug}`} className="blog-post-card-link">
        <div className="card h-100 border-0 blog-post-card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{summaryContent}</p>
            </div>
        </div>
    </Link>
  );
}
