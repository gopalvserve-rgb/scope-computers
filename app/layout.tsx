import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.headline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Scope Computers', 'AutoCAD Jodhpur', 'CAD CAM Institute', 'Data Science Course', 'Interior Design Course', 'IIT Training', 'NIELIT O Level'],
  authors: [{ name: 'Scope Computers' }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
