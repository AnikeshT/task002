'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, Compass, Volume2, VolumeX } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioAmbience, setIsAudioAmbience] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-canvas/90 backdrop-blur-md border-b border-canvas-border py-4 shadow-xl'
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

          {/* Desktop Editorial Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-ink-muted">
            <a href="#window-stage" className="hover:text-paper-light transition-colors duration-200">
              The Window
            </a>
            <a href="#feelings-engine" className="hover:text-paper-light transition-colors duration-200">
              Pursuit of Feeling
            </a>
            <a href="#journeys" className="hover:text-paper-light transition-colors duration-200">
              Curated Routes
            </a>
            <a href="#itinerary-journal" className="hover:text-paper-light transition-colors duration-200">
              Daily Architecture
            </a>
            <a href="#philosophy" className="hover:text-paper-light transition-colors duration-200">
              Philosophy
            </a>
            <a href="#dispatches" className="hover:text-paper-light transition-colors duration-200">
              Dispatches
            </a>
          </nav>

          {/* Right Action & Audio State */}
          <div className="hidden sm:flex items-center gap-5">
            <button
              onClick={() => setIsAudioAmbience(!isAudioAmbience)}
              className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-ink-muted hover:text-paper-light transition-colors px-3 py-1.5 rounded-full border border-canvas-border hover:border-canvas-border-strong"
              aria-label="Toggle sensory soundscape"
            >
              {isAudioAmbience ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-accent-ochre" />
                  <span>Ambience: Forest Breeze</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Mute</span>
                </>
              )}
            </button>

            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-ink-dark bg-paper-light hover:bg-accent-ochre hover:text-white transition-all duration-300 shadow-md group"
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
            <div className="flex flex-col gap-5 text-sm font-mono tracking-wider uppercase text-ink-muted">
              <a
                href="#window-stage"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-canvas-border/40 hover:text-paper-light"
              >
                The Window
              </a>
              <a
                href="#feelings-engine"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-canvas-border/40 hover:text-paper-light"
              >
                The Pursuit of Feeling
              </a>
              <a
                href="#journeys"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-canvas-border/40 hover:text-paper-light"
              >
                Curated Routes
              </a>
              <a
                href="#itinerary-journal"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-canvas-border/40 hover:text-paper-light"
              >
                Daily Architecture
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-canvas-border/40 hover:text-paper-light"
              >
                Philosophy
              </a>
              <a
                href="#dispatches"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-canvas-border/40 hover:text-paper-light"
              >
                Dispatches
              </a>

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
