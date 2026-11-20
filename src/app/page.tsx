import React from 'react';
import { HeroStage } from '@/components/home/HeroStage';
import { AuroraLiveHUD } from '@/components/home/AuroraLiveHUD';
import { CuratedExpeditions } from '@/components/home/CuratedExpeditions';
import { InteractiveRouteExplorer } from '@/components/home/InteractiveRouteExplorer';
import { BespokeExpeditionBuilder } from '@/components/home/BespokeExpeditionBuilder';
import { PrivateSanctuariesShowcase } from '@/components/home/PrivateSanctuariesShowcase';
import { ArcticGearVault } from '@/components/home/ArcticGearVault';
import { ExplorerTestimonials } from '@/components/home/ExplorerTestimonials';
import { FaqSection } from '@/components/home/FaqSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-arctic-950 text-frost selection:bg-aurora-cyan selection:text-arctic-950">
      {/* 1. Cinematic Atmospheric Hero Stage */}
      <HeroStage />

      {/* 2. Real-Time Aurora Borealis & Geomagnetic HUD */}
      <AuroraLiveHUD />

      {/* 3. Flagship Curated Polar Expeditions */}
      <CuratedExpeditions />

      {/* 4. Day-by-Day Interactive Route & Waypoint Architecture */}
      <InteractiveRouteExplorer />

      {/* 5. Bespoke 3-Step Expedition Calculator */}
      <BespokeExpeditionBuilder />

      {/* 6. Private Architectural Sanctuaries & Explorer Vessels */}
      <PrivateSanctuariesShowcase />

      {/* 7. The High-Polar Technical Equipment Locker */}
      <ArcticGearVault />

      {/* 8. Field Dispatches & Verified Explorer Logs */}
      <ExplorerTestimonials />

      {/* 9. Expedition Travel Intelligence FAQ */}
      <FaqSection />

      {/* 10. Grand Departure Conversion Section */}
      <CtaBanner />
    </main>
  );
}
