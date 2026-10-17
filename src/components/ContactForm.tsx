import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/business';
import { SERVICE_CATEGORIES } from '../data/services';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Send, CheckCircle2, Phone, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterested: 'General Question / Consultation',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submittedData, setSubmittedData] = useState<{ name: string; serviceInterested: string; phone: string } | null>(null);
  const [submissionId, setSubmissionId] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setError('Please provide a valid phone number so our Katy salon team can contact you.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please provide a message or question for our team.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          serviceInterested: formData.serviceInterested,
          preferredDate: formData.preferredDate || undefined,
          message: formData.message.trim(),
          sourceUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });

      let data: any = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok || !data.success) {
        // Ensure error is strictly a readable string, never an object or exception
        const errorMsg =
          typeof data.error === 'string'
            ? data.error
            : typeof data.message === 'string'
            ? data.message
            : 'Unable to deliver your message. Please call our Katy salon directly at (281) 206-0151.';
        throw new Error(errorMsg);
      }

      setSubmittedData({
        name: formData.name.trim(),
        serviceInterested: formData.serviceInterested,
        phone: formData.phone.trim(),
      });
      setSubmissionId(typeof data.id === 'string' ? data.id : '');
      setSubmitted(true);
      setError(null);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      // Ensure error is never rendered as [object Object]
      const userMessage =
        err && typeof err.message === 'string' && err.message !== '[object Object]'
          ? err.message
          : typeof err === 'string'
          ? err
          : 'We could not send your message right now. Please check your internet connection or call our Katy salon directly at (281) 206-0151.';
      setError(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted && submittedData) {
    return (
      <div className="bg-[#FAF7F5] border border-[#EACCC9] p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#F0D8D6] text-[#4A2C2A] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-wider text-[#4A2C2A] font-semibold block">
            Message Received {submissionId ? `· Ref: ${submissionId}` : ''}
          </span>
          <h3 className="font-serif text-2xl text-[#38201F]">Inquiry Successfully Received</h3>
        </div>
        <p className="text-[#4A2C2A]/80 text-sm max-w-md mx-auto">
          Thank you, <strong className="text-[#38201F]">{submittedData.name}</strong>. Your inquiry has been received by our Katy salon team. We will review your message and reach out to you at{' '}
          <strong className="text-[#38201F]">{submittedData.phone}</strong> shortly.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={BUSINESS_INFO.whatsapp.createUrl(`Hi Orchid By Huma, I just sent an inquiry online regarding ${submittedData.serviceInterested} (Ref: ${submissionId || 'Website'}).`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Orchid By Huma"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/20 border border-[#25D366]/60 text-[#1E3A2F] text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366]/30 transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A2C2A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#38201F] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E6C4C2]" />
            Call: {BUSINESS_INFO.phone.primary}
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setSubmittedData(null);
              setSubmissionId('');
              setFormData({
                name: '',
                phone: '',
                email: '',
                serviceInterested: 'General Inquiry',
                preferredDate: '',
                message: '',
              });
            }}
            className="px-4 py-2.5 border border-[#EACCC9] text-[#4A2C2A] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div role="alert" className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{typeof error === 'string' ? error : String(error || '')}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-[#4A2C2A] uppercase tracking-wider mb-1">
            Full Name <span className="text-[#4A2C2A] font-bold">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Full Name"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EACCC9] text-[#38201F] focus:outline-hidden focus:border-[#4A2C2A] focus:ring-1 focus:ring-[#E6C4C2] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-medium text-[#4A2C2A] uppercase tracking-wider mb-1">
            Phone Number <span className="text-[#4A2C2A] font-bold">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(281) 555-0123"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EACCC9] text-[#38201F] focus:outline-hidden focus:border-[#4A2C2A] focus:ring-1 focus:ring-[#E6C4C2] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-[#4A2C2A] uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="client@email.com"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EACCC9] text-[#38201F] focus:outline-hidden focus:border-[#4A2C2A] focus:ring-1 focus:ring-[#E6C4C2] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-xs font-medium text-[#4A2C2A] uppercase tracking-wider mb-1">
            Service Interested In
          </label>
          <select
            id="contact-service"
            value={formData.serviceInterested}
            onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EACCC9] text-[#38201F] focus:outline-hidden focus:border-[#4A2C2A] focus:ring-1 focus:ring-[#E6C4C2] transition-colors"
          >
            <option value="General Question / Consultation">General Question / Consultation</option>
            <option value="Facials & Skincare">Facials &amp; Skincare</option>
            <option value="Hair Styling & Treatments">Hair Styling &amp; Treatments</option>
            <option value="Hair Color & Highlights">Hair Color &amp; Highlights</option>
            <option value="Precision Haircuts">Precision Haircuts</option>
            <option value="Bridal & Event Makeup">Bridal &amp; Event Makeup</option>
            <option value="Waxing & Body Treatments">Waxing &amp; Body Treatments</option>
            <option value="Threading & Facial Waxing">Threading &amp; Facial Waxing</option>
            <option value="Tint, Lamination & Lashes">Tint, Lamination &amp; Lashes</option>
            <option value="Massage & Spa Wellness">Massage &amp; Spa Wellness</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-date" className="block text-xs font-medium text-[#4A2C2A] uppercase tracking-wider mb-1">
          Preferred Date (Optional)
        </label>
        <input
          id="contact-date"
          type="date"
          value={formData.preferredDate}
          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EACCC9] text-[#38201F] focus:outline-hidden focus:border-[#4A2C2A] focus:ring-1 focus:ring-[#E6C4C2] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-[#4A2C2A] uppercase tracking-wider mb-1">
          Your Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can our salon and spa team help you today?"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EACCC9] text-[#38201F] focus:outline-hidden focus:border-[#4A2C2A] focus:ring-1 focus:ring-[#E6C4C2] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3.5 bg-[#4A2C2A] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${
          isSubmitting
            ? 'opacity-70 cursor-not-allowed'
            : 'hover:bg-[#38201F] active:bg-[#2A1817] cursor-pointer'
        }`}
      >
        <Send className={`w-3.5 h-3.5 text-[#E6C4C2] ${isSubmitting ? 'animate-pulse' : ''}`} />
        <span>{isSubmitting ? 'Saving Your Inquiry...' : 'Send Message'}</span>
      </button>
    </form>
  );
};
