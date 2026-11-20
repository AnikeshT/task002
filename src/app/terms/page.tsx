import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Terms of Expedition',
  description: 'Nordvall Expeditions terms, conditions, and polar safety charter.',
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-arctic-950 text-frost min-h-screen">
      <div className="container-custom max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-glacier-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Expeditions</span>
        </Link>

        <div className="space-y-4 mb-10 pb-6 border-b border-frost-line">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-aurora-green/10 text-aurora-green border border-aurora-green/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Expedition Charter</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-frost">
            Terms & Conditions of Polar Expedition
          </h1>
          <p className="text-xs font-mono text-frost-dark">
            Applicable to all 2026/2027 Svalbard, Norway, Iceland, Sweden & Greenland Expeditions
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-frost-muted leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">1. Reservation & Deposit Schedule</h2>
            <p>
              A 25% deposit secures your expedition departure. The remaining balance is payable 60 days before the scheduled departure date. For bookings confirmed within 60 days of embarkation, full payment is required upon reservation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">2. Flexible Date Alterations & Cancellation</h2>
            <p>
              We understand that international expedition schedules require flexibility. You may change your departure date without penalty up to 45 days prior to embarkation. Cancellations received greater than 60 days prior are refunded less a 5% administrative handling fee.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">3. Polar Weather & Route Adjustments</h2>
            <p>
              Arctic nature is magnificent and dynamic. In the event of severe sea ice conditions, blizzards, or extreme geomagnetic turbulence, our certified UIAGM expedition leaders reserve the right to alter routes to prioritize safety while ensuring equivalent high-standard experiences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">4. Wildlife & Environmental Stewardship Charter</h2>
            <p>
              Nordvall adheres strictly to AECO (Association of Arctic Expedition Cruise Operators) protocols. We maintain respectful distances from polar bears, walruses, whales, and sea eagles. Feeding, harassing, or leaving footprints on delicate tundra lichen is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">5. Mandatory Medical & Travel Coverage</h2>
            <p>
              Comprehensive travel insurance including medical evacuation coverage up to €100,000 is required for all travelers embarking on High Arctic expeditions above 66°N latitude.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
