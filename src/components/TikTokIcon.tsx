import React from 'react';

interface TikTokIconProps {
  className?: string;
}

export const TikTokIcon: React.FC<TikTokIconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.134V9.42a6.34 6.34 0 0 0-.87-.06 6.34 6.34 0 1 0 6.34 6.34V9.05a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.48z" />
  </svg>
);
