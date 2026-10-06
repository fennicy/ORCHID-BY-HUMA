import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data/services';
import { BUSINESS_INFO } from '../data/business';
import { AppointmentFormData } from '../types';
import { Calendar, Clock, CheckCircle2, Phone, AlertCircle } from 'lucide-react';

interface BookingFormProps {
  initialServiceCategory?: string;
  initialServiceId?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialServiceCategory = 'facials',
  initialServiceId = '',
}) => {
  // Resolve pre-selected category and service intelligently from initial props
  const resolvedCategory = () => {
    if (initialServiceId) {
      for (const cat of SERVICE_CATEGORIES) {
        if (cat.services.some((s) => s.id === initialServiceId)) {
          return cat.key;
        }
      }
      if (initialServiceId.includes('hydra') || initialServiceId.includes('facial') || initialServiceId.includes('microderm')) return 'facials';
      if (initialServiceId.includes('balayage') || initialServiceId.includes('color') || initialServiceId.includes('highlight')) return 'hair-color';
      if (initialServiceId.includes('blowout') || initialServiceId.includes('styling')) return 'hair-styling';
      if (initialServiceId.includes('haircut') || initialServiceId.includes('hair-salon')) return 'haircuts';
      if (initialServiceId.includes('makeup') || initialServiceId.includes('bridal')) return 'makeup';
      if (initialServiceId.includes('wax')) return 'waxing';
      if (initialServiceId.includes('threading')) return 'threading';
      if (initialServiceId.includes('lash') || initialServiceId.includes('brow')) return 'tint-lamination';
      if (initialServiceId.includes('massage') || initialServiceId.includes('scrub')) return 'massage';
    }
    return initialServiceCategory;
  };

  const resolvedService = () => {
    if (!initialServiceId) return '';
    for (const cat of SERVICE_CATEGORIES) {
      const found = cat.services.find((s) => s.id === initialServiceId);
      if (found) return found.id;
    }
    const slugMap: Record<string, string> = {
      'hydrafacial-katy-tx': 'hydra-facial',
      'balayage-katy-tx': 'balayage',
      'hair-color-katy-tx': 'full-hair-color',
      'highlights-katy-tx': 'highlights-full',
      'blowout-katy-tx': 'voluminous-blowdry',
      'haircuts-katy-tx': 'haircut',
      'hair-salon-katy-tx': 'haircut',
      'facials-katy-tx': 'basic-facial',
      'microdermabrasion-katy-tx': 'microdermabrasion',
      'acne-facial-katy-tx': 'acne-facial',
      'massage-katy-tx': 'hot-oil-massage-60',
      'body-scrub-katy-tx': 'body-scrubbing',
      'waxing-katy-tx': 'full-body-with-brazilian',
      'brazilian-wax-katy-tx': 'brazilian-wax',
      'threading-katy-tx': 'eyebrows-threading',
      'bridal-makeup-katy-tx': 'bridal-makeup',
      'makeup-katy-tx': 'party-makeup',
      'lash-lift-katy-tx': 'lash-lift-tint',
      'brow-lamination-katy-tx': 'eyebrow-lamination',
    };
    return slugMap[initialServiceId] || '';
  };

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: resolvedCategory(),
    specificService: resolvedService(),
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter available services by selected category
  const selectedCatObj = SERVICE_CATEGORIES.find((c) => c.key === formData.serviceCategory);
  const availableServices = selectedCatObj ? selectedCatObj.services : [];

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '5:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number so our Katy salon can confirm your booking.');
      return;
    }
    if (!formData.preferredDate) {
      setError('Please select a preferred date for your appointment.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real scheduling request transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F5] border border-[#E8E0D5] p-8 sm:p-12 text-center space-y-6 max-w-xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#EBF5EE] text-[#2E7D32] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#976F44] font-semibold">
            Request Received
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900">
            Thank you, {formData.fullName.split(' ')[0]}!
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto pt-1">
            Your appointment request has been received. Our team will contact you at{' '}
            <strong className="text-stone-900">{formData.phone}</strong> to confirm your appointment time and details.
          </p>
        </div>

        {/* Appointment summary recap */}
        <div className="bg-[#F2ECE4] p-5 text-left text-xs text-stone-800 space-y-2 border border-[#E0D7CB]">
          <div className="flex justify-between border-b border-[#D8D0C5] pb-2">
            <span className="text-stone-500">Service:</span>
            <span className="font-semibold text-stone-900">
              {formData.specificService
                ? availableServices.find((s) => s.id === formData.specificService)?.name || formData.specificService
                : selectedCatObj?.title}
            </span>
          </div>
          <div className="flex justify-between border-b border-[#D8D0C5] pb-2">
            <span className="text-stone-500">Preferred Date:</span>
            <span className="font-semibold text-stone-900">{formData.preferredDate}</span>
          </div>
          <div className="flex justify-between border-b border-[#D8D0C5] pb-2">
            <span className="text-stone-500">Preferred Time:</span>
            <span className="font-semibold text-stone-900">{formData.preferredTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Location:</span>
            <span className="font-semibold text-stone-900">1105 South Mason Rd, Katy, TX</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone.primaryRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1816] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#976F44] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D8B88F]" />
            Call Salon: {BUSINESS_INFO.phone.primary}
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                serviceCategory: 'facials',
                specificService: '',
                preferredDate: '',
                preferredTime: '10:00 AM',
                notes: '',
              });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Book Another Visit
          </button>
        </div>
      </div>
    );
  }

  // Calculate today's date formatted as YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FAF8F5] border border-[#E8E0D5] p-6 sm:p-10 shadow-xs max-w-2xl mx-auto space-y-6"
    >
      <div className="border-b border-[#E8E0D5] pb-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#976F44]">
          Reserve Your Visit
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 mt-1">
          Book Your Appointment
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm mt-1">
          Choose your service and preferred time, and our team will help you plan your visit.
        </p>
      </div>

      {error && (
        <div role="alert" className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Full Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="booking-fullname" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-[#976F44]">*</span>
          </label>
          <input
            id="booking-fullname"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Full Name"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="booking-phone" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-[#976F44]">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(281) 555-0123"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email */}
      <div>
        <label htmlFor="booking-email" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
          Email Address
        </label>
        <input
          id="booking-email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="client@email.com"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors"
        />
      </div>

      {/* Row 3: Service Category & Specific Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="booking-category" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
            Service Category <span className="text-[#976F44]">*</span>
          </label>
          <select
            id="booking-category"
            value={formData.serviceCategory}
            onChange={(e) => {
              const newCat = e.target.value;
              setFormData({
                ...formData,
                serviceCategory: newCat,
                specificService: '',
              });
            }}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors"
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="booking-service" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
            Specific Treatment
          </label>
          <select
            id="booking-service"
            value={formData.specificService}
            onChange={(e) => setFormData({ ...formData, specificService: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors"
          >
            <option value="">Any / General Consultation</option>
            {availableServices.map((srv) => (
              <option key={srv.id} value={srv.id}>
                {srv.name} ({srv.price})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Preferred Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="booking-date" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
            Preferred Date <span className="text-[#976F44]">*</span>
          </label>
          <div className="relative">
            <input
              id="booking-date"
              type="date"
              required
              min={todayStr}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="booking-time" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
            Preferred Time Slot
          </label>
          <div className="relative">
            <select
              id="booking-time"
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors"
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Row 5: Notes / Hair details / Preferences */}
      <div>
        <label htmlFor="booking-notes" className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
          Special Notes or Skin / Hair Concerns
        </label>
        <textarea
          id="booking-notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Tell us about your hair length, skin sensitivity, or any specific goals for your visit..."
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C5] text-stone-900 focus:outline-hidden focus:border-[#976F44] focus:ring-1 focus:ring-[#976F44] transition-colors resize-none"
        />
      </div>

      {/* Submit CTA Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#1A1816] hover:bg-[#976F44] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>Processing Request...</span>
          ) : (
            <>
              <Calendar className="w-4 h-4 text-[#D8B88F]" />
              <span>Request Appointment</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-stone-500 text-center mt-3 leading-relaxed">
          ✦ An aesthetician or stylist will contact you directly to confirm availability. For same-day appointments, please call{' '}
          <a href={`tel:${BUSINESS_INFO.phone.primaryRaw}`} className="underline text-stone-700 font-medium">
            {BUSINESS_INFO.phone.primary}
          </a>.
        </p>
      </div>
    </form>
  );
};
