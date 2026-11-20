import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Nordvall Expeditions privacy commitments and compliance protocols.',
};

export default function PrivacyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-aurora-cyan/10 text-aurora-cyan border border-aurora-cyan/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Arctic Traveler Security Protocol</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-frost">
            Privacy & Data Protection Policy
          </h1>
          <p className="text-xs font-mono text-frost-dark">
            Last Updated: November 2026 • Compliant with GDPR, Norwegian Personal Data Act & International Standards
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-frost-muted leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">1. Introduction & Scope</h2>
            <p>
              Nordvall Expeditions Group AS ("Nordvall", "we", "our") values the trust you place in us when exploring Earth’s extreme frontiers. This Privacy Policy outlines how we collect, safeguard, and process your personal and telemetry information across our websites and direct reservation desks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">2. Information We Collect</h2>
            <p>
              We collect information necessary to ensure your safety and provide peerless luxury expedition services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
              <li>Contact details (name, email address, international telephone number).</li>
              <li>Polar sizing metrics (parka, boot, crampon and drysuit sizes).</li>
              <li>Dietary requirements and emergency medical clearances for remote polar navigation.</li>
              <li>Flight schedules for private chauffeured transfers in Tromsø, Svalbard, Reykjavík, and Luleå.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">3. Satellite & Safety Telemetry</h2>
            <p>
              During active Arctic expeditions, our Garmin InReach and Iridium satellite communicators log positional coordinates solely for safety monitoring, Search and Rescue (SAR) readiness, and live route coordination with local maritime authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">4. Third-Party Booking Processors</h2>
            <p>
              All payment transactions and reservation deposits are processed via verified, PCI-DSS compliant direct operator desks. We do not store full credit card numbers on our local servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl text-frost">5. Your Legal Rights</h2>
            <p>
              Under European GDPR regulations, you maintain full rights to access, rectify, port, or request permanent erasure of your personal data at any time by contacting our concierge desk at <span className="text-glacier-300 font-mono">{siteConfig.supportEmail}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
