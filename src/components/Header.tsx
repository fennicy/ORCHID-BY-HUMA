import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { Phone, Calendar, Menu, X, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar: Luxury Address & Hours */}
      <div className="bg-[#1C1917] text-[#E7E2DB] text-xs py-2 px-4 border-b border-stone-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <span className="text-[#C59B6D]">✦</span>
              {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateCode} {BUSINESS_INFO.address.zip}
            </span>
            <span className="flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-[#C59B6D]" />
              {BUSINESS_INFO.hours[0].days}: {BUSINESS_INFO.hours[0].time} · {BUSINESS_INFO.hours[1].days}: {BUSINESS_INFO.hours[1].time}
            </span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="hover:text-[#C59B6D] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C59B6D]" />
              {BUSINESS_INFO.phone.primary}
            </a>
            <span className="text-stone-600">|</span>
            <span className="text-[#C59B6D] font-medium">★ 4.8 Google Rated</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E0D5]'
            : 'bg-[#FAF8F5] border-b border-[#E8E0D5]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-hidden"
            ariaLabel="Orchid By Huma - Home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-wide text-stone-900 group-hover:text-[#976F44] transition-colors">
              Orchid By Huma
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-sans -mt-1 font-medium">
              Salon &amp; Spa · Katy, TX
            </span>
          </Link>

          {/* Zone 2: Navigation Links (Clean text, subtle underline on hover) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#976F44] font-semibold'
                      : 'hover:text-stone-950 text-stone-700'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B48C5E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Phone + Book Appointment) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="text-stone-800 hover:text-[#976F44] transition-colors text-sm font-medium flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#B48C5E]" />
              <span>{BUSINESS_INFO.phone.primary}</span>
            </a>

            <button
              onClick={() => navigate('/appointment')}
              className="bg-[#1A1816] hover:bg-[#976F44] text-[#FAF8F5] px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D8B88F]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => navigate('/appointment')}
              className="bg-[#1A1816] text-[#FAF8F5] px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-[#B48C5E] outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-300 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-serif tracking-wide py-1 border-b border-stone-200/60 ${
                      isActive ? 'text-[#976F44] font-semibold' : 'text-stone-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                  className="w-full py-3 px-4 border border-stone-300 text-stone-900 text-center font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B48C5E]" />
                  Call {BUSINESS_INFO.phone.primary}
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/appointment');
                  }}
                  className="w-full py-3.5 px-4 bg-[#1A1816] text-white text-center font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#D8B88F]" />
                  Book An Appointment
                </button>
              </div>

              <div className="pt-2 text-xs text-stone-500 text-center space-y-1">
                <p>{BUSINESS_INFO.address.full}</p>
                <p>
                  {BUSINESS_INFO.hours[0].days}: {BUSINESS_INFO.hours[0].time} · {BUSINESS_INFO.hours[1].days}: {BUSINESS_INFO.hours[1].time}
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
