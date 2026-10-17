import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  bridalMakeup,
  facialTreatment,
  tintLaminationLashes,
  brazilianWaxingBody,
  orchidReceptionSalon,
} from '../assets/images';
import {
  Sparkles,
  Phone,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Gift,
  ArrowRight,
  ShieldCheck,
  Star,
} from 'lucide-react';

interface BeautyDeal {
  id: string;
  name: string;
  price: string;
  category: string;
  bookingCategory: string;
  bookingServiceId: string;
  description: string;
  highlightBonus?: string;
  tag?: string;
  image: string;
  duration: string;
  features: string[];
}

export const DealsPage: React.FC = () => {
  const { navigate } = useRouter();

  const deals: BeautyDeal[] = [
    {
      id: 'deal-bridal-makeup',
      name: 'Bridal Makeup',
      price: '$750',
      category: 'Bridal Artistry',
      bookingCategory: 'makeup',
      bookingServiceId: 'bridal-makeup',
      description:
        'Couture bridal beauty transformation with high-definition airbrush application, luxury lashes, jewelry setting, and complete dupatta draping for your unforgettable day.',
      tag: 'Signature Bridal',
      image: bridalMakeup,
      duration: '180 min',
      features: [
        'Luxury airbrush or HD foundation finish',
        'Custom mink lash application',
        'Jewelry setting & veil / dupatta pin-up',
        'Long-wear 16-hour camera-ready formula',
      ],
    },
    {
      id: 'deal-engagement-makeup',
      name: 'Engagement Makeup',
      price: '$450',
      category: 'Special Occasion',
      bookingCategory: 'makeup',
      bookingServiceId: 'engagement-makeup',
      description:
        'Radiant ceremony makeup tailored to your engagement attire. Includes comprehensive skin prep, precision lash enhancement, and glamorous eye artistry.',
      tag: 'Celebration Glam',
      image: bridalMakeup,
      duration: '120 min',
      features: [
        'Radiant skin prep & customized contouring',
        'Glamorous eye artistry & lash enhancement',
        'Tailored color harmony for your outfit',
        'High-definition camera & video finish',
      ],
    },
    {
      id: 'deal-party-makeup',
      name: 'Party Makeup',
      price: '$300',
      category: 'Event Glamour',
      bookingCategory: 'makeup',
      bookingServiceId: 'party-makeup',
      description:
        'Flawless, photo-ready glam tailored for galas, receptions, birthdays, or festivities. Includes full face sculpt, premium eye look, and fluttery lash placement.',
      tag: 'Party Favorite',
      image: bridalMakeup,
      duration: '90 min',
      features: [
        'Luminous base & bespoke cheek sculpting',
        'Neutral or smokey eye design with lashes',
        'Transfer-resistant, long-lasting setting',
        'Lip contouring & luxury gloss application',
      ],
    },
    {
      id: 'deal-facial-eyebrow-shaping',
      name: 'Any Facial + Free Eyebrow Shaping',
      price: '$50',
      category: 'Skincare Special',
      bookingCategory: 'facials',
      bookingServiceId: 'basic-facial',
      description:
        'Rejuvenate your complexion with deep pore cleansing, botanical exfoliation, and custom hydration mask, plus receive complimentary eyebrow shaping.',
      highlightBonus: 'Free Eyebrow Shaping',
      tag: 'Best Value Package',
      image: facialTreatment,
      duration: '55 min',
      features: [
        'Deep pore cleansing & gentle steam exfoliation',
        'Custom botanical hydration mask & facial massage',
        'BONUS: Precision eyebrow shaping included free',
        'Instant skin glow with zero redness or downtime',
      ],
    },
    {
      id: 'deal-eyebrow-threading-brow-tint',
      name: 'Eyebrow Threading + Brow Tint',
      price: '$25',
      category: 'Brow Enhancement',
      bookingCategory: 'threading',
      bookingServiceId: 'eyebrows-threading',
      description:
        'Complete brow architecture duo. Organic antibacterial thread cleanly sculpts your natural arch while custom color tinting adds fullness, depth, and definition.',
      tag: 'Brow Duo',
      image: tintLaminationLashes,
      duration: '30 min',
      features: [
        'Master organic cotton thread shaping',
        'Custom-blended tint matching your hair undertone',
        'Enhances sparse areas for effortless fullness',
        'Lasts up to 3 to 4 weeks with proper care',
      ],
    },
    {
      id: 'deal-full-face-threading',
      name: 'Full Face Threading',
      price: '$30',
      category: 'Facial Grooming',
      bookingCategory: 'threading',
      bookingServiceId: 'full-face-threading',
      description:
        'Total face smoothing using traditional organic thread across eyebrows, upper lip, chin, cheeks, sideburns, and forehead for an immaculate, glass-skin canvas.',
      tag: 'Silk Canvas',
      image: orchidReceptionSalon,
      duration: '35 min',
      features: [
        'Eyebrows, upper lip, chin, cheeks & forehead',
        'Exfoliates dead skin cells alongside peach fuzz',
        '100% natural, chemical-free & wax-free technique',
        'Allows skincare and makeup to apply seamlessly',
      ],
    },
    {
      id: 'deal-brazilian-wax',
      name: 'Brazilian Wax',
      price: '$40',
      category: 'Body Wellness',
      bookingCategory: 'waxing',
      bookingServiceId: 'brazilian-wax',
      description:
        'Expert, hygienic intimate waxing performed by licensed, discreet estheticians using premium temperature-regulated stripless hard wax for maximum comfort.',
      tag: 'Client Favorite',
      image: brazilianWaxingBody,
      duration: '30 min',
      features: [
        'Temperature-regulated botanical stripless wax',
        'Gentle on sensitive skin & reduces discomfort',
        'Hygienic single-use protocols & private spa room',
        'Calming post-wax soothing lotion application',
      ],
    },
  ];

  const handleBookDeal = (deal: BeautyDeal) => {
    navigate(`/book?category=${deal.bookingCategory}&service=${deal.bookingServiceId}`);
  };

  return (
    <div className="space-y-0">
      <PageHero
        title="Exclusive Beauty Deals"
        subtitle="Enhance your beauty with our exclusive makeup and beauty services."
        breadcrumb="Exclusive Deals"
      />

      {/* PROMOTIONS SHOWCASE SECTION */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* Section Kicker & Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0D8D6]/70 border border-[#EACCC9] text-xs font-semibold uppercase tracking-[0.2em] text-[#38201F]">
              <Sparkles className="w-3.5 h-3.5 text-[#4A2C2A]" />
              <span>Limited-Time Salon &amp; Spa Specials</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F] tracking-tight">
              Featured Makeup &amp; Beauty Offers
            </h2>
            <p className="text-[#4A2C2A]/80 text-sm sm:text-base leading-relaxed">
              Experience the highest standard of personalized care at Orchid By Huma in Katy, Texas. Every service is performed with premium products, meticulous hygiene, and warm hospitality.
            </p>
          </div>

          {/* 7 DEALS RESPONSIVE CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {deals.map((deal) => {
              const isHighlightDeal = Boolean(deal.highlightBonus);

              return (
                <div
                  key={deal.id}
                  className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                    isHighlightDeal
                      ? 'border-[#E6C4C2] ring-2 ring-[#E6C4C2]/50 bg-gradient-to-b from-white to-[#FAF7F5]'
                      : 'border-[#EACCC9] hover:border-[#4A2C2A]/40'
                  }`}
                >
                  {/* Visual Header with Image */}
                  <div>
                    <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#38201F]/5">
                      <img
                        src={deal.image}
                        alt={`${deal.name} at Orchid By Huma in Katy TX`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient Overlay for Text Pop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Tag Badge */}
                      {deal.tag && (
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#38201F] shadow-sm backdrop-blur-xs flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#E6C4C2]" />
                            {deal.tag}
                          </span>
                        </div>
                      )}

                      {/* Duration Tag */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#38201F]/80 text-[#FAF7F5] backdrop-blur-xs flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#E6C4C2]" />
                          {deal.duration}
                        </span>
                      </div>

                      {/* Prominent Price Display on Image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#F0D8D6] font-medium block">
                            {deal.category}
                          </span>
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-xs">
                            {deal.price}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="text-[11px] text-white/90 font-medium bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-xs">
                            Katy, TX Salon
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 space-y-4">
                      {/* Special Bonus Callout (for Facial + Free Eyebrow Shaping) */}
                      {deal.highlightBonus && (
                        <div className="p-3 rounded-xl bg-[#F0D8D6]/70 border border-[#EACCC9] flex items-center gap-2.5 text-[#38201F] animate-pulse">
                          <Gift className="w-5 h-5 text-[#4A2C2A] shrink-0" />
                          <div className="text-xs font-bold uppercase tracking-wider">
                            Special Bonus: <span className="text-[#38201F] underline">{deal.highlightBonus}</span>
                          </div>
                        </div>
                      )}

                      {/* Service Title */}
                      <h3 className="font-serif text-2xl text-[#38201F] group-hover:text-[#4A2C2A] transition-colors leading-snug">
                        {deal.name}
                      </h3>

                      {/* Description */}
                      <p className="text-[#4A2C2A]/85 text-xs sm:text-sm leading-relaxed">
                        {deal.description}
                      </p>

                      {/* Bulleted Feature Highlights */}
                      <ul className="space-y-2 pt-2 border-t border-[#EACCC9]/50">
                        {deal.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#4A2C2A]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#4A2C2A] shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 sm:p-7 pt-0 space-y-3">
                    <button
                      onClick={() => handleBookDeal(deal)}
                      className="w-full py-3.5 px-5 rounded-xl bg-[#4A2C2A] hover:bg-[#38201F] active:bg-[#2A1817] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group/btn"
                    >
                      <Calendar className="w-4 h-4 text-[#E6C4C2]" />
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E6C4C2] group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-[#4A2C2A]/70 pt-1">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#E6C4C2] text-[#E6C4C2]" />
                        <span>4.8 ★ Google Rating</span>
                      </span>
                      <span>1105 S Mason Rd</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Support & Questions Box */}
          <div className="bg-white border border-[#EACCC9] rounded-2xl p-8 sm:p-10 lg:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-[#F0D8D6]/60 border border-[#EACCC9] text-[#38201F] mx-auto flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#4A2C2A]" />
            </div>

            <div className="space-y-2 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] text-[#4A2C2A] font-semibold block">
                Personalized Consultations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#38201F]">
                Questions About Bridal Packages or Custom Combinations?
              </h3>
              <p className="text-[#4A2C2A]/85 text-xs sm:text-sm leading-relaxed">
                Planning a wedding party, engagement, or multiple aesthetic sessions? Our friendly Katy team is available to assist you with scheduling, timing, and customized package pricing.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with Orchid By Huma"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-[#1E3A2F] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#E6C4C2]" />
                <span>Call {BUSINESS_INFO.phone.primary}</span>
              </a>
            </div>
          </div>

          {/* Complimentary Salon Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-[#EACCC9] rounded-2xl p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/50 text-[#38201F] mx-auto flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#4A2C2A]" />
              </div>
              <h4 className="font-serif text-lg text-[#38201F] font-semibold">
                Complimentary Consultation
              </h4>
              <p className="text-xs text-[#4A2C2A]/80 leading-relaxed">
                Every service includes an in-depth conversation with your artist to ensure your exact vision is realized.
              </p>
            </div>

            <div className="bg-white border border-[#EACCC9] rounded-2xl p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/50 text-[#38201F] mx-auto flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#4A2C2A]" />
              </div>
              <h4 className="font-serif text-lg text-[#38201F] font-semibold">
                Licensed Professionals
              </h4>
              <p className="text-xs text-[#4A2C2A]/80 leading-relaxed">
                10+ years of beauty and spa excellence in Katy, Texas using hospital-grade sterilization and top-tier formulations.
              </p>
            </div>

            <div className="bg-white border border-[#EACCC9] rounded-2xl p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/50 text-[#38201F] mx-auto flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#4A2C2A]" />
              </div>
              <h4 className="font-serif text-lg text-[#38201F] font-semibold">
                Mason Road Sanctuary
              </h4>
              <p className="text-xs text-[#4A2C2A]/80 leading-relaxed">
                Conveniently located at 1105 S Mason Rd with private spa suites, calm ambiance, and convenient parking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;
