import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICE_CATEGORIES } from '../data/services';
import { SERVICE_LANDING_PAGES } from '../data/servicePages';
import { Search, X, ArrowRight, Tag, FileText, Sparkles, Calendar } from 'lucide-react';

interface SearchItem {
  id: string;
  title: string;
  category: string;
  price?: string;
  duration?: string;
  description: string;
  url: string;
  type: 'service' | 'page' | 'pricing';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Compile searchable index across services, dedicated landing pages, pricing, and main routes
  const searchIndex: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // Core Pages
    items.push(
      {
        id: 'page-home',
        title: 'Home — Orchid By Huma',
        category: 'Main Page',
        description: 'Luxury Beauty Salon, Spa & Aesthetics Studio in Katy, TX.',
        url: '/',
        type: 'page',
      },
      {
        id: 'page-about',
        title: 'About Us — Orchid By Huma',
        category: 'Story & Team',
        description: 'Over 10 years of beauty, spa, and skincare excellence in Katy, Texas.',
        url: '/about',
        type: 'page',
      },
      {
        id: 'page-services',
        title: 'All Services & Treatments',
        category: 'Menu',
        description: 'Explore full menu of hair artistry, HydraFacials, clinical skincare, waxing, massage and makeup.',
        url: '/services',
        type: 'page',
      },
      {
        id: 'page-deals',
        title: 'Deals & Specials',
        category: 'Special Offers',
        description: 'Current seasonal packages, promotions, and treatment combinations at Orchid By Huma in Katy, TX.',
        url: '/deals',
        type: 'pricing',
      },
      {
        id: 'page-pricing',
        title: 'Pricing & Transparent Menu',
        category: 'Pricing',
        description: 'View transparent pricing for all salon, spa, lash, brow, and bridal packages.',
        url: '/pricing',
        type: 'pricing',
      },
      {
        id: 'page-gallery',
        title: 'Instagram & Portfolio Gallery',
        category: 'Social & Gallery',
        description: 'Follow our official Instagram for daily transformations, balayage artistry, and bridal looks.',
        url: '/gallery',
        type: 'page',
      },
      {
        id: 'page-reviews',
        title: 'Client Reviews (4.8 ★ Google Rating)',
        category: 'Testimonials',
        description: 'Kind words and verified feedback from Katy guests.',
        url: '/reviews',
        type: 'page',
      },
      {
        id: 'page-contact',
        title: 'Contact Us & Location',
        category: 'Location & Hours',
        description: '1105 S Mason Rd, Katy, TX 77450 · Phone (281) 206-0151 · Hours and directions.',
        url: '/contact',
        type: 'page',
      },
      {
        id: 'page-book',
        title: 'Book an Appointment',
        category: 'Booking',
        description: 'Reserve your personalized appointment online with our stylists and aestheticians.',
        url: '/book',
        type: 'page',
      }
    );

    // Dedicated Landing Pages (High Priority)
    Object.values(SERVICE_LANDING_PAGES).forEach((lp) => {
      items.push({
        id: `landing-${lp.slug}`,
        title: lp.h1,
        category: lp.category,
        price: lp.price,
        duration: lp.duration,
        description: lp.tagline,
        url: lp.route,
        type: 'service',
      });
    });

    // Individual Services from Categories
    SERVICE_CATEGORIES.forEach((cat) => {
      cat.services.forEach((s) => {
        // Only add if not duplicate slug title
        const existing = items.find((i) => i.title.toLowerCase() === s.name.toLowerCase());
        if (!existing) {
          items.push({
            id: `service-${s.id}`,
            title: s.name,
            category: cat.title,
            price: s.price,
            duration: s.duration,
            description: s.description,
            url: `/book?category=${cat.key}&service=${s.id}`,
            type: 'service',
          });
        }
      });
    });

    return items;
  }, []);

  // Filter items matching query
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.price && item.price.toLowerCase().includes(q))
    ).slice(0, 10);
  }, [query, searchIndex]);

  // Keyboard navigation & autofocus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  const popularSearches = ['HydraFacial', 'Balayage', 'Haircuts', 'Waxing', 'Bridal', 'Pricing', 'Hours'];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Website Search"
    >
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Search Sheet */}
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-[#FAF7F5] border-b border-[#EACCC9] shadow-2xl overflow-hidden flex flex-col max-h-[88vh] rounded-b-2xl">
        {/* Search Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-b border-[#EACCC9] flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-[#F0D8D6]/60 text-[#38201F] flex items-center justify-center shrink-0">
            <Search className="w-5 h-5 text-[#38201F]" />
          </div>

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search treatments, hair, facials, pricing, hours..."
            aria-label="Search treatments, services, and pricing"
            className="flex-1 bg-transparent text-[#38201F] placeholder-[#4A2C2A]/50 text-sm sm:text-base outline-hidden font-medium py-2"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1.5 text-[#4A2C2A]/60 hover:text-[#38201F] rounded-full transition-colors cursor-pointer"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#38201F] bg-[#F0D8D6] hover:bg-[#EACCC9] border border-[#EACCC9] rounded-md transition-colors cursor-pointer shrink-0"
          >
            Done
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {!query.trim() ? (
            <div className="space-y-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A2C2A]/70 block">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-white border border-[#EACCC9] hover:border-[#4A2C2A] text-[#38201F] text-xs font-medium rounded-full transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    <Sparkles className="w-3 h-3 text-[#E6C4C2]" />
                    <span>{term}</span>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EACCC9]/60">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A2C2A]/70 block mb-2">
                  Quick Navigation
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSelect('/services')}
                    className="p-3 bg-white border border-[#EACCC9] hover:border-[#4A2C2A] text-left transition-colors flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-[#38201F]">Services Menu</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]/60 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleSelect('/pricing')}
                    className="p-3 bg-white border border-[#EACCC9] hover:border-[#4A2C2A] text-left transition-colors flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-[#38201F]">Transparent Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]/60 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleSelect('/book')}
                    className="p-3 bg-white border border-[#EACCC9] hover:border-[#4A2C2A] text-left transition-colors flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-[#38201F]">Book Appointment</span>
                    <Calendar className="w-3.5 h-3.5 text-[#4A2C2A]/60" />
                  </button>
                  <button
                    onClick={() => handleSelect('/contact')}
                    className="p-3 bg-white border border-[#EACCC9] hover:border-[#4A2C2A] text-left transition-colors flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-[#38201F]">Location &amp; Hours</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A2C2A]/60 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A2C2A]/70 block mb-2">
                Found {results.length} result{results.length === 1 ? '' : 's'}
              </span>
              {results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.url)}
                  className="p-3.5 bg-white border border-[#EACCC9] hover:border-[#4A2C2A] transition-all cursor-pointer group shadow-2xs space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      {item.type === 'service' ? (
                        <Tag className="w-3.5 h-3.5 text-[#4A2C2A] shrink-0" />
                      ) : (
                        <FileText className="w-3.5 h-3.5 text-[#4A2C2A] shrink-0" />
                      )}
                      <span className="font-serif text-base sm:text-lg text-[#38201F] group-hover:text-[#4A2C2A] transition-colors truncate font-semibold">
                        {item.title}
                      </span>
                    </div>

                    {item.price && (
                      <span className="text-xs font-bold text-[#38201F] bg-[#F0D8D6] px-2 py-0.5 rounded-xs shrink-0">
                        {item.price}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#4A2C2A]/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-[#4A2C2A]/60">
                    <span className="uppercase tracking-wider font-medium">{item.category}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold text-[#38201F]">
                      View details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 space-y-2">
              <p className="font-serif text-lg text-[#38201F]">No matches found for "{query}"</p>
              <p className="text-xs text-[#4A2C2A]/75 max-w-sm mx-auto">
                Try searching for general terms like "Facials", "Balayage", "Waxing", or view our full{' '}
                <button
                  onClick={() => handleSelect('/services')}
                  className="underline text-[#38201F] font-semibold cursor-pointer"
                >
                  Services Menu
                </button>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
