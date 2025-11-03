'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setIsVisible(false);
      } else { // if scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useLayoutEffect(() => {
    // This effect now ONLY handles the content margin to prevent overlap.
    const updateLayout = () => {
        if (headerRef.current) {
            const headerHeight = headerRef.current.offsetHeight;
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.style.marginTop = `${headerHeight}px`;
            }
        }
    };
    
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header 
        ref={headerRef}
        className={`sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-white shadow-md`}
        style={{ height: '10vh' }}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div
          onClick={scrollToTop}
          className="w-1/3"
          style={{ 
            fontFamily: 'var(--font-yellowtail)', 
            fontWeight: 400, 
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            // This single CSS line handles all responsive font sizing.
            fontSize: 'clamp(1rem, 4.5vw, 2.5rem)',
          }}
        >
          RankedDaily.com
        </div>
        <nav className="w-2/3 flex justify-end"> 
          {/* Add your navigation links here */}
        </nav>
      </div>
    </header>
  );
}
