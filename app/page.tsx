
import MarketingPackages from './marketing/ad-management/page';
import RecentBlogPosts from '@/components/RecentBlogPosts';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Title, Marketing, FAQ, and Blog */}
      <section className="snap-section">
        <Header />
        <div className="section-content text-center">
            <h1 className="main-title">Marketing Skilled Laborers.</h1>
            <p className="subtitle">
              From Googles Business Profile management, bespoke website creation, blogs denoting relevance and authority, to targeted ad campaigns, we help you help your people.
            </p>
        </div>
      </section>

      <section className="snap-section">
        <div className="section-content">
          <MarketingPackages />
        </div>
      </section>

      <section className="snap-section">
        <div className="section-content">
            <h2 className="section-title">Learn & Grow</h2>
            <FAQ />
        </div>
      </section>
      

      <section className="snap-section">
        <div className="section-content">
            <h3 className="section-title" style={{ marginTop: '3rem' }}>Recent Posts</h3>
            <RecentBlogPosts />
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
