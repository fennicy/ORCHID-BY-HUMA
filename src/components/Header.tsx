import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { Phone, Calendar, Menu, X, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

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
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* 1. TOP INFORMATION BAR (Height ~32-38px, Dark chocolate/burgundy #38201F) */}
      <div className="bg-[#38201F] text-[#FAF7F5] border-b border-[#4A2C2A] text-[11px] font-sans antialiased hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-[#F0D8D6]">
          {/* Left / Center-Left: Address & Hours in one clean horizontal row */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <span className="flex items-center gap-1.5 text-[#F0D8D6]">
              <span className="text-[#E6C4C2] text-xs">✦</span>
              <span>1105 S Mason Rd, Katy, TX 77450</span>
            </span>
            <span className="text-[#4A2C2A]">|</span>
            <span className="flex items-center gap-1.5 text-[#FAF7F5]/85">
              <Clock className="w-3 h-3 text-[#E6C4C2] shrink-0" />
              <span>Monday–Saturday: 10:00 AM–6:30 PM</span>
            </span>
            <span className="text-[#4A2C2A]">|</span>
            <span className="text-[#FAF7F5]/85">
              <span>Sunday: 12:00 PM–5:00 PM</span>
            </span>
          </div>

          {/* Right: WhatsApp, Phone, Google Rated in one clean horizontal row */}
          <div className="flex items-center gap-4 shrink-0 text-[#F0D8D6]">
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Orchid By Huma"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <span className="text-[#4A2C2A]">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              aria-label="Call Orchid By Huma"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#E6C4C2]" />
              <span>(281) 206-0151</span>
            </a>
            <span className="text-[#4A2C2A]">|</span>
            <span className="text-[#E6C4C2] font-semibold flex items-center gap-1">
              <span>★ 4.8 Google Rated</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVIGATION (Height ~72-78px, Ivory/white background #FAF7F5) */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#FAF7F5] ${
          scrolled
            ? 'shadow-md border-b border-[#EACCC9]/90 bg-[#FAF7F5]/98 backdrop-blur-md'
            : 'border-b border-[#EACCC9]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between gap-4">
          {/* LEFT: Brand Logo & Wordmark (Properly sized, completely visible, no overlap) */}
          <Link
            to="/"
            className="group flex items-center gap-3 shrink-0 focus-visible:outline-hidden"
            ariaLabel="Orchid By Huma - Luxury Beauty Salon & Spa Home"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-105 shadow-xs flex items-center justify-center overflow-hidden">
              <Logo className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl sm:text-[26px] tracking-wide text-[#38201F] group-hover:text-[#4A2C2A] transition-colors leading-tight whitespace-nowrap">
                Orchid By Huma
              </span>
              <span className="text-[9.5px] sm:text-[10px] tracking-[0.22em] uppercase text-[#4A2C2A]/75 font-sans font-medium leading-none mt-0.5 whitespace-nowrap">
                Spa · Salon · Aesthetics
              </span>
            </div>
          </Link>

          {/* CENTER: Clean Navigation Links in specified exact order */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#4A2C2A]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative py-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#38201F] font-semibold'
                      : 'hover:text-[#38201F] text-[#4A2C2A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A2C2A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Action Buttons (WhatsApp + BOOK APPOINTMENT, matching height & clean spacing) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Orchid By Huma"
              className="h-9 px-3.5 border border-[#25D366]/40 hover:border-[#25D366] text-[#1E3A2F] hover:text-[#075E54] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-xs flex items-center gap-1.5 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => navigate('/book')}
              className="h-9 px-4 sm:px-4.5 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E6C4C2]" />
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>

          {/* Mobile Quick Action Buttons & Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="h-8 px-2.5 bg-[#25D366]/15 border border-[#25D366]/40 text-[#1E3A2F] text-[11px] font-semibold uppercase flex items-center gap-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="sr-only sm:not-sr-only">Chat</span>
            </a>

            <button
              onClick={() => navigate('/book')}
              className="h-8 px-3 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#4A2C2A] hover:text-[#38201F] focus-visible:ring-2 focus-visible:ring-[#E6C4C2] outline-hidden ml-0.5"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F5] border-b border-[#EACCC9] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-serif tracking-wide py-1.5 border-b border-[#EACCC9]/60 flex items-center justify-between ${
                      isActive ? 'text-[#38201F] font-semibold' : 'text-[#4A2C2A]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#4A2C2A]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={BUSINESS_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp with Orchid By Huma"
                  className="w-full py-3 px-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#1E3A2F] text-center font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/book');
                  }}
                  className="w-full py-3.5 px-4 bg-[#4A2C2A] hover:bg-[#38201F] text-white text-center font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#E6C4C2]" />
                  BOOK APPOINTMENT
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
                  className="w-full py-2.5 px-4 border border-[#EACCC9] text-[#4A2C2A] text-center font-medium text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4A2C2A]" />
                  Call (281) 206-0151
                </a>
              </div>

              <div className="pt-2 text-xs text-[#4A2C2A]/70 text-center space-y-1">
                <p>1105 S Mason Rd, Katy, TX 77450</p>
                <p>
                  Mon–Sat: 10:00 AM–6:30 PM · Sun: 12:00 PM–5:00 PM
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
