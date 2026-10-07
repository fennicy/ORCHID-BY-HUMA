<?php
/**
 * Orchid by Huma - Front Page Template
 *
 * @package Orchid_By_Huma
 */

get_header();
?>

<!-- =========================================================================
     HERO SECTION — AUTHENTIC SALON INTERIOR (IMAGE 2)
     ========================================================================= -->
<section class="hero-section">
  <div class="hero-media-wrapper">
    <?php
    echo orchid_render_image(
        'salon-interior-hair.jpg',
        'Orchid by Huma salon interior in Katy Texas',
        'hero-img',
        [
            'fetchpriority' => 'high',
            'loading'       => 'eager',
            'width'         => 1920,
            'height'        => 1080,
        ]
    );
    ?>
    <div class="hero-scrim"></div>
  </div>

  <div class="container">
    <div class="hero-content">
      <span class="kicker kicker-light">
        10+ Years of Artistry · Katy, TX
      </span>
      <h1 class="hero-title">
        ORCHID BY HUMA<br>
        <span class="text-gold-light" style="font-size: 0.7em; font-weight: 300;">Premium Salon &amp; Spa</span><br>
        <span style="font-size: 0.55em; letter-spacing: 0.05em; font-weight: 300; color: #E8E0D5;">Katy, Texas</span>
      </h1>
      <p class="hero-desc">
        Experience authentic beauty artistry, custom balayage, clinical HydraFacials, luxury bridal glam, and restorative spa therapies in our serene Katy sanctuary.
      </p>

      <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
        <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
          <span><?php esc_html_e('Book Appointment', 'orchid-by-huma'); ?></span>
        </a>
        <a href="tel:<?php echo esc_attr(orchid_business_info('phone_raw')); ?>" class="btn btn-outline">
          <span><?php esc_html_e('Call Now · (281) 206-0151', 'orchid-by-huma'); ?></span>
        </a>
      </div>

      <div class="hero-meta">
        <div>
          <span style="color: var(--orchid-gold-light); font-weight: 600;">
            <?php echo esc_html(orchid_business_info('rating')); ?>
          </span>
          <span>· Verified Google Reviews</span>
        </div>
        <div>
          <span>1105 S Mason Rd, Katy, TX 77450</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- =========================================================================
     ABOUT SECTION — EDITORIAL SPLIT: IMAGE | STORY (IMAGE 3)
     ========================================================================= -->
<section class="section-editorial">
  <div class="container">
    <div class="editorial-grid">
      <!-- Media Column with Image 3 (Reception / Promotional Area) -->
      <div class="editorial-media">
        <?php
        echo orchid_render_image(
            'orchid-reception-salon.jpg',
            'Orchid by Huma beauty salon interior in Katy Texas',
            'editorial-img',
            [
                'loading' => 'lazy',
                'width'   => 1000,
                'height'  => 1250,
            ]
        );
        ?>
        <div class="editorial-badge">
          <div class="editorial-badge-number">10+</div>
          <span class="editorial-badge-label">Years of Dedication in Katy, TX</span>
        </div>
      </div>

      <!-- Story Column -->
      <div class="editorial-story">
        <span class="kicker">About Orchid by Huma</span>
        <h2>Experience Authentic Beauty, Relaxation &amp; Care</h2>
        <p>
          At <strong>Orchid by Huma</strong>, we believe genuine beauty care begins with authentic listening. For more than 10 years, our salon and spa on South Mason Road has served as an intimate sanctuary where clients feel heard, respected, and revitalized.
        </p>
        <p>
          Unlike rushed assembly-line salons, our licensed technicians and master stylists evaluate your facial contours, hair texture, and skin condition before formulating custom treatments. From non-invasive vortex HydraFacials and organic threading to dimensional balayage and lavish bridal transformations, every session is delivered with meticulous sanitation and unhurried hospitality.
        </p>
        <div style="margin-top: 2rem; display: flex; flex-wrap: gap; gap: 1rem;">
          <a href="<?php echo esc_url(home_url('/about/')); ?>" class="btn btn-dark">
            <span>Read Our Full Story</span>
          </a>
          <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
            <span>Reserve a Visit</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- =========================================================================
     CORE SERVICES WITH AUTHENTIC SUPPORTING IMAGERY (IMAGES 1, 2, 4)
     ========================================================================= -->
<section class="services-section">
  <div class="container">
    <div class="section-header">
      <span class="kicker">Core Specializations</span>
      <h2>Three Pillars of Beauty &amp; Wellness</h2>
      <p>
        Tailored departments designed around our real salon spaces and expert technicians.
      </p>
    </div>

    <div class="services-grid">
      <!-- Pillar 1: Hair Artistry (Supported by Image 4 - Shampoo & Styling Area) -->
      <div class="service-card">
        <div class="service-card-media">
          <?php
          echo orchid_render_image(
              'hair-wash-styling.jpg',
              'Orchid by Huma hair wash and styling area in Katy Texas',
              'service-card-img',
              ['loading' => 'lazy', 'width' => 800, 'height' => 500]
          );
          ?>
        </div>
        <div class="service-card-body">
          <span class="kicker">Hair Care &amp; Artistry</span>
          <h3>Hair Styling &amp; Color Studio</h3>
          <p>
            Precision haircutting, bespoke hand-painted balayage, dimensional foil highlights, smoothing Brazilian Blowouts, and therapeutic hair wash and scalp treatments.
          </p>
          <div class="service-card-meta">
            <span>Cuts $40+ · Balayage $240+</span>
            <a href="<?php echo esc_url(home_url('/services/')); ?>">Explore Menu &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Pillar 2: Skin Health & Spa (Supported by Image 1 - Spa Treatment Room) -->
      <div class="service-card">
        <div class="service-card-media">
          <?php
          echo orchid_render_image(
              'spa-treatment-room.jpg',
              'Orchid by Huma spa treatment room in Katy Texas',
              'service-card-img',
              ['loading' => 'lazy', 'width' => 800, 'height' => 500]
          );
          ?>
        </div>
        <div class="service-card-body">
          <span class="kicker">Skin Health &amp; Spa</span>
          <h3>Spa &amp; Treatment Sanctuary</h3>
          <p>
            Patented vortex HydraFacials ($110), diamond-tip microdermabrasion, acne clearing facials, body polishing scrubs, and heated botanical oil massage rituals.
          </p>
          <div class="service-card-meta">
            <span>Facials $55+ · HydraFacial $110</span>
            <a href="<?php echo esc_url(home_url('/services/')); ?>">Explore Menu &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Pillar 3: Salon Experience & Glam (Supported by Image 2 - Salon Interior) -->
      <div class="service-card">
        <div class="service-card-media">
          <?php
          echo orchid_render_image(
              'salon-interior-hair.jpg',
              'Orchid by Huma salon interior in Katy Texas',
              'service-card-img',
              ['loading' => 'lazy', 'width' => 800, 'height' => 500]
          );
          ?>
        </div>
        <div class="service-card-body">
          <span class="kicker">Aesthetics &amp; Glam</span>
          <h3>Bridal &amp; Aesthetic Studio</h3>
          <p>
            High-definition airbrush bridal beauty ($750), traditional dupatta pinning, gentle hygienic Brazilian waxing ($50), organic threading ($10), and lash lift enhancements.
          </p>
          <div class="service-card-meta">
            <span>Threading $10 · Bridal $750</span>
            <a href="<?php echo esc_url(home_url('/services/')); ?>">Explore Menu &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- =========================================================================
     AUTHENTIC PHOTO GALLERY (ALL 4 AUTHENTIC REAL BUSINESS PHOTOGRAPHS)
     ========================================================================= -->
<section class="gallery-section">
  <div class="container">
    <div class="section-header">
      <span class="kicker">Real Salon Spaces</span>
      <h2>Authentic Orchid Gallery</h2>
      <p>
        Explore the actual interior spaces of our Katy salon and spa sanctuary. Click any photograph to view in high resolution.
      </p>
    </div>

    <div class="gallery-grid">
      <!-- Photo 1: Spa Treatment Room -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('spa-treatment-room.jpg')); ?>"
           data-caption="Orchid by Huma spa treatment room in Katy Texas">
        <?php
        echo orchid_render_image(
            'spa-treatment-room.jpg',
            'Orchid by Huma spa treatment room in Katy Texas',
            '',
            ['loading' => 'lazy', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Treatment Room</span>
          <h3 class="gallery-overlay-title">Spa &amp; Facial Bed</h3>
        </div>
      </div>

      <!-- Photo 2: Salon Interior / Hair Area -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('salon-interior-hair.jpg')); ?>"
           data-caption="Orchid by Huma salon interior in Katy Texas">
        <?php
        echo orchid_render_image(
            'salon-interior-hair.jpg',
            'Orchid by Huma salon interior in Katy Texas',
            '',
            ['loading' => 'lazy', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Styling Studio</span>
          <h3 class="gallery-overlay-title">Salon Interior &amp; Hair Area</h3>
        </div>
      </div>

      <!-- Photo 3: Reception & Salon Area -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('orchid-reception-salon.jpg')); ?>"
           data-caption="Orchid by Huma beauty salon interior in Katy Texas">
        <?php
        echo orchid_render_image(
            'orchid-reception-salon.jpg',
            'Orchid by Huma beauty salon interior in Katy Texas',
            '',
            ['loading' => 'lazy', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Reception &amp; Welcome</span>
          <h3 class="gallery-overlay-title">Orchid Salon Sanctuary</h3>
        </div>
      </div>

      <!-- Photo 4: Hair Wash & Styling Area -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('hair-wash-styling.jpg')); ?>"
           data-caption="Orchid by Huma hair wash and styling area in Katy Texas">
        <?php
        echo orchid_render_image(
            'hair-wash-styling.jpg',
            'Orchid by Huma hair wash and styling area in Katy Texas',
            '',
            ['loading' => 'lazy', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Hair Spa Station</span>
          <h3 class="gallery-overlay-title">Shampoo Basin &amp; Styling Area</h3>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- =========================================================================
     LOCATION & APPOINTMENT CONVERSION STRIP
     ========================================================================= -->
<section class="showcase-strip">
  <div class="container">
    <div class="showcase-grid">
      <div>
        <span class="kicker kicker-light">Visit Orchid in Katy, TX</span>
        <h2 style="font-size: 2.25rem; margin-bottom: 1rem; color: #FFFFFF;">
          Ready to Elevate Your Ritual?
        </h2>
        <p style="color: #D6D0C7; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
          Conveniently located at <strong>1105 S Mason Rd, Katy, TX 77450</strong>. Book online or call our desk directly to secure your preferred stylist, aesthetician, or bridal team.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
          <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
            <span>Book Appointment</span>
          </a>
          <a href="tel:<?php echo esc_attr(orchid_business_info('phone_raw')); ?>" class="btn btn-outline">
            <span>Call (281) 206-0151</span>
          </a>
        </div>
      </div>

      <div style="border: 1px solid #332D27; padding: 2rem; background-color: #1F1C19;">
        <h3 class="font-serif" style="color: var(--orchid-gold-light); font-size: 1.5rem; margin-bottom: 1rem;">
          Salon Hours &amp; Location
        </h3>
        <p style="font-size: 0.85rem; line-height: 1.8; color: #D6D0C7;">
          <strong>Address:</strong> 1105 S Mason Rd, Katy, TX 77450<br>
          <strong>Telephone:</strong> (281) 206-0151 / (713) 933-4009<br>
          <strong>Mon–Sat:</strong> 10:00 AM – 6:30 PM<br>
          <strong>Sunday:</strong> 12:00 PM – 5:00 PM<br>
          <strong>Serving:</strong> Cinco Ranch, Grand Lakes, Elyson, and Greater Katy
        </p>
        <div style="margin-top: 1.5rem;">
          <a href="https://maps.google.com/?q=Orchid+By+Huma+1105+S+Mason+Rd+Katy+TX+77450" target="_blank" rel="noopener noreferrer" style="color: var(--orchid-gold-light); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
            Open Google Maps Directions &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();
