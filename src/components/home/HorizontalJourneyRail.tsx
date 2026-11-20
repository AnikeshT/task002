'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, MapPin, Users, Calendar, Mountain, CheckCircle2 } from 'lucide-react';
import { masterJourneysData, MasterJourney } from '@/data/journeys';
import { siteConfig } from '@/config/site';
import { smoothScrollTo } from '@/utils/smoothScroll';

interface HorizontalJourneyRailProps {
  onSelectJourney?: (journey: MasterJourney) => void;
}

export const HorizontalJourneyRail: React.FC<HorizontalJourneyRailProps> = ({ onSelectJourney }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -440, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 440, behavior: 'smooth' });
    }
  };

  return (
    <section id="journey-rail" className="py-28 bg-canvas relative overflow-hidden border-t border-canvas-border">
      <div className="container-custom">
        {/* Section Header with Rail Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-ochre">
              <Compass className="w-3.5 h-3.5" />
              <span>Awwwards-Standard Horizontal Navigation</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight">
              The Grand Horizons
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
              Glide horizontally through our four meticulously scouted master territories. Each limited strictly to eight explorers.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-canvas-border hover:border-canvas-border-strong bg-canvas-surface flex items-center justify-center text-paper-light hover:text-accent-ochre transition-colors active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-canvas-border hover:border-canvas-border-strong bg-canvas-surface flex items-center justify-center text-paper-light hover:text-accent-ochre transition-colors active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Rail Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {masterJourneysData.map((journey, idx) => (
            <div
              key={journey.id}
              className="w-[320px] sm:w-[420px] lg:w-[460px] shrink-0 snap-start rounded-3xl surface-card border border-canvas-border overflow-hidden flex flex-col justify-between group surface-hover"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={journey.heroImage}
                    alt={journey.title}
                    fill
                    sizes="(max-width: 768px) 320px, 460px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-elevated via-transparent to-black/30" />

                  <div className="absolute top-4 inset-x-4 flex justify-between items-center text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-canvas/80 backdrop-blur-md border border-canvas-border text-paper-light">
                      0{idx + 1} / {journey.country}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent-ochre/20 backdrop-blur-md border border-accent-ochre/40 text-accent-ochre">
                      {journey.feeling}
                    </span>
                  </div>

                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-paper-bone">
                    <span className="bg-canvas/80 px-2.5 py-1 rounded-lg border border-canvas-border">
                      {journey.duration}
                    </span>
                    <span className="bg-canvas/80 px-2.5 py-1 rounded-lg border border-canvas-border">
                      Max {journey.groupLimit} Explorers
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-accent-ochre">
                      {journey.territory} • {journey.coordinates}
                    </div>
                    <h3 className="font-serif text-2xl text-paper-light font-normal leading-snug line-clamp-1">
                      {journey.title}
                    </h3>
                  </div>

                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 font-light">
                    {journey.tagline}
                  </p>

                  {/* Guaranteed Departure Dates */}
                  <div className="pt-2 border-t border-canvas-border space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
                      Upcoming Departures:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {journey.departures.map((dep, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-lg bg-canvas border border-canvas-border text-[11px] font-mono text-paper-light flex items-center gap-1.5"
                        >
                          <span>{dep.dates}</span>
                          <span className="text-[9px] px-1 rounded bg-accent-ochre/20 text-accent-ochre font-semibold">
                            {dep.spotsRemaining} spots
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-7 pt-4 border-t border-canvas-border flex items-center justify-between bg-canvas-surface/40">
                <div>
                  <div className="text-[10px] font-mono uppercase text-ink-faint">All-Inclusive</div>
                  <div className="font-serif text-2xl font-bold text-paper-light">
                    €{journey.price.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSelectJourney?.(journey);
                      smoothScrollTo('itinerary-journal');
                    }}
                    className="px-3.5 py-2 rounded-full border border-canvas-border hover:border-canvas-border-strong text-xs font-mono uppercase tracking-widest text-paper-light hover:bg-white/5 transition-colors active:scale-95"
                  >
                    Journal
                  </button>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-paper-light text-ink-dark font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent-ochre hover:text-white transition-all flex items-center gap-1 active:scale-95 shadow-sm"
                  >
                    <span>Reserve</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
