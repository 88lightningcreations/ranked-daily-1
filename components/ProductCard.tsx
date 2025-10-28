
import { Card } from 'react-bootstrap';
import Link from "next/link";

interface ProductCardProps {
  product: {
    product_name: string;
    product_description: string;
    product_url: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.product_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Card style={{ height: '100%' }}>
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Text>
            {product.product_description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
