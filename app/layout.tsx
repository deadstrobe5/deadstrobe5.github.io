import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Afonso Ribeiro",
    template: "%s | Afonso Ribeiro",
  },
  description:
    "Afonso Ribeiro's personal website. Software Engineer specializing in AI and Cybersecurity.",
  keywords: [
    "Afonso Ribeiro",
    'Software Engineer',
    'AI',
    'Cybersecurity',
    'Full-Stack Developer',
    'Python',
    'TypeScript',
    'Rust',
  ],
  authors: [{ name: "Afonso Ribeiro" }],
  creator: "Afonso Ribeiro",
  metadataBase: new URL('https://deadstrobe5.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deadstrobe5.github.io',
    siteName: "Afonso Ribeiro",
    title: "Afonso Ribeiro",
    description: 'Software Engineer specializing in AI and Cybersecurity',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: "Afonso Ribeiro",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}