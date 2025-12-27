'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Header.css'; // Import the new CSS file
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
        ref={headerRef}
        className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container d-flex justify-content-between align-items-center h-100">
        <Link href="/" className="header-logo">
          RankedDaily.com
        </Link>
        <nav> 
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
