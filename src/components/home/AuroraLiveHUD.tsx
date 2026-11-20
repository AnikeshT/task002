'use client';

import React, { useState } from 'react';
import { Radio, Zap, Wind, Eye, Compass, CloudRain, Sparkles, Activity } from 'lucide-react';

export const AuroraLiveHUD: React.FC = () => {
  const [activeStation, setActiveStation] = useState<'tromso' | 'svalbard' | 'iceland' | 'lapland'>('tromso');

  const stations = [
    {
      id: 'tromso',
      name: 'Tromsø, Norway (69.6° N)',
      kp: '5.6',
      status: 'High Aurora Activity',
      sky: 'Clear / 8% Cloud Cover',
      wind: '482 km/s',
      bz: '-6.4 nT (Optimal Southward)',
      prob: '96%',
      verdict: 'Luminous dynamic green & violet auroral curtains visible to the naked eye.',
    },
    {
      id: 'svalbard',
      name: 'Longyearbyen, Svalbard (78.2° N)',
      kp: '5.8',
      status: 'Day & Night Auroral Oval',
      sky: 'Partly Clear / 15% Clouds',
      wind: '510 km/s',
      bz: '-8.1 nT (Strong Southward)',
      prob: '98%',
      verdict: 'Deep polar night darkness enables midday coronal auroral viewing.',
    },
    {
      id: 'iceland',
      name: 'Katla Glacier, Iceland (63.9° N)',
      kp: '5.2',
      status: 'Active Geomagnetic Storm',
      sky: 'Scattered / 22% Cloud',
      wind: '465 km/s',
      bz: '-4.8 nT (Southward)',
      prob: '91%',
      verdict: 'Pulsing emerald arcs reflected across volcanic ice fields and black sands.',
    },
    {
      id: 'lapland',
      name: 'Jukkasjärvi, Sweden (67.8° N)',
      kp: '5.4',
      status: 'Substorm In Progress',
      sky: 'Optimal / 5% Cloud Cover',
      wind: '490 km/s',
      bz: '-5.7 nT (Southward)',
      prob: '95%',
      verdict: 'Slowly undulating ribbons rippling directly across the boreal forest canopy.',
    },
  ];

  const current = stations.find((s) => s.id === activeStation) || stations[0];

  return (
    <section id="aurora-hud" className="py-20 bg-arctic-900 border-y border-frost-line relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-aurora-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-aurora-violet/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-aurora-green/10 text-aurora-green border border-aurora-green/30">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time Polar Telemetry</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-frost tracking-tight">
              AURORA BOREALIS <br className="hidden sm:inline" />
              LIVE OBSERVATION HUD
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-glacier-200/90 font-normal max-w-xl">
              Solar wind velocity, planetary K-index dials, and celestial viewing forecasts across our expedition corridors.
            </p>
          </div>

          {/* Station Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel border border-frost-line self-start md:self-auto">
            {stations.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveStation(st.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeStation === st.id
                    ? 'bg-gradient-to-r from-glacier-500/30 to-aurora-green/30 border border-glacier-400/50 text-white shadow-lg'
                    : 'text-frost-muted hover:text-white'
                }`}
              >
                {st.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main KP Dial Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-frost-line-strong relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-frost-muted">
                <span className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-aurora-green animate-pulse" />
                  <span>MAGNETOMETER STATION: {current.name}</span>
                </span>
                <span className="text-aurora-cyan uppercase">{current.status}</span>
              </div>

              {/* Big KP Gauge Visual */}
              <div className="py-6 flex items-baseline gap-4">
                <div className="font-display font-extrabold text-7xl sm:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-frost via-aurora-green to-aurora-cyan">
                  {current.kp}
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xs uppercase tracking-wider text-frost-muted">
                    PLANETARY K-INDEX
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-aurora-green/20 text-aurora-green font-mono text-xs font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>OPTIMAL INTENSITY</span>
                  </div>
                </div>
              </div>

              {/* KP Bar Visual (Scale 0 to 9) */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-frost-dark">
                  <span>KP 0 (Quiet)</span>
                  <span>KP 5 (Storm)</span>
                  <span>KP 9 (Severe)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-arctic-950 p-0.5 border border-frost-line">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-glacier-400 via-aurora-cyan to-aurora-green transition-all duration-700 shadow-md shadow-aurora-green/50"
                    style={{ width: `${(parseFloat(current.kp) / 9) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-frost-line/60">
              <div className="text-xs font-mono uppercase tracking-wider text-frost-muted mb-1">
                Expedition Astronomer Brief:
              </div>
              <p className="text-sm text-frost leading-relaxed">
                {current.verdict}
              </p>
            </div>
          </div>

          {/* Environmental Telemetry Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Metric 1: Solar Wind Velocity */}
            <div className="p-6 rounded-2xl glass-panel border border-frost-line flex flex-col justify-between">
              <div className="flex items-center justify-between text-frost-dark mb-4">
                <span className="text-xs font-mono uppercase tracking-wider">Solar Wind Speed</span>
                <Wind className="w-4 h-4 text-glacier-400" />
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl sm:text-4xl font-bold text-frost">
                  {current.wind}
                </div>
                <p className="text-xs text-frost-muted">
                  Particles ejecting from coronal solar holes directly exciting atmospheric oxygen atoms.
                </p>
              </div>
            </div>

            {/* Metric 2: Magnetic Field Orientation (Bz) */}
            <div className="p-6 rounded-2xl glass-panel border border-frost-line flex flex-col justify-between">
              <div className="flex items-center justify-between text-frost-dark mb-4">
                <span className="text-xs font-mono uppercase tracking-wider">Interplanetary Bz</span>
                <Compass className="w-4 h-4 text-aurora-violet" />
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl sm:text-4xl font-bold text-aurora-violet">
                  {current.bz}
                </div>
                <p className="text-xs text-frost-muted">
                  Southward pointing magnetic vectors cancel Earth’s shield, channeling brilliant plasma streams.
                </p>
              </div>
            </div>

            {/* Metric 3: Sky Clearness */}
            <div className="p-6 rounded-2xl glass-panel border border-frost-line flex flex-col justify-between">
              <div className="flex items-center justify-between text-frost-dark mb-4">
                <span className="text-xs font-mono uppercase tracking-wider">Cloud Cover & Transparency</span>
                <CloudRain className="w-4 h-4 text-aurora-cyan" />
              </div>
              <div className="space-y-1">
                <div className="font-display text-2xl sm:text-3xl font-bold text-frost">
                  {current.sky}
                </div>
                <p className="text-xs text-frost-muted">
                  Monitored via infrared satellite scans to reposition night excursions to cloudless inland microclimates.
                </p>
              </div>
            </div>

            {/* Metric 4: Sighting Probability */}
            <div className="p-6 rounded-2xl glass-panel border border-frost-line flex flex-col justify-between">
              <div className="flex items-center justify-between text-frost-dark mb-4">
                <span className="text-xs font-mono uppercase tracking-wider">Calculated Viewing Probability</span>
                <Eye className="w-4 h-4 text-aurora-green" />
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl sm:text-4xl font-bold text-aurora-green">
                  {current.prob}
                </div>
                <p className="text-xs text-frost-muted">
                  Combined algorithmic confidence score for guests occupying our private glass ceiling suites tonight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
