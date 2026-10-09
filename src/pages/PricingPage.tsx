import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { SERVICE_CATEGORIES } from '../data/services';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Calendar, Phone, ArrowRight, Info, Sparkles } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-0">
      <PageHero
        title="Salon & Spa Pricing in Katy, TX"
        subtitle="Explore transparent, upfront pricing for all salon and spa treatments at Orchid By Huma in Katy, Texas. Starting prices and consultation details."
        breadcrumb="Pricing"
      />

      {/* PRICING POLICY CALLOUT BOX */}
      <section className="bg-[#FAF7F5] pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#F0D8D6]/35 border border-[#EACCC9] p-5 sm:p-6 flex items-start gap-4">
            <Info className="w-5 h-5 text-[#4A2C2A] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-[#4A2C2A]/90 leading-relaxed">
              <strong className="text-[#38201F] font-semibold block uppercase tracking-wider text-xs">
                Pricing &amp; Consultation Policy
              </strong>
              <p>
                Prices listed are starting prices where indicated (&amp; up) and may vary depending on hair length, density, treatment requirements and customization. All services include a personalized consultation before beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTIONS BY DEPARTMENT */}
      <section className="py-12 lg:py-20 bg-[#FAF7F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.key}
              className="bg-white border border-[#EACCC9] p-6 sm:p-10 shadow-xs space-y-8"
            >
              {/* Category Title */}
              <div className="border-b border-[#EACCC9]/60 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#4A2C2A] font-semibold">
                    Menu Section
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#38201F]">
                    {category.title}
                  </h2>
                </div>
                <span className="text-xs text-[#4A2C2A]/70">
                  {category.services.length} items listed
                </span>
              </div>

              {/* Price Table / List */}
              <div className="divide-y divide-[#EACCC9]/30">
                {category.services.map((item) => {
                  const isStarting = item.price.includes('& up') || item.startingPrice;
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
                  const guideRoute = guideRouteMap[item.id];
                  return (
                    <div
                      key={item.id}
                      className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-[#F0D8D6]/20 px-2 -mx-2 transition-colors"
                    >
                      <div className="space-y-1 max-w-2xl">
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif text-lg sm:text-xl text-[#38201F] font-medium">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <span className="text-[10px] uppercase tracking-wider text-[#4A2C2A] font-semibold bg-[#F0D8D6]/60 px-2 py-0.5 border border-[#EACCC9]/60">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[#4A2C2A]/80 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#EACCC9]/30">
                        <div className="text-right">
                          {isStarting && (
                            <span className="text-[10px] uppercase tracking-wider text-[#4A2C2A]/60 block font-medium">
                              Starting at
                            </span>
                          )}
                          <span className="font-serif text-xl sm:text-2xl text-[#4A2C2A] font-semibold tabular-nums">
                            {item.price}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {guideRoute && (
                            <Link
                              to={guideRoute}
                              className="text-[11px] font-semibold text-[#4A2C2A] hover:text-[#38201F] underline"
                            >
                              Guide
                            </Link>
                          )}
                          <button
                            onClick={() =>
                              navigate('/book', {
                                service: item.id,
                                category: item.category,
                              })
                            }
                            className="px-3 py-1.5 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-[11px] uppercase tracking-wider font-semibold transition-colors cursor-pointer shrink-0"
                          >
                            Book
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

      {/* CONVERSION CALLOUT: READY TO BOOK? */}
      <section className="py-20 bg-[#38201F] text-[#FAF7F5] text-center border-t border-[#4A2C2A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C4C2]">
            Transparent Beauty Care
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Ready to Book Your Visit?
          </h2>
          <p className="text-[#F0D8D6] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Reserve your seat online in seconds or call our Katy salon for customized packages and bridal consultations.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/book')}
              className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-8 py-3.5 text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#38201F]" />
              <span>Book Appointment</span>
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
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-[#EACCC9]/60 hover:border-white text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E6C4C2]" />
              <span>Call (281) 206-0151</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
