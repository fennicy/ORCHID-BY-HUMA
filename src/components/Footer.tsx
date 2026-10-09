import React from 'react';
import { Link } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { Phone, Mail, MapPin, Clock, Instagram, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#38201F] text-[#FAF7F5] border-t border-[#4A2C2A]">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0 rounded-full shadow-sm">
                <Logo className="w-full h-full" />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-wide text-white block">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#E6C4C2] font-medium block mt-0.5">
                  Spa · Salon · Aesthetics
                </span>
              </div>
            </div>
            <p className="text-[#FAF7F5]/80 text-sm leading-relaxed">
              Dedicated to bespoke beauty care, rejuvenating skincare rituals, and precision hair artistry. Serving clients across Katy and Greater Houston with over a decade of trusted experience.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Orchid By Huma on Instagram"
                className="w-9 h-9 rounded-full bg-[#4A2C2A] border border-[#38201F] flex items-center justify-center text-[#FAF7F5] hover:text-[#E6C4C2] hover:border-[#E6C4C2] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Chat on WhatsApp with Orchid By Huma"
                className="w-9 h-9 rounded-full bg-[#4A2C2A] border border-[#38201F] flex items-center justify-center text-[#25D366] hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/20 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <div className="text-xs text-[#F0D8D6] flex items-center gap-1.5 pl-1">
                <ShieldCheck className="w-4 h-4 text-[#E6C4C2]" />
                <span>Licensed Professionals</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C4C2] mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F0D8D6]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Salon Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-[#E6C4C2] hover:underline hover:text-white font-medium">
                  Book An Appointment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Treatments */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C4C2] mb-4">
              Service Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F5]/80">
              <li>
                <Link to="/services/facials-skincare" className="hover:text-white transition-colors">
                  Facials &amp; Skincare
                </Link>
              </li>
              <li>
                <Link to="/services/hair" className="hover:text-white transition-colors">
                  Haircuts &amp; Blowouts
                </Link>
              </li>
              <li>
                <Link to="/services/hair-color" className="hover:text-white transition-colors">
                  Balayage &amp; Hair Color
                </Link>
              </li>
              <li>
                <Link to="/services/threading-waxing" className="hover:text-white transition-colors">
                  Threading &amp; Waxing
                </Link>
              </li>
              <li>
                <Link to="/services/bridal" className="hover:text-white transition-colors">
                  Bridal &amp; Event Makeup
                </Link>
              </li>
              <li>
                <Link to="/services/brows-lashes" className="hover:text-white transition-colors">
                  Brows &amp; Lash Lifts
                </Link>
              </li>
              <li>
                <Link to="/services/spa" className="hover:text-white transition-colors">
                  Spa &amp; Body Massage
                </Link>
              </li>
              <li>
                <Link to="/services/hydrafacial-katy-tx" className="hover:text-[#E6C4C2] transition-colors font-medium">
                  HydraFacial ($110)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6C4C2] mb-4">
              Location &amp; Hours
            </h4>
            <div className="space-y-3 text-sm text-[#F0D8D6]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E6C4C2] shrink-0 mt-0.5" />
                <span>
                  1105 S Mason Rd<br />
                  Katy, TX 77450
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E6C4C2] shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phone.primaryRaw}`} className="hover:text-[#E6C4C2] transition-colors">
                    {BUSINESS_INFO.phone.primary}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phone.secondaryRaw}`} className="text-xs text-[#FAF7F5]/70 hover:text-[#E6C4C2] transition-colors">
                    {BUSINESS_INFO.phone.secondary} (Alt)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp with Orchid By Huma"
                  className="hover:text-[#E6C4C2] transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.whatsapp.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E6C4C2] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email.primary}`} className="hover:text-[#E6C4C2] transition-colors text-xs">
                  {BUSINESS_INFO.email.primary}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E6C4C2] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 text-[#FAF7F5]/70">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <p key={i}>
                      <span className="text-[#FAF7F5]">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Genuine Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#4A2C2A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F5]/60 gap-4">
          <p>
            © {new Date().getFullYear()} Orchid By Huma. All rights reserved. Katy, Texas.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#FAF7F5] transition-colors">
              About
            </Link>
            <Link to="/pricing" className="hover:text-[#FAF7F5] transition-colors">
              Pricing Note
            </Link>
            <Link to="/contact" className="hover:text-[#FAF7F5] transition-colors">
              Find Our Salon
            </Link>
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#E6C4C2] transition-colors"
            >
              Google Maps Directions ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
