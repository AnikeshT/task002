'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, Sparkles, ArrowRight, ShieldCheck, ChevronRight, MapPin, Calendar, Users, Eye } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const HeroStage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState('All High Arctic');
  const [selectedSeason, setSelectedSeason] = useState('Polar Night & Aurora (Oct–Apr)');
  const [selectedExperience, setSelectedExperience] = useState('All Styles');

  const destinations = ['All High Arctic', 'Svalbard 78°N', 'Iceland Highlands', 'Tromsø & Lyngen', 'Swedish Lapland', 'Lofoten Archipelagos', 'Greenland Ice Sheet'];
  const seasons = ['Polar Night & Aurora (Oct–Apr)', 'Midnight Sun & Whales (Jun–Aug)', 'Autumn Glacial Season (Sep–Oct)'];
  const experiences = ['All Styles', 'Aurora Glass Sanctuaries', 'Ice-Class Explorer Yachts', 'Deep Glacial Ice Caves', 'Active Heli-Explorations'];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-20 overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=2400&q=85"
          alt="High Arctic Fjord and Aurora Borealis"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 transform animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arctic-950/80 via-arctic-950/60 to-arctic-950" />
        <div className="absolute inset-0 bg-radial-frost opacity-70 pointer-events-none" />
      </div>

      <div className="container-custom relative z-10 my-auto pt-8">
        {/* Top Eyebrow Telemetry Capsule */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-glacier-400/30 text-xs font-mono mb-8 animate-in fade-in slide-in-from-top-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-green"></span>
          </span>
          <span className="text-frost font-medium">HIGH ARCTIC DISPATCH:</span>
          <span className="text-glacier-300">POLAR EXPEDITIONS 2026/2027</span>
          <span className="text-frost-dark hidden sm:inline">•</span>
          <span className="text-aurora-green font-semibold hidden sm:inline">KP 5.6 AURORAL ACTIVITY ACTIVE</span>
        </div>

        {/* Hero Title & Editorial Narrative */}
        <div className="max-w-4xl space-y-6">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-frost tracking-tight leading-[1.05]">
            HAUTE POLAR <br />
            <span className="bg-gradient-to-r from-glacier-200 via-aurora-cyan to-aurora-violet bg-clip-text text-transparent">
              JOURNEYS INTO
            </span> <br />
            EARTH’S SILENCE.
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-glacier-100/90 font-normal max-w-2xl leading-relaxed">
            Private architectural glass sanctuaries beneath celestial lights, ice-class yachts through Svalbard fjords, and sub-glacial volcanic caverns.
          </p>

          <p className="text-sm sm:text-base text-frost-muted max-w-xl leading-relaxed font-sans">
            Curated exclusively for small groups of eight or fewer travelers. Complete extreme cold survival kit provided, accompanied by world-renowned glaciologists and private Nordic chefs.
          </p>
        </div>

        {/* Interactive Quick Discovery Console */}
        <div className="mt-12 p-4 sm:p-6 rounded-3xl glass-panel border border-frost-line-strong max-w-4xl shadow-2xl shadow-arctic-950/80 backdrop-blur-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Destination Selector */}
            <div className="space-y-1.5 p-3 rounded-2xl bg-arctic-900/60 border border-frost-line">
              <label className="text-[11px] font-mono uppercase tracking-wider text-frost-dark flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-glacier-400" />
                <span>Polar Territory</span>
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-frost focus:outline-none cursor-pointer"
              >
                {destinations.map((d) => (
                  <option key={d} value={d} className="bg-arctic-900 text-frost">
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Season Selector */}
            <div className="space-y-1.5 p-3 rounded-2xl bg-arctic-900/60 border border-frost-line">
              <label className="text-[11px] font-mono uppercase tracking-wider text-frost-dark flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-aurora-cyan" />
                <span>Expedition Season</span>
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-frost focus:outline-none cursor-pointer"
              >
                {seasons.map((s) => (
                  <option key={s} value={s} className="bg-arctic-900 text-frost">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Style Selector */}
            <div className="space-y-1.5 p-3 rounded-2xl bg-arctic-900/60 border border-frost-line">
              <label className="text-[11px] font-mono uppercase tracking-wider text-frost-dark flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-aurora-violet" />
                <span>Sanctuary Style</span>
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-frost focus:outline-none cursor-pointer"
              >
                {experiences.map((exp) => (
                  <option key={exp} value={exp} className="bg-arctic-900 text-frost">
                    {exp}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-frost-line/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono text-frost-muted">
              <span className="flex items-center gap-1 text-aurora-green">
                <span className="w-2 h-2 rounded-full bg-aurora-green inline-block" />
                <span>6 Master Expeditions Open</span>
              </span>
              <span className="hidden md:inline text-frost-dark">•</span>
              <span className="hidden md:inline">2026/2027 Bookings Active</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#expeditions"
                className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-frost-line hover:border-glacier-400 text-xs font-mono uppercase tracking-wider text-frost text-center hover:bg-white/5 transition-colors"
              >
                Explore Itineraries
              </a>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green text-arctic-950 font-mono text-xs font-bold uppercase tracking-wider text-center shadow-xl shadow-glacier-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 group"
              >
                <span>Reserve via Desk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Proof Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-frost-line grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-bold text-frost">Max 8</div>
            <div className="text-xs font-mono text-frost-muted uppercase tracking-wider">
              Travelers per Journey
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-bold text-aurora-green">94.2%</div>
            <div className="text-xs font-mono text-frost-muted uppercase tracking-wider">
              Aurora Sighting Rate
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-bold text-glacier-300">100%</div>
            <div className="text-xs font-mono text-frost-muted uppercase tracking-wider">
              Extreme Cold Kit Included
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-display text-2xl sm:text-3xl font-bold text-frost">78°N</div>
            <div className="text-xs font-mono text-frost-muted uppercase tracking-wider">
              Highest Latitude Reached
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
