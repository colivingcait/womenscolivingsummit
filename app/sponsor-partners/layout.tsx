import type { Metadata } from 'next';

const title = 'Partner with the Women’s Coliving Summit';
const description =
  'Sponsorship tiers for the Women’s Coliving Summit — reach 125–150 women-led coliving operators and investors. Atlanta, October 16–17, 2026.';

export const metadata: Metadata = {
  title,
  description,
  // Unlisted page: keep it out of search engines. Reached by direct link only.
  robots: { index: false, follow: false },
  openGraph: { title, description, url: '/sponsor-partners' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function SponsorPartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
