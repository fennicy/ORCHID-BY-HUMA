import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BUSINESS_INFO } from '../data/business';
import { TESTIMONIALS } from '../data/testimonials';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Star, ShieldCheck, CheckCircle, ExternalLink, Calendar, Phone } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Reviews' },
    { key: 'Facials', label: 'Facials & Skincare' },
    { key: 'Hair Cut', label: 'Haircuts & Styling' },
    { key: 'Color', label: 'Color & Highlights' },
    { key: 'Threading', label: 'Threading & Brows' },
  ];

  const filteredReviews =
    filter === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) =>
          t.serviceMentioned.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="space-y-0">
      <PageHero
        title="Client Reviews & Testimonials"
        subtitle="Read real, verified Google reviews from our valued clients in Katy, Texas."
        breadcrumb="Reviews"
      />

      {/* RATING SUMMARY STATS BAR */}
      <section className="bg-white border-b border-[#EACCC9] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-5xl font-semibold text-[#38201F]">4.8</span>
                <span className="text-[#4A2C2A]/60 text-lg">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-[#E6C4C2]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-wider text-[#4A2C2A]/70 font-semibold">
                Based on Verified Google Reviews
              </span>
            </div>

            <div className="space-y-2 text-[#4A2C2A]/85 text-xs sm:text-sm border-y md:border-y-0 md:border-x border-[#EACCC9] py-6 md:py-0 md:px-8">
              <p className="font-medium text-[#38201F]">
                10+ Years of Consistent Quality in Katy, TX
              </p>
              <p>
                Our clients consistently praise our licensed stylists and aestheticians—including Huma, Pooja, Tosheen, and Qadir—for thoughtful listening, gentle technique, and lasting results.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center space-y-3">
              <a
                href="https://www.google.com/search?q=Orchid+By+Huma+Katy+TX"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E6C4C2]" />
              </a>
              <span className="text-[11px] text-[#4A2C2A]/70">
                1105 South Mason Rd, Katy, TX 77450
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="bg-[#FAF7F5] border-b border-[#EACCC9] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                filter === cat.key
                  ? 'bg-[#38201F] text-[#FAF7F5]'
                  : 'bg-[#F0D8D6]/40 text-[#4A2C2A] hover:bg-[#EACCC9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* REVIEWS LIST */}
      <section className="py-16 lg:py-24 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 border border-[#EACCC9] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#E6C4C2] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#E6C4C2]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#4A2C2A]/60 uppercase tracking-wider">
                      {item.verifiedSource}
                    </span>
                  </div>

                  <p className="text-[#4A2C2A] text-sm leading-relaxed italic">
                    "{item.reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EACCC9]/40">
                  <div className="font-serif text-base text-[#38201F] font-semibold">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#4A2C2A] font-medium mt-0.5">
                    {item.serviceMentioned}
                  </div>
                  <div className="text-[11px] text-[#4A2C2A]/70 mt-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-[#4A2C2A]" />
                    <span>Verified Customer in Katy, TX</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-[#F0D8D6]/35 border border-[#EACCC9] text-center max-w-3xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl text-[#38201F]">
              Have you recently visited Orchid By Huma?
            </h3>
            <p className="text-[#4A2C2A]/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              We cherish hearing from our guests! Share your experience on our Google business profile to help other Katy locals find authentic beauty care.
            </p>
            <a
              href="https://www.google.com/search?q=Orchid+By+Huma+Katy+TX"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Leave A Review On Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E6C4C2]" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#38201F] text-[#FAF7F5] border-t border-[#4A2C2A]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C4C2]">
            Experience It For Yourself
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Schedule Your Next Treatment
          </h2>
          <p className="text-[#F0D8D6] text-sm max-w-xl mx-auto leading-relaxed">
            Join hundreds of satisfied Katy clients who trust Orchid By Huma for healthy hair, glowing skin, and tranquil spa moments.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/book')}
              className="bg-[#E6C4C2] hover:bg-[#F0D8D6] text-[#38201F] font-bold px-7 py-3 text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#38201F]" />
              <span>Book Appointment</span>
            </button>
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Orchid By Huma"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-white border border-[#25D366]/60 hover:border-[#25D366] px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-[#EACCC9]/60 hover:border-white text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
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
