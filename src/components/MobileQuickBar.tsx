import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BUSINESS_INFO } from '../data/business';
import { Phone, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const MobileQuickBar: React.FC = () => {
  const { navigate, currentPath } = useRouter();

  // Hide when already on the appointment page to avoid redundancy
  if (currentPath === '/appointment' || currentPath === '/book') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#38201F]/95 backdrop-blur-md border-t border-[#4A2C2A] p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-1.5">
        <a
          href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
          aria-label={`Call ${BUSINESS_INFO.phone.primary}`}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#4A2C2A] text-[#FAF7F5] text-[10px] font-semibold uppercase tracking-wider rounded-none hover:bg-[#38201F] active:bg-[#38201F] transition-colors focus-visible:ring-2 focus-visible:ring-[#E6C4C2] outline-none min-h-[46px]"
        >
          <Phone className="w-4 h-4 text-[#E6C4C2]" />
          <span>Call</span>
        </a>
        <a
          href={BUSINESS_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Orchid By Huma"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#25D366]/20 text-[#FAF7F5] text-[10px] font-semibold uppercase tracking-wider rounded-none hover:bg-[#25D366]/30 active:bg-[#25D366]/40 border border-[#25D366]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] outline-none min-h-[46px]"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => navigate('/book')}
          aria-label="Book an appointment"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-[#E6C4C2] text-[#38201F] text-[10px] font-bold uppercase tracking-wider rounded-none hover:bg-[#F0D8D6] active:bg-[#EACCC9] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38201F] outline-none min-h-[46px]"
        >
          <Calendar className="w-4 h-4 text-[#38201F]" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
