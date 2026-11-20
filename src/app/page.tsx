import React from 'react';
import { WorldClassHero } from '@/components/home/WorldClassHero';
import { HorizontalJourneyRail } from '@/components/home/HorizontalJourneyRail';
import { FeelingsEngine } from '@/components/home/FeelingsEngine';
import { CuratedRoutes } from '@/components/home/CuratedRoutes';
import { ItineraryJournal } from '@/components/home/ItineraryJournal';
import { BespokeJourneyPlanner } from '@/components/home/BespokeJourneyPlanner';
import { CuratorLedger } from '@/components/home/CuratorLedger';
import { PhilosophyManifesto } from '@/components/home/PhilosophyManifesto';
import { InquiryDrawer } from '@/components/home/InquiryDrawer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-paper-light selection:bg-accent-ochre selection:text-white">
      {/* 1. Mado & Framer Inspired: Kinetic Self-Describing Hero & Horizon Viewport */}
      <WorldClassHero />

      {/* 2. Awwwards Horizontal Rail: High-Proportion Editorial Exploration */}
      <HorizontalJourneyRail />

      {/* 3. Black Tomato Inspired: The Pursuit of Feeling (Emotion-led discovery) */}
      <FeelingsEngine />

      {/* 4. Tour Operator Inspired: Curated Human Routes ("Small on purpose. Local by design.") */}
      <CuratedRoutes />

      {/* 5. Pelorus Inspired: Daily Architecture & Deep Narrative Field Journal */}
      <ItineraryJournal />

      {/* 6. Bespoke Journey Architect: Interactive 3-Step Custom Route Planner */}
      <BespokeJourneyPlanner />

      {/* 7. Aman & Human Provenance Ledger: Master Curators, Naturalists & Guides */}
      <CuratorLedger />

      {/* 8. Quiet Luxury Manifesto: The 3 Non-Negotiable Commitments */}
      <PhilosophyManifesto />

      {/* 9. Frictionless Consultation & Direct Official Booking Desk */}
      <InquiryDrawer />
    </main>
  );
}
