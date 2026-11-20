export interface FeelingCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  matchedTerritories: string[];
  quote: string;
  recommendedJourneyId: string;
}

export const feelingsData: FeelingCategory[] = [
  {
    id: 'transcendental-solitude',
    name: 'Transcendental Solitude',
    subtitle: 'The need to quiet the modern mind in sacred silence.',
    description: 'Private dawn meditation alongside Zen tea masters in Daitoku-ji, mountain monastery stays above the cloud line, and ancient cedar paths where no cars can go.',
    matchedTerritories: ['Kyoto Ryokans', 'Yakushima Ancient Forest', 'Bhutan Cloud Valley'],
    quote: 'True luxury is having uninterrupted space to hear yourself think.',
    recommendedJourneyId: 'kyoto-zen-odyssey',
  },
  {
    id: 'untamed-wonder',
    name: 'Untamed Wonder',
    subtitle: 'The thrill of standing before primordial scale.',
    description: 'Witnessing 100-meter iceberg faces peel into the fjord with echoing thunder, navigating remote Patagonian fjords on private catamarans, and gazing at celestial auroras.',
    matchedTerritories: ['Patagonia Icefields', 'Svalbard High Arctic', 'Iceland Volcanoes'],
    quote: 'The world is so much bigger than our daily routines.',
    recommendedJourneyId: 'patagonia-icefield-fjord',
  },
  {
    id: 'restorative-stillness',
    name: 'Restorative Stillness',
    subtitle: 'Healing through alpine air, thermal waters, and design harmony.',
    description: 'Soaking in private geothermal mineral lagoons carved into ancient volcanic basalt, cedarwood fjord floating saunas, and Michelin farm-to-table wilderness feasts.',
    matchedTerritories: ['Swiss Engadin', 'Iceland Geothermal', 'Finnish Smoke Saunas'],
    quote: 'Rest that sinks deep into the marrow of your bones.',
    recommendedJourneyId: 'swiss-alpine-sanctuary',
  },
  {
    id: 'kinetic-discovery',
    name: 'Kinetic Discovery',
    subtitle: 'Active physical engagement with wild terrain.',
    description: 'Heli-snowshoeing pristine ridges, sea-kayaking alongside breaching humpback whales, and traversing black volcanic sand fields on custom Arctic Trucks.',
    matchedTerritories: ['Lofoten Islands', 'Kamchatka Volcanoes', 'New Zealand Sounds'],
    quote: 'Feeling the raw pulse of the planet under your own feet.',
    recommendedJourneyId: 'svalbard-polar-yacht',
  },
];
