import type { Metadata } from 'next';

const title = "FAQ";
const description =
  "Common questions about the Women's Coliving Summit 2026 — tickets, travel, who it's for, refund policy, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/faq',
    images: [{ url: '/hero-wcs.jpg', width: 1638, height: 1086, alt: "Women's Coliving Summit FAQ" }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/hero-wcs.jpg'] },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
