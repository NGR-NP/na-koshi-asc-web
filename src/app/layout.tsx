import type { Metadata } from 'next';
import './globals.css';
import { EMAIL, NUMBER } from '@/lib/constant/contact';
import { ThemeProviders } from '@/providers/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    template: '%s | Narcotics Anonymous KOSHI ASC',
    default: 'Narcotics Anonymous KOSHI Area Service Committee',
  },
  description:
    'NA KOSHI Area Service Committee (ASC) is a non-profit organization that provides services to the NA community through the use of resources and services provided by the community.',

  keywords: [
    'NA',
    'Narcotics Anonymous',
    'KOSHI',
    'NA KOSHI',
    'Narcotics Anonymous KOSHI',
    'NA KOSHI ASC',
    'Narcotics Anonymous KOSHI ASC',
    'Recovering',
    'Fellowship',
    'Recovery',
    'Nepal',
    'Say no to drugs',
    'Narcotics Anonymous KOSHI Area Service Committee',
  ],
  creator: 'Tezz K',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      follow: true,
      index: true,
    },
  },
  applicationName: 'NA KOSHI ASC',
  formatDetection: { telephone: true, email: true },
  appleWebApp: {
    title: 'NA KOSHI ASC',
    capable: true,
    startupImage: '/logo/na-koshi-light.jpg',
  },
  openGraph: {
    countryName: 'Nepal',
    emails: [EMAIL],
    phoneNumbers: [NUMBER],
    title: {
      template: '%s | NA KOSHI ASC',
      default: 'Narcotics Anonymous KOSHI ASC',
    },
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'NA KOSHI ASC',
    images: [
      {
        url: '/logo/na-koshi-light.jpg',
        width: 1200,
        height: 630,
        alt: 'NA KOSHI ASC',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
