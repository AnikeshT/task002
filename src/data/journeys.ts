export interface MasterJourney {
  id: string;
  title: string;
  territory: string;
  country: string;
  coordinates: string;
  duration: string;
  groupLimit: number;
  feeling: 'Transcendental Solitude' | 'Untamed Wonder' | 'Restorative Stillness' | 'Kinetic Discovery';
  price: number;
  priceCurrency: string;
  heroImage: string;
  tagline: string;
  narrativeOverview: string;
  dailyArchitecture: {
    day: number;
    title: string;
    narrative: string;
    sanctuaryStay: string;
  }[];
  departures: {
    dates: string;
    availability: string;
    spotsRemaining: number;
  }[];
}

export const masterJourneysData: MasterJourney[] = [
  {
    id: 'kyoto-zen-odyssey',
    title: 'Kyoto & Yakushima: The Path of Sacred Stillness',
    territory: 'Kansai & Ancient Cedar Islands',
    country: 'Japan',
    coordinates: '35.0116° N, 135.7681° E',
    duration: '8 Days / 7 Nights',
    groupLimit: 6,
    feeling: 'Transcendental Solitude',
    price: 6200,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Private dawn audiences in 400-year-old Zen temples, mountain ryokans, and the primeval moss forests of Yakushima.',
    narrativeOverview:
      'A pilgrimage beyond ordinary tourism. We bypass public crowds with private after-hours temple access granted through our relationships with abbot lineages in Kyoto, followed by private air transfer to the UNESCO biosphere of Yakushima.',
    dailyArchitecture: [
      {
        day: 1,
        title: 'Arrival in Kyoto & Private Ryokan Welcome',
        narrative: 'Private chauffeured transfer from Kansai International to our private riverside machiya. Kaiseki dinner curated by Master Chef Morimoto.',
        sanctuaryStay: 'Hoshinoya Kyoto Private Riverside Suite',
      },
      {
        day: 2,
        title: 'Dawn Meditation at Daitoku-ji & Tea Mastery',
        narrative: 'Enter the temple garden at 6:00 AM before gates open. Private meditation guided by senior monks, followed by an authentic Sen-ke tea ceremony.',
        sanctuaryStay: 'Hoshinoya Kyoto Private Riverside Suite',
      },
      {
        day: 3,
        title: 'Arashiyama Bamboo Forest at Twilight & Calligraphy',
        narrative: 'Private boat punt along the Oi River into secluded gorges. Evening private calligraphy masterclass with Japanese ink artisan.',
        sanctuaryStay: 'Sowaka Heritage Luxury Ryokan',
      },
      {
        day: 4,
        title: 'Charter Flight to Yakushima Cedar Island',
        narrative: 'Fly south to the mystical mist-shrouded island of ancient Japanese cedars. Forest bathing among 3,000-year-old Jomon Sugi trees.',
        sanctuaryStay: 'Sankara Hotel & Forest Spa Villa',
      },
      {
        day: 5,
        title: 'Moss Forest of Shiratani Unsuikyo',
        narrative: 'Guided trek through emerald ravines carpeted in primordial moss. Gourmet bento lunch beside a cascading mountain waterfall.',
        sanctuaryStay: 'Sankara Hotel & Forest Spa Villa',
      },
      {
        day: 6,
        title: 'Ocean Onsen & Coastal Sunset Reflection',
        narrative: 'Natural tidal hot springs submerged at high tide and revealed at sunset. Private cedar-smoked fish tasting on the beach.',
        sanctuaryStay: 'Sankara Hotel & Forest Spa Villa',
      },
      {
        day: 7,
        title: 'Return to Tokyo or Kyoto & Farewell Feast',
        narrative: 'Private return flight. Farewell 10-course seasonal omakase celebration with paired boutique sake.',
        sanctuaryStay: 'Aman Tokyo Panoramic Suite',
      },
      {
        day: 8,
        title: 'Departure & Chauffeur Transfer',
        narrative: 'Private VIP airport connection with custom handcrafted calligraphy scroll gifted by the master.',
        sanctuaryStay: 'Departure',
      },
    ],
    departures: [
      { dates: 'Oct 14 – Oct 21, 2026', availability: 'Last 2 Spots', spotsRemaining: 2 },
      { dates: 'Nov 10 – Nov 17, 2026', availability: 'Filling Fast', spotsRemaining: 3 },
      { dates: 'Apr 04 – Apr 11, 2027', availability: 'Available', spotsRemaining: 5 },
    ],
  },
  {
    id: 'patagonia-icefield-fjord',
    title: 'Patagonia: Southern Icefield & Fjords by Private Catamaran',
    territory: 'Magallanes & Chilean Fjords',
    country: 'Chile & Argentina',
    coordinates: '51.2532° S, 72.8814° W',
    duration: '9 Days / 8 Nights',
    groupLimit: 8,
    feeling: 'Untamed Wonder',
    price: 7400,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Private catamaran navigation through labyrinthine glacial fjords and architectural wilderness lodges beneath the granite horns.',
    narrativeOverview:
      'Where the South American continent dissolves into sea ice, glaciers, and wild Southern Ocean winds. We combine private expedition navigation with stays at award-winning architectural sanctuaries overlooking Torres del Paine.',
    dailyArchitecture: [
      {
        day: 1,
        title: 'Touchdown in Punta Arenas & Transfer to Puerto Natales',
        narrative: 'Private Mercedes Sprinter through the Patagonian steppe. Spotting flocks of flamingos and wild rhea. Welcome asado dinner.',
        sanctuaryStay: 'The Singular Patagonia Historic Master Suite',
      },
      {
        day: 2,
        title: 'Boarding Private Ice-Class Catamaran',
        narrative: 'Cruise through Ultima Esperanza Sound toward Balmaceda and Serrano glaciers. Whiskey over thousand-year-old glacier ice.',
        sanctuaryStay: 'M/V Patagonia Explorer Vessel',
      },
      {
        day: 3,
        title: 'Torres del Paine National Park Ascent',
        narrative: 'Enter the national park. Hike to the base of the colossal granite towers with our head geologist and wilderness botanist.',
        sanctuaryStay: 'Tierra Patagonia Architectural Lake Suite',
      },
      {
        day: 4,
        title: 'Grey Glacier Ice Walking & Zodiac Cruise',
        narrative: 'Don crampons to explore electric-blue crevasses and ice bridges on the Southern Patagonian Icefield.',
        sanctuaryStay: 'Tierra Patagonia Architectural Lake Suite',
      },
      {
        day: 5,
        title: 'Guanaco Trails & French Valley Vista',
        narrative: 'Trek into the amphitheater of French Valley listening to the thunder of hanging glacier avalanches safe across the canyon.',
        sanctuaryStay: 'Explora Patagonia Luxury Lodge',
      },
      {
        day: 6,
        title: 'Horseback Trek with Patagonian Gauchos',
        narrative: 'Ride criollo horses through native lenga forests with authentic local gauchos who know every contour of the mountains.',
        sanctuaryStay: 'Explora Patagonia Luxury Lodge',
      },
      {
        day: 7,
        title: 'Fjords of Bernardo O’Higgins & Sea Lion Colonies',
        narrative: 'Navigating narrow saltwater channels where massive colonies of southern sea lions bask on polished granite islands.',
        sanctuaryStay: 'Awasi Patagonia Private Forest Villa',
      },
      {
        day: 8,
        title: 'Private Wood-Fired Hot Tubs & Stargazing',
        narrative: 'Soak beneath the Southern Cross galaxy in private hot tubs fueled by aromatic lenga wood. Sommelier tasting of Chilean Carménère.',
        sanctuaryStay: 'Awasi Patagonia Private Forest Villa',
      },
      {
        day: 9,
        title: 'Return to Punta Arenas & Flight Connection',
        narrative: 'Private transfer to flight with high-resolution photographic essay captured by our accompanying expedition photographer.',
        sanctuaryStay: 'Departure',
      },
    ],
    departures: [
      { dates: 'Nov 02 – Nov 10, 2026', availability: 'Last 2 Spots', spotsRemaining: 2 },
      { dates: 'Dec 08 – Dec 16, 2026', availability: 'Filling Fast', spotsRemaining: 4 },
      { dates: 'Jan 15 – Jan 23, 2027', availability: 'Available', spotsRemaining: 6 },
    ],
  },
  {
    id: 'swiss-alpine-sanctuary',
    title: 'Swiss Engadin & Zermatt: Glacial Sanctuaries & High Chalets',
    territory: 'Engadin Valley & Valais',
    country: 'Switzerland',
    coordinates: '46.4908° N, 9.8355° E',
    duration: '7 Days / 6 Nights',
    groupLimit: 6,
    feeling: 'Restorative Stillness',
    price: 5900,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Private panoramic Glacier Express carriages, architectural timber chalets, and thermal alpine baths above the cloud line.',
    narrativeOverview:
      'An intimate immersion into the quietest valleys of the Swiss Alps. Crisp sub-zero air, crackling pine fireplaces, private alpine guides, and world-class culinary excellence in secluded mountain hamlets.',
    dailyArchitecture: [
      {
        day: 1,
        title: 'Zurich to St. Moritz & Private Chalet Check-In',
        narrative: 'Private luxury transfer through high alpine passes into the sun-drenched Engadin Valley. Welcome fireside fondue and Swiss Pinot Noir.',
        sanctuaryStay: 'Kulm Hotel Private Alpine Suite',
      },
      {
        day: 2,
        title: 'Morteratsch Glacier Snowshoeing & Ice Caves',
        narrative: 'Follow the ancient glacial tongue with our UIAGM mountain guide into hidden turquoise meltwater ice tunnels.',
        sanctuaryStay: 'Kulm Hotel Private Alpine Suite',
      },
      {
        day: 3,
        title: 'Excellence Class Glacier Express to Zermatt',
        narrative: 'Private reserved lounge carriage crossing 291 stone bridges and the Oberalp Pass with 5-course gourmet dining onboard.',
        sanctuaryStay: 'The Omnia Architectural Mountain Lodge',
      },
      {
        day: 4,
        title: 'Gornergrat Sunrise & Matterhorn Reflection',
        narrative: 'Ascend before the general public to witness the first rays of rose-gold morning sun strike the east face of the Matterhorn.',
        sanctuaryStay: 'The Omnia Architectural Mountain Lodge',
      },
      {
        day: 5,
        title: 'High Alpine Thermal Baths & Mineral Restoration',
        narrative: 'Outdoor granite pools overlooking snowy pine forests. Herbal steam baths infused with locally hand-picked mountain pine.',
        sanctuaryStay: 'The Omnia Architectural Mountain Lodge',
      },
      {
        day: 6,
        title: 'Helicopter Flight over Dufourspitze & Glacial Ski',
        narrative: 'Private Air Zermatt helicopter flight skimming sheer glacial ice falls, landing on the high snowfields for a private champagne toast.',
        sanctuaryStay: 'Chalet Zermatt Peak Master Sanctuary',
      },
      {
        day: 7,
        title: 'Scenic Train to Geneva / Zurich & Departure',
        narrative: 'First-class Swiss rail transfer to airport departure with bespoke alpine botanical provisions.',
        sanctuaryStay: 'Departure',
      },
    ],
    departures: [
      { dates: 'Jan 12 – Jan 18, 2027', availability: 'Last 1 Spot', spotsRemaining: 1 },
      { dates: 'Feb 09 – Feb 15, 2027', availability: 'Filling Fast', spotsRemaining: 3 },
      { dates: 'Mar 16 – Mar 22, 2027', availability: 'Available', spotsRemaining: 6 },
    ],
  },
  {
    id: 'svalbard-polar-yacht',
    title: 'Svalbard 78°N: Deep Arctic Fjord & Ice-Class Explorer Yacht',
    territory: 'Spitsbergen Archipelagos',
    country: 'Norway',
    coordinates: '78.2232° N, 15.6267° E',
    duration: '7 Days / 6 Nights',
    groupLimit: 8,
    feeling: 'Untamed Wonder',
    price: 6850,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Private ice-strengthened vessel through silent glacial fjords, polar bear habitats, and the dancing lights of the auroral oval.',
    narrativeOverview:
      'Eight explorers aboard a private 42-meter ice-class platform venturing north of the 78th parallel. Zero commercial cruise ships. Just pure arctic wilderness, private glaciologists, and five-star hospitality.',
    dailyArchitecture: [
      {
        day: 1,
        title: 'Longyearbyen Embarkation & Champagne Briefing',
        narrative: 'Private airport transfer to port. Settle into vessel suites and toast departure into the endless arctic twilight.',
        sanctuaryStay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 2,
        title: 'Isfjorden Ice Edge & Walrus Sanctuaries',
        narrative: 'Zodiac navigation through brash ice along beaches where wild walruses haul out in peaceful isolation.',
        sanctuaryStay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 3,
        title: 'Monacobreen Glacial Calving Wall',
        narrative: 'Stepping onto thick pack ice with snowshoes guided by our polar master. Echoes of glacial calving reverberate across the fjord.',
        sanctuaryStay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 4,
        title: 'Magdalenefjorden & Aurora Vigil',
        narrative: 'Anchored in glassy fjord waters with zero light pollution. Undulating bands of green and violet aurora light up the snow peaks.',
        sanctuaryStay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 5,
        title: 'Aft-Deck Cedar Sauna & Polar Plunge',
        narrative: 'Invigorating wood-fired cedar sauna on the vessel aft deck followed by an optional Arctic dip and mulled cloudberry wine.',
        sanctuaryStay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 6,
        title: 'Nordenskiöldbreen Blue Ice Wall',
        narrative: 'Deep penetration toward monumental sapphire ice ramparts. Private chef dinner featuring Nordic foraged delicacies.',
        sanctuaryStay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 7,
        title: 'Disembarkation & Airport Chauffeur',
        narrative: 'Morning return to Longyearbyen port. VIP transfer to SAS / Norwegian flight connections.',
        sanctuaryStay: 'Departure',
      },
    ],
    departures: [
      { dates: 'Dec 05 – Dec 11, 2026', availability: 'Last 2 Spots', spotsRemaining: 2 },
      { dates: 'Jan 14 – Jan 20, 2027', availability: 'Filling Fast', spotsRemaining: 4 },
      { dates: 'Feb 18 – Feb 24, 2027', availability: 'Available', spotsRemaining: 6 },
    ],
  },
];
