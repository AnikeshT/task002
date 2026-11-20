'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, Users, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { masterJourneysData } from '@/data/journeys';
import { siteConfig } from '@/config/site';

export const BespokeJourneyPlanner: React.FC = () => {
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>('kyoto-zen-odyssey');
  const [partyCount, setPartyCount] = useState<number>(2);
  const [seasonChoice, setSeasonChoice] = useState<'autumn' | 'winter' | 'spring'>('autumn');

  const activeJourney =
    masterJourneysData.find((j) => j.id === selectedJourneyId) || masterJourneysData[0];

  const totalEstimate = activeJourney.price * partyCount;

  return (
    <section id="journey-planner" className="py-28 bg-canvas-elevated border-t border-canvas-border relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-ochre">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Bespoke Journey Architect</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight">
            Compose Your Expedition
          </h2>
          <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
            Tailor group size, territory, and season. Receive an immediate transparent itinerary blueprint and reserve directly.
          </p>
        </div>

        {/* Architect Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Destination Selection */}
            <div className="p-7 rounded-3xl surface-card border border-canvas-border space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-accent-ochre flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Step 1: Choose Master Territory</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {masterJourneysData.map((j) => (
                  <button
                    key={j.id}
                    onClick={() => setSelectedJourneyId(j.id)}
                    className={`p-4 rounded-2xl text-left transition-all border active:scale-95 ${
                      selectedJourneyId === j.id
                        ? 'bg-canvas-surface border-accent-ochre shadow-lg'
                        : 'bg-canvas border-canvas-border text-ink-muted hover:text-paper-light hover:border-canvas-border-strong'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase text-accent-ochre mb-1">{j.country}</div>
                    <div className="font-serif text-lg text-paper-light leading-snug">{j.title.split(':')[0]}</div>
                    <div className="text-xs font-mono text-ink-faint mt-1">{j.duration}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Party Size Selection */}
            <div className="p-7 rounded-3xl surface-card border border-canvas-border space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-accent-ochre flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Step 2: Number of Explorers</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { count: 2, label: 'Couple / Duo', desc: '1 Private Suite' },
                  { count: 4, label: '4 Explorers', desc: '2 Private Suites' },
                  { count: 8, label: '8 Explorers', desc: 'Full Exclusive Charter' },
                ].map((item) => (
                  <button
                    key={item.count}
                    onClick={() => setPartyCount(item.count)}
                    className={`p-4 rounded-2xl text-center transition-all border active:scale-95 ${
                      partyCount === item.count
                        ? 'bg-canvas-surface border-accent-ochre shadow-lg'
                        : 'bg-canvas border-canvas-border text-ink-muted hover:text-paper-light hover:border-canvas-border-strong'
                    }`}
                  >
                    <div className="font-serif text-2xl text-paper-light font-bold">{item.count}</div>
                    <div className="text-xs font-medium text-paper-light mt-0.5">{item.label}</div>
                    <div className="text-[10px] font-mono text-ink-faint mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Season */}
            <div className="p-7 rounded-3xl surface-card border border-canvas-border space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-accent-ochre flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Step 3: Preferred Season</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'autumn', name: 'Autumn Foliage', dates: 'Oct – Nov' },
                  { id: 'winter', name: 'Winter Solitude', dates: 'Dec – Feb' },
                  { id: 'spring', name: 'Spring Renewal', dates: 'Mar – May' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSeasonChoice(s.id as any)}
                    className={`p-3.5 rounded-2xl text-center transition-all border active:scale-95 ${
                      seasonChoice === s.id
                        ? 'bg-canvas-surface border-accent-ochre shadow-lg text-paper-light'
                        : 'bg-canvas border-canvas-border text-ink-muted hover:text-paper-light'
                    }`}
                  >
                    <div className="text-xs font-semibold">{s.name}</div>
                    <div className="text-[10px] font-mono text-ink-faint mt-0.5">{s.dates}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Estimate & Confirmation Card */}
          <div className="lg:col-span-5 rounded-3xl surface-card border border-canvas-border p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-accent-ochre/15 text-accent-ochre border border-accent-ochre/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tailored Blueprint</span>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                {activeJourney.country} • {activeJourney.territory}
              </div>
              <h3 className="font-serif text-3xl text-paper-light font-normal leading-snug">
                {activeJourney.title}
              </h3>
              <p className="text-xs font-mono text-accent-ochre">
                {activeJourney.duration} • {partyCount} Explorers
              </p>
            </div>

            {/* Inclusions */}
            <div className="pt-4 border-t border-canvas-border space-y-2.5">
              <div className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">
                Curated Inclusions:
              </div>
              <ul className="space-y-2 text-xs text-ink-muted font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-ochre shrink-0" />
                  <span>Private chauffeured airport & internal charter transfers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-ochre shrink-0" />
                  <span>Curated architectural suites & private ryokan stays</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-ochre shrink-0" />
                  <span>All meals by private master chefs with sommelier pairings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-ochre shrink-0" />
                  <span>Certified local master guide dedicated solely to your group</span>
                </li>
              </ul>
            </div>

            {/* Total Pricing & Action */}
            <div className="pt-6 border-t border-canvas-border space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-ink-faint">
                    Total All-Inclusive ({partyCount} Explorers)
                  </div>
                  <div className="font-serif text-4xl text-paper-light font-bold">
                    €{totalEstimate.toLocaleString()}
                  </div>
                </div>
                <div className="text-right text-xs font-mono text-ink-muted">
                  €{activeJourney.price.toLocaleString()} / person
                </div>
              </div>

              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-paper-light text-ink-dark font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent-ochre hover:text-white transition-all flex items-center justify-center gap-2 group shadow-xl active:scale-95"
              >
                <span>Reserve Blueprint via Desk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-[11px] text-center font-mono text-ink-faint">
                Guaranteed departure dates with complimentary date alterations up to 45 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

