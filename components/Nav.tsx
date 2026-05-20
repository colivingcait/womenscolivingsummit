'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? 's' : ''}>
      <div className="ni">
        <Link href="/" className="nl" onClick={closeMenu}>
          Women&apos;s Coliving <em>Summit</em>
        </Link>
        <button
          className={`nt ${menuOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nk ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/agenda" onClick={closeMenu}>Agenda</Link></li>
          <li><Link href="/speakers" onClick={closeMenu}>Speakers</Link></li>
          <li><Link href="/sponsors" onClick={closeMenu}>Sponsors</Link></li>
          <li><Link href="/wcs-2025" onClick={closeMenu}>WCS 2025</Link></li>
          <li><Link href="/faq" onClick={closeMenu}>FAQ</Link></li>
          <li>
            <a
              href="https://www.eventbrite.com/e/the-womens-coliving-summit-atlanta-2026-tickets-1986277433272?aff=oddtdtcreator"
              target="_blank"
              rel="noreferrer"
              className="btn btn-g"
              style={{ padding: '12px 28px' }}
              onClick={closeMenu}
            >
              Get My Ticket
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
