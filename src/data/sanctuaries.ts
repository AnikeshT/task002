export interface Sanctuary {
  id: string;
  name: string;
  type: 'Glass Villa' | 'Floating Spa' | 'Explorer Vessel' | 'Wilderness Lodge';
  location: string;
  coordinates: string;
  description: string;
  image: string;
  features: string[];
  capacity: string;
}

export const sanctuariesData: Sanctuary[] = [
  {
    id: 'lyngen-glass-aurora',
    name: 'Lyngen Fjord Glass Sanctuary',
    type: 'Glass Villa',
    location: 'Lyngen Alps, Norway',
    coordinates: '69.5824° N, 20.2183° E',
    description: 'Suspended architectural timber villas with triple-glazed heated panoramic ceilings engineered specifically for viewing the Aurora Borealis directly from cashmere king beds.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
    features: ['Heated glass ceilings preventing snow accumulation', 'Private cedarwood hot tub overlooking the fjord', 'Ensuite infrared sauna', 'Private in-villa chef service'],
    capacity: '2 to 4 guests per villa',
  },
  {
    id: 'mv-isfjord-vessel',
    name: 'M/V Isfjord Explorer Yacht',
    type: 'Explorer Vessel',
    location: 'Svalbard Archipelagos',
    coordinates: '78.2232° N, 15.6267° E',
    description: 'A 42-meter ice-strengthened polar vessel retrofitted into an ultra-luxury expedition platform with stabilizers, observation lounge, outdoor jacuzzi, and Mark V Zodiac tenders.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    features: ['Ice-class 1A reinforced steel hull', 'Helicopter touch-and-go deck', 'Onboard glaciology lecture theatre', 'Michelin-trained head chef'],
    capacity: '8 guests maximum (private charter)',
  },
  {
    id: 'harads-biosphere',
    name: 'Harads Boreal Tree Canopy Suite',
    type: 'Wilderness Lodge',
    location: 'Swedish Lapland',
    coordinates: '65.8252° N, 21.6833° E',
    description: 'Designed by Bjarke Ingels Group, an ethereal spherical habitat encased with 350 bird nesting boxes suspended twelve meters into the snow-draped pine forest.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    features: ['360-degree boreal forest views', 'Suspended rope bridge entry', 'Private wood-stove heating and floor warmth', 'Direct wilderness snowmobile dock'],
    capacity: '2 guests',
  },
  {
    id: 'retreat-silica-suite',
    name: 'The Retreat Mineral Spa Suite',
    type: 'Floating Spa',
    location: 'Reykjanes Geopark, Iceland',
    coordinates: '63.8804° N, 22.4495° W',
    description: 'Carved directly into the 800-year-old volcanic lava field, featuring private access to secluded, mineral-rich geothermal lagoons and subterranean basalt steam caves.',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    features: ['Direct private terrace access into warm lagoon', 'Subterranean fireplace and wine cellar', 'The Lava Cove private spa suite', 'Exclusive after-hours lagoon buyout'],
    capacity: '2 to 3 guests',
  },
];
