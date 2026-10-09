import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BookingForm } from '../components/BookingForm';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Phone, MapPin, Clock, ShieldCheck, Heart, Sparkles, CheckCircle } from 'lucide-react';

export const AppointmentPage: React.FC = () => {
  const { queryParams } = useRouter();

  return (
    <div className="space-y-0">
      <PageHero
        title="Book an Appointment at Orchid By Huma"
        subtitle="Choose your service and preferred time, and our team will help you plan your visit to Orchid By Huma in Katy, Texas."
        breadcrumb="Book Appointment"
      />

      <section className="py-16 lg:py-24 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm
                initialServiceCategory={queryParams.category || 'facials'}
                initialServiceId={queryParams.service || ''}
              />
            </div>

            {/* Right Column: Appointment Guide & Salon Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quick Call Box for Same-Day Appointments */}
              <div className="bg-[#38201F] text-[#FAF7F5] p-6 sm:p-8 space-y-4 border border-[#4A2C2A]">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C4C2] block">
                  Need Immediate or Same-Day Booking?
                </span>
                <h3 className="font-serif text-2xl text-white">
                  Call Our Katy Salon Directly
                </h3>
                <p className="text-[#F0D8D6] text-xs sm:text-sm leading-relaxed">
                  For appointments within the next 24 hours or urgent bridal inquiries, calling directly ensures immediate stylist availability checks.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={BUSINESS_INFO.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp with Orchid By Huma"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#38201F]" />
                    <span>Call {BUSINESS_INFO.phone.primary}</span>
                  </a>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-white p-6 sm:p-8 border border-[#EACCC9] space-y-4 shadow-xs">
                <h4 className="font-serif text-xl text-[#38201F] border-b border-[#EACCC9]/40 pb-3">
                  What to Expect
                </h4>
                <div className="space-y-3.5 text-xs sm:text-sm text-[#4A2C2A]">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#38201F]">Personal Confirmation:</strong> Our team reviews your requested service, stylist availability, and calls or texts you to confirm the time.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#38201F]">Complimentary Consultation:</strong> We review your skin concerns, hair length, and desired outcomes upon arrival before beginning.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#4A2C2A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#38201F]">Sanitized Private Suites:</strong> Enjoy relaxing, hygienic treatment rooms prepared specifically for you.
                    </span>
                  </div>
                </div>
              </div>

              {/* Salon Location & Hours Summary */}
              <div className="bg-[#F0D8D6]/35 p-6 sm:p-8 border border-[#EACCC9] space-y-3 text-xs sm:text-sm text-[#4A2C2A]">
                <span className="text-xs uppercase tracking-wider text-[#4A2C2A]/70 font-semibold block">
                  Location &amp; Operating Hours
                </span>
                <p className="font-medium text-[#38201F]">
                  {BUSINESS_INFO.address.full}
                </p>
                <div className="pt-2 border-t border-[#EACCC9]/40 space-y-1 text-[#4A2C2A]/80">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <p key={i} className="flex justify-between">
                      <span>{h.days}:</span>
                      <strong className="text-[#38201F]">{h.time}</strong>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
