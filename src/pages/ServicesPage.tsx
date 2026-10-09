import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { SERVICE_CATEGORIES } from '../data/services';
import { BUSINESS_INFO } from '../data/business';
import { ServiceCategoryKey } from '../types';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Calendar, ArrowRight, Clock, Sparkles } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate, queryParams } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getServiceWhatsAppMessage = (categoryKey: string, serviceName: string) => {
    if (categoryKey === 'facials') {
      return "Hi Orchid By Huma, I'm interested in your facial services.";
    }
    if (categoryKey === 'hair-styling' || categoryKey === 'hair-color' || categoryKey === 'haircuts') {
      return "Hi Orchid By Huma, I'm interested in your hair services.";
    }
    if (categoryKey === 'makeup') {
      return "Hi Orchid By Huma, I'm interested in bridal and event makeup.";
    }
    if (categoryKey === 'waxing') {
      return "Hi Orchid By Huma, I'm interested in your waxing and body treatment services.";
    }
    return `Hi Orchid By Huma, I'm interested in your ${serviceName} service.`;
  };

  useEffect(() => {
    if (queryParams.category) {
      setActiveCategory(queryParams.category);
    }
  }, [queryParams.category]);

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'facials', label: 'Facials & Skincare' },
    { key: 'hair-styling', label: 'Hair Styling & Treatments' },
    { key: 'hair-color', label: 'Hair Color & Highlights' },
    { key: 'haircuts', label: 'Precision Haircuts' },
    { key: 'makeup', label: 'Bridal & Event Makeup' },
    { key: 'waxing', label: 'Waxing & Body' },
    { key: 'threading', label: 'Threading & Face' },
    { key: 'tint-lamination', label: 'Tint & Lamination' },
    { key: 'massage', label: 'Massage & Spa' },
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.key === activeCategory);

  return (
    <div className="space-y-0">
      <PageHero
        title="Beauty, Spa & Salon Services in Katy, TX"
        subtitle="Discover our comprehensive directory of facial, hair, bridal, waxing, and wellness treatments crafted with 10+ years of expertise."
        breadcrumb="Services"
      />

      {/* FILTER TABS: Interactive Segmented Control */}
      <section className="bg-[#FAF7F5] border-b border-[#EACCC9] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#38201F] text-[#FAF7F5] shadow-xs'
                      : 'bg-[#F0D8D6]/40 text-[#4A2C2A] hover:bg-[#EACCC9] hover:text-[#38201F]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEDICATED TREATMENT GUIDES BAR (Local Intent & Deep Linking) */}
      <section className="bg-[#F0D8D6]/35 border-b border-[#EACCC9] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-2.5 text-xs">
          <div className="flex items-center gap-2 font-semibold text-[#38201F] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#4A2C2A]" />
            <span>Dedicated Service Guides &amp; Local Specialties in Katy, TX:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[#4A2C2A]">
            <Link to="/services/hydrafacial-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              HydraFacial ($110)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/balayage-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Balayage ($240+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/hair-color-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Hair Color ($60+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/highlights-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Highlights ($130+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/blowout-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Blowouts ($45+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/haircuts-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Precision Haircuts ($40+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/facials-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Facials ($55+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/microdermabrasion-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Microdermabrasion ($80)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/acne-facial-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Acne Facial ($65)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/bridal-makeup-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Bridal Makeup ($750)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/makeup-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Event Makeup ($75+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/waxing-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Waxing ($20+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/brazilian-wax-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Brazilian Wax ($50)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/threading-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Threading ($10)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/lash-lift-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Lash Lift ($60)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/brow-lamination-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Brow Lamination ($70)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/massage-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Hot Oil Massage ($40+)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/body-scrub-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Body Scrub ($65)
            </Link>
            <span className="text-[#EACCC9]">·</span>
            <Link to="/services/aesthetics-katy-tx" className="hover:text-[#38201F] transition-colors underline font-medium">
              Clinical Aesthetics ($95+)
            </Link>
          </div>
        </div>
      </section>

      {/* DETAILED CATEGORIES CONTENT */}
      <section className="py-16 lg:py-24 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {filteredCategories.map((category) => (
            <div
              key={category.key}
              id={category.key}
              className="scroll-mt-36 space-y-8"
            >
              {/* Category Header Banner with Editorial Image */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#EACCC9] p-6 sm:p-8">
                <div className="lg:col-span-8 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
                    Specialized Department
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#38201F]">
                    {category.title}
                  </h2>
                  <p className="text-[#4A2C2A]/80 text-sm sm:text-base leading-relaxed max-w-3xl">
                    {category.longDescription}
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-xs font-medium text-[#4A2C2A]/70">
                    <span>{category.services.length} Total Treatments</span>
                    <span>·</span>
                    <span>Prices Listed Below</span>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="aspect-16/10 lg:aspect-4/3 overflow-hidden border border-[#EACCC9]">
                    <img
                      src={category.image}
                      alt={`${category.title} services at Orchid By Huma in Katy TX`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Services Item Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => {
                  const guideRouteMap: Record<string, string> = {
                    'hydra-facial': '/services/hydrafacial-katy-tx',
                    'balayage': '/services/balayage-katy-tx',
                    'bridal-makeup': '/services/bridal-makeup-katy-tx',
                    'brazilian-wax': '/services/brazilian-wax-katy-tx',
                    'lash-lift-tint': '/services/lash-lift-katy-tx',
                    'full-hair-color': '/services/hair-color-katy-tx',
                    'root-touch-up': '/services/hair-color-katy-tx',
                    'highlights-full': '/services/highlights-katy-tx',
                    'partial-highlights': '/services/highlights-katy-tx',
                    'brazilian-blowout': '/services/blowout-katy-tx',
                    'voluminous-blowdry': '/services/blowout-katy-tx',
                    'haircut': '/services/haircuts-katy-tx',
                    'microdermabrasion': '/services/microdermabrasion-katy-tx',
                    'acne-facial': '/services/acne-facial-katy-tx',
                    'hot-oil-massage-60': '/services/massage-katy-tx',
                    'hot-oil-massage-30': '/services/massage-katy-tx',
                    'body-scrubbing': '/services/body-scrub-katy-tx',
                    'full-body-with-brazilian': '/services/waxing-katy-tx',
                    'eyebrows-threading': '/services/threading-katy-tx',
                    'eyebrow-lamination': '/services/brow-lamination-katy-tx',
                    'party-makeup': '/services/makeup-katy-tx',
                    'micro-needling': '/services/aesthetics-katy-tx',
                    'chemical-peel': '/services/aesthetics-katy-tx',
                  };
                  const guideRoute = guideRouteMap[service.id];

                  return (
                    <div
                      key={service.id}
                      className="bg-white border border-[#EACCC9] p-6 flex flex-col justify-between space-y-4 hover:border-[#E6C4C2] transition-all duration-200"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3 border-b border-[#EACCC9]/40 pb-3">
                          <h3 className="font-serif text-xl text-[#38201F] leading-snug font-medium">
                            {service.name}
                          </h3>
                          <div className="text-right shrink-0">
                            <span className="font-serif text-xl text-[#4A2C2A] font-semibold block">
                              {service.price}
                            </span>
                          </div>
                        </div>

                        <p className="text-[#4A2C2A]/80 text-xs sm:text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#EACCC9]/40 flex items-center justify-between gap-2">
                        {service.duration ? (
                          <span className="text-xs text-[#4A2C2A]/60 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5 text-[#4A2C2A]" />
                            <span>{service.duration}</span>
                          </span>
                        ) : (
                          <span />
                        )}

                        <div className="flex items-center gap-2">
                          {guideRoute && (
                            <Link
                              to={guideRoute}
                              className="text-[11px] font-semibold text-[#4A2C2A] hover:text-[#38201F] underline mr-1"
                            >
                              Guide
                            </Link>
                          )}
                          <a
                            href={BUSINESS_INFO.whatsapp.createUrl(getServiceWhatsAppMessage(category.key, service.name))}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ask about ${service.name} on WhatsApp`}
                            title="Chat on WhatsApp"
                            className="p-1.5 border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] transition-colors"
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() =>
                              navigate('/book', {
                                service: service.id,
                                category: service.category,
                              })
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A2C2A] hover:text-[#38201F] transition-colors cursor-pointer"
                          >
                            <span>Book</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING NOTE BANNER */}
      <section className="py-12 bg-[#F0D8D6]/30 border-t border-b border-[#EACCC9]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A2C2A]">
            Transparent Pricing Policy
          </span>
          <p className="text-[#4A2C2A]/90 text-xs sm:text-sm leading-relaxed">
            Prices listed are starting prices where indicated (&amp; up) and may vary depending on hair length, density, treatment requirements and customization. Please consult our stylists during your visit for an exact quote.
          </p>
          <div className="pt-2">
            <Link
              to="/pricing"
              className="text-xs uppercase tracking-widest font-semibold text-[#4A2C2A] hover:text-[#38201F] underline"
            >
              View Full Pricing Page →
            </Link>
          </div>
        </div>
      </section>

      {/* CONVERSION BOTTOM CTA */}
      <section className="py-20 bg-[#38201F] text-[#FAF7F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C4C2]">
            Reserve Your Treatment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-[#F0D8D6] text-sm leading-relaxed">
            Our Katy beauty team is ready to assist you. Choose your preferred service and time, or call us directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/book')}
              className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-8 py-3.5 text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#38201F]" />
              <span>Book An Appointment</span>
            </button>
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Orchid By Huma"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-white border border-[#25D366]/60 hover:border-[#25D366] px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="border border-[#EACCC9]/60 hover:border-white text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Contact Our Salon
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
