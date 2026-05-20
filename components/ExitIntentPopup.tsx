'use client';

import { useEffect, useRef, useState } from 'react';

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

  const submit = () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    const subject = encodeURIComponent('WCS 2026 — New Email Signup (Exit Intent)');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nThis person signed up for WCS 2026 updates via the exit-intent popup.`
    );
    window.location.href = `mailto:Hello@LustraHouse.com?subject=${subject}&body=${body}`;
    setOpen(false);
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
          <button onClick={submit}>Keep Me Posted</button>
        </div>
        <button className="exit-skip" onClick={() => setOpen(false)}>
          No thanks, I&apos;ll find my own way back
        </button>
      </div>
    </div>
  );
}
