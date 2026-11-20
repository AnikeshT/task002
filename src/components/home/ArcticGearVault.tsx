import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import { gearVaultData } from '@/data/gearVault';

export const ArcticGearVault: React.FC = () => {
  return (
    <section id="gear-vault" className="py-24 bg-arctic-950 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-aurora-green/10 text-aurora-green border border-aurora-green/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The High-Polar Equipment Locker</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight">
            NO COMPROMISE <br />
            ON ARCTIC WARMTH
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-glacier-200/90 font-normal">
            Every guest is outfitted with our extreme cold expedition kit upon touchdown. Rated to -40°C, custom sized, and completely complimentary.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearVaultData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-frost-line flex flex-col justify-between group glass-panel-hover"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-arctic-900 border border-frost-line text-aurora-cyan">
                    {item.category}
                  </span>
                  <span className="text-frost-dark">{item.brand}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-frost">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-aurora-green flex items-center gap-1.5 pt-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-frost-muted leading-relaxed">
                  {item.description}
                </p>

                <div className="p-3 rounded-xl bg-arctic-900/60 border border-frost-line/60 text-xs font-mono text-frost-dark">
                  <span className="text-frost-muted block font-semibold mb-0.5">TECHNICAL SPEC:</span>
                  {item.spec}
                </div>
              </div>

              <div className="pt-6 border-t border-frost-line/60 flex items-center justify-between text-xs font-mono text-aurora-green">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-aurora-green" />
                  <span>{item.inclusionsStatus}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
