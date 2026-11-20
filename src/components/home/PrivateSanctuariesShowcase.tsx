import React from 'react';
import Image from 'next/image';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { sanctuariesData } from '@/data/sanctuaries';

export const PrivateSanctuariesShowcase: React.FC = () => {
  return (
    <section id="sanctuaries" className="py-24 bg-arctic-900 border-t border-frost-line relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-aurora-cyan/10 text-aurora-cyan border border-aurora-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural Wilderness Sanctuaries</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight">
            WHERE WILDERNESS <br />
            MEETS SANCTUARY
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-glacier-200/90 font-normal">
            Cantilevered glass villas, ice-class explorer vessels, suspended boreal tree suites, and private volcanic mineral lagoons.
          </p>
        </div>

        {/* Sanctuaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sanctuariesData.map((sanc) => (
            <div
              key={sanc.id}
              className="rounded-3xl glass-panel border border-frost-line overflow-hidden group glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={sanc.image}
                    alt={sanc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arctic-950 via-arctic-950/30 to-transparent" />
                  <div className="absolute top-4 inset-x-4 flex justify-between items-center text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-arctic-950/80 backdrop-blur-md border border-frost-line text-frost">
                      {sanc.coordinates}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-aurora-green/20 backdrop-blur-md border border-aurora-green/40 text-aurora-green font-medium">
                      {sanc.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-glacier-400">
                      {sanc.location}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-frost">
                      {sanc.name}
                    </h3>
                  </div>

                  <p className="text-sm text-frost-muted leading-relaxed">
                    {sanc.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-mono uppercase text-frost-dark">
                      Sanctuary Architecture & Features:
                    </div>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-frost-muted">
                      {sanc.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-aurora-cyan shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4 border-t border-frost-line flex items-center justify-between text-xs font-mono text-frost-dark bg-arctic-950/40">
                <span>Capacity: {sanc.capacity}</span>
                <span className="text-aurora-green">Exclusive Guest Buyout Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
