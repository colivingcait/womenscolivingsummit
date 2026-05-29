'use client';

import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { useModals } from '@/components/ModalProvider';

export default function FAQPage() {
  const { openSponsor, openSpeaker } = useModals();

  return (
    <>
      <section className="page-hero">
        <div className="ey ey-c">FAQ</div>
        <h1>Questions? We&apos;ve got <em>answers.</em></h1>
        <p className="hero-sub">
          Everything you need to know about the Women&apos;s Coliving Summit — from tickets to dress
          code to what happens if your plans change.
        </p>
      </section>

      <section className="faq-section">
        <div className="si">
          <div className="faq-list">
            <FAQItem question="When and where is WCS 2026?">
              WCS 2026 takes place October 16–17 in Atlanta, Georgia. The venue will be announced this
              summer — follow us on social media or sign up for updates so you&apos;re the first to know.
            </FAQItem>
            <FAQItem question="Who should attend?" delayClass="d1">
              WCS is for women at every stage of the coliving journey. Whether you&apos;re still
              exploring the model and running your first numbers, building systems in your first
              property, scaling a portfolio across markets, or you work in a field that supports
              coliving — real estate, lending, furnishing, property management, technology —
              there&apos;s a seat here for you.
            </FAQItem>
            <FAQItem question="Is this event open to men and women?" delayClass="d2">
              The Women&apos;s Coliving Summit is intentionally designed as a space for women. We
              believe that when women have a room built specifically for them — to learn, connect,
              and grow without filtering — something powerful happens. It&apos;s not about exclusion.
              It&apos;s about creating the conditions for women to show up fully and build boldly.
            </FAQItem>
            <FAQItem question="How much are tickets?" delayClass="d3">
              Ticket pricing and tiers are available on our ticketing page.{' '}
              <a href="https://www.eventbrite.com/e/the-womens-coliving-summit-atlanta-2026-tickets-1986578238990" target="_blank" rel="noreferrer">
                View tickets and pricing here.
              </a>
            </FAQItem>
            <FAQItem question="Is there a virtual option?">
              Yes! We&apos;ll have a virtual attendee option this year as well. Virtual tickets include
              live access to the sessions plus full video recordings of both days so you can revisit
              everything at your own pace.
            </FAQItem>
            <FAQItem question="What's included with my ticket?" delayClass="d1">
              Your ticket includes access to all sessions across both days — presentations, panels,
              workshops, and breakout sessions — plus intentional networking time, lunches, light
              snacks and refreshments throughout the day, and video recordings of all sessions.
              In-person attendees also receive membership to the She Leads Coliving community.
            </FAQItem>
            <FAQItem question="Is there a hotel room block?" delayClass="d2">
              Yes — a hotel room block will be available and announced alongside the venue details
              this summer. We&apos;ll make sure you have a convenient, comfortable option close to
              the action.
            </FAQItem>
            <FAQItem question="What should I wear?" delayClass="d3">
              Business attire always looks great at conferences — dress to meet your future business
              partners and to show up as the best version of you. And if you&apos;re a jumpsuit kind
              of girl, so are we. ;)
            </FAQItem>
            <FAQItem question="Can I get a refund?">
              Due to the nature of live events — venue deposits, catering headcounts, and production
              planning — we&apos;re unable to offer refunds on tickets. However, we&apos;re happy to
              help you transfer your ticket to a friend or colleague. And if you can&apos;t find
              someone, don&apos;t worry — as the event approaches, we&apos;ll open a ticket donation
              program that provides sponsored tickets to women in the real estate investing field who
              want to attend but may not have the means to yet. Last year, we were proud to welcome
              three Kennesaw State University students on scholarship through this program.
            </FAQItem>
            <FAQItem question="How do I become a sponsor?" delayClass="d1">
              We love our sponsors — they&apos;re an essential part of what makes WCS possible.
              We&apos;d love to have a conversation about our sponsorship packages and find the right
              fit for your brand.{' '}
              <a onClick={(e) => { e.preventDefault(); openSponsor(); }}>
                Click here to submit a sponsor inquiry.
              </a>
            </FAQItem>
            <FAQItem question="How do I apply to speak?" delayClass="d2">
              We&apos;re always looking for women with real coliving experience and a perspective
              worth sharing — operators, investors, and industry leaders who can teach, inspire, and
              equip our attendees. If that sounds like you, we&apos;d love to hear from you.{' '}
              <a onClick={(e) => { e.preventDefault(); openSpeaker(); }}>
                Click here to submit a speaker application.
              </a>
            </FAQItem>
            <FAQItem question="I have another question — how do I reach you?" delayClass="d3">
              We&apos;d love to hear from you! Reach out anytime at{' '}
              <a href="mailto:Hello@LustraHouse.com">Hello@LustraHouse.com</a> and we&apos;ll get back
              to you as soon as we can.
            </FAQItem>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="si rv">
          <div className="ey ey-c">Still Have Questions?</div>
          <h2>We&apos;re here to <em>help.</em></h2>
          <p>Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you personally.</p>
          <div className="contact-email">
            <a href="mailto:Hello@LustraHouse.com">Hello@LustraHouse.com</a>
          </div>
        </div>
      </section>

      <section className="cta-band bg-wine">
        <div className="si rv">
          <div className="ey ey-l ey-c">October 16 – 17, 2026</div>
          <h2>Build the room.<br /><em>Own the future.</em></h2>
          <p>Got your answers? Now get your ticket.</p>
          <div className="cg">
            <a href="https://www.eventbrite.com/e/the-womens-coliving-summit-atlanta-2026-tickets-1986578238990" target="_blank" rel="noreferrer" className="btn btn-g">Get My Ticket</a>
            <Link href="/wcs-2025" className="btn btn-ol">See WCS 2025</Link>
          </div>
        </div>
      </section>
    </>
  );
}
