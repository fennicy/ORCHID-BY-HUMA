import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { BUSINESS_INFO } from '../data/business';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { Calendar, Phone, MapPin, Sparkles, X, ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'Salon Ambiance', label: 'Salon & Reception' },
    { key: 'Hair Artistry', label: 'Hair & Balayage' },
    { key: 'Facials & Skincare', label: 'Facials & Skincare' },
    { key: 'Bridal & Makeup', label: 'Bridal Beauty' },
    { key: 'Spa & Wellness', label: 'Spa & Wellness' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-0">
      <PageHero
        title="Authentic Salon & Spa Gallery"
        subtitle="Explore our real Katy salon interior, private spa suites, hair wash bars, reception lounge, and client artistry."
        breadcrumb="Gallery"
      />

      {/* FILTER TABS */}
      <section className="bg-[#FAF8F5] border-b border-[#E8E0D5] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {filters.map((f) => {
              const isSelected = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A1816] text-[#FAF8F5] shadow-xs'
                      : 'bg-[#F2ECE4] text-stone-700 hover:bg-[#E8E0D5] hover:text-stone-900'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#976F44]">
              Real Photography
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              Inside Orchid By Huma
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every photograph below depicts our authentic salon facilities located at 1105 South Mason Rd in Katy, Texas, showcasing our tranquil treatment spaces and hair craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white border border-[#E8E0D5] overflow-hidden cursor-pointer shadow-xs hover:border-[#B48C5E] transition-all duration-300"
              >
                <div className="aspect-4/3 overflow-hidden relative bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 text-stone-900 shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#976F44] block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-stone-900 font-medium mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LIGHTBOX MODAL */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-[#1A1816] border border-stone-700 text-white overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-[#D8B88F] transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="aspect-16/10 max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 bg-[#1A1816] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-800">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D8B88F] font-semibold">
                      {selectedImage.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-stone-400 text-xs mt-1">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => {
                        setSelectedImage(null);
                        navigate('/book');
                      }}
                      className="px-5 py-2.5 bg-[#C59B6D] hover:bg-[#B48C5E] text-stone-950 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-[#1A1816] text-[#FAF8F5] border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B88F]">
            Visit Us In Person
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Experience Our Katy Sanctuary Today
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
            Come visit Orchid By Huma at 1105 South Mason Rd, Katy, TX 77450. Walk-ins welcome based on availability, or reserve your dedicated stylist ahead of time.
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
