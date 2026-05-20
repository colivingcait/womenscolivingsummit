'use client';

import { ReactNode, useState } from 'react';

export function FAQItem({
  question,
  delayClass,
  children,
}: {
  question: string;
  delayClass?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item rv ${delayClass ?? ''} ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen((v) => !v)}>
        <h3>{question}</h3>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a">
        <div className="faq-a-inner">{children}</div>
      </div>
    </div>
  );
}
