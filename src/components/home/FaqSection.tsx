'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';
import { faqsData } from '@/data/faqs';
import { siteConfig } from '@/config/site';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-arctic-950 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-glacier-400/10 text-glacier-300 border border-glacier-400/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Arctic Travel Intelligence</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-frost tracking-tight">
            FREQUENTLY ASKED <br />
            EXPEDITION QUESTIONS
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-glacier-200/90 font-normal">
            Essential clarity on thermal conditions, equipment protocols, aurora probability, and booking terms.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqsData.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel border border-frost-line overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-aurora-cyan">
                    [{String(idx + 1).padStart(2, '0')}]
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-frost">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-glacier-400 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-aurora-green' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 sm:px-7 pb-6 pt-2 text-sm sm:text-base text-frost-muted leading-relaxed font-sans border-t border-frost-line/40 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                  <div className="mt-4 pt-3 border-t border-frost-line/30 flex items-center justify-between text-xs font-mono text-frost-dark">
                    <span>Category: {faq.category}</span>
                    <a
                      href={siteConfig.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-glacier-300 hover:text-white transition-colors"
                    >
                      Inquire via Concierge Desk →
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
