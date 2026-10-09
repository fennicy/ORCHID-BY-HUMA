import {
  facialTreatment as facialImage,
  hairStylingBalayage as balayageImage,
  bridalMakeup as bridalImage,
  heroSalonSpa as heroImage,
  spaWellness as spaImage,
} from '../assets/images';

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  category: string;
  url: string;
}

export interface InstagramReel {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

// Authentic existing imagery from Orchid By Huma assets for the visual grid
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: facialImage,
    alt: 'HydraFacial skin rejuvenation treatment at Orchid By Huma in Katy, TX',
    category: 'Skincare',
    url: 'https://www.instagram.com/orchidbyhuma/',
  },
  {
    id: 'ig-2',
    image: balayageImage,
    alt: 'Dimensional balayage hair color transformation at Orchid By Huma in Katy, TX',
    category: 'Hair Artistry',
    url: 'https://www.instagram.com/orchidbyhuma/',
  },
  {
    id: 'ig-3',
    image: bridalImage,
    alt: 'Luxury bridal makeup and dupatta styling by Orchid By Huma in Katy, TX',
    category: 'Bridal Glam',
    url: 'https://www.instagram.com/orchidbyhuma/',
  },
  {
    id: 'ig-4',
    image: heroImage,
    alt: 'Salon and spa interior at Orchid By Huma on South Mason Road in Katy, TX',
    category: 'Salon Sanctuary',
    url: 'https://www.instagram.com/orchidbyhuma/',
  },
  {
    id: 'ig-5',
    image: spaImage,
    alt: 'Relaxation hot oil massage ritual at Orchid By Huma in Katy, TX',
    category: 'Spa & Wellness',
    url: 'https://www.instagram.com/orchidbyhuma/',
  },
  {
    id: 'ig-6',
    image: balayageImage,
    alt: 'Smooth blowout and hair styling at Orchid By Huma in Katy, TX',
    category: 'Hair Styling',
    url: 'https://www.instagram.com/orchidbyhuma/',
  },
];

// Content-ready list for verified Instagram Reels.
export const FEATURED_REELS: InstagramReel[] = [];
