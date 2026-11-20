import React from 'react';
import { WindowStage } from '@/components/home/WindowStage';
import { FeelingsEngine } from '@/components/home/FeelingsEngine';
import { CuratedRoutes } from '@/components/home/CuratedRoutes';
import { ItineraryJournal } from '@/components/home/ItineraryJournal';
import { PhilosophyManifesto } from '@/components/home/PhilosophyManifesto';
import { Dispatches } from '@/components/home/Dispatches';
import { InquiryDrawer } from '@/components/home/InquiryDrawer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-paper-light selection:bg-accent-ochre selection:text-white">
      {/* 1. Mado Inspired: The Perspective Window Stage */}
      <WindowStage />

      {/* 2. Black Tomato Inspired: The Pursuit of Feeling (Emotion-led discovery) */}
      <FeelingsEngine />

      {/* 3. Tour Operator Inspired: Curated Human Routes ("Small on purpose. Local by design.") */}
      <CuratedRoutes />

      {/* 4. Pelorus Inspired: Daily Architecture & Narrative Field Journal */}
      <ItineraryJournal />

      {/* 5. Aman / Belmond Inspired: Quiet Luxury Manifesto & Commitments */}
      <PhilosophyManifesto />

      {/* 6. Condé Nast Traveler Inspired: Verified Field Dispatches */}
      <Dispatches />

      {/* 7. Frictionless High-Touch Consultation & Official Booking Desk */}
      <InquiryDrawer />
    </main>
  );
}
