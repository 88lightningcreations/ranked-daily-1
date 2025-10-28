import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsentWrapper from '@/components/CookieConsentWrapper';

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
        {children}
        <CookieConsentWrapper />
      </body>
    </html>
  );
}
