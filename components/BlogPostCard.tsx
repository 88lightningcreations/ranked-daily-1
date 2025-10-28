
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
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <Card style={{ height: '100%' }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.seo_meta_desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
