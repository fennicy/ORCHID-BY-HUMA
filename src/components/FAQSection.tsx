import React, { useState } from 'react';
import { MAIN_FAQS, FAQItem } from '../data/faqs';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  limit?: number;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  items = MAIN_FAQS,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear, direct answers regarding treatments, booking, location, and salon policies at Orchid By Huma in Katy, Texas.',
  limit,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F5] border-b border-[#EACCC9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2C2A]">
            Answers &amp; Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38201F]">
            {title}
          </h2>
          <p className="text-[#4A2C2A]/80 text-sm sm:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {displayItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#EACCC9] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#38201F] font-medium flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#4A2C2A] shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <span className="text-[#4A2C2A]/50 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#4A2C2A]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A2C2A]/85 leading-relaxed border-t border-[#F0D8D6]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
