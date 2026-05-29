import type { Metadata } from 'next';
import Link from 'next/link';

const title = "About";
const description =
  "Meet the women behind the Women's Coliving Summit — Caitlyn Verdugo and Jasmine Brown. Why we built this room and what drives our mission.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: '/about' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="ey ey-c">About WCS</div>
        <h1>The women who built <em>this room.</em></h1>
        <p className="hero-sub">
          The Women&apos;s Coliving Summit didn&apos;t start with a business plan. It started with a
          conversation between two women who believed this industry needed a room of its own.
        </p>
      </section>

      <section className="story">
        <div className="si">
          <div className="story-content rv">
            <div className="ey">Our Story</div>
            <h2>How it <em>started.</em></h2>
            <p>
              Caitlyn and Jasmine met at a women&apos;s real estate investing meetup in Atlanta and
              bonded almost immediately — over shared experiences navigating the investing world, a
              mutual obsession with creative real estate strategies, and the feeling that women in
              this space deserved more than a seat at someone else&apos;s table.
            </p>
            <p>
              They started building together. First a coliving portfolio, then a community. And
              through it all, they kept having the same conversation: where is the event for women
              like us? Not a general real estate conference where coliving gets a mention. Not a
              coliving event where women are the minority. A room built specifically for women who
              are building wealth through shared housing.
            </p>
            <p>
              That conversation became the Women&apos;s Coliving Summit — a two-day experience
              designed to give women operators, investors, and aspiring coliving entrepreneurs the
              strategies, connections, and community they need to build with confidence.
            </p>
            <div className="pullquote">
              &ldquo;We didn&apos;t wait for someone to build this room. We built it <em>ourselves.</em>&rdquo;
            </div>
            <p>
              What started as an idea between two friends has grown into the first and only live event
              of its kind — built for and by women in coliving. And it&apos;s just getting started.
            </p>
          </div>
        </div>
      </section>

      <section className="founders">
        <div className="si">
          <div className="rv" style={{ textAlign: 'center' }}>
            <div className="ey ey-c">The Founders</div>
            <h2>Meet Caitlyn &amp; <em>Jasmine.</em></h2>
          </div>
          <div className="founders-grid">
            <div className="founder-card rv d1">
              <div className="founder-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/caitlyn-headshot.png" alt="Caitlyn Verdugo, co-founder of Women's Coliving Summit" />
              </div>
              <h3>Caitlyn Verdugo <em>| Coliving Cait</em></h3>
              <div className="founder-title">Co-Founder, Women&apos;s Coliving Summit</div>
              <div className="founder-bio">
                <p>
                  Caitlyn is an Atlanta-based coliving investor, Keller Williams Realtor, and women&apos;s
                  coliving coach. She operates 50+ coliving rooms across the Atlanta metro and has
                  completed dozens of coliving transactions. She is the co-founder of the She Leads
                  Coliving online community and coaches women through building their first coliving
                  portfolios from the ground up.
                </p>
                <p>
                  Her mission is simple: to prove that coliving is one of the most powerful tools we
                  have right now — working to accomplish the joint mission of solving the affordable
                  housing crisis and helping everyday women build real wealth through real estate.
                </p>
              </div>
              <div className="founder-links">
                <a href="https://colivingcait.com" target="_blank" rel="noreferrer">Website</a>
                <a href="https://instagram.com/colivingcait" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://linkedin.com/in/coliving-cait" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="founder-card rv d2">
              <div className="founder-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/jasmine-headshot.jpg" alt="Jasmine Brown, co-founder of Women's Coliving Summit" style={{objectPosition:'center 20%'}} />
              </div>
              <h3>Jasmine Brown</h3>
              <div className="founder-title">
                Real Estate Developer, Hard Money Lender <em style={{ fontStyle: 'italic', textTransform: 'none', letterSpacing: 0 }}>|</em> Co-Founder, Women&apos;s Coliving Summit
              </div>
              <div className="founder-bio">
                <p>
                  Jasmine is an Atlanta-based real estate investor, community builder, and hard money
                  lender with Conventus. A passionate advocate for women in real estate, she was
                  leading women&apos;s real estate investing meetups in Atlanta when she and Caitlyn
                  first connected — and the rest is history.
                </p>
                <p>
                  Together with Caitlyn, Jasmine co-owns and operates a growing coliving portfolio and
                  brings her financing expertise, community-building instincts, and deep commitment to
                  women&apos;s empowerment to everything WCS does.
                </p>
              </div>
              <div className="founder-links">
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="si">
          <div className="rv" style={{ textAlign: 'center' }}>
            <div className="ey ey-l ey-c">Our Mission</div>
            <h2>Why this <em>matters.</em></h2>
          </div>
          <div className="mission-content rv d1">
            <p>
              Think about the people who keep our world running. The bus driver who takes our kids to
              school. The telehealth nurse on the other end of that video call. Your mechanic. The
              person stocking the shelves at the grocery store. Your DoorDash driver. These are our
              neighbors. These are our community members. And right now, they are being squeezed out
              of safe, stable, affordable housing.
            </p>
            <p>
              As housing prices climb and interest rates stay high, as affordable units get torn down
              and replaced with luxury apartments, the options for working people keep shrinking. The
              politicians have a lot to say about it — the task forces, the committee meetings, the
              zoning rewrites. Lots of talk. But talk doesn&apos;t house anybody.
            </p>
            <div className="mission-highlight">
              Coliving is one of the most powerful tools we have right now — working to solve the
              affordable housing crisis and helping everyday women build real wealth through real
              estate.
            </div>
            <p>
              Rather than just saying &ldquo;we need to build more,&rdquo; which takes decades, coliving
              reconfigures the housing we already have to better serve the people who need it right
              now. It&apos;s the ultimate creative solution — and women are uniquely positioned to
              lead it.
            </p>
            <p>
              The Women&apos;s Coliving Summit exists to make sure those women have a room where they
              can learn from each other, build with each other, and grow together. Because when women
              have the right tools, the right community, and the right room — they build things that
              change the world.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band bg-cream">
        <div className="si rv">
          <div className="ey ey-c">October 16 – 17, 2026</div>
          <h2>Ready to join us in <em>the room?</em></h2>
          <p>150 women. Two days. The strategies, partnerships, and community you need to build wealth through coliving.</p>
          <div className="cg">
            <a href="https://www.eventbrite.com/e/the-womens-coliving-summit-atlanta-2026-tickets-1986578238990" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
            <Link href="/sponsors" className="btn btn-o">Become a Sponsor</Link>
          </div>
        </div>
      </section>
    </>
  );
}
