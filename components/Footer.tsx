'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useModals } from './ModalProvider';
import { submitToCrm } from '../lib/crm';

export function Footer() {
  const { openSponsor, openSpeaker } = useModals();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    setStatus('sending');
    try {
      await submitToCrm('newsletter', { email, name });
      setStatus('sent');
      setName('');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer>
      <div className="fi">
        <div className="ft">
          <div>
            <div className="fb-logo">Women&apos;s Coliving <em>Summit</em></div>
            <p className="fb-p">Women building wealth — one room at a time.</p>
          </div>
          <div className="fc">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/agenda">Agenda</Link></li>
              <li><Link href="/speakers">Speakers</Link></li>
              <li><Link href="/sponsors">Sponsors</Link></li>
              <li><Link href="/wcs-2025">WCS 2025</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="fc">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://instagram.com/colivingcait" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://linkedin.com/in/coliving-cait" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:Hello@LustraHouse.com">Email</a></li>
            </ul>
          </div>
          <div className="fc">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="https://www.eventbrite.com/e/the-womens-coliving-summit-atlanta-2026-tickets-1986578238990" target="_blank" rel="noreferrer">Buy Tickets</a></li>
              <li><button type="button" onClick={openSponsor}>Sponsor WCS</button></li>
              <li><button type="button" onClick={openSpeaker}>Apply to Speak</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-signup">
          <h4>Stay in the Loop</h4>
          <p>Be the first to know when tickets drop, speakers are announced, and the 2026 agenda goes live.</p>
          <div className="signup-form">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Count Me In'}
            </button>
          </div>
          {status === 'sent' && <p className="form-note">🎉 You&apos;re on the list!</p>}
          {status === 'error' && (
            <p className="form-note">
              Something went wrong — email us at{' '}
              <a href="mailto:Hello@LustraHouse.com">Hello@LustraHouse.com</a> instead.
            </p>
          )}
        </div>
        <div className="fbot">
          <span>© 2026 Women&apos;s Coliving Summit. All rights reserved.</span>
          <a href="mailto:Hello@LustraHouse.com">Hello@LustraHouse.com</a>
        </div>
      </div>
    </footer>
  );
}
