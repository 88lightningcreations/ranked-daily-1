'use client';
import { Card } from "react-bootstrap";

export default function AdManagementPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Google Ad Management</h1>
      <Card>
        <Card.Header>
          <Card.Title>Maximizing ROI with Expert Ad Management</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="mb-4">
            Don't waste another dollar on ads that don't convert. Expert ad management means the data in to your digital platforms is analyzed and ads are ran against the keywords you rank for the services your clients are currently demanding of the market. Everything from campaign setup, keyword research to ad copywriting and performance tracking is fully managed.
          </p>
          <h3 className="text-xl font-bold mb-2">Our Process Includes:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Campaign setup and keyword research.</li>
            <li>Ad copywriting and performance tracking.</li>
            <li>Continuous optimization to maximize ROI.</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}
