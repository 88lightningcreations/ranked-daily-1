
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ProductCard from './ProductCard';
import { PostgrestError } from '@supabase/supabase-js';
import { Row, Col } from 'react-bootstrap';

interface Product {
  product_name: string;
  product_description: string;
  product_url: string;
}

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('product_details')
          .not('product_details', 'is', null);

        if (error) {
          throw error;
        }

        if (data) {
          const allProducts = data.flatMap((post: any) => post.product_details || []);
          setProducts(allProducts);
        }

      } catch (error) {
        setError(error as PostgrestError);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

  return (
    <Row>
      {products.map((product, index) => (
        <Col md={4} key={index} className="mb-4">
            <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
