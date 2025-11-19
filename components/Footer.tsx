import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Why Ranked Daily?</h2>
        <p className="footer-text">
          Twice as many people have turned 65 compared to 25, meaning twice as
          many people are leaving the job economy compared to coming in to it.
          Much of that population is a part of the skilled labor economy. There
          is a 3 million home deficit in the US and it is only increasing. It
          is so important to address these issues and I have realized I must
          be a part of the solution.
        </p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookie-policy">Cookie Consent</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} RankedDaily. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
