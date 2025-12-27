import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsentWrapper from '@/components/CookieConsentWrapper';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

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
      <body className={`${inter.className} ${playfair.variable}`}>
        <Header />
        <div>
          {children}
        </div>
        <CookieConsentWrapper />
      </body>
    </html>
  );
}
