export interface WindowVista {
  id: string;
  destination: string;
  country: string;
  coordinates: string;
  eyebrow: string;
  tagline: string;
  image: string;
  soundscapeLabel: string;
  elevation: string;
  seasonText: string;
}

export const windowVistasData: WindowVista[] = [
  {
    id: 'kyoto',
    destination: 'Kyoto & Yakushima Cedar Forests',
    country: 'Japan',
    coordinates: '35.0116° N, 135.7681° E',
    eyebrow: '01 / SACRED ARCHITECTURE',
    tagline: 'Morning mist drifting through ancient temple pagodas and moss-draped cedar sanctuaries.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2400&q=85',
    soundscapeLabel: 'Distant Temple Gongs & Mountain Stream',
    elevation: '420m Sanctuary Valley',
    seasonText: 'Autumn Maple & Spring Sakura',
  },
  {
    id: 'patagonia',
    destination: 'Torres del Paine & Southern Ice Field',
    country: 'Chile & Argentina',
    coordinates: '51.2532° S, 72.8814° W',
    eyebrow: '02 / GRANITE & ICE FRONTIERS',
    tagline: 'Granite spires piercing windswept clouds above turquoise glacial lakes and wild guanaco grasslands.',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=2400&q=85',
    soundscapeLabel: 'Glacial Wind & Calving Ice Echoes',
    elevation: '2,500m Tower Peaks',
    seasonText: 'Austral Summer (Nov – Mar)',
  },
  {
    id: 'swiss-alps',
    destination: 'Engadin Valley & High Zermatt',
    country: 'Switzerland',
    coordinates: '46.4908° N, 9.8355° E',
    eyebrow: '03 / ALPINE SILENCE',
    tagline: 'Private timber chalets perched above the morning sea of clouds overlooking the Matterhorn ridge.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2400&q=85',
    soundscapeLabel: 'Pure Mountain Breeze & Distant Bells',
    elevation: '3,089m Glacier Ridge',
    seasonText: 'Winter Powder & Summer Alpine Meadows',
  },
  {
    id: 'svalbard',
    destination: 'Monacobreen Glacier & Svalbard 78°N',
    country: 'Norway (High Arctic)',
    coordinates: '78.2232° N, 15.6267° E',
    eyebrow: '04 / ARCTIC PURITY',
    tagline: 'Drifting silent sea ice beneath celestial green auroral ribbons and untouched polar calm.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=2400&q=85',
    soundscapeLabel: 'Pack Ice Murmur & Arctic Silence',
    elevation: 'Sea Level to 79° North',
    seasonText: 'Polar Night & Aurora Season',
  },
];
