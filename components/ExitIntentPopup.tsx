'use client';

import { useEffect, useRef, useState } from 'react';
import { submitToCrm } from '../lib/crm';

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (shownRef.current) return;
      if (e.clientY < 5 && !e.relatedTarget) {
        shownRef.current = true;
        setOpen(true);
      }
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
  }, []);

  const submit = async () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    setStatus('sending');
    try {
      await submitToCrm('exit_intent', { email, name });
      setOpen(false);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className={`exit-overlay ${open ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="exit-box">
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
        <div className="ey ey-c" style={{ marginBottom: '12px' }}>Before You Go</div>
        <h3>Don&apos;t miss <em>this.</em></h3>
        <p>
          WCS 2026 is shaping up to be our biggest year yet. Drop your email and we&apos;ll keep you
          posted on speakers, agenda, early bird tickets, and more.
        </p>
        <div className="exit-form">
          <input type="text" placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={submit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Keep Me Posted'}
          </button>
        </div>
        {status === 'error' && (
          <p className="form-note">
            Something went wrong — email us at <a href="mailto:Hello@LustraHouse.com">Hello@LustraHouse.com</a> instead.
          </p>
        )}
        <button className="exit-skip" onClick={() => setOpen(false)}>
          No thanks, I&apos;ll find my own way back
        </button>
      </div>
    </div>
  );
}
