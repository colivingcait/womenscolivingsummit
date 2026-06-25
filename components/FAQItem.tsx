'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

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
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Own the reveal state in React. The global ScrollReveal adds `v` via the
  // DOM, but React would strip it on the next re-render (e.g. when `open`
  // toggles), making the item vanish. Tracking it in state keeps it stable.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`faq-item rv ${delayClass ?? ''} ${revealed ? 'v' : ''} ${open ? 'open' : ''}`}
    >
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
