import React from 'react';
import { ShieldCheck, Compass, Heart, Globe, Award } from 'lucide-react';

export const PhilosophyManifesto: React.FC = () => {
  return (
    <section id="philosophy" className="py-28 bg-canvas relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Eyebrow & Manifesto Heading */}
          <div className="text-center space-y-6">
            <div className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-accent-ochre">
              The KAIROS Charter & Philosophy
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight leading-tight">
              We do not sell tourism. <br />
              <span className="italic font-light text-paper-bone">
                We orchestrate rare encounters with the quietest corners of our planet.
              </span>
            </h2>
          </div>

          {/* Core Commitments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl surface-card border border-canvas-border space-y-4">
              <div className="font-serif text-3xl font-light text-accent-ochre">01</div>
              <h3 className="font-serif text-2xl text-paper-light font-normal">
                Strictly Eight Explorers
              </h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed font-light">
                Large tour buses and megaphone crowds destroy the soul of travel. By capping every group at eight, we enter private tea houses, private icebreakers, and hidden temples as welcome guests, never as an intrusion.
              </p>
            </div>

            <div className="p-8 rounded-3xl surface-card border border-canvas-border space-y-4">
              <div className="font-serif text-3xl font-light text-accent-ochre">02</div>
              <h3 className="font-serif text-2xl text-paper-light font-normal">
                100% Scouted on Foot
              </h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed font-light">
                Every mountain path, ryokan bath, and fjord landing in our collection has been scouted, tested, and vetted personally by our founding team. If an experience doesn't give us goosebumps, it never appears in our portfolio.
              </p>
            </div>

            <div className="p-8 rounded-3xl surface-card border border-canvas-border space-y-4">
              <div className="font-serif text-3xl font-light text-accent-ochre">03</div>
              <h3 className="font-serif text-2xl text-paper-light font-normal">
                Conservation & Living Heritage
              </h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed font-light">
                A percentage of every journey directly funds indigenous trail preservation in Yakushima, glaciology research in Svalbard, and traditional architectural restoration in Kyoto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
