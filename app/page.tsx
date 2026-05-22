'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useModals } from '@/components/ModalProvider';
import { FAQItem } from '@/components/FAQItem';

function Countdown() {
  const target = new Date('2026-10-16T09:00:00');
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setT({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  const fmt = (n: number) => String(n).padStart(2, '0');
  return (
    <div className="hero-cd">
      <div className="hero-cd-i"><div className="hero-cd-n">{fmt(t.d)}</div><div className="hero-cd-l">days</div></div>
      <div className="hero-cd-sep">·</div>
      <div className="hero-cd-i"><div className="hero-cd-n">{fmt(t.h)}</div><div className="hero-cd-l">hrs</div></div>
      <div className="hero-cd-sep">·</div>
      <div className="hero-cd-i"><div className="hero-cd-n">{fmt(t.m)}</div><div className="hero-cd-l">min</div></div>
      <div className="hero-cd-sep">·</div>
      <div className="hero-cd-i"><div className="hero-cd-n">{fmt(t.s)}</div><div className="hero-cd-l">sec</div></div>
    </div>
  );
}

const speakerPlaceholders = Array.from({ length: 16 });

export default function Home() {
  const { openSponsor, openSpeaker } = useModals();

  useEffect(() => {
    const spk = document.querySelector('.hero-spk');
    if (spk && spk.childElementCount === 0) {
      for (let i = 0; i < 48; i++) {
        const s = document.createElement('div');
        s.className = 'spkl';
        const sz = 2 + Math.random() * 3.5;
        s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;animation-duration:${2.5+Math.random()*4}s;animation-delay:${Math.random()*6}s`;
        spk.appendChild(s);
      }
    }
    const grn = document.querySelector('.grn-wrap');
    if (grn && grn.childElementCount === 0) {
      for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className = 'grn-p';
        const sz = 2 + Math.random() * 3;
        p.style.cssText = `left:${Math.random()*100}%;width:${sz}px;height:${sz}px;animation-duration:${10+Math.random()*14}s;animation-delay:${Math.random()*12}s`;
        grn.appendChild(p);
      }
    }
    document.querySelectorAll('.sect-spk').forEach(wrap => {
      if (wrap.childElementCount > 0) return;
      for (let i = 0; i < 36; i++) {
        const s = document.createElement('div');
        s.className = 'spkl';
        const sz = 1.5 + Math.random() * 3;
        s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;animation-duration:${2+Math.random()*5}s;animation-delay:${Math.random()*7}s`;
        wrap.appendChild(s);
      }
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-wcs.jpg" alt="" className="hero-bg-img" aria-hidden="true" />
        <div className="hero-bg-overlay" />
        <div className="hero-spk" />
        <div className="grn-wrap" />
        <div className="hero-i">
          <div className="ey ey-c" style={{ opacity: 0, animation: 'hr .8s cubic-bezier(.16,1,.3,1) .05s forwards' }}>
            October 16 – 17, 2026 · Atlanta, Georgia
          </div>
          <h1>Women&apos;s Coliving<br /><em className="gs">Summit</em></h1>
          <Countdown />
          <div className="hero-c">
            <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
            <a href="#about" className="btn btn-ol">Learn More</a>
          </div>
          <p className="hero-price">Tickets from <strong>$399</strong> · Limited seats</p>
          <div className="jn">
            <a href="#highlights" className="js">
              <div className="js-l">Oct 16 – 17</div>
              <div className="js-t">Atlanta, Georgia</div>
            </a>
            <a href="#speakers" className="js">
              <div className="js-l">15+ Leaders</div>
              <div className="js-t">Women Who&apos;ve Built It</div>
            </a>
            <a href="#sponsors" className="js">
              <div className="js-l">Community</div>
              <div className="js-t">150 Women Strong</div>
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* WHO IT'S FOR — self-qualify in first scroll */}
      <section className="aud" id="about">
        <div className="si">
          <div className="rv">
            <div className="ey">Who It&apos;s For</div>
            <h2>Wherever you are —<br />this is <em className="gs">your room.</em></h2>
            <p className="sb">WCS was built for women at every stage of their coliving journey. No matter where you&apos;re starting, you belong here.</p>
          </div>
          <div className="aud-g">
            <div className="aud-c rv d1">
              <div className="cl">Stage 01</div>
              <h3>The Explorer</h3>
              <p>You&apos;ve been researching coliving and you&apos;re ready to take the leap. You want to learn the model, run your first numbers, and meet women who&apos;ve done it.</p>
            </div>
            <div className="aud-c rv d2">
              <div className="cl">Stage 02</div>
              <h3>The Builder</h3>
              <p>You have your first property and you&apos;re ready to build systems, optimize operations, and scale with confidence and community behind you.</p>
            </div>
            <div className="aud-c rv d3">
              <div className="cl">Stage 03</div>
              <h3>The Operator</h3>
              <p>You&apos;re running a portfolio and thinking bigger — more properties, new markets, better margins. You want strategic partnerships and high-level conversations.</p>
            </div>
            <div className="aud-c rv d4">
              <div className="cl">Stage 04</div>
              <h3>The Ally</h3>
              <p>You work in a field that supports coliving — real estate, lending, furnishing, technology — and you want to connect with this audience directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS — quick credibility */}
      <section className="nums">
        <div className="nums-g">
          <div className="nums-i rv"><div className="n">150+</div><div className="nl2">Attendees</div></div>
          <div className="nums-i rv d1"><div className="n">2</div><div className="nl2">Full Days</div></div>
          <div className="nums-i rv d2"><div className="n">15+</div><div className="nl2">Leaders &amp; Educators</div></div>
          <div className="nums-i rv d3"><div className="n">2nd</div><div className="nl2">Annual Summit</div></div>
        </div>
      </section>

      {/* HIGHLIGHTS — what you get */}
      <section className="hl" id="highlights">
        <div className="sect-spk" />
        <div className="si">
          <div className="rv">
            <div className="ey ey-l">What to Expect</div>
            <h2>Two days that change<br />how you <em className="gs">build.</em></h2>
            <p className="sb">
              Every session, connection, and conversation is designed to move your coliving business
              forward.
            </p>
          </div>
          <div className="hl-g">
            <div className="hl-c rv d1">
              <div className="hl-n">01</div>
              <h3>From the Stage</h3>
              <p>Intimate keynotes from women who&apos;ve built real coliving portfolios — sharing the decisions, the numbers, and the lessons that don&apos;t make it to social media.</p>
            </div>
            <div className="hl-c rv d2">
              <div className="hl-n">02</div>
              <h3>The Conversations That Matter</h3>
              <p>Curated panel discussions where operators, investors, and industry leaders go deep on financing, acquisitions, scaling, and the future of shared housing.</p>
            </div>
            <div className="hl-c rv d3">
              <div className="hl-n">03</div>
              <h3>Rooms Within the Room</h3>
              <p>Small-group workshops and breakout sessions designed for doing, not just listening. Leave with frameworks, 90-day plans, and strategies you can put to work the week you get home.</p>
            </div>
            <div className="hl-c rv d1">
              <div className="hl-n">04</div>
              <h3>Connections by Design</h3>
              <p>This isn&apos;t a networking happy hour. It&apos;s 150 women who share your ambition, your challenges, and your language — building partnerships and accountability that last far beyond the weekend.</p>
            </div>
            <div className="hl-c rv d2">
              <div className="hl-n">05</div>
              <h3>The Tools Behind the Business</h3>
              <p>Meet the platforms, services, and companies purpose-built for coliving operators — from property management to creative financing to furnishing at scale.</p>
            </div>
            <div className="hl-c rv d3">
              <div className="hl-n">06</div>
              <h3>She Leads Access</h3>
              <p>Your ticket unlocks membership to She Leads Coliving — a private, year-round community of women investors who keep building together long after the summit ends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — social proof right after value prop */}
      <section className="tst">
        <div className="sect-spk" />
        <div className="si">
          <div className="rv" style={{ textAlign: 'center', marginBottom: '8px' }}>
            <div className="ey ey-l ey-c">What Attendees Say</div>
            <h2>Don&apos;t take our <em>word</em> for it.</h2>
          </div>
          <div className="tst-g">
            <Testimonial featured delay="d1" quote={`"I've been to a lot of real estate events, but this was the first one where every woman in the room actually understood what I'm building. The focus on women doing coliving specifically — not just real estate in general — made the networking feel effortless. I left with real connections, not just business cards."`} sub="Atlanta, GA" />
            <Testimonial delay="d2" quote={`"The intimate setting made all the difference. It wasn't stuffy chairs in a row — it was real conversations with women at every stage of the coliving journey. The energy in that room was something I've never experienced at a conference before."`} sub="Virtual Attendee" />
            <Testimonial delay="d3" quote={`"The panels were incredibly insightful — real perspectives on scaling operations, building community, and navigating the housing landscape. The breakout sessions gave me focused, hands-on learning and actionable takeaways I could apply to my own business immediately."`} sub="Coliving Operator" />
            <Testimonial featured delay="d4" quote={`"One of the best real estate events I've ever been to. The speakers, the content, the networking, the venue — all of it was incredibly well put together. From a conversation to reality, these women are trailblazers and powerhouses."`} sub="Real Estate Investor" />
          </div>
        </div>
      </section>

      {/* PHOTO STRIP — see the room and the energy */}
      <div className="photo-strip">
        <div className="photo-track">
          <div className="photo-strip-item"><img src="/homepagestrip/homepage1.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/homepagestrip/homepage2.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/homepagestrip/homepage3.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/homepagestrip/homepage4.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/homepagestrip/homepage1.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/homepagestrip/homepage2.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/homepagestrip/homepage3.png" alt="" /></div>
          <div className="photo-strip-item"><img src="/homepagestrip/homepage4.png" alt="" /></div>
        </div>
      </div>

      {/* ABOUT — story lands after they already want in */}
      <section className="about">
        <div className="si">
          <div className="about-g">
            <div className="about-t rv">
              <div className="ey">About the Summit</div>
              <h2>A room built by women,<br /><em className="gs">for women.</em></h2>
              <p>
                Coliving is one of the most powerful wealth-building tools in real estate — and women are
                leading the way. The Women&apos;s Coliving Summit exists to give those women a room built
                specifically for them. A space to learn from operators who&apos;ve done it, build
                relationships that turn into partnerships, and walk away with the clarity and confidence
                to take the next step.
              </p>
              <p>
                WCS isn&apos;t about what women can&apos;t do in this industry. It&apos;s about what
                happens when we create space to do it together — openly, strategically, and on our own
                terms. Whether you&apos;re exploring your first deal or scaling a portfolio, this is
                where you belong.
              </p>
              <Link href="/about" className="btn btn-o">Our Full Story</Link>
            </div>
            <div className="about-img rv d2">
              <div className="about-img-inner" style={{padding:0,overflow:'hidden'}}>
                <img src="/founders-together.png" alt="Caitlyn and Jasmine, WCS founders" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA — for the committed researchers */}
      <section className="agd" id="agenda">
        <div className="si">
          <div className="rv">
            <div className="ey">The Agenda</div>
            <h2>Two days, one <em>mission.</em></h2>
            <p className="sb">
              From your first deal to scaling across markets — every session is designed to meet you
              where you are and move you forward.
            </p>
          </div>
          <div className="agd-note rv d1">
            <strong>Note:</strong> This is the WCS 2025 agenda. The 2026 agenda will be announced this
            summer — expect the same intentional structure with fresh content and speakers.
          </div>
          <div className="agd-cols rv d2">
            <DayOne />
            <DayTwo />
          </div>
        </div>
      </section>

      {/* COMMUNITY PHOTO */}
      <div className="comm-photo">
        <div className="comm-photo-inner" style={{padding:0,overflow:'hidden'}}>
          <img src="/wide-group1.png" alt="Women's Coliving Summit community" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0}} />
        </div>
        <div className="comm-photo-overlay"></div>
      </div>

      {/* SPEAKERS */}
      <section className="spk" id="speakers">
        <div className="spk-top rv">
          <div>
            <div className="ey">Speakers</div>
            <h2>Women who&apos;ve <em>built it.</em></h2>
          </div>
          <Link href="/speakers" className="btn btn-o">View All Speakers</Link>
        </div>
        <div className="spk-track">
          {speakerPlaceholders.map((_, i) => (
            <div className="spk-c" key={`a-${i}`}>
              <div className="spk-ph"><span>Headshot</span>Speaker TBA</div>
              <h3>Coming Soon</h3>
              <p>Announced Summer 2026</p>
            </div>
          ))}
          {speakerPlaceholders.map((_, i) => (
            <div className="spk-c" key={`b-${i}`}>
              <div className="spk-ph"><span>Headshot</span>Speaker TBA</div>
              <h3>Coming Soon</h3>
              <p>Announced Summer 2026</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '40px 60px 0' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', marginBottom: '16px', fontWeight: 300 }}>
            Have a story, strategy, or framework worth sharing?
          </p>
          <button className="btn btn-o" onClick={openSpeaker}>Apply to Speak</button>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="spo" id="sponsors">
        <div className="si">
          <div className="rv">
            <div className="ey ey-c">Our Sponsors</div>
            <h2>Backed by the best in <em>the business.</em></h2>
            <p className="sb">
              WCS 2026 is made possible by sponsors who believe in women-led coliving. Want your brand
              in front of 150+ serious coliving investors and operators?
            </p>
          </div>
          <div className="spo-g rv">
            <div className="spo-s">Sponsor Logo</div>
            <div className="spo-s">Sponsor Logo</div>
            <div className="spo-s">Sponsor Logo</div>
            <div className="spo-s">Sponsor Logo</div>
            <div className="spo-s">Sponsor Logo</div>
          </div>
          <div className="rv">
            <button className="btn btn-w" onClick={openSponsor}>Become a Sponsor</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="si">
          <div className="rv">
            <div className="ey">FAQ</div>
            <h2>Questions? We&apos;ve got <em>answers.</em></h2>
          </div>
          <div className="faq-list">
            <FAQItem question="When and where is WCS 2026?">
              WCS 2026 takes place October 16–17 in Atlanta, Georgia. The venue will be announced this
              summer — follow us on social media or sign up for updates so you&apos;re the first to know.
            </FAQItem>
            <FAQItem question="What's included with my ticket?" delayClass="d2">
              Your ticket includes access to all sessions across both days — presentations, panels,
              workshops, and breakout sessions — plus intentional networking time, lunches, light snacks
              and refreshments throughout the day, and video recordings of all sessions. In-person
              attendees also receive membership to the She Leads Coliving community.
            </FAQItem>
            <FAQItem question="Is there a virtual option?" delayClass="d3">
              Yes! We&apos;ll have a virtual attendee option this year as well. Virtual tickets include
              live access to the sessions plus full video recordings of both days so you can revisit
              everything at your own pace.
            </FAQItem>
          </div>
          <div className="rv" style={{ marginTop: '32px' }}>
            <Link href="/faq" className="btn btn-o">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA — price visible, decision moment */}
      <section className="cta-f">
        <div className="sect-spk" />
        <div className="si rv">
          <div className="ey ey-l ey-c">October 16 – 17, 2026 · Atlanta</div>
          <h2>Build the room.<br /><em className="gs">Own the future.</em></h2>
          <p className="cb">
            150 women. Two days. The strategies, partnerships, and community you need to build wealth
            through coliving — all in one room in Atlanta.
          </p>
          <div className="cta-price-badge">
            <span className="cta-price-from">from</span>
            <span className="cta-price-num gs">$399</span>
            <span className="cta-price-note">· limited seats</span>
          </div>
          <div className="cg">
            <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
            <button className="btn btn-ol" onClick={openSponsor}>Become a Sponsor</button>
          </div>
        </div>
      </section>
    </>
  );
}

function Testimonial({
  quote,
  sub,
  featured,
  delay,
}: {
  quote: string;
  sub: string;
  featured?: boolean;
  delay: string;
}) {
  return (
    <div className={`tc ${featured ? 'f' : ''} rv ${delay}`}>
      <div className="tc-st">★ ★ ★ ★ ★</div>
      <div className="tc-q">{quote}</div>
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

function DayOne() {
  return (
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
  );
}

function DayTwo() {
  return (
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
  );
}
