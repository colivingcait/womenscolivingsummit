'use client';

import { useEffect, useRef } from 'react';

// Reusable gold-sparkle + gold-rain layer for wine heroes.
// Mirrors the particle generation used on the homepage hero.
export function HeroSparkles() {
  const spkRef = useRef<HTMLDivElement>(null);
  const grnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spk = spkRef.current;
    if (spk && spk.childElementCount === 0) {
      for (let i = 0; i < 48; i++) {
        const s = document.createElement('div');
        s.className = 'spkl';
        const sz = 2 + Math.random() * 3.5;
        s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${2.5 + Math.random() * 4}s;animation-delay:${Math.random() * 6}s`;
        spk.appendChild(s);
      }
    }
    const grn = grnRef.current;
    if (grn && grn.childElementCount === 0) {
      for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className = 'grn-p';
        const sz = 2 + Math.random() * 3;
        p.style.cssText = `left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${10 + Math.random() * 14}s;animation-delay:${Math.random() * 12}s`;
        grn.appendChild(p);
      }
    }
  }, []);

  return (
    <>
      <div className="hero-spk" ref={spkRef} />
      <div className="grn-wrap" ref={grnRef} />
    </>
  );
}
