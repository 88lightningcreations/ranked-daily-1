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
        <div className="blog-post-card">
            <div>
                <h5 className="blog-post-card-title">{post.title}</h5>
                <p className="blog-post-card-summary">{summaryContent}</p>
            </div>
        </div>
    </Link>
  );
}
