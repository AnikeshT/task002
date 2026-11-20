'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, Home, Users, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const BespokeExpeditionBuilder: React.FC = () => {
  const [season, setSeason] = useState<'polar-night' | 'spring-ice' | 'midnight-sun'>('polar-night');
  const [sanctuary, setSanctuary] = useState<'glass-villa' | 'explorer-yacht' | 'treehouse' | 'geothermal'>('glass-villa');
  const [partySize, setPartySize] = useState<number>(2);

  // Dynamic calculations
  let basePrice = 4250;
  let recommendedName = 'Tromsø & Lyngen Alps Glass Sanctuary';
  let recommendedDuration = '5 Days / 4 Nights';
  let recommendedRegion = 'Troms & Finnmark, Norway';

  if (sanctuary === 'explorer-yacht') {
    basePrice = 6850;
    recommendedName = 'Svalbard 78°N Ice-Class Explorer Yacht Charter';
    recommendedDuration = '7 Days / 6 Nights';
    recommendedRegion = 'Spitsbergen Archipelagos';
  } else if (sanctuary === 'geothermal') {
    basePrice = 5400;
    recommendedName = 'Iceland Fire & Ice: Katla Blue Caves & The Retreat';
    recommendedDuration = '6 Days / 5 Nights';
    recommendedRegion = 'South Iceland & Volcanic Highlands';
  } else if (sanctuary === 'treehouse') {
    basePrice = 4800;
    recommendedName = 'Swedish Lapland: Master Dog Sledding & Canopy Treehotel';
    recommendedDuration = '5 Days / 4 Nights';
    recommendedRegion = 'Harads & Arctic Bath, Sweden';
  }

  const estimatedTotal = basePrice * partySize;

  return (
    <section id="bespoke-builder" className="py-24 bg-arctic-950 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-aurora-violet/10 text-aurora-violet border border-aurora-violet/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Bespoke Journey Architect</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight">
            DESIGN YOUR <br />
            POLAR ODYSSEY
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-glacier-200/90 font-normal">
            Select your preferred season, sanctuary architecture, and party size to generate an immediate expedition blueprint.
          </p>
        </div>

        {/* Interactive Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Season */}
            <div className="p-6 rounded-3xl glass-panel border border-frost-line space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frost-dark">
                <Calendar className="w-4 h-4 text-glacier-400" />
                <span>Step 1: Choose Expedition Season</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'polar-night', label: 'Polar Night & Aurora', dates: 'Oct – Mar', badge: 'Peak Lights' },
                  { id: 'spring-ice', label: 'Spring Glacial Ice', dates: 'Apr – May', badge: 'Crisp & Sunny' },
                  { id: 'midnight-sun', label: 'Midnight Sun & Sea', dates: 'Jun – Aug', badge: '24hr Daylight' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSeason(item.id as any)}
                    className={`p-4 rounded-2xl text-left transition-all border ${
                      season === item.id
                        ? 'bg-arctic-850 border-aurora-cyan text-frost shadow-lg'
                        : 'border-frost-line/60 text-frost-muted hover:bg-white/5'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase text-aurora-cyan mb-1">{item.badge}</div>
                    <div className="font-display font-bold text-sm text-frost">{item.label}</div>
                    <div className="text-xs font-mono text-frost-dark mt-1">{item.dates}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Sanctuary Style */}
            <div className="p-6 rounded-3xl glass-panel border border-frost-line space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frost-dark">
                <Home className="w-4 h-4 text-aurora-cyan" />
                <span>Step 2: Choose Sanctuary Platform</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'glass-villa', label: 'Architectural Glass Villa', desc: 'Heated aurora ceiling over Norwegian fjord' },
                  { id: 'explorer-yacht', label: 'Ice-Class Explorer Yacht', desc: 'Private 42m vessel through Svalbard glaciers' },
                  { id: 'treehouse', label: 'Boreal Canopy Treehotel', desc: 'Suspended spheres in Swedish pine forest' },
                  { id: 'geothermal', label: 'Volcanic Mineral Retreat', desc: 'Private silica lagoons carved in Icelandic lava' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSanctuary(item.id as any)}
                    className={`p-4 rounded-2xl text-left transition-all border ${
                      sanctuary === item.id
                        ? 'bg-arctic-850 border-aurora-cyan text-frost shadow-lg'
                        : 'border-frost-line/60 text-frost-muted hover:bg-white/5'
                    }`}
                  >
                    <div className="font-display font-bold text-sm text-frost">{item.label}</div>
                    <div className="text-xs text-frost-muted mt-1 leading-relaxed">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Party Size */}
            <div className="p-6 rounded-3xl glass-panel border border-frost-line space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frost-dark">
                <Users className="w-4 h-4 text-aurora-green" />
                <span>Step 3: Select Party Size</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { count: 2, label: 'Solo / Couple', desc: 'Private Suite' },
                  { count: 4, label: '4 Explorers', desc: 'Dual Suites' },
                  { count: 6, label: '6 Explorers', desc: 'Exclusive Wing' },
                  { count: 8, label: '8 Explorers', desc: 'Full Charter' },
                ].map((item) => (
                  <button
                    key={item.count}
                    onClick={() => setPartySize(item.count)}
                    className={`p-3.5 rounded-2xl text-center transition-all border ${
                      partySize === item.count
                        ? 'bg-arctic-850 border-aurora-cyan text-frost shadow-lg'
                        : 'border-frost-line/60 text-frost-muted hover:bg-white/5'
                    }`}
                  >
                    <div className="font-display font-bold text-lg text-frost">{item.label}</div>
                    <div className="text-[11px] font-mono text-frost-dark mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Result Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-glacier-400/40 relative overflow-hidden space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-aurora-green/20 text-aurora-green border border-aurora-green/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Optimized Match Generated</span>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-glacier-400">
                {recommendedRegion}
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-frost leading-tight">
                {recommendedName}
              </h3>
              <p className="text-xs font-mono text-frost-muted">
                Duration: {recommendedDuration} • Party Size: {partySize} Travelers
              </p>
            </div>

            {/* Inclusions Checkmarks */}
            <div className="space-y-2.5 pt-4 border-t border-frost-line">
              <div className="text-xs font-mono uppercase tracking-wider text-frost-dark">
                Complimentary Bespoke Inclusions:
              </div>
              <ul className="space-y-2 text-xs text-frost-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aurora-cyan shrink-0" />
                  <span>Moncler/Canada Goose Grade 5 Polar Parkas & Boots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aurora-cyan shrink-0" />
                  <span>Private Nordic Chef & Sommelier Wine Pairing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aurora-cyan shrink-0" />
                  <span>Certified UIAGM Glaciologist & Expedition Master</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aurora-cyan shrink-0" />
                  <span>Private 4x4 / Helicopter Airport Transfers</span>
                </li>
              </ul>
            </div>

            {/* Price Calculation & Direct Booking */}
            <div className="pt-6 border-t border-frost-line space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase text-frost-dark">
                    Calculated Investment ({partySize} Guests)
                  </div>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-frost">
                    €{estimatedTotal.toLocaleString()}
                  </div>
                </div>
                <div className="text-right text-xs font-mono text-glacier-300">
                  €{basePrice.toLocaleString()} / person
                </div>
              </div>

              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green text-arctic-950 font-mono text-xs font-bold uppercase tracking-wider shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Reserve Route via Booking Desk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-[11px] text-center font-mono text-frost-dark">
                Fully protected with flexible dates and comprehensive Arctic insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
