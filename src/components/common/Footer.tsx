import React from 'react';
import Link from 'next/link';
import { Compass, ShieldCheck, ArrowUpRight, Globe, Award, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-arctic-950 border-t border-frost-line text-frost-muted pt-20 pb-12 relative overflow-hidden">
      {/* Background Aurora Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-aurora-gradient opacity-20 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-frost-line">
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-glacier-500/20 via-aurora-cyan/10 to-aurora-violet/20 border border-glacier-400/30 flex items-center justify-center text-glacier-300">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-wider text-frost flex items-center gap-2">
                  NORDVALL EXPEDITIONS
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-glacier-400">
                  Haute Polar Journeys & Arctic Sanctuaries
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-frost-muted/90 max-w-md">
              We design and execute uncompromising small-group and private expeditions across the High Arctic — Norway, Svalbard, Iceland, Swedish Lapland, and Greenland. Never more than 8 explorers, equipped with extreme polar technical gear and guided by certified glaciologists.
            </p>

            <div className="flex flex-col gap-2 font-mono text-xs text-frost-dark">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-glacier-400" />
                <span>Base Headquarters: {siteConfig.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-glacier-400" />
                <span>Concierge: {siteConfig.supportEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-glacier-400" />
                <span>Tromsø Dispatch Base: {siteConfig.emergencyPhone}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-aurora-green/10 text-aurora-green border border-aurora-green/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>UIAGM Certified Polar Guides</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-glacier-400/10 text-glacier-300 border border-glacier-400/20">
                <Globe className="w-3.5 h-3.5" />
                <span>100% Carbon Neutral</span>
              </span>
            </div>
          </div>

          {/* Expeditions Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-frost font-semibold">
              Master Expeditions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#expeditions" className="hover:text-frost transition-colors flex items-center gap-1 group">
                  <span>Svalbard 78°N Ice Yacht</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-frost transition-colors flex items-center gap-1 group">
                  <span>Iceland Fire & Ice Super-Jeeps</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-frost transition-colors flex items-center gap-1 group">
                  <span>Tromsø Glass Aurora Sanctuary</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-frost transition-colors flex items-center gap-1 group">
                  <span>Swedish Lapland Treehotel</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-frost transition-colors flex items-center gap-1 group">
                  <span>Lofoten Archipelagos Heli-Alpine</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-frost transition-colors flex items-center gap-1 group">
                  <span>Greenland Disko Bay Outpost</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-frost font-semibold">
              Exploration Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#aurora-hud" className="hover:text-frost transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-aurora-green" />
                  <span>Aurora Borealis Live HUD</span>
                </a>
              </li>
              <li>
                <a href="#route-explorer" className="hover:text-frost transition-colors">
                  Interactive Route Explorer
                </a>
              </li>
              <li>
                <a href="#bespoke-builder" className="hover:text-frost transition-colors">
                  Bespoke Journey Calculator
                </a>
              </li>
              <li>
                <a href="#sanctuaries" className="hover:text-frost transition-colors">
                  Private Architectural Sanctuaries
                </a>
              </li>
              <li>
                <a href="#gear-vault" className="hover:text-frost transition-colors">
                  The Polar Equipment Locker
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-frost transition-colors">
                  Expedition FAQ & Protocols
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Booking Desk Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-frost font-semibold">
              Verified Booking Portal
            </h4>
            <p className="text-xs text-frost-muted leading-relaxed">
              Every departure date and private charter reservation is routed through our verified operator staging desk with instant confirmation and transparent guarantee.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-glacier-500/20 to-aurora-cyan/20 border border-glacier-400/40 text-frost text-xs font-mono uppercase tracking-wider hover:border-glacier-400 hover:text-white transition-all w-full justify-center group"
            >
              <ShieldCheck className="w-4 h-4 text-aurora-cyan" />
              <span>Launch Booking Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="pt-2 flex flex-col gap-1 text-[11px] font-mono text-frost-dark">
              <span>Station KP-Index: 5.6</span>
              <span>Polar Coordinates: 69.6492° N</span>
              <span>Protocol: Safe Arctic Navigation</span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-frost-dark">
          <div>
            © {new Date().getFullYear()} Nordvall Expeditions Group AS. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-frost-muted transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-frost-muted transition-colors">
              Terms of Expedition
            </Link>
            <a href="#aurora-hud" className="hover:text-frost-muted transition-colors">
              Telemetry Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
