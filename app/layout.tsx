import type { Metadata } from 'next';
import { Inter, Yellowtail } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsentWrapper from '@/components/CookieConsentWrapper';

const inter = Inter({ subsets: ['latin'] });
const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-yellowtail',
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
      <body className={`${inter.className} ${yellowtail.variable}`}>
        <div className="full-page-scroll">
          {children}
        </div>
        <CookieConsentWrapper />
      </body>
    </html>
  );
}
