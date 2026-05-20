'use client';

import { useState } from 'react';
import { useModals } from './ModalProvider';

export function SpeakerModal() {
  const { speakerOpen, closeSpeaker } = useModals();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [exp, setExp] = useState('');
  const [topic, setTopic] = useState('');
  const [social, setSocial] = useState('');

  const submit = () => {
    if (!name.trim() || !email.trim() || !exp.trim() || !topic.trim()) {
      alert('Please fill out your name, email, experience, and topic.');
      return;
    }
    const subject = encodeURIComponent(`WCS 2026 Speaker Application — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ''}\n\nColiving Experience:\n${exp}\n\nProposed Topic:\n${topic}${social ? `\n\nSocial/Website: ${social}` : ''}`
    );
    window.location.href = `mailto:Hello@LustraHouse.com?subject=${subject}&body=${body}`;
    closeSpeaker();
  };

  return (
    <div
      className={`modal-overlay ${speakerOpen ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) closeSpeaker(); }}
    >
      <div className="modal">
        <button className="modal-close" onClick={closeSpeaker} aria-label="Close">×</button>
        <div className="ey">Apply to Speak</div>
        <h3>Share your <em>story.</em></h3>
        <p className="modal-sub">
          We&apos;re looking for women with real coliving experience — operators, investors, and industry
          leaders who can teach, inspire, and equip our attendees. Tell us about yourself.
        </p>
        <label>Your Name</label>
        <input type="text" placeholder="First and last name" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Company / Brand (if applicable)</label>
        <input type="text" placeholder="Your company or brand name" value={company} onChange={(e) => setCompany(e.target.value)} />
        <label>Your Coliving Experience</label>
        <textarea
          placeholder="How are you involved in coliving? (operator, investor, service provider, etc.)"
          value={exp}
          onChange={(e) => setExp(e.target.value)}
        />
        <label>What would you speak about?</label>
        <textarea
          placeholder="What topic, framework, or story would you share with our attendees?"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <label>Social / Website (optional)</label>
        <input
          type="text"
          placeholder="Instagram, LinkedIn, or website URL"
          value={social}
          onChange={(e) => setSocial(e.target.value)}
        />
        <button className="btn btn-g" onClick={submit}>Submit Application</button>
      </div>
    </div>
  );
}
