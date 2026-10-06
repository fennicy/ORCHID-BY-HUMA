import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/business';
import { SERVICE_CATEGORIES } from '../data/services';
import { Send, CheckCircle2, Phone, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterested: 'General Inquiry',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F5] border border-[#E8E0D5] p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#EBF5EE] text-[#2E7D32] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl text-stone-900">Message Received</h3>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          Thank you for reaching out to Orchid By Huma. Our Katy team will get in touch with you shortly.
        </p>
        <div className="pt-2">
          <a
            href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1816] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#976F44] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D8B88F]" />
            Call Us Directly: {BUSINESS_INFO.phone.primary}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1">
            Full Name <span className="text-[#976F44]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1">
            Phone Number <span className="text-[#976F44]">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(281) 000-0000"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1">
            Service Interested In
          </label>
          <select
            value={formData.serviceInterested}
            onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] transition-colors"
          >
            <option value="General Inquiry">General Question / Consultation</option>
            {SERVICE_CATEGORIES.map((cat) => (
              <option key={cat.key} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1">
          Preferred Date (Optional)
        </label>
        <input
          type="date"
          value={formData.preferredDate}
          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1">
          Your Message
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can our salon and spa team help you today?"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 bg-[#1A1816] hover:bg-[#976F44] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center gap-2"
      >
        <Send className="w-3.5 h-3.5 text-[#D8B88F]" />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  );
};
