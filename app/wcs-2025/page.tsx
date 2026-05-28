import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "WCS 2025 | Women's Coliving Summit",
  description:
    "Look back at the inaugural Women's Coliving Summit — a sold-out, two-day event that brought together 75 women building wealth through coliving.",
};

export default function WCS2025Page() {
  return (
    <>
      <section className="page-hero">
        <div className="ey ey-c">The Inaugural Event</div>
        <h1>WCS <em>2025.</em></h1>
        <p className="hero-sub">
          The first Women&apos;s Coliving Summit sold out, brought together 75 women from across the
          country, and set the standard for what this event would become.
        </p>
      </section>

      <section className="facts">
        <div className="si">
          <div className="rv" style={{ textAlign: 'center' }}>
            <div className="ey ey-l ey-c">By the Numbers</div>
            <h2>The inaugural year, <em>in numbers.</em></h2>
          </div>
          <div className="facts-grid">
            <div className="fact rv d1"><div className="fact-num">Sold Out</div><div className="fact-label">Every Seat Filled</div></div>
            <div className="fact rv d2"><div className="fact-num">75</div><div className="fact-label">Women in the Room</div></div>
            <div className="fact rv d3"><div className="fact-num">2</div><div className="fact-label">Full Days</div></div>
            <div className="fact rv d4"><div className="fact-num">3</div><div className="fact-label">Sponsors</div></div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="si">
          <div className="rv">
            <div className="ey">The Experience</div>
            <h2>What the room <em>looked like.</em></h2>
          </div>
          <div className="gallery-grid rv d1">
            {/* eslint-disable @next/next/no-img-element */}
            <div className="gallery-item tall"><img src="/wcs2025/wcs1.png" alt="Women's Coliving Summit 2025" /></div>
            <div className="gallery-item"><img src="/wcs2025/wcs2.png" alt="Women's Coliving Summit 2025" /></div>
            <div className="gallery-item"><img src="/wcs2025/wcs3.png" alt="Women's Coliving Summit 2025" /></div>
            <div className="gallery-item"><img src="/wcs2025/wcs4.png" alt="Women's Coliving Summit 2025" /></div>
            <div className="gallery-item tall"><img src="/wcs2025/wcs5.png" alt="Women's Coliving Summit 2025" /></div>
            <div className="gallery-item"><img src="/wcs2025/wcs6.png" alt="Women's Coliving Summit 2025" /></div>
            <div className="gallery-item"><img src="/wcs2025/wcs7.png" alt="Women's Coliving Summit 2025" /></div>
            <div className="gallery-item"><img src="/wide-group1.png" alt="Women's Coliving Summit 2025 group photo" /></div>
            <div className="gallery-item"><img src="/wide-group2.png" alt="Women's Coliving Summit 2025 group photo" /></div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </div>
      </section>

      <section className="topics">
        <div className="si">
          <div className="rv">
            <div className="ey">What We Covered</div>
            <h2>Two days of <em>real content.</em></h2>
          </div>
          <div className="topics-grid">
            <Topic delay="d1" tag="Foundation" title="Mindset & Setting the Stage">
              Starting strong with the right mental framework for building a coliving business.
            </Topic>
            <Topic delay="d2" tag="Housing" title="Women on the Frontlines">
              Exploring the intersection of affordability, opportunity, and women-led housing solutions.
            </Topic>
            <Topic delay="d3" tag="Strategy" title="Coliving Arbitrage">
              Leveraging existing properties for portfolio growth without purchasing them.
            </Topic>
            <Topic delay="d1" tag="Finance" title="DSCR Loans & Creative Financing">
              Deep dive into the lending products and creative approaches that fuel coliving deals.
            </Topic>
            <Topic delay="d2" tag="Operations" title="Property Management Systems">
              The people, processes, and platforms that make coliving operations run smoothly at scale.
            </Topic>
            <Topic delay="d3" tag="Growth" title="Scaling Remotely">
              Expanding across markets with confidence — without being in every house every day.
            </Topic>
          </div>
        </div>
      </section>

      <div className="photo-strip">
        <div className="photo-track">
          {/* eslint-disable @next/next/no-img-element */}
          <div className="photo-strip-item"><img src="/wcs2025/wcs1.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/wcs2025/wcs3.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/wcs2025/wcs5.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/wcs2025/wcs7.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/wcs2025/wcs1.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/wcs2025/wcs3.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/wcs2025/wcs5.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/wcs2025/wcs7.png" alt="" /></div>
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </div>

      <section className="tst">
        <div className="si">
          <div className="rv" style={{ textAlign: 'center', marginBottom: '8px' }}>
            <div className="ey ey-l ey-c">In Their Words</div>
            <h2>What attendees <em>said.</em></h2>
          </div>
          <div className="tst-grid tst-g">
            <TC featured delay="d1" sub="Atlanta, GA">
              {`"I've been to a lot of real estate events, but this was the first one where every woman in the room actually understood what I'm building. The focus on women doing coliving specifically made the networking feel effortless. I left with real connections, not just business cards."`}
            </TC>
            <TC delay="d2" sub="Virtual Attendee">
              {`"The intimate setting made all the difference. It wasn't stuffy chairs in a row — it was real conversations with women at every stage of the coliving journey. The energy in that room was something I've never experienced at a conference before."`}
            </TC>
            <TC delay="d3" sub="Coliving Operator">
              {`"The panels were incredibly insightful — real perspectives on scaling operations, building community, and navigating the housing landscape. The breakout sessions gave me focused, hands-on learning and actionable takeaways I could apply to my own business immediately."`}
            </TC>
            <TC featured delay="d4" sub="Real Estate Investor">
              {`"One of the best real estate events I've ever been to. The speakers, the content, the networking, the venue — all of it was incredibly well put together. From a conversation to reality, these women are trailblazers and powerhouses."`}
            </TC>
          </div>
        </div>
      </section>

      <section className="spo-thanks">
        <div className="si">
          <div className="rv">
            <div className="ey ey-c">Our 2025 Sponsors</div>
            <h2>Made possible <em>by.</em></h2>
            <p>Thank you to the companies who believed in WCS before anyone else did.</p>
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

      <section className="cta-band bg-wine">
        <div className="si rv">
          <div className="ey ey-l ey-c">WCS 2026</div>
          <h2>This year, we&apos;re going <em>bigger.</em></h2>
          <p>
            150 women. Two days. More speakers, more sessions, more connections. Don&apos;t miss the
            room that started it all — now twice the size.
          </p>
          <div className="cg">
            <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer" className="btn btn-g">Get My 2026 Ticket</a>
            <Link href="/agenda" className="btn btn-ol">View the 2026 Agenda</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Topic({
  tag,
  title,
  delay,
  children,
}: {
  tag: string;
  title: string;
  delay: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`topic-card rv ${delay}`}>
      <div className="tl">{tag}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function TC({
  children,
  sub,
  featured,
  delay,
}: {
  children: React.ReactNode;
  sub: string;
  featured?: boolean;
  delay: string;
}) {
  return (
    <div className={`tc ${featured ? 'f' : ''} rv ${delay}`}>
      <div className="tc-st">★ ★ ★ ★ ★</div>
      <div className="tc-q">{children}</div>
      <div className="tc-ft">
        <div className="tc-a">
          <div className="tc-av">✦</div>
          <div className="tc-nm">
            <strong>WCS 2025 Attendee</strong>
            <span>{sub}</span>
          </div>
        </div>
        <div className="tc-b">Verified Attendee</div>
      </div>
    </div>
  );
}
