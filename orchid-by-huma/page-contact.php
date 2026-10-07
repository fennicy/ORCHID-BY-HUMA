<?php
/**
 * Template Name: Contact Page
 *
 * @package Orchid_By_Huma
 */

get_header();
?>

<div class="container" style="padding-top: 4rem; padding-bottom: 2rem;">
  <span class="kicker">Get In Touch</span>
  <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem;">
    Visit Orchid by Huma in Katy, Texas
  </h1>
  <p style="color: var(--orchid-text-muted); max-width: 640px; font-size: 1.05rem;">
    Located conveniently on South Mason Road. Book an appointment or call our reception team for inquiries.
  </p>
</div>

<section class="section-editorial">
  <div class="container">
    <div class="editorial-grid">
      <div class="editorial-media">
        <?php
        echo orchid_render_image(
            'orchid-reception-salon.jpg',
            'Orchid by Huma beauty salon interior in Katy Texas',
            'editorial-img',
            ['loading' => 'eager', 'width' => 1000, 'height' => 1250]
        );
        ?>
        <div class="editorial-badge">
          <span class="editorial-badge-label">1105 S Mason Rd, Katy, TX</span>
        </div>
      </div>

      <div class="editorial-story">
        <span class="kicker">Direct Contact &amp; Hours</span>
        <h2>Salon Contact &amp; Appointments</h2>
        <p style="font-size: 1.05rem; line-height: 1.8; color: #332F2A;">
          <strong>Address:</strong> 1105 S Mason Rd, Katy, TX 77450<br>
          <strong>Primary Phone:</strong> <a href="tel:<?php echo esc_attr(orchid_business_info('phone_raw')); ?>"><?php echo esc_html(orchid_business_info('phone_display')); ?></a><br>
          <strong>Secondary Phone:</strong> <a href="tel:+17139334009">(713) 933-4009</a><br>
          <strong>Email:</strong> <a href="mailto:<?php echo esc_attr(orchid_business_info('email')); ?>"><?php echo esc_html(orchid_business_info('email')); ?></a>
        </p>

        <h3 class="font-serif" style="margin-top: 2rem; margin-bottom: 0.5rem; font-size: 1.5rem;">
          Operating Hours
        </h3>
        <p style="color: #4A443E;">
          <strong>Monday – Saturday:</strong> 10:00 AM – 6:30 PM<br>
          <strong>Sunday:</strong> 12:00 PM – 5:00 PM
        </p>

        <div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem;">
          <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
            <span>Book Online</span>
          </a>
          <a href="https://maps.google.com/?q=Orchid+By+Huma+1105+S+Mason+Rd+Katy+TX+77450" target="_blank" rel="noopener noreferrer" class="btn btn-dark">
            <span>Open in Google Maps &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();
