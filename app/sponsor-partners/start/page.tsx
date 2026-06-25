import Link from 'next/link';

const CALENDLY = 'https://calendly.com/colivingcait/sponsor-partner';

// Placeholder stub for the sponsor onboarding flow (to be built later).
// The "Become a Sponsor" CTA points here so it's wired and ready.
export default function SponsorPartnersStartPage() {
  return (
    <section className="sp-start">
      <div className="si">
        <div className="ey ey-c">Become a Sponsor</div>
        <h1>
          Let&apos;s make it <em>official.</em>
        </h1>
        <p>
          Our online sponsorship checkout is on its way. In the meantime, grab a time with us and
          we&apos;ll get your partnership locked in — tier, category exclusivity, and all the
          details.
        </p>
        <div className="sp-cta-row">
          <Link href="/sponsor-partners" className="btn btn-o">
            Back to Packages
          </Link>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-g">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
