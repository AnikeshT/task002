import React from 'react';
import { WorldClassHero } from '@/components/home/WorldClassHero';
import { HorizontalJourneyRail } from '@/components/home/HorizontalJourneyRail';
import { FeelingsEngine } from '@/components/home/FeelingsEngine';
import { CuratedRoutes } from '@/components/home/CuratedRoutes';
import { ItineraryJournal } from '@/components/home/ItineraryJournal';
import { BespokeJourneyPlanner } from '@/components/home/BespokeJourneyPlanner';
import { PhilosophyManifesto } from '@/components/home/PhilosophyManifesto';
import { InquiryDrawer } from '@/components/home/InquiryDrawer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-paper-light selection:bg-accent-ochre selection:text-white">
      {/* 1. Cinematic Aperture Hero & Horizon Perspective */}
      <WorldClassHero />

      {/* 2. Horizontal Journey Rail: Evocative Landscape Exploration */}
      <HorizontalJourneyRail />

      {/* 3. The Pursuit of Feeling: Emotion-First Journey Discovery */}
      <FeelingsEngine />

      {/* 4. Curated Human Routes: Scouted & Tested on Foot */}
      <CuratedRoutes />

      {/* 5. Daily Architecture & Field Journal */}
      <ItineraryJournal />

      {/* 6. Bespoke Journey Architect: Custom Route Composition */}
      <BespokeJourneyPlanner />

      {/* 7. Quiet Luxury Manifesto: The 3 Guiding Principles */}
      <PhilosophyManifesto />

      {/* 8. Direct Consultation & Official Booking Desk */}
      <InquiryDrawer />
    </main>
  );
}
