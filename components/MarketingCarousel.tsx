'use client';

import { useState, useEffect, useRef } from 'react';
import { AdManagement, BespokeWebsite, BlogCreation, GoogleBusinessProfile } from './marketing';

const marketingComponents = [
  { id: 'ad-management', component: <AdManagement /> },
  { id: 'bespoke-website', component: <BespokeWebsite /> },
  { id: 'blog-creation', component: <BlogCreation /> },
  { id: 'google-business-profile', component: <GoogleBusinessProfile /> },
];

export default function MarketingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
        () =>
          setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % marketingComponents.length
          ),
        4000 // Change slide every 4 seconds
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % marketingComponents.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? marketingComponents.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-track-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {marketingComponents.map((item) => (
            <div className="carousel-slide" key={item.id} style={{ flex: '0 0 100%' }}>
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
