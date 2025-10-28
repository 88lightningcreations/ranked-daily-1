'use client';
import { Card } from "react-bootstrap";

export default function BespokeWebsitePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bespoke Website Development</h1>
      <Card>
        <Card.Header>
          <Card.Title>A Website as Unique as Your Business</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="mb-4">
            Tired of cookie-cutter websites from template builders? We create truly bespoke websites from scratch, tailored to your brand, your customers, and your business goals. No templates, no limitations, just pure, handcrafted code.
          </p>
          <h3 className="text-xl font-bold mb-2">What You Get:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>A unique design that reflects your brand identity.</li>
            <li>A fully responsive layout that looks great on all devices.</li>
            <li>Optimized for speed, performance, and SEO.</li>
            <li>Scalable and easy to maintain.</li>
            <li>You own the code, no monthly platform fees.</li>
          </ul>
          <p>
            Ready for a website that sets you apart from the competition? Contact us for a free consultation and quote.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
