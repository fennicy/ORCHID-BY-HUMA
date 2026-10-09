import React from 'react';
import { BUSINESS_INFO } from '../data/business';
import { INSTAGRAM_POSTS, FEATURED_REELS } from '../data/instagram';
import { Instagram, Play, ArrowUpRight, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instagramUrl = BUSINESS_INFO.instagramUrl;
  const instagramHandle = BUSINESS_INFO.instagramHandle || '@orchidbyhuma';

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F5] border-b border-[#EACCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* =========================================================================
            HEADER & SOCIAL HANDLE
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
              <Instagram className="w-4 h-4 text-[#4A2C2A]" />
              <span>{instagramHandle} · Official Social Gallery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F] tracking-tight">
              Follow Orchid By Huma
            </h2>
            <p className="text-[#4A2C2A]/80 text-sm sm:text-base leading-relaxed">
              Discover our latest beauty transformations, treatments, bridal looks, and salon moments on Instagram.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-[#E6C4C2]" />
              <span>Follow Us on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E6C4C2]" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            VISUAL GALLERY (6 AUTHENTIC SLOTS)
            ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${post.alt} on Instagram @orchidbyhuma`}
              className="group relative aspect-square overflow-hidden bg-[#FAF7F5] border border-[#EACCC9] block transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Luxury Scrim on Hover with Instagram Glyph */}
              <div className="absolute inset-0 bg-[#38201F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center text-white">
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center mb-2">
                  <Instagram className="w-4 h-4 text-[#E6C4C2]" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E6C4C2]">
                  {post.category}
                </span>
                <span className="text-[11px] font-medium text-[#FAF7F5] mt-1 flex items-center gap-1">
                  <span>View Post</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F0D8D6]" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* =========================================================================
            SUBSECTION: LATEST FROM INSTAGRAM (FEATURED REELS / VIDEO ARCHITECTURE)
            ========================================================================= */}
        <div className="pt-8 border-t border-[#EACCC9] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#4A2C2A] font-semibold flex items-center gap-2">
                <Play className="w-3.5 h-3.5 fill-[#4A2C2A] text-[#4A2C2A]" />
                Reels &amp; Video Highlights
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#38201F]">
                Latest From Instagram
              </h3>
              <p className="text-[#4A2C2A]/80 text-xs sm:text-sm">
                Watch our latest beauty transformations, salon moments, and treatment highlights.
              </p>
            </div>

            <a
              href={`${instagramUrl}reels/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold text-[#4A2C2A] hover:text-[#38201F] transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Watch All Reels on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {FEATURED_REELS.length > 0 ? (
            /* Rendered verified reels cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_REELS.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-9/16 max-h-96 rounded-none overflow-hidden bg-[#38201F] border border-[#EACCC9] flex flex-col justify-end p-5 text-white transition-transform hover:scale-[1.01]"
                >
                  {reel.thumbnail && (
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                  )}
                  <div className="relative z-10 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                    <h4 className="font-serif text-base text-white">{reel.title}</h4>
                    <span className="text-[11px] text-[#E6C4C2] font-semibold flex items-center gap-1">
                      <span>Watch on Instagram</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            /* Clean content-ready state without fabricated reels */
            <div className="bg-[#F0D8D6]/35 border border-[#EACCC9] p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A2C2A]">
                    <Sparkles className="w-4 h-4 text-[#4A2C2A]" />
                    <span>Real Client Stories &amp; Daily Salon Highlights</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#38201F]">
                    Experience Orchid By Huma in Motion
                  </h4>
                  <p className="text-[#4A2C2A]/85 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    From soothing HydraFacial pore-clarification steps to dimensional balayage reveals and bridal dupatta drapery, follow our official Instagram page for video reels captured directly inside our Katy salon at 1105 S Mason Rd.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                  <a
                    href={`${instagramUrl}reels/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#E6C4C2] text-[#E6C4C2]" />
                    <span>View Reels (@orchidbyhuma)</span>
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#EACCC9] text-[#4A2C2A] hover:text-[#38201F] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#4A2C2A]" />
                    <span>Visit Profile</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
