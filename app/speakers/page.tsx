'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useModals } from '@/components/ModalProvider';

const delayClasses = ['d1', 'd2', 'd3', 'd4'];

export default function SpeakersPage() {
  const { openSpeaker } = useModals();

  return (
    <>
      <section className="page-hero">
        <div className="ey ey-c">WCS 2026 Speakers</div>
        <h1>Women who&apos;ve <em>built it.</em></h1>
        <p className="hero-sub">
          Every speaker at WCS is a woman with real coliving experience — sharing real strategies,
          real numbers, and the real lessons that don&apos;t make it to social media.
        </p>
      </section>

      <section className="spk-section">
        <div className="si">
          <div className="rv">
            <div className="ey">2026 Lineup</div>
            <h2>Speakers announced <em>this summer.</em></h2>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-mid)', maxWidth: '560px', marginBottom: '8px' }}>
              We&apos;re finalizing an incredible lineup of operators, investors, and industry leaders.
              Follow us on social media or sign up for updates to be the first to know.
            </p>
          </div>
          <div className="spk-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className={`spk-card rv ${delayClasses[i % 4]}`} key={i}>
                <div className="spk-photo">
                  <span>Headshot</span>
                  Speaker TBA
                </div>
                <h3>Coming Soon</h3>
                <p>Announced Summer 2026</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="comm-photo">
        <div className="comm-photo-inner" style={{ padding: 0, overflow: 'hidden' }}>
          <img
            src="/wide-group1.png"
            alt="WCS 2025 attendees"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        </div>
        <div className="comm-photo-overlay" />
      </div>

      <section className="spk-value">
        <div className="si">
          <div className="rv">
            <div className="ey ey-l">What Our Speakers Bring</div>
            <h2>No theory. No fluff. <em>Just truth.</em></h2>
            <p>
              Every woman on our stage has been in the trenches — building portfolios, managing
              residents, navigating financing, and scaling operations. Here&apos;s what you&apos;ll
              hear from them.
            </p>
          </div>
          <div className="val-grid">
            <div className="val-card rv d1">
              <h3>Real Numbers</h3>
              <p>Actual deal breakdowns, revenue figures, and the financial realities of coliving — not hypothetical projections.</p>
            </div>
            <div className="val-card rv d2">
              <h3>Hard-Won Lessons</h3>
              <p>The mistakes they made, the problems they solved, and the decisions that changed the trajectory of their business.</p>
            </div>
            <div className="val-card rv d3">
              <h3>Actionable Frameworks</h3>
              <p>Systems, processes, and strategies you can take home and implement in your own portfolio this month.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="apply">
        <div className="si rv">
          <div className="ey ey-c">Apply to Speak</div>
          <h2>Have something worth <em>sharing?</em></h2>
          <p>
            We&apos;re looking for women with real coliving experience — operators, investors, and
            industry leaders who can teach, inspire, and equip our attendees. If that sounds like
            you, we&apos;d love to hear from you.
          </p>
          <button className="btn btn-w" onClick={openSpeaker}>Apply to Speak</button>
        </div>
      </section>

      <section className="cta-band bg-wine">
        <div className="si rv">
          <div className="ey ey-l ey-c">October 16 – 17, 2026</div>
          <h2>Build the room.<br /><em>Own the future.</em></h2>
          <p>Secure your seat and be in the room when these women take the stage.</p>
          <div className="cg">
            <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
            <Link href="/agenda" className="btn btn-ol">View the Agenda</Link>
          </div>
        </div>
      </section>
    </>
  );
}
