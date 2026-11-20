import React from 'react';
import Image from 'next/image';
import { Compass, ShieldCheck, ArrowUpRight, Sparkles, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-24 bg-arctic-900 relative overflow-hidden border-t border-frost-line">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=2000&q=80"
          alt="Aurora Over Arctic Fjords"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arctic-950 via-arctic-900/80 to-arctic-900" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-8 sm:p-14 rounded-3xl glass-panel border border-frost-line-strong shadow-2xl backdrop-blur-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-aurora-green/20 text-aurora-green border border-aurora-green/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 / 2027 Polar Season Now Open</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight leading-tight">
            THE SILENCE OF THE <br />
            HIGH ARCTIC IS CALLING.
          </h2>

          <p className="font-serif italic text-lg sm:text-2xl text-glacier-100 font-normal max-w-2xl mx-auto leading-relaxed">
            Reserve your place beneath the auroral oval. Eight travelers per journey, bespoke extreme cold kits, and certified polar masters.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green text-arctic-950 font-mono text-sm font-bold uppercase tracking-wider shadow-2xl shadow-glacier-400/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <ShieldCheck className="w-5 h-5 text-arctic-950" />
              <span>Reserve via Official Booking Desk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#bespoke-builder"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-frost-line hover:border-glacier-400 text-xs font-mono uppercase tracking-wider text-frost hover:bg-white/5 transition-all"
            >
              Open Bespoke Route Builder
            </a>
          </div>

          <div className="pt-8 border-t border-frost-line/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-frost-muted">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-glacier-400" />
              <span>{siteConfig.supportEmail}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-glacier-400" />
              <span>{siteConfig.emergencyPhone}</span>
            </span>
            <span>•</span>
            <span>Tromsø 69°N & Svalbard 78°N</span>
          </div>
        </div>
      </div>
    </section>
  );
};
