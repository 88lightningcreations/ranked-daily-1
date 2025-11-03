import { Card } from 'react-bootstrap';
import Link from 'next/link';

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    seo_meta_desc: string;
  };
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
    const summary = post.seo_meta_desc || '';
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
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card className="h-100 border-0" style={{cursor: 'pointer'}}>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text as="div">
                    {summaryContent}
                </Card.Text>
            </Card.Body>
        </Card>
    </Link>
  );
}
