'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Menu, X, ArrowUpRight, Radio, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Telemetry Ticker Bar */}
      <div className="bg-arctic-950/90 border-b border-frost-line text-xs font-mono py-2 text-frost-muted px-4 hidden md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-green"></span>
              </span>
              <span className="text-frost font-medium">LIVE KP-INDEX:</span>
              <span className="text-aurora-green font-semibold">5.6 HIGH ACTIVITY</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-glacier-400" />
              <span>STATION: 69.6492° N, 18.9553° E (TROMSØ)</span>
            </div>
            <div className="hidden xl:flex items-center gap-2">
              <span>SOLAR WIND: 482 km/s</span>
              <span className="text-frost-dark">•</span>
              <span>GEOMAGNETIC: STORM G1 WATCH</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-frost-muted">
            <span className="text-frost-dark">MAX 8 GUESTS PER EXPEDITION</span>
            <span className="text-frost-dark">•</span>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-glacier-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-aurora-cyan" />
              <span>Official Direct Booking Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-arctic-950/85 backdrop-blur-xl border-b border-frost-line py-3 shadow-2xl shadow-arctic-950/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-glacier-500/20 via-aurora-cyan/10 to-aurora-violet/20 border border-glacier-400/30 flex items-center justify-center text-glacier-300 group-hover:border-glacier-400 group-hover:text-white transition-all duration-300 shadow-lg shadow-glacier-500/10">
              <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-frost flex items-center gap-1.5">
                NORDVALL
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-aurora-cyan/15 text-aurora-cyan border border-aurora-cyan/30">
                  78°N
                </span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-frost-muted">
                Polar Expeditions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 glass-panel rounded-full px-5 py-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-mono text-frost-muted hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#bespoke-builder"
              className="text-xs font-mono uppercase tracking-wider text-frost-muted hover:text-white px-3 py-2 rounded-lg border border-frost-line hover:border-glacier-400/40 transition-all duration-200 hidden md:inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-aurora-emerald" />
              <span>Bespoke Route</span>
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-arctic-950 bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green rounded-full shadow-lg shadow-glacier-500/25 hover:shadow-glacier-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Reserve Departure</span>
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-frost-line text-frost hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-arctic-950/98 backdrop-blur-2xl border-b border-frost-line p-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-frost-line text-xs font-mono text-aurora-green">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-green"></span>
                </span>
                <span>AURORA TELEMETRY: KP 5.6 (ACTIVE)</span>
              </div>
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono uppercase tracking-wider text-frost-muted hover:text-white py-2 flex items-center justify-between border-b border-frost-line/40"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-frost-dark" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#bespoke-builder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-center text-xs font-mono uppercase tracking-wider rounded-xl border border-glacier-400/40 text-frost hover:bg-white/5 transition-colors"
                >
                  Bespoke Itinerary Builder
                </a>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-center text-xs font-mono uppercase tracking-wider font-semibold rounded-xl bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green text-arctic-950 shadow-xl flex items-center justify-center gap-1.5"
                >
                  <span>Reserve Departure via Booking Desk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
