<?php
/**
 * Template Name: Services Page
 *
 * @package Orchid_By_Huma
 */

get_header();
?>

<div class="container" style="padding-top: 4rem; padding-bottom: 2rem;">
  <span class="kicker">Comprehensive Menu</span>
  <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem;">
    Salon, Spa &amp; Aesthetic Services
  </h1>
  <p style="color: var(--orchid-text-muted); max-width: 640px; font-size: 1.05rem;">
    Explore our complete treatment directory with transparent Katy pricing, dedicated consultations, and licensed technicians.
  </p>
</div>

<!-- SECTION 1: HAIR SERVICES (FEATURING IMAGE 2 & IMAGE 4) -->
<section id="hair" class="section-editorial" style="background-color: var(--orchid-sand);">
  <div class="container">
    <div class="editorial-grid">
      <div class="editorial-media">
        <?php
        echo orchid_render_image(
            'hair-wash-styling.jpg',
            'Orchid by Huma hair wash and styling area in Katy Texas',
            'editorial-img',
            ['loading' => 'lazy', 'width' => 1000, 'height' => 1250]
        );
        ?>
        <div class="editorial-badge">
          <span class="editorial-badge-label">Hair Wash &amp; Styling Station</span>
        </div>
      </div>

      <div class="editorial-story">
        <span class="kicker">Hair Care &amp; Artistry</span>
        <h2>Haircut, Color &amp; Keratin Treatments</h2>
        <p>
          Our master stylists and colorists specialize in bespoke haircuts, dimensional foil highlights, and hand-painted balayage that grow out seamlessly. Every appointment includes scalp cleansing in our ergonomic shampoo station.
        </p>

        <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Precision Haircut &amp; Consultation</strong>
            <span class="text-gold" style="font-weight: 600;">$40 &amp; up</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Balayage Hand-Painted Color Melt</strong>
            <span class="text-gold" style="font-weight: 600;">$240 &amp; up</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Full Foil Highlights &amp; Gloss Toner</strong>
            <span class="text-gold" style="font-weight: 600;">$200 &amp; up</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Root Touch-Up &amp; Grey Coverage</strong>
            <span class="text-gold" style="font-weight: 600;">$60 &amp; up</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Brazilian Blowout Smoothing</strong>
            <span class="text-gold" style="font-weight: 600;">$200 &amp; up</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Voluminous Salon Blowout</strong>
            <span class="text-gold" style="font-weight: 600;">$45 &amp; up</span>
          </div>
        </div>

        <div style="margin-top: 2rem;">
          <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
            <span>Book Hair Appointment</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: SPA & FACIAL TREATMENT ROOM (FEATURING IMAGE 1) -->
<section id="spa" class="section-editorial">
  <div class="container">
    <div class="editorial-grid" style="direction: rtl;">
      <div class="editorial-media" style="direction: ltr;">
        <?php
        echo orchid_render_image(
            'spa-treatment-room.jpg',
            'Orchid by Huma spa treatment room in Katy Texas',
            'editorial-img',
            ['loading' => 'lazy', 'width' => 1000, 'height' => 1250]
        );
        ?>
        <div class="editorial-badge">
          <span class="editorial-badge-label">Private Treatment Suite</span>
        </div>
      </div>

      <div class="editorial-story" style="direction: ltr;">
        <span class="kicker">Clinical Skincare &amp; Day Spa</span>
        <h2>Facial &amp; Body Rejuvenation</h2>
        <p>
          Relax in our private, hygienic treatment suite equipped with adjustable medical-grade treatment beds, warm ambient lighting, and certified aesthetic technology.
        </p>

        <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>HydraFacial Clinical Treatment</strong>
            <span class="text-gold" style="font-weight: 600;">$110</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Microdermabrasion Facial</strong>
            <span class="text-gold" style="font-weight: 600;">$80</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Acne Purifying Facial</strong>
            <span class="text-gold" style="font-weight: 600;">$65</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Basic Custom Facial</strong>
            <span class="text-gold" style="font-weight: 600;">$55</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Hot Oil Massage (60 min)</strong>
            <span class="text-gold" style="font-weight: 600;">$70</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--orchid-border); padding-bottom: 0.5rem; font-size: 0.9rem;">
            <strong>Botanical Body Scrub &amp; Polish</strong>
            <span class="text-gold" style="font-weight: 600;">$65</span>
          </div>
        </div>

        <div style="margin-top: 2rem;">
          <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
            <span>Book Spa Treatment</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();
