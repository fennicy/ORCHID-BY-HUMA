import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'w-12 h-12',
}) => {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Orchid By Huma - Spa | Salon | Aesthetics"
    >
      <defs>
        <style>
          {`
            .logo-bg { fill: #E6C4C2; stroke: #38201F; stroke-width: 7; }
            .brand-orchid {
              font-family: 'Cormorant Garamond', 'Didot', 'Bodoni MT', Georgia, serif;
              font-size: 114px;
              font-weight: 500;
              fill: #38201F;
            }
            .brand-byhuma {
              font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 26px;
              font-weight: 500;
              fill: #38201F;
            }
            .brand-pillars {
              font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 34px;
              font-weight: 500;
              fill: #38201F;
              letter-spacing: 0.5px;
            }
            .sparkle-star {
              fill: #38201F;
            }
          `}
        </style>
      </defs>

      {/* Circular Badge Background */}
      <circle cx="250" cy="250" r="236" className="logo-bg" />

      {/* Main Brand Title: Orchid */}
      <text x="38" y="230" className="brand-orchid">
        Orchid
      </text>

      {/* Decorative 4-point sparkle star by the 'i' */}
      <path
        className="sparkle-star"
        d="M 360 126 C 360 138 350 142 344 142 C 350 142 360 146 360 158 C 360 146 370 142 376 142 C 370 142 360 138 360 126 Z"
      />

      {/* Horizontal divider rule + 'by huma' */}
      <line
        x1="60"
        y1="258"
        x2="304"
        y2="258"
        stroke="#38201F"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <text x="313" y="266" className="brand-byhuma">
        by huma
      </text>

      {/* Service offerings */}
      <text x="250" y="352" textAnchor="middle" className="brand-pillars">
        Spa | Salon | Aesthetics
      </text>
    </svg>
  );
};
