'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Calendar, MapPin, ChevronRight, Bed, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { masterJourneysData, MasterJourney } from '@/data/journeys';
import { siteConfig } from '@/config/site';

interface ItineraryJournalProps {
  initialJourneyId?: string;
}

export const ItineraryJournal: React.FC<ItineraryJournalProps> = ({
  initialJourneyId = 'kyoto-zen-odyssey',
}) => {
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>(initialJourneyId);
  const [activeDayIdx, setActiveDayIdx] = useState<number>(0);

  const currentJourney =
    masterJourneysData.find((j) => j.id === selectedJourneyId) || masterJourneysData[0];

  const currentDay = currentJourney.dailyArchitecture[activeDayIdx] || currentJourney.dailyArchitecture[0];

  return (
    <section id="itinerary-journal" className="py-28 bg-canvas-elevated border-t border-canvas-border relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-ochre">
            <Compass className="w-3.5 h-3.5" />
            <span>Pelorus Inspired Field Journal</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight">
            Daily Architecture & Narrative
          </h2>
          <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
            Every day is thoughtfully composed like a musical score. Unrushed, intentional, and balanced between active discovery and quiet sanctuary.
          </p>
        </div>

        {/* Journey Tabs with Smooth Transition */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {masterJourneysData.map((j) => (
            <button
              key={j.id}
              onClick={() => {
                setSelectedJourneyId(j.id);
                setActiveDayIdx(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border active:scale-95 ${
                selectedJourneyId === j.id
                  ? 'bg-paper-light text-ink-dark border-paper-light shadow-md'
                  : 'bg-canvas-surface border-canvas-border text-ink-muted hover:text-paper-light'
              }`}
            >
              {j.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Journal Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Day Steps Selector */}
          <div className="lg:col-span-4 rounded-3xl surface-card p-4 sm:p-6 space-y-2 border border-canvas-border">
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint px-3 pb-3 border-b border-canvas-border flex justify-between items-center">
              <span>Day-by-Day Progression</span>
              <span>{currentJourney.duration}</span>
            </div>

            <div className="space-y-1 pt-2">
              {currentJourney.dailyArchitecture.map((day, idx) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDayIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between border active:scale-95 ${
                    activeDayIdx === idx
                      ? 'bg-canvas-surface border-accent-ochre/80 text-paper-light shadow-sm'
                      : 'border-transparent text-ink-muted hover:bg-white/5 hover:text-paper-light'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-semibold flex items-center justify-center shrink-0 ${
                        activeDayIdx === idx
                          ? 'bg-accent-ochre text-white'
                          : 'bg-canvas border border-canvas-border text-ink-faint'
                      }`}
                    >
                      0{day.day}
                    </span>
                    <span className="text-xs font-medium line-clamp-1">{day.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      activeDayIdx === idx ? 'text-accent-ochre translate-x-0.5' : 'text-ink-faint'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Day Spotlight Narrative Card with AnimatePresence */}
          <div className="lg:col-span-8 rounded-3xl surface-card p-7 sm:p-12 border border-canvas-border relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedJourneyId}-day-${activeDayIdx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-8"
              >
                {/* Top Waypoint Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-canvas-border">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-ochre">
                      Day 0{currentDay.day} / {currentJourney.country}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-paper-light font-normal">
                      {currentDay.title}
                    </h3>
                  </div>
                  <div className="font-mono text-xs text-ink-faint self-start sm:self-auto px-3 py-1 rounded-full bg-canvas border border-canvas-border">
                    {currentJourney.coordinates}
                  </div>
                </div>

                {/* Narrative Body */}
                <div className="space-y-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
                    Curator’s Field Log:
                  </div>
                  <p className="font-sans text-base sm:text-lg text-paper-bone/90 leading-relaxed font-light">
                    {currentDay.narrative}
                  </p>
                </div>

                {/* Sanctuary Stay Box */}
                <div className="p-5 rounded-2xl bg-canvas border border-canvas-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-canvas-surface border border-canvas-border flex items-center justify-center text-accent-ochre shrink-0">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
                      Evening Sanctuary Stay
                    </div>
                    <div className="text-sm font-medium text-paper-light">
                      {currentDay.sanctuaryStay}
                    </div>
                  </div>
                </div>

                {/* Direct Booking Callout */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-canvas-border">
                  <div className="text-xs font-mono text-ink-muted">
                    Interested in reserving this {currentJourney.duration} route?
                  </div>

                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-paper-light text-ink-dark font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent-ochre hover:text-white transition-all flex items-center justify-center gap-1.5 group shadow-md active:scale-95"
                  >
                    <span>Reserve Route via Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
