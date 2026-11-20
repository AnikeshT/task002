import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Compass, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Inquiry Received',
  description: 'Thank you for your expedition inquiry with Nordvall Expeditions.',
};

export default function ThankYouPage() {
  return (
    <div className="py-24 bg-arctic-950 text-frost min-h-screen flex items-center justify-center">
      <div className="container-custom max-w-2xl text-center space-y-8 p-8 sm:p-12 rounded-3xl glass-panel border border-frost-line">
        <div className="w-16 h-16 rounded-2xl bg-aurora-green/20 border border-aurora-green/40 flex items-center justify-center text-aurora-green mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-aurora-cyan">
            Telemetry Dispatch Confirmed
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-frost">
            Your Arctic Inquiry Has Been Received
          </h1>
          <p className="text-sm sm:text-base text-frost-muted leading-relaxed font-sans max-w-lg mx-auto">
            Our Senior Expedition Director in Tromsø is reviewing your route preferences and will furnish your bespoke dossier within 12 hours.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-arctic-900/60 border border-frost-line text-xs font-mono text-frost-dark space-y-2">
          <div className="flex items-center justify-center gap-2 text-frost">
            <Mail className="w-4 h-4 text-glacier-400" />
            <span>Concierge: {siteConfig.supportEmail}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-frost">
            <Phone className="w-4 h-4 text-glacier-400" />
            <span>Direct Dispatch: {siteConfig.emergencyPhone}</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-frost-line hover:border-glacier-400 text-xs font-mono uppercase tracking-wider text-frost hover:bg-white/5 transition-all"
          >
            Return to Expeditions
          </Link>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-glacier-300 via-aurora-cyan to-aurora-green text-arctic-950 font-mono text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5"
          >
            <span>Proceed to Booking Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
