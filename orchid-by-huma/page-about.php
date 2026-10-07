<?php
/**
 * Template Name: About Page
 *
 * @package Orchid_By_Huma
 */

get_header();
?>

<div class="container" style="padding-top: 4rem; padding-bottom: 2rem;">
  <span class="kicker">About Orchid by Huma</span>
  <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem;">
    Our Story, Craft &amp; Katy Sanctuary
  </h1>
  <p style="color: var(--orchid-text-muted); max-width: 640px; font-size: 1.05rem;">
    Discover more than 10 years of personalized beauty, clinical skincare, master hair artistry, and spa relaxation in Katy, Texas.
  </p>
</div>

<!-- Story Section with Image 2 (Salon Interior) -->
<section class="section-editorial">
  <div class="container">
    <div class="editorial-grid">
      <div class="editorial-media">
        <?php
        echo orchid_render_image(
            'salon-interior-hair.jpg',
            'Orchid by Huma salon interior in Katy Texas',
            'editorial-img',
            ['loading' => 'eager', 'width' => 1000, 'height' => 1250]
        );
        ?>
        <div class="editorial-badge">
          <div class="editorial-badge-number">10+</div>
          <span class="editorial-badge-label">Years of Dedication</span>
        </div>
      </div>

      <div class="editorial-story">
        <span class="kicker">Our Heritage</span>
        <h2>A Sanctuary on South Mason Road</h2>
        <p>
          Founded on a simple yet enduring premise, <strong>Orchid by Huma</strong> was established to provide Katy residents with a serene retreat where high-touch luxury and genuine warmth coexist. For more than 10 years, our team has refined every aspect of the guest experience—from one-on-one consultations to the delicate finishing details of every service.
        </p>
        <p>
          Nestled conveniently at 1105 S Mason Rd, our salon and spa was envisioned not as a rushed assembly line, but as an intimate studio where clients feel heard, respected, and revitalized. We take tremendous pride in the relationships we have built with generations of women, men, and brides across Katy, Cinco Ranch, Grand Lakes, and West Houston.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Reception & Welcome Showcase with Image 3 (Orchid Reception Area) -->
<section class="section-editorial" style="background-color: var(--orchid-sand);">
  <div class="container">
    <div class="editorial-grid" style="direction: rtl;">
      <div class="editorial-media" style="direction: ltr;">
        <?php
        echo orchid_render_image(
            'orchid-reception-salon.jpg',
            'Orchid by Huma beauty salon interior in Katy Texas',
            'editorial-img',
            ['loading' => 'lazy', 'width' => 1000, 'height' => 1250]
        );
        ?>
      </div>

      <div class="editorial-story" style="direction: ltr;">
        <span class="kicker">The Salon Experience</span>
        <h2>A Warm, Welcoming Environment</h2>
        <p>
          From the moment you step through our doors, our priority is your absolute comfort. Our salon features dedicated consultation stations, private skincare suites, state-of-the-art hair steamers, and professional styling chairs designed for relaxation.
        </p>
        <p>
          We adhere to strict Texas cosmetology sanitation protocols: every implement is individually sanitized, treatment areas are spotless, and all skincare formulas are salon-grade and botanical.
        </p>
        <div style="margin-top: 1.5rem;">
          <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
            <span>Schedule an Appointment</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();
