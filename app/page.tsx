import MarketingCarousel from '@/components/MarketingCarousel';
import RecentBlogPosts from '@/components/RecentBlogPosts';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <> 
      <section className="snap-section">
        <div className="content-wrapper">
          <div className="section-content text-center">
              <h1 className="main-title">Marketing Skilled Laborers.</h1>
              <p className="subtitle">
                From Googles Business Profile management, bespoke website creation, blogs denoting relevance and authority, to targeted ad campaigns, we help you help your people.
              </p>
          </div>
        </div>
      </section>

      <section className="snap-section">
        <div className="content-wrapper">
          <div className="section-content">
            <h2 className="section-title">Services</h2>
            <MarketingCarousel />
          </div>
        </div>
      </section>

      <section className="snap-section">
        <div className="content-wrapper">
          <div className="section-content">
              <h2 className="section-title">Learn & Grow</h2>
              <FAQ />
          </div>
        </div>
      </section>
      

      <section className="snap-section">
        <div className="content-wrapper">
          <div className="section-content">
              <h2 className="section-title">Recent Posts</h2>
              <RecentBlogPosts />
          </div>
        </div>
      </section>


      <section className="snap-section">
        <div className="content-wrapper">
          <Footer />
        </div>
      </section>
    </>
  );
}
