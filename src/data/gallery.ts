import { GalleryItem } from '../types';
import {
  spaTreatmentRoom,
  salonInteriorHair,
  orchidReceptionSalon,
  hairWashStyling,
  bridalMakeup,
  facialTreatment,
  hairStylingBalayage,
  heroSalonSpa,
  spaWellness,
} from '../assets/images';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-reception',
    title: 'Orchid By Huma Reception & Welcome Lounge',
    category: 'Salon Ambiance',
    image: orchidReceptionSalon,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-salon-interior',
    title: 'Modern Hair Styling Stations & Salon Interior',
    category: 'Salon Ambiance',
    image: salonInteriorHair,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-hair-wash',
    title: 'Hair Wash, Conditioning & Styling Suites',
    category: 'Hair Artistry',
    image: hairWashStyling,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-spa-room',
    title: 'Private Spa & Clinical Skincare Treatment Room',
    category: 'Spa & Wellness',
    image: spaTreatmentRoom,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-facials',
    title: 'HydraFacial Glow & Advanced Clinical Skincare',
    category: 'Facials & Skincare',
    image: facialTreatment,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-balayage',
    title: 'Hand-Painted Balayage & Dimensional Highlights',
    category: 'Hair Artistry',
    image: hairStylingBalayage,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-bridal',
    title: 'Bespoke Bridal Makeup & Dupatta Draping',
    category: 'Bridal & Makeup',
    image: bridalMakeup,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-spa-wellness',
    title: 'Aromatherapy & Holistic Body Wellness',
    category: 'Spa & Wellness',
    image: spaWellness,
    aspect: 'aspect-4/3',
  },
  {
    id: 'gal-hero-lounge',
    title: 'Luxury Aesthetics Sanctuary in Katy, TX',
    category: 'Salon Ambiance',
    image: heroSalonSpa,
    aspect: 'aspect-16/9',
  },
];
