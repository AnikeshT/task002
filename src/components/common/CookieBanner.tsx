'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kairos_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kairos_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kairos_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100%-2.5rem)] sm:w-auto p-5 rounded-2xl bg-canvas-elevated/95 backdrop-blur-md border border-canvas-border-strong shadow-2xl transition-all duration-300 animate-in fade-in"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-serif text-base text-paper-light">
            Privacy & Sensory Settings
          </span>
          <button
            onClick={handleDecline}
            className="text-ink-faint hover:text-paper-light p-1 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-xs text-ink-muted leading-relaxed font-light">
          We use essential technical cookies to remember sensory preferences and secure your journey inquiries.{' '}
          <Link href="/privacy" className="underline text-paper-light hover:text-accent-ochre transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="pt-1 flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-ink-dark bg-paper-light hover:bg-accent-ochre hover:text-white transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-ink-muted hover:text-paper-light border border-canvas-border transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
};
