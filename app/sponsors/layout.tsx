import type { Metadata } from 'next';

const title = "Sponsors";
const description =
  "The companies behind the room. Meet the sponsors making WCS 2026 possible — and learn how to partner with us.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: '/sponsors' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
