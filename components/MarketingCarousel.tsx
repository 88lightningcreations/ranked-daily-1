'use client';

import { useState, useEffect, useRef } from 'react';
import { AdManagement, BespokeWebsite, BlogCreation, GoogleBusinessProfile } from './marketing';

const marketingComponents = [
  { id: 'ad-management', component: <AdManagement /> },
  { id: 'bespoke-website', component: <BespokeWebsite /> },
  { id: 'blog-creation', component: <BlogCreation /> },
  { id: 'google-business-profile', component: <GoogleBusinessProfile /> },
];

const duplicatedMarketingComponents = [...marketingComponents, marketingComponents[0]];

export default function MarketingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        },
        8000 // Change slide every 8 seconds
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovered]);

  useEffect(() => {
    if (currentIndex === duplicatedMarketingComponents.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // This should match the transition duration in CSS
    } else if (currentIndex === 0 && !isTransitioning) {
        setTimeout(() => {
            setIsTransitioning(true);
        }, 50)
    }
  }, [currentIndex, isTransitioning]);


  const nextSlide = () => {
    if(currentIndex < duplicatedMarketingComponents.length - 1) {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1)
        );
    }
  };

  const prevSlide = () => {
      if(currentIndex > 0) {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1
        );
      }
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-track-container">
        <div
          className={`carousel-track ${!isTransitioning ? 'no-transition' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {duplicatedMarketingComponents.map((item, index) => (
            <div className="carousel-slide" key={index} style={{ flex: '0 0 100%' }}>
              {item.component}
            </div>
          ))}
        </div>
      </div>
      {marketingComponents.length > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={prevSlide}>&#10094;</button>
          <button className="carousel-arrow next" onClick={nextSlide}>&#10095;</button>
        </>
      )}
    </div>
  );
}
