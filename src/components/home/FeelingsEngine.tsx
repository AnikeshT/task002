'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Quote, Heart, Compass } from 'lucide-react';
import { feelingsData, FeelingCategory } from '@/data/feelings';
import { masterJourneysData } from '@/data/journeys';
import { siteConfig } from '@/config/site';
import { smoothScrollTo } from '@/utils/smoothScroll';

export const FeelingsEngine: React.FC = () => {
  const [selectedFeelingId, setSelectedFeelingId] = useState<string>('transcendental-solitude');

  const currentFeeling =
    feelingsData.find((f) => f.id === selectedFeelingId) || feelingsData[0];

  const matchedJourney =
    masterJourneysData.find((j) => j.id === currentFeeling.recommendedJourneyId) ||
    masterJourneysData[0];

  return (
    <section id="feelings-engine" className="py-28 bg-canvas-elevated border-y border-canvas-border relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-ochre">
            <Heart className="w-3.5 h-3.5" />
            <span>The Architecture of Restoration</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight">
            How do you wish to feel?
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink-muted leading-relaxed font-light">
            We do not begin with a map or an airport code. We begin with the emotional state you need to recover.
          </p>
        </div>

        {/* Emotion Switcher Tabs with Animated Highlight */}
        <div className="flex flex-wrap gap-3 mb-12">
          {feelingsData.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFeelingId(f.id)}
              className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border active:scale-95 ${
                selectedFeelingId === f.id
                  ? 'bg-paper-light text-ink-dark border-paper-light shadow-lg'
                  : 'bg-canvas-surface border-canvas-border text-ink-muted hover:text-paper-light hover:border-canvas-border-strong'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Dynamic Emotion Spotlight Card with Smooth AnimatePresence */}
        <div className="rounded-3xl surface-card p-8 sm:p-14 border border-canvas-border relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeeling.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Emotion Narrative Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="font-mono text-xs uppercase tracking-widest text-accent-ochre">
                    Emotional Resonance:
                  </div>
                  <h3 className="font-serif text-3xl sm:text-5xl text-paper-light font-normal leading-tight">
                    {currentFeeling.subtitle}
                  </h3>
                </div>

                <p className="font-sans text-base sm:text-lg text-ink-muted leading-relaxed font-light">
                  {currentFeeling.description}
                </p>

                {/* Philosophical Quote */}
                <div className="p-5 rounded-2xl bg-canvas border border-canvas-border relative">
                  <Quote className="w-6 h-6 text-accent-ochre/30 absolute top-3 right-4" />
                  <p className="font-serif italic text-lg text-paper-bone pr-8">
                    "{currentFeeling.quote}"
                  </p>
                </div>

                {/* Matched Territories */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                    Sanctuaries embodying this state:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentFeeling.matchedTerritories.map((terr, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-canvas-surface border border-canvas-border text-paper-light"
                      >
                        {terr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Matched Journey Card Preview */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-canvas border border-canvas-border-strong space-y-5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-accent-ochre">
                  Curated Route Recommendation:
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-serif text-2xl text-paper-light leading-snug">
                    {matchedJourney.title}
                  </h4>
                  <div className="text-xs font-mono text-ink-muted">
                    {matchedJourney.territory} • {matchedJourney.duration}
                  </div>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">
                  {matchedJourney.tagline}
                </p>

                <div className="pt-4 border-t border-canvas-border flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-ink-faint">All-Inclusive</div>
                    <div className="font-serif text-xl text-paper-light font-bold">
                      €{matchedJourney.price.toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => smoothScrollTo('itinerary-journal')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-paper-light border border-canvas-border hover:border-accent-ochre transition-colors group active:scale-95"
                  >
                    <span>Inspect Journal</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
