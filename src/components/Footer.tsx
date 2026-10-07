import React from 'react';
import { Link } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { Phone, Mail, MapPin, Clock, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-[#E7E2DB] border-t border-stone-800">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-wide text-white block">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C59B6D] font-medium block mt-0.5">
                Luxury Beauty Salon &amp; Spa
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Dedicated to bespoke beauty care, rejuvenating skincare rituals, and precision hair artistry. Serving clients across Katy and Greater Houston with over a decade of trusted experience.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Orchid By Huma on Instagram"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#C59B6D] hover:border-[#C59B6D] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <div className="text-xs text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C59B6D]" />
                <span>Licensed Professionals</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B6D] mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
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
                <Link to="/book" className="text-[#C59B6D] hover:underline font-medium">
                  Book An Appointment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Treatments */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B6D] mb-4">
              Service Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link to="/services/facials-skincare" className="hover:text-stone-200 transition-colors">
                  Facials &amp; Skincare
                </Link>
              </li>
              <li>
                <Link to="/services/hair" className="hover:text-stone-200 transition-colors">
                  Haircuts &amp; Blowouts
                </Link>
              </li>
              <li>
                <Link to="/services/hair-color" className="hover:text-stone-200 transition-colors">
                  Balayage &amp; Hair Color
                </Link>
              </li>
              <li>
                <Link to="/services/threading-waxing" className="hover:text-stone-200 transition-colors">
                  Threading &amp; Waxing
                </Link>
              </li>
              <li>
                <Link to="/services/bridal" className="hover:text-stone-200 transition-colors">
                  Bridal &amp; Event Makeup
                </Link>
              </li>
              <li>
                <Link to="/services/brows-lashes" className="hover:text-stone-200 transition-colors">
                  Brows &amp; Lash Lifts
                </Link>
              </li>
              <li>
                <Link to="/services/spa" className="hover:text-stone-200 transition-colors">
                  Spa &amp; Body Massage
                </Link>
              </li>
              <li>
                <Link to="/services/hydrafacial-katy-tx" className="hover:text-[#D8B88F] transition-colors font-medium">
                  HydraFacial ($110)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B6D] mb-4">
              Location &amp; Hours
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B6D] shrink-0 mt-0.5" />
                <span>
                  1105 S Mason Rd<br />
                  Katy, TX 77450
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B6D] shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phone.primaryRaw}`} className="hover:text-[#C59B6D] transition-colors">
                    {BUSINESS_INFO.phone.primary}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phone.secondaryRaw}`} className="text-xs text-stone-400 hover:text-[#C59B6D] transition-colors">
                    {BUSINESS_INFO.phone.secondary} (Alt)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B6D] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email.primary}`} className="hover:text-[#C59B6D] transition-colors text-xs">
                  {BUSINESS_INFO.email.primary}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C59B6D] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 text-stone-400">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <p key={i}>
                      <span className="text-stone-200">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Genuine Disclaimer */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} Orchid By Huma. All rights reserved. Katy, Texas.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-stone-300 transition-colors">
              About
            </Link>
            <Link to="/pricing" className="hover:text-stone-300 transition-colors">
              Pricing Note
            </Link>
            <Link to="/contact" className="hover:text-stone-300 transition-colors">
              Find Our Salon
            </Link>
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#C59B6D] transition-colors"
            >
              Google Maps Directions ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
