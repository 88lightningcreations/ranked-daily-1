'use client';
import { Card } from "react-bootstrap";

export default function GoogleBusinessProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Google Business Profile Management</h1>
      <Card>
        <Card.Header>
          <Card.Title>Dominate Local Search</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="mb-4">
            Your Google Business Profile (GBP) is the most important tool for attracting local customers. A well-optimized profile will put your business at the top of Google Maps and local search results, driving a steady stream of leads and phone calls.
          </p>
          <h3 className="text-xl font-bold mb-2">What We Do:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Complete and accurate profile setup.</li>
            <li>Keyword optimization to match customer searches.</li>
            <li>Regular updates with photos, posts, and Q&As.</li>
            <li>Review management to build trust and credibility.</li>
            <li>Detailed monthly performance reports.</li>
          </ul>
          <p>
            Let us turn your Google Business Profile into a customer-generating machine. Contact us today for a free consultation!
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
