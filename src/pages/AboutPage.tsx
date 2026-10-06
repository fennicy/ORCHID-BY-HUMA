import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BUSINESS_INFO } from '../data/business';
import {
  Calendar,
  Phone,
  Sparkles,
  ShieldCheck,
  Heart,
  Droplet,
  Clock,
  MapPin,
  Check,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-0">
      <PageHero
        title="About Orchid By Huma"
        subtitle="Beauty, relaxation and personalized care — all in one experience."
        breadcrumb="About Us"
      />

      {/* SECTION 1: OUR STORY & 10+ YEARS EXPERIENCE */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44]">
                10+ Years of Dedication
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight">
                Our Story in Katy, Texas
              </h2>
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded on a simple yet enduring premise, <strong>Orchid By Huma</strong> was established to provide Katy residents with a serene sanctuary where high-touch luxury and genuine warmth coexist. For more than 10 years, our team has refined every aspect of the client experience—from the initial consultation to the delicate finishing details of every service.
                </p>
                <p>
                  Nestled conveniently on South Mason Road, our salon and spa was envisioned not as a rushed assembly line, but as an intimate studio where clients feel heard, respected, and revitalized. We take tremendous pride in the relationships we have built with generations of women, men, and brides across Katy, Sugar Land, Cypress, and the Greater Houston community.
                </p>
                <p>
                  Whether you arrive for a quick eyebrow threading during your lunch hour, a soothing HydraFacial after a demanding work week, or months of collaborative prep for your wedding day, our commitment remains the same: thoughtful expertise delivered with grace.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-stone-800">
                <div className="flex items-center gap-2 bg-[#F2ECE4] px-3.5 py-2">
                  <Sparkles className="w-4 h-4 text-[#976F44]" />
                  <span>10+ Years Trusted in Katy</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F2ECE4] px-3.5 py-2">
                  <ShieldCheck className="w-4 h-4 text-[#976F44]" />
                  <span>Licensed Cosmetologists</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F2ECE4] px-3.5 py-2">
                  <Heart className="w-4 h-4 text-[#976F44]" />
                  <span>4.8 ★ Google Rated</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden shadow-md border border-[#E8E0D5]">
                <img
                  src="/src/assets/images/hero_salon_spa_1791303830093.jpg"
                  alt="Orchid By Huma Salon interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: OUR PHILOSOPHY & APPROACH TO BEAUTY & WELLNESS */}
      <section className="py-20 lg:py-28 bg-[#F5EFE6] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44]">
              Guided Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900">
              Our Philosophy &amp; Holistic Approach
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              We look beyond fleeting trends to enhance your organic beauty with precision, integrity, and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-8 border border-[#E8E0D5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F2ECE4] flex items-center justify-center text-[#976F44]">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">Skin Health First</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                True radiance is built on a nourished skin barrier. We choose clean botanical actives and clinical technologies like HydraFacial and microdermabrasion that repair rather than strip.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 border border-[#E8E0D5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F2ECE4] flex items-center justify-center text-[#976F44]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">Customized Artistry</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                No two facial structures, skin undertones, or hair textures are alike. We formulate balayage colors, haircut shapes, and bridal looks unique to your lifestyle and personal elegance.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 border border-[#E8E0D5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F2ECE4] flex items-center justify-center text-[#976F44]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">Calm &amp; Hospitality</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A beauty treatment should never feel chaotic. Our serene salon atmosphere allows you to disconnect from daily stress and receive attentive, unhurried care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CLIENTS CHOOSE US */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="aspect-4/3 overflow-hidden shadow-md border border-[#E8E0D5]">
                <img
                  src="/src/assets/images/bridal_beauty_makeup_1791303863839.jpg"
                  alt="Bridal and occasion artistry at Orchid By Huma in Katy TX"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44]">
                The Orchid Difference
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
                Why Clients Choose Us Year After Year
              </h2>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5EE] text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Seasoned Technicians &amp; Stylists:</strong>
                    Our team includes recognized specialists like Qadir for signature blowouts and Tosheen for transformative haircuts.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5EE] text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Comprehensive Under One Roof:</strong>
                    Facials, HydraFacials, hair color, Brazilian Blowouts, full body waxing, threading, lash lifts, massage, and bridal styling.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5EE] text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Transparent &amp; Fair Pricing:</strong>
                    Clear upfront pricing with no hidden surprises, accompanied by thoughtful post-care guidance.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5EE] text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Spotless Hygiene Protocol:</strong>
                    Sanitized workstations, individually packaged disposable implements, and strict hospital-level autoclave sterilization.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/services')}
                  className="bg-[#1A1816] hover:bg-[#976F44] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VISIT US IN KATY & HOURS */}
      <section className="py-16 bg-[#F2ECE4] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <MapPin className="w-8 h-8 text-[#976F44] shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                  Location
                </span>
                <span className="font-serif text-lg text-stone-900 font-medium">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Clock className="w-8 h-8 text-[#976F44] shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                  Operating Hours
                </span>
                <span className="text-xs sm:text-sm text-stone-900">
                  {BUSINESS_INFO.hours[0].days}: {BUSINESS_INFO.hours[0].time} · {BUSINESS_INFO.hours[1].days}: {BUSINESS_INFO.hours[1].time}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Phone className="w-8 h-8 text-[#976F44] shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                  Direct Line
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                  className="font-serif text-lg text-stone-900 hover:text-[#976F44] transition-colors"
                >
                  {BUSINESS_INFO.phone.primary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONVERSION CTA */}
      <section className="py-20 lg:py-28 bg-[#1A1816] text-[#FAF8F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B88F]">
            Reserve Your Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Experience the Orchid Difference
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Book your appointment online or call our Katy salon directly. We look forward to welcoming you into our sanctuary.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/appointment')}
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
