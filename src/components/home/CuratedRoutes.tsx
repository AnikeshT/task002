'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Users, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { masterJourneysData, MasterJourney } from '@/data/journeys';
import { siteConfig } from '@/config/site';
import { smoothScrollTo } from '@/utils/smoothScroll';

interface CuratedRoutesProps {
  onSelectJourney?: (journey: MasterJourney) => void;
}

export const CuratedRoutes: React.FC<CuratedRoutesProps> = ({ onSelectJourney }) => {
  return (
    <section id="journeys" className="py-28 bg-canvas relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-ochre">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Small on Purpose. Local by Design.</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight">
              Four places <br />
              <span className="italic font-light text-paper-bone">we know by heart.</span>
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
              Never more than eight travelers. Zero scripted megaphone tours. Every single itinerary scouted and walk-tested personally before being offered.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-serif text-5xl font-light text-paper-light">04</span>
            <div className="text-xs font-mono uppercase tracking-widest text-ink-faint">
              Master Portfolios
            </div>
          </div>
        </div>

        {/* Master Journeys Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {masterJourneysData.map((journey) => (
            <div
              key={journey.id}
              className="rounded-3xl surface-card surface-hover border border-canvas-border overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Full-bleed Photo with subtle zoom */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={journey.heroImage}
                    alt={journey.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-elevated via-transparent to-black/30" />

                  {/* Top Floating Tags */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-canvas/80 backdrop-blur-md border border-canvas-border text-paper-light">
                      {journey.coordinates}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent-ochre/20 backdrop-blur-md border border-accent-ochre/40 text-accent-ochre font-medium">
                      {journey.feeling}
                    </span>
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-ink-muted">
                    <div className="flex items-center gap-3">
                      <span className="bg-canvas/80 px-2.5 py-1 rounded-lg border border-canvas-border text-paper-light">
                        {journey.duration}
                      </span>
                      <span className="bg-canvas/80 px-2.5 py-1 rounded-lg border border-canvas-border text-paper-light">
                        Max {journey.groupLimit} Explorers
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Body */}
                <div className="p-7 sm:p-9 space-y-5">
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-accent-ochre">
                      {journey.country} • {journey.territory}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-paper-light font-normal leading-snug">
                      {journey.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-ink-muted leading-relaxed font-light">
                    {journey.tagline}
                  </p>

                  {/* Upcoming Guaranteed Departures */}
                  <div className="space-y-2 pt-2 border-t border-canvas-border">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
                      Guaranteed Departure Dates:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {journey.departures.map((dep, dIdx) => (
                        <div
                          key={dIdx}
                          className="px-3 py-1 rounded-xl bg-canvas border border-canvas-border text-xs font-mono flex items-center gap-2"
                        >
                          <span className="text-paper-light">{dep.dates}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            dep.availability === 'Last 2 Spots' || dep.availability === 'Last 1 Spot'
                              ? 'bg-amber-900/30 text-amber-300 border border-amber-700/40'
                              : 'bg-accent-sage/20 text-accent-sage border border-accent-sage/30'
                          }`}>
                            {dep.spotsRemaining} spots
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions & Pricing */}
              <div className="p-7 sm:p-9 pt-4 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-canvas-surface/40">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
                    All-Inclusive Journey
                  </div>
                  <div className="font-serif text-2xl font-bold text-paper-light">
                    €{journey.price.toLocaleString()}
                    <span className="text-xs font-mono text-ink-muted font-normal"> / traveler</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      onSelectJourney?.(journey);
                      smoothScrollTo('itinerary-journal');
                    }}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-canvas-border hover:border-canvas-border-strong text-xs font-mono uppercase tracking-widest text-paper-light text-center hover:bg-white/5 transition-colors active:scale-95"
                  >
                    View Journal
                  </button>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-paper-light text-ink-dark font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent-ochre hover:text-white transition-all flex items-center justify-center gap-1 group shadow-md active:scale-95"
                  >
                    <span>Reserve</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
