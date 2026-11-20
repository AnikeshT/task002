'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { smoothScrollTo } from '@/utils/smoothScroll';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('window-stage');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(href, 90);
    setActiveSection(href.replace('#', ''));
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-canvas/92 backdrop-blur-md border-b border-canvas-border py-4 shadow-xl'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-paper-light uppercase group-hover:text-accent-ochre transition-colors duration-300">
              KAIROS
            </span>
            <span className="hidden sm:inline-block w-px h-4 bg-canvas-border" />
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-ink-muted uppercase">
              Beyond the Window
            </span>
          </Link>

          {/* Desktop Editorial Navigation with Smooth Animated Scroll */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-ink-muted">
            {siteConfig.navLinks.slice(0, 6).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 hover:text-paper-light transition-colors duration-200 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-ochre transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Curate Journey CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#inquire"
              onClick={(e) => handleNavClick(e, '#inquire')}
              className="text-xs font-mono tracking-widest uppercase text-ink-muted hover:text-paper-light px-3 py-2 transition-colors"
            >
              Consultation
            </a>

            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-ink-dark bg-paper-light hover:bg-accent-ochre hover:text-white transition-all duration-300 shadow-md group active:scale-95"
            >
              <span>Curate Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-paper-light hover:text-accent-ochre transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[70px] bg-canvas-elevated/98 backdrop-blur-2xl border-b border-canvas-border p-6 shadow-2xl animate-in fade-in duration-300">
            <div className="flex flex-col gap-4 text-sm font-mono tracking-wider uppercase text-ink-muted">
              {siteConfig.navLinks.slice(0, 6).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 border-b border-canvas-border/40 hover:text-paper-light flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-faint" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest font-semibold rounded-full bg-paper-light text-ink-dark hover:bg-accent-ochre hover:text-white transition-colors"
                >
                  Curate Journey via Desk
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
