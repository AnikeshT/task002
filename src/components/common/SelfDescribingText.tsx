'use client';

import React, { useState, useEffect } from 'react';

interface SelfDescribingTextProps {
  phrases?: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const SelfDescribingText: React.FC<SelfDescribingTextProps> = ({
  phrases = [
    'EARTH’S SACRED SILENCE.',
    'ANCIENT KYOTO PAGODAS.',
    'PATAGONIAN GLACIAL FJORDS.',
    'HIGH SWISS ALPINE CHALETS.',
    'SVALBARD 78°N SEA ICE.',
  ],
  typingSpeed = 70,
  pauseDuration = 2200,
  className = '',
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = phrases[currentPhraseIndex];

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases, typingSpeed, pauseDuration]);

  return (
    <span className={`inline-block ${className}`}>
      <span className="italic font-light text-accent-ochre">
        {displayedText}
      </span>
      <span className="inline-block w-0.5 h-7 sm:h-12 ml-1 -mb-1 bg-accent-ochre animate-pulse" />
    </span>
  );
};
