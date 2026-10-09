import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { MapPin, Phone, Mail, Clock, Calendar, Navigation, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-0">
      <PageHero
        title="Contact Orchid By Huma in Katy, TX"
        subtitle="We invite you to reach out for appointments, bridal inquiries, or questions about our beauty treatments in Katy, Texas."
        breadcrumb="Contact Us"
      />

      <section className="py-16 lg:py-24 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
                  Visit Our Salon
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#38201F]">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-[#4A2C2A]/80 text-sm leading-relaxed">
                  Conveniently situated on South Mason Road in Katy with ample dedicated parking. We welcome both scheduled visits and advance bridal bookings.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6 bg-white p-6 sm:p-8 border border-[#EACCC9] shadow-xs">
                {/* Physical Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/60 text-[#4A2C2A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]/70 block">
                      Address
                    </strong>
                    <p className="text-[#38201F] text-sm font-medium mt-0.5">
                      {BUSINESS_INFO.address.street}
                    </p>
                    <p className="text-[#4A2C2A]/80 text-sm">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs text-[#4A2C2A] font-semibold hover:text-[#38201F] hover:underline mt-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#E6C4C2]" />
                      <span>Get Driving Directions ↗</span>
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 border-t border-[#EACCC9]/40 pt-5">
                  <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/60 text-[#4A2C2A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]/70 block">
                      Phone Numbers
                    </strong>
                    <div>
                      <a
                        href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                        className="text-[#38201F] text-sm font-semibold hover:text-[#4A2C2A] transition-colors block"
                      >
                        Primary: {BUSINESS_INFO.phone.primary}
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.phone.secondaryRaw}`}
                        className="text-[#4A2C2A]/80 text-xs hover:text-[#38201F] transition-colors block"
                      >
                        Secondary: {BUSINESS_INFO.phone.secondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Row */}
                <div className="flex items-start gap-4 border-t border-[#EACCC9]/40 pt-5">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]/70 block">
                      Business WhatsApp
                    </strong>
                    <a
                      href={BUSINESS_INFO.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp with Orchid By Huma"
                      className="text-[#128C7E] hover:text-[#075E54] text-sm font-semibold transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.whatsapp.number}
                    </a>
                    <span className="text-[11px] text-[#4A2C2A]/70 block mt-0.5">
                      Fast response for pricing, availability &amp; bridal consultations
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 border-t border-[#EACCC9]/40 pt-5">
                  <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/60 text-[#4A2C2A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]/70 block">
                      Email Inquiries
                    </strong>
                    <a
                      href={`mailto:${BUSINESS_INFO.email.primary}`}
                      className="text-[#38201F] text-sm hover:text-[#4A2C2A] transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.email.primary}
                    </a>
                    <span className="text-[11px] text-[#4A2C2A]/60 block mt-0.5">
                      Alt: {BUSINESS_INFO.email.secondary}
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 border-t border-[#EACCC9]/40 pt-5">
                  <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/60 text-[#4A2C2A] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-sm text-[#4A2C2A]">
                    <strong className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]/70 block">
                      Working Hours
                    </strong>
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <p key={i} className="flex justify-between gap-4">
                        <span>{h.days}:</span>
                        <strong className="text-[#38201F] font-medium">{h.time}</strong>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Booking Fast CTA */}
              <div className="bg-[#38201F] text-[#FAF7F5] p-6 space-y-3 border border-[#4A2C2A]">
                <span className="text-xs uppercase tracking-widest text-[#E6C4C2] font-semibold block">
                  Quick Responses &amp; Inquiries
                </span>
                <p className="text-xs text-[#F0D8D6]">
                  Need an answer about pricing, custom services, or schedule an appointment online?
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href={BUSINESS_INFO.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp with Orchid By Huma"
                    className="w-full py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => navigate('/book')}
                    className="w-full py-3 bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#38201F]" />
                    <span>Go to Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#EACCC9] shadow-xs">
              <div className="border-b border-[#EACCC9] pb-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A2C2A]">
                  Online Inquiries
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#38201F] mt-1">
                  Send Us a Message
                </h3>
                <p className="text-[#4A2C2A]/80 text-xs sm:text-sm mt-1">
                  Whether you have questions about hair coloring, HydraFacials, or customized bridal packages, our team is happy to assist.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Embedded Google Maps Section for Katy, Texas */}
          <div className="mt-16 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A2C2A]">
                  Our Katy Location
                </span>
                <h3 className="font-serif text-2xl text-[#38201F]">
                  1105 South Mason Rd, Katy, Texas 77450
                </h3>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs font-semibold uppercase tracking-wider text-[#4A2C2A] hover:text-[#38201F] flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 border border-[#EACCC9] overflow-hidden bg-[#FAF7F5]">
              <iframe
                title="Orchid By Huma Location in Katy, Texas"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
