export interface AIProperty {
  id: number;
  propertyName: string;
  projectName: string;
  location: string;
  facing: 'East' | 'West' | 'North' | 'South' | 'North-East' | 'South-West' | 'North-West' | 'South-East';
  type: string;
  size: string;
  price: string;
  status: 'Available' | 'Sold' | 'Reserved';
  amenities: string[];
  bedrooms?: number;
  bathrooms?: number;
}

export const aiPropertyData: AIProperty[] = [
  // Project 1: Green Valley Residency
  {
    id: 1,
    propertyName: 'Green Valley Villa A1',
    projectName: 'Green Valley Residency',
    location: 'Whitefield',
    facing: 'East',
    type: 'Villa',
    size: '2400 sq ft',
    price: '₹1.2 Cr',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Swimming Pool', 'Gym', 'Park', 'Security']
  },
  {
    id: 2,
    propertyName: 'Green Valley Apartment B2',
    projectName: 'Green Valley Residency',
    location: 'Whitefield',
    facing: 'West',
    type: 'Apartment',
    size: '1850 sq ft',
    price: '₹95 L',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Security']
  },
  {
    id: 3,
    propertyName: 'Green Valley Penthouse C1',
    projectName: 'Green Valley Residency',
    location: 'Whitefield',
    facing: 'North',
    type: 'Penthouse',
    size: '3200 sq ft',
    price: '₹2.1 Cr',
    status: 'Reserved',
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['Private Terrace', 'Swimming Pool', 'Gym', 'Concierge']
  },

  // Project 2: Skyline Towers
  {
    id: 4,
    propertyName: 'Skyline Tower 1 - 5A',
    projectName: 'Skyline Towers',
    location: 'Electronic City',
    facing: 'South',
    type: 'Apartment',
    size: '1650 sq ft',
    price: '₹82 L',
    status: 'Available',
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Gym', 'Park', 'Security', 'Power Backup']
  },
  {
    id: 5,
    propertyName: 'Skyline Tower 2 - 8B',
    projectName: 'Skyline Towers',
    location: 'Electronic City',
    facing: 'East',
    type: 'Apartment',
    size: '2100 sq ft',
    price: '₹1.05 Cr',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Gym', 'Swimming Pool', 'Clubhouse', 'Security']
  },
  {
    id: 6,
    propertyName: 'Skyline Tower 3 - 12C',
    projectName: 'Skyline Towers',
    location: 'Electronic City',
    facing: 'North-East',
    type: 'Apartment',
    size: '1450 sq ft',
    price: '₹72 L',
    status: 'Sold',
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Gym', 'Park', 'Security']
  },

  // Project 3: Lakeside Paradise
  {
    id: 7,
    propertyName: 'Lakeside Villa Premium',
    projectName: 'Lakeside Paradise',
    location: 'Sarjapur Road',
    facing: 'West',
    type: 'Villa',
    size: '3500 sq ft',
    price: '₹2.8 Cr',
    status: 'Available',
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['Lake View', 'Private Garden', 'Swimming Pool', 'Clubhouse']
  },
  {
    id: 8,
    propertyName: 'Lakeside Cottage L2',
    projectName: 'Lakeside Paradise',
    location: 'Sarjapur Road',
    facing: 'South-West',
    type: 'Cottage',
    size: '1800 sq ft',
    price: '₹1.15 Cr',
    status: 'Available',
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Lake View', 'Garden', 'Clubhouse', 'Security']
  },
  {
    id: 9,
    propertyName: 'Lakeside Apartment A4',
    projectName: 'Lakeside Paradise',
    location: 'Sarjapur Road',
    facing: 'East',
    type: 'Apartment',
    size: '1950 sq ft',
    price: '₹98 L',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Lake View', 'Swimming Pool', 'Gym', 'Security']
  },

  // Project 4: Royal Enclave
  {
    id: 10,
    propertyName: 'Royal Manor R1',
    projectName: 'Royal Enclave',
    location: 'Koramangala',
    facing: 'North',
    type: 'Villa',
    size: '4200 sq ft',
    price: '₹3.5 Cr',
    status: 'Reserved',
    bedrooms: 5,
    bathrooms: 5,
    amenities: ['Private Pool', 'Home Theater', 'Gym', 'Security']
  },
  {
    id: 11,
    propertyName: 'Royal Heights Floor 6',
    projectName: 'Royal Enclave',
    location: 'Koramangala',
    facing: 'South-East',
    type: 'Apartment',
    size: '2300 sq ft',
    price: '₹1.45 Cr',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Clubhouse', 'Gym', 'Swimming Pool', 'Concierge']
  },
  {
    id: 12,
    propertyName: 'Royal Terrace T3',
    projectName: 'Royal Enclave',
    location: 'Koramangala',
    facing: 'West',
    type: 'Penthouse',
    size: '3800 sq ft',
    price: '₹2.9 Cr',
    status: 'Available',
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['Private Terrace', 'Jacuzzi', 'Gym', 'Concierge']
  },

  // Project 5: Smart City Homes
  {
    id: 13,
    propertyName: 'Smart Home Unit 101',
    projectName: 'Smart City Homes',
    location: 'Marathahalli',
    facing: 'East',
    type: 'Apartment',
    size: '1550 sq ft',
    price: '₹78 L',
    status: 'Available',
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Smart Automation', 'Gym', 'Security', 'Power Backup']
  },
  {
    id: 14,
    propertyName: 'Smart Home Unit 205',
    projectName: 'Smart City Homes',
    location: 'Marathahalli',
    facing: 'North-West',
    type: 'Apartment',
    size: '1890 sq ft',
    price: '₹92 L',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Smart Automation', 'Gym', 'Swimming Pool', 'Security']
  },
  {
    id: 15,
    propertyName: 'Smart Home Duplex D1',
    projectName: 'Smart City Homes',
    location: 'Marathahalli',
    facing: 'South',
    type: 'Duplex',
    size: '2600 sq ft',
    price: '₹1.35 Cr',
    status: 'Sold',
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['Smart Automation', 'Private Garden', 'Gym', 'Security']
  },

  // Project 6: Urban Oasis
  {
    id: 16,
    propertyName: 'Urban Oasis Studio S12',
    projectName: 'Urban Oasis',
    location: 'HSR Layout',
    facing: 'West',
    type: 'Studio',
    size: '850 sq ft',
    price: '₹48 L',
    status: 'Available',
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Co-working Space', 'Gym', 'Cafe', 'Security']
  },
  {
    id: 17,
    propertyName: 'Urban Oasis Loft L5',
    projectName: 'Urban Oasis',
    location: 'HSR Layout',
    facing: 'North-East',
    type: 'Loft',
    size: '1350 sq ft',
    price: '₹68 L',
    status: 'Available',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Co-working Space', 'Rooftop Lounge', 'Gym', 'Security']
  },
  {
    id: 18,
    propertyName: 'Urban Oasis Apartment 3B',
    projectName: 'Urban Oasis',
    location: 'HSR Layout',
    facing: 'East',
    type: 'Apartment',
    size: '1750 sq ft',
    price: '₹89 L',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Co-working Space', 'Swimming Pool', 'Gym', 'Security']
  },

  // Project 7: Heritage Gardens
  {
    id: 19,
    propertyName: 'Heritage Mansion H1',
    projectName: 'Heritage Gardens',
    location: 'Indiranagar',
    facing: 'North',
    type: 'Villa',
    size: '5000 sq ft',
    price: '₹4.2 Cr',
    status: 'Available',
    bedrooms: 5,
    bathrooms: 5,
    amenities: ['Heritage Architecture', 'Private Garden', 'Pool', 'Staff Quarters']
  },
  {
    id: 20,
    propertyName: 'Heritage Court Flat F8',
    projectName: 'Heritage Gardens',
    location: 'Indiranagar',
    facing: 'South-West',
    type: 'Apartment',
    size: '2200 sq ft',
    price: '₹1.55 Cr',
    status: 'Available',
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Heritage Architecture', 'Clubhouse', 'Gym', 'Security']
  }
];

export const getUniqueLocations = (): string[] => {
  return Array.from(new Set(aiPropertyData.map(p => p.location)));
};

export const getUniqueProjects = (): string[] => {
  return Array.from(new Set(aiPropertyData.map(p => p.projectName)));
};

export const getUniqueFacings = (): string[] => {
  return Array.from(new Set(aiPropertyData.map(p => p.facing)));
};
