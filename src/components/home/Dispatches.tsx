import React from 'react';
import { Quote, Star, ShieldCheck } from 'lucide-react';

export const Dispatches: React.FC = () => {
  const dispatches = [
    {
      author: 'Dr. Evelyn & Marcus Vance',
      role: 'Biophysicist & Architect',
      origin: 'San Francisco & London',
      journey: 'Kyoto & Yakushima: The Path of Sacred Stillness',
      quote:
        'Walking into the temple gardens of Daitoku-ji at dawn before the city woke up, hearing the monk strike the temple bell while morning mist curled off the moss, changed something fundamental inside me. The hospitality was discreet, timeless, and utterly immaculate.',
      coordinates: '35.0116° N, 135.7681° E',
    },
    {
      author: 'Julian & Claire Thorne',
      role: 'Private Collector & Vintner',
      origin: 'Geneva, Switzerland',
      journey: 'Patagonia: Southern Icefield & Fjords',
      quote:
        'Navigating through the icebergs of Ultima Esperanza on our private catamaran, followed by evenings in a wood-fired hot tub watching the Southern Cross above the granite spires, is the single greatest travel experience of our lives.',
      coordinates: '51.2532° S, 72.8814° W',
    },
    {
      author: 'Henrik Lindqvist',
      role: 'Furniture Designer',
      origin: 'Stockholm, Sweden',
      journey: 'Swiss Engadin & Zermatt: Glacial Sanctuaries',
      quote:
        'The silence of the high Engadin in mid-winter is unlike anywhere else on Earth. The private panoramic Glacier Express carriage and the thermal granite baths were curated to the highest architectural standards.',
      coordinates: '46.4908° N, 9.8355° E',
    },
  ];

  return (
    <section id="dispatches" className="py-28 bg-canvas-elevated border-t border-canvas-border relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-ochre">
            <Quote className="w-3.5 h-3.5" />
            <span>Condé Nast Traveler Style Guest Dispatches</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-paper-light font-normal tracking-tight">
            Voices from the Field
          </h2>
          <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
            Reflections from discerning travelers who stepped beyond the ordinary window with us.
          </p>
        </div>

        {/* Dispatches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dispatches.map((disp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl surface-card border border-canvas-border flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-ink-faint">
                  <span>DISPATCH 0{idx + 1}</span>
                  <span>{disp.coordinates}</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-paper-bone/95 leading-relaxed">
                  "{disp.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-canvas-border space-y-1">
                <div className="font-serif text-lg text-paper-light font-medium flex items-center gap-2">
                  <span>{disp.author}</span>
                  <ShieldCheck className="w-4 h-4 text-accent-ochre" />
                </div>
                <div className="text-xs text-ink-muted">
                  {disp.role} • {disp.origin}
                </div>
                <div className="text-[11px] font-mono text-accent-ochre/80 pt-1">
                  {disp.journey}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
