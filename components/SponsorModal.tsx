'use client';

import { useState } from 'react';
import { useModals } from './ModalProvider';
import { submitToCrm } from '../lib/crm';

export function SponsorModal() {
  const { sponsorOpen, closeSponsor } = useModals();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const submit = async () => {
    if (!name.trim() || !company.trim() || !email.trim()) {
      alert('Please fill out your name, company, and email.');
      return;
    }
    setStatus('sending');
    try {
      await submitToCrm('sponsor', { email, name, phone, message: msg, fields: { Company: company } });
      closeSponsor();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className={`modal-overlay ${sponsorOpen ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) closeSponsor(); }}
    >
      <div className="modal">
        <button className="modal-close" onClick={closeSponsor} aria-label="Close">×</button>
        <div className="ey">Sponsor WCS 2026</div>
        <h3>Let&apos;s <em>talk.</em></h3>
        <p className="modal-sub">
          Interested in putting your brand in front of 150+ women coliving investors and operators?
          Fill out the form below and we&apos;ll be in touch to schedule a conversation.
        </p>
        <label>Your Name</label>
        <input type="text" placeholder="First and last name" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Company / Brand</label>
        <input type="text" placeholder="Your company name" value={company} onChange={(e) => setCompany(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Phone (optional)</label>
        <input type="tel" placeholder="(555) 123-4567" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label>Tell us a bit about your interest</label>
        <textarea
          placeholder="What products or services does your company offer? What type of sponsorship are you interested in?"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="btn btn-g" onClick={submit} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
        </button>
        {status === 'error' && (
          <p className="form-note">
            Something went wrong — email us at <a href="mailto:Hello@LustraHouse.com">Hello@LustraHouse.com</a> instead.
          </p>
        )}
      </div>
    </div>
  );
}
