export interface FaqItem {
  question: string;
  answer: string;
  category: 'Safety & Weather' | 'Gear & Preparation' | 'Booking & Flights' | 'Dietary & Comfort';
}

export const faqsData: FaqItem[] = [
  {
    category: 'Safety & Weather',
    question: 'How cold does it actually get, and is special physical conditioning required?',
    answer:
      'Temperatures range between -15°C (5°F) in Swedish Lapland and inland Svalbard down to -2°C to +3°C along coastal Iceland and Lofoten (warmed by the North Atlantic Current). None of our journeys require technical mountaineering skills unless specified under Active Heli-Expeditions. All guests are suited in bespoke Moncler/Canada Goose polar parkas, Baffin multi-layer thermal boots, and thermal wool underlayers, ensuring you remain warm and comfortable even in sub-zero Arctic conditions.',
  },
  {
    category: 'Gear & Preparation',
    question: 'What gear is provided, and what do I need to pack personally?',
    answer:
      'Nordvall provides our complete Extreme Arctic Kit upon arrival: Grade 5 down parkas, insulated windproof ski/snow pants, Baffin -50°C tundra boots, Petzl crampons, thermal touchscreen mittens, balaclavas, and Zeiss 10x42 optics. You only need to pack personal leisure clothing for inside the heated lodges, swimwear for the geothermal hot springs and saunas, and your passport.',
  },
  {
    category: 'Safety & Weather',
    question: 'What is your Aurora Borealis sighting success rate?',
    answer:
      'Because all our itineraries in Tromsø, Svalbard, and Swedish Lapland are positioned squarely within the auroral oval (66°–78° N) and our lodges are far from urban light pollution, our guests on 5+ night stays during the winter season (October to April) experience an average 94% sighting rate. Our teams track real-time satellite telemetry, solar wind density, and cloud movement to position excursions in clear sky zones.',
  },
  {
    category: 'Booking & Flights',
    question: 'How do flights and private airport transfers work?',
    answer:
      'Your expedition begins the moment you touch down. In Tromsø (TOS), Longyearbyen (LYR), Reykjavík (KEF), or Luleå (LLA), our private expedition chauffeur and host greet you at baggage collection in private Mercedes 4x4 or Tesla Model X vehicles. Dedicated private air charters and helicopter shuttles between bases are included as detailed in each itinerary.',
  },
  {
    category: 'Booking & Flights',
    question: 'What are your deposit terms, booking policies, and cancellation guarantees?',
    answer:
      'Departures can be reserved with a 25% deposit via our verified booking portal. Full payment is due 60 days before embarkation. We offer complimentary date changes up to 45 days prior to departure, and comprehensive Arctic travel insurance coverage is integrated with every ticket.',
  },
  {
    category: 'Dietary & Comfort',
    question: 'How are meals handled in remote polar wilderness locations?',
    answer:
      'Every expedition is accompanied by a private Nordic chef or hosted at curated Michelin-starred/Nordic White Guide sanctuaries. Menus celebrate fresh local delicacies including Arctic char, hand-dived King Crab, reindeer, and foraged wild lingonberries and cloudberries. All dietary requirements (vegan, vegetarian, gluten-free, halal, kosher) are catered to with elegance.',
  },
];
