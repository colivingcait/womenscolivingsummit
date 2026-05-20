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
  title: "Women's Coliving Summit 2026 | Women building wealth — one room at a time.",
  description:
    "The Women's Coliving Summit is a two-day conference in Atlanta for women investors and operators building wealth through shared housing. October 16–17, 2026.",
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
