'use client';
import { Card } from "react-bootstrap";

export default function AdManagementPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Ad Management</h1>
      <Card>
        <Card.Header>
          <Card.Title>Maximize Your ROI with Expert Ad Management</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="mb-4">
            Don't waste another dollar on ads that don't convert. Our expert ad management services help you get the most out of your advertising budget. We handle everything from campaign setup and keyword research to ad copywriting and performance tracking.
          </p>
          <h3 className="text-xl font-bold mb-2">Platforms We Manage:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Google Ads (Search, Display, Video)</li>
            <li>Facebook & Instagram Ads</li>
            <li>LinkedIn Ads</li>
            <li>Nextdoor Ads</li>
          </ul>
          <p>
            Stop guessing and start getting results. Contact us today for a free ad account audit and consultation.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
