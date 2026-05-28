import type { Metadata } from 'next';

const title = "FAQ";
const description =
  "Common questions about the Women's Coliving Summit 2026 — tickets, travel, who it's for, refund policy, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: '/faq' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
