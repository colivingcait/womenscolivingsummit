import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/components/ModalProvider';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SponsorModal } from '@/components/SponsorModal';
import { SpeakerModal } from '@/components/SpeakerModal';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { ScrollReveal } from '@/components/ScrollReveal';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://womenscolivingsummit.com'),
  title: {
    default: "Women's Coliving Summit 2026 | Atlanta · Oct 16–17",
    template: "%s | Women's Coliving Summit 2026",
  },
  description:
    "Two days with the women building, scaling, and investing in coliving. October 16–17, 2026 in Atlanta. The only summit of its kind.",
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: "Women's Coliving Summit",
    title: "Women's Coliving Summit 2026 | Atlanta · Oct 16–17",
    description:
      "Two days with the women building, scaling, and investing in coliving. October 16–17, 2026 in Atlanta. The only summit of its kind.",
    url: 'https://womenscolivingsummit.com',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Coliving Summit 2026 | Atlanta · Oct 16–17",
    description:
      "Two days with the women building, scaling, and investing in coliving. October 16–17, 2026 in Atlanta.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <ModalProvider>
          <Nav />
          {children}
          <Footer />
          <SponsorModal />
          <SpeakerModal />
          <ExitIntentPopup />
          <ScrollReveal />
        </ModalProvider>
      </body>
    </html>
  );
}
