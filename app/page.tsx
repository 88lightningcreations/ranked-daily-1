
import MarketingPackages from './marketing/ad-management/page';
import RecentBlogPosts from '@/components/RecentBlogPosts';
import ProductsList from '@/components/ProductsList';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Title, Marketing, FAQ, and Blog */}
      <section className="snap-section">
        <div className="section-content">
          <div className="desktop-grid">
            
            {/* Column 1 (Mobile: Top) */}
            <div>
              <div className="text-center">
                <h1 className="main-title">Marketing Skilled Laborers.</h1>
                <p className="subtitle">
                  From Googles Business Profile management, bespoke website creation, blogs denoting relevance and authority, to targeted ad campaigns, we help you help your people.
                </p>
              </div>
              <MarketingPackages />
            </div>

            {/* Column 2 (Mobile: Bottom) */}
            <div>
              <h2 className="section-title">Learn & Grow</h2>
              <FAQ />
              <h3 className="section-title" style={{ marginTop: '3rem' }}>Recent Posts</h3>
              <RecentBlogPosts />
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Products */}
      <section className="snap-section">
        <div className="section-content">
          <h2 className="section-title">Our Products</h2>
          <ProductsList />
        </div>
      </section>

      {/* Section 3: Footer */}
      <section className="snap-section" style={{ justifyContent: 'flex-end', minHeight: 'auto' }}>
        <div className="section-content">
            <Footer />
        </div>
      </section>
    </>
  );
}
