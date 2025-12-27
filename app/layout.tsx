
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import CookieConsentWrapper from '@/components/CookieConsentWrapper';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Turn Attention Into Cash - Digital Marketing for Skilled Laborers',
  description: 'We help skilled laborers and business owners grow their business by leveraging the power of Google SEO and content marketing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="background-animation">
            <div className="blob blob-steel-blue"></div>
            <div className="blob blob-dark-slate-green"></div>
            <div className="blob blob-maroon"></div>
          </div>
          <Header />
          <div>
            {children}
          </div>
          <CookieConsentWrapper />
      </body>
    </html>
  );
}
