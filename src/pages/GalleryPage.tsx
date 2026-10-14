import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BUSINESS_INFO } from '../data/business';
import { Instagram, ArrowRight, Sparkles, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-0">
      <PageHero
        title="See More on Instagram"
        subtitle="Explore Orchid By Huma’s latest hairstyles, balayage transformations, bridal looks, salon updates, and beauty inspiration on Instagram."
        breadcrumb="Gallery & Instagram"
      />

      {/* INSTAGRAM FOCUS SECTION */}
      <section className="py-20 lg:py-28 bg-[#FAF7F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          {/* Decorative Icon Badge */}
          <div className="w-20 h-20 rounded-full bg-[#E1306C]/15 border border-[#E1306C]/30 text-[#E1306C] mx-auto flex items-center justify-center shadow-xs">
            <Instagram className="w-10 h-10 text-[#E1306C]" />
          </div>

          {/* Heading & Supporting Copy */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A] block">
              Live Beauty Inspiration &amp; Client Portfolios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
              See More on Instagram
            </h2>
            <p className="text-[#4A2C2A]/80 text-sm sm:text-base leading-relaxed">
              We share our most recent client work, before-and-after balayage results, bridal makeup artistry, skincare tutorials, and behind-the-scenes moments daily on our official Instagram page.
            </p>
          </div>

          {/* Prominent Action Button & Text Link */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Orchid By Huma on Instagram (opens in new tab)"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E1306C] hover:bg-[#C13584] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-white" />
              <span>Follow Us on Instagram</span>
            </a>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#38201F] hover:text-[#4A2C2A] underline underline-offset-4 transition-colors py-2"
            >
              <span>View Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Verification Badge & Social Handle */}
          <div className="pt-6 border-t border-[#EACCC9]/60 flex flex-wrap items-center justify-center gap-4 text-xs text-[#4A2C2A]/70">
            <span className="font-medium text-[#38201F]">
              Official Account: <strong className="text-[#E1306C]">{BUSINESS_INFO.instagramHandle}</strong>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E6C4C2]" />
              <span>Real Client Hair &amp; Beauty Artistry</span>
            </span>
          </div>

          {/* Next Steps: Book Appointment */}
          <div className="pt-8">
            <div className="bg-white border border-[#EACCC9] p-8 max-w-xl mx-auto space-y-4">
              <h3 className="font-serif text-xl text-[#38201F]">
                Ready for Your Own Transformation?
              </h3>
              <p className="text-xs sm:text-sm text-[#4A2C2A]/80 leading-relaxed">
                Book your personalized appointment with our team of skilled hair artists and licensed aestheticians in Katy, Texas.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/book')}
                  className="w-full sm:w-auto px-6 py-3 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
