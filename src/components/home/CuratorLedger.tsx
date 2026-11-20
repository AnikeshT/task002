import React from 'react';
import Image from 'next/image';
import { Award, Compass, ShieldCheck } from 'lucide-react';

export const CuratorLedger: React.FC = () => {
  const curators = [
    {
      name: 'Kenjiro Sato',
      role: 'Kyoto Heritage & Zen Liaison',
      location: 'Kyoto, Japan',
      yearsActive: '34 Years in Kyoto',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      rule: '“Silence is not the absence of sound; it is the presence of attention. When we enter a 400-year-old temple at dawn, we do not speak until the monk rings the bronze bell.”',
    },
    {
      name: 'Dr. Freja Lindholm',
      role: 'Head Glaciologist & Polar Master',
      location: 'Longyearbyen, Svalbard',
      yearsActive: '19 Arctic Expeditions',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      rule: '“The high Arctic does not care about schedules. We read the ice pack hour by hour. Safety is not a compromise; it is what allows us to experience the wild with total peace of mind.”',
    },
    {
      name: 'Mateo Valenzuela',
      role: 'Patagonian Fjord & Alpine Guide',
      location: 'Puerto Natales, Chile',
      yearsActive: '22 Years in Magallanes',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      rule: '“You cannot rush Patagonia. You let the wind strip away the noise of your everyday life until all that remains is the blue granite and the sound of calving ice.”',
    },
    {
      name: 'Chef Beatrix von Allmen',
      role: 'Alpine Foraging & Sommelier',
      location: 'St. Moritz, Switzerland',
      yearsActive: 'Michelin Star Alumna',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      rule: '“Every dish we prepare in our remote mountain huts tells the story of the valley — wild mountain pine, alpine lake trout, and cheeses aged in cellars you can only reach on foot.”',
    },
  ];

  return (
    <section id="curators" className="py-28 bg-canvas relative overflow-hidden border-t border-canvas-border">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-ochre">
            <Award className="w-3.5 h-3.5" />
            <span>Human-Crafted Provenance</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight">
            The Master Curators
          </h2>
          <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
            You are not guided by temporary seasonal staff. You travel alongside dedicated scholars, glaciologists, and guardians who have lived in these territories for decades.
          </p>
        </div>

        {/* Curators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {curators.map((c, idx) => (
            <div
              key={idx}
              className="rounded-3xl surface-card border border-canvas-border overflow-hidden flex flex-col justify-between group surface-hover"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-elevated via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-widest text-accent-ochre bg-canvas/80 px-2 py-0.5 rounded border border-canvas-border">
                    {c.yearsActive}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-2xl text-paper-light font-normal">
                      {c.name}
                    </h3>
                    <div className="text-xs text-ink-muted font-light">
                      {c.role}
                    </div>
                  </div>

                  <p className="font-serif italic text-xs text-paper-bone/90 leading-relaxed pt-2 border-t border-canvas-border">
                    {c.rule}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-3 border-t border-canvas-border/50 text-[11px] font-mono text-ink-faint flex items-center justify-between">
                <span>{c.location}</span>
                <ShieldCheck className="w-4 h-4 text-accent-ochre" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
