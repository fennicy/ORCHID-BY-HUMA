import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { Phone, Calendar } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  const { navigate, currentPath } = useRouter();

  // Hide when already on the appointment page to avoid redundancy
  if (currentPath === '/appointment') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C1917]/95 backdrop-blur-md border-t border-stone-800 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-800 text-stone-100 text-xs font-semibold uppercase tracking-wider rounded-none hover:bg-stone-700 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#C59B6D]" />
          <span>Call Now</span>
        </a>
        <button
          onClick={() => navigate('/appointment')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#B48C5E] text-stone-950 text-xs font-semibold uppercase tracking-wider rounded-none hover:bg-[#A87D4F] transition-colors cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-stone-950" />
          <span>Book Seat</span>
        </button>
      </div>
    </div>
  );
};
