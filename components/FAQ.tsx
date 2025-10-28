
import { Accordion } from 'react-bootstrap';
import Link from "next/link";

const faqs = [
  {
    question: "What is 24 Hour Emergency HVAC?",
    answer: "A 24-hour emergency HVAC service provides heating, ventilation, and air conditioning repairs and services around the clock, ensuring that you can get help whenever you need it.",
    linkText: "Learn more in our blog post.",
    link: "/blog/24-hour-emergency-hvac",
  },
  {
    question: "How can I improve my Google Business Profile?",
    answer: "Optimizing your Google Business Profile involves several steps, including verifying your business, completing all sections of your profile, and gathering customer reviews.",
    linkText: "We have a dedicated service for that.",
    link: "/marketing/google-business-profile",
  },
  {
      question: "Why is blog creation important for my business?",
      answer: "A blog helps you attract organic traffic through SEO, establish your brand as an authority in your industry, and build a relationship with your audience by providing valuable content.",
      linkText: "Find out how our blog creation service can help.",
      link: "/marketing/blog-creation",
  },
];

export default function FAQ() {
  const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => {
        return {
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${faq.answer} <a href="https://www.rankeddaily.com${faq.link}">${faq.linkText}</a>`
          }
        }
      })
    };
    
  return (
      <div>
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Accordion defaultActiveKey="0">
              {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                    <p>{faq.answer} <Link href={faq.link}>{faq.linkText}</Link></p>
                  </Accordion.Body>
              </Accordion.Item>
              ))}
          </Accordion>
      </div>
  )
}
