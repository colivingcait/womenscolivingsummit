'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.rv').forEach((el) => observer.observe(el));

    // Highlight cards mousemove glow
    const cards = document.querySelectorAll<HTMLElement>('.hl-c');
    const moveHandlers: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
    cards.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      };
      card.addEventListener('mousemove', handler);
      moveHandlers.push([card, handler]);
    });

    return () => {
      observer.disconnect();
      moveHandlers.forEach(([card, handler]) => card.removeEventListener('mousemove', handler));
    };
  }, [pathname]);

  return null;
}
