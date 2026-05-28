import type { Metadata } from 'next';

const title = "Speakers";
const description =
  "Meet the women who've actually built coliving portfolios — the operators, investors, and leaders taking the stage at WCS 2026.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/speakers',
    images: [{ url: '/wide-group1.png', width: 1640, height: 1050, alt: "WCS speakers and community" }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/wide-group1.png'] },
};

export default function SpeakersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
