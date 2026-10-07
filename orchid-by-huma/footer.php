<?php
/**
 * Orchid by Huma - Footer Template
 *
 * @package Orchid_By_Huma
 */
?>
</main><!-- #primary-content -->

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h3 class="font-serif" style="color: #FFF; font-size: 1.5rem; margin-bottom: 0.5rem;">
          Orchid By Huma
        </h3>
        <p class="kicker kicker-light" style="margin-bottom: 0.75rem;">
          Luxury Beauty Salon, Spa &amp; Aesthetics
        </p>
        <p>
          Dedicated to bespoke beauty care, rejuvenating skincare rituals, and precision hair artistry in Katy, Texas. Proudly serving generations of clients with more than a decade of trusted experience.
        </p>
        <p style="margin-top: 1rem; color: var(--orchid-gold-light); font-size: 0.8rem; font-weight: 600;">
          <?php echo esc_html(orchid_business_info('rating')); ?> · Verified Katy Guests
        </p>
      </div>

      <div class="footer-col">
        <h4><?php esc_html_e('Explore', 'orchid-by-huma'); ?></h4>
        <ul>
          <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'orchid-by-huma'); ?></a></li>
          <li><a href="<?php echo esc_url(home_url('/about/')); ?>"><?php esc_html_e('About Orchid', 'orchid-by-huma'); ?></a></li>
          <li><a href="<?php echo esc_url(home_url('/services/')); ?>"><?php esc_html_e('All Services & Pricing', 'orchid-by-huma'); ?></a></li>
          <li><a href="<?php echo esc_url(home_url('/gallery/')); ?>"><?php esc_html_e('Salon Gallery', 'orchid-by-huma'); ?></a></li>
          <li><a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Location & Hours', 'orchid-by-huma'); ?></a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4><?php esc_html_e('Treatments', 'orchid-by-huma'); ?></h4>
        <ul>
          <li><a href="<?php echo esc_url(home_url('/services/#facials')); ?>">HydraFacial Clinical Care ($110)</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/#hair-color')); ?>">Balayage &amp; Highlights ($130–$240+)</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/#hair-styling')); ?>">Voluminous Blowouts &amp; Brazilian</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/#bridal')); ?>">Luxury Bridal Glam ($750)</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/#waxing')); ?>">Sanitary Brazilian Waxing ($50)</a></li>
          <li><a href="<?php echo esc_url(home_url('/services/#threading')); ?>">Eyebrow Threading ($10)</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4><?php esc_html_e('Visit Our Sanctuary', 'orchid-by-huma'); ?></h4>
        <p>
          <strong><?php echo esc_html(orchid_business_info('address')); ?></strong><br>
          Direct: <a href="tel:<?php echo esc_attr(orchid_business_info('phone_raw')); ?>"><?php echo esc_html(orchid_business_info('phone_display')); ?></a><br>
          Alt: <a href="tel:+17139334009"><?php echo esc_html(orchid_business_info('alt_phone')); ?></a><br>
          Email: <a href="mailto:<?php echo esc_attr(orchid_business_info('email')); ?>"><?php echo esc_html(orchid_business_info('email')); ?></a>
        </p>
        <p style="margin-top: 0.75rem;">
          <?php echo esc_html(orchid_business_info('hours_week')); ?><br>
          <?php echo esc_html(orchid_business_info('hours_sun')); ?>
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <div>
        © <?php echo esc_html(gmdate('Y')); ?> Orchid by Huma. All rights reserved. Katy, Texas 77450.
      </div>
      <div style="display: flex; gap: 1.5rem;">
        <a href="https://maps.google.com/?q=Orchid+By+Huma+1105+S+Mason+Rd+Katy+TX+77450" target="_blank" rel="noopener noreferrer">
          Get Driving Directions ↗
        </a>
        <a href="<?php echo esc_url(orchid_business_info('instagram')); ?>" target="_blank" rel="noopener noreferrer">
          Instagram ↗
        </a>
      </div>
    </div>
  </div>
</footer>

<!-- Lightbox Modal for Authentic Photos -->
<div id="orchidLightbox" class="orchid-lightbox" role="dialog" aria-modal="true" aria-label="<?php esc_attr_e('Image Lightbox', 'orchid-by-huma'); ?>">
  <button id="orchidLightboxClose" class="orchid-lightbox-close" aria-label="<?php esc_attr_e('Close Lightbox', 'orchid-by-huma'); ?>">&times;</button>
  <div class="orchid-lightbox-content">
    <img id="orchidLightboxImg" class="orchid-lightbox-img" src="" alt="" />
    <div id="orchidLightboxCaption" class="orchid-lightbox-caption"></div>
  </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
