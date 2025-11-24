'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Header.css'; // Import the new CSS file

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('.full-page-scroll');

    if (scrollContainer) {
      const controlNavbar = () => {
        if (scrollContainer.scrollTop > lastScrollY.current && scrollContainer.scrollTop > 100) {
          setIsVisible(false);
        } else { 
          setIsVisible(true);
        }
        lastScrollY.current = scrollContainer.scrollTop;
      };

      scrollContainer.addEventListener('scroll', controlNavbar);

      return () => {
        scrollContainer.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);

  return (
    <header 
        ref={headerRef}
        className={`header ${isVisible ? '' : 'hidden'}`}
    >
      <div className="container d-flex justify-content-between align-items-center h-100">
        <Link href="/" className="header-logo">
          RankedDaily.com
        </Link>
        <nav> 
          {/* Bootstrap navigation links can be added here */}
        </nav>
      </div>
    </header>
  );
}
