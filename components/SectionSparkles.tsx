'use client';

import { useEffect, useRef } from 'react';

type Props = {
  count?: number;
  className?: string;
};

export function SectionSparkles({ count = 36, className = 'sect-spk' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap || wrap.childElementCount > 0) return;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'spkl';
      const sz = 1.5 + Math.random() * 3;
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;animation-duration:${2 + Math.random() * 5}s;animation-delay:${Math.random() * 7}s`;
      wrap.appendChild(s);
    }
  }, [count]);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
