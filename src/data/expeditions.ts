export interface Expedition {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  region: string;
  country: string;
  coordinates: string;
  duration: string;
  maxGuests: number;
  difficulty: 'Gentle' | 'Moderate' | 'Active Exploration';
  price: number;
  priceCurrency: string;
  heroImage: string;
  category: 'Aurora & Celestial' | 'Glacier & Ice Caves' | 'Polar Yacht & Sea' | 'Wilderness Sanctuaries' | 'Active Heli-Expedition';
  bestSeason: string;
  temperatureAvg: string;
  highlights: string[];
  inclusions: string[];
  daysOverview: {
    day: number;
    title: string;
    description: string;
    stay: string;
  }[];
  upcomingDepartures: {
    date: string;
    seatsLeft: number;
    status: 'Available' | 'Filling Fast' | 'Last 2 Spots';
  }[];
}

export const expeditionsData: Expedition[] = [
  {
    id: 'svalbard-78n',
    slug: 'svalbard-78n-polar-expedition',
    title: 'Svalbard 78°N: Deep Polar Fjord & Glacier Odyssey',
    tagline: 'Private ice-class explorer yacht into the High Arctic realm of sea ice, walruses, and polar silence.',
    region: 'Spitsbergen Archipelagos',
    country: 'Svalbard (Norway)',
    coordinates: '78.2232° N, 15.6267° E',
    duration: '7 Days / 6 Nights',
    maxGuests: 8,
    difficulty: 'Moderate',
    price: 6850,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=85',
    category: 'Polar Yacht & Sea',
    bestSeason: 'Nov – Apr (Aurora) & Jun – Aug (Midnight Sun)',
    temperatureAvg: '-12°C to -4°C',
    highlights: [
      'Private 42m ice-strengthened explorer vessel charter with polar master crew',
      'Zodiac navigation among drifting sapphire icebergs at Monacobreen Glacier',
      'Wild polar bear and walrus observation from safe, non-intrusive distances',
      'Arctic thermal dining with private chef featuring Nordic foraging cuisine',
    ],
    inclusions: [
      'Full private vessel suite accommodation',
      'All meals crafted by private expedition chef with paired wines',
      'Moncler / Helly Hansen Grade 5 extreme cold expedition gear provided',
      'Two certified UIAGM polar safety guides and wildlife glaciologist',
      'All Zodiac excursions, fuel, permits, and polar insurance',
    ],
    daysOverview: [
      {
        day: 1,
        title: 'Arrival in Longyearbyen & Embarkation',
        description: 'Private transfer from Svalbard Airport to port. Board the M/V Isfjord. Safety briefing and welcome fireside champagne tasting.',
        stay: 'M/V Isfjord Master Suite',
      },
      {
        day: 2,
        title: 'Isfjorden & Ice Edge Navigation',
        description: 'Cruise north past snow-draped alpine peaks. Zodiac cruise along sea bird colonies and early walrus resting ice floes.',
        stay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 3,
        title: 'Monacobreen Glacial Wall',
        description: 'Wake to thunderous glacial calving echoes. Step onto pristine fast ice with snowshoes guided by our head glaciologist.',
        stay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 4,
        title: '79th Parallel & Aurora Watch',
        description: 'Navigate into Magdalenefjorden. Zero light pollution offers unprecedented vistas of the dancing green ribbons of Aurora Borealis.',
        stay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 5,
        title: 'Smeerenburg Historic Whaling Outpost',
        description: 'Historic polar history trek and Arctic sauna session on the vessel’s aft deck followed by an invigorating polar plunge.',
        stay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 6,
        title: 'Billefjorden & Nordenskiöld Glacier',
        description: 'Deep fjord penetration toward the colossal blue ice ramparts of Nordenskiöldbreen. Champagne toast upon the observation bridge.',
        stay: 'M/V Isfjord Explorer Yacht',
      },
      {
        day: 7,
        title: 'Return to Longyearbyen & Disembarkation',
        description: 'Morning breakfast overlooking Adventfjorden. Private transfer to flight connection with bespoke expedition photo portfolio.',
        stay: 'Departure',
      },
    ],
    upcomingDepartures: [
      { date: 'Dec 05 – Dec 11, 2026', seatsLeft: 2, status: 'Last 2 Spots' },
      { date: 'Jan 14 – Jan 20, 2027', seatsLeft: 4, status: 'Filling Fast' },
      { date: 'Feb 18 – Feb 24, 2027', seatsLeft: 3, status: 'Filling Fast' },
      { date: 'Mar 10 – Mar 16, 2027', seatsLeft: 6, status: 'Available' },
    ],
  },
  {
    id: 'iceland-fire-ice',
    slug: 'iceland-fire-ice-superjeep-highlands',
    title: 'Iceland Fire & Ice: Volcanic Highlands & Katla Blue Caves',
    tagline: 'Private modified 46” Super-Jeeps, private geothermal lagoons, and hidden sub-glacial crystal caverns.',
    region: 'South Coast & Icelandic Highlands',
    country: 'Iceland',
    coordinates: '63.9850° N, 19.0650° W',
    duration: '6 Days / 5 Nights',
    maxGuests: 6,
    difficulty: 'Moderate',
    price: 5400,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=85',
    category: 'Glacier & Ice Caves',
    bestSeason: 'Oct – Apr (Peak Ice Cave Stability)',
    temperatureAvg: '-3°C to +3°C',
    highlights: [
      'Private access to deep sub-glacial blue ice cave inside Kötlujökull volcano',
      'Traverse remote volcanic ash deserts in luxury 46-inch custom Arctic Trucks',
      'Exclusive after-hours buyout of geothermal basalt hot springs',
      'Private helicopter flight over Vatnajökull ice cap and active fissure fields',
    ],
    inclusions: [
      'Five nights in curated 5-star design lodges (The Retreat at Blue Lagoon & 360 Hotel)',
      'Custom Arctic Truck Super-Jeep with private expedition driver-guide',
      'Helicopter transfer from Reykjavík to Highland base',
      'All safety harnesses, Petzl crampons, and thermal outerwear',
      'Private chef table dining and local geothermal bakery tastings',
    ],
    daysOverview: [
      {
        day: 1,
        title: 'Arrival & The Retreat Lagoon Mineral Sanctuary',
        description: 'VIP private airport transfer. Private silica water ritual and mineral soak. Welcome dinner at Michelin-recommended Moss.',
        stay: 'The Retreat at Blue Lagoon Luxury Suite',
      },
      {
        day: 2,
        title: 'Helicopter Lift to South Coast & Waterfalls',
        description: 'Fly over steaming volcanic craters and black sand beaches. Touch down near Seljalandsfoss and Skógafoss away from crowds.',
        stay: '360 Hotel & Thermal Spa Panorama Room',
      },
      {
        day: 3,
        title: 'Katla Sub-Glacial Crystal Ice Vault',
        description: 'Super-Jeep traverse across black volcanic outwash plains to the secret entrance of the electric-blue Katla ice cavern.',
        stay: '360 Hotel & Thermal Spa Panorama Room',
      },
      {
        day: 4,
        title: 'Highland Snow-Cat & Thorsmork Canyon',
        description: 'Cross raging glacial rivers into the mystical valley of Thor. Winter snowshoeing among birch forests and canyon lookouts.',
        stay: 'Private Highland Eco-Chalet',
      },
      {
        day: 5,
        title: 'Jökulsárlón Glacier Lagoon & Diamond Beach',
        description: 'Private Zodiac navigation among sculpted floating sapphire bergs. Sunset champagne on the polished volcanic black diamond sands.',
        stay: 'Fosshotel Glacier Lagoon Deluxe Wing',
      },
      {
        day: 6,
        title: 'Scenic Flyover & Reykjavík Farewell',
        description: 'Helicopter return with panoramic low pass over Mount Fagradalsfjall volcanic terrain before VIP airport departure.',
        stay: 'Departure',
      },
    ],
    upcomingDepartures: [
      { date: 'Dec 02 – Dec 07, 2026', seatsLeft: 2, status: 'Last 2 Spots' },
      { date: 'Jan 08 – Jan 13, 2027', seatsLeft: 3, status: 'Filling Fast' },
      { date: 'Feb 12 – Feb 17, 2027', seatsLeft: 5, status: 'Available' },
      { date: 'Mar 20 – Mar 25, 2027', seatsLeft: 6, status: 'Available' },
    ],
  },
  {
    id: 'tromso-lyngen-alps',
    slug: 'tromso-lyngen-alps-aurora-sanctuary',
    title: 'Tromsø & Lyngen Alps: Glass Aurora Sanctuary & Fjord Safari',
    tagline: 'Architectural glass roof cabins beneath the auroral oval, silent electric catamaran fjord safaris, and private coastal saunas.',
    region: 'Troms & Finnmark',
    country: 'Norway',
    coordinates: '69.6492° N, 18.9553° E',
    duration: '5 Days / 4 Nights',
    maxGuests: 6,
    difficulty: 'Gentle',
    price: 4250,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=1600&q=85',
    category: 'Aurora & Celestial',
    bestSeason: 'Oct – Mar (Highest KP Frequency)',
    temperatureAvg: '-6°C to 0°C',
    highlights: [
      'Four nights in private cantilevered architectural glass suites over the fjord',
      'Silent electric catamaran navigation into deep fjords during orca migration',
      'Private Northern Lights astronomer with computerized telescopes and camera setups',
      'Floating cedarwood fjord sauna with panoramic tempered glass plunge steps',
    ],
    inclusions: [
      'Four nights luxury glass sanctuary villa with heated aurora ceiling glass',
      'Private Tesla Model X / Mercedes 4x4 transfers throughout',
      'All dinners curated by private Nordic chef focusing on king crab and reindeer',
      'Full thermal kit (Norwegian wool underlayers, down outerwear, boots)',
      'Professional astrophotography guide with all RAW & edited files gifted',
    ],
    daysOverview: [
      {
        day: 1,
        title: 'Tromsø Paris of the North to Lyngen Fjord Lodge',
        description: 'Scenic fjord ferry crossing into Lyngen Peninsula. Arrive at private cliffside glass villa. Welcome hot cloudberry toddy.',
        stay: 'Lyngen Arctic Glass Sanctuary',
      },
      {
        day: 2,
        title: 'Silent Electric Catamaran Whale Encounter',
        description: 'Glide without engine noise alongside pods of orcas and humpback whales feeding on winter herring in Kaldfjord.',
        stay: 'Lyngen Arctic Glass Sanctuary',
      },
      {
        day: 3,
        title: 'Sami Heritage, Reindeer Camp & Stargazing',
        description: 'Private audience with an elder Sami reindeer herder inside a warm traditional lavvu. Storytelling, joik music, and fireside broth.',
        stay: 'Lyngen Arctic Glass Sanctuary',
      },
      {
        day: 4,
        title: 'Dog Sledding under the Auroral Arc',
        description: 'Drive your own team of Alaskan huskies through silent snow-covered pine valleys illuminated only by headlamps and the aurora.',
        stay: 'Lyngen Arctic Glass Sanctuary',
      },
      {
        day: 5,
        title: 'Morning Fjord Floating Sauna & Departure',
        description: 'Invigorating wood-fired cedar sauna and arctic fjord dip. Private transfer to Tromsø Langnes Airport.',
        stay: 'Departure',
      },
    ],
    upcomingDepartures: [
      { date: 'Nov 28 – Dec 02, 2026', seatsLeft: 1, status: 'Last 2 Spots' },
      { date: 'Dec 18 – Dec 22, 2026', seatsLeft: 2, status: 'Last 2 Spots' },
      { date: 'Jan 22 – Jan 26, 2027', seatsLeft: 4, status: 'Filling Fast' },
      { date: 'Feb 26 – Mar 02, 2027', seatsLeft: 6, status: 'Available' },
    ],
  },
  {
    id: 'swedish-lapland-treehouse',
    slug: 'swedish-lapland-arctic-treehotel-ice-sanctuary',
    title: 'Swedish Lapland: Master Dog Sledding & Canopy Treehotel',
    tagline: 'Suspended architectural tree sanctuaries above the snow-frosted pines, midnight forest snowmobile runs, and Michelin wilderness dining.',
    region: 'Norrbotten / Swedish Lapland',
    country: 'Sweden',
    coordinates: '65.8252° N, 21.6833° E',
    duration: '5 Days / 4 Nights',
    maxGuests: 8,
    difficulty: 'Moderate',
    price: 4800,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    category: 'Wilderness Sanctuaries',
    bestSeason: 'Dec – Apr',
    temperatureAvg: '-14°C to -5°C',
    highlights: [
      'Stay in world-renowned architectural treehouses: The Mirrorcube & The Biosphere',
      'Traverse 60km of pristine taiga wilderness on champion Alaskan husky dog sleds',
      'Private 8-course wild game dinner served in a heated tipi upon a frozen lake',
      'High-speed snowmobile expedition through deep powder to remote forest shelters',
    ],
    inclusions: [
      'Two nights Treehotel architectural room + two nights Arctic Bath floating cabin',
      'All meals, aperitifs, and paired sommelier selections',
      'Thermal flight suits, Sorels, balaclavas, and touchscreen thermal gloves',
      'Personal safari guide and dog sled musher for the entirety of your stay',
      'Private spa ritual and smoke sauna ceremonies',
    ],
    daysOverview: [
      {
        day: 1,
        title: 'Luleå Airport to Treehotel Forest Canopy',
        description: 'Private 4x4 through the snow-laden boreal forests of Harads. Check-in to your architectural suspended treehouse.',
        stay: 'Treehotel Mirrorcube Suite',
      },
      {
        day: 2,
        title: 'Deep Taiga Husky Expedition',
        description: 'Guide your own team across frozen wetlands and ancient pine forests. Lunch cooked over birch logs by the musher.',
        stay: 'Treehotel Biosphere Suite',
      },
      {
        day: 3,
        title: 'Transfer to Arctic Bath & Frozen River Spa',
        description: 'Arrive at the famous circular floating architectural spa locked in river ice. Stone saunas, outdoor cold bath, and massage.',
        stay: 'Arctic Bath Floating Water Cabin',
      },
      {
        day: 4,
        title: 'Snowmobile Aurora Hunt & Lake Tipi Feast',
        description: 'High-powered electric and 4-stroke snowmobiles deep into the taiga. Grand 8-course wild berry and Arctic char feast.',
        stay: 'Arctic Bath Floating Water Cabin',
      },
      {
        day: 5,
        title: 'Swedish Fika & Luleå Departure',
        description: 'Traditional morning coffee brewed over open fire with cinnamon buns. Private airport chauffeur to Luleå.',
        stay: 'Departure',
      },
    ],
    upcomingDepartures: [
      { date: 'Dec 12 – Dec 16, 2026', seatsLeft: 3, status: 'Filling Fast' },
      { date: 'Jan 16 – Jan 20, 2027', seatsLeft: 2, status: 'Last 2 Spots' },
      { date: 'Feb 20 – Feb 24, 2027', seatsLeft: 4, status: 'Filling Fast' },
      { date: 'Mar 15 – Mar 19, 2027', seatsLeft: 7, status: 'Available' },
    ],
  },
  {
    id: 'lofoten-heli-fjord',
    slug: 'lofoten-islands-heli-expedition-coastal-sauna',
    title: 'Lofoten Archipelagos: Heli-Alpine & Coastal Fjord Sanctuaries',
    tagline: 'Razor-sharp granite peaks plunging straight into the Norwegian Sea, private helicopter drops, and seaside rorbuer lodges.',
    region: 'Lofoten Islands',
    country: 'Norway',
    coordinates: '68.1650° N, 13.7550° E',
    duration: '6 Days / 5 Nights',
    maxGuests: 6,
    difficulty: 'Active Exploration',
    price: 5950,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85',
    category: 'Active Heli-Expedition',
    bestSeason: 'Jan – Apr (Snow & Aurora) & May – Sep (Midnight Sun)',
    temperatureAvg: '-2°C to +4°C (Gulf Stream warmed)',
    highlights: [
      'Private helicopter transfers between Svolvær, Reine, and remote island ridges',
      'Exclusive restored waterfront luxury rorbuer with private sea-view cedar saunas',
      'Rib-boat sea eagle safari beneath the towering cliffs of Trollfjorden',
      'Guided alpine snowshoeing or backcountry skiing down to the water’s edge',
    ],
    inclusions: [
      'Five nights in private luxury waterfront suites at Nusfjord Arctic Resort',
      'Two private helicopter flight hours included for transfers and alpine landings',
      'All gourmet dining including fresh skrei cod and Arctic lamb specialties',
      'Full technical gear, life suits for fjord excursions, and avalanche kits',
      'Dedicated personal concierge and local Norwegian expedition master',
    ],
    daysOverview: [
      {
        day: 1,
        title: 'Helicopter Touchdown in Svolvær',
        description: 'Spectacular aerial arrival looking down over the dramatic wall of the Lofoten archipelago. Check-in to historic Nusfjord.',
        stay: 'Nusfjord Arctic Resort Harbor Suite',
      },
      {
        day: 2,
        title: 'Trollfjord Rib-Boat & Sea Eagle Safari',
        description: 'Navigate into the sheer vertical walls of Trollfjord. Spot massive white-tailed sea eagles diving for herring.',
        stay: 'Nusfjord Arctic Resort Harbor Suite',
      },
      {
        day: 3,
        title: 'Helicopter Alpine Ridge Ridge-Walk',
        description: 'Lift above the clouds to a panoramic ridge overlooking Reinebringen and the Reinefjorden. Champagne on the summit.',
        stay: 'Reine Luxury Fjord Manor',
      },
      {
        day: 4,
        title: 'Artisan Glassblowing & Surfing at Unstad Beach',
        description: 'Explore the arts enclave of Henningsvær and watch arctic surfers ride peeling North Atlantic rollers in thick wetsuits.',
        stay: 'Reine Luxury Fjord Manor',
      },
      {
        day: 5,
        title: 'Private Coastal Sauna & Northern Lights Vigil',
        description: 'Wood-fired sauna jutting directly over the tide. Take the ocean dip under a canopy of luminous emerald lights.',
        stay: 'Reine Luxury Fjord Manor',
      },
      {
        day: 6,
        title: 'Farewell Flight to Harstad/Narvik Airport',
        description: 'Scenic return flight across Vestfjorden with memories and high-resolution expedition captures.',
        stay: 'Departure',
      },
    ],
    upcomingDepartures: [
      { date: 'Dec 08 – Dec 13, 2026', seatsLeft: 2, status: 'Last 2 Spots' },
      { date: 'Jan 10 – Jan 15, 2027', seatsLeft: 3, status: 'Filling Fast' },
      { date: 'Feb 14 – Feb 19, 2027', seatsLeft: 4, status: 'Filling Fast' },
      { date: 'Mar 18 – Mar 23, 2027', seatsLeft: 6, status: 'Available' },
    ],
  },
  {
    id: 'greenland-ice-sheet',
    slug: 'greenland-disko-bay-icefjord-heli-camp',
    title: 'Greenland Ice Sheet: Disko Bay & Glacial Heli-Camp Outpost',
    tagline: 'Witness colossal icebergs towering 100 meters above the bay, private helicopter landings on the ice sheet, and luxury heated dome sanctuaries.',
    region: 'Disko Bay & Ilulissat Icefjord',
    country: 'Greenland',
    coordinates: '69.2198° N, 51.0986° W',
    duration: '8 Days / 7 Nights',
    maxGuests: 6,
    difficulty: 'Active Exploration',
    price: 8900,
    priceCurrency: 'EUR',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    category: 'Wilderness Sanctuaries',
    bestSeason: 'Mar – May (Spring Ice) & Jul – Sep (Calving Glacier Season)',
    temperatureAvg: '-10°C to +5°C',
    highlights: [
      'Helicopter landing directly onto the ancient 2-mile thick Greenland Ice Sheet',
      'Private midnight sun and aurora zodiac navigation among cathedral-sized icebergs',
      'Two nights in a heated luxury geodesic dome perched above the calving face of Eqi Glacier',
      'Deep engagement with local Inuit hunters and dog sled heritage',
    ],
    inclusions: [
      'Seven nights luxury accommodation (Hotel Arctic glass igloos + Glacier Camp Eqi)',
      'All internal charter flights from Reykjavík / Kangerlussuaq to Ilulissat',
      'All meals, private chef, and expedition wines',
      'Complete high-polar survival suit, crampons, and satellite safety beacon',
      'Dedicated Greenlandic expedition leader and polar naturalist',
    ],
    daysOverview: [
      {
        day: 1,
        title: 'Reykjavík Charter to Ilulissat',
        description: 'Flight over the Denmark Strait. Spectacular approach over the iceberg graveyard of Disko Bay.',
        stay: 'Hotel Arctic Executive Suite',
      },
      {
        day: 2,
        title: 'Kangia Icefjord UNESCO Exploration',
        description: 'Trek along wooden boardwalks to Sermermiut settlement ruins overlooking the staggering ice discharge stream.',
        stay: 'Hotel Arctic Executive Suite',
      },
      {
        day: 3,
        title: 'Helicopter Lift to Greenland Ice Cap',
        description: 'Fly over turquoise meltwater rivers and touch down in the center of the vast primordial ice sheet.',
        stay: 'Glacier Base Camp Eqi',
      },
      {
        day: 4,
        title: 'Eqi Glacier Calving Front',
        description: 'Sit in silence on your private wooden terrace as colossal slabs of ice peel into the sea with echoing cracks.',
        stay: 'Glacier Base Camp Eqi',
      },
      {
        day: 5,
        title: 'Zodiac Navigation to Oqaatsut Ghost Settlement',
        description: 'Visit an authentic Inuit village of 30 residents. Taste freshly caught halibut and Arctic berries.',
        stay: 'Hotel Arctic Aurora Glass Igloo',
      },
      {
        day: 6,
        title: 'Humpback Whale Watch in Disko Bay',
        description: 'Private expedition boat gliding past gigantic blue ice tabular bergs with whales breaching alongside.',
        stay: 'Hotel Arctic Aurora Glass Igloo',
      },
      {
        day: 7,
        title: 'Inuit Cultural Feast & Reflection',
        description: 'Celebratory farewell dinner featuring Greenlandic culinary traditions and private harp performance.',
        stay: 'Hotel Arctic Aurora Glass Igloo',
      },
      {
        day: 8,
        title: 'Charter Flight Return to Iceland',
        description: 'Scenic aerial crossing back to Reykjavík with expedited international flight connections.',
        stay: 'Departure',
      },
    ],
    upcomingDepartures: [
      { date: 'Feb 15 – Feb 22, 2027', seatsLeft: 2, status: 'Last 2 Spots' },
      { date: 'Mar 25 – Apr 01, 2027', seatsLeft: 4, status: 'Filling Fast' },
      { date: 'Jun 10 – Jun 17, 2027', seatsLeft: 5, status: 'Available' },
    ],
  },
];
