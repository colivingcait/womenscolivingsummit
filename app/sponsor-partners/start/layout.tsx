import type { Metadata } from 'next';

const title = 'Become a Sponsor — Women’s Coliving Summit';
const description = 'Start your Women’s Coliving Summit sponsorship — let’s connect.';

export const metadata: Metadata = {
  title,
  description,
  // Unlisted onboarding stub: keep it out of search engines.
  robots: { index: false, follow: false },
  openGraph: { title, description, url: '/sponsor-partners/start' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function SponsorPartnersStartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
