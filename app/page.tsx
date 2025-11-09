
import { Container } from 'react-bootstrap';
import MarketingPackages from './marketing/ad-management/page';
import RecentBlogPosts from '@/components/RecentBlogPosts';
import ProductsList from '@/components/ProductsList';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* --- MOBILE & LAPTOP LAYOUT --- */}
      <div className="mobile-laptop-container">

        {/* Section 1: Title & Marketing */}
        <section className="snap-section">
          <div className="section-content">
            <div className="text-center">
              <h1 className="main-title">Transform Your Online Presence</h1>
              <p className="subtitle">
                From bespoke websites to targeted ad campaigns, we provide the tools you need to succeed in the digital world.
              </p>
            </div>
            <div className="scrollable-content">
              <MarketingPackages />
            </div>
          </div>
        </section>

        {/* Section 2: Products */}
        <section className="snap-section">
          <div className="section-content">
            <h2 className="section-title">Our Products</h2>
            <div className="scrollable-content">
              <ProductsList />
            </div>
          </div>
        </section>

        {/* Section 3: FAQ & Blog */}
        <section className="snap-section">
          <div className="section-content">
            <h2 className="section-title">Learn & Grow</h2>
            <div className="scrollable-content">
                <FAQ />
                <h3 className="section-title" style={{ marginTop: '3rem' }}>Recent Posts</h3>
                <RecentBlogPosts />
            </div>
          </div>
        </section>

        {/* Section 4: Footer */}
        <section className="snap-section">
            <div className="section-content full-height-footer">
                <Footer />
            </div>
        </section>
      </div>

      {/* --- EXTRA-WIDE DESKTOP LAYOUT --- */}
      <div className="desktop-container">
        
        {/* Section 1: Title/Marketing + FAQ/Blog */}
        <section className="desktop-section">
          <div className="section-content">
            <div className="desktop-grid">
              
              {/* Left Column */}
              <div>
                <h1 className="main-title">Transform Your Online Presence</h1>
                <p className="subtitle">
                  From bespoke websites to targeted ad campaigns, we provide the tools you need to succeed in the digital world.
                </p>
                <div style={{ marginTop: '3rem' }}>
                    <MarketingPackages />
                </div>
              </div>

              {/* Right Column */}
              <div className="scrollable-content-container">
                <h2 className="section-title">Learn & Grow</h2>
                <div className="scrollable-content">
                    <FAQ />
                    <h3 className="section-title" style={{ marginTop: '3rem' }}>Recent Posts</h3>
                    <RecentBlogPosts />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Products */}
        <section className="desktop-section" style={{ minHeight: 'auto' }}>
            <div className="section-content">
                <h2 className="section-title">Our Products</h2>
                <ProductsList />
            </div>
        </section>
        
        {/* Footer */}
        <div className="section-content">
            <Footer />
        </div>
      </div>
    </>
  );
}
