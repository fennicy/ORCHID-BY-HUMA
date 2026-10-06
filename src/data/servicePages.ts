import { FAQItem } from './faqs';

export interface ServiceLandingPageData {
  slug: string;
  route: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  category: string;
  price: string;
  duration: string;
  image: string;
  overview: string[];
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: FAQItem[];
  relatedServices: { title: string; route: string; price: string }[];
}

export const SERVICE_LANDING_PAGES: Record<string, ServiceLandingPageData> = {
  // 1. HydraFacial
  'hydrafacial-katy-tx': {
    slug: 'hydrafacial-katy-tx',
    route: '/services/hydrafacial-katy-tx',
    metaTitle: 'HydraFacial in Katy, TX | Orchid By Huma',
    metaDescription:
      'Experience HydraFacial treatment in Katy, Texas at Orchid By Huma for $110. Vortex-fusion pore extraction, antioxidant hydration, and radiant glowing skin.',
    h1: 'HydraFacial in Katy, TX',
    tagline: 'Deep vortex pore extraction, salicylic resurfacing, and intense antioxidant & hyaluronic hydration with zero downtime.',
    category: 'Facials & Skincare',
    price: '$110',
    duration: '60 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'The HydraFacial at Orchid By Huma is our signature clinical skincare ritual in Katy, Texas. Combining patented vortex-fusion technology with medical-grade botanical infusions, this non-invasive multi-step treatment delivers immediate, visible clarity, hydration, and plumping without redness or irritation.',
      'Our licensed Katy aestheticians customize every serum blend to address your specific skin goals—whether targeting congested blackheads, dehydration, sun damage, or fine lines. Located at 1105 S Mason Rd, our spa delivers noticeably radiant, glowing skin that lasts for weeks.',
    ],
    benefits: [
      'Painless vortex-vacuum extraction removes stubborn sebum, impurities, and blackheads',
      'Intensive infusion of hyaluronic acid, peptides, and protective botanical antioxidants',
      'Smoothes uneven skin texture, refines visible pores, and brightens dullness',
      'Gentle on sensitive and acne-prone skin types with zero peeling downtime',
    ],
    processSteps: [
      {
        title: 'Step 1: Cleanse & Peel',
        desc: 'Gentle exfoliation uncovers a new layer of skin with gentle resurfacing actives.',
      },
      {
        title: 'Step 2: Extract & Hydrate',
        desc: 'Painless vortex suction removes debris from pores while quenching skin with intense moisturizers.',
      },
      {
        title: 'Step 3: Fuse & Protect',
        desc: 'Skin surface is saturated with nourishing antioxidants and peptides to maximize your glow.',
      },
    ],
    faqs: [
      {
        question: 'How much does a HydraFacial cost at Orchid By Huma in Katy?',
        answer: 'Our signature HydraFacial is $110 for a full 60-minute session. We also offer optional Red Light Therapy add-ons for $10.',
      },
      {
        question: 'Is there any downtime after a HydraFacial?',
        answer: 'None at all. You can apply makeup and resume normal daily activities immediately after your appointment, though many clients prefer to enjoy their natural bare-skin glow.',
      },
      {
        question: 'How often should I get a HydraFacial?',
        answer: 'For optimal skin health, we recommend booking a HydraFacial every 4 to 6 weeks.',
      },
    ],
    relatedServices: [
      { title: 'Microdermabrasion Facial', route: '/services/microdermabrasion-katy-tx', price: '$80' },
      { title: 'Acne Facial', route: '/services/acne-facial-katy-tx', price: '$65' },
      { title: 'Custom Facials', route: '/services/facials-katy-tx', price: '$55–$110' },
    ],
  },

  // 2. Balayage
  'balayage-katy-tx': {
    slug: 'balayage-katy-tx',
    route: '/services/balayage-katy-tx',
    metaTitle: 'Balayage in Katy, TX | Orchid By Huma',
    metaDescription:
      'Custom hand-painted balayage and dimensional hair color in Katy, Texas at Orchid By Huma starting at $240 & up. Seamless grow-out and expert toners.',
    h1: 'Balayage in Katy, TX',
    tagline: 'Custom hand-painted color melting, seamless grow-out, and luminous dimension tailored to your style.',
    category: 'Hair Color & Highlights',
    price: '$240 & up',
    duration: '180 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'Balayage at Orchid By Huma delivers the ultimate low-maintenance, sun-kissed hair color for clients in Katy, Texas. Unlike traditional foil highlights that create harsh demarcation lines, our master colorists freehand-paint lightener onto selected ribbons of hair to achieve a seamless gradient transition.',
      'We protect hair health at every stage with bond-multiplying treatments and customized demi-permanent toners that eradicate brassiness and deliver rich caramel, honey, or icy blonde dimension.',
    ],
    benefits: [
      'Seamless gradient transition with natural, graceful grow-out between salon visits',
      'Bespoke placement designed around your haircut, facial bone structure, and lifestyle',
      'Formulated with protective salon-grade lighteners to maintain cuticle integrity',
      'Includes personalized gloss toning for high-shine finish and tone correction',
    ],
    processSteps: [
      {
        title: 'Step 1: Consultation & Strand Analysis',
        desc: 'We examine your hair history, porosity, and desired reference tones.',
      },
      {
        title: 'Step 2: Artistic Hand-Painting',
        desc: 'Precision French balayage application creates soft depth at the roots with luminous ribbons through the ends.',
      },
      {
        title: 'Step 3: Custom Glaze & Blowout',
        desc: 'Acidic gloss toner seals the cuticle and neutralizes unwanted warmth, followed by a bouncy finish.',
      },
    ],
    faqs: [
      {
        question: 'What is the starting price for balayage in Katy at Orchid By Huma?',
        answer: 'Balayage starts at $240 & up depending on hair density, length, and degree of lightening required.',
      },
      {
        question: 'How long does a balayage appointment take?',
        answer: 'A complete balayage appointment typically requires 3 to 3.5 hours for thorough application, processing, toning, and blowout styling.',
      },
    ],
    relatedServices: [
      { title: 'Highlights in Katy, TX', route: '/services/highlights-katy-tx', price: '$200 & up' },
      { title: 'Hair Color Services', route: '/services/hair-color-katy-tx', price: '$60 & up' },
      { title: 'Blowout & Styling', route: '/services/blowout-katy-tx', price: '$45 & up' },
    ],
  },

  // 3. Hair Color
  'hair-color-katy-tx': {
    slug: 'hair-color-katy-tx',
    route: '/services/hair-color-katy-tx',
    metaTitle: 'Hair Color in Katy, TX | Orchid By Huma',
    metaDescription:
      'Professional hair color, root touch-up ($60 & up), full hair color ($110 & up), and custom gloss toning in Katy, Texas at Orchid By Huma on South Mason Rd.',
    h1: 'Hair Color in Katy, TX',
    tagline: 'Rich single-process color, seamless grey coverage root touch-ups, and luminous dimensional toners.',
    category: 'Hair Color & Highlights',
    price: '$60 & up',
    duration: '60–120 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'Whether you need 100% grey coverage root touch-ups, rich all-over brunette gloss, or multi-dimensional color, Orchid By Huma provides expert color formulations in Katy, Texas. With more than 10 years of color artistry, we provide precise shade matching and vibrant longevity.',
      'Our color specialists analyze hair porosity and undertones before selecting salon-grade ammonia-free and conditioning color lines that leave hair silky, reflective, and nourished.',
    ],
    benefits: [
      '100% seamless grey coverage with root touch-up starting at $60 & up',
      'All-over rich single process color starting at $110 & up',
      'Hair toning and gloss glazes starting at $50 & up for brass neutralization',
      'Gentle conditioning formulas that protect delicate hair cuticles',
    ],
    processSteps: [
      {
        title: 'Step 1: Color Formulation',
        desc: 'Custom pigment blending to match your existing tone or create a new shade.',
      },
      {
        title: 'Step 2: Precision Application',
        desc: 'Careful sectioning ensuring complete root coverage and even saturation.',
      },
      {
        title: 'Step 3: Conditioning Rinse & Style',
        desc: 'Deep conditioning rinse and optional voluminous blowdry styling.',
      },
    ],
    faqs: [
      {
        question: 'How much is a root touch up at Orchid By Huma?',
        answer: 'Root touch-ups start at $60 & up for standard regrowth maintenance.',
      },
      {
        question: 'Can I add a blowdry to my color service?',
        answer: 'Yes! An add-on blowdry after any color service is available for $30.',
      },
    ],
    relatedServices: [
      { title: 'Balayage in Katy, TX', route: '/services/balayage-katy-tx', price: '$240 & up' },
      { title: 'Highlights in Katy, TX', route: '/services/highlights-katy-tx', price: '$200 & up' },
      { title: 'Precision Haircuts', route: '/services/haircuts-katy-tx', price: '$40 & up' },
    ],
  },

  // 4. Highlights
  'highlights-katy-tx': {
    slug: 'highlights-katy-tx',
    route: '/services/highlights-katy-tx',
    metaTitle: 'Highlights in Katy, TX | Orchid By Huma',
    metaDescription:
      'Full foil highlights ($200 & up) and partial highlights ($130 & up) in Katy, Texas at Orchid By Huma. Luminous dimension, precision foiling, and expert toners.',
    h1: 'Highlights in Katy, TX',
    tagline: 'Dimensional full-foil radiance, face-framing partial highlights, and custom gloss toners.',
    category: 'Hair Color & Highlights',
    price: '$130 & up',
    duration: '90–150 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'At Orchid By Huma in Katy, Texas, our foil highlighting services create bright, multi-dimensional contrast tailored to your natural base. Full foil highlights ($200 & up) provide complete radiance from crown to nape, while partial highlights ($130 & up) focus on the crown and face frame for a sunlit refresh.',
      'We combine precision micro-weaving with bond-building formulations to lift hair cleanly while preserving tensile strength and silkiness.',
    ],
    benefits: [
      'Full foil highlights starting at $200 & up; partial highlights from $130 & up',
      'Precision foil placement tailored to your parting and natural growth pattern',
      'Gentle lighteners infused with protective conditioners to prevent breakage',
      'Personalized gloss toner included to lock in desired undertones and mirror shine',
    ],
    processSteps: [
      {
        title: 'Step 1: Sectioning & Placement',
        desc: 'Micro-weaving and slice techniques tailored to achieve maximum brightness or subtle depth.',
      },
      {
        title: 'Step 2: Processing & Bond Protection',
        desc: 'Monitored lightening to ensure target lift without compromising hair health.',
      },
      {
        title: 'Step 3: Acidic Gloss Toner',
        desc: 'Neutralizes raw yellow tones to yield creamy platinum, beige, or warm golden blonde.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between full and partial highlights?',
        answer: 'Full highlights ($200 & up) place foils throughout your entire head including the nape, while partial highlights ($130 & up) focus on the top crown and face-framing areas.',
      },
      {
        question: 'How long do highlights last before needing a touch-up?',
        answer: 'Most clients schedule a highlight touch-up every 8 to 12 weeks to refresh root growth.',
      },
    ],
    relatedServices: [
      { title: 'Balayage in Katy, TX', route: '/services/balayage-katy-tx', price: '$240 & up' },
      { title: 'Hair Color in Katy, TX', route: '/services/hair-color-katy-tx', price: '$60 & up' },
      { title: 'Blowout Services', route: '/services/blowout-katy-tx', price: '$45 & up' },
    ],
  },

  // 5. Blowout & Brazilian Blowout
  'blowout-katy-tx': {
    slug: 'blowout-katy-tx',
    route: '/services/blowout-katy-tx',
    metaTitle: 'Blowout in Katy, TX | Orchid By Huma',
    metaDescription:
      'Voluminous blowouts ($45 & up), Brazilian Blowout smoothing ($200 & up), and silk press in Katy, Texas at Orchid By Huma on South Mason Rd.',
    h1: 'Blowout in Katy, TX',
    tagline: 'Signature voluminous blowouts, smoothing Brazilian Blowouts, and thermal silk presses with lasting bounce.',
    category: 'Hair Styling & Treatments',
    price: '$45 & up',
    duration: '45–120 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'Experience salon styling with a signature blowout at Orchid By Huma in Katy, Texas. Starting at $45 & up, our voluminous blowouts combine therapeutic scalp cleansing, round-brush tension styling, and long-lasting curl settings that hold volume for days.',
      'For clients seeking long-term frizz elimination, our professional Brazilian Blowout ($200 & up) bonds protective protein complexes to each hair shaft, reducing blowdry time and locking in glass-like shine for up to 12 weeks.',
    ],
    benefits: [
      'Voluminous blowdry starting at $45 & up for bounce, movement, and body',
      'Brazilian Blowout smoothing ($200 & up) seals cuticle and eliminates humidity frizz',
      'Straightening and silk press ($50) for sleek glass-finish hair',
      'Thermal defense serums protect delicate hair strands against heat stress',
    ],
    processSteps: [
      {
        title: 'Step 1: Clarifying Cleanse & Condition',
        desc: 'Double shampoo and nourishing conditioner tailored to your scalp and hair density.',
      },
      {
        title: 'Step 2: Tension Round-Brush Blowdry',
        desc: 'Directional airflow and ceramic round brushes build root lift and sleek ends.',
      },
      {
        title: 'Step 3: Finishing & Setting',
        desc: 'Cool-shot setting and lightweight serum lock in shine and humidity resistance.',
      },
    ],
    faqs: [
      {
        question: 'How long does a Brazilian Blowout last?',
        answer: 'A Brazilian Blowout typically lasts up to 10–12 weeks with sulfate-free aftercare.',
      },
      {
        question: 'How much is a standard blowout in Katy at Orchid By Huma?',
        answer: 'Our voluminous blowdry starts at $45 & up depending on hair length and thickness.',
      },
    ],
    relatedServices: [
      { title: 'Precision Haircuts', route: '/services/haircuts-katy-tx', price: '$40 & up' },
      { title: 'Hair Salon in Katy', route: '/services/hair-salon-katy-tx', price: '$40 & up' },
      { title: 'Hair Color in Katy', route: '/services/hair-color-katy-tx', price: '$60 & up' },
    ],
  },

  // 6. Haircuts
  'haircuts-katy-tx': {
    slug: 'haircuts-katy-tx',
    route: '/services/haircuts-katy-tx',
    metaTitle: 'Haircuts in Katy, TX | Orchid By Huma',
    metaDescription:
      'Precision haircuts ($40 & up) and split-end trimming ($30) in Katy, Texas at Orchid By Huma. Tailored consultations, face framing, and texturizing.',
    h1: 'Haircuts in Katy, TX',
    tagline: 'Precision shaping, modern face-framing layers, split-end trimming, and personalized styling consultations.',
    category: 'Precision Haircuts',
    price: '$40 & up',
    duration: '30–45 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'A great haircut transforms how you carry yourself every day. At Orchid By Huma in Katy, Texas, our haircutting consultations begin with evaluating your facial contours, hair density, growth patterns, and styling routine.',
      'From chic bobs and soft curtain bangs to long seamless layers and split-end maintenance trims ($30), our experienced stylists deliver clean perimeters and effortless movement.',
    ],
    benefits: [
      'Precision haircut & consultation starting at $40 & up',
      'Maintenance trimming ($30) cleans up split ends while preserving length',
      'Add-on blowdry available ($25 & up) for a finished, bouncy look',
      'Personalized tips on maintaining hair texture and shape between visits',
    ],
    processSteps: [
      {
        title: 'Step 1: One-on-One Consultation',
        desc: 'Discuss your lifestyle, desired shape, reference photos, and hair texture.',
      },
      {
        title: 'Step 2: Precision Wet Cutting',
        desc: 'Geometric sectioning to establish clean baseline perimeter and internal layering.',
      },
      {
        title: 'Step 3: Dry Detailing & Texturizing',
        desc: 'Point-cutting and weight removal to ensure hair falls naturally and effortlessly.',
      },
    ],
    faqs: [
      {
        question: 'How much is a women\'s haircut at Orchid By Huma in Katy?',
        answer: 'Precision haircuts start at $40 & up depending on hair length and complexity.',
      },
      {
        question: 'Does the haircut include a blowout?',
        answer: 'You can add a full voluminous blowdry to your haircut for an add-on rate of $25 & up.',
      },
    ],
    relatedServices: [
      { title: 'Blowout in Katy, TX', route: '/services/blowout-katy-tx', price: '$45 & up' },
      { title: 'Hair Color in Katy', route: '/services/hair-color-katy-tx', price: '$60 & up' },
      { title: 'Hair Salon in Katy', route: '/services/hair-salon-katy-tx', price: '$40 & up' },
    ],
  },

  // 7. Hair Salon Hub
  'hair-salon-katy-tx': {
    slug: 'hair-salon-katy-tx',
    route: '/services/hair-salon-katy-tx',
    metaTitle: 'Hair Salon in Katy, TX | Orchid By Huma',
    metaDescription:
      'Premier luxury hair salon in Katy, Texas. Explore haircuts, balayage, dimensional highlights, Brazilian Blowouts, and root touch-ups at Orchid By Huma on Mason Rd.',
    h1: 'Hair Salon in Katy, TX',
    tagline: 'Comprehensive hair care: precision haircuts, custom color formulation, balayage, blowouts, and keratin smoothing.',
    category: 'Hair Care & Salon Services',
    price: '$40 & up',
    duration: '30–180 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'Orchid By Huma is a full-service luxury hair salon located at 1105 S Mason Rd in Katy, Texas. With more than 10 years of beauty experience, our team of passionate stylists and master colorists caters to all hair textures and aesthetic goals.',
      'Our hair department encompasses precision haircutting ($40 & up), root touch-ups ($60 & up), full single-process color ($110 & up), partial & full foil highlights ($130–$200 & up), hand-painted balayage ($240 & up), and smoothing Brazilian Blowouts ($200 & up).',
    ],
    benefits: [
      'Full spectrum of cutting, coloring, highlighting, and smoothing under one roof',
      'Over a decade of trusted hair artistry in the Katy and West Houston community',
      'Premium botanical and salon-grade professional haircare products',
      'Welcoming sanctuary with personalized consultations for every guest',
    ],
    processSteps: [
      {
        title: 'Step 1: Detailed Consultation',
        desc: 'Analyzing hair porosity, previous treatments, and formulating an individualized plan.',
      },
      {
        title: 'Step 2: Technical Execution',
        desc: 'Artistic color placement, precision haircutting, or bond-restoring smoothing.',
      },
      {
        title: 'Step 3: Finishing & Home Care Advice',
        desc: 'Professional blowout finish with tailored product recommendations.',
      },
    ],
    faqs: [
      {
        question: 'Where is the hair salon located in Katy?',
        answer: 'Orchid By Huma is located at 1105 S Mason Rd, Katy, TX 77450.',
      },
      {
        question: 'Do I need an appointment for hair services?',
        answer: 'Appointments are strongly recommended. You can request online or call (281) 206-0151.',
      },
    ],
    relatedServices: [
      { title: 'Balayage in Katy, TX', route: '/services/balayage-katy-tx', price: '$240 & up' },
      { title: 'Hair Color in Katy, TX', route: '/services/hair-color-katy-tx', price: '$60 & up' },
      { title: 'Blowout in Katy, TX', route: '/services/blowout-katy-tx', price: '$45 & up' },
    ],
  },

  // 8. Facials & Skincare Hub
  'facials-katy-tx': {
    slug: 'facials-katy-tx',
    route: '/services/facials-katy-tx',
    metaTitle: 'Facials in Katy, TX | Orchid By Huma',
    metaDescription:
      'Custom clinical and botanical facials in Katy, Texas at Orchid By Huma starting at $55. HydraFacials, microdermabrasion, acne facials, and brightening treatments.',
    h1: 'Facials in Katy, TX',
    tagline: 'Personalized clinical and botanical facials designed for acne, brightening, anti-aging, and deep hydration.',
    category: 'Facials & Skincare',
    price: '$55–$110',
    duration: '45–60 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'At Orchid By Huma in Katy, Texas, our facial therapies are personalized to your exact skin type and lifestyle needs. Beginning with a professional skin analysis, our licensed aestheticians blend steam exfoliation, gentle extractions, custom massage, and therapeutic masks.',
      'Our comprehensive menu features Basic Facials ($55), Brightening Facials ($60), Acne Purifying Facials ($65), Deep Hydrating & Calming Facials ($75), Microdermabrasion ($80), Back Facials ($55), and the signature HydraFacial ($110).',
    ],
    benefits: [
      'Comprehensive variety of 11+ targeted facial treatments tailored to your skin',
      'Targeted relief for stubborn acne, blackheads, hormonal congestion, and enlarged pores',
      'Vitamin C and botanical brightening for sun spots and uneven pigmentation',
      'Calming restorative masks for sensitive, rosacea-prone skin types',
    ],
    processSteps: [
      {
        title: 'Step 1: Skin Consultation & Cleansing',
        desc: 'Double cleansing removes impurities and assesses skin hydration and texture.',
      },
      {
        title: 'Step 2: Exfoliation & Extraction',
        desc: 'Steam exfoliation and gentle manual or diamond-tip suction clears congested pores.',
      },
      {
        title: 'Step 3: Customized Mask & Massage',
        desc: 'Targeted serum infusion, facial massage, and moisture barrier sealing.',
      },
    ],
    faqs: [
      {
        question: 'Which facial is best for first-time visitors in Katy?',
        answer: 'Our Basic Facial ($55) or HydraFacial ($110) are the perfect introductions. Our aesthetician will inspect your skin upon arrival and recommend the best treatment.',
      },
      {
        question: 'Do you offer facials for acne-prone skin?',
        answer: 'Yes! Our Acne Facial ($65) specifically targets bacteria, excess sebum, and inflammation with deep pore cleansing.',
      },
    ],
    relatedServices: [
      { title: 'HydraFacial in Katy, TX', route: '/services/hydrafacial-katy-tx', price: '$110' },
      { title: 'Microdermabrasion Facial', route: '/services/microdermabrasion-katy-tx', price: '$80' },
      { title: 'Acne Facial in Katy', route: '/services/acne-facial-katy-tx', price: '$65' },
    ],
  },

  // 9. Microdermabrasion
  'microdermabrasion-katy-tx': {
    slug: 'microdermabrasion-katy-tx',
    route: '/services/microdermabrasion-katy-tx',
    metaTitle: 'Microdermabrasion in Katy, TX | Orchid By Huma',
    metaDescription:
      'Diamond-tip microdermabrasion facial in Katy, Texas at Orchid By Huma for $80. Polish skin texture, fade minor scarring, and refine fine lines.',
    h1: 'Microdermabrasion in Katy, TX',
    tagline: 'Diamond-tip mechanical resurfacing, gentle suction exfoliation, and cellular renewal for velvety smooth skin.',
    category: 'Facials & Skincare',
    price: '$80',
    duration: '50 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'Microdermabrasion at Orchid By Huma ($80) is an effective, non-chemical resurfacing treatment that gently exfoliates the outermost layer of dead skin cells. Using a medical-grade diamond-tipped wand paired with adjustable vacuum suction, our aestheticians sweep away dullness.',
      'This treatment stimulates micro-circulation, boosts cellular turnover, softens fine lines, and promotes enhanced absorption of topical serums and hydrators.',
    ],
    benefits: [
      'Diamond-tip exfoliation polishes coarse texture without chemical irritation',
      'Helps diminish fine lines, superficial acne scars, and sun damage',
      'Stimulates collagen production and blood flow for natural vitality',
      'Painless with immediate soft texture and zero social downtime',
    ],
    processSteps: [
      {
        title: 'Step 1: Degreasing Cleanse',
        desc: 'Removes surface lipids to allow the diamond wand uniform glide.',
      },
      {
        title: 'Step 2: Precision Diamond Passes',
        desc: 'Targeted resurfacing passes over the forehead, cheeks, nose, chin, and neck.',
      },
      {
        title: 'Step 3: Soothing Peptide Hydration',
        desc: 'Cooling botanical mask and hyaluronic moisturizer lock in hydration.',
      },
    ],
    faqs: [
      {
        question: 'Does microdermabrasion hurt?',
        answer: 'Not at all. Most clients describe the sensation as a slightly rough cat tongue or light vacuum on the skin.',
      },
      {
        question: 'How much does microdermabrasion cost in Katy?',
        answer: 'Our Microdermabrasion Facial is $80 for a comprehensive 50-minute treatment.',
      },
    ],
    relatedServices: [
      { title: 'HydraFacial in Katy, TX', route: '/services/hydrafacial-katy-tx', price: '$110' },
      { title: 'Acne Facial in Katy, TX', route: '/services/acne-facial-katy-tx', price: '$65' },
      { title: 'Facials & Skincare Hub', route: '/services/facials-katy-tx', price: '$55–$110' },
    ],
  },

  // 10. Acne Facial
  'acne-facial-katy-tx': {
    slug: 'acne-facial-katy-tx',
    route: '/services/acne-facial-katy-tx',
    metaTitle: 'Acne Facial in Katy, TX | Orchid By Huma',
    metaDescription:
      'Purifying acne facial treatment in Katy, Texas at Orchid By Huma for $65. Deep pore extractions, antibacterial cleansing, and calming botanical care.',
    h1: 'Acne Facial in Katy, TX',
    tagline: 'Deep antibacterial cleansing, gentle blemish extraction, and anti-inflammatory care for clear, calm skin.',
    category: 'Facials & Skincare',
    price: '$65',
    duration: '55 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'Struggling with breakouts, congestion, or hormonal cystic flare-ups? Our Acne Facial ($65) at Orchid By Huma in Katy, Texas provides thorough clinical relief. Our aestheticians address the root causes of acne: excess sebum, dead skin buildup, and bacterial colonization.',
      'Using enzyme steam, safe sterile extractions, high-frequency antibacterial care, and anti-inflammatory botanical masks, we calm existing lesions and prevent future breakouts without stripping your skin barrier.',
    ],
    benefits: [
      'Safe, hygienic extractions prevent scarring and clear stubborn blackheads',
      'Antibacterial botanicals kill P. acnes bacteria deep within pores',
      'Calms redness, swelling, and uncomfortable inflammation',
      'Balances oil production without over-drying the epidermis',
    ],
    processSteps: [
      {
        title: 'Step 1: Clarifying Cleanse & Steam',
        desc: 'Purifying cleanser dissolves oil while warm steam softens hardened sebum plugs.',
      },
      {
        title: 'Step 2: Gentle Extractions',
        desc: 'Meticulous manual extractions using sterile tools and gentle pressure.',
      },
      {
        title: 'Step 3: Anti-Bacterial Mask & LED',
        desc: 'Sulfur or tea tree mask soothes tissue, with optional Red Light add-on ($10).',
      },
    ],
    faqs: [
      {
        question: 'Will extractions leave marks on my face?',
        answer: 'Our aestheticians use professional techniques to extract comedones without pinching or damaging capillaries, leaving only slight temporary pinkness that fades quickly.',
      },
      {
        question: 'How often should I get an acne facial?',
        answer: 'For active breakouts, we recommend treatments every 2 to 3 weeks until the skin clears, followed by monthly maintenance.',
      },
    ],
    relatedServices: [
      { title: 'HydraFacial in Katy, TX', route: '/services/hydrafacial-katy-tx', price: '$110' },
      { title: 'Microdermabrasion Facial', route: '/services/microdermabrasion-katy-tx', price: '$80' },
      { title: 'Facials & Skincare Hub', route: '/services/facials-katy-tx', price: '$55–$110' },
    ],
  },

  // 11. Massage
  'massage-katy-tx': {
    slug: 'massage-katy-tx',
    route: '/services/massage-katy-tx',
    metaTitle: 'Massage in Katy, TX | Orchid By Huma',
    metaDescription:
      'Hot oil relaxation massage in Katy, Texas at Orchid By Huma. 60-minute full body ($70) and 30-minute tension relief ($40) using warm botanical oils.',
    h1: 'Massage in Katy, TX',
    tagline: 'Restorative full-body and targeted hot oil massage treatments using heated therapeutic botanical oils.',
    category: 'Massage & Spa Wellness',
    price: '$40 / $70',
    duration: '30–60 min',
    image: '/src/assets/images/spa_massage_wellness_1791303875097.jpg',
    overview: [
      'Escape daily stress with our signature Hot Oil Massage at Orchid By Huma in Katy, Texas. Available in a 60-minute full body experience ($70) or a focused 30-minute neck, shoulder, and upper back session ($40), this therapeutic treatment uses warm aromatic botanical oils to soothe tight muscles.',
      'Our skilled therapists apply rhythmic kneading and long effleurage strokes in a quiet, candlelit sanctuary at 1105 S Mason Rd, helping you dissolve stress, stimulate lymphatic drainage, and restore inner peace.',
    ],
    benefits: [
      'Heated botanical oils penetrate deep into muscular tissue to ease tension',
      'Relieves chronic stiffness in shoulders, neck, and lower back',
      'Improves circulatory blood flow and aids natural lymphatic detoxification',
      'Provides deep mental relaxation and stress reduction',
    ],
    processSteps: [
      {
        title: 'Step 1: Consultation & Oil Warming',
        desc: 'Identifying your areas of tension while botanical oils are gently heated.',
      },
      {
        title: 'Step 2: Rhythmic Oil Application',
        desc: 'Long flowing strokes warm up muscle groups and relieve surface tension.',
      },
      {
        title: 'Step 3: Focused Pressure & Release',
        desc: 'Targeted acupressure and kneading to unknot stubborn knots and knots.',
      },
    ],
    faqs: [
      {
        question: 'How much is a massage at Orchid By Huma in Katy?',
        answer: 'Our Hot Oil Massage is $70 for 60 minutes, and $40 for a 30-minute focused session.',
      },
      {
        question: 'What kind of oil is used during the massage?',
        answer: 'We use gentle, skin-nourishing botanical oils lightly warmed to a soothing temperature.',
      },
    ],
    relatedServices: [
      { title: 'Body Scrub & Polish', route: '/services/body-scrub-katy-tx', price: '$65' },
      { title: 'HydraFacial in Katy', route: '/services/hydrafacial-katy-tx', price: '$110' },
      { title: 'Waxing Services', route: '/services/waxing-katy-tx', price: '$20–$120' },
    ],
  },

  // 12. Body Scrub
  'body-scrub-katy-tx': {
    slug: 'body-scrub-katy-tx',
    route: '/services/body-scrub-katy-tx',
    metaTitle: 'Body Scrub in Katy, TX | Orchid By Huma',
    metaDescription:
      'Body scrubbing and polish ritual in Katy, Texas at Orchid By Huma for $65. Aromatic sea salt and botanical oils eliminate dead skin cells for silky smoothness.',
    h1: 'Body Scrub in Katy, TX',
    tagline: 'Whole-body exfoliating ritual using fine sea salts and botanical oils to reveal silky, hydrated, luminous skin.',
    category: 'Massage & Spa Wellness',
    price: '$65',
    duration: '45 min',
    image: '/src/assets/images/spa_massage_wellness_1791303875097.jpg',
    overview: [
      'Reinvigorate your skin from shoulders to toes with our Body Scrubbing & Polish Ritual ($65) at Orchid By Huma in Katy, Texas. This 45-minute spa experience sloughs away dry, dead skin cells using fine mineral salts infused with nourishing plant oils.',
      'Ideal before a vacation, spray tan, special event, or seasonal skin reset, our body scrub leaves your skin remarkably silky, deeply moisturized, and glowing.',
    ],
    benefits: [
      'Eliminates dry flakes, rough elbow/knee patches, and keratin buildup',
      'Prepares skin for deeper hydration and smooth tanning',
      'Stimulates superficial circulation and cellular regeneration',
      'Infused with aromatic botanical oils that nourish skin for days',
    ],
    processSteps: [
      {
        title: 'Step 1: Dry Brushing Prep',
        desc: 'Light sweeping strokes awaken the lymphatic system and loosen dead skin cells.',
      },
      {
        title: 'Step 2: Aromatic Scrub Application',
        desc: 'Circular exfoliation across arms, back, legs, and feet using fine mineral polish.',
      },
      {
        title: 'Step 3: Warm Rinse & Body Butter Infusion',
        desc: 'Warm towel compress removes scrub grains, followed by ultra-hydrating body balm.',
      },
    ],
    faqs: [
      {
        question: 'How much is a body scrub at Orchid By Huma?',
        answer: 'Our Body Scrubbing & Polish Ritual is $65 for a 45-minute treatment.',
      },
      {
        question: 'Can I combine a body scrub with a massage?',
        answer: 'Yes! Combining a body scrub with our hot oil massage is one of our most popular full-spa packages.',
      },
    ],
    relatedServices: [
      { title: 'Massage in Katy, TX', route: '/services/massage-katy-tx', price: '$40 / $70' },
      { title: 'Waxing Services', route: '/services/waxing-katy-tx', price: '$20–$120' },
      { title: 'HydraFacial in Katy', route: '/services/hydrafacial-katy-tx', price: '$110' },
    ],
  },

  // 13. Waxing Services Hub
  'waxing-katy-tx': {
    slug: 'waxing-katy-tx',
    route: '/services/waxing-katy-tx',
    metaTitle: 'Waxing in Katy, TX | Orchid By Huma',
    metaDescription:
      'Professional waxing in Katy, Texas at Orchid By Huma. Full body waxing ($120 with Brazilian, $80 without), Brazilian wax ($50), bikini, arms, and legs in sanitary private suites.',
    h1: 'Waxing in Katy, TX',
    tagline: 'Gentle, hygienic full-body waxing, intimate Brazilian care, and smooth skin lasting 3 to 5 weeks.',
    category: 'Waxing & Body Treatments',
    price: '$20–$120',
    duration: '15–75 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'At Orchid By Huma in Katy, Texas, waxing is practiced with strict medical-grade hygiene, speed, and genuine client comfort. Located on South Mason Road, our private suites provide discreet, sanitary hair removal using premium temperature-regulated stripless and soft waxes.',
      'Our waxing menu includes Full Body with Brazilian ($120), Full Body without Brazilian ($80), individual Brazilian ($50), Bikini Line ($20), Full Legs ($40), Half Legs ($30), Full Arms ($30), Underarms ($25), Full Back ($30), and soothing post-wax treatment masks ($15).',
    ],
    benefits: [
      'Zero double-dipping protocol and single-use sanitary table linens',
      'Gentle wax formulations that adhere to hair follicles rather than delicate skin',
      'Silky smooth results lasting between 3 and 5 weeks',
      'Significant reduction in hair density and thickness with regular appointments',
    ],
    processSteps: [
      {
        title: 'Step 1: Skin Sanitization & Pre-Oil',
        desc: 'Pre-wax antiseptic cleanser and barrier oil protect the delicate epidermis.',
      },
      {
        title: 'Step 2: Fast Precision Removal',
        desc: 'Applied at low temperature in small, manageable sections to minimize sensation.',
      },
      {
        title: 'Step 3: Soothing Aloe & Anti-Bacterial Post-Care',
        desc: 'Cools the skin immediately and eliminates pore redness.',
      },
    ],
    faqs: [
      {
        question: 'How much does full body waxing cost in Katy?',
        answer: 'Full Body Wax with Brazilian is $120. Full Body Wax without Brazilian is $80.',
      },
      {
        question: 'How long should hair be before waxing?',
        answer: 'Hair should be at least 1/4 inch long (about the length of a grain of rice), typically 2 to 3 weeks of natural growth after shaving.',
      },
    ],
    relatedServices: [
      { title: 'Brazilian Wax in Katy', route: '/services/brazilian-wax-katy-tx', price: '$50' },
      { title: 'Threading Services', route: '/services/threading-katy-tx', price: '$10–$40' },
      { title: 'Body Scrub Ritual', route: '/services/body-scrub-katy-tx', price: '$65' },
    ],
  },

  // 14. Brazilian Wax
  'brazilian-wax-katy-tx': {
    slug: 'brazilian-wax-katy-tx',
    route: '/services/brazilian-wax-katy-tx',
    metaTitle: 'Brazilian Wax in Katy, TX | Orchid By Huma',
    metaDescription:
      'Gentle, hygienic Brazilian wax in Katy, Texas at Orchid By Huma for $50. Discreet licensed aestheticians, stripless gentle wax, and private sanitary treatment rooms.',
    h1: 'Brazilian Wax in Katy, TX',
    tagline: 'Gentle, fast, and hygienic waxing rituals in private sanitary treatment rooms on South Mason Rd.',
    category: 'Waxing & Body Treatments',
    price: '$50',
    duration: '30 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'At Orchid By Huma, client comfort, strict sanitation, and meticulous technique are our highest priorities. Our Brazilian waxing service in Katy ($50) uses temperature-controlled gentle wax designed for sensitive intimate skin, removing hair cleanly from the root with minimal discomfort.',
      'We also provide full-body waxing packages with Brazilian ($120), bikini line grooming ($20), and soothing post-wax treatment masks ($15) and scrubs ($15) to keep skin smooth and bump-free.',
    ],
    benefits: [
      'Discreet, professional certified aestheticians with 10+ years experience',
      'Strict zero-double-dipping hygiene protocol and disposable sanitary table linens',
      'High-grade gentle stripless wax that adheres to hair rather than skin',
      'Smooth, hair-free skin lasting 3 to 5 weeks',
    ],
    processSteps: [
      {
        title: 'Step 1: Skin Preparation',
        desc: 'Cleansing and soothing pre-wax oil application to protect delicate skin.',
      },
      {
        title: 'Step 2: Precision Wax Removal',
        desc: 'Speedy, small-section wax removal performed with gentle pressure to minimize sensation.',
      },
      {
        title: 'Step 3: Calming After-Care',
        desc: 'Application of cooling aloe vera and anti-inflammatory lotion.',
      },
    ],
    faqs: [
      {
        question: 'How much is a Brazilian wax at Orchid By Huma?',
        answer: 'An individual Brazilian wax is $50. A Full Body Wax with Brazilian is $120.',
      },
      {
        question: 'How long does hair need to be for a Brazilian wax?',
        answer: 'Hair should be roughly a quarter-inch long (about the length of a grain of rice), typically 2 to 3 weeks of natural growth after shaving.',
      },
    ],
    relatedServices: [
      { title: 'Waxing in Katy, TX', route: '/services/waxing-katy-tx', price: '$20–$120' },
      { title: 'Threading Services', route: '/services/threading-katy-tx', price: '$10–$40' },
      { title: 'HydraFacial in Katy', route: '/services/hydrafacial-katy-tx', price: '$110' },
    ],
  },

  // 15. Threading
  'threading-katy-tx': {
    slug: 'threading-katy-tx',
    route: '/services/threading-katy-tx',
    metaTitle: 'Threading in Katy, TX | Orchid By Huma',
    metaDescription:
      'Eyebrow threading ($10) and full face threading ($40) in Katy, Texas at Orchid By Huma. Traditional organic cotton threading for razor-sharp arches.',
    h1: 'Threading in Katy, TX',
    tagline: 'Master eyebrow threading, delicate facial contouring, and razor-sharp brow arches using antibacterial cotton thread.',
    category: 'Threading & Facial Grooming',
    price: '$5–$40',
    duration: '10–35 min',
    image: '/src/assets/images/bridal_beauty_makeup_1791303863839.jpg',
    overview: [
      'Eyebrow threading is an ancient, precise art that creates crisp, clean brow definition without chemical irritants or skin pulling. At Orchid By Huma in Katy, Texas, our master threading artists use 100% organic antibacterial cotton thread twisted to lift rows of hair directly from the root.',
      'Our threading menu includes Eyebrow Threading ($10), Full Face Threading ($40), Upper Lip ($5), Chin ($5), Sideburns ($10), and Forehead ($10). Threading is safe for clients using retinol, Accutane, or chemical peels.',
    ],
    benefits: [
      'Zero chemicals, waxes, or resins—100% natural organic cotton thread',
      'Extremely precise hair line control to sculpt symmetrical, sharp brow arches',
      'Dermatologist-recommended for sensitive skin and clients using retinoids',
      'Removes even fine peach fuzz for an ultra-smooth makeup canvas',
    ],
    processSteps: [
      {
        title: 'Step 1: Brow Consultation & Mapping',
        desc: 'Analyzing your bone structure and agreeing on brow thickness and arch shape.',
      },
      {
        title: 'Step 2: Precision Thread Gliding',
        desc: 'High-speed twisted thread sweeps cleanly along the perimeter line.',
      },
      {
        title: 'Step 3: Soothing Rosewater or Aloe',
        desc: 'Gentle mist of rosewater or calming aloe vera gel cools the brows.',
      },
    ],
    faqs: [
      {
        question: 'How much does eyebrow threading cost in Katy at Orchid By Huma?',
        answer: 'Eyebrow threading is $10. Full face threading is $40.',
      },
      {
        question: 'Can I get threading if I use Retin-A or tretinoin?',
        answer: 'Yes! Unlike waxing, threading does not pull the epidermal skin layer, making it completely safe for clients using retinoids or exfoliants.',
      },
    ],
    relatedServices: [
      { title: 'Lash Lift & Tint', route: '/services/lash-lift-katy-tx', price: '$60' },
      { title: 'Brow Lamination', route: '/services/brow-lamination-katy-tx', price: '$70' },
      { title: 'Waxing in Katy, TX', route: '/services/waxing-katy-tx', price: '$20–$120' },
    ],
  },

  // 16. Bridal Makeup
  'bridal-makeup-katy-tx': {
    slug: 'bridal-makeup-katy-tx',
    route: '/services/bridal-makeup-katy-tx',
    metaTitle: 'Bridal Makeup in Katy, TX | Orchid By Huma',
    metaDescription:
      'Luxury bridal makeup packages ($750), Nikkah ($550), Engagement ($450), and Mayon ($350) in Katy, Texas at Orchid By Huma. Airbrush glam, jewelry setting, dupatta draping.',
    h1: 'Bridal Makeup in Katy, TX',
    tagline: 'High-definition bridal glam, jewelry placement, dupatta setting, and South Asian bridal beauty expertise.',
    category: 'Bridal & Event Makeup',
    price: '$350–$750',
    duration: '100–180 min',
    image: '/src/assets/images/bridal_beauty_makeup_1791303863839.jpg',
    overview: [
      'Orchid By Huma is Katy’s premier destination for luxury bridal beauty and traditional wedding ceremonies. Specializing in high-definition airbrush bridal makeup, heirloom jewelry setting, and intricate dupatta draping, our artists ensure you look breathtaking in person and under 4K photography.',
      'We offer specialized packages for each wedding function: Complete Bridal Experience ($750), Nikkah Makeup ($550), Engagement Makeup ($450), and Mayon Makeup with hair and dupatta setup ($350). Every detail is curated around your wedding attire, jewelry, and personal aesthetic.',
    ],
    benefits: [
      'Sweat-proof, tear-resistant, camera-ready bridal makeup lasting all day and night',
      'Includes premium faux mink eyelashes, skin prep, and dimensional contouring',
      'Expert traditional dupatta pinning, veil placement, and tikka/matha patti jewelry setting',
      'Calm, private bridal suite experience in our Katy salon on South Mason Rd',
    ],
    processSteps: [
      {
        title: 'Step 1: Pre-Event Consultation',
        desc: 'Review of outfits, bridal jewelry, skin tone matching, and hair style options.',
      },
      {
        title: 'Step 2: Complexion & Eye Artistry',
        desc: 'Skin barrier priming, airbrush foundation, dimensional contouring, and smokey or soft-glam eye design.',
      },
      {
        title: 'Step 3: Hair & Dupatta Setting',
        desc: 'Secure hair updo, veil pinning, and delicate traditional dupatta draping.',
      },
    ],
    faqs: [
      {
        question: 'What is included in the $750 complete bridal package?',
        answer: 'The complete bridal package includes full HD/airbrush makeup, false eyelashes, hair updo/styling, jewelry pinning, and full dupatta setting.',
      },
      {
        question: 'Do you offer services for wedding guests and party makeup?',
        answer: 'Yes! Party makeup is $250, and basic office/event makeup is $125.',
      },
    ],
    relatedServices: [
      { title: 'Party & Event Makeup', route: '/services/makeup-katy-tx', price: '$250' },
      { title: 'HydraFacial in Katy', route: '/services/hydrafacial-katy-tx', price: '$110' },
      { title: 'Blowout & Updos', route: '/services/blowout-katy-tx', price: '$45 & up' },
    ],
  },

  // 17. Event & Party Makeup
  'makeup-katy-tx': {
    slug: 'makeup-katy-tx',
    route: '/services/makeup-katy-tx',
    metaTitle: 'Makeup in Katy, TX | Orchid By Huma',
    metaDescription:
      'Party makeup ($250), office makeup ($125), and quick touch-ups ($75) in Katy, Texas at Orchid By Huma. Camera-ready event makeup with lashes and contouring.',
    h1: 'Makeup in Katy, TX',
    tagline: 'Camera-ready party glam, professional office makeup, and quick evening touch-ups by seasoned beauty artists.',
    category: 'Bridal & Event Makeup',
    price: '$75–$250',
    duration: '40–90 min',
    image: '/src/assets/images/bridal_beauty_makeup_1791303863839.jpg',
    overview: [
      'Whether attending a gala, photoshoot, birthday dinner, or graduation, Orchid By Huma delivers stunning event makeup in Katy, Texas. Our makeup artists blend modern trends with classic elegance to accentuate your best features.',
      'Our event makeup offerings include Party Makeup ($250) featuring sculpted contour, dramatic or neutral eye artistry, and premium lashes; Basic Office Makeup ($125) for polished natural business presence; and Quick Makeup & Touch-Ups ($75).',
    ],
    benefits: [
      'Long-wearing photo-tested makeup formulas that resist flash flashback',
      'Tailored color palette chosen to complement your outfit and eye color',
      'Includes faux lashes and skin barrier hydration prep for a seamless glow',
      'Convenient Mason Road location with flexible weekend booking',
    ],
    processSteps: [
      {
        title: 'Step 1: Skin Prep & Primer',
        desc: 'Hydrating serum and mattifying primer tailored to your skin type.',
      },
      {
        title: 'Step 2: Complexion & Contour',
        desc: 'Foundation blending, under-eye brightening, soft contour, and blush.',
      },
      {
        title: 'Step 3: Eye Artistry & Lashes',
        desc: 'Eyeshadow, precision eyeliner, brow sculpting, and false lash application.',
      },
    ],
    faqs: [
      {
        question: 'How much is party makeup at Orchid By Huma in Katy?',
        answer: 'Party makeup is $250 and includes full glam, contouring, and premium lashes.',
      },
      {
        question: 'Should I bring my own foundation or lip color?',
        answer: 'We provide a complete salon kit of prestige cosmetics, but you are welcome to bring a favorite personal lipstick for evening touch-ups.',
      },
    ],
    relatedServices: [
      { title: 'Bridal Makeup in Katy', route: '/services/bridal-makeup-katy-tx', price: '$350–$750' },
      { title: 'Blowout in Katy, TX', route: '/services/blowout-katy-tx', price: '$45 & up' },
      { title: 'Lash Lift & Tint', route: '/services/lash-lift-katy-tx', price: '$60' },
    ],
  },

  // 18. Lash Lift
  'lash-lift-katy-tx': {
    slug: 'lash-lift-katy-tx',
    route: '/services/lash-lift-katy-tx',
    metaTitle: 'Lash Lift in Katy, TX | Orchid By Huma',
    metaDescription:
      'Lash lift and tint ($60) in Katy, Texas at Orchid By Huma. Wake up with curled natural lashes and deep black tint lasting 6 to 8 weeks.',
    h1: 'Lash Lift in Katy, TX',
    tagline: 'Semi-permanent natural lash curl, deep black tint, and keratin conditioning lasting 6 to 8 weeks.',
    category: 'Tint & Lamination',
    price: '$60',
    duration: '60 min',
    image: '/src/assets/images/bridal_beauty_makeup_1791303863839.jpg',
    overview: [
      'Wake up every morning with open, curled eyelashes without touching an eyelash curler or mascara wand. At Orchid By Huma in Katy, Texas, our Lash Lift & Tint ($60) gently curls your natural lashes from the root using custom silicone shield molds.',
      'Paired with a deep jet-black vegetable tint, your lashes appear dramatically darker, longer, and more defined for 6 to 8 weeks—the entire natural hair shed cycle.',
    ],
    benefits: [
      'Eliminates daily mascara application and mechanical lash curlers',
      'Enhances natural lashes with zero glue, heavy extensions, or maintenance fills',
      'Keratin-infused lifting lotion strengthens natural hair fibers',
      'Sweat-proof, shower-proof, and workout-friendly after the first 24 hours',
    ],
    processSteps: [
      {
        title: 'Step 1: Shield Placement',
        desc: 'Custom silicone shield selected to match your eye shape and desired curl radius.',
      },
      {
        title: 'Step 2: Gentle Lifting Lotion',
        desc: 'Breaks and resets disulfide bonds to hold the upward curl.',
      },
      {
        title: 'Step 3: Deep Black Tint & Keratin',
        desc: 'Rich semi-permanent black pigment applied, followed by a nourishing keratin glaze.',
      },
    ],
    faqs: [
      {
        question: 'How long does a lash lift last?',
        answer: 'A lash lift and tint lasts between 6 and 8 weeks, following the natural shed cycle of your eyelashes.',
      },
      {
        question: 'Can I wear mascara after a lash lift?',
        answer: 'You can wear mascara after 24 hours, though most of our clients find they no longer need it.',
      },
    ],
    relatedServices: [
      { title: 'Brow Lamination in Katy', route: '/services/brow-lamination-katy-tx', price: '$70' },
      { title: 'Threading in Katy', route: '/services/threading-katy-tx', price: '$10–$40' },
      { title: 'HydraFacial in Katy', route: '/services/hydrafacial-katy-tx', price: '$110' },
    ],
  },

  // 19. Brow Lamination
  'brow-lamination-katy-tx': {
    slug: 'brow-lamination-katy-tx',
    route: '/services/brow-lamination-katy-tx',
    metaTitle: 'Brow Lamination in Katy, TX | Orchid By Huma',
    metaDescription:
      'Eyebrow lamination ($70) and custom tinting ($20) in Katy, Texas at Orchid By Huma. Achieve full, fluffy feathered brow arches lasting 6 to 8 weeks.',
    h1: 'Brow Lamination in Katy, TX',
    tagline: 'Feathered upward brow sculpting, keratin setting, and customized tinting for fuller, groomed arches.',
    category: 'Tint & Lamination',
    price: '$70',
    duration: '50 min',
    image: '/src/assets/images/bridal_beauty_makeup_1791303863839.jpg',
    overview: [
      'Eyebrow lamination is the ultimate secret to full, feathery, editorial brows. At Orchid By Huma in Katy, Texas, our Eyebrow Lamination service ($70) relaxes and realigns your natural brow hairs, allowing us to brush them upward into an arch that conceals gaps and sparse spots.',
      'We also offer custom Eyebrow Tinting ($20) to deepen the color and match your hair shade, giving you effortless wake-up-and-go brows that stay groomed for up to 8 weeks.',
    ],
    benefits: [
      'Creates the illusion of thicker, fuller brows without needles or permanent tattooing',
      'Tames stubborn, downward-growing brow hairs into neat alignment',
      'Hides patchy gaps and thinning spots effortlessly',
      'Results last 6 to 8 weeks with simple morning spoolie brushing',
    ],
    processSteps: [
      {
        title: 'Step 1: Brow Cleansing & Sculpting',
        desc: 'Skin prep and brushing brow hairs into the ideal flattering upward angle.',
      },
      {
        title: 'Step 2: Gentle Perming Solution',
        desc: 'Softens hair bonds so each strand can be molded into place.',
      },
      {
        title: 'Step 3: Neutralizing & Nourishing Oil',
        desc: 'Sets the hairs in their new position and seals with a protective keratin oil.',
      },
    ],
    faqs: [
      {
        question: 'How much does brow lamination cost at Orchid By Huma?',
        answer: 'Eyebrow Lamination is $70. Eyebrow Tint is $20.',
      },
      {
        question: 'Can I combine brow lamination with eyebrow threading?',
        answer: 'Yes! Combining brow lamination with eyebrow threading ($10) creates pristine, razor-sharp clean edges.',
      },
    ],
    relatedServices: [
      { title: 'Lash Lift & Tint', route: '/services/lash-lift-katy-tx', price: '$60' },
      { title: 'Eyebrow Threading', route: '/services/threading-katy-tx', price: '$10' },
      { title: 'Aesthetic Services', route: '/services/aesthetics-katy-tx', price: '$95–$250' },
    ],
  },

  // 20. Aesthetics Hub
  'aesthetics-katy-tx': {
    slug: 'aesthetics-katy-tx',
    route: '/services/aesthetics-katy-tx',
    metaTitle: 'Aesthetics in Katy, TX | Orchid By Huma',
    metaDescription:
      'Clinical aesthetic treatments in Katy, Texas at Orchid By Huma. Micro-needling ($150 & up), chemical peels ($95 & up), micro-shading ($250 & up), and red light therapy.',
    h1: 'Aesthetics in Katy, TX',
    tagline: 'Advanced clinical skincare, micro-needling collagen induction, chemical peels, and micro-shading artistry.',
    category: 'Aesthetic & Clinical Treatments',
    price: '$95–$250 & up',
    duration: '50–120 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'For clients seeking targeted aesthetic rejuvenation beyond traditional salon care, Orchid By Huma offers clinical aesthetic treatments at 1105 S Mason Rd in Katy, Texas. Our certified practitioners utilize advanced techniques to boost collagen and resurface texture.',
      'Our clinical offerings include Micro-Needling Collagen Therapy ($150 & up), Exfoliating Chemical Peels ($95 & up), Semi-Permanent Micro-Shading Brow Artistry ($250 & up), and Red Light Phototherapy Add-Ons ($10).',
    ],
    benefits: [
      'Micro-needling stimulates natural elastin and collagen synthesis to smooth fine lines',
      'Tailored chemical peels address stubborn hyperpigmentation and sun damage',
      'Micro-shading creates soft powder-effect brows that last 1 to 2 years',
      'Strict adherence to clinical sanitation protocols in private treatment suites',
    ],
    processSteps: [
      {
        title: 'Step 1: Clinical Skin Assessment',
        desc: 'Review of skin health, contraindications, and targeted treatment selection.',
      },
      {
        title: 'Step 2: Numbing & Procedure',
        desc: 'Topical anesthetic applied where needed, followed by meticulous clinical technique.',
      },
      {
        title: 'Step 3: Post-Treatment Barrier Sealing',
        desc: 'Calming peptide serums and mineral sun defense applied with aftercare instructions.',
      },
    ],
    faqs: [
      {
        question: 'How much is micro-needling at Orchid By Huma in Katy?',
        answer: 'Micro-needling starts at $150 & up depending on targeted treatment zones.',
      },
      {
        question: 'How long does micro-shading brow pigment last?',
        answer: 'Semi-permanent micro-shading typically lasts 1 to 2 years with proper sun protection and occasional touch-ups.',
      },
    ],
    relatedServices: [
      { title: 'HydraFacial in Katy, TX', route: '/services/hydrafacial-katy-tx', price: '$110' },
      { title: 'Microdermabrasion Facial', route: '/services/microdermabrasion-katy-tx', price: '$80' },
      { title: 'Brow Lamination in Katy', route: '/services/brow-lamination-katy-tx', price: '$70' },
    ],
  },
};
