import React from 'react';
import { Link } from '../context/RouterContext';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumb?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = 'Orchid By Huma · Katy, TX',
  breadcrumb,
}) => {
  return (
    <div className="relative bg-[#38201F] text-[#FAF7F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#4A2C2A]">
      {/* Subtle Warm Atmospheric Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E6C4C2_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#E6C4C2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-4">
        {/* Breadcrumb / Kicker */}
        <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-[#E6C4C2] font-medium">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumb && (
            <>
              <span aria-hidden="true" className="text-[#EACCC9]/60">/</span>
              <span>{breadcrumb}</span>
            </>
          )}
          {!breadcrumb && <span>· {badge}</span>}
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[#F0D8D6] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
