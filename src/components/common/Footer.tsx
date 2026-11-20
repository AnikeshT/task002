import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, ShieldCheck, Globe, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas-elevated border-t border-canvas-border text-ink-muted pt-20 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-canvas-border">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <span className="font-serif text-3xl font-light tracking-[0.2em] text-paper-light uppercase block">
                KAIROS
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-accent-ochre block">
                Haute Experiential Journeys & Wild Sanctuaries
              </span>
            </div>

            <p className="text-sm text-ink-muted leading-relaxed font-light max-w-sm">
              We design and execute small-group and private journeys across Earth’s most evocative landscapes. Strictly eight travelers or fewer. 100% scouted on foot.
            </p>

            <div className="text-xs font-mono text-ink-faint space-y-1">
              <div>Headquarters: {siteConfig.headquarters}</div>
              <div>Concierge: {siteConfig.conciergeEmail}</div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-canvas border border-canvas-border text-paper-light">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-ochre" />
                <span>Max 8 Explorers</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-canvas border border-canvas-border text-paper-light">
                <Globe className="w-3.5 h-3.5 text-accent-sage" />
                <span>Carbon Neutral</span>
              </span>
            </div>
          </div>

          {/* Master Journeys */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper-light font-semibold">
              Master Portfolios
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#journeys" className="hover:text-paper-light transition-colors">
                  Kyoto & Yakushima
                </a>
              </li>
              <li>
                <a href="#journeys" className="hover:text-paper-light transition-colors">
                  Patagonia Fjords
                </a>
              </li>
              <li>
                <a href="#journeys" className="hover:text-paper-light transition-colors">
                  Swiss Engadin & Zermatt
                </a>
              </li>
              <li>
                <a href="#journeys" className="hover:text-paper-light transition-colors">
                  Svalbard 78°N Ice Yacht
                </a>
              </li>
            </ul>
          </div>

          {/* Editorial Philosophy */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper-light font-semibold">
              The Architecture
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#window-stage" className="hover:text-paper-light transition-colors">
                  The Window (Mado Concept)
                </a>
              </li>
              <li>
                <a href="#feelings-engine" className="hover:text-paper-light transition-colors">
                  The Pursuit of Feeling
                </a>
              </li>
              <li>
                <a href="#itinerary-journal" className="hover:text-paper-light transition-colors">
                  Daily Narrative Journal
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-paper-light transition-colors">
                  The KAIROS Charter
                </a>
              </li>
              <li>
                <a href="#dispatches" className="hover:text-paper-light transition-colors">
                  Guest Field Dispatches
                </a>
              </li>
            </ul>
          </div>

          {/* Booking Desk */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper-light font-semibold">
              Verified Booking
            </h4>
            <p className="text-xs text-ink-muted leading-relaxed font-light">
              Every departure reservation is confirmed directly via our verified operator desk.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-canvas border border-canvas-border hover:border-accent-ochre text-paper-light text-xs font-mono uppercase tracking-widest transition-all group w-full justify-center"
            >
              <span>Launch Booking Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-faint">
          <div>
            © {new Date().getFullYear()} KAIROS Journeys International SA. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-paper-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-paper-light transition-colors">
              Terms of Journey
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
