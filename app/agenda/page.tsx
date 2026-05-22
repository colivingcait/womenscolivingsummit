/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Agenda | Women's Coliving Summit 2026",
  description:
    "The WCS 2026 agenda is coming soon. See last year's intentionally designed two-day schedule — from foundation to scaling — and imagine what's next.",
};

export default function AgendaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="ey ey-c">The Agenda</div>
        <h1>Intentional by <em>design.</em></h1>
        <p className="hero-sub">
          Every session, every panel, every breakout is carefully curated to meet you where you are
          and move you forward. Nothing is filler. Everything is built to help you take the next step.
        </p>
      </section>

      <section className="coming">
        <div className="si">
          <div className="rv">
            <div className="ey ey-l ey-c">WCS 2026</div>
            <h2>The 2026 agenda is <em>coming soon.</em></h2>
            <p>
              We&apos;re building something even bigger this year. The full agenda will be announced
              this summer — but here&apos;s what you can expect from the experience.
            </p>
          </div>
          <div className="coming-features rv d1">
            <div className="coming-card">
              <h3>Day One: Foundation</h3>
              <p>Start with the fundamentals — mindset, market understanding, deal analysis, and the coliving process from start to finish.</p>
            </div>
            <div className="coming-card">
              <h3>Day Two: Scale</h3>
              <p>Go deeper into operations, remote management, creative financing, multifamily coliving, and building your 90-day action plan.</p>
            </div>
            <div className="coming-card">
              <h3>Both Days: Connection</h3>
              <p>Intentional networking, small-group breakouts, lunch with fellow attendees, and evening socials designed for real relationships.</p>
            </div>
          </div>
          <div className="coming-cta rv d2">
            <p>Sign up for updates and be the first to see the full 2026 agenda.</p>
            <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
          </div>
        </div>
      </section>

      <div className="comm-photo">
        <div className="comm-photo-inner" style={{ padding: 0, overflow: 'hidden' }}>
          <img
            src="/wide-group2.png"
            alt="WCS 2025 attendees"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        </div>
        <div className="comm-photo-overlay" />
      </div>

      <section className="philosophy">
        <div className="si">
          <div className="philosophy-content rv">
            <div className="ey">Our Approach</div>
            <h2>Not your typical <em>conference.</em></h2>
            <p>
              Most conferences pack a room with as many people as possible, run back-to-back panels
              with surface-level content, and call it networking when they hand you a lanyard and
              point you toward a cocktail hour.
            </p>
            <p>
              WCS is different by design. We keep the room intimate — 150 women, not 1,500. Every
              session is led by someone who&apos;s actually doing the work, not just talking about it.
              The breakouts are small enough that you leave with real relationships, not just LinkedIn
              connections. And the agenda is structured as a progression — Day One builds the
              foundation, Day Two takes you to the next level — so whether you&apos;re brand new or
              already operating, you&apos;re learning exactly what you need.
            </p>
            <div className="pullquote">
              &ldquo;We don&apos;t do filler sessions. If it&apos;s on the agenda, it&apos;s there
              because it will move your <em>business forward.</em>&rdquo;
            </div>
            <p>
              The result? Attendees don&apos;t just feel inspired — they leave with frameworks,
              partnerships, and a 90-day plan they can actually execute. That&apos;s what intentional
              programming looks like.
            </p>
          </div>
        </div>
      </section>

      <section className="past-agenda">
        <div className="si">
          <div className="rv">
            <div className="ey">WCS 2025 Agenda</div>
            <h2>Here&apos;s what last year <em>looked like.</em></h2>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-mid)', maxWidth: '560px', marginBottom: '24px' }}>
              To give you a feel for the experience, here&apos;s the full agenda from WCS 2025. The
              2026 agenda will follow the same intentional structure with fresh content, speakers,
              and sessions.
            </p>
          </div>
          <div className="past-note rv d1">
            <strong>Note:</strong> This is the WCS 2025 agenda. The 2026 agenda will be announced this summer.
          </div>
          <div className="agd-cols rv d2">
            <div className="agd-day">
              <div className="agd-hdr">
                <div className="day-label">Day One</div>
                <h3>Foundation &amp; First Deals</h3>
              </div>
              <div className="agd-body">
                <div className="agd-block">
                  <div className="agd-time">8:00 – 9:00 AM · Check-In &amp; Welcome</div>
                  <div className="agd-break">Grab your badge, a coffee, and start making connections.</div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">9:00 AM – 12:00 PM · Morning Sessions</div>
                  <div className="agd-item"><h4>Mindset &amp; Setting the Stage</h4><p>Kick off strong with the right foundation.</p></div>
                  <div className="agd-item"><h4>Women on the Frontlines of Housing</h4><p>Exploring affordability &amp; opportunity.</p></div>
                  <div className="agd-item"><h4>Building Impact</h4><p>How value-add strategies create sustainable success.</p></div>
                  <div className="agd-item"><h4>Coliving Process Overview</h4><p>Unpacking what a real deal looks like start to finish.</p></div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">12:30 – 2:00 PM · Lunch Break</div>
                  <div className="agd-break">Network over lunch and connect with fellow attendees.</div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">2:00 – 5:00 PM · Afternoon Sessions</div>
                  <div className="agd-item"><h4>Financing Deep Dive</h4><p>DSCR loans and creative approaches.</p></div>
                  <div className="agd-item"><h4>Acquisitions</h4><p>What to know before you grow.</p></div>
                  <div className="agd-item"><h4>Small Group Breakouts</h4><p>Accessing capital, building your team, creative financing.</p></div>
                  <div className="agd-item"><h4>Day One Wrap-Up</h4><p>Key takeaways and action items.</p></div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">5:00 PM · Evening Social (Optional)</div>
                  <div className="agd-break">Wind down with cocktails, conversations, and connections.</div>
                </div>
              </div>
            </div>
            <div className="agd-day">
              <div className="agd-hdr">
                <div className="day-label">Day Two</div>
                <h3>Scaling &amp; Strategy</h3>
              </div>
              <div className="agd-body">
                <div className="agd-block">
                  <div className="agd-time">9:00 – 9:30 AM · Check-In &amp; Networking</div>
                  <div className="agd-break">Ease into the day with coffee and fresh conversations.</div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">9:30 AM – 12:00 PM · Morning Sessions</div>
                  <div className="agd-item"><h4>Coliving Arbitrage</h4><p>Leverage existing properties for growth without purchasing them.</p></div>
                  <div className="agd-item"><h4>Property Management Systems</h4><p>People, processes, and platforms that work.</p></div>
                  <div className="agd-item"><h4>Operations in Action</h4><p>Scaling without losing control.</p></div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">12:00 – 1:30 PM · Lunch Break</div>
                  <div className="agd-break">Network over lunch and connect with fellow attendees.</div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">1:30 – 5:00 PM · Afternoon Sessions</div>
                  <div className="agd-item"><h4>Scaling Remotely</h4><p>Expanding across markets with confidence.</p></div>
                  <div className="agd-item"><h4>Multifamily Coliving</h4><p>Taking the model to the next level.</p></div>
                  <div className="agd-item"><h4>Raising Capital</h4><p>Borrowing &amp; lending strategies for confident capital growth.</p></div>
                  <div className="agd-item"><h4>Game Plan Workshop</h4><p>Put your 90-day plan in place.</p></div>
                </div>
                <div className="agd-block">
                  <div className="agd-time">5:00 PM · Evening Social (Optional)</div>
                  <div className="agd-break">Wind down the weekend with cocktails, conversations, and solidifying connections.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band bg-wine">
        <div className="si rv">
          <div className="ey ey-l ey-c">October 16 – 17, 2026</div>
          <h2>Build the room.<br /><em>Own the future.</em></h2>
          <p>Secure your seat now and be the first to experience the 2026 agenda when it drops this summer.</p>
          <div className="cg">
            <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
            <Link href="/wcs-2025" className="btn btn-ol">See WCS 2025</Link>
          </div>
        </div>
      </section>
    </>
  );
}
