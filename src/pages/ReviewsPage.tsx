import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BUSINESS_INFO } from '../data/business';
import { TESTIMONIALS } from '../data/testimonials';
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
      <section className="bg-white border-b border-[#E8E0D5] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-5xl font-semibold text-stone-900">4.8</span>
                <span className="text-stone-400 text-lg">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-[#C59B6D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Based on Verified Google Reviews
              </span>
            </div>

            <div className="space-y-2 text-stone-600 text-xs sm:text-sm border-y md:border-y-0 md:border-x border-stone-200 py-6 md:py-0 md:px-8">
              <p className="font-medium text-stone-900">
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
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1816] hover:bg-[#976F44] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D8B88F]" />
              </a>
              <span className="text-[11px] text-stone-400">
                1105 South Mason Rd, Katy, TX 77450
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="bg-[#FAF8F5] border-b border-[#E8E0D5] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                filter === cat.key
                  ? 'bg-[#1A1816] text-[#FAF8F5]'
                  : 'bg-[#F2ECE4] text-stone-700 hover:bg-[#E8E0D5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* REVIEWS LIST */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 border border-[#E8E0D5] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#B48C5E] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C59B6D]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      {item.verifiedSource}
                    </span>
                  </div>

                  <p className="text-stone-700 text-sm leading-relaxed italic">
                    "{item.reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE4]">
                  <div className="font-serif text-base text-stone-900 font-semibold">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#976F44] font-medium mt-0.5">
                    {item.serviceMentioned}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified Customer in Katy, TX</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-[#F2ECE4] border border-[#E0D7CB] text-center max-w-3xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl text-stone-900">
              Have you recently visited Orchid By Huma?
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              We cherish hearing from our guests! Share your experience on our Google business profile to help other Katy locals find authentic beauty care.
            </p>
            <a
              href="https://www.google.com/search?q=Orchid+By+Huma+Katy+TX"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1816] hover:bg-[#976F44] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Leave A Review On Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D8B88F]" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#1A1816] text-[#FAF8F5] border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B88F]">
            Experience It For Yourself
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Schedule Your Next Treatment
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
            Join hundreds of satisfied Katy clients who trust Orchid By Huma for healthy hair, glowing skin, and tranquil spa moments.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/book')}
              className="bg-[#C59B6D] hover:bg-[#B48C5E] text-stone-950 font-semibold px-7 py-3 text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-stone-600 hover:border-white text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
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
