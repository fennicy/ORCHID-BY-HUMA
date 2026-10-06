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
  'hydrafacial-katy-tx': {
    slug: 'hydrafacial-katy-tx',
    route: '/services/hydrafacial-katy-tx',
    metaTitle: 'HydraFacial in Katy, TX | Orchid By Huma Luxury Spa',
    metaDescription:
      'Experience the HydraFacial treatment in Katy, Texas at Orchid By Huma for $110. Vortex-fusion pore extraction, antioxidant hydration, and radiant glowing skin.',
    h1: 'HydraFacial Treatment in Katy, TX',
    tagline: 'Deep pore purification, vortex extraction, and cellular antioxidant hydration with zero downtime.',
    category: 'Facials & Skincare',
    price: '$110',
    duration: '60 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'The HydraFacial at Orchid By Huma is our most requested clinical skincare ritual in Katy, Texas. Combining medical-grade vortex-fusion technology with soothing botanical infusions, this non-invasive multi-step treatment delivers immediate, visible clarity and plumpness without redness or irritation.',
      'Our licensed Katy aestheticians customize every serum blend to address your specific skin goals—whether targeting congested blackheads, dehydration, sun damage, or fine lines. You walk out of our Mason Road spa with noticeably radiant, glowing skin that lasts for weeks.',
    ],
    benefits: [
      'Painless vortex-vacuum extraction removes stubborn sebum and blackheads',
      'Intensive infusion of hyaluronic acid, peptides, and protective antioxidants',
      'Smoothes uneven skin texture, minimizes visible pores, and brightens dullness',
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
      { title: 'Microdermabrasion Facial', route: '/services?category=facials', price: '$80' },
      { title: 'Brightening Facial', route: '/services?category=facials', price: '$60' },
      { title: 'Acne Purifying Facial', route: '/services?category=facials', price: '$65' },
    ],
  },

  'balayage-katy-tx': {
    slug: 'balayage-katy-tx',
    route: '/services/balayage-katy-tx',
    metaTitle: 'Balayage Hair Color in Katy, TX | Orchid By Huma Salon',
    metaDescription:
      'Custom hand-painted balayage and highlights in Katy, Texas at Orchid By Huma starting at $240. Seamless dimension, expert toners, and healthy hair.',
    h1: 'Balayage & Dimensional Highlights in Katy, TX',
    tagline: 'Custom hand-painted color melting, seamless grow-out, and luminous dimension tailored to your style.',
    category: 'Hair Color & Highlights',
    price: '$240 & up',
    duration: '180 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'Balayage at Orchid By Huma delivers the ultimate low-maintenance, sun-kissed hair color for clients in Katy, Texas. Unlike traditional foil highlights that create harsh demarcation lines, our master colorists freehand-paint lightener onto selected hair ribbons to achieve a seamless gradient transition.',
      'We protect hair health at every stage with bond-multiplying treatments and customized demi-permanent toners that eradicate brassiness and deliver rich caramel, honey, or icy blonde dimension.',
    ],
    benefits: [
      'Seamless gradient transition with natural, graceful grow-out between visits',
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
      { title: 'Full Foil Highlights', route: '/services?category=hair-color', price: '$200 & up' },
      { title: 'Root Touch Up', route: '/services?category=hair-color', price: '$60 & up' },
      { title: 'Brazilian Blowout', route: '/services?category=hair-styling', price: '$200 & up' },
    ],
  },

  'hair-color-katy-tx': {
    slug: 'hair-color-katy-tx',
    route: '/services/hair-color-katy-tx',
    metaTitle: 'Hair Color & Highlights in Katy, TX | Orchid By Huma',
    metaDescription:
      'Professional hair color, root touch-up, full highlights, and custom toning in Katy, Texas. Starting at $60. Book with Orchid By Huma on South Mason Rd.',
    h1: 'Hair Color & Highlights in Katy, TX',
    tagline: 'Rich full color, seamless grey coverage root touch-ups, and luminous dimensional foiling.',
    category: 'Hair Color',
    price: '$60 & up',
    duration: '60–150 min',
    image: '/src/assets/images/hair_styling_balayage_1791303852977.jpg',
    overview: [
      'Whether you need full grey coverage root touch-ups, rich all-over brunette gloss, or multi-dimensional highlights, Orchid By Huma provides expert color formulations in Katy, Texas. With more than 10 years of color artistry, we guarantee precise shade matching and vibrant longevity.',
      'Our color specialists analyze hair porosity and undertones before selecting salon-grade ammonia-free and conditioning color lines that leave hair silky and reflective.',
    ],
    benefits: [
      '100% seamless grey coverage with root touch-up starting at $60 & up',
      'All-over rich single process color starting at $110 & up',
      'Full foil highlights starting at $200 & up; partial highlights from $130 & up',
      'Gentle conditioning formulas that protect delicate hair strands',
    ],
    processSteps: [
      {
        title: 'Color Formulation',
        desc: 'Custom pigment blending to match your existing tone or create a new shade.',
      },
      {
        title: 'Precision Application',
        desc: 'Careful sectioning ensuring complete root coverage and even saturation.',
      },
      {
        title: 'Conditioning Rinse & Style',
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
      { title: 'Balayage', route: '/services/balayage-katy-tx', price: '$240 & up' },
      { title: 'Hair Toning & Gloss', route: '/services?category=hair-color', price: '$50 & up' },
      { title: 'Protein Treatment', route: '/services?category=hair-styling', price: '$110 & up' },
    ],
  },

  'bridal-makeup-katy-tx': {
    slug: 'bridal-makeup-katy-tx',
    route: '/services/bridal-makeup-katy-tx',
    metaTitle: 'Bridal Makeup & Styling in Katy, TX | Orchid By Huma',
    metaDescription:
      'Luxury bridal makeup, Nikkah, Engagement, and Mayon beauty in Katy, Texas at Orchid By Huma. Complete packages with hair, lash, and dupatta draping.',
    h1: 'Bridal Makeup & Styling in Katy, TX',
    tagline: 'High-definition bridal glam, jewelry placement, dupatta setting, and South Asian bridal expertise.',
    category: 'Bridal & Event Makeup',
    price: '$750',
    duration: '180 min',
    image: '/src/assets/images/bridal_beauty_makeup_1791303863839.jpg',
    overview: [
      'Orchid By Huma is Katy’s premier destination for luxury bridal beauty and traditional wedding ceremonies. Specializing in high-definition airbrush bridal makeup, jewelry setting, and intricate dupatta draping, our artists ensure you look breathtaking in person and under 4K photography.',
      'We offer specialized packages for each wedding function: Complete Bridal ($750), Nikkah ($550), Engagement ($450), and Mayon with hair and dupatta setup ($350). Every detail is curated around your wedding attire, jewelry, and personal aesthetic.',
    ],
    benefits: [
      'Sweat-proof, tear-resistant, camera-ready bridal makeup lasting all day and night',
      'Includes premium faux mink eyelashes, skin prep, and contouring',
      'Expert traditional dupatta pinning, veil placement, and tikka/matha patti jewelry setting',
      'Calm, private bridal suite experience in our Katy salon',
    ],
    processSteps: [
      {
        title: 'Pre-Event Consultation',
        desc: 'Review of outfits, bridal jewelry, skin tone matching, and hair style options.',
      },
      {
        title: 'Complexion & Eye Artistry',
        desc: 'Skin barrier priming, airbrush foundation, dimensional contouring, and smokey or soft-glam eye design.',
      },
      {
        title: 'Hair & Dupatta Setting',
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
      { title: 'Party Makeup', route: '/services?category=makeup', price: '$250' },
      { title: 'Hairstyles & Updos', route: '/services?category=hair-styling', price: '$55 & up' },
      { title: 'HydraFacial Glow', route: '/services/hydrafacial-katy-tx', price: '$110' },
    ],
  },

  'brazilian-wax-katy-tx': {
    slug: 'brazilian-wax-katy-tx',
    route: '/services/brazilian-wax-katy-tx',
    metaTitle: 'Brazilian Waxing & Full Body in Katy, TX | Orchid By Huma',
    metaDescription:
      'Hygienic Brazilian waxing ($50) and full body waxing ($120) in Katy, Texas at Orchid By Huma. Gentle botanical wax, experienced aestheticians, private suites.',
    h1: 'Brazilian Waxing & Body Waxing in Katy, TX',
    tagline: 'Gentle, fast, and hygienic waxing rituals in private sanitary treatment rooms.',
    category: 'Waxing & Body Treatments',
    price: '$50',
    duration: '30 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'At Orchid By Huma, client comfort, strict sanitation, and meticulous technique are our highest priorities. Our Brazilian waxing service in Katy ($50) uses temperature-controlled gentle wax designed for sensitive intimate skin, removing hair from the root with minimal discomfort.',
      'We also provide full-body waxing packages with Brazilian ($120), full-body without Brazilian ($80), individual arm and leg waxing, and soothing post-wax treatment masks and scrubs to keep skin bump-free and silky.',
    ],
    benefits: [
      'Discreet, professional certified aestheticians with 10+ years experience',
      'Strict zero-double-dipping hygiene protocol and disposable sanitary table linens',
      'High-grade gentle stripless wax that adheres to hair rather than skin',
      'Smooth, hair-free skin lasting 3 to 5 weeks',
    ],
    processSteps: [
      {
        title: 'Skin Preparation',
        desc: 'Cleansing and soothing pre-wax oil application to protect delicate skin.',
      },
      {
        title: 'Precision Wax Removal',
        desc: 'Speedy, small-section wax removal performed with gentle pressure to minimize sensation.',
      },
      {
        title: 'Calming After-Care',
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
      { title: 'Full Body Wax with Brazilian', route: '/services?category=waxing', price: '$120' },
      { title: 'Vaginal Mask Soothing Add-On', route: '/services?category=waxing', price: '$15' },
      { title: 'Full Legs Wax', route: '/services?category=waxing', price: '$40' },
    ],
  },

  'lash-lift-katy-tx': {
    slug: 'lash-lift-katy-tx',
    route: '/services/lash-lift-katy-tx',
    metaTitle: 'Lash Lift & Brow Lamination in Katy, TX | Orchid By Huma',
    metaDescription:
      'Lash lift and tint ($60) and brow lamination ($70) in Katy, Texas at Orchid By Huma. Wake up with perfectly curled lashes and fluffy, defined brows.',
    h1: 'Lash Lift & Brow Lamination in Katy, TX',
    tagline: 'Semi-permanent lash curl, deep black tint, and fluffy feathered brow lamination lasting 6–8 weeks.',
    category: 'Tint & Lamination',
    price: '$60 / $70',
    duration: '50–60 min',
    image: '/src/assets/images/bridal_beauty_makeup_1791303863839.jpg',
    overview: [
      'Elevate your daily beauty routine with our signature Lash Lift & Tint ($60) and Eyebrow Lamination ($70) at Orchid By Huma in Katy, Texas. A lash lift gently elevates your natural eyelashes from the root using silicone curling shields, followed by a rich deep black tint that mimics mascara without any clumping.',
      'Brow lamination softens the brow hair structure, allowing our stylists to position each hair in an upward, brushed-up shape that covers sparse gaps and creates full, feathery editorial brows.',
    ],
    benefits: [
      'Zero daily mascara or eyelash curler required for 6 to 8 weeks',
      'Enhances natural lashes without the maintenance or weight of extensions',
      'Full, defined feathered brows that stay groomed with a simple morning brush',
      'Gentle keratin-infused conditioning serums that strengthen hair follicles',
    ],
    processSteps: [
      {
        title: 'Shield Placement & Shaping',
        desc: 'Custom silicone shield selected to match your eye shape and desired lash lift curve.',
      },
      {
        title: 'Gentle Lifting Solution',
        desc: 'Nourishing lift lotion breaks and resets the hair disulfide bonds into the curved position.',
      },
      {
        title: 'Intense Tint & Keratin Infusion',
        desc: 'Deep black tint applied, followed by a nourishing keratin conditioning glaze.',
      },
    ],
    faqs: [
      {
        question: 'How long does a lash lift and tint last?',
        answer: 'A lash lift and tint lasts between 6 and 8 weeks, following the natural shed cycle of your eyelashes.',
      },
      {
        question: 'Can I wear mascara after a lash lift?',
        answer: 'You can wear mascara after the initial 24-hour setting window, although most clients find they no longer need mascara!',
      },
    ],
    relatedServices: [
      { title: 'Eyebrow Threading', route: '/services?category=threading', price: '$10' },
      { title: 'Full Face Threading', route: '/services?category=threading', price: '$40' },
      { title: 'Eyebrow Tint', route: '/services?category=tint-lamination', price: '$20' },
    ],
  },

  'facials-katy-tx': {
    slug: 'facials-katy-tx',
    route: '/services/facials-katy-tx',
    metaTitle: 'Facials & Skincare Spa in Katy, TX | Orchid By Huma',
    metaDescription:
      'Custom facial treatments in Katy, Texas at Orchid By Huma starting at $55. Basic, brightening, acne, hydrating, and microdermabrasion facials.',
    h1: 'Custom Facial Spa Treatments in Katy, TX',
    tagline: 'Personalized clinical and botanical facials designed for acne, brightening, anti-aging, and deep hydration.',
    category: 'Facials & Skincare',
    price: '$55–$110',
    duration: '45–60 min',
    image: '/src/assets/images/facial_skincare_treatment_1791303841283.jpg',
    overview: [
      'At Orchid By Huma in Katy, Texas, our facial therapies are personalized to your exact skin type and lifestyle needs. Beginning with a skin analysis, our licensed aestheticians blend steam exfoliation, gentle extractions, custom massage, and therapeutic masks.',
      'Our comprehensive menu features Basic Facials ($55), Brightening Facials ($60), Acne Purifying Facials ($65), Deep Hydrating & Calming Facials ($75), Microdermabrasion ($80), Back Facials ($55), and the signature HydraFacial ($110).',
    ],
    benefits: [
      'Comprehensive variety of 11+ targeted facial treatments tailored to your skin',
      'Targeted relief for stubborn acne, blackheads, hormonal congestion, and enlarged pores',
      'Vitamin C and botanical brightening for sun damage and melasma',
      'Calming restorative masks for sensitive, rosacea-prone skin',
    ],
    processSteps: [
      {
        title: 'Skin Consultation & Cleansing',
        desc: 'Double cleansing removes impurities and assesses skin hydration and texture.',
      },
      {
        title: 'Exfoliation & Extraction',
        desc: 'Steam exfoliation and gentle manual or diamond-tip suction clears congested pores.',
      },
      {
        title: 'Customized Mask & Massage',
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
      { title: 'HydraFacial Clinical Treatment', route: '/services/hydrafacial-katy-tx', price: '$110' },
      { title: 'Microdermabrasion Facial', route: '/services?category=facials', price: '$80' },
      { title: 'Red Light Therapy Add-On', route: '/services?category=facials', price: '$10' },
    ],
  },
};
