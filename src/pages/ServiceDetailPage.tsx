import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { ServiceLandingPageData } from '../data/servicePages';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  Calendar,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MapPin,
  HelpCircle,
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceLandingPageData;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const { navigate } = useRouter();

  const getContextualWhatsAppUrl = () => {
    const slug = service.slug;
    let message = `Hi Orchid By Huma, I'm interested in your ${service.h1}.`;
    if (slug.includes('facial') || slug.includes('hydra') || slug.includes('microderm') || slug.includes('acne')) {
      message = "Hi Orchid By Huma, I'm interested in your facial services.";
    } else if (slug.includes('bridal') || slug.includes('makeup')) {
      message = "Hi Orchid By Huma, I'm interested in bridal and event makeup.";
    } else if (slug.includes('hair') || slug.includes('balayage') || slug.includes('blowout') || slug.includes('highlights') || slug.includes('haircut')) {
      message = "Hi Orchid By Huma, I'm interested in your hair services.";
    } else if (slug.includes('wax') || slug.includes('brazilian') || slug.includes('body-scrub') || slug.includes('massage')) {
      message = "Hi Orchid By Huma, I'm interested in your waxing and body treatment services.";
    }
    return BUSINESS_INFO.whatsapp.createUrl(message);
  };

  return (
    <div className="space-y-0">
      {/* Editorial Page Hero */}
      <section className="relative bg-[#38201F] text-[#FAF7F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#4A2C2A]">
        <div className="absolute inset-0 bg-[radial-gradient(#E6C4C2_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-[#E6C4C2] font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="text-[#EACCC9]/60">/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span aria-hidden="true" className="text-[#EACCC9]/60">/</span>
            <span>{service.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight text-balance">
            {service.h1}
          </h1>

          <p className="text-[#F0D8D6] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {service.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F0D8D6]">
            <span className="flex items-center gap-1.5 font-semibold text-[#E6C4C2] font-serif text-lg">
              {service.price}
            </span>
            <span className="text-[#EACCC9]/60">·</span>
            <span className="flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#E6C4C2]" />
              {service.duration}
            </span>
            <span className="text-[#EACCC9]/60">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E6C4C2]" />
              Katy, Texas
            </span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/book', { service: service.slug })}
              className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#38201F]" />
              <span>Book This Service</span>
            </button>
            <a
              href={getContextualWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat about ${service.h1} on WhatsApp`}
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-white border border-[#25D366]/60 hover:border-[#25D366] px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-[#EACCC9]/60 hover:border-white text-white px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E6C4C2]" />
              <span>Call (281) 206-0151</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Overview */}
      <section className="py-16 lg:py-24 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Media Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-4/3 overflow-hidden border border-[#EACCC9] shadow-sm">
                <img
                  src={service.image}
                  alt={`${service.h1} at Orchid By Huma in Katy TX`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick Summary Card */}
              <div className="bg-[#F0D8D6]/35 border border-[#EACCC9] p-6 space-y-3 text-xs sm:text-sm text-[#4A2C2A]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A] block">
                  Service Snapshot
                </span>
                <div className="divide-y divide-[#EACCC9]/40 text-xs">
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A2C2A]/70">Department:</span>
                    <span className="font-semibold text-[#38201F]">{service.category}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A2C2A]/70">Standard Investment:</span>
                    <span className="font-semibold text-[#38201F]">{service.price}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A2C2A]/70">Typical Duration:</span>
                    <span className="font-semibold text-[#38201F]">{service.duration}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A2C2A]/70">Salon Location:</span>
                    <span className="font-semibold text-[#38201F]">1105 S Mason Rd, Katy, TX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview & Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
                  Treatment Details
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#38201F]">
                  About This Service in Katy, Texas
                </h2>
                <div className="space-y-4 text-[#4A2C2A]/90 text-sm sm:text-base leading-relaxed">
                  {service.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-4 bg-white p-6 sm:p-8 border border-[#EACCC9]">
                <h3 className="font-serif text-xl sm:text-2xl text-[#38201F]">
                  Key Benefits &amp; Expected Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#4A2C2A]">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Experience */}
      <section className="py-16 lg:py-20 bg-[#F0D8D6]/30 border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
              Step-by-Step
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38201F]">
              What to Expect During Your Session
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#FAF7F5] p-8 border border-[#EACCC9] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]">
                  Phase 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-[#38201F]">{step.title}</h3>
                <p className="text-[#4A2C2A]/80 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Orchid By Huma for this Service in Katy, TX */}
      <section className="py-16 lg:py-20 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F0D8D6]/35 border border-[#EACCC9] p-8 sm:p-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#4A2C2A]" />
                Katy Local Authority
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#38201F]">
                Why Katy Clients Choose Orchid By Huma
              </h2>
              <div className="space-y-3 text-[#4A2C2A]/90 text-xs sm:text-sm leading-relaxed">
                <p>
                  With more than 10 years of beauty and spa excellence in Katy, Texas, <strong>Orchid By Huma</strong> combines personalized client care, licensed technicians, and premium salon-grade formulations.
                </p>
                <p>
                  Conveniently situated at <strong>1105 S Mason Rd, Katy, TX 77450</strong>, our salon provides a quiet, hygienic haven for guests seeking unhurried, meticulous artistry. Whether booking online or calling <strong>(281) 206-0151</strong>, every treatment begins with an honest consultation to deliver results tailored to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First Visible FAQs (AEO & Local Intent) */}
      <section className="py-16 lg:py-20 bg-[#FAF7F5] border-b border-[#EACCC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38201F]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-[#EACCC9] space-y-2"
              >
                <h3 className="font-serif text-lg text-[#38201F] font-medium flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#4A2C2A] shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-[#4A2C2A]/85 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Links (Internal Linking) */}
      <section className="py-16 bg-[#F0D8D6]/30 border-b border-[#EACCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#4A2C2A] font-semibold block">
                Complementary Treatments
              </span>
              <h3 className="font-serif text-2xl text-[#38201F]">
                Related Services at Orchid By Huma
              </h3>
            </div>
            <Link
              to="/services"
              className="text-xs uppercase tracking-widest font-semibold text-[#4A2C2A] hover:text-[#38201F] flex items-center gap-1.5"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.relatedServices.map((rel, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-[#EACCC9] flex items-center justify-between gap-4 hover:border-[#E6C4C2] transition-colors"
              >
                <div>
                  <h4 className="font-serif text-lg text-[#38201F]">{rel.title}</h4>
                  <span className="text-xs text-[#4A2C2A] font-semibold font-serif">
                    {rel.price}
                  </span>
                </div>
                <Link
                  to={rel.route}
                  className="px-3 py-1.5 bg-[#4A2C2A] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#38201F] transition-colors shrink-0"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Booking Callout */}
      <section className="py-20 bg-[#38201F] text-[#FAF7F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C4C2]">
            Reserve Your Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Schedule {service.h1}
          </h2>
          <p className="text-[#F0D8D6] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Plan your visit with our licensed Katy team at 1105 S Mason Rd. Request your appointment online or call directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/book', { service: service.slug })}
              className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-8 py-3.5 text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#38201F]" />
              <span>Book Appointment</span>
            </button>
            <a
              href={getContextualWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat about ${service.h1} on WhatsApp`}
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
