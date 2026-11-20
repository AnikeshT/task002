'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mountain, Compass, ShieldCheck } from 'lucide-react';
import { windowVistasData } from '@/data/windowVistas';
import { siteConfig } from '@/config/site';
import { smoothScrollTo } from '@/utils/smoothScroll';

export const WindowStage: React.FC = () => {
  const [activeVistaIndex, setActiveVistaIndex] = useState(0);

  const currentVista = windowVistasData[activeVistaIndex];

  return (
    <section id="window-stage" className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-16 overflow-hidden">
      {/* Background Architectural Window View with Smooth Motion Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVista.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentVista.image}
              alt={currentVista.destination}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft Vignette & Editorial Framing */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/45 to-canvas/75" />
      </div>

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Vista Telemetry & Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-canvas-border pb-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-ochre animate-pulse" />
            <span className="text-paper-light tracking-widest uppercase">
              {currentVista.eyebrow}
            </span>
            <span className="text-ink-faint">•</span>
            <span>{currentVista.coordinates}</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5 text-accent-ochre" />
              <span>{currentVista.elevation}</span>
            </span>
            <span className="text-ink-faint">•</span>
            <span className="text-paper-bone">
              Access: By Private Sanctioned Entry
            </span>
          </div>
        </div>

        {/* Hero Narrative Headline with Smooth AnimatePresence */}
        <div className="my-auto py-12 max-w-4xl space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVista.id + '-content'}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-accent-ochre">
                {currentVista.country} — {currentVista.seasonText}
              </div>

              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-paper-light font-normal tracking-tight leading-[1.02]">
                Travel begins <br />
                <span className="italic font-light text-paper-bone">beyond the window.</span>
              </h1>

              <p className="font-sans text-base sm:text-xl text-paper-muted font-light max-w-2xl leading-relaxed">
                {currentVista.tagline}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => smoothScrollTo('journeys')}
              className="px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest text-ink-dark bg-paper-light hover:bg-accent-ochre hover:text-white transition-all duration-300 shadow-xl flex items-center gap-2 group active:scale-95"
            >
              <span>Explore Route Portfolios</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => smoothScrollTo('feelings-engine')}
              className="px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest text-paper-light border border-canvas-border hover:border-canvas-border-strong hover:bg-white/5 transition-all duration-300 active:scale-95"
            >
              Discover by Emotion
            </button>
          </div>
        </div>

        {/* Bottom Pinned Panorama Switcher Rail (Mado Inspired) */}
        <div className="pt-8 border-t border-canvas-border">
          <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mb-3">
            Select Observation Aperture:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {windowVistasData.map((vista, idx) => (
              <button
                key={vista.id}
                onClick={() => setActiveVistaIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border active:scale-95 ${
                  activeVistaIndex === idx
                    ? 'bg-canvas-surface/90 border-accent-ochre shadow-xl'
                    : 'bg-canvas-elevated/40 border-canvas-border hover:bg-canvas-surface/60 hover:border-canvas-border-strong'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-ink-faint mb-1">
                  <span>0{idx + 1}</span>
                  <span className={activeVistaIndex === idx ? 'text-accent-ochre' : ''}>
                    {vista.country}
                  </span>
                </div>
                <div className="font-serif text-lg text-paper-light leading-snug line-clamp-1">
                  {vista.destination.split('&')[0]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
