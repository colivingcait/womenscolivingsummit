import Link from 'next/link';
import { HeroSparkles } from '@/components/HeroSparkles';

const CALENDLY = 'https://calendly.com/colivingcait/sponsor-partner';
const START = '/sponsor-partners/start';

function Star({ tone, label }: { tone: string; label: string }) {
  return (
    <svg className="sp-star" viewBox="0 0 24 24" role="img" aria-label={label}>
      <path
        fill={tone}
        d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.4l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95z"
      />
    </svg>
  );
}

function CtaRow({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="sp-cta-row">
      <a
        href={CALENDLY}
        target="_blank"
        rel="noreferrer"
        className={`btn ${onDark ? 'btn-ol' : 'btn-o'}`}
      >
        Book a Call
      </a>
      <Link href={START} className="btn btn-g">
        Become a Sponsor
      </Link>
    </div>
  );
}

export default function SponsorPartnersPage() {
  return (
    <>
      {/* 1 — HERO (wine + gold sparkles over photo) */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-wcs.jpg" alt="" className="hero-bg-img" aria-hidden="true" />
        <div className="hero-bg-overlay" />
        <HeroSparkles />
        <div className="hero-i">
          <div
            className="ey ey-c"
            style={{ opacity: 0, animation: 'hr .8s cubic-bezier(.16,1,.3,1) .05s forwards' }}
          >
            Sponsorship · Atlanta · October 16 – 17, 2026
          </div>
          <h1>
            Partner with the <em className="gs">Women&apos;s Coliving Summit</em>
          </h1>
          <p className="hero-b">
            Put your brand in front of women-led coliving operators and real estate investors —
            approximately 150 qualified, decision-ready attendees over two focused days of
            interaction and growth.
          </p>
          <div className="hero-c">
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn btn-ol">
              Book a Call
            </a>
            <Link href={START} className="btn btn-g">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — TIERS */}
      <section className="sp-tiers">
        <div className="si">
          <div className="sp-head rv">
            <div className="ey ey-c">Partnership Levels</div>
            <h2>
              Three ways to put your brand <em>front and center.</em>
            </h2>
            <p>
              Each tier is built to put your brand in front of the room. Pick the level that fits —
              and add category exclusivity if you want to be the only one of your kind there.
            </p>
          </div>

          <div className="sp-grid">
            {/* SILVER */}
            <div className="sp-tier silver rv d1">
              <Star tone="#B7A8AC" label="Silver tier" />
              <div className="sp-tier-name">Silver Sponsor</div>
              <div className="sp-tier-price">$3,500</div>
              <div className="sp-tier-tag">Brand presence + full-event activation</div>
              <p className="sp-tier-sub">
                Get in front of women-led operators and investors with a presence woven through the
                whole event.
              </p>
              <ul className="sp-tier-list">
                <li>Banner and exhibit table at the event</li>
                <li>Logo placement on all promotional materials</li>
                <li>Logo recognition throughout the event</li>
                <li>Featured on the event website and in event email marketing</li>
                <li>
                  Dedicated social media feature across Facebook page, Facebook group, and Instagram
                </li>
                <li>Dedicated email feature to attendees after the event</li>
                <li>
                  <strong>2 complimentary event passes</strong>
                </li>
                <li>Promotional item included in the attendee gift bags</li>
                <li>Attendee registration list (opt-in only) for post-event outreach</li>
              </ul>
            </div>

            {/* GOLD (highlighted, center) */}
            <div className="sp-tier gold rv d2">
              <div className="sp-badge">Only 3 spots available</div>
              <Star tone="#C69B3C" label="Gold tier" />
              <div className="sp-tier-name">Gold Sponsor</div>
              <div className="sp-tier-price">$4,500</div>
              <div className="sp-tier-tag">Premier positioning + take the stage</div>
              <p className="sp-tier-sub">
                Our top-tier partnership. Everything in Silver, plus the room&apos;s attention.
              </p>
              <div className="sp-tier-lead">Everything in the Silver Package, plus:</div>
              <ul className="sp-tier-list">
                <li>30-minute educational speaking slot on a relevant, pre-approved topic</li>
                <li>
                  A crowd-interaction opportunity — panel seat or breakout session — for real
                  conversation with attendees
                </li>
                <li>Premium front-of-room placement for your logo and banner</li>
                <li>
                  1 additional complimentary event pass <strong>(3 total)</strong>
                </li>
                <li>First right of refusal on category exclusivity</li>
              </ul>
            </div>

            {/* BRONZE */}
            <div className="sp-tier bronze rv d3">
              <Star tone="#A9774B" label="Bronze tier" />
              <div className="sp-tier-name">Bronze Sponsor</div>
              <div className="sp-tier-price">$750</div>
              <div className="sp-tier-tag">Show up + give back</div>
              <p className="sp-tier-sub">
                Support the summit and put your brand on a moment attendees actually touch.
              </p>
              <ul className="sp-tier-list">
                <li>
                  Sponsor one attendee touchpoint — e.g. goodie basket, coffee &amp; refreshment
                  station, lanyard/badge, wifi, or notebooks
                </li>
                <li>&ldquo;Sponsored by&rdquo; signage at your touchpoint</li>
                <li>Logo on the event website sponsor list</li>
                <li>Logo recognition in the on-site sponsor display</li>
                <li>
                  One event pass at <strong>50% off ($200)</strong>
                </li>
              </ul>
              <p className="sp-tier-note">
                No booth, speaking slot, or dedicated social/email feature — those start at Silver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — CATEGORY EXCLUSIVITY */}
      <section className="sp-excl">
        <div className="si rv">
          <div className="ey ey-c ey-l">Lock Your Category</div>
          <h2>
            Category Exclusivity — <em>1.5× your tier</em>
          </h2>
          <p className="sp-excl-body">
            Want to be the only one in your category in the room? Lock exclusivity and no competing
            partner appears on stage, on the sponsor wall, in the email features, or in the gift bag.
          </p>
          <div className="sp-excl-prices">
            <div className="sp-excl-price">
              <div className="l">Silver with exclusivity</div>
              <div className="v">$5,250</div>
            </div>
            <div className="sp-excl-price">
              <div className="l">Gold with exclusivity</div>
              <div className="v">$6,750</div>
            </div>
          </div>
          <p className="sp-excl-fine">
            <strong>Categories:</strong> lending/mortgage · legal · self-directed IRA &amp;
            custodians · proptech &amp; software · property management · insurance · title &amp;
            closing
            <br />
            Exclusivity applies to Silver and Gold tiers only.
          </p>
        </div>
      </section>

      {/* 4 — BOTTOM CTA */}
      <section className="cta-band bg-cream">
        <div className="si rv">
          <div className="ey ey-c">Become a Partner</div>
          <h2>
            Let&apos;s get your brand <em>in the room.</em>
          </h2>
          <p>
            Book a quick call to talk through fit, or start your sponsorship now — we&apos;ll handle
            the details.
          </p>
          <CtaRow />
        </div>
      </section>
    </>
  );
}
