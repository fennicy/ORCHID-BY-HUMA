export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  startingPrice?: boolean;
  duration?: string;
  description: string;
  category: ServiceCategoryKey;
  popular?: boolean;
  featured?: boolean;
}

export type ServiceCategoryKey =
  | 'facials'
  | 'makeup'
  | 'waxing'
  | 'hair-styling'
  | 'hair-color'
  | 'haircuts'
  | 'threading'
  | 'tint-lamination'
  | 'massage'
  | 'other';

export interface ServiceCategory {
  key: ServiceCategoryKey;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  services: ServiceItem[];
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  serviceMentioned: string;
  reviewText: string;
  verifiedSource: string;
  date?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  specificService: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
