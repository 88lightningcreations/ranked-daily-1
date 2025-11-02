
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
        const mainTextWords = words.slice(0, maxWords - 4);
        const linkWords = words.slice(maxWords - 4, maxWords);

        summaryContent = (
            <>
                {mainTextWords.join(' ')}{' '}
                <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
                    <a>{linkWords.join(' ')}...</a>
                </Link>
            </>
        );

    } else {
        summaryContent = summary;
    }

  return (
    <Card style={{ height: '100%', border: 'none' }}>
      <Card.Body>
        <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
            <Card.Title as="a" style={{ color: 'inherit', textDecoration: 'none' }}>
                {post.title}
            </Card.Title>
        </Link>
        <Card.Text as="div">
            {summaryContent}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
