import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { SERVICE_CATEGORIES } from '../data/services';
import { TESTIMONIALS } from '../data/testimonials';
import { FAQSection } from '../components/FAQSection';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  heroSalonSpa as heroImage,
  facialTreatment as facialImage,
  hairStylingBalayage as balayageImage,
  bridalMakeup as bridalImage,
  spaTreatmentRoom as spaRoomImage,
  salonInteriorHair as salonInteriorImage,
  hairWashStyling as hairWashImage,
  orchidReceptionSalon as receptionImage,
  tintLaminationLashes as lashImage,
  brazilianWaxingBody as brazilianWaxingImage,
  customClinicalFacials as customFacialsImage,
} from '../assets/images';
import {
  Calendar,
  Phone,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Star,
  Clock,
  MapPin,
  Heart,
  Droplet,
  Layers,
  Navigation,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  // Highlighted signature treatments linking to dedicated service landing pages
  const featuredTreatments = [
    {
      title: 'HydraFacial Clinical Treatment',
      category: 'Facials & Skincare',
      price: '$110',
      description: 'Deep vortex pore extraction followed by intensive botanical antioxidant & hyaluronic hydration.',
      image: facialImage,
      landingRoute: '/services/hydrafacial-katy-tx',
      whatsappText: "Hi Orchid By Huma, I'm interested in your HydraFacial clinical treatment.",
    },
    {
      title: 'Bespoke Balayage & Gloss',
      category: 'Hair Color',
      price: '$240 & up',
      description: 'Hand-painted sun-kissed dimension with seamless root transition and high-shine gloss toner.',
      image: balayageImage,
      landingRoute: '/services/balayage-katy-tx',
      whatsappText: "Hi Orchid By Huma, I'm interested in your hair services and balayage.",
    },
    {
      title: 'Luxury Bridal Makeup & Dupatta',
      category: 'Bridal Beauty',
      price: '$750',
      description: 'Full bridal transformation with airbrush complexion, lashes, jewelry placement, and traditional dupatta setting.',
      image: bridalImage,
      landingRoute: '/services/bridal-makeup-katy-tx',
      whatsappText: "Hi Orchid By Huma, I'm interested in bridal and event makeup.",
    },
    {
      title: 'Brazilian Waxing & Body Care',
      category: 'Waxing & Body',
      price: '$50 / $120',
      description: 'Gentle stripless wax formulated for sensitive intimate skin, administered in private sanitary suites.',
      image: brazilianWaxingImage,
      landingRoute: '/services/brazilian-wax-katy-tx',
      whatsappText: "Hi Orchid By Huma, I'm interested in your waxing and body treatment services.",
    },
    {
      title: 'Lash Lift & Brow Lamination',
      category: 'Tint & Lamination',
      price: '$60 / $70',
      description: 'Semi-permanent curl and feathered upward brow sculpting for awake, naturally defined eyes.',
      image: lashImage,
      landingRoute: '/services/lash-lift-katy-tx',
      whatsappText: "Hi Orchid By Huma, I'm interested in lash lift and brow lamination services.",
    },
    {
      title: 'Custom Clinical Facials',
      category: 'Facials & Skincare',
      price: '$55–$110',
      description: 'Targeted skin therapy for acne, hyperpigmentation, anti-aging, and deep hydration.',
      image: customFacialsImage,
      landingRoute: '/services/facials-katy-tx',
      whatsappText: "Hi Orchid By Huma, I'm interested in your facial services.",
    },
  ];

  const whyChooseFeatures = [
    {
      title: 'Premium Quality Products',
      description:
        'We formulate every treatment with gentle, salon-grade botanical extracts, nourishing hair systems, and medical-grade skincare that deliver visible results while protecting sensitive skin.',
      icon: Droplet,
    },
    {
      title: 'Relaxing Atmosphere',
      description:
        'Designed as a tranquil sanctuary away from the Katy hustle. Warm ambient lighting, calming aromatherapy, and private treatment suites provide deep restorative comfort.',
      icon: Heart,
    },
    {
      title: 'Cutting-Edge Techniques',
      description:
        'From vortex-fusion HydraFacials and micro-shading to dimensional balayage and Brazilian Blowouts, our stylists continually train in the latest international beauty methods.',
      icon: Layers,
    },
    {
      title: 'Rigorous Hygiene & Safety',
      description:
        'Professional sanitation and hygiene practices for salon implements and treatment areas adhere to the strictest Texas cosmetology safety standards.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-0">
      {/* =========================================================================
          HERO SECTION (RESTORED LARGE AUTHENTIC HERO IMAGE & CONVERSION ARCHITECTURE)
          ========================================================================= */}
      <section className="relative min-h-[70vh] sm:min-h-[74vh] lg:min-h-[78vh] flex items-center bg-[#38201F] text-[#FAF7F5] overflow-hidden border-b border-[#4A2C2A]">
        {/* Background Large Authentic Editorial Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Orchid By Huma Luxury Salon and Spa interior sanctuary in Katy, Texas"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Directional gradient scrim guaranteeing pristine legibility while showcasing the salon interior */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#38201F]/95 via-[#38201F]/80 to-transparent sm:w-3/4 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#38201F] via-transparent to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 animate-fade-in-up">
          <div className="max-w-2xl space-y-5">
            {/* Trust Kicker & Brand Supporting Text */}
            <div className="space-y-1">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E6C4C2] block">
                Orchid By Huma
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-[#F0D8D6]">
                <Sparkles className="w-3.5 h-3.5 text-[#E6C4C2]" />
                <span>10+ Years of Beauty &amp; Spa Excellence · Katy, TX</span>
              </div>
            </div>

            {/* Primary H1 */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.14] tracking-tight text-balance">
              Luxury Beauty Salon, Spa &amp; Aesthetics Studio in Katy, TX
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#F0D8D6] text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Discover personalized hair artistry, clinical facials, HydraFacial, makeup, waxing, lashes, brows, and restorative massage in Katy, Texas.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/book')}
                className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#38201F]" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with Orchid By Huma"
                className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-white border border-[#25D366]/60 hover:border-[#25D366] px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                className="bg-transparent hover:bg-white/10 text-white border border-[#EACCC9]/60 hover:border-white px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E6C4C2]" />
                <span>Call {BUSINESS_INFO.phone.primary}</span>
              </a>
            </div>

            {/* Direct Phone, Location & Rating Marker */}
            <div className="pt-5 border-t border-[#4A2C2A] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#F0D8D6]">
              <span className="flex items-center gap-1.5 text-[#FAF7F5]">
                <MapPin className="w-3.5 h-3.5 text-[#E6C4C2]" />
                <span>1105 S Mason Rd, Katy, TX</span>
              </span>
              <span className="text-[#4A2C2A]">·</span>
              <span className="text-[#E6C4C2] font-medium flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#E6C4C2] text-[#E6C4C2]" />
                <span>4.8 ★ Google Rating</span>
              </span>
              <span className="text-[#4A2C2A] hidden sm:inline">·</span>
              <span className="text-[#FAF7F5]/70 text-[11px] sm:text-xs hidden sm:inline">
                Mon–Sat 10AM–6:30PM · Sun 12PM–5PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTRO / ABOUT SECTION (10+ YEARS EXPERIENCE)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Grid Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 overflow-hidden shadow-md border border-[#EACCC9]">
                <img
                  src={facialImage}
                  alt="Personalized skincare treatment at Orchid By Huma in Katy TX"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Overlapping Trust Highlight Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#38201F] text-[#FAF7F5] p-5 sm:p-6 shadow-xl border border-[#4A2C2A] max-w-xs">
                <span className="font-serif text-3xl sm:text-4xl text-[#E6C4C2] block">10+</span>
                <span className="text-xs uppercase tracking-wider text-[#F0D8D6] font-medium block mt-1">
                  Years of Beauty &amp; Spa Excellence
                </span>
                <p className="text-[11px] text-[#FAF7F5]/70 mt-1 leading-snug">
                  Proudly serving generations of clients throughout Katy and West Houston.
                </p>
              </div>
            </div>

            {/* Story & Philosophy Column */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
                  About Our Katy Sanctuary
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F] leading-tight">
                  Experience Beauty, Relaxation &amp; Personalized Care
                </h2>
              </div>

              <div className="space-y-4 text-[#4A2C2A] text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong>Orchid By Huma</strong>, we believe genuine beauty care begins with authentic listening. With more than 10 years of experience in dedicated beauty, skincare, and spa treatments in Katy, Texas, our salon provides a welcoming sanctuary where your personal aesthetic vision is brought to life.
                </p>
                <p>
                  Whether you are visiting us for a signature HydraFacial, a dimensional balayage color transformation, a precision haircut, or lavish bridal makeup, our skilled professionals take the time to evaluate your unique features, hair texture, and skin condition.
                </p>
                <p>
                  Every session is conducted with meticulous hygiene, temperature-regulated products, and calming spa touches designed to help you decompress and emerge renewed.
                </p>
              </div>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#4A2C2A]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0" />
                  <span>Personalized skin and hair consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0" />
                  <span>Licensed and seasoned beauty technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0" />
                  <span>Full bridal &amp; event glam specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0" />
                  <span>Sterilized medical-grade tools &amp; botanicals</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => navigate('/about')}
                  className="bg-[#4A2C2A] hover:bg-[#38201F] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  Read Our Full Story
                </button>
                <button
                  onClick={() => navigate('/book')}
                  className="text-[#38201F] hover:text-[#4A2C2A] text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 py-3 transition-colors cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE ORCHID BY HUMA
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F0D8D6]/35 border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
              Our Signature Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
              Why Clients Choose Orchid By Huma
            </h2>
            <p className="text-[#4A2C2A]/80 text-sm sm:text-base">
              A decade of client trust built on precision techniques, uncompromising product quality, and peaceful hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 border border-[#EACCC9] hover:border-[#E6C4C2] transition-all duration-300 space-y-4 group shadow-xs"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F0D8D6]/60 group-hover:bg-[#4A2C2A] transition-colors flex items-center justify-center text-[#4A2C2A] group-hover:text-[#FAF7F5]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#38201F] group-hover:text-[#4A2C2A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#4A2C2A]/80 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THREE PILLARS: HAIR CARE · SKIN & SPA · AESTHETICS & GLAM
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
              Core Specializations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
              Three Pillars of Beauty &amp; Wellness in Katy, TX
            </h2>
            <p className="text-[#4A2C2A]/80 text-sm sm:text-base">
              Explore dedicated departments designed to elevate your personal style, skin health, and celebratory moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Hair Care */}
            <div className="bg-white border border-[#EACCC9] p-8 space-y-6 flex flex-col justify-between hover:border-[#E6C4C2] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#F0D8D6]/60 text-[#4A2C2A] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#38201F]">
                  Hair Care &amp; Artistry
                </h3>
                <p className="text-[#4A2C2A]/80 text-xs sm:text-sm leading-relaxed">
                  Tailored precision cuts, bespoke balayage, dimensional foil highlights, root touch-ups, and Brazilian Blowout smoothing treatments formulated for lasting vitality.
                </p>
                <div className="pt-2 border-t border-[#EACCC9]/40 flex flex-col gap-2 text-xs">
                  <Link to="/services/balayage-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Balayage in Katy ($240 &amp; up)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/hair-color-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Hair Color &amp; Touch-Up ($60 &amp; up)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/highlights-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Foil Highlights ($130 &amp; up)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/blowout-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Voluminous Blowouts &amp; Brazilian ($45+)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/haircuts-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Precision Haircuts ($40 &amp; up)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                </div>
              </div>
              <Link
                to="/services/hair-salon-katy-tx"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A2C2A] hover:text-[#38201F] pt-2"
              >
                <span>Explore Hair Salon Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2: Skin & Spa */}
            <div className="bg-white border border-[#EACCC9] p-8 space-y-6 flex flex-col justify-between hover:border-[#E6C4C2] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#F0D8D6]/60 text-[#4A2C2A] flex items-center justify-center">
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#38201F]">
                  Skin Health &amp; Spa
                </h3>
                <p className="text-[#4A2C2A]/80 text-xs sm:text-sm leading-relaxed">
                  Clinical vortex HydraFacials, diamond-tip microdermabrasion, acne clearing facials, full-body botanical scrubs, and restorative hot oil massages.
                </p>
                <div className="pt-2 border-t border-[#EACCC9]/40 flex flex-col gap-2 text-xs">
                  <Link to="/services/hydrafacial-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>HydraFacial Clinical Care ($110)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/microdermabrasion-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Microdermabrasion Facial ($80)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/acne-facial-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Acne Purifying Facial ($65)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/massage-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Hot Oil Massage ($40 / $70)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/body-scrub-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Body Scrub &amp; Polish ($65)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                </div>
              </div>
              <Link
                to="/services/facials-katy-tx"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A2C2A] hover:text-[#38201F] pt-2"
              >
                <span>Explore Skincare Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 3: Aesthetics & Glam */}
            <div className="bg-white border border-[#EACCC9] p-8 space-y-6 flex flex-col justify-between hover:border-[#E6C4C2] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#F0D8D6]/60 text-[#4A2C2A] flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#38201F]">
                  Aesthetics &amp; Glam
                </h3>
                <p className="text-[#4A2C2A]/80 text-xs sm:text-sm leading-relaxed">
                  High-definition bridal beauty, traditional dupatta setting, sanitary Brazilian waxing, organic threading, lash lifts, and fluffy brow lamination.
                </p>
                <div className="pt-2 border-t border-[#EACCC9]/40 flex flex-col gap-2 text-xs">
                  <Link to="/services/bridal-makeup-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Bridal Makeup Experience ($750)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/makeup-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Event &amp; Party Makeup ($75–$250)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/brazilian-wax-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Brazilian Waxing ($50)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/threading-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Eyebrow Threading ($10)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                  <Link to="/services/lash-lift-katy-tx" className="text-[#4A2C2A] hover:text-[#38201F] font-medium flex items-center justify-between">
                    <span>Lash Lift &amp; Brow Lamination ($60+)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  </Link>
                </div>
              </div>
              <Link
                to="/services/aesthetics-katy-tx"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A2C2A] hover:text-[#38201F] pt-2"
              >
                <span>Explore Aesthetics Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES DIRECTORY PREVIEW (10 MAJOR CATEGORIES)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
                Comprehensive Menu
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
                Explore Our Treatment Categories
              </h2>
              <p className="text-[#4A2C2A]/80 text-sm sm:text-base">
                From head-to-toe pampering to customized aesthetic results, browse our complete range of salon and spa services.
              </p>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A2C2A] hover:text-[#38201F] transition-colors self-start md:self-end pb-1 border-b border-[#4A2C2A] cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICE_CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                onClick={() => navigate('/services', { category: cat.key })}
                className="group cursor-pointer bg-white border border-[#EACCC9] overflow-hidden hover:border-[#E6C4C2] transition-all duration-300 flex flex-col shadow-xs"
              >
                <div className="aspect-16/10 overflow-hidden relative bg-[#FAF7F5]">
                  <img
                    src={cat.image}
                    alt={`${cat.title} services at Orchid By Huma in Katy TX`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-[#E6C4C2] font-semibold">
                      {cat.services.length} Specialized Treatments
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#38201F] group-hover:text-[#4A2C2A] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[#4A2C2A]/80 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {cat.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#EACCC9]/40 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]">
                    <span>Explore &amp; Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHENTIC SALON & SPA SANCTUARY SHOWCASE (REAL KATY PHOTOGRAPHY)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F0D8D6]/30 border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
                Authentic Photography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
                Inside Our Katy Sanctuary
              </h2>
              <p className="text-[#4A2C2A]/80 text-sm sm:text-base">
                Take a look inside Orchid By Huma at 1105 South Mason Rd. Private treatment rooms, modern styling stations, and a welcoming reception designed for calm and comfort.
              </p>
            </div>
            <button
              onClick={() => navigate('/gallery')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A2C2A] hover:text-[#38201F] transition-colors self-start md:self-end pb-1 border-b border-[#4A2C2A] cursor-pointer"
            >
              <span>View Full Salon Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => navigate('/gallery')}
              className="group cursor-pointer bg-white border border-[#EACCC9] overflow-hidden shadow-xs hover:border-[#E6C4C2] transition-all"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={receptionImage}
                  alt="Orchid By Huma reception sanctuary in Katy TX"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] uppercase tracking-wider text-[#4A2C2A] font-semibold block">
                  Welcome Lounge
                </span>
                <h4 className="font-serif text-base text-[#38201F] font-medium mt-0.5">
                  Orchid Reception &amp; Ambiance
                </h4>
              </div>
            </div>

            <div
              onClick={() => navigate('/gallery')}
              className="group cursor-pointer bg-white border border-[#EACCC9] overflow-hidden shadow-xs hover:border-[#E6C4C2] transition-all"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={salonInteriorImage}
                  alt="Hair styling stations at Orchid By Huma in Katy TX"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] uppercase tracking-wider text-[#4A2C2A] font-semibold block">
                  Styling Floor
                </span>
                <h4 className="font-serif text-base text-[#38201F] font-medium mt-0.5">
                  Modern Hair Styling Stations
                </h4>
              </div>
            </div>

            <div
              onClick={() => navigate('/gallery')}
              className="group cursor-pointer bg-white border border-[#EACCC9] overflow-hidden shadow-xs hover:border-[#E6C4C2] transition-all"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={hairWashImage}
                  alt="Hair wash and conditioning suites at Orchid By Huma in Katy TX"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] uppercase tracking-wider text-[#4A2C2A] font-semibold block">
                  Wash &amp; Blowdry Bar
                </span>
                <h4 className="font-serif text-base text-[#38201F] font-medium mt-0.5">
                  Hair Wash &amp; Conditioning
                </h4>
              </div>
            </div>

            <div
              onClick={() => navigate('/gallery')}
              className="group cursor-pointer bg-white border border-[#EACCC9] overflow-hidden shadow-xs hover:border-[#E6C4C2] transition-all"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={spaRoomImage}
                  alt="Private spa treatment suite at Orchid By Huma in Katy TX"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] uppercase tracking-wider text-[#4A2C2A] font-semibold block">
                  Private Spa Suite
                </span>
                <h4 className="font-serif text-base text-[#38201F] font-medium mt-0.5">
                  Clinical Skincare &amp; Massage Room
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SIGNATURE SERVICES HIGHLIGHT
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#38201F] text-[#FAF7F5] border-b border-[#4A2C2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C4C2]">
              Client Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
              Featured Signature Treatments
            </h2>
            <p className="text-[#F0D8D6] text-sm sm:text-base">
              Hand-picked treatments most requested by our Katy clients for events, transformations, and routine self-care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#4A2C2A]/60 border border-[#4A2C2A] hover:border-[#E6C4C2] transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-4/3 overflow-hidden relative">
                  <img
                    src={feat.image}
                    alt={`${feat.title} at Orchid By Huma in Katy, TX`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#38201F]/90 backdrop-blur-xs text-[#E6C4C2] font-semibold text-xs px-3 py-1 border border-[#4A2C2A]">
                    {feat.price}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#E6C4C2] font-semibold">
                      {feat.category}
                    </span>
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#E6C4C2] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-[#F0D8D6] text-xs sm:text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#38201F] flex items-center justify-between gap-2">
                    <Link
                      to={feat.landingRoute}
                      className="text-xs uppercase tracking-wider font-semibold text-[#E6C4C2] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <a
                        href={BUSINESS_INFO.whatsapp.createUrl(feat.whatsappText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ask about ${feat.title} on WhatsApp`}
                        title="Chat on WhatsApp"
                        className="p-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] hover:text-white border border-[#25D366]/40 transition-colors"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => navigate('/book')}
                        className="px-3 py-1 bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => navigate('/book')}
              className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-8 py-3.5 text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-md"
            >
              Book Your Appointment Now
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHENTIC TESTIMONIALS SECTION (4.8 GOOGLE RATING)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4A2C2A]">
              <Star className="w-4 h-4 fill-[#E6C4C2] text-[#E6C4C2]" />
              <span>4.8 ★ Google Rating · Verified Katy Clients</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
              Kind Words From Our Clients
            </h2>
            <p className="text-[#4A2C2A]/80 text-sm sm:text-base">
              Real experiences from guests who trust Orchid By Huma for haircuts, blowout styling, HydraFacials, and color artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-8 border border-[#EACCC9] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#E6C4C2] transition-colors"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E6C4C2] text-[#E6C4C2]" />
                    ))}
                    <span className="text-xs text-[#4A2C2A]/60 font-medium ml-2">5.0</span>
                  </div>

                  <p className="text-[#4A2C2A] text-sm leading-relaxed italic">
                    "{t.reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EACCC9]/40">
                  <div className="font-serif text-base text-[#38201F] font-semibold">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#4A2C2A] font-medium mt-0.5">
                    {t.serviceMentioned}
                  </div>
                  <div className="text-[11px] text-[#4A2C2A]/60 mt-0.5 flex items-center gap-1.5">
                    <span>{t.verifiedSource}</span>
                    <span>·</span>
                    <span>Katy, TX</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/reviews')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A2C2A] hover:text-[#38201F] transition-colors border-b border-[#4A2C2A] pb-1 cursor-pointer"
            >
              <span>Explore All Verified Client Reviews (4.8 ★)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[#EACCC9] hidden sm:inline">·</span>
            <a
              href="https://www.google.com/search?q=Orchid+By+Huma+Katy+TX"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A2C2A]/80 hover:text-[#38201F] transition-colors pb-1"
            >
              <span>Read on Google</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LOCAL SERVICE AREA: SERVING KATY & THE GREATER KATY AREA
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F0D8D6]/35 border border-[#EACCC9] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#4A2C2A]" />
                  Local Salon &amp; Spa in Katy, TX · 77450
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#38201F] leading-snug">
                  Serving Katy &amp; the Greater Katy Area
                </h3>
                <p className="text-[#4A2C2A]/90 text-xs sm:text-sm leading-relaxed">
                  Conveniently located at <strong>1105 S Mason Rd in Katy, Texas 77450</strong>, <strong>Orchid By Huma</strong> serves guests looking for a salon, spa, or aesthetics studio near them across Katy and neighboring West Houston. We proudly welcome clients from ZIP codes <strong>77450, 77494, 77493, and 77449</strong>, as well as the communities of <strong>Cinco Ranch, Grand Lakes, Elyson, Cane Island, Firethorne, Cross Creek Ranch</strong>, and the Energy Corridor.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 text-xs text-[#4A2C2A]/80">
                  <span className="font-medium text-[#38201F]">Key Service Areas &amp; ZIPs:</span>
                  <span>Katy (77450)</span>
                  <span>·</span>
                  <span>Cinco Ranch (77494)</span>
                  <span>·</span>
                  <span>North Katy (77493)</span>
                  <span>·</span>
                  <span>Grand Lakes</span>
                  <span>·</span>
                  <span>Elyson</span>
                  <span>·</span>
                  <span>Cane Island</span>
                  <span>·</span>
                  <span>Firethorne</span>
                  <span>·</span>
                  <span>Cross Creek Ranch</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full py-3.5 px-4 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E6C4C2]" />
                  <span>Get Driving Directions</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                  className="w-full py-3 px-4 border border-[#EACCC9] bg-white text-[#38201F] text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#FAF7F5] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  <span>Call {BUSINESS_INFO.phone.primary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ANSWER-FIRST FAQS (AEO & AI SEARCH ENGINE ANSWERABILITY)
          ========================================================================= */}
      <FAQSection />

      {/* =========================================================================
          HIGH-CONVERTING BOOKING CTA
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#38201F] text-[#FAF7F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#E6C4C2_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C4C2]">
            Begin Your Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Ready to Feel Your Best?
          </h2>
          <p className="text-[#F0D8D6] text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Book your appointment at Orchid By Huma and experience personalized beauty and spa care in Katy, Texas.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/book')}
              className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-8 py-4 text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#38201F]" />
              <span>Book an Appointment</span>
            </button>
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Orchid By Huma"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-white border border-[#25D366]/60 hover:border-[#25D366] px-7 py-4 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-[#EACCC9]/60 hover:border-white text-white px-7 py-4 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E6C4C2]" />
              <span>Call (281) 206-0151</span>
            </a>
          </div>
          <div className="pt-4 text-xs text-[#FAF7F5]/70 space-y-1">
            <p>1105 South Mason Rd, Katy, Texas 77450</p>
            <p>Mon–Sat: 10:00 AM – 6:30 PM · Sunday: 12:00 PM – 5:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};
