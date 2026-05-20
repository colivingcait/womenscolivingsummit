'use client';

import Link from 'next/link';
import { useModals } from '@/components/ModalProvider';

export default function SponsorsPage() {
  const { openSponsor } = useModals();

  return (
    <>
      <section className="page-hero">
        <div className="ey ey-c">Our Sponsors</div>
        <h1>The companies behind <em>the room.</em></h1>
        <p className="hero-sub">
          WCS is made possible by sponsors who believe in the power of women-led coliving and want to
          be part of the movement.
        </p>
      </section>

      <section className="spo-current">
        <div className="si">
          <div className="rv">
            <div className="ey ey-c">WCS 2026 Sponsors</div>
            <h2>This year&apos;s <em>partners.</em></h2>
          </div>
          <div className="spo-grid rv d1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="spo-slot" key={i}>
                Sponsor Logo<span>Coming Soon</span>
              </div>
            ))}
          </div>
          <p className="spo-note rv d2">
            2026 sponsors will be announced as they&apos;re confirmed. Want to see your logo here?
          </p>
          <div className="rv d3" style={{ marginTop: '20px' }}>
            <button className="btn btn-w" onClick={openSponsor}>Become a Sponsor</button>
          </div>
        </div>
      </section>

      <section className="why-sponsor">
        <div className="si">
          <div className="rv">
            <div className="ey ey-l">Why Sponsor WCS</div>
            <h2>Your audience is <em>in this room.</em></h2>
            <p>
              WCS puts your brand directly in front of women who are actively building coliving
              portfolios — making buying decisions on property management, financing, furnishing,
              technology, and services every month.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-card rv d1">
              <div className="why-num">150+</div>
              <h3>Decision-Makers in the Room</h3>
              <p>Every attendee is a woman actively investing in or building a coliving business. This isn&apos;t a general audience — it&apos;s your exact customer.</p>
            </div>
            <div className="why-card rv d2">
              <div className="why-num">2</div>
              <h3>Full Days of Visibility</h3>
              <p>Your brand is present across two full days of sessions, networking, meals, and social events — not a 30-second mention in a packed expo hall.</p>
            </div>
            <div className="why-card rv d3">
              <div className="why-num">∞</div>
              <h3>Community That Lasts</h3>
              <p>Sponsors get ongoing visibility in the She Leads Coliving community — a private, year-round network of women investors who keep the conversation going.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="past-sponsors">
        <div className="si">
          <div className="rv">
            <div className="ey ey-c">WCS 2025 Sponsors</div>
            <h2>Thank you to our <em>2025 partners.</em></h2>
            <p>
              These companies helped make the first Women&apos;s Coliving Summit possible. We&apos;re
              grateful for their support and proud to have them as part of the WCS story.
            </p>
          </div>
          <div className="past-grid rv d1">
            <div className="past-logo">
              <div className="past-logo-name">Lunspro Home Inspections</div>
              <div className="past-logo-type">Home Inspection Services</div>
            </div>
            <div className="past-logo">
              <div className="past-logo-name">Anchor Mortgage</div>
              <div className="past-logo-type">Mortgage Lending</div>
            </div>
            <div className="past-logo">
              <div className="past-logo-name">Erika Krupansky Photography</div>
              <div className="past-logo-type">Event Photography</div>
            </div>
          </div>
        </div>
      </section>

      <section className="spo-cta">
        <div className="si rv">
          <div className="ey ey-c">Partner With Us</div>
          <h2>Let&apos;s have a <em>conversation.</em></h2>
          <p>
            We love our sponsors — they&apos;re an essential part of what makes WCS possible. We&apos;d
            love to learn about your brand and explore the right partnership for WCS 2026.
          </p>
          <button className="btn btn-w" onClick={openSponsor}>Become a Sponsor</button>
        </div>
      </section>

      <section className="cta-band bg-wine">
        <div className="si rv">
          <div className="ey ey-l ey-c">October 16 – 17, 2026</div>
          <h2>Build the room.<br /><em>Own the future.</em></h2>
          <p>Whether you&apos;re attending or sponsoring — there&apos;s a place for you in this room.</p>
          <div className="cg">
            <a href="https://www.eventbrite.com/e/the-womens-coliving-summit-atlanta-2026-tickets-1986277433272?aff=oddtdtcreator" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
            <Link href="/about" className="btn btn-ol">Our Story</Link>
          </div>
        </div>
      </section>
    </>
  );
}
