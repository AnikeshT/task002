export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  journey: string;
  rating: number;
  date: string;
  quote: string;
  coordinates: string;
  verified: boolean;
}

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    author: 'Henrik Lindqvist & Family',
    role: 'Private Architect & Collector',
    location: 'Stockholm, Sweden',
    journey: 'Svalbard 78°N: Deep Polar Fjord & Glacier Odyssey',
    rating: 5,
    date: 'January 2026',
    quote:
      'Standing on the bow of M/V Isfjord at 79 degrees north, surrounded by midnight-blue icebergs while our private chef served warm cloudberry broth, was beyond anything we experienced in Patagonia or Antarctica. The gear provided was peerless, and our glaciologist guide made every hour an unforgettable revelation.',
    coordinates: '78.2232° N, 15.6267° E',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Dr. Evelyn Vance & Marcus Vance',
    role: 'Biophysicist & Tech Founder',
    location: 'San Francisco, CA',
    journey: 'Tromsø & Lyngen Alps: Glass Aurora Sanctuary',
    rating: 5,
    date: 'February 2026',
    quote:
      'We spent three nights watching violent magenta and emerald auroral curtains ripple across the sky directly from the heated glass ceiling of our private villa. The silent electric catamaran cruise next to orcas feeding in Kaldfjord brought tears to my eyes. Flawless hospitality.',
    coordinates: '69.6492° N, 18.9553° E',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Julian Thorne',
    role: 'Managing Partner, Sovereign Capital',
    location: 'London, UK',
    journey: 'Iceland Fire & Ice: Volcanic Highlands & Katla Blue Caves',
    rating: 5,
    date: 'March 2026',
    quote:
      'The custom 46-inch Super-Jeeps handled the unplowed volcanic ash fields effortlessly. Walking through the Katla sub-glacial ice cave felt like stepping into an alien world made of sapphire crystal. The private after-hours buyout of the mineral lagoon was worth the entire trip alone.',
    coordinates: '63.9850° N, 19.0650° W',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Claire & Antoine de Montmirail',
    role: 'Documentary Director & Vintner',
    location: 'Geneva, Switzerland',
    journey: 'Swedish Lapland: Master Dog Sledding & Canopy Treehotel',
    rating: 5,
    date: 'December 2025',
    quote:
      'Mushing our own team of Alaskan huskies through 40 kilometers of silent white taiga, followed by wood-fired sauna on the frozen river and an 8-course wilderness dinner under the stars, restored our souls. Nordvall is in a league of its own.',
    coordinates: '65.8252° N, 21.6833° E',
    verified: true,
  },
];
