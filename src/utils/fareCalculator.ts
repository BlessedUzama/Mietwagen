export interface VehicleTier {
  id: 'electric' | 'suv' | 'van7';
  nameKey: string;
  sampleModel: string;
  multiplier: number;
  basePrice: number;
  seats: number;
  luggage: number;
  iconName: string;
}

export interface QuickLocation {
  id: string;
  labelKey: string;
  nameDe: string;
  nameEn: string;
  estimatedKm: number;
  estimatedMins: number;
  basePrice: number;
}

export const VEHICLE_TIERS: VehicleTier[] = [
  {
    id: 'electric',
    nameKey: 'fleetShowcase.electric.title',
    sampleModel: 'Hyundai Ioniq 5',
    multiplier: 1.0,
    basePrice: 40,
    seats: 4,
    luggage: 2,
    iconName: 'Zap',
  },
  {
    id: 'suv',
    nameKey: 'fleetShowcase.suv.title',
    sampleModel: 'Volkswagen Touareg',
    multiplier: 1.35,
    basePrice: 55,
    seats: 4,
    luggage: 4,
    iconName: 'Car',
  },
  {
    id: 'van7',
    nameKey: 'fleetShowcase.van7.title',
    sampleModel: 'BMW 2 Series Gran Tourer',
    multiplier: 1.5,
    basePrice: 65,
    seats: 7,
    luggage: 6,
    iconName: 'Users2',
  },
];

export const POPULAR_ROUTES: QuickLocation[] = [
  {
    id: 'airport',
    labelKey: 'hero.quickLocations.airport',
    nameDe: 'Flughafen Frankfurt (FRA)',
    nameEn: 'Frankfurt Airport (FRA)',
    estimatedKm: 18,
    estimatedMins: 20,
    basePrice: 45,
  },
  {
    id: 'hbf',
    labelKey: 'hero.quickLocations.hbf',
    nameDe: 'Frankfurt Hauptbahnhof (Hbf)',
    nameEn: 'Frankfurt Main Station',
    estimatedKm: 12,
    estimatedMins: 15,
    basePrice: 35,
  },
  {
    id: 'messe',
    labelKey: 'hero.quickLocations.messe',
    nameDe: 'Messe Frankfurt',
    nameEn: 'Frankfurt Exhibition Center',
    estimatedKm: 14,
    estimatedMins: 18,
    basePrice: 40,
  },
  {
    id: 'hotel',
    labelKey: 'hero.quickLocations.hotel',
    nameDe: 'City Hotel / Zentrum Frankfurt',
    nameEn: 'City Hotel / Frankfurt Downtown',
    estimatedKm: 10,
    estimatedMins: 12,
    basePrice: 30,
  },
];

export function calculateFare(
  routeId: string | null,
  tierId: 'electric' | 'suv' | 'van7'
): { fare: number; km: number; mins: number } {
  const selectedTier = VEHICLE_TIERS.find((t) => t.id === tierId) || VEHICLE_TIERS[0];

  if (!routeId) {
    return {
      fare: Math.round(selectedTier.basePrice),
      km: 15,
      mins: 18,
    };
  }

  const route = POPULAR_ROUTES.find((r) => r.id === routeId);
  if (!route) {
    return {
      fare: Math.round(selectedTier.basePrice * selectedTier.multiplier),
      km: 15,
      mins: 18,
    };
  }

  const calculatedFare = Math.round(route.basePrice * selectedTier.multiplier);
  return {
    fare: calculatedFare,
    km: route.estimatedKm,
    mins: route.estimatedMins,
  };
}
