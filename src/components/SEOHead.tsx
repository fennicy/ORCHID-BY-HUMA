import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { MAIN_FAQS } from '../data/faqs';
import { SERVICE_LANDING_PAGES } from '../data/servicePages';

export const SEOHead: React.FC = () => {
  const { currentPath } = useRouter();

  useEffect(() => {
    // 1. Determine Route Metadata
    let title = 'Orchid By Huma | Luxury Beauty Salon, Spa & Aesthetics in Katy, TX';
    let description =
      'Luxury salon, spa and aesthetics services in Katy, TX. Explore hair, facials, HydraFacial, makeup, waxing, lashes, brows, massage and more at Orchid By Huma.';
    let canonical = 'https://orchidbyhuma.com/';
    let image = 'https://orchidbyhuma.com/assets/images/hero_salon_spa_1791303830093.jpg';
    let breadcrumbItems: { name: string; url: string }[] = [
      { name: 'Home', url: 'https://orchidbyhuma.com/' },
    ];
    let serviceSchema: Record<string, unknown> | null = null;
    let faqItems = MAIN_FAQS;

    // Check if on dedicated service page
    const serviceSlug = currentPath.replace('/services/', '');
    const servicePage = SERVICE_LANDING_PAGES[serviceSlug];

    if (servicePage) {
      title = servicePage.metaTitle;
      description = servicePage.metaDescription;
      canonical = `https://orchidbyhuma.com${servicePage.route}/`;
      image = `https://orchidbyhuma.com${servicePage.image}`;
      breadcrumbItems = [
        { name: 'Home', url: 'https://orchidbyhuma.com/' },
        { name: 'Services', url: 'https://orchidbyhuma.com/services/' },
        { name: servicePage.h1, url: canonical },
      ];
      serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: servicePage.h1.replace(' in Katy, TX', ''),
        name: servicePage.h1,
        description: servicePage.tagline,
        provider: {
          '@type': ['BeautySalon', 'HairSalon', 'DaySpa'],
          name: BUSINESS_INFO.name,
          telephone: '+1-281-206-0151',
          url: BUSINESS_INFO.canonicalUrl,
          image: 'https://orchidbyhuma.com/assets/images/hero_salon_spa_1791303830093.jpg',
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.address.street,
            addressLocality: BUSINESS_INFO.address.city,
            addressRegion: BUSINESS_INFO.address.stateCode,
            postalCode: BUSINESS_INFO.address.zip,
            addressCountry: BUSINESS_INFO.address.countryCode,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 29.7686,
            longitude: -95.7533,
          },
        },
        areaServed: {
          '@type': 'City',
          name: 'Katy, Texas',
        },
        offers: {
          '@type': 'Offer',
          price: servicePage.price.replace(/[^0-9]/g, '') || '45',
          priceCurrency: 'USD',
          url: canonical,
        },
      };
      faqItems = servicePage.faqs;
    } else {
      switch (currentPath) {
        case '/about':
          title = 'About Orchid By Huma | Luxury Salon & Spa in Katy, TX';
          description =
            'Discover Orchid By Huma: over 10 years of personalized beauty, skincare, and hair expertise in Katy, Texas. Meet our team and explore our philosophy.';
          canonical = 'https://orchidbyhuma.com/about/';
          breadcrumbItems = [
            { name: 'Home', url: 'https://orchidbyhuma.com/' },
            { name: 'About Us', url: canonical },
          ];
          faqItems = [];
          break;
        case '/services':
          title = 'Beauty, Hair, Spa & Aesthetic Services in Katy, TX | Orchid By Huma';
          description =
            'Browse our complete menu of beauty services in Katy, TX: HydraFacials, balayage, haircuts, blowouts, bridal makeup, body waxing, threading, and massage.';
          canonical = 'https://orchidbyhuma.com/services/';
          breadcrumbItems = [
            { name: 'Home', url: 'https://orchidbyhuma.com/' },
            { name: 'Services', url: canonical },
          ];
          faqItems = [];
          break;
        case '/pricing':
          title = 'Salon & Spa Pricing in Katy, TX | Orchid By Huma';
          description =
            'Explore transparent pricing for all salon and spa treatments at Orchid By Huma in Katy, Texas. Starting prices and consultation details.';
          canonical = 'https://orchidbyhuma.com/pricing/';
          breadcrumbItems = [
            { name: 'Home', url: 'https://orchidbyhuma.com/' },
            { name: 'Pricing', url: canonical },
          ];
          faqItems = [];
          break;
        case '/contact':
          title = 'Contact Orchid By Huma | Salon & Spa in Katy, TX';
          description =
            'Contact Orchid By Huma at 1105 S Mason Rd, Katy, Texas 77450. Phone: 281-206-0151. Get directions, salon hours, and send messages.';
          canonical = 'https://orchidbyhuma.com/contact/';
          breadcrumbItems = [
            { name: 'Home', url: 'https://orchidbyhuma.com/' },
            { name: 'Contact Us', url: canonical },
          ];
          faqItems = [];
          break;
        case '/appointment':
          title = 'Book an Appointment in Katy, TX | Orchid By Huma';
          description =
            'Reserve your visit at Orchid By Huma in Katy, Texas. Select your preferred service, date, and time for facials, hair styling, and beauty care.';
          canonical = 'https://orchidbyhuma.com/appointment/';
          breadcrumbItems = [
            { name: 'Home', url: 'https://orchidbyhuma.com/' },
            { name: 'Book Appointment', url: canonical },
          ];
          faqItems = [];
          break;
        case '/':
        default:
          title = 'Orchid By Huma | Luxury Beauty Salon, Spa & Aesthetics in Katy, TX';
          description =
            'Luxury salon, spa and aesthetics services in Katy, TX. Explore hair, facials, HydraFacial, makeup, waxing, lashes, brows, massage and more at Orchid By Huma.';
          canonical = 'https://orchidbyhuma.com/';
          breadcrumbItems = [{ name: 'Home', url: 'https://orchidbyhuma.com/' }];
          faqItems = MAIN_FAQS;
          break;
      }
    }

    // 2. Update Document Head Metadata
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const nameVal = selector.match(/name="([^"]+)"/)?.[1];
          if (nameVal) el.setAttribute('name', nameVal);
        } else if (selector.startsWith('meta[property=')) {
          const propVal = selector.match(/property="([^"]+)"/)?.[1];
          if (propVal) el.setAttribute('property', propVal);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    // 3. Update Canonical Tag
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    // 4. Update Dynamic Schema Script
    const schemaBreadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const schemasToInject: unknown[] = [schemaBreadcrumb];

    if (faqItems && faqItems.length > 0) {
      const schemaFAQ = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };
      schemasToInject.push(schemaFAQ);
    }

    if (serviceSchema) {
      schemasToInject.push(serviceSchema);
    }

    let dynamicScript = document.getElementById('schema-dynamic');
    if (!dynamicScript) {
      dynamicScript = document.createElement('script');
      dynamicScript.id = 'schema-dynamic';
      dynamicScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(dynamicScript);
    }

    dynamicScript.textContent = JSON.stringify(schemasToInject);
  }, [currentPath]);

  return null;
};
