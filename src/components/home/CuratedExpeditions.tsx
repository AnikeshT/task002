'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Compass, ShieldCheck, Users, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { expeditionsData, Expedition } from '@/data/expeditions';
import { siteConfig } from '@/config/site';

interface CuratedExpeditionsProps {
  onSelectExpeditionForRoute?: (expedition: Expedition) => void;
}

export const CuratedExpeditions: React.FC<CuratedExpeditionsProps> = ({ onSelectExpeditionForRoute }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Journeys');

  const categories = [
    'All Journeys',
    'Polar Yacht & Sea',
    'Glacier & Ice Caves',
    'Aurora & Celestial',
    'Wilderness Sanctuaries',
    'Active Heli-Expedition',
  ];

  const filteredExpeditions = selectedCategory === 'All Journeys'
    ? expeditionsData
    : expeditionsData.filter((e) => e.category === selectedCategory);

  return (
    <section id="expeditions" className="py-24 bg-arctic-950 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-glacier-400/10 text-glacier-300 border border-glacier-400/30">
              <Compass className="w-3.5 h-3.5" />
              <span>Flagship Portfolios 2026/2027</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight">
              CURATED POLAR <br />
              EXPEDITIONS
            </h2>
            <p className="font-serif italic text-lg sm:text-2xl text-glacier-100/90 font-normal leading-relaxed">
              Strictly capped at eight explorers per journey. Handcrafted routes balancing raw arctic wilderness with uncompromising European luxury.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel border border-frost-line">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-glacier-400/20 via-aurora-cyan/20 to-aurora-green/20 text-white border border-glacier-400/40 shadow-lg'
                    : 'text-frost-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExpeditions.map((exp) => (
            <div
              key={exp.id}
              className="rounded-3xl glass-panel border border-frost-line overflow-hidden flex flex-col justify-between group glass-panel-hover"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={exp.heroImage}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arctic-950 via-arctic-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-arctic-950/80 backdrop-blur-md border border-frost-line text-frost">
                      {exp.coordinates}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-aurora-cyan/20 backdrop-blur-md border border-aurora-cyan/40 text-aurora-cyan font-medium">
                      {exp.category}
                    </span>
                  </div>

                  {/* Bottom Image Stats */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-frost-muted">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 bg-arctic-950/70 px-2.5 py-1 rounded-lg border border-frost-line/40">
                        <Calendar className="w-3.5 h-3.5 text-glacier-400" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-arctic-950/70 px-2.5 py-1 rounded-lg border border-frost-line/40">
                        <Users className="w-3.5 h-3.5 text-aurora-green" />
                        <span>Max {exp.maxGuests} Explorers</span>
                      </span>
                    </div>
                    <span className="bg-arctic-950/70 px-2.5 py-1 rounded-lg border border-frost-line/40 text-glacier-300">
                      {exp.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-glacier-400">
                      {exp.country} • {exp.region}
                    </div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-frost leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-frost-muted leading-relaxed">
                      {exp.tagline}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-frost-dark">
                      Key Field Encounters:
                    </div>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-frost-muted">
                      {exp.highlights.slice(0, 3).map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-aurora-cyan shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Upcoming Departures Pills */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-frost-dark">
                      Guaranteed Departure Dates:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.upcomingDepartures.map((dep, dIdx) => (
                        <div
                          key={dIdx}
                          className="px-3 py-1.5 rounded-xl bg-arctic-900 border border-frost-line text-xs font-mono flex items-center gap-2"
                        >
                          <span className="text-frost">{dep.date}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            dep.status === 'Last 2 Spots'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : dep.status === 'Filling Fast'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-aurora-green/20 text-aurora-green border border-aurora-green/30'
                          }`}>
                            {dep.seatsLeft} spots
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer / Pricing & Actions */}
              <div className="p-6 sm:p-8 pt-4 border-t border-frost-line flex flex-col sm:flex-row items-center justify-between gap-4 bg-arctic-900/40">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-frost-dark">
                    All-Inclusive Rate (Includes Polar Gear)
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-frost">
                      €{exp.price.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-frost-muted">
                      / explorer
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="#route-explorer"
                    onClick={() => onSelectExpeditionForRoute?.(exp)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-frost-line hover:border-glacier-400 text-xs font-mono uppercase tracking-wider text-frost text-center hover:bg-white/5 transition-colors"
                  >
                    View Route Map
                  </a>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green text-arctic-950 font-mono text-xs font-bold uppercase tracking-wider text-center shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-1 group"
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
