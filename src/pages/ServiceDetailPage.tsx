import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { ServiceLandingPageData } from '../data/servicePages';
import { BUSINESS_INFO } from '../data/business';
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

  return (
    <div className="space-y-0">
      {/* Editorial Page Hero */}
      <section className="relative bg-[#1A1816] text-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#2C2723]">
        <div className="absolute inset-0 bg-[radial-gradient(#b48c5e_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-[#D8B88F] font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="text-stone-600">/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span aria-hidden="true" className="text-stone-600">/</span>
            <span>{service.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight text-balance">
            {service.h1}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {service.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
            <span className="flex items-center gap-1.5 font-semibold text-[#D8B88F] font-serif text-lg">
              {service.price}
            </span>
            <span className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#D8B88F]" />
              {service.duration}
            </span>
            <span className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D8B88F]" />
              Katy, Texas
            </span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/appointment', { service: service.slug })}
              className="bg-[#C59B6D] hover:bg-[#B48C5E] text-stone-950 font-semibold px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-stone-950" />
              <span>Book This Service</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-stone-600 hover:border-white text-white px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D8B88F]" />
              <span>Call (281) 206-0151</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Overview */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Media Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-4/3 overflow-hidden border border-[#E8E0D5] shadow-sm">
                <img
                  src={service.image}
                  alt={`${service.h1} at Orchid By Huma in Katy TX`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick Summary Card */}
              <div className="bg-[#F2ECE4] border border-[#E0D7CB] p-6 space-y-3 text-xs sm:text-sm text-stone-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#976F44] block">
                  Service Snapshot
                </span>
                <div className="divide-y divide-[#D8D0C5] text-xs">
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-500">Department:</span>
                    <span className="font-semibold text-stone-900">{service.category}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-500">Standard Investment:</span>
                    <span className="font-semibold text-stone-900">{service.price}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-500">Typical Duration:</span>
                    <span className="font-semibold text-stone-900">{service.duration}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-500">Salon Location:</span>
                    <span className="font-semibold text-stone-900">1105 S Mason Rd, Katy, TX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview & Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44]">
                  Treatment Details
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
                  About This Service in Katy, Texas
                </h2>
                <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                  {service.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-4 bg-white p-6 sm:p-8 border border-[#E8E0D5]">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900">
                  Key Benefits &amp; Expected Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-stone-700">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#976F44] shrink-0 mt-0.5" />
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
      <section className="py-16 lg:py-20 bg-[#F5EFE6] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44]">
              Step-by-Step
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              What to Expect During Your Session
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-8 border border-[#E8E0D5] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#976F44]">
                  Phase 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-stone-900">{step.title}</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Orchid By Huma for this Service in Katy, TX */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F2ECE4] border border-[#E0D7CB] p-8 sm:p-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#976F44]" />
                Katy Local Authority
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">
                Why Katy Clients Choose Orchid By Huma
              </h2>
              <div className="space-y-3 text-stone-700 text-xs sm:text-sm leading-relaxed">
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
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E8E0D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44]">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-[#E8E0D5] space-y-2"
              >
                <h3 className="font-serif text-lg text-stone-900 font-medium flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#976F44] shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Links (Internal Linking) */}
      <section className="py-16 bg-[#F2ECE4] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#976F44] font-semibold block">
                Complementary Treatments
              </span>
              <h3 className="font-serif text-2xl text-stone-900">
                Related Services at Orchid By Huma
              </h3>
            </div>
            <Link
              to="/services"
              className="text-xs uppercase tracking-widest font-semibold text-[#976F44] hover:text-stone-900 flex items-center gap-1.5"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.relatedServices.map((rel, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-[#E8E0D5] flex items-center justify-between gap-4 hover:border-[#B48C5E] transition-colors"
              >
                <div>
                  <h4 className="font-serif text-lg text-stone-900">{rel.title}</h4>
                  <span className="text-xs text-[#976F44] font-semibold font-serif">
                    {rel.price}
                  </span>
                </div>
                <Link
                  to={rel.route}
                  className="px-3 py-1.5 bg-stone-900 text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#976F44] transition-colors shrink-0"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Booking Callout */}
      <section className="py-20 bg-[#1A1816] text-[#FAF8F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B88F]">
            Reserve Your Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Schedule {service.h1}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Plan your visit with our licensed Katy team at 1105 S Mason Rd. Request your appointment online or call directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/appointment', { service: service.slug })}
              className="bg-[#C59B6D] hover:bg-[#B48C5E] text-stone-950 font-semibold px-8 py-3.5 text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-stone-950" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-stone-600 hover:border-white text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D8B88F]" />
              <span>Call (281) 206-0151</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
