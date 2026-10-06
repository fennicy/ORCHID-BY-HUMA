import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#141210] text-[#E7E2DB] border-t border-stone-800">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-stone-800/80 py-12 px-4 sm:px-6 lg:px-8 bg-[#181614]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#C59B6D] text-xs font-semibold uppercase tracking-[0.2em] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B6D]" />
              Luxury Salon &amp; Spa · Katy, Texas
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
              Ready to elevate your beauty &amp; wellness ritual?
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              10+ years of dedicated artistry in facials, hair design, bridal glam, and relaxation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/appointment')}
              className="bg-[#C59B6D] hover:bg-[#B48C5E] text-stone-950 font-semibold px-6 py-3 text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
              className="border border-stone-700 hover:border-stone-500 text-white font-medium px-5 py-3 text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B6D]" />
              <span>(281) 206-0151</span>
            </a>
          </div>
        </div>
      </div>

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
                <Link to="/appointment" className="text-[#C59B6D] hover:underline font-medium">
                  Book An Appointment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Treatments */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B6D] mb-4">
              Signature Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link to="/services/hydrafacial-katy-tx" className="hover:text-stone-200 transition-colors">
                  HydraFacial Treatment ($110)
                </Link>
              </li>
              <li>
                <Link to="/services/balayage-katy-tx" className="hover:text-stone-200 transition-colors">
                  Balayage &amp; Highlights ($240 &amp; up)
                </Link>
              </li>
              <li>
                <Link to="/services/hair-color-katy-tx" className="hover:text-stone-200 transition-colors">
                  Hair Color &amp; Root Touch Up ($60 &amp; up)
                </Link>
              </li>
              <li>
                <Link to="/services/bridal-makeup-katy-tx" className="hover:text-stone-200 transition-colors">
                  Bridal &amp; Occasion Makeup ($750)
                </Link>
              </li>
              <li>
                <Link to="/services/brazilian-wax-katy-tx" className="hover:text-stone-200 transition-colors">
                  Brazilian Waxing ($50)
                </Link>
              </li>
              <li>
                <Link to="/services/lash-lift-katy-tx" className="hover:text-stone-200 transition-colors">
                  Lash Lift &amp; Brow Lamination ($60+)
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
                  <p><span className="text-stone-200">Mon–Sat:</span> 10:00 AM – 6:30 PM</p>
                  <p><span className="text-stone-200">Sunday:</span> 12:00 PM – 5:00 PM</p>
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
