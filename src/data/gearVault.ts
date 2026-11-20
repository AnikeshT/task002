export interface GearItem {
  id: string;
  name: string;
  category: 'Outerwear' | 'Optics & Tech' | 'Footwear & Safety' | 'Comfort';
  brand: string;
  rating: string;
  description: string;
  spec: string;
  inclusionsStatus: 'Complimentary on all Journeys';
}

export const gearVaultData: GearItem[] = [
  {
    id: 'expedition-parka',
    name: 'Grade 5 Extreme Cold Polar Parka',
    category: 'Outerwear',
    brand: 'Moncler Grenoble / Canada Goose Resolute',
    rating: 'Rated to -40°C / -40°F',
    description: 'Bespoke high-arctic down jacket equipped with storm hood, fleece-lined chin guard, windproof shell, and emergency locator whistle.',
    spec: '800-fill white goose down, Arctic-Tech water-repellent shell',
    inclusionsStatus: 'Complimentary on all Journeys',
  },
  {
    id: 'night-optics',
    name: 'Zeiss Terra ED 10x42 & Night-Vision Optics',
    category: 'Optics & Tech',
    brand: 'Carl Zeiss Sports Optics',
    rating: 'Hydrophobic anti-fog multicoating',
    description: 'Precision binoculars and night-vision monoculars calibrated for picking out wildlife along shadowy fjord bluffs and faint auroral arcs.',
    spec: 'SCHOTT ED glass with hydrophobic LotuTec coating',
    inclusionsStatus: 'Complimentary on all Journeys',
  },
  {
    id: 'glacier-boots',
    name: 'Baffin Polar Proven Glacial Tundra Boots',
    category: 'Footwear & Safety',
    brand: 'Baffin Polar Series',
    rating: 'Thermal Comfort to -50°C',
    description: 'Multi-layer inner boot system with Arctic Rubber shell and polar traction outsoles designed for ice cave traverses and snow-cat transfers.',
    spec: 'Vapor-barrier insulation with removable thermaplush liner',
    inclusionsStatus: 'Complimentary on all Journeys',
  },
  {
    id: 'satellite-comm',
    name: 'Garmin inReach Polar Satellite Transceiver',
    category: 'Optics & Tech',
    brand: 'Garmin InReach Explorer+',
    rating: '100% Global Iridium Coverage',
    description: 'Every guest group is outfitted with dedicated satellite telemetry transmitting live coordinates and one-touch SOS to Tromsø SAR base.',
    spec: 'Global Iridium network 2-way messaging and real-time tracking',
    inclusionsStatus: 'Complimentary on all Journeys',
  },
  {
    id: 'merino-thermal',
    name: 'Devold of Norway Merino Underlayer System',
    category: 'Outerwear',
    brand: 'Devold Expedition 235g',
    rating: '100% Pure Virgin Merino Wool',
    description: 'Two-layer pure merino wool base layers that maintain thermal heat even in freezing sea mist while regulating breathability during active snowshoeing.',
    spec: '235 g/m² superfine 18.7 micron Norwegian merino fibers',
    inclusionsStatus: 'Complimentary on all Journeys',
  },
  {
    id: 'glacier-crampons',
    name: 'Petzl Irvis Hybrid Glacial Crampons',
    category: 'Footwear & Safety',
    brand: 'Petzl Technical Mountaineering',
    rating: 'UIAA / CE Safety Certified',
    description: 'Ultra-lightweight ten-point crampons custom fitted by our glaciologists to glide safely across blue ice fissures and compressed snow fields.',
    spec: 'Steel front piece with aluminum heel and Cord-Tec linking system',
    inclusionsStatus: 'Complimentary on all Journeys',
  },
];
