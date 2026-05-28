import type { Metadata } from 'next';

const title = "Sponsors";
const description =
  "The companies behind the room. Meet the sponsors making WCS 2026 possible — and learn how to partner with us.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/sponsors',
    images: [{ url: '/hero-wcs.jpg', width: 1638, height: 1086, alt: "WCS sponsors" }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/hero-wcs.jpg'] },
};

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
