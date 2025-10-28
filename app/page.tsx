'use client';

import { Card } from "react-bootstrap";
import Link from "next/link";
import ProductsList from "@/components/ProductsList";
import FAQ from "@/components/FAQ";
import RecentBlogPosts from "@/components/RecentBlogPosts";

const marketingPackages = [
  {
    title: "Google Business Profile Management",
    description: "Optimize your Google Business Profile to attract more local customers.",
    link: "/marketing/google-business-profile",
  },
  {
    title: "Bespoke Website Development",
    description: "Get a custom-built website that is tailored to your specific needs and goals.",
    link: "/marketing/bespoke-website",
  },
  {
    title: "Blog Creation",
    description: "Get high-quality blog content that is optimized for SEO and drives traffic to your website.",
    link: "/marketing/blog-creation",
  },
  {
    title: "Ad Management",
    description: "Get the most out of your advertising budget with our expert ad management services.",
    link: "/marketing/ad-management",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Turn Attention Into Cash</h1>
      <p className="text-lg text-center mb-12">
        We help skilled laborers and business owners grow their business by leveraging the power of Google SEO and content marketing.
      </p>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {marketingPackages.map((pkg) => (
          <Link href={pkg.link} key={pkg.title} passHref legacyBehavior>
            <Card as="a" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card.Header>
                <Card.Title>{pkg.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>{pkg.description}</p>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Blog Posts</h2>
        <RecentBlogPosts />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
        <ProductsList />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <FAQ />
      </section>
    </div>
  );
}
