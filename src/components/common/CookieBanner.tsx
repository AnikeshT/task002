'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nordvall_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nordvall_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('nordvall_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 max-w-md w-[calc(100%-2rem)] sm:w-auto p-5 rounded-2xl bg-arctic-900/95 backdrop-blur-xl border border-frost-line-strong shadow-2xl shadow-arctic-950/80 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-aurora-cyan/10 border border-aurora-cyan/30 flex items-center justify-center text-aurora-cyan shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold text-sm text-frost tracking-wide">
              Arctic Telemetry & Privacy
            </span>
            <button
              onClick={handleDecline}
              className="text-frost-dark hover:text-frost p-1 transition-colors"
              aria-label="Close cookie consent banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-frost-muted leading-relaxed">
            We use essential security cookies and anonymous performance metrics to power real-time Aurora KP-Index updates and guarantee secure expedition bookings.{' '}
            <Link href="/privacy" className="underline text-glacier-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold text-arctic-950 bg-gradient-to-r from-glacier-300 to-aurora-cyan hover:opacity-95 transition-opacity"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-frost-muted hover:text-frost border border-frost-line hover:border-frost-muted transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
