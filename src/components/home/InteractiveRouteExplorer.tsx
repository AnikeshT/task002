'use client';

import React, { useState } from 'react';
import { Compass, Calendar, MapPin, ChevronRight, Bed, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { expeditionsData, Expedition } from '@/data/expeditions';
import { siteConfig } from '@/config/site';

interface InteractiveRouteExplorerProps {
  initialExpeditionId?: string;
}

export const InteractiveRouteExplorer: React.FC<InteractiveRouteExplorerProps> = ({
  initialExpeditionId = 'svalbard-78n',
}) => {
  const [selectedExpeditionId, setSelectedExpeditionId] = useState<string>(initialExpeditionId);
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);

  const selectedExpedition =
    expeditionsData.find((e) => e.id === selectedExpeditionId) || expeditionsData[0];

  const currentDay = selectedExpedition.daysOverview[activeDayIndex] || selectedExpedition.daysOverview[0];

  return (
    <section id="route-explorer" className="py-24 bg-arctic-900 border-t border-frost-line relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-aurora-cyan/10 text-aurora-cyan border border-aurora-cyan/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Waypoint Explorer</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight">
            DAY-BY-DAY ROUTE <br />
            ARCHITECTURE
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-glacier-200/90 font-normal">
            Step through daily nautical tracks, sub-glacial ascents, and evening architectural stays.
          </p>
        </div>

        {/* Expedition Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl glass-panel border border-frost-line">
          {expeditionsData.map((exp) => (
            <button
              key={exp.id}
              onClick={() => {
                setSelectedExpeditionId(exp.id);
                setActiveDayIndex(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                selectedExpeditionId === exp.id
                  ? 'bg-gradient-to-r from-glacier-400/20 via-aurora-cyan/20 to-aurora-green/20 text-white border border-glacier-400/40 shadow-lg'
                  : 'text-frost-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {exp.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Route Stage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Days Timeline Selector */}
          <div className="lg:col-span-4 rounded-3xl glass-panel border border-frost-line p-4 sm:p-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-frost-dark px-3 pb-2 border-b border-frost-line/40 flex justify-between items-center">
              <span>Timeline Steps</span>
              <span>{selectedExpedition.duration}</span>
            </div>

            <div className="space-y-1.5 pt-2">
              {selectedExpedition.daysOverview.map((day, idx) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    activeDayIndex === idx
                      ? 'bg-arctic-850 border-glacier-400/50 shadow-md text-frost'
                      : 'border-transparent text-frost-muted hover:bg-white/5 hover:text-frost'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-semibold flex items-center justify-center shrink-0 ${
                        activeDayIndex === idx
                          ? 'bg-aurora-cyan text-arctic-950 font-bold'
                          : 'bg-arctic-900 border border-frost-line text-frost-muted'
                      }`}
                    >
                      D{day.day}
                    </span>
                    <span className="text-xs font-medium line-clamp-1">{day.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      activeDayIndex === idx ? 'text-aurora-cyan translate-x-0.5' : 'text-frost-dark'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Day Detail Spotlight Stage */}
          <div className="lg:col-span-8 rounded-3xl glass-panel border border-frost-line p-6 sm:p-10 space-y-8 relative overflow-hidden">
            {/* Top Waypoint Telemetry */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-frost-line">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-aurora-cyan">
                  {selectedExpedition.country} • {selectedExpedition.region}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-frost">
                  Day {currentDay.day}: {currentDay.title}
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-arctic-900 border border-frost-line text-xs font-mono text-glacier-300 self-start sm:self-auto">
                COORDINATES: {selectedExpedition.coordinates}
              </div>
            </div>

            {/* Narrative Brief */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-frost-dark">
                Expedition Master Log & Route Notes:
              </div>
              <p className="text-base sm:text-lg text-frost/90 leading-relaxed font-sans">
                {currentDay.description}
              </p>
            </div>

            {/* Stay & Logistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-frost-line/60">
              <div className="p-4 rounded-2xl bg-arctic-950/60 border border-frost-line flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-aurora-violet/10 border border-aurora-violet/30 flex items-center justify-center text-aurora-violet shrink-0">
                  <Bed className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-frost-dark">
                    Sanctuary / Overnight Stay
                  </div>
                  <div className="text-xs font-medium text-frost">{currentDay.stay}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-arctic-950/60 border border-frost-line flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-aurora-green/10 border border-aurora-green/30 flex items-center justify-center text-aurora-green shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-frost-dark">
                    Safety & Technical Protocol
                  </div>
                  <div className="text-xs font-medium text-frost">Polar Guide + Satellite SAR Guard</div>
                </div>
              </div>
            </div>

            {/* Route Booking Callout */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-frost-muted">
                Interested in this full {selectedExpedition.duration} journey?
              </div>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green text-arctic-950 font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-1.5 group"
              >
                <span>Reserve {selectedExpedition.title.split(':')[0]}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
