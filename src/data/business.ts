export const BUSINESS_INFO = {
  name: "Orchid By Huma",
  tagline: "Luxury Beauty Salon & Spa in Katy, Texas",
  shortDesc: "Discover personalized beauty, skincare, hair, and spa treatments designed to help you relax, rejuvenate, and feel your best.",
  longDesc: "With more than 10 years of experience in beauty and spa care, Orchid By Huma delivers tailored aesthetic treatments, cutting-edge hair transformations, and calming wellness rituals in Katy, Texas.",
  
  // Canonical URL
  websiteUrl: "https://orchidbyhuma.com",
  canonicalUrl: "https://orchidbyhuma.com/",

  // Canonical Location & Contact
  address: {
    street: "1105 S Mason Rd",
    city: "Katy",
    state: "Texas",
    stateCode: "TX",
    zip: "77450",
    country: "United States",
    countryCode: "US",
    full: "1105 S Mason Rd, Katy, TX 77450",
  },
  phone: {
    primary: "(281) 206-0151",
    primaryRaw: "+12812060151",
    primaryDisplay: "281-206-0151",
    secondary: "713-714-7774",
    secondaryRaw: "+17137147774",
  },
  whatsapp: {
    number: "+1 281-206-0151",
    rawNumber: "12812060151",
    display: "(281) 206-0151",
    url: "https://wa.me/12812060151",
    createUrl: (message?: string) => {
      if (!message) return "https://wa.me/12812060151";
      return `https://wa.me/12812060151?text=${encodeURIComponent(message)}`;
    },
  },
  email: {
    primary: "orchbyhuma@gmail.com",
    secondary: "orchidbyhuma@gmail.com",
  },

  // Centralized Business Hours (No conflicting hours across site or schemas)
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 6:30 PM", opens: "10:00", closes: "18:30" },
    { days: "Sunday", time: "12:00 PM – 5:00 PM", opens: "12:00", closes: "17:00" },
  ],

  // Google Rating from actual business profile
  rating: {
    score: 4.8,
    scale: 5.0,
    source: "Google Reviews",
  },
  experienceYears: "10+",
  
  // Real Maps Embed & Directions
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.385465223038!2d-95.7533!3d29.7686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dfa1f81dfef7%3A0xb3a826bc48be28!2s1105%20S%20Mason%20Rd%2C%20Katy%2C%20TX%2077450!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=1105+S+Mason+Rd,+Katy,+TX+77450",
  
  instagramUrl: "https://www.instagram.com/orchidbyhuma/",
  instagramHandle: "@orchidbyhuma",
};
