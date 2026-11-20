import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const InquiryDrawer: React.FC = () => {
  return (
    <section id="inquire" className="py-28 bg-canvas relative overflow-hidden border-t border-canvas-border">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto rounded-3xl surface-card border border-canvas-border-strong p-8 sm:p-16 text-center space-y-10 relative">
          <div className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-accent-ochre">
            Begin the Conversation
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight leading-tight">
            Your journey begins <br />
            <span className="italic font-light text-paper-bone">with a single quiet thought.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-ink-muted font-light max-w-xl mx-auto leading-relaxed">
            Whether you wish to join one of our strictly capped eight-explorer departures or commission a completely private expedition, our Senior Journey Architects are ready to listen.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-paper-light text-ink-dark font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent-ochre hover:text-white transition-all flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Connect via Official Booking Desk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#feelings-engine"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-canvas-border hover:border-canvas-border-strong text-xs font-mono uppercase tracking-widest text-paper-light hover:bg-white/5 transition-all"
            >
              Explore by Emotion
            </a>
          </div>

          <div className="pt-8 border-t border-canvas-border flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-ink-faint">
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-accent-ochre" />
              <span>{siteConfig.conciergeEmail}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-accent-ochre" />
              <span>{siteConfig.conciergePhone}</span>
            </span>
            <span>•</span>
            <span>Geneva • Tokyo • Tromsø</span>
          </div>
        </div>
      </div>
    </section>
  );
};
