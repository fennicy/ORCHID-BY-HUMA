import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Phone, Sparkles, MessageCircle, Calendar, Heart, ShieldCheck, Clock, MapPin, Tag, CheckCircle } from 'lucide-react';

export const DealsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-0">
      <PageHero
        title="Deals & Specials"
        subtitle="Explore seasonal promotions, introductory packages, and bespoke beauty specials at Orchid By Huma in Katy, Texas."
        breadcrumb="Deals & Specials"
      />

      {/* MAIN OFFERS SECTION */}
      <section className="py-16 lg:py-24 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Intro */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A] block">
              Special Promotions &amp; Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
              Current Offers &amp; Package Inquiries
            </h2>
            <p className="text-[#4A2C2A]/80 text-sm sm:text-base leading-relaxed">
              We periodically offer seasonal packages, bridal beauty bundles, and bespoke treatment combinations. Check back regularly or speak directly with our Katy team for today’s active promotions.
            </p>
          </div>

          {/* Elegant "Check Back for Special Offers" Card */}
          <div className="bg-white border border-[#EACCC9] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-6 shadow-xs relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#F0D8D6]/60 border border-[#EACCC9] text-[#38201F] mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#4A2C2A]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#4A2C2A]/70 font-semibold block">
                Stay Updated
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#38201F]">
                Check Back for New Special Offers
              </h3>
              <p className="text-[#4A2C2A]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                We are curating our upcoming seasonal promotions and bespoke aesthetic packages. In the meantime, ask our salon team directly on WhatsApp or call us to learn about customized multi-treatment combinations.
              </p>
            </div>

            {/* Direct CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with Orchid By Huma"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-[#1E3A2F] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#E6C4C2]" />
                <span>Call {BUSINESS_INFO.phone.primary}</span>
              </a>
            </div>
          </div>

          {/* Complimentary Perks & Standards of Care */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
            <div className="bg-white border border-[#EACCC9] p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/50 text-[#38201F] mx-auto flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#4A2C2A]" />
              </div>
              <h4 className="font-serif text-lg text-[#38201F] font-semibold">
                Complimentary Consultations
              </h4>
              <p className="text-xs text-[#4A2C2A]/80 leading-relaxed">
                Every haircut, balayage, facial, and bridal session begins with a personalized consultation to understand your hair and skin goals.
              </p>
            </div>

            <div className="bg-white border border-[#EACCC9] p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/50 text-[#38201F] mx-auto flex items-center justify-center">
                <Tag className="w-5 h-5 text-[#4A2C2A]" />
              </div>
              <h4 className="font-serif text-lg text-[#38201F] font-semibold">
                Transparent Starting Prices
              </h4>
              <p className="text-xs text-[#4A2C2A]/80 leading-relaxed">
                Clear pricing menus with no hidden surprises. View our complete transparent pricing across all departments anytime.
              </p>
              <button
                onClick={() => navigate('/pricing')}
                className="text-xs font-semibold text-[#38201F] underline hover:text-[#4A2C2A] cursor-pointer pt-1"
              >
                View Pricing Menu
              </button>
            </div>

            <div className="bg-white border border-[#EACCC9] p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/50 text-[#38201F] mx-auto flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#4A2C2A]" />
              </div>
              <h4 className="font-serif text-lg text-[#38201F] font-semibold">
                Flexible Scheduling
              </h4>
              <p className="text-xs text-[#4A2C2A]/80 leading-relaxed">
                Open 7 days a week in Katy, TX with same-day and direct appointment booking online or via quick telephone confirmation.
              </p>
              <button
                onClick={() => navigate('/book')}
                className="text-xs font-semibold text-[#38201F] underline hover:text-[#4A2C2A] cursor-pointer pt-1"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
