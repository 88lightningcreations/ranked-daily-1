'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './Header.css'; // Import the new CSS file

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // Hide after scrolling down 100px
        setIsVisible(false);
      } else { 
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]); // Re-add lastScrollY to ensure the latest state is used


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header 
        ref={headerRef}
        className={`header ${isVisible ? '' : 'hidden'}`}
    >
      <div className="container d-flex justify-content-between align-items-center h-100">
        <div
          onClick={scrollToTop}
          className="header-logo"
        >
          RankedDaily.com
        </div>
        <nav> 
          {/* Bootstrap navigation links can be added here */}
        </nav>
      </div>
    </header>
  );
}
