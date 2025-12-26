'use client';

import Link from "next/link";
import { useState } from 'react';
import './FAQ.css';

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
    const [open, setOpen] = useState(faqs.map(() => false));

    const toggle = (index: number) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    };

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
            <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                        <button 
                            className="accordion-button" 
                            type="button" 
                            onClick={() => toggle(index)}
                            aria-expanded={open[index]}
                            aria-controls={`collapse${index}`}
                        >
                            {faq.question}
                        </button>
                        </h2>
                        <div 
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${open[index] ? 'show' : ''}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                        <div className="accordion-body">
                            <p>{faq.answer} <Link href={faq.link}>{faq.linkText}</Link></p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
      </div>
  )
}
