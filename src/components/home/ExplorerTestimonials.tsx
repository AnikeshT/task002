import React from 'react';
import { Star, ShieldCheck, Quote, Compass } from 'lucide-react';
import { reviewsData } from '@/data/reviews';

export const ExplorerTestimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-arctic-900 border-t border-frost-line relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-aurora-green/10 text-aurora-green border border-aurora-green/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Field Dispatches & Guest Logs</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight">
            VOICES FROM THE <br />
            78TH PARALLEL
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-glacier-200/90 font-normal">
            Reflections from seasoned international travelers who entrusted their Arctic expeditions to our master guides.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="p-8 sm:p-10 rounded-3xl glass-panel border border-frost-line flex flex-col justify-between group glass-panel-hover"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-hearth-amber">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-frost-dark">
                    {rev.coordinates}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-glacier-400/20 absolute -top-4 -left-2 -z-0" />
                  <p className="font-serif italic text-base sm:text-lg text-frost/95 leading-relaxed relative z-10">
                    "{rev.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-frost-line/60 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-frost flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <ShieldCheck className="w-4 h-4 text-aurora-green" />
                  </div>
                  <div className="text-xs text-frost-muted">
                    {rev.role} • {rev.location}
                  </div>
                  <div className="text-[11px] font-mono text-aurora-cyan mt-1">
                    Expedition: {rev.journey}
                  </div>
                </div>

                <div className="text-right text-[11px] font-mono text-frost-dark">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
